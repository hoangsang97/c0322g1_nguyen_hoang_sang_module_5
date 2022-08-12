let nFirst = 0;
let nAfter = 1;
let nextTerm = 0;
let total = 0;
for (let i = 1; i <= 20; i++) {
    console.log(nFirst);
    nextTerm = nFirst + nAfter;
    nFirst = nAfter;
    nAfter = nextTerm;
    total = total + nFirst;
}
console.log("total fibonacci: " + total);
//# sourceMappingURL=main.js.map