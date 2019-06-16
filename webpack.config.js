module.exports = {
  entry: {
    App: "C:\Users\Parker\Desktop\Sites\portfolio\app\assets\scripts\App.js",
    Vendor: "C:\Users\Parker\Desktop\Sites\portfolio\app\assets\scripts\Vendor.js"
  },
  output: {
    path: "C:\Users\Parker\Desktop\Sites\portfolio\app\temp\scripts",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
