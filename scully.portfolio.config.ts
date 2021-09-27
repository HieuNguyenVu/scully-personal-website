import { ScullyConfig, setPluginConfig, } from '@scullyio/scully';

// import 'prismjs/components/prism-yaml.js';
// import 'prismjs/components/prism-javascript.js';
// import 'prismjs/components/prism-scss.js';
// import 'prismjs/components/prism-typescript.js';
// import 'prismjs/components/prism-json.js';

setPluginConfig('md', { enableSyntaxHighlighting : true});  

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};