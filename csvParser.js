function csvParser(lines) {

    var pCntr = 5
    var pNumTotal = 0
    
    for(var cnt=1; cnt < 10; cnt++) {
        const keys = lines[cnt].split(',')
    
        pNum = parseFloat(keys[pCntr], 30)
        //console.log(pNum)
        pNumTotal += pNum   
    }
    console.log(pNumTotal)
    return(pNumTotal)
}

module.exports = csvParser