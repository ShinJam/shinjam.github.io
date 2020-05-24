const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
 
 
(async () => {
    const files = await imagemin(['_assets/img/*.{jpg,png}'], {
        destination: 'public/static/images',
        plugins: [
            imageminMozjpeg({
                quality: 70
            }),
            imageminOptipng({
                optimizationLevel: 6
            })
        ]
    });
 
    console.log(`image optimize complete`);
})();