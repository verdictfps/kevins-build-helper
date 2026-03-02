// friendly reminder to comment your shit cause you're a dumbass and won't remember what this macguyvered code does
// also ty stackoverflow

document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll("select.custom-dropdown")
        .forEach(createProDropdown);
});


    const items = [];

function createProDropdown(select) {

    window.addEventListener("resize", () => {
    if (wrapper.classList.contains("open"))
        decideDirection();
    });

    // Up or down
    function decideDirection() {

    wrapper.classList.remove("drop-up");

    const rect = wrapper.getBoundingClientRect();
    const panelHeight = panel.offsetHeight || 320;

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow < panelHeight && spaceAbove > panelHeight) {
        wrapper.classList.add("drop-up");
    }
}
    // Convert
    const dropdownId = select.name;
    
    const wrapper = document.createElement("div");
    wrapper.className = "custom-select";

    const observer = new MutationObserver(() => {
    wrapper.classList.toggle("disabled", select.disabled);
});

observer.observe(select, {
    attributes: true,
    attributeFilter: ["disabled"]
});

    const selected = document.createElement("div");
    selected.className = "custom-select-selected";

    const label = document.createElement("span");
    label.textContent =
        select.options[select.selectedIndex]?.text || "";

    const arrow = document.createElement("span");
    arrow.className = "custom-arrow";
    arrow.innerHTML = "🢗";

    selected.append(label, arrow);

    const panel = document.createElement("div");
    panel.className = "custom-select-panel";

    const search = document.createElement("input");
    search.className = "custom-select-search";
    search.placeholder = "Search...";

    const list = document.createElement("ul");
    list.className = "custom-select-menu";
    

    wrapper.dataset.dropdownId = dropdownId;
    panel.append(search, list);
    wrapper.append(selected, panel);
    select.after(wrapper);

    // Options
    [...select.children].forEach(node => {

    if (node.tagName === "OPTGROUP") {

        const g = document.createElement("li");
        g.className = "custom-group";
        g.textContent = node.label;

        g.dataset.dropdownId = dropdownId;

        g.dataset.collapsible =
        node.dataset.collapsible === "false" ? "false" : "true";

        g.dataset.collapsed =
            node.dataset.collapsed === "true" ? "true" : "false";

        list.appendChild(g);

        if (g.dataset.collapsible === "true" &&
            g.dataset.collapsed === "true") {
            closeGroup(g);
        }

g.addEventListener("click", () => toggleGroup(g));;
        Object.assign(g.dataset, node.dataset);

        if (node.id)
            g.id = node.id;

        if (node.hidden)
            g.style.display = "none";

        g.dataset.label = node.label;

        list.appendChild(g);

        [...node.children].forEach(opt => addOption(opt, g));
        if (g.id !== "barrelGroup" && g.id !== "opticGroup" && g.id !== "firemodeGroup" && g.id !== "rechamberGroup" && g.id !== "laserGroup") {
        closeGroup(g);
        }
    } else addOption(node);
});

    function addOption(opt, groupEl = null) {

    const isHidden = opt.hidden || opt.style.display === "none";
    const li = document.createElement("li");
    li.className = "custom-option";

    li.textContent = opt.text;

    li.dataset.dropdownId = dropdownId;

    li.dataset.value = opt.value;

    Object.assign(li.dataset, opt.dataset);

    if (groupEl)
        li.dataset.groupId =
            groupEl.dataset.categoryId ||
            groupEl.id ||
            groupEl.dataset.label;

    if (opt.hidden || opt.style.display === "none") {
            li.style.display = "none";
        }

    list.appendChild(li);

    items.push({ li, opt });

    li.addEventListener("click", () => selectItem(opt));
}

function toggleGroup(groupEl) {

    if (groupEl.dataset.collapsible !== "true")
        return;

    const collapsed = groupEl.dataset.collapsed === "true";

    if (collapsed) {
        closeAllGroupsExcept(groupEl);
        openGroup(groupEl);
    } else {
        closeGroup(groupEl);
    }
}

function openGroup(groupEl) {

 groupEl.dataset.collapsed = "false";

    let next = groupEl.nextElementSibling;

    while (next && !next.classList.contains("custom-group")) {
        if (next.classList.contains("custom-option"))
            next.style.display = "";
        next = next.nextElementSibling;
    }
}

function closeGroup(groupEl) {

groupEl.dataset.collapsed = "true";

    let next = groupEl.nextElementSibling;

    while (next && !next.classList.contains("custom-group")) {
        if (next.classList.contains("custom-option"))
            next.style.display = "none";
        next = next.nextElementSibling;
    }
}

function closeAllGroupsExcept(exception) {
  
    const dropdown = exception.closest(".custom-dropdown");

    if (dropdown?.dataset.accordion !== "true")
        return;

    dropdown.querySelectorAll(".custom-group").forEach(group => {

        if (group === exception) return;
        if (group.dataset.collapsible !== "true") return;

        closeGroup(group);
    });
}

    // Select

    function selectItem(opt) {

        select.value = opt.value;
        label.textContent = opt.text;

        wrapper.classList.remove("open");

        select.dispatchEvent(
            new Event("change", { bubbles:true })
        );
    }

    // Open Dropdown
if (wrapper.classList.contains("disabled"))
    return;

    selected.addEventListener("click", () => {

    wrapper.classList.toggle("open");

    if (wrapper.classList.contains("open")) {
        decideDirection();
        search.focus();
        scrollToSelected();
    }
    });

    document.addEventListener("click", e => {
        if (!wrapper.contains(e.target))
            wrapper.classList.remove("open");
    });

    // Search

    search.addEventListener("input", () => {

        const term = search.value.toLowerCase();

        items.forEach(({ li }) => {

            const text = li.textContent;
            const match = text.toLowerCase().includes(term);

            li.style.display = match ? "" : "none";

            if (match && term)
                li.innerHTML =
                    text.replace(
                        new RegExp(`(${term})`, "ig"),
                        "<mark>$1</mark>"
                    );
            else
                li.textContent = text;
        });
    });

    // Keyboard Shenanigans

    let index = -1;

    search.addEventListener("keydown", e => {

        const visible = items.filter(i =>
            i.li.style.display !== "none"
        );

        if (!visible.length) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            index = (index + 1) % visible.length;
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            index = (index - 1 + visible.length) % visible.length;
        }

        if (e.key === "Enter" && index >= 0) {
            selectItem(visible[index].opt);
        }

        if (e.key === "Escape")
            wrapper.classList.remove("open");

        items.forEach(i => i.li.classList.remove("active"));

        if (index >= 0)
            visible[index].li.classList.add("active");
    });

    // Jump to selection

    function scrollToSelected() {

        const current = items.find(
            i => i.opt.value === select.value
        );

        if (!current) return;

        current.li.scrollIntoView({
            block:"nearest"
        });
    }

    // api thing? prob won't use since I already have logic in place, nice to have

    select.proDropdown = {
        getValue: () => select.value,
        setValue: v => {
            const opt = [...select.options]
                .find(o => o.value === v);
            if (opt) selectItem(opt);
        }
    };
}

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
let oilStatModifiers = null;
let selectedBarrel = null;
let selectedOptic = null;
let selectedLaser = null;
let selectedFiremode = null;
let selectedChamber = null;
let selectedAttachments = null;


function pokeKevin() {
    document.getElementById("containerthing").style.backgroundimage = "url('Goblin Crosshair Guild Variant png2.png')";
}

function youCantUnpokeKevin() {

}

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

function oilPreview(hovOil) {
    let oil = getOilByName(hovOil);
    let oilName = oil.Name;
    let oilDesc = oil.StatDescription;
    let oilReplace = oilDesc.replace("\\n", '<br>');
    let infobox = document.getElementById("oil1infobox");
    let infoboxtext = document.getElementById("oil1infoboxtext");
    infobox.hidden = "";
    document.getElementById("oil1infoboxname").textContent = oilName;
    infoboxtext.innerHTML = oilReplace;
}

function oilPreviewClear() {
    let infobox = document.getElementById("oil1infobox");
    infobox.hidden = "hidden";
}

// Used to remove and replace oils to prevent dupes
function oilRemover(selector, selectedvalue) {
    var oilSelector1 = document.getElementById("oils1selector");
    var selector1Options = items.filter(i => i.li.dataset.dropdownId === "oils1selectorcollection");
    var oilSelector2 = document.getElementById("oils2selector");
    var selector2Options = items.filter(i => i.li.dataset.dropdownId === "oils2selectorcollection");
    var oilSelector3 = document.getElementById("oils3selector");
    var selector3Options = items.filter(i => i.li.dataset.dropdownId === "oils3selectorcollection");
    var oilSelector4 = document.getElementById("oils4selector");
    var selector4Options = items.filter(i => i.li.dataset.dropdownId === "oils4selectorcollection");
    var oilSelector5 = document.getElementById("oils5selector");
    var selector5Options = items.filter(i => i.li.dataset.dropdownId === "oils5selectorcollection");

    if (selector === 'oils1selector') {
        for (var i = 0; i < selector2Options.length; i++) {
            if (selector2Options[i].li.hidden === true) {
                selector2Options[i].li.hidden = false;
                if (selector2Options[i].li.dataset.value === "static-choose") {
                    selector2Options[i].li.hidden = false;
                }
            }
            if (selector2Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector2Options[i].li.hidden = true;
                console.log(selector2Options[i].li.hidden)
            }
            if (selector3Options[i].li.hidden === true) {
                selector3Options[i].li.hidden = false;
                if (selector3Options[i].li.dataset.value === "static-choose") {
                    selector3Options[i].li.hidden = false;
                }
            }
            if (selector3Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector3Options[i].li.hidden = true;
            }
            if (selector4Options[i].li.hidden === true) {
                selector4Options[i].li.hidden = false;
                if (selector4Options[i].li.dataset.value === "static-choose") {
                    selector4Options[i].li.hidden = false;
                }
            }
            if (selector4Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector4Options[i].li.hidden = true;
            }
            if (selector5Options[i].li.hidden === true) {
                selector5Options[i].li.hidden = false;
                if (selector5Options[i].li.dataset.value === "static-choose") {
                    selector5Options[i].li.hidden = false;
                }
            }
            if (selector5Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].li.hidden = true;
            }
        }
    }
    if (selector === 'oils2selector') {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].li.hidden === true) {
                selector1Options[i].li.hidden = false;
                if (selector1Options[i].li.dataset.value === "static-choose") {
                    selector1Options[i].li.hidden = false;
                }
            }
            if (selector1Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector1Options[i].li.hidden = true;
            }
            if (selector3Options[i].li.hidden === true) {
                selector3Options[i].li.hidden = false;
                if (selector3Options[i].li.dataset.value === "static-choose") {
                    selector3Options[i].li.hidden = false;
                }
            }
            if (selector3Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector3Options[i].li.hidden = true;
            }
            if (selector4Options[i].li.hidden === true) {
                selector4Options[i].li.hidden = false;
                if (selector4Options[i].li.dataset.value === "static-choose") {
                    selector4Options[i].li.hidden = false;
                }
            }
            if (selector4Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector4Options[i].li.hidden = true;
            }
            if (selector5Options[i].li.hidden === true) {
                selector5Options[i].li.hidden = false;
                if (selector5Options[i].li.dataset.value === "static-choose") {
                    selector5Options[i].li.hidden = false;
                }
            }
            if (selector5Options[i].value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].li.hidden = true;
            }
        }
    }
    if (selector === 'oils3selector') {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].li.hidden === true) {
                selector1Options[i].li.hidden = false;
                if (selector1Options[i].li.dataset.value === "static-choose") {
                    selector1Options[i].li.hidden = false;
                }
            }
            if (selector1Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector1Options[i].li.hidden = true;
            }
            if (selector2Options[i].li.hidden === true) {
                selector2Options[i].li.hidden = false;
                if (selector2Options[i].li.dataset.value === "static-choose") {
                    selector2Options[i].li.hidden = false;
                }
            }
            if (selector2Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector2Options[i].li.hidden = true;
            }
            if (selector4Options[i].li.hidden === true) {
                selector4Options[i].li.hidden = false;
                if (selector4Options[i].li.dataset.value === "static-choose") {
                    selector4Options[i].li.hidden = false;
                }
            }
            if (selector4Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector4Options[i].li.hidden = true;
            }
            if (selector5Options[i].li.hidden === true) {
                selector5Options[i].li.hidden = false;
                if (selector5Options[i].li.dataset.value === "static-choose") {
                    selector5Options[i].li.hidden = false;
                }
            }
            if (selector5Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].li.hidden = true;
            }
        }
    }
    if (selector === 'oils4selector') {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].li.hidden === true) {
                selector1Options[i].li.hidden = false;
                if (selector1Options[i].li.dataset.value === "static-choose") {
                    selector1Options[i].li.hidden = false;
                }
            }
            if (selector1Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector1Options[i].li.hidden = true;
            }
            if (selector2Options[i].li.hidden === true) {
                selector2Options[i].li.hidden = false;
                if (selector2Options[i].li.dataset.value === "static-choose") {
                    selector2Options[i].li.hidden = false;
                }
            }
            if (selector2Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector2Options[i].li.hidden = true;
            }
            if (selector3Options[i].li.hidden === true) {
                selector3Options[i].li.hidden = false;
                if (selector3Options[i].li.dataset.value === "static-choose") {
                    selector3Options[i].li.hidden = false;
                }
            }
            if (selector3Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector3Options[i].li.hidden = true;
            }
            if (selector5Options[i].li.hidden === true) {
                selector5Options[i].li.hidden = false;
                if (selector5Options[i].li.dataset.value === "static-choose") {
                    selector5Options[i].li.hidden = false;
                }
            }
            if (selector5Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                selector5Options[i].li.hidden = true;
            }
        }
        if (selector === 'oils5selector') {
            for (var i = 0; i < selector1Options.length; i++) {
                if (selector1Options[i].li.hidden === true) {
                    selector1Options[i].li.hidden = false;
                    if (selector1Options[i].li.dataset.value === "static-choose") {
                        selector1Options[i].li.hidden = false;
                    }
                }
                if (selector1Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector1Options[i].li.hidden = true;
                }
                if (selector2Options[i].li.hidden === true) {
                    selector2Options[i].li.hidden = false;
                    if (selector2Options[i].li.dataset.value === "static-choose") {
                        selector2Options[i].li.hidden = false;
                    }
                }
                if (selector2Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector2Options[i].li.hidden = true;
                }
                if (selector3Options[i].li.hidden === true) {
                    selector3Options[i].li.hidden = false;
                    if (selector3Options[i].li.dataset.value === "static-choose") {
                        selector3Options[i].li.hidden = false;
                    }
                }
                if (selector3Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector3Options[i].li.hidden = true;
                }
                if (selector4Options[i].li.hidden === true) {
                    selector4Options[i].li.hidden = false;
                    if (selector4Options[i].li.dataset.value === "static-choose") {
                        selector4Options[i].li.hidden = false;
                    }
                }
                if (selector4Options[i].li.dataset.value === selectedvalue && !(selectedvalue.startsWith("static"))) {
                    selector4Options[i].li.hidden = true;
                }
            }
        }
    }
} 

function attachmentFilter(selWepValue, selWepName) {

    let name = document.getElementById("weapons");

    const selectedText = name.options[selWepName].text;

    let selectorBarrel = document.getElementById("barrelselector");
    let selectorOptic = document.getElementById("opticselector");
    let selectorLaser = document.getElementById("laserselector");
    let selectorFiremode = document.getElementById("firemodeselector");
    let selectorChamber = document.getElementById("chamberselector");
    
    

    let dropdownWeapon = getWeaponByName(selectedText);

    items.filter(i => i.li.dataset.value === "priming-bolt")[0].li.hidden = false;
    items.filter(i => i.li.dataset.value === "gun-crank")[0].li.hidden = false;
    document.getElementById("chamberselector").disabled = "";
    document.getElementById("barrelselector").disabled = "";
    document.getElementById("firemodeselector").disabled = "";

    if (selectorChamber.value === "static-not-applicable") {
        selectorChamber.proDropdown.setValue("static-choose")
    }
    if (selectorBarrel.value === "static-not-applicable") {
        selectorBarrel.proDropdown.setValue("static-choose");
    }
    if (selectorFiremode.value === "static-not-applicable") {
        selectorFiremode.proDropdown.setValue("static-choose");
    }

    switch (dropdownWeapon.Firemode) {
        case "Single":
            items.filter(i => i.li.dataset.value === "priming-bolt")[0].li.hidden = true;
            if (selectorFiremode.value === "priming-bolt") {
                selectorFiremode.proDropdown.setValue("static-choose");     
            };
            break;
        case "Auto":
            items.filter(i => i.li.dataset.value === "gun-crank")[0].li.hidden = true;
            if (selectorFiremode.value === "gun-crank") {
                selectorFiremode.proDropdown.setValue("static-choose")
            }
            break;
        case "Static":
            document.getElementById("firemodeselector").disabled = "disabled";
            selectorFiremode.proDropdown.setValue("static-not-applicable");
        default:
    }

    if (dropdownWeapon.AmmoType === "Energy") {
        selectorChamber.value = "static-not-applicable";
        selectorBarrel.value = "static-not-applicable";
        document.getElementById("chamberselector").disabled = "disabled";
        document.getElementById("barrelselector").disabled = "disabled";
    }
}

// Unhides categories and their options when selected, and hides the previous category
/*function oilCategory(selectorNumber, selectedvalue) {
console.log(selectedvalue);
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
        console.log(`oils${selectorNumber}${suffix}`);
        console.log(element.value);
        if (element) {
            element.style.display = "none";
        }
    });

    if (selectedvalue === "select-category") return;
    
    const selectedSuffix = suffixMap[selectedvalue];
    if (!selectedSuffix) return;

    const elementToShow = document.getElementById(`oils${selectorNumber}${selectedSuffix}`);
    if (elementToShow) {
        elementToShow.style.display = "";
    }
}*/

// For when the button is clicked.
function onGenerate() {
    selectedWeapon = null;
    modifiedWeapon = null;
    oil1 = null;
    oil2 = null;
    oil3 = null;
    oil4 = null;
    oil5 = null;
    selectedBarrel = null;
    selectedOptic = null;
    selectedLaser = null;
    selectedFiremode = null;
    selectedChamber = null;
    rolledOils = [];
    selectedChamber = null;
    loadChamber()
    loadWeapons()
    loadOils()
    loadOrigWeapons()
    loadAttachments()
    oilStatModifiers = oilsData?.Oil["Default"];
    rollWeapon(weaponName);
    rollAttachments();
    rollOils();
    oilCalcs(oilStatModifiers);
}

function addName(name, value, type, desc, descID) {
    if (type === "weapon") {
        document.getElementById("cardWeaponName").textContent = name;
    } else if (type === "oil") {
        let oilReplace = desc.replace('\\n', '<br>');
        document.getElementById(value).textContent = name;
        document.getElementById(descID).innerHTML = oilReplace;
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

async function loadOrigWeapons() {
    const response = await fetch("./OrigWeapons.json");
    weaponsOrigData = await response.json();
}

async function loadAttachments() {
    const response = await fetch("./Attachments.json");
    attachmentsData = await response.json();
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
    let attachmentStats = selectedAttachments;
    let weaponOriginalChamber = getChamberByName(`Chamber Chisel - ${selectedWeapon.AmmoType}`);

    if (weapon.AmmoType != "Energy") {
        weapon.Damage = weapon.DamageMult * chamber.Damage;
        weapon.AmmoType = chamber.AmmoType;
        weapon.Projectiles = chamber.Projectiles;
    }

    if (weaponOriginal.AmmoType != "Energy") {
        weaponOriginal.Damage = weaponOriginal.DamageMult * weaponOriginalChamber.Damage;
        weaponOriginal.AmmoType = weaponOriginalChamber.AmmoType;
        weaponOriginal.Projectiles = weaponOriginalChamber.Projectiles;
    }

    if (weaponOriginal.AmmoType == "Energy") {
        weaponOriginal.RecoilBase = 0.0;
    }
    if (weaponOriginal.AmmoType == "9mm") {
        weaponOriginal.RecoilBase = weaponOriginal.RecoilBase9mm;
    }
    if (weaponOriginal.AmmoType == "7.62mm") {
        weaponOriginal.RecoilBase = weaponOriginal.RecoilBase762;
    }
    if (weaponOriginal.AmmoType == "5.56mm") {
        weaponOriginal.RecoilBase = weaponOriginal.RecoilBase556;
    }
    if (weaponOriginal.AmmoType == ".50 BMG") {
        weaponOriginal.RecoilBase = weaponOriginal.RecoilBase50bmg;
    }
    if (weaponOriginal.AmmoType == "12Ga") {
        weaponOriginal.RecoilBase = weaponOriginal.RecoilBase12ga;
    }

    document.getElementById("cardWeaponType").textContent = weapon.Type;
    document.getElementById("cardAmmoType").textContent = weapon.AmmoType;

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

    document.getElementById("cardRPM").textContent = "";
    document.getElementById("cardRPM").style.color = "";
    document.getElementById("cardRPMArrow").textContent = "";
    document.getElementById("cardRPMArrow").style.color = "";
    document.getElementById("cardRPMLBrac").textContent = "";
    document.getElementById("cardRPMComp").textContent = "";
    document.getElementById("cardRPMRBrac").textContent = "";

    weapon.RPM *= (1 + calcOil.RPM);

    weapon.RPM = Math.round((weapon.RPM + Number.EPSILON)* 100) / 100;

    if (weapon.RPM < 1) {
        weapon.RPM = 1;
    }

    if (weapon.RPM > weaponOriginal.RPM) {

        document.getElementById("cardRPM").textContent = weapon.RPM;
        document.getElementById("cardRPM").style.color = "Lime";
        document.getElementById("cardRPMArrow").textContent = "🡅";
        document.getElementById("cardRPMArrow").style.color = "Lime";
        document.getElementById("cardRPMLBrac").textContent = "(";
        document.getElementById("cardRPMComp").textContent = weaponOriginal.RPM;
        document.getElementById("cardRPMRBrac").textContent = ")";
    }
    if (weapon.RPM < weaponOriginal.RPM) {

        document.getElementById("cardRPM").textContent = weapon.RPM;
        document.getElementById("cardRPM").style.color = "OrangeRed";
        document.getElementById("cardRPMArrow").textContent = "🡇";
        document.getElementById("cardRPMArrow").style.color = "OrangeRed";
        document.getElementById("cardRPMLBrac").textContent = "(";
        document.getElementById("cardRPMComp").textContent = weaponOriginal.RPM;
        document.getElementById("cardRPMRBrac").textContent = ")";
    }
    if (weapon.RPM === weaponOriginal.RPM) {
        document.getElementById("cardRPM").textContent = weapon.RPM;
    }
    
    ///////////////////////////////
    //// Ammo Consume Chance ////
    ///////////////////////////////

    document.getElementById("cardAmmo").textContent = "";
    document.getElementById("cardAmmo").style.color = "";
    document.getElementById("cardAmmoArrow").textContent = "";
    document.getElementById("cardAmmoArrow").style.color = "";
    document.getElementById("cardAmmoLBrac").textContent = "";
    document.getElementById("cardAmmoComp").textContent = "";
    document.getElementById("cardAmmoRBrac").textContent = "";

    weapon.AmmoConsumeChance += calcOil.AmmoConsumeChance;
    weapon.AmmoConsumeChance *= 100;

    if (weapon.AmmoConsumeChance < 0) {
        weapon.AmmoConsumeChance = 0;
    }

    if (weapon.AmmoConsumeChance < 100) {
        document.getElementById("cardAmmo").textContent = weapon.AmmoConsumeChance;
        document.getElementById("cardAmmo").style.color = "Lime";
        document.getElementById("cardAmmoArrow").textContent = "🡇";
        document.getElementById("cardAmmoArrow").style.color = "Lime";
        document.getElementById("cardAmmoLBrac").textContent = "(";
        document.getElementById("cardAmmoComp").textContent = "100%";
        document.getElementById("cardAmmoRBrac").textContent = ")";
    }
    if (weapon.AmmoConsumeChance === 100) {
        document.getElementById("cardAmmo").textContent = "100%";
    }
    ///////////////////////////////
    //// Extra Ammo Use Chance ////
    ///////////////////////////////

    document.getElementById("cardExtra").textContent = "";
    document.getElementById("cardExtra").style.color = "";
    document.getElementById("cardExtraArrow").textContent = "";
    document.getElementById("cardExtraArrow").style.color = "";
    document.getElementById("cardExtraLBrac").textContent = "";
    document.getElementById("cardExtraComp").textContent = "";
    document.getElementById("cardExtraRBrac").textContent = "";

    weapon.ExtraAmmoUseChance += calcOil.ExtraAmmoUseChance;
    weapon.ExtraAmmoUseChance *= 100;

    if (weapon.ExtraAmmoUseChance > 100) {
        weapon.ExtraAmmoUseChance = 100;
    }

    if (weapon.ExtraAmmoUseChance > 0.0) {
        document.getElementById("cardExtra").textContent = weapon.ExtraAmmoUseChance;
        document.getElementById("cardExtra").style.color = "OrangeRed";
        document.getElementById("cardExtraArrow").textContent = "🡅";
        document.getElementById("cardExtraArrow").style.color = "OrangeRed";
        document.getElementById("cardExtraLBrac").textContent = "(";
        document.getElementById("cardExtraComp").textContent = "0%";
        document.getElementById("cardExtraRBrac").textContent = ")";
        }
    if (weapon.ExtraAmmoUseChance === 0) {
        document.getElementById("cardExtra").textContent = "0%";
    }

    /////////////////
    //// Bounces ////
    /////////////////

    document.getElementById("cardBounces").textContent = "";
    document.getElementById("cardBounces").style.color = "";
    document.getElementById("cardBouncesArrow").textContent = "";
    document.getElementById("cardBouncesArrow").style.color = "";
    document.getElementById("cardBouncesLBrac").textContent = "";
    document.getElementById("cardBouncesComp").textContent = "";
    document.getElementById("cardBouncesRBrac").textContent = "";

    weapon.Bounces = calcOil.Bounces;

    if (weapon.Bounces > 0.0) {
        document.getElementById("cardBounces").textContent = weapon.Bounces;
        document.getElementById("cardBounces").style.color = "Lime";
        document.getElementById("cardBouncesArrow").textContent = "🡅";
        document.getElementById("cardBouncesArrow").style.color = "Lime";
        document.getElementById("cardBouncesLBrac").textContent = "(";
        document.getElementById("cardBouncesComp").textContent = "0";
        document.getElementById("cardBouncesRBrac").textContent = ")";
    }
    else {
        document.getElementById("cardBounces").textContent = "0";
    }

    /////////////////////
    //// Bullet Drop ////
    /////////////////////

    document.getElementById("cardDrop").textContent = "";
    document.getElementById("cardDrop").style.color = "";
    document.getElementById("cardDropArrow").textContent = "";
    document.getElementById("cardDropArrow").style.color = "";
    document.getElementById("cardDropLBrac").textContent = "";
    document.getElementById("cardDropComp").textContent = "";
    document.getElementById("cardDropRBrac").textContent = "";

    weapon.BulletDrop += calcOil.BulletDrop;

    if (weapon.BulletDrop > 0) {
        document.getElementById("cardDrop").textContent = weapon.BulletDrop;
        document.getElementById("cardDrop").style.color = "OrangeRed";
        document.getElementById("cardDropArrow").textContent = "🡅";
        document.getElementById("cardDropArrow").style.color = "OrangeRed";
        document.getElementById("cardDropLBrac").textContent = "(";
        document.getElementById("cardDropComp").textContent = "0";
        document.getElementById("cardDropRBrac").textContent = ")";
    }
    if (weapon.BulletDrop == 0) {
       document.getElementById("cardDrop").textContent = "0";
    }

    //////////////////////
    //// Bullet Speed ////
    //////////////////////

    document.getElementById("cardSpeed").textContent = "";
    document.getElementById("cardSpeed").style.color = "";
    document.getElementById("cardSpeedArrow").textContent = "";
    document.getElementById("cardSpeedArrow").style.color = "";
    document.getElementById("cardSpeedLBrac").textContent = "";
    document.getElementById("cardSpeedComp").textContent = "";
    document.getElementById("cardSpeedRBrac").textContent = "";

    weapon.BulletSpeed += calcOil.BulletSpeed;
    weapon.BulletSpeed *= 100;

    if (weapon.BulletSpeed < 1) {
        weapon.BulletSpeed = 1;
    }

    if (weapon.BulletSpeed > 100) {
        document.getElementById("cardSpeed").textContent = weapon.BulletSpeed;
        document.getElementById("cardSpeed").style.color = "Lime";
        document.getElementById("cardSpeedArrow").textContent = "🡅";
        document.getElementById("cardSpeedArrow").style.color = "Lime";
        document.getElementById("cardSpeedLBrac").textContent = "(";
        document.getElementById("cardSpeedComp").textContent = "100%";
        document.getElementById("cardSpeedRBrac").textContent = ")";
    }
    if (weapon.BulletSpeed < 100) {
        if (weapon.BulletSpeed < 1) {
            weapon.BulletSpeed = 1;
        }
        document.getElementById("cardSpeed").textContent = weapon.BulletSpeed;
        document.getElementById("cardSpeed").style.color = "OrangeRed";
        document.getElementById("cardSpeedArrow").textContent = "🡇";
        document.getElementById("cardSpeedArrow").style.color = "OrangeRed";
        document.getElementById("cardSpeedLBrac").textContent = "(";
        document.getElementById("cardSpeedComp").textContent = "100%";
        document.getElementById("cardSpeedRBrac").textContent = ")";
    }
    if (weapon.BulletSpeed === 100) {
        document.getElementById("cardSpeed").textContent = "100%";
    }

    //////////////////////////
    //// Base Crit Chance ////
    //////////////////////////

    document.getElementById("cardCrit").textContent = "";
    document.getElementById("cardCrit").style.color = "";
    document.getElementById("cardCritArrow").textContent = "";
    document.getElementById("cardCritArrow").style.color = "";
    document.getElementById("cardCritLBrac").textContent = "";
    document.getElementById("cardCritComp").textContent = "";
    document.getElementById("cardCritRBrac").textContent = "";

    weapon.BaseCritChance += (calcOil.BaseCritChance * 100);

    if (weapon.BaseCritChance > 0.0) {
        document.getElementById("cardCrit").textContent = weapon.BaseCritChance;
        document.getElementById("cardCrit").style.color = "Lime";
        document.getElementById("cardCritArrow").textContent = "🡅";
        document.getElementById("cardCritArrow").style.color = "Lime";
        document.getElementById("cardCritLBrac").textContent = "(";
        document.getElementById("cardCritComp").textContent = "0%";
        document.getElementById("cardCritRBrac").textContent = ")";
    }
    else {
        document.getElementById("cardCrit").textContent = "0%";
    }

    /////////////////////////
    //// ADS Crit Chance ////
    /////////////////////////

    document.getElementById("cardADSCrit").textContent = "";
    document.getElementById("cardADSCrit").style.color = "";
    document.getElementById("cardADSCritArrow").textContent = "";
    document.getElementById("cardADSCritArrow").style.color = "";
    document.getElementById("cardADSCritLBrac").textContent = "";
    document.getElementById("cardADSCritComp").textContent = "";
    document.getElementById("cardADSCritRBrac").textContent = "";

    weapon.ADSCritChance += (attachmentStats.ADSCritChance * 100);

    if (weapon.ADSCritChance > 0.0) {
        document.getElementById("cardADSCrit").textContent = weapon.ADSCritChance;
        document.getElementById("cardADSCrit").style.color = "Lime";
        document.getElementById("cardADSCritArrow").textContent = "🡅";
        document.getElementById("cardADSCritArrow").style.color = "Lime";
        document.getElementById("cardADSCritLBrac").textContent = "(";
        document.getElementById("cardADSCritComp").textContent = "0%";
        document.getElementById("cardADSCritRBrac").textContent = ")";
    }
    else {
        document.getElementById("cardADSCrit").textContent = "0%";
    }
/*
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

    document.getElementById("cardDamage").textContent = "";
    document.getElementById("cardDamage").style.color = "";
    document.getElementById("cardDamageArrow").textContent = "";
    document.getElementById("cardDamageArrow").style.color = "";
    document.getElementById("cardDamageComp").textContent = "";
    document.getElementById("cardDamageLBrac").textContent = "";
    document.getElementById("cardDamageRBrac").textContent = "";
    document.getElementById("cardDamageProj").textContent = "";
    document.getElementById("cardDamageProj").style.color = "";
    document.getElementById("cardDamageProjArrow").textContent = "";
    document.getElementById("cardDamageProjArrow").style.color = "";
    document.getElementById("cardDamageProjComp").textContent = "";
    document.getElementById("cardDamageX").textContent = "";
    document.getElementById("cardDamageMultiX").textContent = "";
    document.getElementById("cardDamageMulti").textContent = "";
    document.getElementById("cardDamageMulti").style.color = "";
    document.getElementById("cardDamageMultiXComp").textContent = "";
    document.getElementById("cardDamageMultiComp").textContent = "";
    document.getElementById("cardDamageXComp").textContent = "";

    //// Projectiles
    weapon.Projectiles *= (1 + calcOil.ProjectileMult);
    //// Damage Add
    weapon.Damage += calcOil.DamageAdd;
    var zeroDamage = weapon.Damage;
    //// Damage Multiplier
    weapon.Damage *= (1 + calcOil.DamageMult + attachmentStats.DamageMult);
    weapon.Damage = Math.round((weapon.Damage + Number.EPSILON)* 100) / 100;
    if (zeroDamage > 0 && weapon.Damage <= 0) {
        weapon.Damage = zeroDamage * 0.01;
    }
    //// Total Damage Calc
    weapon.TotalDamage = weapon.Damage * weapon.Projectiles * weapon.MultiShot;
    weapon.TotalDamage = Math.round((weapon.TotalDamage + Number.EPSILON)* 100) / 100;

    weaponOriginal.TotalDamage = weaponOriginal.Damage * weaponOriginal.Projectiles * weaponOriginal.MultiShot;
    weaponOriginal.TotalDamage = Math.round((weaponOriginal.TotalDamage + Number.EPSILON)* 100) / 100;

    document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;

    ////// Damage & Projectiles card addition
    if (weapon.Damage < weaponOriginal.Damage) {

        if (weapon.Projectiles < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").textContent = "🡇";
            document.getElementById("cardDamageArrow").style.color = OrangeRed;
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProj").style.color = "OrangeRed";
            document.getElementById("cardDamageProjArrow").textContent = "🡇";
            document.getElementById("cardDamageProjArrow").style.color = OrangeRed;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMulti").style.color = "OrangeRed";
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapon.Projectiles > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").textContent = "🡇";
            document.getElementById("cardDamageArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProj").style.color = "Lime";
            document.getElementById("cardDamageProjArrow").textContent = "🡅";
            document.getElementById("cardDamageProjArrow").style.color = "Lime";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMulti").style.color = "OrangeRed";
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapon.Projectiles === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").textContent = "🡇";
            document.getElementById("cardDamageArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMulti").style.color = "OrangeRed";
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
    }
    if (weapon.Damage > weaponOriginal.Damage) {
        if (weapon.Projectiles < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").textContent = "🡅";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProj").style.color = "OrangeRed";
            document.getElementById("cardDamageProjArrow").textContent = "🡇";
            document.getElementById("cardDamageProjArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMulti").style.color = "Lime";
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapon.Projectiles > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").textContent = "🡅";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProj").style.color = "Lime";
            document.getElementById("cardDamageProjArrow").textContent = "🡅";
            document.getElementById("cardDamageProjArrow").style.color = "Lime";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMulti").style.color = "OrangeRed";
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapon.Projectiles === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").textContent = "🡅";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMulti").style.color = "OrangeRed";
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
    }
    if (weapon.Damage === weaponOriginal.Damage) {
        if (weapon.Projectiles < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProj").style.color = "OrangeRed";
            document.getElementById("cardDamageProjArrow").textContent = "🡇";
            document.getElementById("cardDamageProjArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapon.Projectiles > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageProj").style.color = "Lime";
            document.getElementById("cardDamageProjArrow").textContent = "🡅";
            document.getElementById("cardDamageProjArrow").style.color = "Lime";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            document.getElementById("cardDamageXComp").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").textContent = "x";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapon.Projectiles === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = weapon.Damage;
            document.getElementById("cardDamageProj").textContent = weapon.Projectiles;
            document.getElementById("cardDamageX").textContent = "x";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").textContent = "x";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
            }
        }
    }

            ////// Total Damage card addition

            document.getElementById("cardDamageTotal").textContent = "";
            document.getElementById("cardDamageTotal").style.color = "";
            document.getElementById("cardDamageTotalArrow").textContent = "";
            document.getElementById("cardDamageTotalArrow").style.color = "";
            document.getElementById("cardDamageTotalLBrac").textContent = "";
            document.getElementById("cardDamageTotalComp").textContent = "";
            document.getElementById("cardDamageTotalRBrac").textContent = "";

    if (weapon.TotalDamage > weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;
            document.getElementById("cardDamageTotal").style.color = "Lime";
            document.getElementById("cardDamageTotalArrow").textContent = "🡅";
            document.getElementById("cardDamageTotalArrow").style.color = "Lime";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (weapon.TotalDamage < weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;
            document.getElementById("cardDamageTotal").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalArrow").textContent = "🡇";
            document.getElementById("cardDamageTotalArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (weapon.TotalDamage == weaponOriginal.TotalDamage) {
        document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;
    }

    /////////////////
    //// Can ADS ////
    /////////////////

    document.getElementById("cardCanADS").textContent = "";
    document.getElementById("cardCanADS").style.color = "";

    weapon.CanADS = calcOil.CanADS;

    if (weapon.CanADS == "No") {
    document.getElementById("cardCanADS").textContent = "No";
    document.getElementById("cardCanADS").style.color = "Goldenrod";
    }
    if (weapon.CanADS == "Yes") {
            document.getElementById("cardCanADS").textContent = "Yes";
    }

    ////////////////////
    //// Jump Power ////
    ////////////////////
    
    document.getElementById("cardJump").textContent = "";
    document.getElementById("cardJump").style.color = "";
    document.getElementById("cardJumpArrow").textContent = "";
    document.getElementById("cardJumpArrow").style.color = "";
    document.getElementById("cardJumpLBrac").textContent = "";
    document.getElementById("cardJumpComp").textContent = "";
    document.getElementById("cardJumpRBrac").textContent = "";

    weapon.JumpPower += calcOil.JumpPower;
    weapon.JumpPower *= 100;
    weaponOriginal.JumpPower *= 100;

    if (weapon.JumpPower < 1) {
        weapon.JumpPower = 1;
    }

    if (weapon.JumpPower < weaponOriginal.JumpPower) {
        document.getElementById("cardJump").textContent = weapon.JumpPower;
        document.getElementById("cardJump").style.color = "OrangeRed";
        document.getElementById("cardJumpArrow").textContent = "🡇";
        document.getElementById("cardJumpArrow").style.color = "OrangeRed";
        document.getElementById("cardJumpLBrac").textContent = "(";
        document.getElementById("cardJumpComp").textContent = weaponOriginal.JumpPower;
        document.getElementById("cardJumpRBrac").textContent = ")";
    }
    if (weapon.JumpPower > weaponOriginal.JumpPower) {
        document.getElementById("cardJump").textContent = weapon.JumpPower;
        document.getElementById("cardJump").style.color = "Lime";
        document.getElementById("cardJumpArrow").textContent = "🡅";
        document.getElementById("cardJumpArrow").style.color = "Lime";
        document.getElementById("cardJumpLBrac").textContent = "(";
        document.getElementById("cardJumpComp").textContent = weaponOriginal.JumpPower;
        document.getElementById("cardJumpRBrac").textContent = ")";
    }
    if (weapon.JumpPower === weaponOriginal.JumpPower) {
        document.getElementById("cardJump").textContent = weapon.JumpPower;
    }

    //////////////////////////
    //// Loot Drop Chance ////
    //////////////////////////

    document.getElementById("cardLoot").textContent = "";
    document.getElementById("cardLoot").style.color = "";
    document.getElementById("cardLootArrow").textContent = "";
    document.getElementById("cardLootArrow").style.color = "";
    document.getElementById("cardLootLBrac").textContent = "";
    document.getElementById("cardLootComp").textContent = "";
    document.getElementById("cardLootRBrac").textContent = "";

    weapon.LootDropChance += calcOil.LootDropChance;
    weapon.LootDropChance *= 100;
    weaponOriginal.LootDropChance *= 100;

    if (weapon.LootDropChance < 0) {
        weapon.LootDropChance = 0;
    }

    if (weapon.LootDropChance < weaponOriginal.LootDropChance) {
        document.getElementById("cardLoot").textContent = weapon.LootDropChance;
        document.getElementById("cardLoot").style.color = "OrangeRed";
        document.getElementById("cardLootArrow").textContent = "🡇";
        document.getElementById("cardLootArrow").style.color = "OrangeRed";
        document.getElementById("cardLootLBrac").textContent = "(";
        document.getElementById("cardLootComp").textContent = weaponOriginal.LootDropChance;
        document.getElementById("cardLootRBrac").textContent = ")";
    }
    if (weapon.LootDropChance === weaponOriginal.LootDropChance) {
        document.getElementById("cardLoot").textContent = weapon.LootDropChance;
    }

    ///////////////////////////////
    //// Durability Multiplier ////
    ///////////////////////////////

    document.getElementById("cardDurability").textContent = "";
    document.getElementById("cardDurability").style.color = "";
    document.getElementById("cardDurabilityArrow").textContent = "";
    document.getElementById("cardDurabilityArrow").style.color = "";
    document.getElementById("cardDurabilityLBrac").textContent = "";
    document.getElementById("cardDurabilityComp").textContent = "";
    document.getElementById("cardDurabilityRBrac").textContent = "";

    weapon.Durability *= (1 + calcOil.DurabilityMult);

    weapon.Durability = Math.round((weapon.Durability + Number.EPSILON)* 100) / 100;

    if (weapon.Durability < 1) {
        weapon.Durability = 1;
    }

    if (weapon.Durability < weaponOriginal.Durability) {
                
        document.getElementById("cardDurability").textContent = weapon.Durability;
        document.getElementById("cardDurability").style.color = "OrangeRed";
        document.getElementById("cardDurabilityArrow").textContent = "🡇";
        document.getElementById("cardDurabilityArrow").style.color = "OrangeRed";
        document.getElementById("cardDurabilityLBrac").textContent = "(";
        document.getElementById("cardDurabilityComp").textContent = weaponOriginal.Durability;
        document.getElementById("cardDurabilityRBrac").textContent = ")";
    }
    if (weapon.Durability > weaponOriginal.Durability) {

        document.getElementById("cardDurability").textContent = weapon.Durability;
        document.getElementById("cardDurability").style.color = "Lime";
        document.getElementById("cardDurabilityArrow").textContent = "🡅";
        document.getElementById("cardDurabilityArrow").style.color = "Lime";
        document.getElementById("cardDurabilityLBrac").textContent = "(";
        document.getElementById("cardDurabilityComp").textContent = weaponOriginal.Durability;
        document.getElementById("cardDurabilityRBrac").textContent = ")";
    }
    if (weapon.Durability === weaponOriginal.Durability) {
        document.getElementById("cardDurability").textContent = weapon.Durability;
    }


    /////////////////////////
    //// Movement Speed  ////
    /////////////////////////

    document.getElementById("cardMove").textContent = "";
    document.getElementById("cardMove").style.color = "";
    document.getElementById("cardMoveArrow").textContent = "";
    document.getElementById("cardMoveArrow").style.color = "";
    document.getElementById("cardMoveLBrac").textContent = "";
    document.getElementById("cardMoveComp").textContent = "";
    document.getElementById("cardMoveRBrac").textContent = "";

    document.getElementById("cardWeight").textContent = "";

    document.getElementById("cardWeight").textContent = weapon.WeightClassFactor;

    let weaponWeightAdjustment = 0;
    let s = weapon.MovementSpeedModifier;
    //// Duplicate calculation for original comparison
    let resultFirstMvmntStepComp = (1 - weapon.WeightClassFactor) * (1 + weaponWeightAdjustment);
    let resultSecondMvmntStepComp = 1 - resultFirstMvmntStepComp;
    let resultMovementSpeedComp = resultSecondMvmntStepComp * (s * 100);
    //// Actual Calculation
    let resultFirstMvmntStep = (1 - weapon.WeightClassFactor) * (1 + weaponWeightAdjustment);
    let resultSecondMvmntStep = 1 - resultFirstMvmntStep;
    let resultMovementSpeed = resultSecondMvmntStep * (s * 100);
    weapon.FinalMovementSpeed = resultMovementSpeed * (1 + calcOil.MovementSpeedMult + attachmentStats.MovementSpeedMult);

    if (weapon.FinalMovementSpeed < 1) {
        weapon.FinalMovementSpeed = 1;
    }

    //// Comparison for colors
    if (weapon.FinalMovementSpeed < resultMovementSpeedComp) {
        document.getElementById("cardMove").textContent = weapon.FinalMovementSpeed;
        document.getElementById("cardMove").style.color = "OrangeRed";
        document.getElementById("cardMoveArrow").textContent = "🡇";
        document.getElementById("cardMoveArrow").style.color = "OrangeRed";
        document.getElementById("cardMoveLBrac").textContent = "(";
        document.getElementById("cardMoveComp").textContent = resultMovementSpeedComp;
        document.getElementById("cardMoveRBrac").textContent = ")";
    }
    if (weapon.FinalMovementSpeed > resultMovementSpeedComp) {
        document.getElementById("cardMove").textContent = weapon.FinalMovementSpeed;
        document.getElementById("cardMove").style.color = "Lime";
        document.getElementById("cardMoveArrow").textContent = "🡅";
        document.getElementById("cardMoveArrow").style.color = "Lime";
        document.getElementById("cardMoveLBrac").textContent = "(";
        document.getElementById("cardMoveComp").textContent = resultMovementSpeedComp;
        document.getElementById("cardMoveRBrac").textContent = ")";
    }
    else {
        document.getElementById("cardMove").textContent = weapon.FinalMovementSpeed;
    }

    /////////////////////
    //// Money Drops ////
    /////////////////////

    document.getElementById("cardMoney").textContent = "";
    document.getElementById("cardMoney").style.color = "";

    weapon.MoneyDrops = calcOil.MoneyDrops;

    if (weapon.MoneyDrops === "No") {
        document.getElementById("cardMoney").textContent = "No";
        document.getElementById("cardMoney").style.color = "Goldenrod";
    }
    if (weapon.MoneyDrops === "Yes") {
        document.getElementById("cardMoney").textContent = "Yes";
    }

    /////////////////////
    //// Organ Drops ////
    /////////////////////

    document.getElementById("cardOrgan").textContent = "";
    document.getElementById("cardOrgan").style.color = "";

    weapon.OrganDrops = calcOil.OrganDrops;

    if (weapon.OrganDrops === "No") {
        document.getElementById("cardOrgan").textContent = "No";
        document.getElementById("cardOrgan").style.color = "Goldenrod";
    }
    if (weapon.OrganDrops === "Yes") {
        document.getElementById("cardOrgan").textContent = "Yes";
    }

    //////////////////////
    //// Penetrations ////
    //////////////////////

    document.getElementById("cardPen").textContent = "";
    document.getElementById("cardPen").style.color = "";
    document.getElementById("cardPenArrow").textContent = "";
    document.getElementById("cardPenArrow").style.color = "";
    document.getElementById("cardPenLBrac").textContent = "";
    document.getElementById("cardPenComp").textContent = "";
    document.getElementById("cardPenRBrac").textContent = "";

    weapon.Penetrations += calcOil.Penetrations;

    if (weapon.Penetrations > weaponOriginal.Penetrations) {
        document.getElementById("cardPen").textContent = weapon.Penetrations;
        document.getElementById("cardPen").style.color = "Lime";
        document.getElementById("cardPenArrow").textContent = "🡅";
        document.getElementById("cardPenArrow").style.color = "Lime";
        document.getElementById("cardPenLBrac").textContent = "(";
        document.getElementById("cardPenComp").textContent = "0";
        document.getElementById("cardPenRBrac").textContent = ")";
    }
    if (weapon.Penetrations === weaponOriginal.Penetrations) {
        document.getElementById("cardPen").textContent = weapon.Penetrations;
    }

    ////////////////
    //// Recoil ////
    ////////////////

    document.getElementById("cardRecoil").textContent = "";
    document.getElementById("cardRecoil").style.color = "";
    document.getElementById("cardRecoilArrow").textContent = "";
    document.getElementById("cardRecoilArrow").style.color = "";
    document.getElementById("cardRecoilLBrac").textContent = "";
    document.getElementById("cardRecoilComp").textContent = "";
    document.getElementById("cardRecoilRBrac").textContent = "";

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

    weapon.RecoilBase = Math.round((weapon.RecoilBase + Number.EPSILON)* 100) / 100;

    if (weapon.RecoilBase < 1 && weapon.AmmoType != "Energy") {
        weapon.RecoilBase = 1;
    }

    if (weapon.RecoilBase < weaponOriginal.RecoilBase) {
        document.getElementById("cardRecoil").textContent = weapon.RecoilBase;
        document.getElementById("cardRecoil").style.color = "Lime";
        document.getElementById("cardRecoilArrow").textContent = "🡇";
        document.getElementById("cardRecoilArrow").style.color = "Lime";
        document.getElementById("cardRecoilLBrac").textContent = "(";
        document.getElementById("cardRecoilComp").textContent = weaponOriginal.RecoilBase;
        document.getElementById("cardRecoilRBrac").textContent = ")";
    }
    if (weapon.RecoilBase > weaponOriginal.RecoilBase) {
        document.getElementById("cardRecoil").textContent = weapon.RecoilBase;
        document.getElementById("cardRecoil").style.color = "OrangeRed";
        document.getElementById("cardRecoilArrow").textContent = "🡅";
        document.getElementById("cardRecoilArrow").style.color = "OrangeRed";
        document.getElementById("cardRecoilLBrac").textContent = "(";
        document.getElementById("cardRecoilComp").textContent = weaponOriginal.RecoilBase;
        document.getElementById("cardRecoilRBrac").textContent = ")";
    }
    if (weapon.RecoilBase === weaponOriginal.RecoilBase) {
        document.getElementById("cardRecoil").textContent = weapon.RecoilBase;
    }

    //////////////////////
    //// Reload Speed ////
    //////////////////////

    document.getElementById("cardReloadSpeed").textContent = "";
    document.getElementById("cardReloadSpeed").style.color = "";
    document.getElementById("cardReloadSpeedArrow").textContent = "";
    document.getElementById("cardReloadSpeedArrow").style.color = "";
    document.getElementById("cardReloadSpeedLBrac").textContent = "";
    document.getElementById("cardReloadSpeedComp").textContent = "";
    document.getElementById("cardReloadSpeedRBrac").textContent = "";

    let reloadTimeModifier = (weapon.ReloadSpeed * (1 + calcOil.ReloadSpeed));
    weapon.ReloadSpeed *= ((1 + calcOil.ReloadSpeed) * 100);
    weaponOriginal.ReloadSpeed *= 100;

    weapon.ReloadSpeed = Math.round((weapon.ReloadSpeed + Number.EPSILON)* 100) / 100;

    if (weapon.ReloadSpeed < 1) {
        weapon.ReloadSpeed = 1;
    }

    if (weapon.ReloadSpeed < weaponOriginal.ReloadSpeed) {
        document.getElementById("cardReloadSpeed").textContent = weapon.ReloadSpeed;
        document.getElementById("cardReloadSpeed").style.color = "OrangeRed";
        document.getElementById("cardReloadSpeedArrow").textContent = "🡇";
        document.getElementById("cardReloadSpeedArrow").style.color = "OrangeRed";
        document.getElementById("cardReloadSpeedLBrac").textContent = "(";
        document.getElementById("cardReloadSpeedComp").textContent = weaponOriginal.ReloadSpeed;
        document.getElementById("cardReloadSpeedRBrac").textContent = ")";
    }
    if (weapon.ReloadSpeed > weaponOriginal.ReloadSpeed) {
        document.getElementById("cardReloadSpeed").textContent = weapon.ReloadSpeed;
        document.getElementById("cardReloadSpeed").style.color = "Lime";
        document.getElementById("cardReloadSpeedArrow").textContent = "🡅";
        document.getElementById("cardReloadSpeedArrow").style.color = "Lime";
        document.getElementById("cardReloadSpeedLBrac").textContent = "(";
        document.getElementById("cardReloadSpeedComp").textContent = weaponOriginal.ReloadSpeed;
        document.getElementById("cardReloadSpeedRBrac").textContent = ")";
    }
    if (weapon.ReloadSpeed === weaponOriginal.ReloadSpeed) {
        document.getElementById("cardReloadSpeed").textContent = weapon.ReloadSpeed;
    }

    //// Reload time

    document.getElementById("cardReloadTime").textContent = "";
    document.getElementById("cardReloadTime").style.color = "";
    document.getElementById("cardReloadTimeArrow").textContent = "";
    document.getElementById("cardReloadTimeArrow").style.color = "";
    document.getElementById("cardReloadTimeLBrac").textContent = "";
    document.getElementById("cardReloadTimeComp").textContent = "";
    document.getElementById("cardReloadTimeRBrac").textContent = "";

    let reloadTime = weapon.ReloadTime / reloadTimeModifier;

    reloadTime = Math.round((reloadTime + Number.EPSILON)* 100) / 100;

    if (reloadTime > weapon.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = reloadTime;
        document.getElementById("cardReloadTime").style.color = "OrangeRed";
        document.getElementById("cardReloadTimeArrow").textContent = "🡅";
        document.getElementById("cardReloadTimeArrow").style.color = "OrangeRed";
        document.getElementById("cardReloadTimeLBrac").textContent = "(";
        document.getElementById("cardReloadTimeComp").textContent = weapon.ReloadTime;
        document.getElementById("cardReloadTimeRBrac").textContent = ")";
    }
    if (reloadTime < weaponOriginal.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = reloadTime;
        document.getElementById("cardReloadTime").style.color = "Lime";
        document.getElementById("cardReloadTimeArrow").textContent = "🡇";
        document.getElementById("cardReloadTimeArrow").style.color = "Lime";
        document.getElementById("cardReloadTimeLBrac").textContent = "(";
        document.getElementById("cardReloadTimeComp").textContent = weapon.ReloadTime;
        document.getElementById("cardReloadTimeRBrac").textContent = ")";
    }
    if (reloadTime === weaponOriginal.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = reloadTime;
    }

    ////////////////
    //// Spread ////
    ////////////////

    //// Spread Add

    document.getElementById("cardSpread").textContent = "";
    document.getElementById("cardSpread").style.color = "";
    document.getElementById("cardSpreadArrow").textContent = "";
    document.getElementById("cardSpreadArrow").style.color = "";
    document.getElementById("cardSpreadComp").textContent = "";
    document.getElementById("cardSpreadLBrac").textContent = "";
    document.getElementById("cardSpreadRBrac").textContent = "";

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

    weapon.Spread = Math.round((weapon.Spread + Number.EPSILON)* 100) / 100;

    weapon.Spread = Math.round((weapon.Spread + Number.EPSILON)* 100) / 100;

    if (weapon.Spread < 0) {
        weapon.Spread = 0;
    }
   
    if (weapon.Spread > weaponOriginal.Spread) {
        document.getElementById("cardSpread").textContent = weapon.Spread;
        document.getElementById("cardSpread").style.color = "OrangeRed";
        document.getElementById("cardSpreadArrow").textContent = "🡅";
        document.getElementById("cardSpreadArrow").style.color = "OrangeRed";
        document.getElementById("cardSpreadLBrac").textContent = "(";
        document.getElementById("cardSpreadComp").textContent = weaponOriginal.Spread;
        document.getElementById("cardSpreadRBrac").textContent = ")";
    }
    if (weapon.Spread < weaponOriginal.Spread) {
        document.getElementById("cardSpread").textContent = weapon.Spread;
        document.getElementById("cardSpread").style.color = "Lime";
        document.getElementById("cardSpreadArrow").textContent = "🡇";
        document.getElementById("cardSpreadArrow").style.color = "Lime";
        document.getElementById("cardSpreadLBrac").textContent = "(";
        document.getElementById("cardSpreadComp").textContent = weaponOriginal.Spread;
        document.getElementById("cardSpreadRBrac").textContent = ")";
    }
    if (weapon.Spread === weaponOriginal.Spread) {
        document.getElementById("cardSpreadComp").textContent = weaponOriginal.Spread;
    }
    
    //////////////
    //// Drag ////
    //////////////

    document.getElementById("cardDrag").textContent = "";
    document.getElementById("cardDrag").style.color = "";
    document.getElementById("cardDragArrow").textContent = "";
    document.getElementById("cardDragArrow").style.color = "";
    document.getElementById("cardDragComp").textContent = "";
    document.getElementById("cardDragLBrac").textContent = "";
    document.getElementById("cardDragRBrac").textContent = "";

    weapon.Drag += calcOil.Drag;

    if (weapon.Drag > 0) {
        document.getElementById("cardDrag").textContent = weapon.Drag;
        document.getElementById("cardDrag").style.color = "OrangeRed";
        document.getElementById("cardDragArrow").textContent = "🡅";
        document.getElementById("cardDragArrow").style.color = "OrangeRed";
        document.getElementById("cardDragComp").textContent = "(";
        document.getElementById("cardDragLBrac").textContent = "0";
        document.getElementById("cardDragRBrac").textContent = ")";
    }
    if (weapon.Drag === 0) {
        document.getElementById("cardDrag").textContent = "0";
    }

    //////////////////////////
    //// Durability Usage ////
    //////////////////////////

    document.getElementById("cardDurabilityUsage").textContent = "";
    document.getElementById("cardDurabilityUsage").style.color = "";
    document.getElementById("cardDurabilityUsageArrow").textContent = "";
    document.getElementById("cardDurabilityUsageArrow").style.color = "";
    document.getElementById("cardDurabilityUsageLBrac").textContent = "";
    document.getElementById("cardDurabilityUsageComp").textContent = "";
    document.getElementById("cardDurabilityUsageRBrac").textContent = "";

    weapon.DurabilityUsage = calcOil.DurabilityUsage;

    document.getElementById("cardDurabilityUsage").textContent = weapon.DurabilityUsage;

    // Add image to card
    //this.cardWeaponImage.Source = new BitmapImage(new Uri($".\\Images\\Guns\\{weapon.Name}.png", UriKind.Relative));

    //// Shots to break

    let shotsToBreak = weapon.Durability / weapon.DurabilityUsage;
    let shotsToBreakRounded = Math.round(shotsToBreak);

    document.getElementById("cardShotsToBreak").textContent = shotsToBreakRounded;
}

function getOilByName(name) {
    return oilsData?.Oil[name] || null;
}

function getAttachmentByName(name) {
    return attachmentsData?.Attachment[name] || null;
}
function getBarrelByName(name) {
    return attachmentsData?.Attachment.Barrel[name] || null;
}
function getOpticByName(name) {
    return attachmentsData?.Attachment.Optic[name] || null;
}
function getChamberByName(name) {
    return attachmentsData?.Attachment.Chamber[name] || null;
}
function getLaserByName(name) {
    return attachmentsData?.Attachment.Laser[name] || null;
}
function getFiremodeByName(name) {
    return attachmentsData?.Attachment.Firemode[name] || null;
}

function getWeaponByName(name) {
    return weaponsData?.Weapon[name] || null;
}

function getOrigWeaponByName(name) {
    return weaponsOrigData?.Weapon[name] || null;
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
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-ammo-consume-chance":
                shuffle(oilsAmmo);
                rolledOils[i] = oilsAmmo[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-base-crit-chance":
                shuffle(oilsCrit);
                rolledOils[i] = oilsCrit[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-bullet-bounce":
                shuffle(oilsBounce);
                rolledOils[i] = oilsBounce[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-bullet-speed":
                shuffle(oilsSpeed);
                rolledOils[i] = oilsSpeed[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-add-damage":
                shuffle(oilsAddDam);
                rolledOils[i] = oilsAddDam[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-mult-damage":
                shuffle(oilsMultDam);
                rolledOils[i] = oilsMultDam[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-max-durability":
                shuffle(oilsDur);
                rolledOils[i] = oilsDur[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-penetration":
                shuffle(oilsPen);
                rolledOils[i] = oilsPen[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-projectiles":
                shuffle(oilsProj);
                rolledOils[i] = oilsProj[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-recoil":
                shuffle(oilsRecoil);
                rolledOils[i] = oilsRecoil[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-reload-speed":
                shuffle(oilsReload);
                rolledOils[i] = oilsReload[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-rpm":
                shuffle(oilsRPM);
                rolledOils[i] = oilsRPM[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-random-spread":
                shuffle(oilsSpread);
                rolledOils[i] = oilsSpread[0];
                rolledOils[i] = getOilByName(rolledOils[i]);
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-no-selection":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "static-choose":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case null:
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            case "":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                break;
            default: //  working on this - getoilbyname is returning null
                    const selectedIndex = selectedOil[i].selectedIndex;
                    const selectedText = selectedOil[i].options[selectedIndex].text;
                    let selOil = getOilByName(selectedText);
                    rolledOils[i] = selOil;
                    oilStats(rolledOils[i]);
                    
                console.log(oilStats(rolledOils[i]));
                    addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`);
                    break;
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
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-pistols":
            shuffle(gunsPistols);
            name = gunsPistols[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-revolvers":
            shuffle(gunsRevolvers);
            name = gunsRevolvers[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-shotguns":
            shuffle(gunsShotguns);
            name = gunsShotguns[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-submachine-guns":
            shuffle(gunsSMGs);
            name = gunsSMGs[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-assault-rifles":
            shuffle(gunsARs);
            name = gunsARs[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-lmgs":
            shuffle(gunsLMGs);
            name = gunsLMGs[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-rifles":
            shuffle(gunsRifles);
            name = gunsRifles[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        case "random-sniper-rifles":
            shuffle(gunsSnipers);
            name = gunsSnipers[0];
            selectedWeapon = getWeaponByName(name);
            modifiedWeapon = getOrigWeaponByName(name);
            addName(name, selectedValue, "weapon");
            break;
        default:
            const selectedIndex = name.selectedIndex;
            const selectedText = name.options[selectedIndex].text;
            selectedWeapon = getWeaponByName(selectedText);
            modifiedWeapon = getOrigWeaponByName(selectedText);
            addName(selectedWeapon.Name, selectedValue, "weapon")
    }
}

function rollAttachments() {
    let selectorBarrel = document.getElementById("barrelselector");
    let selectorOptic = document.getElementById("opticselector");
    let selectorLaser = document.getElementById("laserselector");
    let selectorFiremode = document.getElementById("firemodeselector");
    let selectorChamber = document.getElementById("chamberselector");

    let attSel = null;

    selectedAttachments = getAttachmentByName("All");

    switch (selectorBarrel.value) {
        case "static-not-applicable":
            selectedBarrel = getBarrelByName("None");
            break;
        case "static-choose":
            selectedBarrel = getBarrelByName("None");
            console.log(getBarrelByName("None"));
            break;
        case "none":
            selectedBarrel = getBarrelByName("None");
            break;
        case "static-random-barrel":
            shuffle(attachmentsBarrels);
            attSel = attachmentsBarrels[0];
            selectedBarrel = getBarrelByName(`Barrel.${attSel}`);
            break;
        default:
            const selectedIndex = selectorBarrel.selectedIndex;
            const selectedText = selectorBarrel.options[selectedIndex].text;
            selectedBarrel = getBarrelByName(selectedText);
    }
    selectedAttachments.SpreadAdd += selectedBarrel.SpreadAdd;
    selectedAttachments.MovementSpeedMult += selectedBarrel.MovementSpeedMult;

    switch (selectorChamber.value) {
        case "static-not-applicable":
            selectedChamber = getChamberByName(`Chamber Chisel - ${selectedWeapon.AmmoType}`);
            break;
        case "static-choose":
            selectedChamber = getChamberByName(`Chamber Chisel - ${selectedWeapon.AmmoType}`);
            break;
        case "none":
            selectedChamber = getChamberByName(`Chamber Chisel - ${selectedWeapon.AmmoType}`);
            break;
        case "static-random-barrel":
            shuffle(attachmentsRechamber);
            attSel = attachmentsRechamber[0];
            selectedChamber = getChamberByName(attSel);
            break;
        default:
            const selectedIndex = selectorChamber.selectedIndex;
            const selectedText = selectorChamber.options[selectedIndex].text;
            selectedChamber = getChamberByName(selectedText);
    }
    switch (selectorFiremode.value) {
        case "static-not-applicable":
            selectedFiremode = getFiremodeByName("None");
            break;
        case "static-choose":
            selectedFiremode = getFiremodeByName("None");
            break;
        case "none":
            selectedFiremode = getFiremodeByName("None");
            break;
        default:
            const selectedIndex = selectorFiremode.selectedIndex;
            const selectedText = selectorFiremode.options[selectedIndex].text;
            selectedFiremode = getFiremodeByName(selectedText);
    }
    selectedAttachments.SpreadAdd += selectedFiremode.SpreadAdd;
    selectedAttachments.DamageMult += selectedFiremode.DamageMult;

    switch (selectorLaser.value) {
        case "static-not-applicable":
            selectedLaser = getLaserByName("None");
            break;
        case "static-choose":
            selectedLaser = getLaserByName("None");
            break;
        case "none":
            selectedLaser = getLaserByName("None");
            break;
        case "static-random-laser":
            shuffle(attachmentsLasers);
            attSel = attachmentsLasers[0];
            selectedLaser = getLaserByName(attSel);
            break;
        default:
            const selectedIndex = selectorLaser.selectedIndex;
            const selectedText = selectorLaser.options[selectedIndex].text;
            selectedLaser = getLaserByName(selectedText);
    }
    selectedAttachments.MovingAccuracy += selectedLaser.MovingAccuracy;

    switch (selectorOptic.value) {
        case "static-choose":
            selectedOptic = getOpticByName("None");
            break;
        case "none":
            selectedOptic = getOpticByName("None");
            break;
        case "static-random-optic":
            shuffle(attachmentsOptics);
            attSel = attachmentsOptics[0];
            selectedOptic = getOpticByName(attSel);
            break;
        default:
            const selectedIndex = selectorOptic.selectedIndex;
            const selectedText = selectorOptic.options[selectedIndex].text;
            selectedOptic = getOpticByName(selectedText);
    }
    selectedAttachments.ADSCritChance += selectedOptic.ADSCritChance;

    // chamber: `Chamber Chisel - ${weapon.ammotype};?
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

const attachmentsBarrels = [
    "A12C Muzzle Brake",
    "Aftermarket Haukland Silencer",
    "Barrel Extension 2in",
    "Barrel Extension 4in",
    "Barrel Extension 6in",
    "Breznik BMD",
    "Breznik BMD (Tactical)",
    "Haukland Flash Hider",
    "Haukland Silencer",
    "Improvised Barrel Extension",
    "M87 Albatross Silencer",
    "SR-P3 Silencer",
    "Shrouded Barrel Extension",
    "Warmage Compensator"
];

const attachmentsOptics = [
    "Assault Scope",
    "Compact Sight",
    "Holographic Sight",
    "Hunting Scope",
    "Recon Scope",
    "Reflex Sight",
    "Sniper Scope"
];

const attachmentsLaser = [
    "Red",
    "Green",
    "Yellow"
];

const attachmentsFiremode = [
    "Gun Crank",
    "Priming Bolt"
];

const attachmentsRechamber = [
    "Chamber Chisel - .50 BMG",
    "Chamber Chisel - 12Ga",
    "Chamber Chisel - 5.56mm",
    "Chamber Chisel - 7.62mm",
    "Chamber Chisel - 9mm"
];