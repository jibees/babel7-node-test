const path = require("path");

module.exports = function(api) {
  console.log("🗼 Load babel config");
  api.cache(false);

  const presets = ["@babel/preset-env"];
  const plugins = [
    [
      "module-resolver",
      {
        resolvePath(sourcePath) {
          switch (sourcePath) {
            case "@package1":
              return path.resolve(__dirname, "packages/package-1");
            default:
              console.log(sourcePath);
          }
        }
      }
    ]
  ];
  return {
    presets,

    plugins
  };
};
