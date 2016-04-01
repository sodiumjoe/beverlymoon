import _ from 'lodash';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { compileFile } from 'jade';
import { writeFile } from 'fs';
import { sync } from 'mkdirp';

const compiler = compileFile(`${__dirname}/../server/index.jade`, { pretty: false });

export default ({
  paths,
  routes,
  config
}, cb) => {
  try {
    _.each(paths, location => {
      match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) { throw new Error(err); }
        const app = renderToString(<RouterContext {...renderProps} />);
        const html = compiler(_.assign({ app }, config.prod.urls));
        const path = location === '/' ? '/index.html' : `${location}.html`;
        const filePath = `${__dirname}/../../public${path}`;
        const dir = filePath.split('/').slice(0, -1).join('/');
        sync(dir);
        writeFile(filePath, html, err => {
          if (err) { throw new Error(err); }
        });
      });
    });
    cb();
  } catch(e) {
    cb(e);
  }
};
