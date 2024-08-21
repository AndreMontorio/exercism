
const isArmstrongNumber = (number) => {

    let numConvertido = String(number);
    
    if(numConvertido.length === 1) {
        return number === number ** 1; 
    }
    else {
        debugger
        let arrayNum = numConvertido.split('');
        arrayNum = arrayNum.foreach(x => {
            return Number(x) ** numConvertido.length;
        })
    }

    
    return numConvertido
};

isArmstrongNumber(10);