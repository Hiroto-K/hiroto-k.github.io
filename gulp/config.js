const minimist = require("minimist");
const options = minimist(process.argv.slice(2));
const isProduction = options.env === 'production';

config = {
    console_options: options,
    isProduction: isProduction,

    src: {
        vue: "./src/js/app.js",
        scss: "./src/scss/**/*.scss",
        fonts: [
            "./node_modules/bootstrap-sass/assets/fonts/bootstrap/**",
            "./node_modules/font-awesome/fonts/**",
        ],
        lib: {
            js: [
                "./node_modules/jquery/dist/jquery.min.js",
                "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
            ]
        },
    },

    dist: {
        js: "./assets/js",
        css: "./assets/css",
        fonts: "./assets/fonts",
        vue: "app.js",
    },

    map: "./.map",

    lib: {
        js: "lib.js",
    },

    options: {
        eslint: {
            configFile: ".eslintrc.yml",
        },
    },

    plugins : require("gulp-load-plugins")(),
};

module.exports = config;