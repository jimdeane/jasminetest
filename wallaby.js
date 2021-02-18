module.exports = function () {
    return {
      files: [
        { pattern: 'lib/**/*.js', load: true, instrument: false},       
        { pattern: '../../spec/helpers/jasmine_examples/SpecHelper.js', load: true, instrument: true }
      ],
  
      tests: [
        { pattern: 'spec/jasmine_examples/**/*[sS]pec.js', load: true }
      ],
      env: {
        type: 'node'
      },
  
      testFramework: 'jasmine'
    };
  };
  