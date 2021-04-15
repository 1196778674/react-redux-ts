/* craco.config.js */
 const { when, whenDev, whenProd} = require('@craco/craco')
  const webpack = require('webpack')
  const CracoLessPlugin = require('craco-less')
  const WebpackBar = require('webpackbar')
  const CircularDependencyPlugin = require('circular-dependency-plugin')
  const FastRefreshCracoPlugin = require('craco-fast-refresh')
  const {
    BundleAnalyzerPlugin
  } = require('webpack-bundle-analyzer')
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  const DashboardPlugin = require('webpack-dashboard/plugin')
  const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
  
  const path = require('path')
  
  // 判断编译环境是否为生产
  const isBuildAnalyzer = process.env.BUILD_ANALYZER === 'true'
  
  const pathResolve = pathUrl => path.join(__dirname, pathUrl)
  
  module.exports = {
    webpack: {
      // 别名配置
      alias: {
        '@': pathResolve('/src')
      },
      plugins: [
        // webpack构建进度条
        new WebpackBar({
          profile: true
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // 查看打包的进度
        new SimpleProgressWebpackPlugin(),
        // // 新增模块循环依赖检测插件
        ...whenDev(
          () => [
            new CircularDependencyPlugin({
              exclude: /node_modules/,
              include: /src/,
              failOnError: true,
              allowAsyncCycles: false,
              cwd: process.cwd()
            }),
            // webpack-dev-server 强化插件
            new DashboardPlugin(),
            new webpack.HotModuleReplacementPlugin()
          ], []
        ),
        /**
         * 编译产物分析
         *  - https://www.npmjs.com/package/webpack-bundle-analyzer
         * 新增打包产物分析插件
         */
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
              test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
              threshold: 1024,
              minRatio: 0.8
            })
          ], []
        )
      ],
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
              chunks: 'initial',
              name: 'vendor',
              priority: 10,
              enforce: true
            }
          }
        }
      }
    },
    babel: {
      presets: [],
      plugins: [
        // AntDesign 按需加载
        ['import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }, 'antd'],
        ['@babel/plugin-proposal-decorators', {
          legacy: true
        }]
      ]
    },
    /**
     * 新增 craco 提供的 plugin
     */
    plugins: [
      // 热更新
      ...whenDev(
        () => [{
          plugin: FastRefreshCracoPlugin
        }], []
      ),
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
    devServer: {
      port: 8080
    }
  }