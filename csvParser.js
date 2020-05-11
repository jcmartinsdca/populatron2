function csvParser(lines) {

    var pCntr = 4
    var pNumTotal = 0
    
    for(var cnt=1; cnt < lines.length; cnt++) {
        const keys = lines[cnt].split(',')
    
        pNum = parseInt(keys[pCntr])
        if(isNaN(pNum)) {
            pNum =0
        }else {
        //console.log(pNum)
        pNumTotal += pNum   
        }
    }
    console.log(pNumTotal)
    return(pNumTotal)
}

module.exports = csvParser