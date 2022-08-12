let nFirst:number = 0;
let nAfter:number = 1;
let nextTerm:number = 0;
let total:number = 0;

for (let i = 1; i <= 20; i++) {
    console.log(nFirst);
    nextTerm = nFirst + nAfter;
    nFirst = nAfter;
    nAfter = nextTerm;
    total = total + nFirst;
}

console.log("total fibonacci: " + total)