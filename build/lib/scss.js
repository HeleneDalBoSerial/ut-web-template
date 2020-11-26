/**
 * rm -rf scss
 * mkdir scss
 * cp -r src/styles/* scss
 * sed -i 's/~@\//~@ugitech\/web-template\/src\//g' scss/ugitech.scss
 */

const shell = require('shelljs');

shell.rm('-rf', './scss');
shell.mkdir('./scss');
shell.cp('-r', './src/styles/*', 'scss');
shell.sed('-i', /~@\//g, '~@ugitech/web-template/src/', './scss/ugitech.scss');
