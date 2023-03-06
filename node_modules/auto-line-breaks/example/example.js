var prompt = require('prompt');
var autoLineBreak = require('../index.js')

var schema = {
    properties: {
      text: {
        message: 'Required',
        required: true,
        description: 'text: Enter your text',
        type: 'string'
      },
      textLength: {
        pattern: /^[0-9]+$/,
        message: 'Length must contain numbers',
        required: true,
        type: 'integer',
        description: 'textLength: Enter the number of characters between lines',
      }
    }
  };

prompt.message = '';
prompt.start();

prompt.get(schema, function (err, result) {
    console.log('# Base text:')
    console.log(result.text);

    var linesResult = autoLineBreak(result.text, Number(result.textLength))
    console.log('\n# Result:')
    console.log(linesResult)
});