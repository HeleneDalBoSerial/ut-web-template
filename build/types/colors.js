/**
 * echo "import './colors';\n$(cat types/index.d.ts)" > types/index.d.ts
 */

const shell = require('shelljs');

shell
  .echo("import './colors';\n" + shell.cat('./types/index.d.ts'))
  .to('./types/index.d.ts');
