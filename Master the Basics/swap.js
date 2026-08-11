// Swap with extra variable

function swappingwithextravariable() {
    let a = 10;
    let b = 20;
    let c;

    //initial values

    console.log(`initial values ${a}, ${b}, ${c}`); // 10 20 undefined

    //swapping
    c = b;
    b = a;
    a = c;

    console.log(`after swap with extra variable ${a}, ${b}`); // 20 10 20

}

swappingwithextravariable();


// Swap with arithmetic operator (without extra variable)

function swappingwithoperator() {
    let a = 10;
    let b = 20;
    console.log(`initial values ${a}, ${b}`);

    a = a + b; // 20 + 10 = 30
    b = a - b; // 30 - 10 = 20
    a = a - b; // 30 - 20 = 10

    console.log(`after swap with operator ${a}, ${b}`); // 10, 20

}

swappingwithoperator();


// swap with destructuring assignment

function swappingwithdestructuring() {
    let a = 10;
    let b = 20;
    console.log(`initial values ${a}, ${b}`);

    [a, b] = [b, a];

    console.log(`after swap with destructuring ${a}, ${b}`);

}

swappingwithdestructuring();