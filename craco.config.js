/* craco.config.js */
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const {when, whenProd} = require('@craco/craco')
const path = require('path')
const CracoLessPlugin = require('craco-less')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

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
    plugins: [
      // 查看进度
      new SimpleProgressWebpackPlugin(),
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
  //抽离公用模块
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
          priority: 90,
          enforce: true
        }
      }
    }
  },
  devServer: {
    port: 8080
  }
}