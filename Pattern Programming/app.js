import promptSync from "prompt-sync";

// Initialize prompt-sync for interactive user input
const prompt = promptSync();

// Get dimensions from user input
let row = parseInt(prompt("Enter the number of rows: "));
let colum = parseInt(prompt("Enter the number of colum : "));

// ==========================================
// 1. SOLID RECTANGLE / GRID PATTERN
// ==========================================
// Prints a grid of stars with 'row' rows and 'colum' columns.
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= colum; j++) {
        process.stdout.write("*\t");
    }
    process.stdout.write("\n");
}

// ==========================================
// 2. LEFT-ALIGNED RIGHT TRIANGLE (STARS)
// ==========================================
// Prints increasing stars per row (1 star, 2 stars, ..., row stars).
for (let i = 1; i <= row; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write("*\t");
    }
    process.stdout.write("\n");
}

// ==========================================
// 3. LEFT-ALIGNED RIGHT TRIANGLE (NUMBERS)
// ==========================================
// Prints sequential numbers from 1 up to 'i' on each line.
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}\t`);
    }
    process.stdout.write("\n");
}

// ==========================================
// 4. INVERTED LEFT-ALIGNED RIGHT TRIANGLE
// ==========================================
// Prints decreasing stars per row (row stars down to 1 star).
for (let i = 1; i <= row; i++) {
    for (let j = row + 1; j !== i; j--) {
        process.stdout.write("*\t");
    }
    process.stdout.write("\n");
}

// ==========================================
// 5. RIGHT-ALIGNED RIGHT TRIANGLE
// ==========================================
// Prints leading spaces/tabs to align the triangle to the right.
for (let i = 1; i <= row; i++) {
    // Print leading tabs/spaces for alignment
    for (let ind = row; ind > i; ind--) {
        process.stdout.write("\t");
    }
    // Print stars
    for (let j = 0; j < i; j++) {
        process.stdout.write("*\t");
    }
    process.stdout.write("\n");
}

// ==========================================
// 6. PYRAMID / DOUBLE-STAR PATTERN
// ==========================================
// Uses leading tabs followed by two sets of increasing stars on each row.
for (let i = 1; i <= row; i++) {
    // Print leading tabs/spaces for alignment
    for (let ind = row; ind > i; ind--) {
        process.stdout.write("\t");
    }
    // Print first set of stars
    for (let j = 0; j < i; j++) {
        process.stdout.write("*\t");
    }
    // Print second set of stars
    for (let j = 0; j < i; j++) {
        process.stdout.write("*\t");
    }
    process.stdout.write("\n");
}