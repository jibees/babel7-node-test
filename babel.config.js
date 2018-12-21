module.exports = function(api) {
  console.log("🗼 Load babel config");
  api.cache(false);

  const presets = ["@babel/preset-env"];
  const plugins = [
    [
      "module-resolver",
      {
        cwd: "packagejson",
        root: "./",
        alias: {
          "@package1": "./packages/package-1"
        }
      }
    ]
  ];
  return {
    presets,

    plugins
  };
};