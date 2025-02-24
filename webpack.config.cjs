const path = require("path");

module.exports = {
  entry: "./src/app/main.jsx", //  точка входа - исходный файл
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@sections": path.resolve(__dirname, "src/sections"),
    },
  },
  output: {
    path: path.resolve(__dirname, "./public"), //  путь к каталогу выходных файлов - папка public
    publicPath: "/public/",
    filename: "bundle.js", // название создаваемого файла
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 8081,
    open: true,
  },
  module: {
    rules: [
      //загрузчик для jsx
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["@babel/preset-react"], // используемые плагины
        },
      },
    ],
  },
};
