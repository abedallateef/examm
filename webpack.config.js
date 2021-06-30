const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin=require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = {
  entry:  {
    app:'./src/index.js'
  },
  
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath:'',
    filename: "main.js"
  },

  mode:"development",

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 1239,
    writeToDisk: true,
    
  },

  module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
              }
            }
          
          ]
        },

        {
            test:/\.css$/,
            use:[
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath:'../',
                  esModule: false,  
                },
              },
              'css-loader',
            ] 

        },

        {
            test:/\.(png|svg|jpe?g|gif)$/,
            use:[
              {
                loader:"file-loader",
                options:{
                  name:'[name].[ext]',
                  outputPath:"images",
                }
              }
            ]
        },

        {
          test:/\.(svg|eot|woff|woff2|ttf)$/,
          use: [
            {
              loader:"file-loader",
              options:{
                name:'[name].[ext]',
                outputPath:"fonts",
                esModule:false,
              }
            }
          ]
        },

        {
          test: require.resolve('jquery'),
          loader: 'expose-loader',
          options: {
            exposes:['$','jQuery'],
          }
        },

      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "page.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/page.html",
    }),

    new HtmlWebpackPlugin({
      filename: "contacts.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/contacts.html",
    }),

    new HtmlWebpackPlugin({
      filename: "statistics.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/statistics.html",
    }),

    new HtmlWebpackPlugin({
      filename: "a.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/a.html",
    }),

    new HtmlWebpackPlugin({
      filename: "b.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/b.html",
    }),

    

    new MiniCssExtractPlugin({filename:"css/style.css"}),

    new OptimizeCSSAssetsPlugin({}),
  ],


};