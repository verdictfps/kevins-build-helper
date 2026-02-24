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
        }
    }
    if (selector === 'oils2selector') {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].hidden === true) {
                selector1Options[i].hidden = false;
                if (selector2Options[i].value === "static-choose") {
                    selector2Options[i].hidden = false;
                }
            }
            if (selector1Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector1Options[i].hidden = true;
            }
        }
    }
} 

function oilCategory(categoryselector, selectedvalue) {
    
    if (categoryselector === "oilCategory1") {
        var currentSel1 = document.getElementById("oils1selector")

        currentSel1.value = "static-choose";

        document.getElementById("oils1AmmoCat").hidden = "hidden";
        document.getElementById("oils1CritCat").hidden = "hidden";
        switch (selectedvalue) {
            case "select-category":
                break;
            case "ammo-consume-chance-oils":
                document.getElementById("oils1AmmoCat").hidden = "";
                break;
            case "base-crit-chance-oils":
                document.getElementById("oils1CritCat").hidden = "";
                break;
            default:
        }

    }
    if (categoryselector === "oilCategory2") {
        var currentSel2 = document.getElementById("oils2selector")

        currentSel2.value = "static-choose";

        switch (selectedvalue) {
            case "select-category":
                break;
            case "ammo-consume-chance-oils":
                document.getElementById("oils2AmmoCat").hidden = "";
                break;
            case "base-crit-chance-oils":
                document.getElementById("oils2CritCat").hidden = "";
                break;
            default:
        }
    }
}