const tcsvReadFile = require('../csvReadFile')
const tcsvParser = require('../csvParser')

var lines = "nothing"

test('testing readfile', function() {
    lines = tcsvReadFile();
    expect(lines != null)
})

test('testing the parser to add up the popluation and thtat the results match', function() {
    var  popnum = tcsvParser(lines);
    expect(popnum >1 )
})