/* craco.config.js */
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const {when, whenProd} = require('@craco/craco')
const path = require('path')
const CracoLessPlugin = require('craco-less')
const {addBeforeLoader, loaderByName} = require('@craco/craco')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const isBuildAnalyzer = process.env.BUILD_ANALYZER === 'true'

  
module.exports = {
  plugins:[
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          },
          sourceMap: false
        },
      },
    }
  ],
  webpack: {
    configure: (config, { env }) => {
      const svgLoader = {
        test: /\.svg$/,
        include: [pathResolve('src/components/BIcon')],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: 'fill'
                  }
                }
              ]
            }
          }
        ],
      }
      
      addBeforeLoader(config, loaderByName('file-loader'), svgLoader);

      if (env === 'production') {
        config.optimization.splitChunks = {
          cacheGroups: {
            deps: {
              test: /[\\/]node_modules[\\/]/,
              name: '__vendors__',
              chunks: 'all',
              priority: 90
            },
            commons: {
              name: '__commons__',
              chunks: 'all',
              minChunks: 2,
              priority: 80
            }
          }
        }
        config.devtool = false
      }
      
      return config
    },
    plugins: [
      ...when(
        isBuildAnalyzer, () => [
          new BundleAnalyzerPlugin({
            analyzerMode: 'static', // html 文件方式输出编译分析
            openAnalyzer: false,
            reportFilename: path.resolve(__dirname, `analyzer/index.html`)
          })
        ], []
      ),
      ...whenProd(
        () => [
          // 打压缩包
          new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
            threshold: 1024,
            minRatio: 0.8
          })
        ], []
      )
    ],
    // 别名配置
    alias: {
      '@': pathResolve('/src')
    }
  },
  devServer: {
    port: 8080
  }
}