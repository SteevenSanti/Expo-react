module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ]
    ],
    env: {
      production: {
        plugins: [["inline-dotenv",{
          path: '.env'
        }]]
      },
      development: {
        plugins: [["inline-dotenv",{
          path: '.env'
        }]]
      }
    }
  };
};
