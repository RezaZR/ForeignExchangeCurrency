module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.devtool = "eval-source-map";

      config.output.devtoolModuleFilenameTemplate = info =>
        info.resourcePath.match(/^\.\/\S*?\.vue$/)
          ? `webpack-generated:///${info.resourcePath}?${info.hash}`
          : `webpack-myCode:///${info.resourcePath}`;

      config.output.devtoolFallbackModuleFilenameTemplate =
        "webpack:///[resource-path]?[hash]";
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/_root.scss";
          `
      }
    }
  }
};
