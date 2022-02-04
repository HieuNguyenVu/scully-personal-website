import { ScullyConfig, setPluginConfig } from "@scullyio/scully";
import "clipboard";
import "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-xml-doc";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
import { getSitemapPlugin } from "@gammastream/scully-plugin-sitemap";

setPluginConfig("md", { enableSyntaxHighlighting: true });

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
    urlPrefix: "https://gamma.stream",
    sitemapFilename: "sitemap.xml",
    changeFreq: "monthly",
    priority: ["1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0.0"],
    ignoredRoutes: ["/404"],
    routes: {
        "/blog/:slug": {
            changeFreq: "daily",
            priority: "0.9",
            sitemapFilename: "sitemap-blog.xml"
        },
    },
    trailingSlash: true
});

export const config: ScullyConfig = {
    projectRoot: "./src",
    projectName: "portfolio",
    outDir: "./dist/static",
    routes: {
        "/blog/:slug": {
            type: "contentFolder",
            slug: {
                folder: "./blog",
            },
        },
    },
};
