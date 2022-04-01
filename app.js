let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar(amount) {
    let result = amount * oneEuroIs.USD;
    console.log("You have" + " " + result +  " " + "USD")
    return result
}
fromEuroToDollar(3.5)


function fromDollarToYen(amount) {
    let result1 = (amount/oneEuroIs.USD) * oneEuroIs.JPY;
    console.log("You have" + " " + result1 +  " " + "JPY")
    return Math.round(result1)
}
fromDollarToYen(3.5)


function fromYanToPound(amount) {
    let result2 = ((amount*oneEuroIs.JPY) / (amount*oneEuroIs.GBP));
    console.log("You have" + " " + result2  +  " " +  "GBP")
    return Math.round(result2)
}
fromYanToPound(3.5)

//447,65 
// 2,8


module.exports = {fromEuroToDollar, fromDollarToYen, fromYanToPound}
