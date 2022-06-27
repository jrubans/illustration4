let mix = require('laravel-mix');
let frontend = require('./webpack_tasks/frontend.js');
require('laravel-mix-clean-css');

let productionSourceMaps = false;

let assetPath = 'src/assets';
let publicPath = 'dist/assets';

let sassSource = assetPath + '/scss/';
let imagesSource = assetPath + '/img/';
let svgSource = assetPath + '/svg/';

mix.options({
  uglify: {
    uglifyOptions: {
      mangle: {
        keep_fnames: true,
      }
    }
  }
});

mix.setPublicPath('dist/assets')
  .sass(sassSource + '/style.scss', publicPath + '/css')
  .options({
    processCssUrls: false,
}).cleanCss({
  level: 2,
  format: 'beautify'
});

mix.copyDirectory('src/php/', 'dist/')
  //.copyDirectory(imagesSource, publicPath + '/img')
  .copyDirectory(svgSource, publicPath + '/svg');


mix.browserSync({
  proxy: process.env.APP_URL,
  open: false,
  minify: false,
  files: [
    'dist/assets/css/*.css',
    'dist/*.+(html|php)',
  ]
});



mix.webpackConfig({
  plugins: [
    frontend.styleLint(sassSource),
  ]
});


Mix.manifest.refresh = _ => void 0
