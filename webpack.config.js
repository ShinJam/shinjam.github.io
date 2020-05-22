const path = require("path");

module.exports = {
    mode: "production",
    entry: "./_assets/ts/app.ts",
    node: {
        fs: "empty",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "search.min.js",
        path: path.resolve(__dirname, "assets/js"),
    },
};
