var version = process.env.VERSION || require('../../package.json').version;
var content = {
  '1.0.3': '1.0',
  '2.0.11': '2.0',
  '2.1.0': '2.1',
  '2.2.2': '2.2',
  '2.3.9': '2.3',
  '2.4.11': '2.4'
};
if (!content[version]) content[version] = '2.5';
