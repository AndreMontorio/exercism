//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {


    let numConvertido = String(number);

    if (number === 0) {
        return true;
    }

    if (numConvertido.length === 1) {
        let total = number ** 1;
        return total === number;
    }
    else {
        let total = 0;
        const arrayNum = numConvertido.split('');

        for (let i = 0; i < arrayNum.length; i++) {
            total += Number(arrayNum[i]) ** arrayNum.length;
        }

        return total === number;
    }


};
