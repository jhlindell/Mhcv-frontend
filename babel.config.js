module.exports = {
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
      ],
      ignore: ['*.test.js'],
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        ['babel-plugin-transform-react-remove-prop-types', { mode: 'wrap' }],
        ['@babel/plugin-transform-runtime'],
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
      ],
    },
  },
};
