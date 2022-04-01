test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar should be 373 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3.5)

    const expected = 3.5 * 127.9; 
    
     expect(fromDollarToYen(3.5)).toBe(373); 
})

test("One yen should be 159", function(){
    const { fromYanToPound } = require('./app.js')

    const yen = fromYanToPound(3.5)

    const expected = 447.65 / 2.8; 
    
     expect(fromYanToPound(3.5)).toBe(160); 
})