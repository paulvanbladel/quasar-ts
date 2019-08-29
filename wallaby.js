module.exports = wallaby => {
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

  const compiler = wallaby.compilers.babel({
    presets: [['@quasar/app', { modules: 'commonjs' }]]
  });

  return {
    files: [
      'src/**/*',
      'jest.config.js',
      'package.json',
      'test/**/*',
      '!test/**/*.spec.ts',
      '!src/**/*.spec.ts'
    ],

    tests: ['src/**/*.spec.ts', 'test/jest/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': compiler,
      '**/*.vue': require('wallaby-vue-compiler')(compiler)
    },

    preprocessors: {
      '**/*.js?(x)': file =>
        require('@babel/core').transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          plugins: ['babel-plugin-jest-hoist']
        })
    },

    setup: function(wallaby) {
      const jestConfig = require('./package').jest || require('./jest.config');
      // delete jestConfig.transform['^.+\\.tsx?$'];
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest',

    debug: true
  };
};
