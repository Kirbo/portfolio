console.log(
  require('crypto')
    .createHash('md5')
    .update(require('fs').readFileSync(require('path').resolve(__dirname, '../', process.argv[2])).toString())
    .digest('hex')
);
