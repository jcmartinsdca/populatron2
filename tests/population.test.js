const tcsvReadFile = require('../csvReadFile')
const tcsvParser = require('../csvParser')

var lines = "nothing"

test('testing readfile', function() {
    lines = tcsvReadFile();
    expect(lines != null)
})

test('testing readfile', function() {
    var  popnum = tcsvParser(lines);
    expect(popnum >1 )
})