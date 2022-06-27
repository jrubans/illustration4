let webpack = require('webpack');
let mix = require('laravel-mix');

let StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    styleLint: function (source) {
        return new StyleLintPlugin({
            configFile: '.stylelintrc',
            files: source + '*.scss'
        })
    }
};
