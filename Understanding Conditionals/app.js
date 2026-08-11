// ==========================================
// 1. Shopping Bill Discount Calculation
// ==========================================
let bill = 6000;
let paybleAmmont;
let discount;
bill = Number(bill);

// Determine discount percentage based on bill thresholds
if (bill >= 5000 && bill < 10000) {
    // 5% discount for bill amount between 5,000 and 9,999
    discount = bill * 5 / 100;
    paybleAmmont = bill - discount;

} else if (bill >= 10000 && bill < 20000) {
    // 10% discount for bill amount between 10,000 and 19,999
    discount = bill * 10 / 100;
    paybleAmmont = bill - discount;

} else if (bill >= 20000) {
    // 20% discount for bill amount of 20,000 or more
    discount = bill * 20 / 100;
    paybleAmmont = bill - discount;

} else {
    // No discount for bill amount under 5,000
    discount = 0;
    paybleAmmont = bill - discount;
}

console.log("Discount Amount :" + discount);
console.log("Total Bill After Discount :" + paybleAmmont);


// ==========================================
// 2. Electricity Bill Tiered Slab Calculation
// ==========================================
let unit = 220;
let calcUnit;
let eBill = 0;

// Slab 4: Units above 400 @ 13/unit
if (unit > 400) {
   calcUnit = unit - 400;
   unit = 400; // Cap remaining units to 400 for lower slabs
   eBill += calcUnit * 13;
}

// Slab 3: Units from 201 to 400 @ 8/unit
if (unit > 200) {
   calcUnit = unit - 200;   
   unit = 200; // Cap remaining units to 200 for lower slabs
   eBill += calcUnit * 8;
}

// Slab 2: Units from 101 to 200 @ 6/unit
if (unit > 100) {
   calcUnit = unit - 100;
   unit = 100; // Cap remaining units to 100 for lower slabs
   eBill += calcUnit * 6;
}

// Slab 1: Remaining units (1 to 100) @ 4/unit
eBill += unit * 4;

console.log(eBill);


// ==========================================
// 3. Currency Denomination Breakdown (ATM Cash Counter)
// ==========================================
let balace = 5677; // Total amount to break down into notes/coins
let reminder;      // Stores remaining balance after dispensing notes of current denomination
let count;         // Count of notes for current denomination

// 1000 Notes
if (balace >= 1000) {
    reminder = balace % 1000;
    count = Math.floor(balace / 1000);
    balace = reminder;

    console.log(`1000 Notes ${count}`);
}

// 500 Notes
if (balace >= 500) {
    reminder = balace % 500;
    count = Math.floor(balace / 500);
    balace = reminder;

    console.log(`500 Notes ${count}`);
}

// 200 Notes
if (balace >= 200) {
    reminder = balace % 200;
    count = Math.floor(balace / 200);
    balace = reminder;

    console.log(`200 Notes ${count}`);
}

// 100 Notes
if (balace >= 100) {
    reminder = balace % 100;
    count = Math.floor(balace / 100);
    balace = reminder;

    console.log(`100 Notes ${count}`);
}

// 50 Notes
if (balace >= 50) {
    reminder = balace % 50;
    count = Math.floor(balace / 50);
    balace = reminder;

    console.log(`50 Notes ${count}`);
}

// 20 Notes
if (balace >= 20) {
    reminder = balace % 20;
    count = Math.floor(balace / 20);
    balace = reminder;

    console.log(`20 Notes ${count}`);
}

// 10 Notes
if (balace >= 10) {
    reminder = balace % 10;
    count = Math.floor(balace / 10);
    balace = reminder;

    console.log(`10 Notes ${count}`);
}

// 5 Notes
if (balace >= 5) {
    reminder = balace % 5;
    count = Math.floor(balace / 5);
    balace = reminder;

    console.log(`5 Notes ${count}`);
}

// 2 Notes
if (balace >= 2) {
    reminder = balace % 2;
    count = Math.floor(balace / 2);
    balace = reminder;

    console.log(`2 Notes ${count}`);
}

// 1 Note
if (balace >= 1) {
    reminder = balace % 1;
    count = Math.floor(balace / 1);
    balace = reminder;

    console.log(`1 Notes ${count}`);
}

