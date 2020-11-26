const shell = require('shelljs');

shell.sed('-i', /@\//g, '.', './types/index.d.ts')
