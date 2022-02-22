"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var scully_1 = require("@scullyio/scully");
require("clipboard");
require("prismjs");
require("prismjs/plugins/toolbar/prism-toolbar");
require("prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard");
require("prismjs/components/prism-yaml");
require("prismjs/components/prism-css");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-java");
require("prismjs/components/prism-xml-doc");
require("prismjs/components/prism-json");
require("prismjs/components/prism-markup");
require("prismjs/components/prism-typescript");
var scully_plugin_sitemap_1 = require("@gammastream/scully-plugin-sitemap");
var MinifyHtml = require("scully-plugin-minify-html").MinifyHtml;
require("scully-plugin-canonical");
scully_1.setPluginConfig("md", { enableSyntaxHighlighting: true });
var SitemapPlugin = scully_plugin_sitemap_1.getSitemapPlugin();
scully_1.setPluginConfig(SitemapPlugin, {
    urlPrefix: "https://nhvu95.com",
    sitemapFilename: "sitemap.xml",
    merge: false,
    trailingSlash: false,
    changeFreq: "monthly",
    priority: ["1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0.0"],
    ignoredRoutes: [],
    routes: {
        "/blog/:slug": {
            changeFreq: "daily",
            priority: "0.9",
            sitemapFilename: "sitemap-blog.xml",
            merge: true,
        },
    },
});
exports.config = {
    projectRoot: "./src",
    projectName: "portfolio",
    distFolder: "./dist/portfolio/browser",
    outDir: "./dist/static",
    routes: {
        "/blog/:slug": {
            type: "contentFolder",
            slug: {
                folder: "./blog",
            },
            postRenderers: ["setCanonicalLinkPlugin", MinifyHtml],
        },
    },
};
