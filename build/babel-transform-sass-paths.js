const { join, dirname, relative } = require('path');
const wrapListener = require('babel-plugin-detective/wrap-listener');

function listener(path, file) {
  if (path.isLiteral() && (path.node.value.endsWith('.sass') || path.node.value.endsWith('.scss'))) {
    const from = dirname(relative(file.opts.cwd, file.opts.filename)).replace(/\\/g, '/');
    const to = from.replace(from.split('/')[0], 'src');
    path.node.value = join(relative(from, to), path.node.value).replace(/\\/g, '/');
  }
}

module.exports = wrapListener(listener, 'transform-sass-paths');
