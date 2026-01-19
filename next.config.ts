import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
    output: "export",
    basePath: repoName,
    assetPrefix: repoName,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
