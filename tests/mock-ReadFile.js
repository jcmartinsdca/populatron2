const PersonDao = require('./csvReadFile')
const PersonDao = require('./csvParse')

test('save Alan Turing', () => {
    //setup
    const mockReadFile = jest.fn(() => 'readfile')
    const mocklines = { csvReadFile: mockReadFile }
    const personDao = new csvReadFile(mocklines)
    //const expected = { givenName: 'Alan', familyName: 'Turing' }
    const expected = { Country: 'ad', City: 'encamp', AccentCity: 'Encamp', Region: '03', Population: '11224', Latitude: '42.5333333',Longitude: '1.5833333' }

    // exercise
    // personDao.saveToDatabase(expected);
    const result = csvParser.csvReadFile(expected);

    // assert
    expect(mockReadFile).toHaveBeenCalled();
    expect(mockReadFile).toHaveBeenCalledWith(expected);
    expect(result).toEqual('saved')

})