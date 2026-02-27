// Global Variables

let weaponsData = null;
let oilsData = null;
let selectedWeapon = null;
let modifiedWeapon = null;
let oil1 = null;
let oil2 = null;
let oil3 = null;
let oil4 = null;
let oil5 = null;
let rolledOils = [];
let weaponName = null;
let chamberData = null;
let selectedChamber = null;
let oilStatModifiers = null;



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
    selectedWeapon = null;
    modifiedWeapon = null;
    oil1 = null;
    oil2 = null;
    oil3 = null;
    oil4 = null;
    oil5 = null;
    rolledOils = [];
    selectedChamber = null;
    oilStatModifiers = oilsData?.Oil["Default"];
    rollWeapon(weaponName);
    rollOils();
    oilCalcs(oilStatModifiers);
}

function addName(name, value, type) {
    if (type === "weapon") {
        document.getElementById("cardWeaponName").textContent = name;
    } else if (type === "oil") {
        console.log(value);
        document.getElementById(value).textContent = name;
    }
}

async function loadChamber() {
    const response = await fetch("./Chamber.json");
    chamberData = await response.json();
}

async function loadWeapons() {
    const response = await fetch("./Weapons.json");
    weaponsData = await response.json();
}

async function loadOils() {
    const response = await fetch("./Oils.json");
    oilsData = await response.json();
}

function oilStats(selectedOil) {
    if (selectedOil.AmmoConsumeChance != 0.0) {
        oilStatModifiers.AmmoConsumeChance += selectedOil.AmmoConsumeChance;
    }
    if (selectedOil.Bounces != 0) {
        oilStatModifiers.Bounces += selectedOil.Bounces;
    }
    if (selectedOil.BulletDrop != 0) {
        oilStatModifiers.BulletDrop += selectedOil.BulletDrop;
    }
    if (selectedOil.BulletSpeed != 0.0) {
        oilStatModifiers.BulletSpeed += selectedOil.BulletSpeed;
    }
    if (selectedOil.ExtraAmmoUseChance != 0.0) {
        oilStatModifiers.ExtraAmmoUseChance += selectedOil.ExtraAmmoUseChance;
    }
    if (selectedOil.BaseCritChance != 0.0) {
        oilStatModifiers.BaseCritChance += selectedOil.BaseCritChance;
    }
    if (selectedOil.DamageAdd != 0.0) {
        oilStatModifiers.DamageAdd += selectedOil.DamageAdd;
    }
    if (selectedOil.DamageMult != 0.0) {
        oilStatModifiers.DamageMult += selectedOil.DamageMult;
    }
    if (selectedOil.CanADS != "Yes") {
        oilStatModifiers.CanADS = selectedOil.CanADS;
    }
    if (selectedOil.JumpPower != 0.0) {
        oilStatModifiers.JumpPower += selectedOil.JumpPower;
    }
    if (selectedOil.LootDropChance != 0.0) {
        oilStatModifiers.LootDropChance += selectedOil.LootDropChance;
    }
    if (selectedOil.DurabilityMult != 0.0) {
        oilStatModifiers.DurabilityMult += selectedOil.DurabilityMult;
    }
    if (selectedOil.MovementSpeedMult != 0.0) {
        oilStatModifiers.MovementSpeedMult += selectedOil.MovementSpeedMult;
    }
    if (selectedOil.MoneyDrops != "Yes") {
        oilStatModifiers.MoneyDrops = selectedOil.MoneyDrops;
    }
    if (selectedOil.OrganDrops != "Yes") {
        oilStatModifiers.OrganDrops = selectedOil.OrganDrops;
    }
    if (selectedOil.Penetrations != 0) {
        oilStatModifiers.Penetrations += selectedOil.Penetrations;
    }
    if (selectedOil.ProjectileMult != 0.0) {
        oilStatModifiers.ProjectileMult += selectedOil.ProjectileMult;
    }
    if (selectedOil.RPM != 0.0) {
        oilStatModifiers.RPM += selectedOil.RPM;
    }
    if (selectedOil.RecoilAdd != 0.0) {
        oilStatModifiers.RecoilAdd += selectedOil.RecoilAdd;
    }
    if (selectedOil.RecoilMult != 0.0) {
        oilStatModifiers.RecoilMult += selectedOil.RecoilMult;
    }
    if (selectedOil.ReloadSpeed != 0.0) {
        oilStatModifiers.ReloadSpeed += selectedOil.ReloadSpeed;
    }
    if (selectedOil.SpreadAdd != 0.0) {
        oilStatModifiers.SpreadAdd += selectedOil.SpreadAdd;
    }
    if (selectedOil.SpreadMult != 0.0) {
        oilStatModifiers.SpreadMult += selectedOil.SpreadMult;
    }
    if (selectedOil.Drag != 0.0) {
        oilStatModifiers.Drag += selectedOil.Drag;
    }
    if (selectedOil.DurabilityUsage != 0.0) {
        oilStatModifiers.DurabilityUsage += selectedOil.DurabilityUsage;
    }
    if (selectedOil.BulletBounciness != 0.0) {
        oilStatModifiers.BulletBounciness += selectedOil.BulletBounciness;
    }
    if (selectedOil.MovingAccuracy != 0.0) {
        oilStatModifiers.MovingAccuracy += selectedOil.MovingAccuracy;
    }
}

function oilCalcs(calcOil) {

    let weapon = modifiedWeapon;
    let weaponOriginal = selectedWeapon;
    let chamber = selectedChamber;

    chamber = getChamberByName(`Chamber Chisel - ${weaponOriginal.AmmoType}`)
    console.log(calcOil);

    if (weapon.AmmoType != "Energy") {
        weapon.Damage = weapon.DamageMult * chamber.Damage;
        console.log(`Weapon damage: ${weapon.Damage}`);
        weapon.AmmoType = chamber.AmmoType;
        weapon.Projectiles = chamber.Projectiles;
    }

    // Oils to Weapon calculations & card additions
    //// Clear Main Card fields
    /*this.cardDamage.Inlines.Clear();
    this.cardDamageTotal.Inlines.Clear();
    this.cardSpread.Inlines.Clear();
    this.cardBaseCritChance.Inlines.Clear();
    this.cardTotalCritChance.Inlines.Clear();
    this.cardBounces.Inlines.Clear();
    this.cardReloadSpeed.Inlines.Clear();
    this.cardReloadTime.Inlines.Clear();
    this.cardBulletSpeed.Inlines.Clear();
    this.cardCanADS.Inlines.Clear();
    this.cardLootDropChance.Inlines.Clear();
    this.cardDrag.Inlines.Clear();
    this.cardDurabilityUsage.Inlines.Clear();
    this.cardRPM.Inlines.Clear();
    this.cardDurability.Inlines.Clear();
    this.cardADSCritChance.Inlines.Clear();
    this.cardPenetrations.Inlines.Clear();
    this.cardRecoil.Inlines.Clear();
    this.cardMoneyDrops.Inlines.Clear();
    this.cardOrganDrops.Inlines.Clear();
    this.cardWeaponWeight.Inlines.Clear();
    this.cardFinalMovementSpeed.Inlines.Clear();
    this.cardAmmoConsumeChance.Inlines.Clear();
    this.cardExtraAmmoUseChance.Inlines.Clear();
    this.cardBulletDrop.Inlines.Clear();
    this.cardJumpPower.Inlines.Clear();
    this.cardBulletDropMeters.Inlines.Clear();
    this.cardShotsToBreak.Inlines.Clear();*/

    /////////////
    //// RPM ////
    /////////////

    /*weapon.RPM *= (1 + calcOil.RPM);

    if (weapon.RPM < 1) {
        weapon.RPM = 1;
    }

    if (weapon.RPM > weaponOriginal.RPM) {
                Run runRPM = new Run($"{weapon.RPM.ToString("#####0.#")}");
        runRPM.Foreground = Brushes.Lime;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.Lime;

                Run runNoRPM = new Run($"({weaponOriginal.RPM})");
        runNoRPM.FontFamily = new FontFamily("Fredoka Light");

        this.cardRPM.Inlines.Add("RPM: ");
        this.cardRPM.Inlines.Add(runRPM);
        this.cardRPM.Inlines.Add(runArrowUp);
        this.cardRPM.Inlines.Add(runSpace);
        this.cardRPM.Inlines.Add(runNoRPM);
    }
    if (weapon.RPM < weaponOriginal.RPM) {
                Run runRPM = new Run($"{weapon.RPM.ToString("#####0.#")}");
        runRPM.Foreground = Brushes.OrangeRed;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.OrangeRed;

                Run runNoRPM = new Run($"({weaponOriginal.RPM})");
        runNoRPM.FontFamily = new FontFamily("Fredoka Light");

        this.cardRPM.Inlines.Add("RPM: ");
        this.cardRPM.Inlines.Add(runRPM);
        this.cardRPM.Inlines.Add(runArrowDown);
        this.cardRPM.Inlines.Add(runSpace);
        this.cardRPM.Inlines.Add(runNoRPM);
    }
    if (weapon.RPM == weaponOriginal.RPM) {
        this.cardRPM.Inlines.Add($"RPM: {weapon.RPM}");
    }

    ///////////////////////////////
    //// Ammo Consume Chance ////
    ///////////////////////////////

    weapon.AmmoConsumeChance += calcOil.AmmoConsumeChance;
    weapon.AmmoConsumeChance *= 100;

    if (weapon.AmmoConsumeChance < 0) {
        weapon.AmmoConsumeChance = 0;
    }

    if (weapon.AmmoConsumeChance < 100) {
                Run runAmmoConsumeChance = new Run($"{weapon.AmmoConsumeChance.ToString("#####0.#")}%");
        runAmmoConsumeChance.Foreground = Brushes.Lime;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.Lime;

                Run runNoAmmoConsumeChance = new Run("(100%)");
        runNoAmmoConsumeChance.FontFamily = new FontFamily("Fredoka Light");

        this.cardAmmoConsumeChance.Inlines.Add("Ammo Consume Chance: ");
        this.cardAmmoConsumeChance.Inlines.Add(runAmmoConsumeChance);
        this.cardAmmoConsumeChance.Inlines.Add(runArrowDown);
        this.cardAmmoConsumeChance.Inlines.Add(runSpace);
        this.cardAmmoConsumeChance.Inlines.Add(runNoAmmoConsumeChance);
    }
    if (weapon.AmmoConsumeChance == 100) {
        this.cardAmmoConsumeChance.Inlines.Add("Ammo Consume Chance: 100%");
    }

    ///////////////////////////////
    //// Extra Ammo Use Chance ////
    ///////////////////////////////

    weapon.ExtraAmmoUseChance += calcOil.ExtraAmmoUseChance;
    weapon.ExtraAmmoUseChance *= 100;

    if (weapon.ExtraAmmoUseChance > 100) {
        weapon.ExtraAmmoUseChance = 100;
    }

    if (weapon.ExtraAmmoUseChance > 0.0) {
                Run runExtraAmmoUseChance = new Run($"{weapon.ExtraAmmoUseChance.ToString("#####0.#")}%");
        runExtraAmmoUseChance.Foreground = Brushes.OrangeRed;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.OrangeRed;

                Run runNoExtraAmmoUseChance = new Run("(0%)");
        runNoExtraAmmoUseChance.FontFamily = new FontFamily("Fredoka Light");

        this.cardExtraAmmoUseChance.Inlines.Add("Extra Ammo Use Chance: ");
        this.cardExtraAmmoUseChance.Inlines.Add(runExtraAmmoUseChance);
        this.cardExtraAmmoUseChance.Inlines.Add(runArrowUp);
        this.cardExtraAmmoUseChance.Inlines.Add(runSpace);
        this.cardExtraAmmoUseChance.Inlines.Add(runNoExtraAmmoUseChance);
    }
    if (weapon.ExtraAmmoUseChance == 0) {
        this.cardExtraAmmoUseChance.Inlines.Add("Extra Ammo Use Chance: 0%");
    }

    /////////////////
    //// Bounces ////
    /////////////////

    weapon.Bounces = calcOil.Bounces;

    if (weapon.Bounces > 0.0) {
                Run runBounces = new Run(weapon.Bounces.ToString("#####0.#"));
        runBounces.Foreground = Brushes.Lime;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;

                Run runNoBounce = new Run("(0)");
        runNoBounce.FontFamily = new FontFamily("Fredoka Light");

        this.cardBounces.Inlines.Add("Bounces: ");
        this.cardBounces.Inlines.Add(runBounces);
        this.cardBounces.Inlines.Add(runArrowUp1);
        this.cardBounces.Inlines.Add(runSpace);
        this.cardBounces.Inlines.Add(runNoBounce);
    }
    else {
        this.cardBounces.Inlines.Add("Bounces: ");
        this.cardBounces.Inlines.Add(weapon.Bounces.ToString("#####0.#"));
    }

    /////////////////////
    //// Bullet Drop ////
    /////////////////////

    weapon.BulletDrop += calcOil.BulletDrop;

    if (weapon.BulletDrop > 0) {
                Run runBulletDrop = new Run($"{weapon.BulletDrop.ToString("#####0.#")}");
        runBulletDrop.Foreground = Brushes.OrangeRed;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.OrangeRed;

                Run runNoBulletDrop = new Run("(0)");
        runNoBulletDrop.FontFamily = new FontFamily("Fredoka Light");

        this.cardBulletDrop.Inlines.Add("Bullet Drop: ");
        this.cardBulletDrop.Inlines.Add(runBulletDrop);
        this.cardBulletDrop.Inlines.Add(runArrowUp);
        this.cardBulletDrop.Inlines.Add(runSpace);
        this.cardBulletDrop.Inlines.Add(runNoBulletDrop);

        this.cardDropImage.Source = new BitmapImage(new Uri(".\\Images\\bullet drop pos.png", UriKind.Relative));

                double dropMeters = (100 / (Math.Log(weapon.BulletDrop)) - 18);
                double meterResult = Math.Round(dropMeters, 2, MidpointRounding.AwayFromZero);
                Run runDropMeters = new Run(meterResult.ToString());

        this.cardBulletDropMeters.Inlines.Add(meterResult.ToString());
        this.cardBulletDropMeters.Inlines.Add(" meters");
    }
    if (weapon.BulletDrop == 0) {
        this.cardBulletDrop.Inlines.Add("Bullet Drop: 0");
        this.cardDropImage.Source = new BitmapImage(new Uri(".\\Images\\bullet drop 0.png", UriKind.Relative));
    }

    //////////////////////
    //// Bullet Speed ////
    //////////////////////

    weapon.BulletSpeed += calcOil.BulletSpeed;
    weapon.BulletSpeed *= 100;

    if (weapon.BulletSpeed < 1) {
        weapon.BulletSpeed = 1;
    }

    if (weapon.BulletSpeed > 100) {
                Run runBulletSpeed = new Run($"{weapon.BulletSpeed.ToString("#####0.#")}%");
        runBulletSpeed.Foreground = Brushes.Lime;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.Lime;

                Run runNoBulletSpeed = new Run("(100%)");
        runNoBulletSpeed.FontFamily = new FontFamily("Fredoka Light");

        this.cardBulletSpeed.Inlines.Add("Bullet Speed: ");
        this.cardBulletSpeed.Inlines.Add(runBulletSpeed);
        this.cardBulletSpeed.Inlines.Add(runArrowUp);
        this.cardBulletSpeed.Inlines.Add(runSpace);
        this.cardBulletSpeed.Inlines.Add(runNoBulletSpeed);
    }
    if (weapon.BulletSpeed < 100) {
        if (weapon.BulletSpeed < 1) {
            weapon.BulletSpeed = 1;
        }
                Run runBulletSpeed = new Run($"{weapon.BulletSpeed.ToString("#####0.#")}%");
        runBulletSpeed.Foreground = Brushes.OrangeRed;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.OrangeRed;

                Run runNoBulletSpeed = new Run("(100%)");
        runNoBulletSpeed.FontFamily = new FontFamily("Fredoka Light");

        this.cardBulletSpeed.Inlines.Add("Bullet Speed: ");
        this.cardBulletSpeed.Inlines.Add(runBulletSpeed);
        this.cardBulletSpeed.Inlines.Add(runArrowDown);
        this.cardBulletSpeed.Inlines.Add(runSpace);
        this.cardBulletSpeed.Inlines.Add(runNoBulletSpeed);
    }
    if (weapon.BulletSpeed == 100) {
        this.cardBulletSpeed.Inlines.Add("Bullet Speed: 100%");
    }

    //////////////////////////
    //// Base Crit Chance ////
    //////////////////////////

    weapon.BaseCritChance += (calcOil.BaseCritChance * 100);

    if (weapon.BaseCritChance > 0.0) {
                Run runCrit = new Run($"{weapon.BaseCritChance.ToString("#####0.#")}%");
        runCrit.Foreground = Brushes.Lime;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;

                Run runNoCrit = new Run("(0%)");
        runNoCrit.FontFamily = new FontFamily("Fredoka Light");

        this.cardBaseCritChance.Inlines.Add("Base Crit Chance: ");
        this.cardBaseCritChance.Inlines.Add(runCrit);
        this.cardBaseCritChance.Inlines.Add(runArrowUp1);
        this.cardBaseCritChance.Inlines.Add(runSpace);
        this.cardBaseCritChance.Inlines.Add(runNoCrit);
    }
    else {
        this.cardBaseCritChance.Inlines.Add("Base Crit Chance: 0%");
    }

    /////////////////////////
    //// ADS Crit Chance ////
    /////////////////////////

    weapon.ADSCritChance += (attachmentStats.ADSCritChance * 100);

    if (weapon.ADSCritChance > 0.0) {
                Run runACrit = new Run($"{weapon.ADSCritChance.ToString("#####0.#")}%");
        runACrit.Foreground = Brushes.Lime;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;

                Run runNoACrit = new Run("(0%)");
        runNoACrit.FontFamily = new FontFamily("Fredoka Light");

        this.cardADSCritChance.Inlines.Add("ADS Crit Chance: ");
        this.cardADSCritChance.Inlines.Add(runACrit);
        this.cardADSCritChance.Inlines.Add(runArrowUp1);
        this.cardADSCritChance.Inlines.Add(runSpace);
        this.cardADSCritChance.Inlines.Add(runNoACrit);
    }
    else {
        this.cardADSCritChance.Inlines.Add("ADS Crit Chance: 0%");
    }

    ///////////////////////////
    //// Total Crit Chance ////
    ///////////////////////////

    weapon.TotalCritChance = weapon.ADSCritChance + weapon.BaseCritChance;

    if (weapon.TotalCritChance > 0.0) {
                Run runTCrit = new Run($"{weapon.TotalCritChance.ToString("#####0.#")}%");
        runTCrit.Foreground = Brushes.Lime;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;

                Run runNoTCrit = new Run("(0%)");
        runNoTCrit.FontFamily = new FontFamily("Fredoka Light");

        this.cardTotalCritChance.Inlines.Add("Total: ");
        this.cardTotalCritChance.Inlines.Add(runTCrit);
        this.cardTotalCritChance.Inlines.Add(runArrowUp1);
        this.cardTotalCritChance.Inlines.Add(runSpace);
        this.cardTotalCritChance.Inlines.Add(runNoTCrit);
    }
    else {
        this.cardTotalCritChance.Inlines.Add("Total: 0%");
    }*/

    //////////////////////////////
    //// Damage & Projectiles ////
    //////////////////////////////

    //// Projectiles
    weapon.Projectiles *= (1 + calcOil.ProjectileMult);
    //// Damage Add
    weapon.Damage += calcOil.DamageAdd;
    var zeroDamage = weapon.Damage;
    //// Damage Multiplier
    weapon.Damage *= (1 + calcOil.DamageMult /*+ attachmentStats.DamageMult*/);
    if (zeroDamage > 0 && weapon.Damage <= 0) {
        weapon.Damage = zeroDamage * 0.01;
    }
    //// Total Damage Calc
    weapon.TotalDamage = weapon.Damage * weapon.Projectiles * weapon.MultiShot;

    document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;
    /*
    let runDmgProjOrig = null;

    if (weapon.MultiShot == 1.0) {
        runDmgProjOrig = new Run($"({weaponOriginal.Damage.ToString("#####0.#")}x{weaponOriginal.Projectiles.ToString("#####0.#")})");
        runDmgProjOrig.FontFamily = new FontFamily("Fredoka Light");
    }
    if (weapon.MultiShot > 1.0) {
        runDmgProjOrig = new Run($"({weaponOriginal.Damage.ToString("#####0.#")}x{weaponOriginal.MultiShot.ToString("#####0.#")}x{weaponOriginal.Projectiles.ToString("#####0.#")})");
        runDmgProjOrig.FontFamily = new FontFamily("Fredoka Light");
    }


    ////// Damage & Projectiles card addition
    if (weapon.Damage < weaponOriginal.Damage) {
                Run runDamageFinal = new Run(weapon.Damage.ToString("#####0.#"));
        runDamageFinal.Foreground = Brushes.OrangeRed;

                Run runArrowDown1 = new Run("🡇");
        runArrowDown1.Foreground = Brushes.OrangeRed;
                Run runArrowDown2 = new Run("🡇");
        runArrowDown2.Foreground = Brushes.OrangeRed;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;
                Run runArrowUp2 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;


        if (weapon.Projectiles < weaponOriginal.Projectiles) {
                    Run runProjFinal = new Run(weapon.Projectiles.ToString());
            runProjFinal.Foreground = Brushes.OrangeRed;

            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(runDamageFinal);
            this.cardDamage.Inlines.Add(runArrowDown1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runProjFinal);
            this.cardDamage.Inlines.Add(runArrowDown2);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
        if (weapon.Projectiles > weaponOriginal.Projectiles) {
                    Run runProjFinal = new Run(weapon.Projectiles.ToString("#####0.#"));
            runProjFinal.Foreground = Brushes.Lime;

            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(runDamageFinal);
            this.cardDamage.Inlines.Add(runArrowDown1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runProjFinal);
            this.cardDamage.Inlines.Add(runArrowUp1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
        if (weapon.Projectiles == weaponOriginal.Projectiles) {
            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(runDamageFinal);
            this.cardDamage.Inlines.Add(runArrowDown1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(weapon.Projectiles.ToString());
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
    }
    if (weapon.Damage > weaponOriginal.Damage) {
                Run runDamageFinal = new Run(weapon.Damage.ToString("#####0.#"));
        runDamageFinal.Foreground = Brushes.Lime;

                Run runArrowDown1 = new Run("🡇");
        runArrowDown1.Foreground = Brushes.OrangeRed;
                Run runArrowDown2 = new Run("🡇");
        runArrowDown2.Foreground = Brushes.OrangeRed;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;
                Run runArrowUp2 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;


        if (weapon.Projectiles < weaponOriginal.Projectiles) {
                    Run runProjFinal = new Run(weapon.Projectiles.ToString("#####0.#"));
            runProjFinal.Foreground = Brushes.OrangeRed;

            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(runDamageFinal);
            this.cardDamage.Inlines.Add(runArrowUp1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runProjFinal);
            this.cardDamage.Inlines.Add(runArrowDown1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
        if (weapon.Projectiles > weaponOriginal.Projectiles) {
                    Run runProjFinal = new Run(weapon.Projectiles.ToString("#####0.#"));
            runProjFinal.Foreground = Brushes.Lime;

            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(runDamageFinal);
            this.cardDamage.Inlines.Add(runArrowUp1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runProjFinal);
            this.cardDamage.Inlines.Add(runArrowUp2);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
        if (weapon.Projectiles == weaponOriginal.Projectiles) {
            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(runDamageFinal);
            this.cardDamage.Inlines.Add(runArrowUp1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(weapon.Projectiles.ToString());
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
    }
    if (weapon.Damage == weaponOriginal.Damage) {
                Run runArrowDown1 = new Run("🡇");
        runArrowDown1.Foreground = Brushes.OrangeRed;
                Run runArrowDown2 = new Run("🡇");
        runArrowDown2.Foreground = Brushes.OrangeRed;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;
                Run runArrowUp2 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;


        if (weapon.Projectiles < weaponOriginal.Projectiles) {
                    Run runProjFinal = new Run(weapon.Projectiles.ToString("#####0.#"));
            runProjFinal.Foreground = Brushes.OrangeRed;

            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(weapon.Damage.ToString());
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runProjFinal);
            this.cardDamage.Inlines.Add(runArrowDown1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
        if (weapon.Projectiles > weaponOriginal.Projectiles) {
                    Run runProjFinal = new Run(weapon.Projectiles.ToString("#####0.#"));
            runProjFinal.Foreground = Brushes.Lime;

            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(weapon.Damage.ToString());
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runProjFinal);
            this.cardDamage.Inlines.Add(runArrowUp1);
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runDmgProjOrig);
        }
        if (weapon.Projectiles == weaponOriginal.Projectiles) {
            this.cardDamage.Inlines.Add("Damage: ");
            this.cardDamage.Inlines.Add(weapon.Damage.ToString());
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(runX);
            if (weapon.MultiShot > 1.0) {
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(weapon.MultiShot.ToString());
                this.cardDamage.Inlines.Add(runSpace);
                this.cardDamage.Inlines.Add(runX);
            }
            this.cardDamage.Inlines.Add(runSpace);
            this.cardDamage.Inlines.Add(weapon.Projectiles.ToString("#####0.#"));
            this.cardDamage.Inlines.Add(runSpace);
        }
    }

            ////// Total Damage card addition

            Run runTotDmgOrig = new Run($"({weaponOriginal.TotalDamage.ToString("#####0.#")})");
    runTotDmgOrig.FontFamily = new FontFamily("Fredoka Light");

    if (weapon.TotalDamage > weaponOriginal.TotalDamage) {
                Run runTotDmgFinal = new Run(weapon.TotalDamage.ToString("#####0.#"));
        runTotDmgFinal.Foreground = Brushes.Lime;

                Run runArrowDown1 = new Run("🡇");
        runArrowDown1.Foreground = Brushes.OrangeRed;
                Run runArrowDown2 = new Run("🡇");
        runArrowDown2.Foreground = Brushes.OrangeRed;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;
                Run runArrowUp2 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;


        this.cardDamageTotal.Inlines.Add("Total: ");
        this.cardDamageTotal.Inlines.Add(runTotDmgFinal);
        this.cardDamageTotal.Inlines.Add(runArrowUp1);
        this.cardDamageTotal.Inlines.Add(runSpace);
        this.cardDamageTotal.Inlines.Add(runTotDmgOrig);
    }
    if (weapon.TotalDamage < weaponOriginal.TotalDamage) {
                Run runTotDmgFinal = new Run(weapon.TotalDamage.ToString("#####0.#"));
        runTotDmgFinal.Foreground = Brushes.OrangeRed;

                Run runArrowDown1 = new Run("🡇");
        runArrowDown1.Foreground = Brushes.OrangeRed;
                Run runArrowDown2 = new Run("🡇");
        runArrowDown2.Foreground = Brushes.OrangeRed;

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;
                Run runArrowUp2 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;


        this.cardDamageTotal.Inlines.Add("Total: ");
        this.cardDamageTotal.Inlines.Add(runTotDmgFinal);
        this.cardDamageTotal.Inlines.Add(runArrowDown1);
        this.cardDamageTotal.Inlines.Add(runSpace);
        this.cardDamageTotal.Inlines.Add(runTotDmgOrig);
    }
    if (weapon.TotalDamage == weaponOriginal.TotalDamage) {
        this.cardDamageTotal.Inlines.Add("Total: ");
        this.cardDamageTotal.Inlines.Add(weapon.TotalDamage.ToString("#####0.#"));
    }

    /////////////////
    //// Can ADS ////
    /////////////////

    weapon.CanADS = calcOil.CanADS;

    if (weapon.CanADS == "No") {
                Run runCanADS = new Run(weapon.CanADS);
        runCanADS.Foreground = Brushes.Goldenrod;

        this.cardCanADS.Inlines.Add("Can ADS: ");
        this.cardCanADS.Inlines.Add(runCanADS);
    }
    if (weapon.CanADS == "Yes") {
        this.cardCanADS.Inlines.Add("Can ADS: Yes");
    }

    ////////////////////
    //// Jump Power ////
    ////////////////////

    weapon.JumpPower += calcOil.JumpPower;
    weapon.JumpPower *= 100;
    weaponOriginal.JumpPower *= 100;

    if (weapon.JumpPower < 1) {
        weapon.JumpPower = 1;
    }

    if (weapon.JumpPower < weaponOriginal.JumpPower) {
                Run runJump = new Run($"{weapon.JumpPower.ToString("#####0.#")}%");
        runJump.Foreground = Brushes.OrangeRed;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.OrangeRed;

                Run runNoJump = new Run($"{weaponOriginal.JumpPower.ToString("#####0.#")}%");
        runNoJump.FontFamily = new FontFamily("Fredoka Light");

        this.cardJumpPower.Inlines.Add("Jump Power: ");
        this.cardJumpPower.Inlines.Add(runJump);
        this.cardJumpPower.Inlines.Add(runArrowDown);
        this.cardJumpPower.Inlines.Add(runSpace);
        this.cardJumpPower.Inlines.Add(runNoJump);
    }
    if (weapon.JumpPower > weaponOriginal.JumpPower) {
                Run runJump = new Run($"{weapon.JumpPower.ToString("#####0.#")}%");
        runJump.Foreground = Brushes.Lime;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.Lime;

                Run runNoJump = new Run($"{weaponOriginal.JumpPower.ToString("#####0.#")}%");
        runNoJump.FontFamily = new FontFamily("Fredoka Light");

        this.cardJumpPower.Inlines.Add("Jump Power: ");
        this.cardJumpPower.Inlines.Add(runJump);
        this.cardJumpPower.Inlines.Add(runArrowUp);
        this.cardJumpPower.Inlines.Add(runSpace);
        this.cardJumpPower.Inlines.Add(runNoJump);
    }
    if (weapon.JumpPower == weaponOriginal.JumpPower) {
        this.cardJumpPower.Inlines.Add($"Jump Power: {weapon.JumpPower.ToString("#####0.#")}%");
    }

    //////////////////////////
    //// Loot Drop Chance ////
    //////////////////////////

    weapon.LootDropChance += calcOil.LootDropChance;
    weapon.LootDropChance *= 100;
    weaponOriginal.LootDropChance *= 100;

    if (weapon.LootDropChance < 0) {
        weapon.LootDropChance = 0;
    }

    if (weapon.LootDropChance < weaponOriginal.LootDropChance) {
                Run runLoot = new Run($"{weapon.LootDropChance.ToString("#####0.#")}%");
        runLoot.Foreground = Brushes.OrangeRed;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.OrangeRed;

                Run runNoLoot = new Run($"({weaponOriginal.LootDropChance.ToString("#####0.#")}%)");
        runNoLoot.FontFamily = new FontFamily("Fredoka Light");

        this.cardLootDropChance.Inlines.Add("Loot Drop Chance: ");
        this.cardLootDropChance.Inlines.Add(runLoot);
        this.cardLootDropChance.Inlines.Add(runArrowDown);
        this.cardLootDropChance.Inlines.Add(runSpace);
        this.cardLootDropChance.Inlines.Add(runNoLoot);
    }
    if (weapon.LootDropChance == weaponOriginal.LootDropChance) {
        this.cardLootDropChance.Inlines.Add($"Loot Drop Chance: {weapon.LootDropChance.ToString("#####0.#")}%");
    }

    ///////////////////////////////
    //// Durability Multiplier ////
    ///////////////////////////////

    weapon.Durability *= (1 + calcOil.DurabilityMult);

    if (weapon.Durability < 1) {
        weapon.Durability = 1;
    }

    if (weapon.Durability < weaponOriginal.Durability) {
                Run runDur = new Run($"{weapon.Durability.ToString("#####0.#")}");
        runDur.Foreground = Brushes.OrangeRed;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.OrangeRed;

                Run runNoDur = new Run(weaponOriginal.Durability.ToString("#####0.#"));
        runNoDur.FontFamily = new FontFamily("Fredoka Light");

        this.cardDurability.Inlines.Add("Durability: ");
        this.cardDurability.Inlines.Add(runDur);
        this.cardDurability.Inlines.Add(runArrowDown);
        this.cardDurability.Inlines.Add(runSpace);
        this.cardDurability.Inlines.Add(runNoDur);
    }
    if (weapon.Durability > weaponOriginal.Durability) {
                Run runDur = new Run($"{weapon.Durability.ToString("#####0.#")}");
        runDur.Foreground = Brushes.Lime;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.Lime;

                Run runNoDur = new Run(weaponOriginal.Durability.ToString("#####0.#"));
        runNoDur.FontFamily = new FontFamily("Fredoka Light");

        this.cardDurability.Inlines.Add("Durability: ");
        this.cardDurability.Inlines.Add(runDur);
        this.cardDurability.Inlines.Add(runArrowUp);
        this.cardDurability.Inlines.Add(runSpace);
        this.cardDurability.Inlines.Add(runNoDur);
    }
    if (weapon.Durability == weaponOriginal.Durability) {
        this.cardDurability.Inlines.Add($"Durability: {weapon.Durability.ToString("#####0.#")}");
    }


    /////////////////////////
    //// Movement Speed  ////
    /////////////////////////

    this.cardWeaponWeight.Inlines.Add($"Weapon Weight: {weapon.WeaponWeight.ToString("#####0.#")}");

            double weaponWeightAdjustment = (double)0.0;
            double s = weapon.MovementSpeedModifier;
            //// Duplicate calculation for original comparison
            double resultFirstMvmntStepComp = (1 - weapon.WeightClassFactor) * (1 + weaponWeightAdjustment);
            double resultSecondMvmntStepComp = 1 - resultFirstMvmntStepComp;
            double resultMovementSpeedComp = resultSecondMvmntStepComp * (s * 100);
            //// Actual Calculation
            double resultFirstMvmntStep = (1 - weapon.WeightClassFactor) * (1 + weaponWeightAdjustment);
            double resultSecondMvmntStep = 1 - resultFirstMvmntStep;
            double resultMovementSpeed = resultSecondMvmntStep * (s * 100);
    weapon.FinalMovementSpeed = resultMovementSpeed * (1 + calcOil.MovementSpeedMult + attachmentStats.MovementSpeedMult);

    if (weapon.FinalMovementSpeed < 1) {
        weapon.FinalMovementSpeed = 1;
    }

    //// Comparison for colors
    this.cardFinalMovementSpeed.Inlines.Clear();
    if (weapon.FinalMovementSpeed < resultMovementSpeedComp) {
                Run runMovementFinal = new Run($"{weapon.FinalMovementSpeed.ToString("#####0.#")}%");
        runMovementFinal.Foreground = Brushes.OrangeRed;

                Run runMovementComp = new Run($"{resultMovementSpeedComp.ToString("#####0.#")}%");
        runMovementComp.FontFamily = new FontFamily("Fredoka Light");

                Run runArrowDown1 = new Run("🡇");
        runArrowDown1.Foreground = Brushes.OrangeRed;

        this.cardFinalMovementSpeed.Inlines.Add($"Final Movement Speed: ");
        this.cardFinalMovementSpeed.Inlines.Add(runMovementFinal);
        this.cardFinalMovementSpeed.Inlines.Add(runSpace);
        this.cardFinalMovementSpeed.Inlines.Add(runArrowDown1);
        this.cardFinalMovementSpeed.Inlines.Add(runSpace);
        this.cardFinalMovementSpeed.Inlines.Add($"({runMovementComp})%");
    }
    if (weapon.FinalMovementSpeed > resultMovementSpeedComp) {
                Run runMovementFinal = new Run(weapon.FinalMovementSpeed.ToString("#####0.#"));
        runMovementFinal.Foreground = Brushes.Lime;

                Run runMovementComp = new Run($"{resultMovementSpeedComp.ToString("#####0.#")}%");
        runMovementComp.FontFamily = new FontFamily("Fredoka Light");

                Run runArrowUp1 = new Run("🡅");
        runArrowUp1.Foreground = Brushes.Lime;

        this.cardFinalMovementSpeed.Inlines.Add($"Final Movement Speed: ");
        this.cardFinalMovementSpeed.Inlines.Add(runMovementFinal);
        this.cardFinalMovementSpeed.Inlines.Add(runSpace);
        this.cardFinalMovementSpeed.Inlines.Add(runArrowUp1);
        this.cardFinalMovementSpeed.Inlines.Add(runSpace);
        this.cardFinalMovementSpeed.Inlines.Add(runMovementComp);
    }
    else {
        this.cardFinalMovementSpeed.Inlines.Add($"Final Movement Speed: {weapon.FinalMovementSpeed}%");
    }

    /////////////////////
    //// Money Drops ////
    /////////////////////

    weapon.MoneyDrops = calcOil.MoneyDrops;

    if (weapon.MoneyDrops == "No") {
                Run runMon = new Run($"{weapon.MoneyDrops}");
        runMon.Foreground = Brushes.OrangeRed;

        this.cardMoneyDrops.Inlines.Add("Money Drops: ");
        this.cardMoneyDrops.Inlines.Add(runMon);
        this.cardMoneyDrops.Inlines.Add(runSpace);
    }
    if (weapon.MoneyDrops == "Yes") {
        this.cardMoneyDrops.Inlines.Add($"Money Drops: {weapon.MoneyDrops}");
    }

    /////////////////////
    //// Organ Drops ////
    /////////////////////

    weapon.OrganDrops = calcOil.OrganDrops;

    if (weapon.OrganDrops == "No") {
                Run runOrg = new Run($"{weapon.OrganDrops}");
        runOrg.Foreground = Brushes.OrangeRed;


        this.cardOrganDrops.Inlines.Add("Organ Drops: ");
        this.cardOrganDrops.Inlines.Add(runOrg);
        this.cardOrganDrops.Inlines.Add(runSpace);
    }
    if (weapon.OrganDrops == "Yes") {
        this.cardOrganDrops.Inlines.Add($"Organ Drops: {weapon.OrganDrops}");
    }

    //////////////////////
    //// Penetrations ////
    //////////////////////

    weapon.Penetrations += calcOil.Penetrations;

    if (weapon.Penetrations > weaponOriginal.Penetrations) {
                Run runPen = new Run($"{weapon.Penetrations.ToString("#####0.#")}");
        runPen.Foreground = Brushes.Lime;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.Lime;

                Run runNoPen = new Run("(0)");
        runNoPen.FontFamily = new FontFamily("Fredoka Light");

        this.cardPenetrations.Inlines.Add("Penetrations: ");
        this.cardPenetrations.Inlines.Add(runPen);
        this.cardPenetrations.Inlines.Add(runArrowUp);
        this.cardPenetrations.Inlines.Add(runSpace);
        this.cardPenetrations.Inlines.Add(runNoPen);
    }
    if (weapon.Penetrations == weaponOriginal.Penetrations) {
        this.cardPenetrations.Inlines.Add($"Penetrations: {weapon.Penetrations.ToString()}");
    }

    ////////////////
    //// Recoil ////
    ////////////////

    if (weapon.AmmoType == "Energy") {
        weapon.RecoilBase = 0.0;
    }
    if (weapon.AmmoType == "9mm") {
        weapon.RecoilBase = weapon.RecoilBase9mm;
    }
    if (weapon.AmmoType == "7.62mm") {
        weapon.RecoilBase = weapon.RecoilBase762;
    }
    if (weapon.AmmoType == "5.56mm") {
        weapon.RecoilBase = weapon.RecoilBase556;
    }
    if (weapon.AmmoType == ".50 BMG") {
        weapon.RecoilBase = weapon.RecoilBase50bmg;
    }
    if (weapon.AmmoType == "12Ga") {
        weapon.RecoilBase = weapon.RecoilBase12ga;
    }

    //// Recoil Add

    weapon.RecoilMult += calcOil.RecoilAdd;

    //// Recoil Multiplier

    weapon.RecoilBase *= (weapon.RecoilMult * (1 + calcOil.RecoilMult));

    if (weapon.RecoilBase < 1 && weapon.AmmoType != "Energy") {
        weapon.RecoilBase = 1;
    }

    if (weapon.RecoilBase < weaponOriginal.RecoilBase) {
                Run runRecoil = new Run($"{weapon.RecoilBase.ToString("#####0.#")}");
        runRecoil.Foreground = Brushes.Lime;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.Lime;

                Run runNoRecoil = new Run($"({weaponOriginal.RecoilBase.ToString("#####0.#")})");
        runNoRecoil.FontFamily = new FontFamily("Fredoka Light");

        this.cardRecoil.Inlines.Add("Recoil: ");
        this.cardRecoil.Inlines.Add(runRecoil);
        this.cardRecoil.Inlines.Add(runArrowDown);
        this.cardRecoil.Inlines.Add(runSpace);
        this.cardRecoil.Inlines.Add(runNoRecoil);
    }
    if (weapon.RecoilBase > weaponOriginal.RecoilBase) {
                Run runRecoil = new Run($"{weapon.RecoilBase.ToString("#####0.#")}");
        runRecoil.Foreground = Brushes.OrangeRed;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.OrangeRed;

                Run runNoRecoil = new Run($"({weaponOriginal.RecoilBase.ToString("#####0.#")})");
        runNoRecoil.FontFamily = new FontFamily("Fredoka Light");

        this.cardRecoil.Inlines.Add("Recoil: ");
        this.cardRecoil.Inlines.Add(runRecoil);
        this.cardRecoil.Inlines.Add(runArrowUp);
        this.cardRecoil.Inlines.Add(runSpace);
        this.cardRecoil.Inlines.Add(runNoRecoil);
    }
    if (weapon.RecoilBase == weaponOriginal.RecoilBase) {
        this.cardRecoil.Inlines.Add($"Recoil: {weapon.RecoilBase.ToString()}");
    }

    //////////////////////
    //// Reload Speed ////
    //////////////////////
    var reloadTimeModifier = (weapon.ReloadSpeed * (1 + calcOil.ReloadSpeed));
    weapon.ReloadSpeed *= ((1 + calcOil.ReloadSpeed) * 100);
    weaponOriginal.ReloadSpeed *= 100;

    if (weapon.ReloadSpeed < 1) {
        weapon.ReloadSpeed = 1;
    }

    if (weapon.ReloadSpeed < weaponOriginal.ReloadSpeed) {
                Run runReload = new Run($"{weapon.ReloadSpeed.ToString("#####0.#")}%");
        runReload.Foreground = Brushes.OrangeRed;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.OrangeRed;

                Run runNoReload = new Run("(100%)");
        runNoReload.FontFamily = new FontFamily("Fredoka Light");

        this.cardReloadSpeed.Inlines.Add("Reload Speed: ");
        this.cardReloadSpeed.Inlines.Add(runReload);
        this.cardReloadSpeed.Inlines.Add(runArrowDown);
        this.cardReloadSpeed.Inlines.Add(runSpace);
        this.cardReloadSpeed.Inlines.Add(runNoReload);
    }
    if (weapon.ReloadSpeed > weaponOriginal.ReloadSpeed) {
                Run runReload = new Run($"{weapon.ReloadSpeed.ToString("#####0.#")}%");
        runReload.Foreground = Brushes.Lime;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.Lime;

                Run runNoReload = new Run("(100%)");
        runNoReload.FontFamily = new FontFamily("Fredoka Light");

        this.cardReloadSpeed.Inlines.Add("Reload Speed: ");
        this.cardReloadSpeed.Inlines.Add(runReload);
        this.cardReloadSpeed.Inlines.Add(runArrowUp);
        this.cardReloadSpeed.Inlines.Add(runSpace);
        this.cardReloadSpeed.Inlines.Add(runNoReload);
    }
    if (weapon.ReloadSpeed == weaponOriginal.ReloadSpeed) {
        this.cardReloadSpeed.Inlines.Add($"Reload Speed: {weapon.ReloadSpeed.ToString()}%");
    }

    //// Reload time

    var reloadTime = weapon.ReloadTime / reloadTimeModifier;

    if (reloadTime > weapon.ReloadTime) {
                Run runReloadTime = new Run($"{reloadTime.ToString("###0.##")}s");
        runReloadTime.Foreground = Brushes.OrangeRed;

                Run runArrowDown = new Run("🡅");
        runArrowDown.Foreground = Brushes.OrangeRed;

                Run runNoReloadTime = new Run($"({weapon.ReloadTime.ToString("###0.##")}s)");
        runNoReloadTime.FontFamily = new FontFamily("Fredoka Light");

        this.cardReloadTime.Inlines.Add("Reload Time: ");
        this.cardReloadTime.Inlines.Add(runReloadTime);
        this.cardReloadTime.Inlines.Add(runArrowDown);
        this.cardReloadTime.Inlines.Add(runSpace);
        this.cardReloadTime.Inlines.Add(runNoReloadTime);
    }
    if (reloadTime < weaponOriginal.ReloadTime) {
                Run runReloadTime = new Run($"{reloadTime.ToString("###0.##")}s");
        runReloadTime.Foreground = Brushes.Lime;

                Run runArrowUp = new Run("🡇");
        runArrowUp.Foreground = Brushes.Lime;

                Run runNoReloadTime = new Run($"({weapon.ReloadTime.ToString("###0.##")}s)");
        runNoReloadTime.FontFamily = new FontFamily("Fredoka Light");

        this.cardReloadTime.Inlines.Add("Reload Time: ");
        this.cardReloadTime.Inlines.Add(runReloadTime);
        this.cardReloadTime.Inlines.Add(runArrowUp);
        this.cardReloadTime.Inlines.Add(runSpace);
        this.cardReloadTime.Inlines.Add(runNoReloadTime);
    }
    if (reloadTime == weaponOriginal.ReloadTime) {
        this.cardReloadTime.Inlines.Add($"Reload Time: {reloadTime.ToString("###0.##")}s");
    }


    ////////////////
    //// Spread ////
    ////////////////

    //// Spread Add

    if (weapon.AmmoType == "12Ga") {
        weapon.Spread = weapon.Spread12ga;
        weaponOriginal.Spread = weaponOriginal.Spread12ga;
    }
    else {
        weapon.Spread = weapon.SpreadOther;
        weaponOriginal.Spread = weaponOriginal.SpreadOther;
    }

    weapon.Spread += calcOil.SpreadAdd;
    weapon.Spread += attachmentStats.SpreadAdd;
    //// Spread Multiplier
    weapon.Spread *= (1 + calcOil.SpreadMult);

    if (weapon.Spread < 0) {
        weapon.Spread = 0;
    }

    if (weapon.Spread > weaponOriginal.Spread) {
                Run runSpread = new Run($"{weapon.Spread.ToString("#####0.##")}");
        runSpread.Foreground = Brushes.OrangeRed;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.OrangeRed;

                Run runNoSpread = new Run(weaponOriginal.Spread.ToString("#####0.##"));
        runNoSpread.FontFamily = new FontFamily("Fredoka Light");

        this.cardSpread.Inlines.Add("Spread: ");
        this.cardSpread.Inlines.Add(runSpread);
        this.cardSpread.Inlines.Add(runArrowUp);
        this.cardSpread.Inlines.Add(runSpace);
        this.cardSpread.Inlines.Add(runNoSpread);
    }
    if (weapon.Spread < weaponOriginal.Spread) {
                Run runSpread = new Run($"{weapon.Spread.ToString("#####0.##")}");
        runSpread.Foreground = Brushes.Lime;

                Run runArrowDown = new Run("🡇");
        runArrowDown.Foreground = Brushes.Lime;

                Run runNoSpread = new Run(weaponOriginal.Spread.ToString("#####0.##"));
        runNoSpread.FontFamily = new FontFamily("Fredoka Light");

        this.cardSpread.Inlines.Add("Spread: ");
        this.cardSpread.Inlines.Add(runSpread);
        this.cardSpread.Inlines.Add(runArrowDown);
        this.cardSpread.Inlines.Add(runSpace);
        this.cardSpread.Inlines.Add(runNoSpread);
    }
    if (weapon.Spread == weaponOriginal.Spread) {
        this.cardSpread.Inlines.Add($"Spread: {weapon.Spread.ToString()}");
    }

    //////////////
    //// Drag ////
    //////////////

    weapon.Drag += calcOil.Drag;

    if (weapon.Drag > 0) {
                Run runDrag = new Run(weapon.Drag.ToString("#####0.#"));
        runDrag.Foreground = Brushes.Goldenrod;

                Run runArrowUp = new Run("🡅");
        runArrowUp.Foreground = Brushes.Goldenrod;

                Run runNoDrag = new Run("(0)");
        runNoDrag.FontFamily = new FontFamily("Fredoka Light");

        this.cardDrag.Inlines.Add("Drag: ");
        this.cardDrag.Inlines.Add(runDrag);
        this.cardDrag.Inlines.Add(runArrowUp);
        this.cardDrag.Inlines.Add(runSpace);
        this.cardDrag.Inlines.Add(runNoDrag);
    }
    if (weapon.Drag == 0) {
        this.cardDrag.Inlines.Add("Drag: 0");
    }

    //////////////////////////
    //// Durability Usage ////
    //////////////////////////

    weapon.DurabilityUsage = calcOil.DurabilityUsage;

    this.cardDurabilityUsage.Inlines.Add($"Durability Usage: {weapon.DurabilityUsage.ToString("#####0.#")}");

    // Add Weapon to Grid
    this.build_box.Items[0] = (new MyItem { Item = "Gun", Selection = weapon.Name });

    // Write Weapon Name to Card
    this.cardWeaponName.Text = weapon.Name;
    this.cardWeaponType.Text = $"Type: {weapon.Type}";
    this.cardAmmoType.Text = $"Ammo Type: {weapon.AmmoType}";

    // Add image to card
    this.cardWeaponImage.Source = new BitmapImage(new Uri($".\\Images\\Guns\\{weapon.Name}.png", UriKind.Relative));

    //// Shots to break

    var shotsToBreak = weapon.Durability / weapon.DurabilityUsage;
    var shotsToBreakRounded = Math.Ceiling(shotsToBreak);

    this.cardShotsToBreak.Inlines.Add("Shots to Break: ");
    this.cardShotsToBreak.Inlines.Add(shotsToBreakRounded.ToString());*/
}

function getOilByName(name) {
    return oilsData?.Oil[name] || null;
}

function getWeaponByName(name) {
    return weaponsData?.Weapon[name] || null;
}

function getChamberByName(name) {
    return chamberData?.Chamber[name] || null;
}

function rollOils() {
    oil1 = document.getElementById("oils1selector");
    oil2 = document.getElementById("oils2selector");
    oil3 = document.getElementById("oils3selector");
    oil4 = document.getElementById("oils4selector");
    oil5 = document.getElementById("oils5selector");
    
    const selectedOil = [oil1, oil2, oil3, oil4, oil5];

    for (let i = 0; i < selectedOil.length; i++) {

        switch (selectedOil[i].value) {
            case "static-random-all":
                shuffle(oilsAll);
                rolledOils[i] = oilsAll[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-ammo-consume-chance":
                shuffle(oilsAmmo);
                rolledOils[i] = oilsAmmo[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-base-crit-chance":
                shuffle(oilsCrit);
                rolledOils[i] = oilsCrit[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-bullet-bounce":
                shuffle(oilsBounce);
                rolledOils[i] = oilsBounce[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-bullet-speed":
                shuffle(oilsSpeed);
                rolledOils[i] = oilsSpeed[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-add-damage":
                shuffle(oilsAddDam);
                rolledOils[i] = oilsAddDam[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-mult-damage":
                shuffle(oilsMultDam);
                rolledOils[i] = oilsMultDam[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-max-durability":
                shuffle(oilsDur);
                rolledOils[i] = oilsDur[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-penetration":
                shuffle(oilsPen);
                rolledOils[i] = oilsPen[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-projectiles":
                shuffle(oilsProj);
                rolledOils[i] = oilsProj[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-recoil":
                shuffle(oilsRecoil);
                rolledOils[i] = oilsRecoil[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-reload-speed":
                shuffle(oilsReload);
                rolledOils[i] = oilsReload[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-rpm":
                shuffle(oilsRPM);
                rolledOils[i] = oilsRPM[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-random-spread":
                shuffle(oilsSpread);
                rolledOils[i] = oilsSpread[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static-no-selection":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case "static - choose":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            case null:
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
                break;
            default: //  working on this - getoilbyname is returning null
                const selectedIndex = selectedOil[i].selectedIndex;
                const selectedText = selectedOil[i].options[selectedIndex].text;
                rolledOils[i] = selectedText;
                rolledOils[i] = getOilByName(selectedText);
                console.log(getOilByName(selectedText));
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil");
        }
    };
}

function rollWeapon() {
    let name = document.getElementById("weapons");
    const selectedValue = name.value;
    switch (selectedValue) {
        case "random-all-weapons":
            shuffle(gunsAll);
            name = gunsAll[0];
            console.log(name);
            selectedWeapon = getWeaponByName(name);
            console.log(getWeaponByName(name));
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-pistols":
            shuffle(gunsPistols);
            name = gunsPistols[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-revolvers":
            shuffle(gunsRevolvers);
            name = gunsRevolvers[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-shotguns":
            shuffle(gunsShotguns);
            name = gunsShotguns[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-submachine-guns":
            shuffle(gunsSMGs);
            name = gunsSMGs[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-assault-rifles":
            shuffle(gunsARs);
            name = gunsARs[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-lmgs":
            shuffle(gunsLMGs);
            name = gunsLMGs[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-rifles":
            shuffle(gunsRifles);
            name = gunsRifles[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-sniper-rifles":
            shuffle(gunsSnipers);
            name = gunsSnipers[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        default:
            const selectedIndex = name.selectedIndex;
            const selectedText = name.options[selectedIndex].text;
            selectedWeapon = getWeaponByName(selectedText);
            modifiedWeapon = getWeaponByName(selectedText);
            addName(selectedWeapon.Name, selectedValue, "weapon")
    }
}

function modifyWeapon(weapon) {
}

// Arrays; don't add functions below this

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