/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    webpack (config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg')
        )

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/ // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: /url/ }, // exclude if *.svg?url
                use: ['@svgr/webpack']
            }
        )

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        return config
    }
}

module.exports = nextConfig
