#!/usr/bin/env node

out = 'public/js/app.js';

var uglify = require('uglify-js'),
    env = require('./env').env,
    fs = require('fs');

env.findAsset('app.js').compile(function(err, asset) {
  toplevel_ast = uglify.parse(asset.toString());
  toplevel_ast.figure_out_scope();
  toplevel_ast.compute_char_frequency();
  toplevel_ast.mangle_names();

  fs.writeFile(out, toplevel_ast.print_to_string());
  console.log('\u001b[32m -- Source Compiled! --> \u001b[0m['+out+']');
});
