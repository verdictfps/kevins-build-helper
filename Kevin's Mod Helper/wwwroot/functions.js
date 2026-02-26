// It's time to shuffle
function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

// Used to remove and replace oils to prevent dupes
function oilRemover(selector, selectedvalue) {
    var oilSelector1 = document.getElementById("oils1selector");
    var selector1Options = oilSelector1.options;
    var oilSelector2 = document.getElementById("oils2selector");
    var selector2Options = oilSelector2.options;
    var oilSelector3 = document.getElementById("oils3selector");
    var selector3Options = oilSelector3.options;
    var oilSelector4 = document.getElementById("oils4selector");
    var selector4Options = oilSelector4.options;
    var oilSelector5 = document.getElementById("oils5selector");
    var selector5Options = oilSelector5.options;

    if (selector === 'oils1selector') {
        for (var i = 0; i < selector2Options.length; i++) {
            if (selector2Options[i].hidden === true) {
                selector2Options[i].hidden = false;
                if (selector2Options[i].value === "static-choose") {
                    selector2Options[i].hidden = false;
                }
            }
            if (selector2Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector2Options[i].hidden = true;
            }
            if (selector3Options[i].hidden === true) {
                selector3Options[i].hidden = false;
                if (selector3Options[i].value === "static-choose") {
                    selector3Options[i].hidden = false;
                }
            }
            if (selector3Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector3Options[i].hidden = true;
            }
            if (selector4Options[i].hidden === true) {
                selector4Options[i].hidden = false;
                if (selector4Options[i].value === "static-choose") {
                    selector4Options[i].hidden = false;
                }
            }
            if (selector4Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector4Options[i].hidden = true;
            }
            if (selector5Options[i].hidden === true) {
                selector5Options[i].hidden = false;
                if (selector5Options[i].value === "static-choose") {
                    selector5Options[i].hidden = false;
                }
            }
            if (selector5Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].hidden = true;
            }
        }
    }
    if (selector === 'oils2selector') {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].hidden === true) {
                selector1Options[i].hidden = false;
                if (selector1Options[i].value === "static-choose") {
                    selector1Options[i].hidden = false;
                }
            }
            if (selector1Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector1Options[i].hidden = true;
            }
            if (selector3Options[i].hidden === true) {
                selector3Options[i].hidden = false;
                if (selector3Options[i].value === "static-choose") {
                    selector3Options[i].hidden = false;
                }
            }
            if (selector3Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector3Options[i].hidden = true;
            }
            if (selector4Options[i].hidden === true) {
                selector4Options[i].hidden = false;
                if (selector4Options[i].value === "static-choose") {
                    selector4Options[i].hidden = false;
                }
            }
            if (selector4Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector4Options[i].hidden = true;
            }
            if (selector5Options[i].hidden === true) {
                selector5Options[i].hidden = false;
                if (selector5Options[i].value === "static-choose") {
                    selector5Options[i].hidden = false;
                }
            }
            if (selector5Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].hidden = true;
            }
        }
    }
    if (selector === 'oils3selector') {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].hidden === true) {
                selector1Options[i].hidden = false;
                if (selector1Options[i].value === "static-choose") {
                    selector1Options[i].hidden = false;
                }
            }
            if (selector1Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector1Options[i].hidden = true;
            }
            if (selector2Options[i].hidden === true) {
                selector2Options[i].hidden = false;
                if (selector2Options[i].value === "static-choose") {
                    selector2Options[i].hidden = false;
                }
            }
            if (selector2Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector2Options[i].hidden = true;
            }
            if (selector4Options[i].hidden === true) {
                selector4Options[i].hidden = false;
                if (selector4Options[i].value === "static-choose") {
                    selector4Options[i].hidden = false;
                }
            }
            if (selector4Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector4Options[i].hidden = true;
            }
            if (selector5Options[i].hidden === true) {
                selector5Options[i].hidden = false;
                if (selector5Options[i].value === "static-choose") {
                    selector5Options[i].hidden = false;
                }
            }
            if (selector5Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].hidden = true;
            }
        }
    }
    if (selector === 'oils4selector') {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].hidden === true) {
                selector1Options[i].hidden = false;
                if (selector1Options[i].value === "static-choose") {
                    selector1Options[i].hidden = false;
                }
            }
            if (selector1Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector1Options[i].hidden = true;
            }
            if (selector2Options[i].hidden === true) {
                selector2Options[i].hidden = false;
                if (selector2Options[i].value === "static-choose") {
                    selector2Options[i].hidden = false;
                }
            }
            if (selector2Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector2Options[i].hidden = true;
            }
            if (selector3Options[i].hidden === true) {
                selector3Options[i].hidden = false;
                if (selector3Options[i].value === "static-choose") {
                    selector3Options[i].hidden = false;
                }
            }
            if (selector3Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector3Options[i].hidden = true;
            }
            if (selector5Options[i].hidden === true) {
                selector5Options[i].hidden = false;
                if (selector5Options[i].value === "static-choose") {
                    selector5Options[i].hidden = false;
                }
            }
            if (selector5Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].hidden = true;
            }
        }
        if (selector === 'oils5selector') {
            for (var i = 0; i < selector1Options.length; i++) {
                if (selector1Options[i].hidden === true) {
                    selector1Options[i].hidden = false;
                    if (selector1Options[i].value === "static-choose") {
                        selector1Options[i].hidden = false;
                    }
                }
                if (selector1Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector1Options[i].hidden = true;
                }
                if (selector2Options[i].hidden === true) {
                    selector2Options[i].hidden = false;
                    if (selector2Options[i].value === "static-choose") {
                        selector2Options[i].hidden = false;
                    }
                }
                if (selector2Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector2Options[i].hidden = true;
                }
                if (selector3Options[i].hidden === true) {
                    selector3Options[i].hidden = false;
                    if (selector3Options[i].value === "static-choose") {
                        selector3Options[i].hidden = false;
                    }
                }
                if (selector3Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector3Options[i].hidden = true;
                }
                if (selector4Options[i].hidden === true) {
                    selector4Options[i].hidden = false;
                    if (selector4Options[i].value === "static-choose") {
                        selector4Options[i].hidden = false;
                    }
                }
                if (selector4Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector4Options[i].hidden = true;
                }
            }
        }
    }
} 

// Unhides categories and their options when selected, and hides the previous category
function oilCategory(selectorNumber, selectedvalue) {

    const suffixMap = {
        "ammo-consume-chance-oils": "AmmoCat",
        "base-crit-chance-oils": "CritCat",
        "bullet-bounces-oils": "BounceCat",
        "bullet-speed-oils": "SpeedCat",
        "add-damage-oils": "AddDmgCat",
        "percent-damage-oils": "MultDmgCat",
        "durability-oils": "DurCat",
        "penetration-oils": "PenCat",
        "projectiles-oils": "ProjCat",
        "recoil-oils": "RecoilCat",
        "reload-speed-oils": "ReloadCat",
        "rpm-oils": "RPMCat",
        "spread-oils": "SpreadCat"
    };

    const allSuffixes = Object.values(suffixMap);

    allSuffixes.forEach(suffix => {
        const element = document.getElementById(`oils${selectorNumber}${suffix}`);
        if (element) {
            element.hidden = "hidden";
        }
    });

    if (selectedvalue === "select-category") return;
    
    const selectedSuffix = suffixMap[selectedvalue];
    if (!selectedSuffix) return;

    const elementToShow = document.getElementById(`oils${selectorNumber}${selectedSuffix}`);
    if (elementToShow) {
        elementToShow.hidden = "";
    }
}

// For when the button is clicked.
function onGenerate() {
    const weaponName = "name";
    rollWeapon(weaponName);
    rollOils();
}
function addName(name, value, type) {
    if (type === "weapon") {
        document.getElementById("cardWeaponName").textContent = name;
    } else if (type === "oil") {
        document.getElementById(value).textContent = name;
    }
}

let oilsData = null;

async function loadOils() {
    const response = await fetch("./Oils.json");
    oilsData = await response.json();
}

function oilStats() {

}

function getOilByName(name) {
    return oilsData?.Oil[name] || null;
}

function rollOils() {
    oil1 = document.getElementById("oils1selector").value;
    oil2 = document.getElementById("oils2selector").value;
    oil3 = document.getElementById("oils3selector").value;
    oil4 = document.getElementById("oils4selector").value;
    oil5 = document.getElementById("oils5selector").value;

    let oilIncrement = 0;

    console.log(oilIncrement);

    const selectedOil = [oil1, oil2, oil3, oil4, oil5];
    for (const oilValue of selectedOil) {
        oilIncrement++;
        switch (oilValue) {
            case "static-random-all":
                shuffle(oilsAll);
                oil[oilIncrement] = oilsAll[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                addName(oil[oilIncrement].Name, `cardOilName${oilIncrement}`, "oil");
                console.log(oil[oilIncrement]);
                break;
            case "static-random-ammo-consume-chance":
                shuffle(oilsAmmo);
                oil[oilIncrement] = oilsAmmo[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-base-crit-chance":
                shuffle(oilsCrit);
                oil[oilIncrement] = oilsCrit[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-bullet-bounce":
                shuffle(oilsBounce);
                oil[oilIncrement] = oilsBounce[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-bullet-speed":
                shuffle(oilsSpeed);
                oil[oilIncrement] = oilsSpeed[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-add-damage":
                shuffle(oilsAddDam);
                oil[oilIncrement] = oilsAddDam[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-mult-damage":
                shuffle(oilsMultDam);
                oil[oilIncrement] = oilsMultDam[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-max-durability":
                shuffle(oilsDur);
                oil[oilIncrement] = oilsDur[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-penetration":
                shuffle(oilsPen);
                oil[oilIncrement] = oilsPen[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-projectiles":
                shuffle(oilsProj);
                oil[oilIncrement] = oilsProj[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-recoil":
                shuffle(oilsRecoil);
                oil[oilIncrement] = oilsRecoil[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-reload-speed":
                shuffle(oilsReload);
                oil[oilIncrement] = oilsReload[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-rpm":
                shuffle(oilsRPM);
                oil[oilIncrement] = oilsRPM[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            case "static-random-spread":
                shuffle(oilsSpread);
                oil[oilIncrement] = oilsSpread[0];
                oil[oilIncrement] = getOilByName(oil[oilIncrement]);
                break;
            default:
        }
    };
}

function rollWeapon(name) {
    name = document.getElementById("weapons");
    const selectedValue = name.value;
    switch (selectedValue) {
        case "random-all-weapons":
            shuffle(gunsAll);
            name = gunsAll[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-pistols":
            shuffle(gunsPistols);
            name = gunsPistols[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-revolvers":
            shuffle(gunsRevolvers);
            name = gunsRevolvers[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-shotguns":
            shuffle(gunsShotguns);
            name = gunsShotguns[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-submachine-guns":
            shuffle(gunsSMGs);
            name = gunsSMGs[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-assault-rifles":
            shuffle(gunsARs);
            name = gunsARs[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-lmgs":
            shuffle(gunsLMGs);
            name = gunsLMGs[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-rifles":
            shuffle(gunsRifles);
            name = gunsRifles[0];
            addName(name, selectedValue, "weapon");
            break;
        case "random-sniper-rifles":
            shuffle(gunsSnipers);
            name = gunsSnipers[0];
            addName(name, selectedValue, "weapon");
            break;
        default:
            const selectedIndex = name.selectedIndex;
            const selectedText = name.options[selectedIndex].text;
            addName(selectedText, selectedValue)
    }
}


// Don't add functions below this

const oilsAll = [
    "Action Oil",
    "Add Damage Oil",
    "Aimless Oil",
    "Airsoft Oil",
    "Altruistic Oil",
    "Arkanoid Oil",
    "Arrow Oil",
    "Artery Oil",
    "Artillery Oil",
    "Ascetic Oil",
    "Assassin Dart Oil",
    "Attack Speed Oil",
    "Axe Oil",
    "BB Oil",
    "Bad Planet Oil",
    "Bandit Oil",
    "Big Oil",
    "Black Friday Oil",
    "Blindfold Oil",
    "Blurt Oil",
    "Bolt Oil",
    "Bombard Oil",
    "Boomstick Oil",
    "Boulder Oil",
    "Bowl Oil",
    "Braced Oil",
    "Brute Oil",
    "Bulk Oil",
    "Bystander Oil",
    "Carefree Oil",
    "Careful Oil",
    "Careless Splitter Oil",
    "Cartoon Oil",
    "Casual Oil",
    "Cheap Oil",
    "Collateral Oil",
    "Complicated Oil",
    "Compo Oil",
    "Confidence Oil",
    "Considerate Oil",
    "Contained Force Oil",
    "Critical Oil",
    "Cycle Oil",
    "Damage Oil",
    "Dart Oil",
    "Dead Center Oil",
    "Delayed Hyper Tube Oil",
    "Dense Oil",
    "Detune Oil",
    "Diesel Oil",
    "Discharge Oil",
    "Disposable Oil",
    "Division Oil",
    "Do-over Oil",
    "Double Fire Oil",
    "Double Lock Oil",
    "Double Nothing Oil",
    "Dum Dum Oil",
    "Dynamic Oil",
    "Easy Oil",
    "Easy Plop Oil",
    "Elephant Oil",
    "Exotic Barrel Oil",
    "Expander Oil",
    "Extra Powder Oil",
    "Farsighted Oil",
    "Fast Bet Oil",
    "Feature Gun Oil",
    "Fidget Lord Oil",
    "Fidget Oil",
    "First Blood Oil",
    "Flea Oil",
    "Flow Funnel Oil",
    "Food Stamp Oil",
    "Fragile System Oil",
    "Franciscan Oil",
    "Frugal Oil",
    "Gambler Oil",
    "Gemini Oil",
    "Gentle Oil",
    "Glass Cannon Oil",
    "Great Oil",
    "Grounded Oil",
    "Gunslinger Oil",
    "Happy Accident Oil",
    "Heavy Lead Oil",
    "Heavy Oil",
    "Heavy Pockets Oil",
    "Hefty Oil",
    "Helium Oil",
    "High Grade Oil",
    "Hip Blaster Oil",
    "Hip Marksman Oil",
    "Hoop Oil",
    "Hunter Oil",
    "Hustler Oil",
    "Hyper Lead Oil",
    "Imperfect Oil",
    "Inconsiderate Oil",
    "Inherited Oil",
    "Instant Oil",
    "Judgement Oil",
    "Jungian Oil",
    "Keep Oil",
    "Kicker Oil",
    "Kinetic Oil",
    "Last Drop Oil",
    "Late Boom Oil",
    "Launcher Oil",
    "Lazy Oil",
    "Less Recoil Oil",
    "Lightweight Oil",
    "Longshot Oil",
    "Lost In Focus Oil",
    "Low Roller Oil",
    "Machine Oil",
    "Main Discipline Oil",
    "Main Focus Oil",
    "Manifestation Oil",
    "Matrix Oil",
    "Micro Wing Oil",
    "Modern Technology Oil",
    "Mosquito Oil",
    "Multichamber Oil",
    "Multishot Oil",
    "Needleye Oil",
    "Nerf Oil",
    "No Look Oil",
    "No Need Oil",
    "Out of the Box Oil",
    "Overclock Oil",
    "Overdose Oil",
    "Parallel Mag Oil",
    "Peashooter Oil",
    "Penetration Oil",
    "Perfect Bounce Oil",
    "Perforate Oil",
    "Plinker Oil",
    "Plop Back Oil",
    "Pool Oil",
    "Potshot Oil",
    "Puncher Oil",
    "Puncture Oil",
    "Purse Gun Oil",
    "Rapid Internals Oil",
    "Ready Oil",
    "Rebound Oil",
    "Recycle Oil",
    "Relax Oil",
    "Release Oil",
    "Reload Oil",
    "Ricochet Oil",
    "Rigid System Oil",
    "Rigor Oil",
    "Robust Mechanics Oil",
    "Rookie Oil",
    "Rubber Oil",
    "Rush Job Oil",
    "Safety Oil",
    "Satiety Oil",
    "Saviour Oil",
    "Scatter Oil",
    "Scramble Oil",
    "Seated Fit Oil",
    "Seated Oil",
    "Sect Oil",
    "Sender Oil",
    "Sensible Oil",
    "Shaved Clip Oil",
    "Shellman Oil",
    "Sherlock Oil",
    "Shower Oil",
    "Shredder Oil",
    "Skip Oil",
    "Slick Oil",
    "Slippy Coating Oil",
    "Slotmachine Oil",
    "Slow Punch Oil",
    "Smart Bullet Oil",
    "Soft Bullet Oil",
    "Solid Oil",
    "Spartan Oil",
    "Speed Trade Oil",
    "Spitter Oil",
    "Spread Oil",
    "Stability Oil",
    "Stable Hip Oil",
    "Stationary Oil",
    "Stiffy Fit Oil",
    "Stoic Oil",
    "Suppressive Oil",
    "Surgical Laser Oil",
    "Synchronicity Oil",
    "Tactical Oil",
    "Tandem Oil",
    "Task Oil",
    "Tech Support Oil",
    "Tension Oil",
    "Terminator Oil",
    "Thorough Oil",
    "Tight Barrel Oil",
    "Too Much Oil",
    "Trusty Old Oil",
    "Turbulence Oil",
    "Twice Oil",
    "Two Time Oil",
    "Untechnical Oil",
    "Vasectomy Oil",
    "Vegan Oil",
    "Vegetable Oil",
    "Velocity Oil",
    "Walk Easy Oil",
    "Waster Oil",
    "Whim Oil",
    "Whos Counting Oil",
    "Wobble Oil",
    "Zero Fucks Oil",
    "Zooming Oil"];

const oilsAmmo = [
    "Bulk Oil",
    "Carefree Oil",
    "Cheap Oil",
    "Do-over Oil",
    "Food Stamp Oil",
    "Heavy Pockets Oil",
    "Helium Oil",
    "Keep Oil",
    "Last Drop Oil",
    "Mosquito Oil",
    "Plop Back Oil",
    "Recycle Oil",
    "Satiety Oil",
    "Saviour Oil",
    "Walk Easy Oil",
    "Whos Counting Oil",
];

const oilsCrit = [
    "Aimless Oil",
    "Artery Oil",
    "Axe Oil",
    "Blindfold Oil",
    "Confidence Oil",
    "Critical Oil",
    "Gambler Oil",
    "Happy Accident Oil",
    "Hunter Oil",
    "Hustler Oil",
    "Low Roller Oil",
    "Manifestation Oil",
    "No Need Oil",
    "Out of the Box Oil",
    "Puncture Oil",
    "Slotmachine Oil",
    "Smart Bullet Oil",
];

const oilsBounce = [
    "Arkanoid Oil",
    "Bandit Oil",
    "Cartoon Oil",
    "Flea Oil",
    "Hoop Oil",
    "Imperfect Oil",
    "Lazy Oil",
    "Longshot Oil",
    "Perfect Bounce Oil",
    "Pool Oil",
    "Rebound Oil",
    "Ricochet Oil",
    "Scramble Oil",
    "Sherlock Oil",
    "Skip Oil",
    "Synchronicity Oil",
    "Wobble Oil",
];

const oilsSpeed = [
    "Arrow Oil",
    "Assassin Dart Oil",
    "Dart Oil",
    "Delayed Hyper Tube Oil",
    "Diesel Oil",
    "Extra Powder Oil",
    "Fast Bet Oil",
    "Instant Oil",
    "Kinetic Oil",
    "Micro Wing Oil",
    "Tight Barrel Oil",
    "Turbulence Oil",
    "Velocity Oil",
    "Whim Oil",
    "Zooming Oil",
];

const oilsAddDam = [
    "Add Damage Oil",
    "Ascetic Oil",
    "Big Oil",
    "Brute Oil",
    "Discharge Oil",
    "Disposable Oil",
    "Expander Oil",
    "Fidget Oil",
    "Frugal Oil",
    "Great Oil",
    "Judgement Oil",
    "Kicker Oil",
    "Late Boom Oil",
    "Potshot Oil",
    "Seated Oil",
    "Sender Oil",
    "Solid Oil",
];

const oilsMultDam = [
    "Boulder Oil",
    "Complicated Oil",
    "Damage Oil",
    "Dum Dum Oil",
    "First Blood Oil",
    "Franciscan Oil",
    "Glass Cannon Oil",
    "Grounded Oil",
    "Heavy Oil",
    "Hip Blaster Oil",
    "Hyper Lead Oil",
    "Launcher Oil",
    "Overclock Oil",
    "Puncher Oil",
    "Slow Punch Oil",
    "Spartan Oil",
    "Terminator Oil",
];

const oilsDur = [
    "Dense Oil",
    "Detune Oil",
    "Feature Gun Oil",
    "Gentle Oil",
    "Hefty Oil",
    "High Grade Oil",
    "Inherited Oil",
    "Release Oil",
    "Rigid System Oil",
    "Robust Mechanics Oil",
    "Rubber Oil",
    "Seated Fit Oil",
    "Sensible Oil",
    "Slippy Coating Oil",
    "Soft Bullet Oil",
    "Stiffy Fit Oil",
    "Trusty Old Oil",
];

const oilsPen = [
    "Bad Planet Oil",
    "Bystander Oil",
    "Collateral Oil",
    "Considerate Oil",
    "Farsighted Oil",
    "Heavy Lead Oil",
    "Inconsiderate Oil",
    "Jungian Oil",
    "Needleye Oil",
    "Overdose Oil",
    "Penetration Oil",
    "Rigor Oil",
    "Sect Oil",
    "Surgical Laser Oil",
    "Too Much Oil",
    "Untechnical Oil",
    "Vasectomy Oil",
];

const oilsProj = [
    "Black Friday Oil",
    "Bombard Oil",
    "Boomstick Oil",
    "Careless Splitter Oil",
    "Division Oil",
    "Double Nothing Oil",
    "Elephant Oil",
    "Gemini Oil",
    "Matrix Oil",
    "Multichamber Oil",
    "Multishot Oil",
    "Parallel Mag Oil",
    "Scatter Oil",
    "Shredder Oil",
    "Suppressive Oil",
    "Tandem Oil",
    "Twice Oil",
    "Two Time Oil",
];

const oilsRecoil = [
    "Braced Oil",
    "Casual Oil",
    "Contained Force Oil",
    "Easy Oil",
    "Easy Plop Oil",
    "Flow Funnel Oil",
    "Less Recoil Oil",
    "Modern Technology Oil",
    "Peashooter Oil",
    "Purse Gun Oil",
    "Ready Oil",
    "Relax Oil",
    "Safety Oil",
    "Stability Oil",
    "Stable Hip Oil",
    "Tension Oil",
    "Vegetable Oil",
];

const oilsReload = [
    "Action Oil",
    "Airsoft Oil",
    "Compo Oil",
    "Cycle Oil",
    "Double Lock Oil",
    "Dynamic Oil",
    "Gunslinger Oil",
    "Fidget Lord Oil",
    "Main Discipline Oil",
    "Main Focus Oil",
    "Nerf Oil",
    "Reload Oil",
    "Rush Job Oil",
    "Shaved Clip Oil",
    "Speed Trade Oil",
    "Tactical Oil",
    "Task Oil",
    "Tech Support Oil",
];

const oilsRPM = [
    "Attack Speed Oil",
    "BB Oil",
    "Blurt Oil",
    "Bolt Oil",
    "Double Fire Oil",
    "Fragile System Oil",
    "Lightweight Oil",
    "Machine Oil",
    "No Look Oil",
    "Perforate Oil",
    "Rapid Internals Oil",
    "Rookie Oil",
    "Shower Oil",
    "Spitter Oil",
    "Stationary Oil",
    "Waster Oil",
    "Zero Fucks Oil",
];

const oilsSpread = [
    "Altruistic Oil",
    "Artillery Oil",
    "Bowl Oil",
    "Careful Oil",
    "Dead Center Oil",
    "Exotic Barrel Oil",
    "Hip Marksman Oil",
    "Lost In Focus Oil",
    "Plinker Oil",
    "Shellman Oil",
    "Slick Oil",
    "Spread Oil",
    "Stoic Oil",
    "Thorough Oil",
    "Vegan Oil",
];

const gunsAll = [
    "P38 Dirk", "Socom 9", "Star & Witness", "Gravekeeper", "Beck 8",
    "Salamander", "Bronco 89", "Flicker", "Unknown", "Hell 'N' Back",
    "Cavalier", "Snut .38", "Palehorse Topclipper", ".357 Balthazar",
    "Wyatt PULSAR", "Breacher 8", "Mossman", "Arbiter 2", "Augusta",
    "1889 Mario", "Flock 76", "Majordome", "Drifter 9", "Vrede",
    "Ploika Compact", "Ferryman", "M3 Termite", "Deathstar PG",
    "Valet", "Corpsemaker", "Catacoil Rapid X", "Type 80 Typhoon",
    "M11A2 Fisk", "Wingman", "Rektor 100rd", "Duhar", "Neuraxis F22",
    "Knop .22", "M182 Pierre-Fusil", "Tailor Marksman MKII",
    "Farsight", "Rokua .308", "Dolphin 99", "D4RT",
    "Impala Gravita", "Longboy"
];

const gunsPistols = [
    "P38 Dirk", "Socom 9", "Star & Witness", "Gravekeeper",
    "Beck 8", "Salamander", "Bronco 89", "Flicker",
    "Unknown", "Hell 'N' Back", "Cavalier"
];

const gunsRevolvers = [
    "Snut .38", "Palehorse Topclipper",
    ".357 Balthazar", "Wyatt PULSAR"
];

const gunsShotguns = [
    "Breacher 8", "Mossman", "Arbiter 2",
    "Augusta", "1889 Mario", "Flock 76", "Majordome"
];

const gunsSMGs = [
    "Drifter 9", "Vrede", "Ploika Compact",
    "Ferryman", "M3 Termite", "Deathstar PG", "Valet"
];

const gunsARs = [
    "Corpsemaker", "Catacoil Rapid X",
    "Type 80 Typhoon", "M11A2 Fisk", "Wingman"
];

const gunsLMGs = [
    "Rektor 100rd", "Duhar", "Neuraxis F22"
];

const gunsRifles = [
    "Knop .22", "M182 Pierre-Fusil",
    "Tailor Marksman MKII", "Farsight"
];

const gunsSnipers = [
    "Rokua .308", "Dolphin 99",
    "D4RT", "Impala Gravita", "Longboy"
];