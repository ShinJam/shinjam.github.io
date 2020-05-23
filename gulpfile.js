var gulp = require("gulp");
var uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./_site/",
        },
        port: 3000,
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Clean assets
function clean() {
    return del(["./assets/"]);
}

// Optimize Images
function images() {
    return gulp
        .src("./_assets/img/**/*")
        .pipe(newer("./assets/img"))
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        {
                            removeViewBox: false,
                            collapseGroups: true,
                        },
                    ],
                }),
            ])
        )
        .pipe(gulp.dest("assets/img"));
}

// Typescript (search)
function typescript() {
    return (
        gulp
            .src(["./_assets/ts/**/*"])
            .pipe(plumber())
            .pipe(webpackstream(webpackconfig, webpack))
            // folder only, filename is specified in webpack config
            .pipe(gulp.dest("./assets/js/"))
            .pipe(browsersync.stream())
    );
}

// Javascript to minifiy
function javascript() {
    return gulp
        .src("./_assets/js/**/*.js", { sourcemaps: true })
        .pipe(
            babel({
                presets: ["@babel/env", { sourceType: "script" }],
                plugins: ["transform-remove-strict-mode"],
            })
        )
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./assets/js"))
        .pipe(browsersync.stream());
}

// css
function css() {
    return gulp
        .src("./_assets/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./assets/css/"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest("./assets/css/"))
        .pipe(browsersync.stream());
}

// Jekyll
function jekyll() {
    return cp.spawn("bundle", ["exec", "jekyll", "build"], {
        stdio: "inherit",
    });
}
// Watch files
function watchFiles() {
    gulp.watch("./_assets/scss/**/*", css);
    gulp.watch("./_assets/js/**/*", javascript);
    gulp.watch("./_assets/ts/**/*", typescript);
    gulp.watch(
        [
            "./_includes/**/*",
            "./_layouts/**/*",
            "./_pages/**/*",
            "./_posts/**/*",
            "./_projects/**/*",
        ],
        gulp.series(jekyll, browserSyncReload)
    );
    gulp.watch("./_assets/img/**/*", images);
}

// define complex tasks
const build = gulp.series(
    clean,
    gulp.parallel(css, images, javascript, typescript),
    jekyll
);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.css = css;
exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
