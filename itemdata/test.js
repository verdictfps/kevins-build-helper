let effMagSize = 7;
let totalDamage = 60;
let reloadTime = 2.88;

let secPerRound = 60 / 450;
let magTime = secPerRound * effMagSize;
let rotationTime = magTime + reloadTime;

let dMagRound = 420

let test = 0;
let dps30Mag = 0;
do {
    let magSizeCalc = 0;
    do {
        test += secPerRound;
        dps30Mag += totalDamage;
        magSizeCalc += 1;
        console.log("Shot fired:", magSizeCalc);
        console.log("Time Taken:", test);
        console.log("Current Damage Output:", dps30Mag);
    }
    while (magSizeCalc < effMagSize && test < 60);
    test += reloadTime
    console.log("Reloading:", test);
}
while (test < 60);
console.log(test)
console.log("Damage over 60 seconds:", dps30Mag)
let dps30 = dps30Mag / 60;
console.log("DPS:", dps30)