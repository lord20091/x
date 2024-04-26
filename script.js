// 1-savol

let a = 3

let b = 5

let c = a + b



console.log(c);


// 2-savol

let onikki = `12`

let NumberA = Number(onikki)

console.log(onikki);

console.log(NumberA);


// 3-savol

let son = Math.round(Math.random()*10)

if(son % 2 == 0) {
    console.log(son + ` - juft son`);
} else {
    console.log(son + ` - toq son`);
}


// 4-savol

let soz = prompt(`So'z kiriting`)

if(soz === `Mars`) {
    alert(`Mars`)
} else {
    alert(`Mars It School`)
}


// 5-savol

let sozlar = [`Uzum`, `Asal`, `Olma`, `Nok`, `Behi`,]

let sozlar2 = []

for (const sozla of sozlar) {
    sozla.includes(sozla.length > 5 )
}

console.log(sozlar);


// 6-savol

for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i + ` - juft son`);
    } else {
        console.log(i + ` - toq son`);
    }
}