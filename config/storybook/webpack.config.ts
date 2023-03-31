// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires

// @ts-ignore
module.exports = async ({ config, mode }) => {
    const paths = {
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules = [paths.src, 'node_modules']
    config.resolve?.extensions?.push('.tsx', '.ts')
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            },
            'sass-loader'
        ]
    }
    )
    return config
}
