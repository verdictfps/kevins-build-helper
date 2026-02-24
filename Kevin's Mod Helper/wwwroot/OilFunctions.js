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