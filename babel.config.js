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

require("@babel/register")({
  // Find babel.config.js up the folder structure.
  rootMode: "upward",

  // Since babel ignores all files outside the cwd, it does not compile sibling packages
  // So rewrite the ignore list to only include node_modules
  ignore: ["node_modules"]
});
