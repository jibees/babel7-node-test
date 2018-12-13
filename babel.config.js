module.exports = function(api) {
  console.log("🗼 Load babel config");
  api.cache(true);

  const presets = ["@babel/preset-env"];
  const plugins = ["@babel/plugin-transform-runtime"];
  return {
    presets,
    plugins
  };
};
