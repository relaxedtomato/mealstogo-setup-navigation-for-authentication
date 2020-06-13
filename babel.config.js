module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~/assets': './assets',
            '~/components': './src/components',
            '~/scenes': './src/scenes',
            '~/services': './src/services',
            '~/styles': './src/styles',
            '~/utils': './src/utils',
          },
        },
      ],
    ],
  };
};
