module.exports = function(api) {
  console.log("🗼 Load babel config");
  api.cache(false);

  const presets = ["@babel/preset-env"];
  const plugins = [];
  return {
    presets,

    plugins
  };
};
