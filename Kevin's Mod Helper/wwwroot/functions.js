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

    // api thing

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
let oilsAll = null;
let oilsAmmo = null;
let oilsCrit = null;
let oilsBounce = null;
let oilsSpeed = null;
let oilsAddDam = null;
let oilsMultDam = null;
let oilsDur = null;
let oilsPen = null;
let oilsProj = null;
let oilsRecoil = null;
let oilsReload = null;
let oilsRPM = null;
let oilsSpread = null;

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

function infoboxHover(elementType, value, name, data) {
    document.getElementById("mainHeader").innerHTML = "";
    switch (elementType) {
        case "button":
            document.getElementById("infoboxText").innerHTML = data;
            break;
        case "option":
            break;
        case "stat":
            break;
        case "dropdown":
            break;
        default:
    }
}

function infoboxClear() {
    document.getElementById("infoboxText").innerHTML = "";
    document.getElementById("mainHeader").innerHTML = "Kevin's Build Helper";
    infobox.hidden = "hidden";
}

// Used to remove and replace oils to prevent dupes
function oilRemover(selector, selectedvalue, selID) {
    
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

    function makeAllOilsVisible() {
        for (var i = 0; i < selector1Options.length; i++) {
            if (selector1Options[i].li.hidden === true) {
                selector1Options[i].li.hidden = false;
            }
        }
        for (var i = 0; i < selector2Options.length; i++) {
                if (selector2Options[i].li.hidden === true) {
                    selector2Options[i].li.hidden = false;
                }
            }
        for (var i = 0; i < selector3Options.length; i++) {
            if (selector3Options[i].li.hidden === true) {
                selector3Options[i].li.hidden = false;
            }
        }
        for (var i = 0; i < selector4Options.length; i++) {
                if (selector4Options[i].li.hidden === true) {
                    selector4Options[i].li.hidden = false;
                }
            }
            for (var i = 0; i < selector5Options.length; i++) {
            if (selector5Options[i].li.hidden === true) {
                selector5Options[i].li.hidden = false;
            }
        }
    }

    function hideSelectedOils(selector, selectedvalue) {
        let selectorArray = [selector1Options, selector2Options, selector3Options, selector4Options, selector5Options];

        for (var i = 0; i < selectorArray.length; i++) {
            let j = i + 1;
            for (const value of selectorArray[i]) {
                if (i !== 0){
                    let oil = oilSelector1.proDropdown.getValue();
                    if (oil.startsWith("static") && oil !== "static-choose" ) {
                        let compOil = rolledOils[i].Name;
                        let compOilRep = compOil.replaceAll(" ", "-");
                        let compOilLower = compOilRep.toLowerCase();
                        if (value.li.dataset.value === compOilLower) {
                            value.li.hidden = true;
                        }
                    }
                    else if (value.li.dataset.value === oil) {
                        value.li.hidden = true;
                    }
                }
                if (i !== 1){
                    let oil = oilSelector2.proDropdown.getValue();
                    if (oil.startsWith("static") && oil !== "static-choose" ) {
                        let compOil = rolledOils[i].Name;
                        let compOilRep = compOil.replaceAll(" ", "-");
                        let compOilLower = compOilRep.toLowerCase();
                        if (value.li.dataset.value === compOilLower) {
                            value.li.hidden = true;
                        }
                    }
                    else if (value.li.dataset.value === oil) {
                        value.li.hidden = true;
                    }
                }
                if (i !== 2){
                    let oil = oilSelector3.proDropdown.getValue();
                    if (oil.startsWith("static") && oil !== "static-choose" ) {
                        let compOil = rolledOils[i].Name;
                        let compOilRep = compOil.replaceAll(" ", "-");
                        let compOilLower = compOilRep.toLowerCase();
                        if (value.li.dataset.value === compOilLower) {
                            value.li.hidden = true;
                        }
                    }
                    else if (value.li.dataset.value === oil) {
                        value.li.hidden = true;
                    }
                }
                if (i !== 3){
                    let oil = oilSelector4.proDropdown.getValue();
                    if (oil.startsWith("static") && oil !== "static-choose" ) {
                        let compOil = rolledOils[i].Name;
                        let compOilRep = compOil.replaceAll(" ", "-");
                        let compOilLower = compOilRep.toLowerCase();
                        if (value.li.dataset.value === compOilLower) {
                            value.li.hidden = true;
                        }
                    }
                    else if (value.li.dataset.value === oil) {
                        value.li.hidden = true;
                    }
                }
                if (i !== 4){
                    let oil = oilSelector5.proDropdown.getValue();
                    if (oil.startsWith("static") && oil !== "static-choose" ) {
                        let compOil = rolledOils[i].Name;
                        let compOilRep = compOil.replaceAll(" ", "-");
                        let compOilLower = compOilRep.toLowerCase();
                        if (value.li.dataset.value === compOilLower) {
                            value.li.hidden = true;
                        }
                    }
                    else if (value.li.dataset.value === oil) {
                        value.li.hidden = true;
                    }
                }
            }
        }
    }

    makeAllOilsVisible()
    hideSelectedOils(selector, selectedvalue)

} 

function attachmentFilter(selWepValue, selWepName, single) {

    let name = document.getElementById("weapons");

    let selectedText = null;

    if (single === "true") {
        selectedText = selectedWeapon.Name;
    }
    else {
        selectedText = name.options[selWepName].text;
    }

    let selectorBarrel = document.getElementById("barrelselector");
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
        case "3-Round Burst":
            items.filter(i => i.li.dataset.value === "priming-bolt")[0].li.hidden = true;
            if (selectorFiremode.value === "priming-bolt") {
                selectorFiremode.proDropdown.setValue("static-choose");     
            };
            break;
        case "Static Single":
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

setTimeout(() => {
  rollOnPageLoad('true', 'pageload', 7, 'p38-dirk');
}, 150);

// For when the button is clicked.
function onGenerate(item) {
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
    rollWeapon();
    rollAttachments('false', item);
    rollOils();
    oilCalcs(oilStatModifiers);
}

function rollOnSelectAttach(single, item) {
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
    rollWeapon();
    rollAttachments(single, item);
    oilCalcs(oilStatModifiers);
}

function rollOnSelectWep(single, selector, selID, value) {
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
    rollWeapon(selector);
    attachmentFilter(value, selID, single)
    rollAttachments(single);
    rollOils(single, selector, selID, value);
    oilRemover(selector, value, selID);
    oilCalcs(oilStatModifiers);
}

async function rollOnPageLoad(single, selector, selID, value) {

    const result = await loadOrigWeapons();
    const result2 = await loadWeapons();
    let selPageLoad = document.getElementById("weapons");
    selPageLoad.proDropdown.setValue("value"); 
    oilStatModifiers = oilsData?.Oil["Default"];

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
    
    rollWeapon(selector);
    attachmentFilter(value, selID, single)
    rollAttachments(single);
    rollOils();
    oilCalcs(oilStatModifiers);
}

function rollOnSelect(single, selector, selID, value) {
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
    rollWeapon();
    rollAttachments(single);
    rollOils(single, selector, selID, value);
    oilRemover(selector, value, selID);
    oilCalcs(oilStatModifiers);
}

function addName(name, value, type, desc, descID, i) {
    if (type === "weapon") {
        let weapReplace = name.replaceAll(" ", "_");
        document.getElementById("weaponimage").src = `.\\Images\\Weapons\\${weapReplace}.png`;
        //document.getElementById("weaponimage2").src = `.\\Images\\Weapons\\${weapReplace}.png`;
        document.getElementById("cardWeaponName").textContent = name;
    }
    if (type === "oil") {
        let oilReplace = desc.replaceAll('\n', '<br>');
        document.getElementById(value).textContent = name;
        document.getElementById(descID).innerHTML = oilReplace;
        
        if (i+1) {
            document.getElementById(`cardOil${i + 1}Img`).style.backgroundImage = `url('./Images/Enchantments/${name}.webp')`;
        }
    }
    if (type === "attachment") {
        let attachReplace = desc.replaceAll('\\n', '<br>');
        document.getElementById(value).textContent = name;
        document.getElementById(descID).innerHTML = attachReplace;
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

function percentConv(stat) {
       return stat *= 100;
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
    if (selectedOil.DurLossMult != 0.0) {
        oilStatModifiers.DurLossMult += selectedOil.DurLossMult;
    }
}

function oilCalcs(calcOil) {

    let weapon = modifiedWeapon;
    let weaponOriginal = selectedWeapon;
    let chamber = selectedChamber;
    let attachmentStats = selectedAttachments;
    let weaponOriginalChamber = getChamberByName(`Chamber Chisel - ${selectedWeapon.AmmoType}`);
console.log(modifiedWeapon);
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
    document.getElementById("cardMagSize").textContent = weapon.MagSize;

    /////////////
    //// RPM ////
    /////////////
    //#region

    document.getElementById("cardRPM").textContent = "";
    document.getElementById("cardRPM").style.color = "";
    document.getElementById("cardRPMArrow").textContent = "";
    document.getElementById("cardRPMArrow").style.color = "";
    document.getElementById("cardRPMLBrac").textContent = "";
    document.getElementById("cardRPMComp").textContent = "";
    document.getElementById("cardRPMRBrac").textContent = "";

    let rpmCalc = weapon.RPM * (1 + calcOil.RPM + attachmentStats.RPM);
    let rpmRound = Math.round((rpmCalc + Number.EPSILON)* 100) / 100;
    
    let neuraxisMaxRPM = rpmRound * 5;

    let neuraxisMaxRPMRound = Math.round((neuraxisMaxRPM + Number.EPSILON)* 100) / 100;

    if (rpmRound < 1) {
        rpmRound = 1;
    }

    if (rpmRound > weaponOriginal.RPM) {
        if (weapon.Name === "Neuraxis F22") {
            document.getElementById("cardRPM").textContent = `REV: ${rpmRound} -> ${neuraxisMaxRPMRound}`;
            document.getElementById("cardRPMComp").textContent = "400 -> 2000";
        }
        else {
            document.getElementById("cardRPM").textContent = rpmRound;
            document.getElementById("cardRPMComp").textContent = weaponOriginal.RPM;
        }
        document.getElementById("cardRPM").style.color = "Lime";
        document.getElementById("cardRPMArrow").textContent = "🡅";
        document.getElementById("cardRPMArrow").style.color = "Lime";
        document.getElementById("cardRPMLBrac").textContent = "(";
        document.getElementById("cardRPMRBrac").textContent = ")";
    }
    if (rpmRound < weaponOriginal.RPM) {
        if (weapon.Name === "Neuraxis F22") {
            document.getElementById("cardRPM").textContent = `REV: ${rpmRound} -> ${neuraxisMaxRPMRound}`;
            document.getElementById("cardRPMComp").textContent = "400 -> 2000";
        }
        else {
            document.getElementById("cardRPM").textContent = rpmRound;
            document.getElementById("cardRPMComp").textContent = weaponOriginal.RPM;
        }

        document.getElementById("cardRPM").style.color = "OrangeRed";
        document.getElementById("cardRPMArrow").textContent = "🡇";
        document.getElementById("cardRPMArrow").style.color = "OrangeRed";
        document.getElementById("cardRPMLBrac").textContent = "(";
        document.getElementById("cardRPMRBrac").textContent = ")";
    }
    if (rpmRound === weaponOriginal.RPM) {
        if (weapon.Name === "Neuraxis F22") {
            document.getElementById("cardRPM").textContent = "REV: 400 -> 2000";
        }
        else {
            document.getElementById("cardRPM").textContent = rpmRound;
        }
    }
    //#endregion
    
    ///////////////////////////////
    //// Ammo Consume Chance ////
    ///////////////////////////////
    //#region

    document.getElementById("cardAmmo").textContent = "";
    document.getElementById("cardAmmo").style.color = "";
    document.getElementById("cardAmmo%").textContent = "";
    document.getElementById("cardAmmo%").style.color = "";
    document.getElementById("cardAmmoArrow").textContent = "";
    document.getElementById("cardAmmoArrow").style.color = "";
    document.getElementById("cardAmmoLBrac").textContent = "";
    document.getElementById("cardAmmoComp").textContent = "";
    document.getElementById("cardAmmoRBrac").textContent = "";

    let ammoCalc = weapon.AmmoConsumeChance + calcOil.AmmoConsumeChance;
    let ammoConv = percentConv(ammoCalc);

    let ammoRound = Math.round((ammoConv + Number.EPSILON)* 100) / 100;

    if (ammoRound < 0) {
        ammoRound = 0;
    }

    if (ammoRound < 100) {
        document.getElementById("cardAmmo").textContent = ammoRound;
        document.getElementById("cardAmmo").style.color = "Lime";
        document.getElementById("cardAmmo%").textContent = "%";
        document.getElementById("cardAmmo%").style.color = "Lime";
        document.getElementById("cardAmmoArrow").textContent = "🡇";
        document.getElementById("cardAmmoArrow").style.color = "Lime";
        document.getElementById("cardAmmoLBrac").textContent = "(";
        document.getElementById("cardAmmoComp").textContent = "100%";
        document.getElementById("cardAmmoRBrac").textContent = ")";
    }
    if (ammoRound === 100) {
        document.getElementById("cardAmmo").textContent = "100%";
    }
    //#endregion

    ///////////////////////////////
    //// Extra Ammo Use Chance ////
    ///////////////////////////////
    //#region

    document.getElementById("cardExtra").textContent = "";
    document.getElementById("cardExtra").style.color = "";
    document.getElementById("cardExtra%").textContent = "";
    document.getElementById("cardExtra%").style.color = "";
    document.getElementById("cardExtraArrow").textContent = "";
    document.getElementById("cardExtraArrow").style.color = "";
    document.getElementById("cardExtraLBrac").textContent = "";
    document.getElementById("cardExtraComp").textContent = "";
    document.getElementById("cardExtraRBrac").textContent = "";

    let extraCalc = weapon.ExtraAmmoUseChance + calcOil.ExtraAmmoUseChance;
    let extraConv = percentConv(extraCalc);

    let extraRound = Math.round((extraConv + Number.EPSILON)* 100) / 100;

    if (extraRound > 100) {
        extraRound = 100;
    }

    if (extraRound > 0.0) {
        document.getElementById("cardExtra").textContent = extraRound;
        document.getElementById("cardExtra").style.color = "OrangeRed";
        document.getElementById("cardExtra%").textContent = "%";
        document.getElementById("cardExtra%").style.color = "OrangeRed";
        document.getElementById("cardExtraArrow").textContent = "🡅";
        document.getElementById("cardExtraArrow").style.color = "OrangeRed";
        document.getElementById("cardExtraLBrac").textContent = "(";
        document.getElementById("cardExtraComp").textContent = "0%";
        document.getElementById("cardExtraRBrac").textContent = ")";
        }
    if (extraRound === 0) {
        document.getElementById("cardExtra").textContent = "0%";
    }
    //#endregion

    /////////////////
    //// Bounces ////
    /////////////////
    //#region

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
    //#endregion

    /////////////////////
    //// Bullet Drop ////
    /////////////////////
    //#region

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
    //#endregion

    //////////////////////
    //// Bullet Speed ////
    //////////////////////
    //#region

    document.getElementById("cardSpeed").textContent = "";
    document.getElementById("cardSpeed").style.color = "";
    document.getElementById("cardSpeed%").textContent = "";
    document.getElementById("cardSpeed%").style.color = "";
    document.getElementById("cardSpeedArrow").textContent = "";
    document.getElementById("cardSpeedArrow").style.color = "";
    document.getElementById("cardSpeedLBrac").textContent = "";
    document.getElementById("cardSpeedComp").textContent = "";
    document.getElementById("cardSpeedRBrac").textContent = "";

    let speedCalc = weapon.BulletSpeed + calcOil.BulletSpeed + attachmentStats.BulletSpeed;
    let speedConv = percentConv(speedCalc);

    let speedRound = Math.round((speedConv + Number.EPSILON)* 100) / 100;

    if (speedRound < 1) {
        speedRound = 1;
    }

    if (speedRound > 100) {
        document.getElementById("cardSpeed").textContent = speedRound;
        document.getElementById("cardSpeed").style.color = "Lime";
        document.getElementById("cardSpeed%").textContent = "%";
        document.getElementById("cardSpeed%").style.color = "Lime";
        document.getElementById("cardSpeedArrow").textContent = "🡅";
        document.getElementById("cardSpeedArrow").style.color = "Lime";
        document.getElementById("cardSpeedLBrac").textContent = "(";
        document.getElementById("cardSpeedComp").textContent = "100%";
        document.getElementById("cardSpeedRBrac").textContent = ")";
    }
    if (speedRound < 100) {
        document.getElementById("cardSpeed").textContent = speedRound;
        document.getElementById("cardSpeed").style.color = "OrangeRed";
        document.getElementById("cardSpeed%").textContent = "%";
        document.getElementById("cardSpeed%").style.color = "OrangeRed";
        document.getElementById("cardSpeedArrow").textContent = "🡇";
        document.getElementById("cardSpeedArrow").style.color = "OrangeRed";
        document.getElementById("cardSpeedLBrac").textContent = "(";
        document.getElementById("cardSpeedComp").textContent = "100%";
        document.getElementById("cardSpeedRBrac").textContent = ")";
    }
    if (speedRound === 100) {
        document.getElementById("cardSpeed").textContent = "100%";
    }
    //#endregion

    //////////////////////////
    //// Base Crit Chance ////
    //////////////////////////
    //#region

    document.getElementById("cardCrit").textContent = "";
    document.getElementById("cardCrit").style.color = "";
    document.getElementById("cardCrit%").textContent = "";
    document.getElementById("cardCrit%").style.color = "";
    document.getElementById("cardCritArrow").textContent = "";
    document.getElementById("cardCritArrow").style.color = "";
    document.getElementById("cardCritLBrac").textContent = "";
    document.getElementById("cardCritComp").textContent = "";
    document.getElementById("cardCritRBrac").textContent = "";

    let baseCalc = calcOil.BaseCritChance + attachmentStats.BaseCritChance;
    let baseConv = percentConv(baseCalc);
    let baseAdd = weapon.BaseCritChance + baseConv;

    let baseRound = Math.round((baseAdd + Number.EPSILON)* 100) / 100;

    if (baseRound > 0.0) {
        document.getElementById("cardCrit").textContent = baseRound;
        document.getElementById("cardCrit").style.color = "Lime";
        document.getElementById("cardCrit%").textContent = "%";
        document.getElementById("cardCrit%").style.color = "Lime";
        document.getElementById("cardCritArrow").textContent = "🡅";
        document.getElementById("cardCritArrow").style.color = "Lime";
        document.getElementById("cardCritLBrac").textContent = "(";
        document.getElementById("cardCritComp").textContent = "0%";
        document.getElementById("cardCritRBrac").textContent = ")";
    }
    else {
        document.getElementById("cardCrit").textContent = "0%";
    }
    //#endregion

    /////////////////////////
    //// ADS Crit Chance ////
    /////////////////////////
    //#region

    document.getElementById("cardADSCrit").textContent = "";
    document.getElementById("cardADSCrit").style.color = "";
    document.getElementById("cardADSCrit%").textContent = "";
    document.getElementById("cardADSCrit%").style.color = "";
    document.getElementById("cardADSCritArrow").textContent = "";
    document.getElementById("cardADSCritArrow").style.color = "";
    document.getElementById("cardADSCritLBrac").textContent = "";
    document.getElementById("cardADSCritComp").textContent = "";
    document.getElementById("cardADSCritRBrac").textContent = "";

    let adsConv = percentConv(attachmentStats.ADSCritChance);
    let adsCalc = weapon.ADSCritChance + adsConv;

    let adsRound = Math.round((adsCalc + Number.EPSILON)* 100) / 100;

    if (adsRound > 0.0) {
        document.getElementById("cardADSCrit").textContent = adsRound;
        document.getElementById("cardADSCrit").style.color = "Lime";
        document.getElementById("cardADSCrit%").textContent = "%";
        document.getElementById("cardADSCrit%").style.color = "Lime";
        document.getElementById("cardADSCritArrow").textContent = "🡅";
        document.getElementById("cardADSCritArrow").style.color = "Lime";
        document.getElementById("cardADSCritLBrac").textContent = "(";
        document.getElementById("cardADSCritComp").textContent = "0%";
        document.getElementById("cardADSCritRBrac").textContent = ")";
    }
    else {
        document.getElementById("cardADSCrit").textContent = "0%";
    }
    //#endregion
/*
    ///////////////////////////
    //// Total Crit Chance ////
    ///////////////////////////
    //#region

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
    //#endregion

    //////////////////////////////
    //// Damage & Projectiles ////
    //////////////////////////////
    //#region

    document.getElementById("cardDamage").textContent = "";
    document.getElementById("cardDamage").style.color = "";
    document.getElementById("cardDamageArrow").textContent = "";
    document.getElementById("cardDamageArrow").style.color = "";
    document.getElementById("cardDamageComp").textContent = "";
    document.getElementById("cardDamageLBrac").textContent = "";
    document.getElementById("cardDamageRBrac").textContent = "";
    document.getElementById("cardDamageProj").textContent = "";
    document.getElementById("cardDamageLRArrow").textContent = "";
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
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").textContent = "🡅";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamageLRArrow").textContent = " ↔ ";
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
            document.getElementById("cardDamageTotalLRArrow").textContent = "";
            document.getElementById("cardDamageTotalLBrac").textContent = "";
            document.getElementById("cardDamageTotalComp").textContent = "";
            document.getElementById("cardDamageTotalRBrac").textContent = "";

    if (weapon.TotalDamage > weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;
            document.getElementById("cardDamageTotal").style.color = "Lime";
            document.getElementById("cardDamageTotalArrow").textContent = "🡅";
            document.getElementById("cardDamageTotalArrow").style.color = "Lime";
            document.getElementById("cardDamageTotalLRArrow").textContent = " ↔ ";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (weapon.TotalDamage < weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;
            document.getElementById("cardDamageTotal").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalArrow").textContent = "🡇";
            document.getElementById("cardDamageTotalArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalLRArrow").textContent = " ↔ ";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (weapon.TotalDamage == weaponOriginal.TotalDamage) {
        document.getElementById("cardDamageTotal").textContent = weapon.TotalDamage;
    }
    //#endregion

    /////////////////
    //// Can ADS ////
    /////////////////
    //#region

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
    //#endregion

    ////////////////////
    //// Jump Power ////
    ////////////////////
    //#region
    
    document.getElementById("cardJump").textContent = "";
    document.getElementById("cardJump").style.color = "";
    document.getElementById("cardJump%").textContent = "";
    document.getElementById("cardJump%").style.color = "";
    document.getElementById("cardJumpArrow").textContent = "";
    document.getElementById("cardJumpArrow").style.color = "";
    document.getElementById("cardJumpLBrac").textContent = "";
    document.getElementById("cardJumpComp").textContent = "";
    document.getElementById("cardJumpRBrac").textContent = "";

    let jumpCalc = weapon.JumpPower + calcOil.JumpPower;
    let jumpConv = percentConv(jumpCalc);
    let jumpConvOrig = percentConv(weaponOriginal.JumpPower);

    let jumpRound = Math.round((jumpConv + Number.EPSILON)* 100) / 100;
    let jumpRoundOrig = Math.round((jumpConvOrig + Number.EPSILON)* 100) / 100;

    if (jumpRound < 1) {
        jumpRound = 1;
    }

    if (jumpRound < jumpRoundOrig) {
        document.getElementById("cardJump").textContent = jumpRound;
        document.getElementById("cardJump").style.color = "OrangeRed";
        document.getElementById("cardJump%").textContent = "%";
        document.getElementById("cardJump%").style.color = "OrangeRed";
        document.getElementById("cardJumpArrow").textContent = "🡇";
        document.getElementById("cardJumpArrow").style.color = "OrangeRed";
        document.getElementById("cardJumpLBrac").textContent = "(";
        document.getElementById("cardJumpComp").textContent = jumpRoundOrig;
        document.getElementById("cardJumpRBrac").textContent = ")";
    }
    if (jumpRound > jumpRoundOrig) {
        document.getElementById("cardJump").textContent = jumpRound;
        document.getElementById("cardJump").style.color = "Lime";
        document.getElementById("cardJump%").textContent = "%";
        document.getElementById("cardJump%").style.color = "Lime";
        document.getElementById("cardJumpArrow").textContent = "🡅";
        document.getElementById("cardJumpArrow").style.color = "Lime";
        document.getElementById("cardJumpLBrac").textContent = "(";
        document.getElementById("cardJumpComp").textContent = jumpRoundOrig;
        document.getElementById("cardJumpRBrac").textContent = ")";
    }
    if (jumpRound === jumpRoundOrig) {
        document.getElementById("cardJump").textContent = jumpRound;
        document.getElementById("cardJump%").textContent = "%";
    }
    //#endregion

    //////////////////////////
    //// Loot Drop Chance ////
    ////////////////////////// 
    // #region

    document.getElementById("cardLoot").textContent = "";
    document.getElementById("cardLoot").style.color = "";
    document.getElementById("cardLoot%").textContent = "";
    document.getElementById("cardLoot%").style.color = "";
    document.getElementById("cardLootArrow").textContent = "";
    document.getElementById("cardLootArrow").style.color = "";
    document.getElementById("cardLootLBrac").textContent = "";
    document.getElementById("cardLootComp").textContent = "";
    document.getElementById("cardLootRBrac").textContent = "";

    let lootCalc = weapon.LootDropChance + calcOil.LootDropChance;
    let lootConv = percentConv(lootCalc);
    let lootConvOrig = percentConv(weaponOriginal.LootDropChance);

    let lootRound = Math.round((lootConv + Number.EPSILON)* 100) / 100;
    let lootRoundOrig = Math.round((lootConvOrig + Number.EPSILON)* 100) / 100;

    if (lootRound < 0) {
        lootRound = 0;
    }

    if (lootRound < lootRoundOrig) {
        document.getElementById("cardLoot").textContent = lootRound;
        document.getElementById("cardLoot").style.color = "OrangeRed";
        document.getElementById("cardLootArrow").textContent = "🡇";
        document.getElementById("cardLoot%").textContent = "%";
        document.getElementById("cardLoot%").style.color = "OrangeRed";
        document.getElementById("cardLootArrow").style.color = "OrangeRed";
        document.getElementById("cardLootLBrac").textContent = "(";
        document.getElementById("cardLootComp").textContent = lootRoundOrig;
        document.getElementById("cardLootRBrac").textContent = "%)";
    }
    if (lootRound === lootRoundOrig) {
        document.getElementById("cardLoot").textContent = lootRound;
        document.getElementById("cardLoot%").textContent = "%";
    }
    //#endregion

    ///////////////////////////////
    //// Durability Multiplier ////
    ///////////////////////////////
    //#region

    document.getElementById("cardDurability").textContent = "";
    document.getElementById("cardDurability").style.color = "";
    document.getElementById("cardDurabilityArrow").textContent = "";
    document.getElementById("cardDurabilityArrow").style.color = "";
    document.getElementById("cardDurabilityLBrac").textContent = "";
    document.getElementById("cardDurabilityComp").textContent = "";
    document.getElementById("cardDurabilityRBrac").textContent = "";

    let durMin = weaponOriginal.Durability * 0.01;

    let durCalc = weapon.Durability *(1 + calcOil.DurabilityMult + attachmentStats.DurabilityMult);

    let durRound = Math.round((durCalc + Number.EPSILON)* 100) / 100;

    if (durRound < durMin) {
        durRound = durMin;
    }

    if (durRound < weaponOriginal.Durability) {
                
        document.getElementById("cardDurability").textContent = durRound;
        document.getElementById("cardDurability").style.color = "OrangeRed";
        document.getElementById("cardDurabilityArrow").textContent = "🡇";
        document.getElementById("cardDurabilityArrow").style.color = "OrangeRed";
        document.getElementById("cardDurabilityLBrac").textContent = "(";
        document.getElementById("cardDurabilityComp").textContent = weaponOriginal.Durability;
        document.getElementById("cardDurabilityRBrac").textContent = ")";
    }
    if (durRound > weaponOriginal.Durability) {

        document.getElementById("cardDurability").textContent = durRound;
        document.getElementById("cardDurability").style.color = "Lime";
        document.getElementById("cardDurabilityArrow").textContent = "🡅";
        document.getElementById("cardDurabilityArrow").style.color = "Lime";
        document.getElementById("cardDurabilityLBrac").textContent = "(";
        document.getElementById("cardDurabilityComp").textContent = weaponOriginal.Durability;
        document.getElementById("cardDurabilityRBrac").textContent = ")";
    }
    if (durRound === weaponOriginal.Durability) {
        document.getElementById("cardDurability").textContent = durRound;
    }
    //#endregion

    /////////////////////////
    //// Movement Speed  ////
    /////////////////////////
    //#region

    document.getElementById("cardMove").textContent = "";
    document.getElementById("cardMove").style.color = "";
    document.getElementById("cardMove%").textContent = "";
    document.getElementById("cardMove%").style.color = "";
    document.getElementById("cardMoveArrow").textContent = "";
    document.getElementById("cardMoveArrow").style.color = "";
    document.getElementById("cardMoveLBrac").textContent = "";
    document.getElementById("cardMoveComp").textContent = "";
    document.getElementById("cardMoveRBrac").textContent = "";

    document.getElementById("cardWeight").textContent = "";

    document.getElementById("cardWeight").textContent = weapon.WeaponWeight;

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
    let moveCalc = resultMovementSpeed * (1 + calcOil.MovementSpeedMult + attachmentStats.MovementSpeedMult);

    let moveRound = Math.round((moveCalc + Number.EPSILON)* 100) / 100;

    if (moveRound < 1) {
        moveRound= 1;
    }

    if (moveRound < resultMovementSpeedComp) {
        document.getElementById("cardMove").textContent = moveRound;
        document.getElementById("cardMove").style.color = "OrangeRed";
        document.getElementById("cardMoveArrow").textContent = "🡇";
        document.getElementById("cardMove%").textContent = "%";
        document.getElementById("cardMove%").style.color = "OrangeRed";
        document.getElementById("cardMoveArrow").style.color = "OrangeRed";
        document.getElementById("cardMoveLBrac").textContent = "(";
        document.getElementById("cardMoveComp").textContent = resultMovementSpeedComp;
        document.getElementById("cardMoveRBrac").textContent = "%)";
    }
    if (moveRound > resultMovementSpeedComp) {
        document.getElementById("cardMove").textContent = moveRound;
        document.getElementById("cardMove").style.color = "Lime";
        document.getElementById("cardMoveArrow").textContent = "🡅";
        document.getElementById("cardMove%").textContent = "%";
        document.getElementById("cardMove%").style.color = "Lime";
        document.getElementById("cardMoveArrow").style.color = "Lime";
        document.getElementById("cardMoveLBrac").textContent = "(";
        document.getElementById("cardMoveComp").textContent = resultMovementSpeedComp;
        document.getElementById("cardMoveRBrac").textContent = "%)";
    }
    else {
        document.getElementById("cardMove").textContent = moveRound;
        document.getElementById("cardMove%").textContent = "%";
    }
    //#endregion

    /////////////////////
    //// Money Drops ////
    /////////////////////
    //#region

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
    //#endregion

    /////////////////////
    //// Organ Drops ////
    /////////////////////
    //#region

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
    //#endregion

    //////////////////////
    //// Penetrations ////
    //////////////////////
    //#region

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
    //#endregion

    ////////////////
    //// Recoil ////
    ////////////////
    //#region

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

    weapon.RecoilBase *= (weapon.RecoilMult * (1 + calcOil.RecoilMult + attachmentStats.RecoilMult));

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
    //#endregion

    //////////////////////
    //// Reload Speed ////
    //////////////////////
    //#region

    document.getElementById("cardReloadSpeed").textContent = "";
    document.getElementById("cardReloadSpeed").style.color = "";
    document.getElementById("cardReloadSpeed%").textContent = "";
    document.getElementById("cardReloadSpeed%").style.color = "";
    document.getElementById("cardReloadSpeedArrow").textContent = "";
    document.getElementById("cardReloadSpeedArrow").style.color = "";
    document.getElementById("cardReloadSpeedLBrac").textContent = "";
    document.getElementById("cardReloadSpeedComp").textContent = "";
    document.getElementById("cardReloadSpeedRBrac").textContent = "";

    let reloadTimeModifier = (weapon.ReloadSpeed * (1 + calcOil.ReloadSpeed));
    let relSpdCalc = weapon.ReloadSpeed * ((1 + calcOil.ReloadSpeed));
    let relSpdConv = percentConv(relSpdCalc);
    let relSpdConvOrig = percentConv(weaponOriginal.ReloadSpeed);

    let relSpdRound = Math.round((relSpdConv + Number.EPSILON)* 100) / 100;

    if (relSpdRound < 1) {
        relSpdRound = 1;
    }

    if (relSpdRound < relSpdConvOrig) {
        document.getElementById("cardReloadSpeed").textContent = relSpdRound;
        document.getElementById("cardReloadSpeed").style.color = "OrangeRed";
        document.getElementById("cardReloadSpeed%").textContent = "%";
        document.getElementById("cardReloadSpeed%").style.color = "OrangeRed";
        document.getElementById("cardReloadSpeedArrow").textContent = "🡇";
        document.getElementById("cardReloadSpeedArrow").style.color = "OrangeRed";
        document.getElementById("cardReloadSpeedLBrac").textContent = "(";
        document.getElementById("cardReloadSpeedComp").textContent = relSpdConvOrig;
        document.getElementById("cardReloadSpeedRBrac").textContent = "%)";
    }
    if (relSpdRound > relSpdConvOrig) {
        document.getElementById("cardReloadSpeed").textContent = relSpdRound;
        document.getElementById("cardReloadSpeed").style.color = "Lime";
        document.getElementById("cardReloadSpeed%").textContent = "%";
        document.getElementById("cardReloadSpeed%").style.color = "Lime";
        document.getElementById("cardReloadSpeedArrow").textContent = "🡅";
        document.getElementById("cardReloadSpeedArrow").style.color = "Lime";
        document.getElementById("cardReloadSpeedLBrac").textContent = "(";
        document.getElementById("cardReloadSpeedComp").textContent = relSpdConvOrig;
        document.getElementById("cardReloadSpeedRBrac").textContent = "%)";
    }
    if (relSpdRound === relSpdConvOrig) {
        document.getElementById("cardReloadSpeed").textContent = relSpdRound;
        document.getElementById("cardReloadSpeed%").textContent = "%";
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

    let reloadTimeRound = Math.round((reloadTime + Number.EPSILON)* 100) / 100;

    if (reloadTimeRound > weapon.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = `${reloadTimeRound}s`;
        document.getElementById("cardReloadTime").style.color = "OrangeRed";
        document.getElementById("cardReloadTimeArrow").textContent = "🡅";
        document.getElementById("cardReloadTimeArrow").style.color = "OrangeRed";
        document.getElementById("cardReloadTimeLBrac").textContent = "(";
        document.getElementById("cardReloadTimeComp").textContent = `${weapon.ReloadTime}s`;
        document.getElementById("cardReloadTimeRBrac").textContent = ")";
    }
    if (reloadTimeRound < weaponOriginal.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = `${reloadTimeRound}s`;
        document.getElementById("cardReloadTime").style.color = "Lime";
        document.getElementById("cardReloadTimeArrow").textContent = "🡇";
        document.getElementById("cardReloadTimeArrow").style.color = "Lime";
        document.getElementById("cardReloadTimeLBrac").textContent = "(";
        document.getElementById("cardReloadTimeComp").textContent = `${weapon.ReloadTime}s`;
        document.getElementById("cardReloadTimeRBrac").textContent = ")";
    }
    if (reloadTimeRound === weaponOriginal.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = `${reloadTimeRound}s`;
    }
    //#endregion

    ////////////////
    //// Spread ////
    ////////////////
    //#region

    //// Spread Add

    document.getElementById("cardSpready").textContent = "";
    document.getElementById("cardSpready").style.color = "";
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

    let spreadCalc1 = weapon.Spread + calcOil.SpreadAdd;
    let spreadCalc2 = spreadCalc1 + attachmentStats.SpreadAdd;

    //// Spread Multiplier

    let spreadCalc = spreadCalc2 * (1 + calcOil.SpreadMult + attachmentStats.SpreadMult);
    let spreadRound = Math.round((spreadCalc + Number.EPSILON)* 100) / 100;

    let neuraxisMinSpreadBase = spreadRound * 0.1;
    let neuraxisMinSpread = Math.round((neuraxisMinSpreadBase + Number.EPSILON)* 100) / 100;

    if (spreadRound < 0) {
        spreadRound = 0;
    }

    if (spreadRound > weaponOriginal.Spread) {
        if (weapon.Name === "Neuraxis F22") {
            document.getElementById("cardSpready").textContent = `REV: ${spreadRound} -> ${neuraxisMinSpread}`;
            document.getElementById("cardSpreadComp").textContent = "20 -> 2";
        }
        else {
            document.getElementById("cardSpready").textContent = spreadRound;
            document.getElementById("cardSpreadComp").textContent = weaponOriginal.Spread;
        }

        document.getElementById("cardSpready").style.color = "OrangeRed";
        document.getElementById("cardSpreadArrow").textContent = "🡅";
        document.getElementById("cardSpreadArrow").style.color = "OrangeRed";
        document.getElementById("cardSpreadLBrac").textContent = "(";
        document.getElementById("cardSpreadRBrac").textContent = ")";
    }
    if (spreadRound < weaponOriginal.Spread) {
        if (weapon.Name === "Neuraxis F22") {
            document.getElementById("cardSpready").textContent = `REV: ${spreadRound} -> ${neuraxisMinSpread}`;
            document.getElementById("cardSpreadComp").textContent = "20 -> 2";
        }
        else {
            document.getElementById("cardSpready").textContent = spreadRound;
            document.getElementById("cardSpreadComp").textContent = weaponOriginal.Spread;
        }
        document.getElementById("cardSpready").style.color = "Lime";
        document.getElementById("cardSpreadArrow").textContent = "🡇";
        document.getElementById("cardSpreadArrow").style.color = "Lime";
        document.getElementById("cardSpreadLBrac").textContent = "(";
        document.getElementById("cardSpreadRBrac").textContent = ")";
    }
    if (spreadRound === weaponOriginal.Spread) {
        if (weapon.Name === "Neuraxis F22") {
            document.getElementById("cardSpready").textContent = "REV: 20 -> 2";
        }
        else {
            document.getElementById("cardSpready").textContent = spreadRound;
        }
    }
    //#endregion
    
    //////////////
    //// Drag ////
    //////////////
    //#region

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
        document.getElementById("cardDragLBrac").textContent = "(";
        document.getElementById("cardDragComp").textContent = "0";
        document.getElementById("cardDragRBrac").textContent = ")";
    }
    if (weapon.Drag === 0) {
        document.getElementById("cardDrag").textContent = "0";
    }
    //#endregion

    //////////////////////////
    //// Durability Usage ////
    //////////////////////////
    //#region

    document.getElementById("cardDurabilityUsage").textContent = "";
    document.getElementById("cardDurabilityUsage").style.color = "";
    document.getElementById("cardDurabilityUsageArrow").textContent = "";
    document.getElementById("cardDurabilityUsageArrow").style.color = "";
    document.getElementById("cardDurabilityUsageLBrac").textContent = "";
    document.getElementById("cardDurabilityUsageComp").textContent = "";
    document.getElementById("cardDurabilityUsageRBrac").textContent = "";
    
    let durUseCalc1 = weapon.DurabilityUsage + calcOil.DurabilityUsage;
    
    let durUseCalc2 = durUseCalc1 * (calcOil.DurLossMult + 1);
    

    document.getElementById("cardDurabilityUsage").textContent = durUseCalc2;

    //// Shots to break

    let shotsToBreak = durRound / durUseCalc2;
    let shotsToBreakRounded = Math.round(shotsToBreak);

    document.getElementById("cardShotsToBreak").textContent = shotsToBreakRounded;
    //#endregion

    //////////////////
    //// Firemode ////
    //////////////////
    //#region

    document.getElementById("cardFiremode").textContent = "";
    document.getElementById("cardFiremode").style.color = "";
    document.getElementById("cardFiremodeLBrac").textContent = "";
    document.getElementById("cardFiremodeComp").textContent = "";
    document.getElementById("cardFiremodeRBrac").textContent = "";

    if (attachmentStats.Firemode !== 'None') {
        weapon.Firemode = attachmentStats.Firemode;
    }

    if (weapon.Firemode === weaponOriginal.Firemode) {
        document.getElementById("cardFiremode").textContent = weapon.Firemode;
    }
    else {
        document.getElementById("cardFiremode").textContent = weapon.Firemode;
        document.getElementById("cardFiremode").style.color = "Goldenrod";
        document.getElementById("cardFiremodeLBrac").textContent = "(";
        document.getElementById("cardFiremodeComp").textContent = weaponOriginal.Firemode;
        document.getElementById("cardFiremodeRBrac").textContent = ")";
    }

    //#endregion
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

function rollOils(single, selector, selID, value) {
    oilSingle = document.getElementById(selector);

    oil1 = document.getElementById("oils1selector");
    oil2 = document.getElementById("oils2selector");
    oil3 = document.getElementById("oils3selector");
    oil4 = document.getElementById("oils4selector");
    oil5 = document.getElementById("oils5selector");

    oil1Name = document.getElementById("cardOilName1").textContent;
    oil2Name = document.getElementById("cardOilName2").textContent;
    oil3Name = document.getElementById("cardOilName3").textContent;
    oil4Name = document.getElementById("cardOilName4").textContent;
    oil5Name = document.getElementById("cardOilName5").textContent;

    let oilNames = [oil1Name, oil2Name, oil3Name, oil4Name, oil5Name]
    
    oilsAll = oilsAllMain.slice();
    oilsAmmo = oilsAmmoMain.slice();
    oilsCrit = oilsCritMain.slice();
    oilsBounce = oilsBounceMain.slice();
    oilsSpeed = oilsSpeedMain.slice();
    oilsAddDam = oilsAddDamMain.slice();
    oilsMultDam = oilsMultDamMain.slice();
    oilsDur = oilsDurMain.slice();
    oilsPen = oilsPenMain.slice();
    oilsProj = oilsProjMain.slice();
    oilsRecoil = oilsRecoilMain.slice();
    oilsReload = oilsReloadMain.slice();
    oilsRPM = oilsRPMMain.slice();
    oilsSpread = oilsSpreadMain.slice();

    oilStatModifiers = oilsData?.Oil["Default"];

    let selectedOil = [];

    selectedOil = [oil1, oil2, oil3, oil4, oil5];
 
    let counter = 0;
    let newSelOil = null;

    function checkNone(oil, i, selector) {
        let oil1Name2 = document.getElementById("cardOilName1").textContent;
        let oil2Name2 = document.getElementById("cardOilName2").textContent;
        let oil3Name2 = document.getElementById("cardOilName3").textContent;
        let oil4Name2 = document.getElementById("cardOilName4").textContent;
        let oil5Name2 = document.getElementById("cardOilName5").textContent;

        let oil1Val = oil1.proDropdown.getValue();
        let oil2Val = oil2.proDropdown.getValue();
        let oil3Val = oil3.proDropdown.getValue();
        let oil4Val = oil4.proDropdown.getValue();
        let oil5Val = oil5.proDropdown.getValue();

        function convertToLower(oil) {
            let compOilRep = oil.replaceAll(" ", "-");
            let compOilLower = compOilRep.toLowerCase();
            return compOilLower;
        }

        function convertToUpper(oil) {
            let compOilRep = oil.replaceAll("-", " ");
            var splitStr = compOilRep.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            }
            return splitStr.join(' '); 
        }

       let oil1Conv = convertToLower(oil1Name2);
       let oil2Conv = convertToLower(oil2Name2);
       let oil3Conv = convertToLower(oil3Name2);
       let oil4Conv = convertToLower(oil4Name2);
       let oil5Conv = convertToLower(oil5Name2);

       let oil1ValConv = convertToUpper(oil1Val);
       let oil2ValConv = convertToUpper(oil2Val);
       let oil3ValConv = convertToUpper(oil3Val);
       let oil4ValConv = convertToUpper(oil4Val);
       let oil5ValConv = convertToUpper(oil5Val);

        if (selector === "oils1selector") {
            if (oil1ValConv === oil2Name2 && oil1ValConv !== "None" && oil2Val.startsWith("static")) {
                setNone(1, "cardOilName2", "cardOilDesc2");
            }
            if (oil1ValConv === oil3Name2 && oil1ValConv !== "None" && oil3Val.startsWith("static")) {
                setNone(2, "cardOilName3", "cardOilDesc3");
            }
            if (oil1ValConv === oil4Name2 && oil1ValConv !== "None" && oil4Val.startsWith("static")) {
                setNone(3, "cardOilName4", "cardOilDesc4");
            }
            if (oil1ValConv === oil5Name2 && oil1ValConv !== "None" && oil5Val.startsWith("static")) {
                setNone(4, "cardOilName5", "cardOilDesc5");
            }
        }
        if (selector === "oils2selector") {
            if (oil2ValConv === oil1Name2 && oil2ValConv !== "None" && oil1Val.startsWith("static")) {
                setNone(0, "cardOilName1", "cardOilDesc1");
            }
            if (oil2ValConv === oil3Name2 && oil2ValConv !== "None" && oil3Val.startsWith("static")) {
                setNone(2, "cardOilName3", "cardOilDesc3");
            }
            if (oil2ValConv === oil4Name2 && oil2ValConv !== "None" && oil4Val.startsWith("static")) {
                setNone(3, "cardOilName4", "cardOilDesc4");
            }
            if (oil2ValConv === oil5Name2 && oil2ValConv !== "None" && oil5Val.startsWith("static")) {
                setNone(4, "cardOilName5", "cardOilDesc5");
            }
        }
        if (selector === "oils3selector") {
            if (oil3ValConv === oil1Name2 && oil3ValConv !== "None" && oil1Val.startsWith("static")) {
                setNone(0, "cardOilName1", "cardOilDesc1");
            }
            if (oil3ValConv === oil2Name2 && oil3ValConv !== "None" && oil2Val.startsWith("static")) {
                setNone(1, "cardOilName2", "cardOilDesc2");
            }
            if (oil3ValConv === oil4Name2 && oil3ValConv !== "None" && oil4Val.startsWith("static")) {
                setNone(3, "cardOilName4", "cardOilDesc4");
            }
            if (oil3ValConv === oil5Name2 && oil3ValConv !== "None" && oil5Val.startsWith("static")) {
                setNone(4, "cardOilName5", "cardOilDesc5");
            }
        }
        if (selector === "oils4selector") {
            if (oil4ValConv === oil1Name2 && oil4ValConv !== "None" && oil1Val.startsWith("static")) {
                setNone(0, "cardOilName1", "cardOilDesc1");
            }
            if (oil4ValConv === oil2Name2 && oil4ValConv !== "None" && oil2Val.startsWith("static")) {
                setNone(1, "cardOilName2", "cardOilDesc2");
            }
            if (oil4ValConv === oil3Name2 && oil4ValConv !== "None" && oil3Val.startsWith("static")) {
                setNone(2, "cardOilName3", "cardOilDesc3");
            }
            if (oil4ValConv === oil5Name2 && oil4ValConv !== "None" && oil5Val.startsWith("static")) {
                setNone(4, "cardOilName5", "cardOilDesc5");
            }
        }
        if (selector === "oils5selector") {
            if (oil5ValConv === oil1Name2 && oil5ValConv !== "None" && oil1Val.startsWith("static")) {
                setNone(0, "cardOilName1", "cardOilDesc1");
            }
            if (oil5ValConv === oil2Name2 && oil5ValConv !== "None" && oil2Val.startsWith("static")) {
                setNone(1, "cardOilName2", "cardOilDesc2");
            }
            if (oil5ValConv === oil3Name2 && oil5ValConv !== "None" && oil3Val.startsWith("static")) {
                setNone(2, "cardOilName3", "cardOilDesc3");
            }
            if (oil5ValConv === oil4Name2 && oil5ValConv !== "None" && oil4Val.startsWith("static")) {
                setNone(3, "cardOilName4", "cardOilDesc4");
            }
        }
    }
    
    function setNone(j, i, k) {
            addName("None", i, "oil", "None selected", k);
            selectedOil[j].proDropdown.setValue("static-choose");
        }

    for (let i = 0; i < selectedOil.length; i++) {
        counter += 1;
        switch (selectedOil[i].value) {
            case "static-no-selection":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-choose":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case null:
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "":
                rolledOils[i] = getOilByName("None");
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-all":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsAll);
                    rolledOils[i] = oilsAll[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                let selOilRep = newSelOil.replaceAll(" ", "-");
                let selOilLower = selOilRep.toLowerCase();
                //oilRemover(selectedOil[i].id, selOilLower)
                const indexAll = oilsAll.indexOf(newSelOil);
                if (indexAll > -1) {
                    oilsAll.splice(indexAll, 1);
                }
                const indexAmmo = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo > -1) {
                    oilsAmmo.splice(indexAmmo, 1);
                }
                const indexCrit = oilsCrit.indexOf(newSelOil);
                if (indexCrit > -1) {
                    oilsCrit.splice(indexCrit, 1);
                }
                const indexBounce = oilsBounce.indexOf(newSelOil);
                if (indexBounce > -1) {
                    oilsBounce.splice(indexBounce, 1);
                }
                const indexSpeed = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed > -1) {
                    oilsSpeed.splice(indexSpeed, 1);
                }
                const indexAddDam = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam > -1) {
                    oilsAddDam.splice(indexAddDam, 1);
                }
                const indexMultDam = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam > -1) {
                    oilsMultDam.splice(indexMultDam, 1);
                }
                const indexDur = oilsDur.indexOf(newSelOil);
                if (indexDur > -1) {
                    oilsDur.splice(indexDur, 1);
                    }
                const indexPen = oilsPen.indexOf(newSelOil);
                if (indexPen > -1) {
                    oilsPen.splice(indexPen, 1);
                }
                const indexProj = oilsProj.indexOf(newSelOil);
                if (indexProj > -1) {
                    oilsProj.splice(indexProj, 1);
                }
                const indexRecoil = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil > -1) {
                    oilsRecoil.splice(indexRecoil, 1);
                }
                const indexReload = oilsReload.indexOf(newSelOil);
                if (indexReload > -1) {
                    oilsReload.splice(indexReload, 1);
                }
                const indexRPM = oilsRPM.indexOf(newSelOil);
                if (indexRPM > -1) {
                    oilsRPM.splice(indexRPM, 1);
                }
                const indexSpread = oilsSpread.indexOf(newSelOil);
                if (indexSpread > -1) {
                    oilsSpread.splice(indexSpread, 1);
                }
                
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-ammo-consume-chance":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsAmmo);
                    rolledOils[i] = oilsAmmo[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll1 = oilsAll.indexOf(newSelOil);
                if (indexAll1 > -1) {
                    oilsAll.splice(indexAll1, 1);
                }
                const indexAmmo1 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo1 > -1) {
                    oilsAmmo.splice(indexAmmo1, 1);
                }
                const indexCrit1 = oilsCrit.indexOf(newSelOil);
                if (indexCrit1 > -1) {
                    oilsCrit.splice(indexCrit1, 1);
                }
                const indexBounce1 = oilsBounce.indexOf(newSelOil);
                if (indexBounce1 > -1) {
                    oilsBounce.splice(indexBounce1, 1);
                }
                const indexSpeed1 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed1 > -1) {
                    oilsSpeed.splice(indexSpeed1, 1);
                }
                const indexAddDam1 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam1 > -1) {
                    oilsAddDam.splice(indexAddDam1, 1);
                }
                const indexMultDam1 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam1 > -1) {
                    oilsMultDam.splice(indexMultDam1, 1);
                }
                const indexDur1 = oilsDur.indexOf(newSelOil);
                if (indexDur1 > -1) {
                    oilsDur.splice(indexDur1, 1);
                    }
                const indexPen1 = oilsPen.indexOf(newSelOil);
                if (indexPen1 > -1) {
                    oilsPen.splice(indexPen1, 1);
                }
                const indexProj1 = oilsProj.indexOf(newSelOil);
                if (indexProj1 > -1) {
                    oilsProj.splice(indexProj1, 1);
                }
                const indexRecoil1 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil1 > -1) {
                    oilsRecoil.splice(indexRecoil1, 1);
                }
                const indexReload1 = oilsReload.indexOf(newSelOil);
                if (indexReload1 > -1) {
                    oilsReload.splice(indexReload1, 1);
                }
                const indexRPM1 = oilsRPM.indexOf(newSelOil);
                if (indexRPM1 > -1) {
                    oilsRPM.splice(indexRPM1, 1);
                }
                const indexSpread1 = oilsSpread.indexOf(newSelOil);
                if (indexSpread1 > -1) {
                    oilsSpread.splice(indexSpread1, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-base-crit-chance":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsCrit);
                    rolledOils[i] = oilsCrit[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll2 = oilsAll.indexOf(newSelOil);
                if (indexAll2 > -1) {
                    oilsAll.splice(indexAll2, 1);
                }
                const indexAmmo2 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo2 > -1) {
                    oilsAmmo.splice(indexAmmo2, 1);
                }
                const indexCrit2 = oilsCrit.indexOf(newSelOil);
                if (indexCrit2 > -1) {
                    oilsCrit.splice(indexCrit2, 1);
                }
                const indexBounce2 = oilsBounce.indexOf(newSelOil);
                if (indexBounce2 > -1) {
                    oilsBounce.splice(indexBounce2, 1);
                }
                const indexSpeed2 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed2 > -1) {
                    oilsSpeed.splice(indexSpeed2, 1);
                }
                const indexAddDam2 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam2 > -1) {
                    oilsAddDam.splice(indexAddDam2, 1);
                }
                const indexMultDam2 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam2 > -1) {
                    oilsMultDam.splice(indexMultDam2, 1);
                }
                const indexDur2 = oilsDur.indexOf(newSelOil);
                if (indexDur2 > -1) {
                    oilsDur.splice(indexDur2, 1);
                    }
                const indexPen2 = oilsPen.indexOf(newSelOil);
                if (indexPen2 > -1) {
                    oilsPen.splice(indexPen2, 1);
                }
                const indexProj2= oilsProj.indexOf(newSelOil);
                if (indexProj2 > -1) {
                    oilsProj.splice(indexProj2, 1);
                }
                const indexRecoil2 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil2 > -1) {
                    oilsRecoil.splice(indexRecoil2, 1);
                }
                const indexReload2 = oilsReload.indexOf(newSelOil);
                if (indexReload2 > -1) {
                    oilsReload.splice(indexReload2, 1);
                }
                const indexRPM2 = oilsRPM.indexOf(newSelOil);
                if (indexRPM2 > -1) {
                    oilsRPM.splice(indexRPM2, 1);
                }
                const indexSpread2 = oilsSpread.indexOf(newSelOil);
                if (indexSpread2 > -1) {
                    oilsSpread.splice(indexSpread2, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-bullet-bounce":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsBounce);
                    rolledOils[i] = oilsBounce[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll3 = oilsAll.indexOf(newSelOil);
                if (indexAll3 > -1) {
                    oilsAll.splice(indexAll3, 1);
                }
                const indexAmmo3 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo3 > -1) {
                    oilsAmmo.splice(indexAmmo3, 1);
                }
                const indexCrit3 = oilsCrit.indexOf(newSelOil);
                if (indexCrit3 > -1) {
                    oilsCrit.splice(indexCrit3, 1);
                }
                const indexBounce3 = oilsBounce.indexOf(newSelOil);
                if (indexBounce3 > -1) {
                    oilsBounce.splice(indexBounce3, 1);
                }
                const indexSpeed3 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed3 > -1) {
                    oilsSpeed.splice(indexSpeed3, 1);
                }
                const indexAddDam3 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam3 > -1) {
                    oilsAddDam.splice(indexAddDam3, 1);
                }
                const indexMultDam3 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam3 > -1) {
                    oilsMultDam.splice(indexMultDam3, 1);
                }
                const indexDur3 = oilsDur.indexOf(newSelOil);
                if (indexDur3 > -1) {
                    oilsDur.splice(indexDur3, 1);
                    }
                const indexPen3 = oilsPen.indexOf(newSelOil);
                if (indexPen3 > -1) {
                    oilsPen.splice(indexPen3, 1);
                }
                const indexProj3= oilsProj.indexOf(newSelOil);
                if (indexProj3 > -1) {
                    oilsProj.splice(indexProj3, 1);
                }
                const indexRecoil3 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil3 > -1) {
                    oilsRecoil.splice(indexRecoil3, 1);
                }
                const indexReload3 = oilsReload.indexOf(newSelOil);
                if (indexReload3 > -1) {
                    oilsReload.splice(indexReload3, 1);
                }
                const indexRPM3 = oilsRPM.indexOf(newSelOil);
                if (indexRPM3 > -1) {
                    oilsRPM.splice(indexRPM3, 1);
                }
                const indexSpread3 = oilsSpread.indexOf(newSelOil);
                if (indexSpread3 > -1) {
                    oilsSpread.splice(indexSpread3, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-bullet-speed":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsSpeed);
                    rolledOils[i] = oilsSpeed[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll4 = oilsAll.indexOf(newSelOil);
                if (indexAll4 > -1) {
                    oilsAll.splice(indexAll4, 1);
                }
                const indexAmmo4 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo4 > -1) {
                    oilsAmmo.splice(indexAmmo4, 1);
                }
                const indexCrit4 = oilsCrit.indexOf(newSelOil);
                if (indexCrit4 > -1) {
                    oilsCrit.splice(indexCrit4, 1);
                }
                const indexBounce4 = oilsBounce.indexOf(newSelOil);
                if (indexBounce4 > -1) {
                    oilsBounce.splice(indexBounce4, 1);
                }
                const indexSpeed4 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed4 > -1) {
                    oilsSpeed.splice(indexSpeed4, 1);
                }
                const indexAddDam4 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam4 > -1) {
                    oilsAddDam.splice(indexAddDam4, 1);
                }
                const indexMultDam4 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam4 > -1) {
                    oilsMultDam.splice(indexMultDam4, 1);
                }
                const indexDur4 = oilsDur.indexOf(newSelOil);
                if (indexDur4 > -1) {
                    oilsDur.splice(indexDur4, 1);
                    }
                const indexPen4 = oilsPen.indexOf(newSelOil);
                if (indexPen4 > -1) {
                    oilsPen.splice(indexPen4, 1);
                }
                const indexProj4= oilsProj.indexOf(newSelOil);
                if (indexProj4 > -1) {
                    oilsProj.splice(indexProj4, 1);
                }
                const indexRecoil4 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil4 > -1) {
                    oilsRecoil.splice(indexRecoil4, 1);
                }
                const indexReload4 = oilsReload.indexOf(newSelOil);
                if (indexReload4 > -1) {
                    oilsReload.splice(indexReload4, 1);
                }
                const indexRPM4 = oilsRPM.indexOf(newSelOil);
                if (indexRPM4 > -1) {
                    oilsRPM.splice(indexRPM4, 1);
                }
                const indexSpread4 = oilsSpread.indexOf(newSelOil);
                if (indexSpread4 > -1) {
                    oilsSpread.splice(indexSpread4, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-add-damage":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsAddDam);
                    rolledOils[i] = oilsAddDam[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll5 = oilsAll.indexOf(newSelOil);
                if (indexAll5 > -1) {
                    oilsAll.splice(indexAll5, 1);
                }
                const indexAmmo5 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo5 > -1) {
                    oilsAmmo.splice(indexAmmo5, 1);
                }
                const indexCrit5 = oilsCrit.indexOf(newSelOil);
                if (indexCrit5 > -1) {
                    oilsCrit.splice(indexCrit5, 1);
                }
                const indexBounce5 = oilsBounce.indexOf(newSelOil);
                if (indexBounce5 > -1) {
                    oilsBounce.splice(indexBounce5, 1);
                }
                const indexSpeed5 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed5 > -1) {
                    oilsSpeed.splice(indexSpeed5, 1);
                }
                const indexAddDam5 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam5 > -1) {
                    oilsAddDam.splice(indexAddDam5, 1);
                }
                const indexMultDam5 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam5 > -1) {
                    oilsMultDam.splice(indexMultDam5, 1);
                }
                const indexDur5 = oilsDur.indexOf(newSelOil);
                if (indexDur5 > -1) {
                    oilsDur.splice(indexDur5, 1);
                    }
                const indexPen5 = oilsPen.indexOf(newSelOil);
                if (indexPen5 > -1) {
                    oilsPen.splice(indexPen5, 1);
                }
                const indexProj5= oilsProj.indexOf(newSelOil);
                if (indexProj5 > -1) {
                    oilsProj.splice(indexProj5, 1);
                }
                const indexRecoil5 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil5 > -1) {
                    oilsRecoil.splice(indexRecoil5, 1);
                }
                const indexReload5 = oilsReload.indexOf(newSelOil);
                if (indexReload5 > -1) {
                    oilsReload.splice(indexReload5, 1);
                }
                const indexRPM5 = oilsRPM.indexOf(newSelOil);
                if (indexRPM5 > -1) {
                    oilsRPM.splice(indexRPM5, 1);
                }
                const indexSpread5 = oilsSpread.indexOf(newSelOil);
                if (indexSpread5 > -1) {
                    oilsSpread.splice(indexSpread5, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-mult-damage":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsMultDam);
                    rolledOils[i] = oilsMultDam[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll6 = oilsAll.indexOf(newSelOil);
                if (indexAll6 > -1) {
                    oilsAll.splice(indexAll6, 1);
                }
                const indexAmmo6 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo6 > -1) {
                    oilsAmmo.splice(indexAmmo6, 1);
                }
                const indexCrit6 = oilsCrit.indexOf(newSelOil);
                if (indexCrit6 > -1) {
                    oilsCrit.splice(indexCrit6, 1);
                }
                const indexBounce6 = oilsBounce.indexOf(newSelOil);
                if (indexBounce6 > -1) {
                    oilsBounce.splice(indexBounce6, 1);
                }
                const indexSpeed6 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed6 > -1) {
                    oilsSpeed.splice(indexSpeed6, 1);
                }
                const indexAddDam6 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam6 > -1) {
                    oilsAddDam.splice(indexAddDam6, 1);
                }
                const indexMultDam6 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam6 > -1) {
                    oilsMultDam.splice(indexMultDam6, 1);
                }
                const indexDur6 = oilsDur.indexOf(newSelOil);
                if (indexDur6 > -1) {
                    oilsDur.splice(indexDur6, 1);
                    }
                const indexPen6 = oilsPen.indexOf(newSelOil);
                if (indexPen6 > -1) {
                    oilsPen.splice(indexPen6, 1);
                }
                const indexProj6= oilsProj.indexOf(newSelOil);
                if (indexProj6 > -1) {
                    oilsProj.splice(indexProj6, 1);
                }
                const indexRecoil6 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil6 > -1) {
                    oilsRecoil.splice(indexRecoil6, 1);
                }
                const indexReload6 = oilsReload.indexOf(newSelOil);
                if (indexReload6 > -1) {
                    oilsReload.splice(indexReload6, 1);
                }
                const indexRPM6 = oilsRPM.indexOf(newSelOil);
                if (indexRPM6 > -1) {
                    oilsRPM.splice(indexRPM6, 1);
                }
                const indexSpread6 = oilsSpread.indexOf(newSelOil);
                if (indexSpread6 > -1) {
                    oilsSpread.splice(indexSpread6, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-max-durability":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                } 
                else {
                    shuffle(oilsDur);
                    rolledOils[i] = oilsDur[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll7 = oilsAll.indexOf(newSelOil);
                if (indexAll7 > -1) {
                    oilsAll.splice(indexAll7, 1);
                }
                const indexAmmo7 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo7 > -1) {
                    oilsAmmo.splice(indexAmmo7, 1);
                }
                const indexCrit7 = oilsCrit.indexOf(newSelOil);
                if (indexCrit7 > -1) {
                    oilsCrit.splice(indexCrit7, 1);
                }
                const indexBounce7 = oilsBounce.indexOf(newSelOil);
                if (indexBounce7 > -1) {
                    oilsBounce.splice(indexBounce7, 1);
                }
                const indexSpeed7 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed7 > -1) {
                    oilsSpeed.splice(indexSpeed7, 1);
                }
                const indexAddDam7 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam7 > -1) {
                    oilsAddDam.splice(indexAddDam7, 1);
                }
                const indexMultDam7 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam7 > -1) {
                    oilsMultDam.splice(indexMultDam7, 1);
                }
                const indexDur7 = oilsDur.indexOf(newSelOil);
                if (indexDur7 > -1) {
                    oilsDur.splice(indexDur7, 1);
                    }
                const indexPen7 = oilsPen.indexOf(newSelOil);
                if (indexPen7 > -1) {
                    oilsPen.splice(indexPen7, 1);
                }
                const indexProj7= oilsProj.indexOf(newSelOil);
                if (indexProj7 > -1) {
                    oilsProj.splice(indexProj7, 1);
                }
                const indexRecoil7 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil7 > -1) {
                    oilsRecoil.splice(indexRecoil7, 1);
                }
                const indexReload7 = oilsReload.indexOf(newSelOil);
                if (indexReload7 > -1) {
                    oilsReload.splice(indexReload7, 1);
                }
                const indexRPM7 = oilsRPM.indexOf(newSelOil);
                if (indexRPM7 > -1) {
                    oilsRPM.splice(indexRPM7, 1);
                }
                const indexSpread7 = oilsSpread.indexOf(newSelOil);
                if (indexSpread7 > -1) {
                    oilsSpread.splice(indexSpread7, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-penetration":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsPen);
                    rolledOils[i] = oilsPen[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll8 = oilsAll.indexOf(newSelOil);
                if (indexAll8 > -1) {
                    oilsAll.splice(indexAll8, 1);
                }
                const indexAmmo8 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo8 > -1) {
                    oilsAmmo.splice(indexAmmo8, 1);
                }
                const indexCrit8 = oilsCrit.indexOf(newSelOil);
                if (indexCrit8 > -1) {
                    oilsCrit.splice(indexCrit8, 1);
                }
                const indexBounce8 = oilsBounce.indexOf(newSelOil);
                if (indexBounce8 > -1) {
                    oilsBounce.splice(indexBounce8, 1);
                }
                const indexSpeed8 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed8 > -1) {
                    oilsSpeed.splice(indexSpeed8, 1);
                }
                const indexAddDam8 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam8 > -1) {
                    oilsAddDam.splice(indexAddDam8, 1);
                }
                const indexMultDam8 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam8 > -1) {
                    oilsMultDam.splice(indexMultDam8, 1);
                }
                const indexDur8 = oilsDur.indexOf(newSelOil);
                if (indexDur8 > -1) {
                    oilsDur.splice(indexDur8, 1);
                    }
                const indexPen8 = oilsPen.indexOf(newSelOil);
                if (indexPen8 > -1) {
                    oilsPen.splice(indexPen8, 1);
                }
                const indexProj8= oilsProj.indexOf(newSelOil);
                if (indexProj8 > -1) {
                    oilsProj.splice(indexProj8, 1);
                }
                const indexRecoil8 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil8 > -1) {
                    oilsRecoil.splice(indexRecoil8, 1);
                }
                const indexReload8 = oilsReload.indexOf(newSelOil);
                if (indexReload8 > -1) {
                    oilsReload.splice(indexReload8, 1);
                }
                const indexRPM8 = oilsRPM.indexOf(newSelOil);
                if (indexRPM8 > -1) {
                    oilsRPM.splice(indexRPM8, 1);
                }
                const indexSpread8 = oilsSpread.indexOf(newSelOil);
                if (indexSpread8 > -1) {
                    oilsSpread.splice(indexSpread8, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-projectiles":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsProj);
                    rolledOils[i] = oilsProj[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll9 = oilsAll.indexOf(newSelOil);
                if (indexAll9 > -1) {
                    oilsAll.splice(indexAll9, 1);
                }
                const indexAmmo9 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo9 > -1) {
                    oilsAmmo.splice(indexAmmo9, 1);
                }
                const indexCrit9 = oilsCrit.indexOf(newSelOil);
                if (indexCrit9 > -1) {
                    oilsCrit.splice(indexCrit9, 1);
                }
                const indexBounce9 = oilsBounce.indexOf(newSelOil);
                if (indexBounce9 > -1) {
                    oilsBounce.splice(indexBounce9, 1);
                }
                const indexSpeed9 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed9 > -1) {
                    oilsSpeed.splice(indexSpeed9, 1);
                }
                const indexAddDam9 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam9 > -1) {
                    oilsAddDam.splice(indexAddDam9, 1);
                }
                const indexMultDam9 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam9 > -1) {
                    oilsMultDam.splice(indexMultDam9, 1);
                }
                const indexDur9 = oilsDur.indexOf(newSelOil);
                if (indexDur9 > -1) {
                    oilsDur.splice(indexDur9, 1);
                    }
                const indexPen9 = oilsPen.indexOf(newSelOil);
                if (indexPen9 > -1) {
                    oilsPen.splice(indexPen9, 1);
                }
                const indexProj9= oilsProj.indexOf(newSelOil);
                if (indexProj9 > -1) {
                    oilsProj.splice(indexProj9, 1);
                }
                const indexRecoil9 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil9 > -1) {
                    oilsRecoil.splice(indexRecoil9, 1);
                }
                const indexReload9 = oilsReload.indexOf(newSelOil);
                if (indexReload9 > -1) {
                    oilsReload.splice(indexReload9, 1);
                }
                const indexRPM9 = oilsRPM.indexOf(newSelOil);
                if (indexRPM9 > -1) {
                    oilsRPM.splice(indexRPM9, 1);
                }
                const indexSpread9 = oilsSpread.indexOf(newSelOil);
                if (indexSpread9 > -1) {
                    oilsSpread.splice(indexSpread9, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-recoil":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsRecoil);
                    rolledOils[i] = oilsRecoil[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll10 = oilsAll.indexOf(newSelOil);
                if (indexAll10 > -1) {
                    oilsAll.splice(indexAll10, 1);
                }
                const indexAmmo10 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo10 > -1) {
                    oilsAmmo.splice(indexAmmo10, 1);
                }
                const indexCrit10 = oilsCrit.indexOf(newSelOil);
                if (indexCrit10 > -1) {
                    oilsCrit.splice(indexCrit10, 1);
                }
                const indexBounce10 = oilsBounce.indexOf(newSelOil);
                if (indexBounce10 > -1) {
                    oilsBounce.splice(indexBounce10, 1);
                }
                const indexSpeed10 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed10 > -1) {
                    oilsSpeed.splice(indexSpeed10, 1);
                }
                const indexAddDam10 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam10 > -1) {
                    oilsAddDam.splice(indexAddDam10, 1);
                }
                const indexMultDam10 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam10 > -1) {
                    oilsMultDam.splice(indexMultDam10, 1);
                }
                const indexDur10 = oilsDur.indexOf(newSelOil);
                if (indexDur10 > -1) {
                    oilsDur.splice(indexDur10, 1);
                    }
                const indexPen10 = oilsPen.indexOf(newSelOil);
                if (indexPen10 > -1) {
                    oilsPen.splice(indexPen10, 1);
                }
                const indexProj10= oilsProj.indexOf(newSelOil);
                if (indexProj10 > -1) {
                    oilsProj.splice(indexProj10, 1);
                }
                const indexRecoil10 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil10 > -1) {
                    oilsRecoil.splice(indexRecoil10, 1);
                }
                const indexReload10 = oilsReload.indexOf(newSelOil);
                if (indexReload10 > -1) {
                    oilsReload.splice(indexReload10, 1);
                }
                const indexRPM10 = oilsRPM.indexOf(newSelOil);
                if (indexRPM10 > -1) {
                    oilsRPM.splice(indexRPM10, 1);
                }
                const indexSpread10 = oilsSpread.indexOf(newSelOil);
                if (indexSpread10 > -1) {
                    oilsSpread.splice(indexSpread10, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-reload-speed":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsReload);
                    rolledOils[i] = oilsReload[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll11 = oilsAll.indexOf(newSelOil);
                if (indexAll11 > -1) {
                    oilsAll.splice(indexAll11, 1);
                }
                const indexAmmo11 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo11 > -1) {
                    oilsAmmo.splice(indexAmmo11, 1);
                }
                const indexCrit11 = oilsCrit.indexOf(newSelOil);
                if (indexCrit11 > -1) {
                    oilsCrit.splice(indexCrit11, 1);
                }
                const indexBounce11 = oilsBounce.indexOf(newSelOil);
                if (indexBounce11 > -1) {
                    oilsBounce.splice(indexBounce11, 1);
                }
                const indexSpeed11 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed11 > -1) {
                    oilsSpeed.splice(indexSpeed11, 1);
                }
                const indexAddDam11 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam11 > -1) {
                    oilsAddDam.splice(indexAddDam11, 1);
                }
                const indexMultDam11 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam11 > -1) {
                    oilsMultDam.splice(indexMultDam11, 1);
                }
                const indexDur11 = oilsDur.indexOf(newSelOil);
                if (indexDur11 > -1) {
                    oilsDur.splice(indexDur11, 1);
                    }
                const indexPen11 = oilsPen.indexOf(newSelOil);
                if (indexPen11 > -1) {
                    oilsPen.splice(indexPen11, 1);
                }
                const indexProj11= oilsProj.indexOf(newSelOil);
                if (indexProj11 > -1) {
                    oilsProj.splice(indexProj11, 1);
                }
                const indexRecoil11 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil11 > -1) {
                    oilsRecoil.splice(indexRecoil11, 1);
                }
                const indexReload11 = oilsReload.indexOf(newSelOil);
                if (indexReload11 > -1) {
                    oilsReload.splice(indexReload11, 1);
                }
                const indexRPM11 = oilsRPM.indexOf(newSelOil);
                if (indexRPM11 > -1) {
                    oilsRPM.splice(indexRPM11, 1);
                }
                const indexSpread11 = oilsSpread.indexOf(newSelOil);
                if (indexSpread11 > -1) {
                    oilsSpread.splice(indexSpread11, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-rpm":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsRPM);
                    rolledOils[i] = oilsRPM[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll12 = oilsAll.indexOf(newSelOil);
                if (indexAll12 > -1) {
                    oilsAll.splice(indexAll12, 1);
                }
                const indexAmmo12 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo12 > -1) {
                    oilsAmmo.splice(indexAmmo12, 1);
                }
                const indexCrit12 = oilsCrit.indexOf(newSelOil);
                if (indexCrit12 > -1) {
                    oilsCrit.splice(indexCrit12, 1);
                }
                const indexBounce12 = oilsBounce.indexOf(newSelOil);
                if (indexBounce12 > -1) {
                    oilsBounce.splice(indexBounce12, 1);
                }
                const indexSpeed12 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed12 > -1) {
                    oilsSpeed.splice(indexSpeed12, 1);
                }
                const indexAddDam12 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam12 > -1) {
                    oilsAddDam.splice(indexAddDam12, 1);
                }
                const indexMultDam12 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam12 > -1) {
                    oilsMultDam.splice(indexMultDam12, 1);
                }
                const indexDur12 = oilsDur.indexOf(newSelOil);
                if (indexDur12 > -1) {
                    oilsDur.splice(indexDur12, 1);
                    }
                const indexPen12 = oilsPen.indexOf(newSelOil);
                if (indexPen12 > -1) {
                    oilsPen.splice(indexPen12, 1);
                }
                const indexProj12= oilsProj.indexOf(newSelOil);
                if (indexProj12 > -1) {
                    oilsProj.splice(indexProj12, 1);
                }
                const indexRecoil12 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil12 > -1) {
                    oilsRecoil.splice(indexRecoil12, 1);
                }
                const indexReload12 = oilsReload.indexOf(newSelOil);
                if (indexReload12 > -1) {
                    oilsReload.splice(indexReload12, 1);
                }
                const indexRPM12 = oilsRPM.indexOf(newSelOil);
                if (indexRPM12 > -1) {
                    oilsRPM.splice(indexRPM12, 1);
                }
                const indexSpread12 = oilsSpread.indexOf(newSelOil);
                if (indexSpread12 > -1) {
                    oilsSpread.splice(indexSpread12, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            case "static-random-spread":
                if (single === "true" && counter != selID) {
                    rolledOils[i] = getOilByName(oilNames[i])
                    newSelOil = rolledOils[i].Name;
                } 
                else {
                    shuffle(oilsSpread);
                    rolledOils[i] = oilsSpread[0];
                    newSelOil = rolledOils[i];
                    rolledOils[i] = getOilByName(rolledOils[i]);
                }
                const indexAll13 = oilsAll.indexOf(newSelOil);
                if (indexAll13 > -1) {
                    oilsAll.splice(indexAll13, 1);
                }
                const indexAmmo13 = oilsAmmo.indexOf(newSelOil);
                if (indexAmmo13 > -1) {
                    oilsAmmo.splice(indexAmmo13, 1);
                }
                const indexCrit13 = oilsCrit.indexOf(newSelOil);
                if (indexCrit13 > -1) {
                    oilsCrit.splice(indexCrit13, 1);
                }
                const indexBounce13 = oilsBounce.indexOf(newSelOil);
                if (indexBounce13 > -1) {
                    oilsBounce.splice(indexBounce13, 1);
                }
                const indexSpeed13 = oilsSpeed.indexOf(newSelOil);
                if (indexSpeed13 > -1) {
                    oilsSpeed.splice(indexSpeed13, 1);
                }
                const indexAddDam13 = oilsAddDam.indexOf(newSelOil);
                if (indexAddDam13 > -1) {
                    oilsAddDam.splice(indexAddDam13, 1);
                }
                const indexMultDam13 = oilsMultDam.indexOf(newSelOil);
                if (indexMultDam13 > -1) {
                    oilsMultDam.splice(indexMultDam13, 1);
                }
                const indexDur13 = oilsDur.indexOf(newSelOil);
                if (indexDur13 > -1) {
                    oilsDur.splice(indexDur13, 1);
                    }
                const indexPen13 = oilsPen.indexOf(newSelOil);
                if (indexPen13 > -1) {
                    oilsPen.splice(indexPen13, 1);
                }
                const indexProj13= oilsProj.indexOf(newSelOil);
                if (indexProj13 > -1) {
                    oilsProj.splice(indexProj13, 1);
                }
                const indexRecoil13 = oilsRecoil.indexOf(newSelOil);
                if (indexRecoil13 > -1) {
                    oilsRecoil.splice(indexRecoil13, 1);
                }
                const indexReload13 = oilsReload.indexOf(newSelOil);
                if (indexReload13 > -1) {
                    oilsReload.splice(indexReload13, 1);
                }
                const indexRPM13 = oilsRPM.indexOf(newSelOil);
                if (indexRPM13 > -1) {
                    oilsRPM.splice(indexRPM13, 1);
                }
                const indexSpread13 = oilsSpread.indexOf(newSelOil);
                if (indexSpread13 > -1) {
                    oilsSpread.splice(indexSpread13, 1);
                }
                oilStats(rolledOils[i]);
                addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                break;
            default:
                    const selectedIndex = selectedOil[i].selectedIndex;
                    const selectedText = selectedOil[i].options[selectedIndex].text;
                    newSelOil = selectedText;
                    const indexAll14 = oilsAll.indexOf(newSelOil);
                    if (indexAll14 > -1) {
                        oilsAll.splice(indexAll14, 1);
                    }
                    const indexAmmo14 = oilsAmmo.indexOf(newSelOil);
                    if (indexAmmo14 > -1) {
                        oilsAmmo.splice(indexAmmo14, 1);
                    }
                    const indexCrit14 = oilsCrit.indexOf(newSelOil);
                    if (indexCrit14 > -1) {
                        oilsCrit.splice(indexCrit14, 1);
                    }
                    const indexBounce14 = oilsBounce.indexOf(newSelOil);
                    if (indexBounce14 > -1) {
                        oilsBounce.splice(indexBounce14, 1);
                    }
                    const indexSpeed14 = oilsSpeed.indexOf(newSelOil);
                    if (indexSpeed14 > -1) {
                        oilsSpeed.splice(indexSpeed14, 1);
                    }
                    const indexAddDam14 = oilsAddDam.indexOf(newSelOil);
                    if (indexAddDam14 > -1) {
                        oilsAddDam.splice(indexAddDam14, 1);
                    }
                    const indexMultDam14 = oilsMultDam.indexOf(newSelOil);
                    if (indexMultDam14 > -1) {
                        oilsMultDam.splice(indexMultDam14, 1);
                    }
                    const indexDur14 = oilsDur.indexOf(newSelOil);
                    if (indexDur14 > -1) {
                        oilsDur.splice(indexDur14, 1);
                        }
                    const indexPen14 = oilsPen.indexOf(newSelOil);
                    if (indexPen14 > -1) {
                        oilsPen.splice(indexPen14, 1);
                    }
                    const indexProj14= oilsProj.indexOf(newSelOil);
                    if (indexProj14 > -1) {
                        oilsProj.splice(indexProj14, 1);
                    }
                    const indexRecoil14 = oilsRecoil.indexOf(newSelOil);
                    if (indexRecoil14 > -1) {
                        oilsRecoil.splice(indexRecoil14, 1);
                    }
                    const indexReload14 = oilsReload.indexOf(newSelOil);
                    if (indexReload14 > -1) {
                        oilsReload.splice(indexReload14, 1);
                    }
                    const indexRPM14 = oilsRPM.indexOf(newSelOil);
                    if (indexRPM14 > -1) {
                        oilsRPM.splice(indexRPM14, 1);
                    }
                    const indexSpread14 = oilsSpread.indexOf(newSelOil);
                    if (indexSpread14 > -1) {
                        oilsSpread.splice(indexSpread14, 1);
                    }
                    let selOil = getOilByName(selectedText);
                    rolledOils[i] = selOil;
                    oilStats(rolledOils[i]);
                    addName(rolledOils[i].Name, `cardOilName${i + 1}`, "oil", rolledOils[i].StatDescription,`cardOilDesc${i + 1}`, i);
                    break;
        }
        checkNone(rolledOils[i].Name, i, selector);
    };
}

function rollWeapon(selector) {
    if (selector === "pageload") {
        modifiedWeapon = getWeaponByName("P38 Dirk");
        selectedWeapon = getOrigWeaponByName("P38 Dirk");
        addName(selectedWeapon.Name, "p38-dirk", "weapon")
    }
    else {
        let name = document.getElementById("weapons");

        const selectedValue = name.value;
        switch (selectedValue) {
            case "random-all-weapons":
                    shuffle(gunsAll);
                    name = gunsAll[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-pistols":
                shuffle(gunsPistols);
                name = gunsPistols[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-revolvers":
                shuffle(gunsRevolvers);
                name = gunsRevolvers[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-shotguns":
                shuffle(gunsShotguns);
                name = gunsShotguns[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-submachine-guns":
                shuffle(gunsSMGs);
                name = gunsSMGs[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-assault-rifles":
                shuffle(gunsARs);
                name = gunsARs[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-lmgs":
                shuffle(gunsLMGs);
                name = gunsLMGs[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-rifles":
                shuffle(gunsRifles);
                name = gunsRifles[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            case "random-sniper-rifles":
                shuffle(gunsSnipers);
                name = gunsSnipers[0];
                modifiedWeapon = getWeaponByName(name);
                selectedWeapon = getOrigWeaponByName(name);
                addName(name, selectedValue, "weapon");
                break;
            default:
                const selectedIndex = name.selectedIndex;
                const selectedText = name.options[selectedIndex].text;
                modifiedWeapon = getWeaponByName(selectedText);
                selectedWeapon = getOrigWeaponByName(selectedText);
                addName(selectedWeapon.Name, selectedValue, "weapon")
        }
    }
}

function rollAttachments(single, item) {
    let selectorBarrel = document.getElementById("barrelselector");
    let selectorOptic = document.getElementById("opticselector");
    let selectorLaser = document.getElementById("laserselector");
    let selectorFiremode = document.getElementById("firemodeselector");
    let selectorChamber = document.getElementById("chamberselector");

    barrelName = document.getElementById("barrelname").textContent;
    opticName = document.getElementById("opticname").textContent;
    laserName = document.getElementById("lasername").textContent;
    firemodeName = document.getElementById("firemodename").textContent;
    chamberName = document.getElementById("cardAmmoType").textContent;

    let attSel = null;

    selectedAttachments = getAttachmentByName("All");

    switch (selectorBarrel.value) {
        case "static-not-applicable":
            selectedBarrel = getBarrelByName("None");
            break;
        case "static-choose":
            selectedBarrel = getBarrelByName("None");
            break;
        case "none":
            selectedBarrel = getBarrelByName("None");
            break;
        case "static-random-barrel":
            if (item === "barrel" || item === "button"){
                shuffle(attachmentsBarrels);
                attSel = attachmentsBarrels[0];
                selectedBarrel = getBarrelByName(attSel);
            }
            else {
                selectedBarrel = getBarrelByName(barrelName);
            }
            break;
        default:
            const selectedIndex = selectorBarrel.selectedIndex;
            const selectedText = selectorBarrel.options[selectedIndex].text;
            selectedBarrel = getBarrelByName(selectedText);
    }
    selectedAttachments.SpreadAdd += selectedBarrel.SpreadAdd;
    selectedAttachments.MovementSpeedMult += selectedBarrel.MovementSpeedMult;
    selectedAttachments.SpreadMult += selectedBarrel.SpreadMult;
    selectedAttachments.DamageMult += selectedBarrel.DamageMult;
    selectedAttachments.BaseCritChance += selectedBarrel.BaseCritChance;
    selectedAttachments.RPM += selectedBarrel.RPM;
    selectedAttachments.DurabilityMult += selectedBarrel.DurabilityMult;
    selectedAttachments.BulletSpeed += selectedBarrel.BulletSpeed;
    selectedAttachments.RecoilMult += selectedBarrel.RecoilMult;

    addName(selectedBarrel.Name, "barrelname", "attachment", selectedBarrel.StatDescription, "barreldesc");

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
        case "static-random-chamber":
            if (item === "chamber" || item === "button"){
                shuffle(attachmentsRechamber);
                attSel = attachmentsRechamber[0];
                selectedChamber = getChamberByName(attSel);
            }
            else {
                selectedChamber = getChamberByName(`Chamber Chisel - ${chamberName}`)
            }
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
    selectedAttachments.Firemode = selectedFiremode.Firemode;

    addName(selectedFiremode.Name, "firemodename", "attachment", selectedFiremode.StatDescription, "firemodedesc");


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
            if (item === "laser" || item === "button"){
                shuffle(attachmentsLaser);
                attSel = attachmentsLaser[0];
                selectedLaser = getLaserByName(attSel);
            }
            else {
                selectedLaser = getLaserByName(laserName);
            }
            break;
        default:
            const selectedIndex = selectorLaser.selectedIndex;
            const selectedText = selectorLaser.options[selectedIndex].text;
            selectedLaser = getLaserByName(selectedText);
    }
    selectedAttachments.MovingAccuracy += selectedLaser.MovingAccuracy;

    addName(selectedLaser.Name, "lasername", "attachment", selectedLaser.StatDescription, "laserdesc");

    switch (selectorOptic.value) {
        case "static-choose":
            selectedOptic = getOpticByName("None");
            break;
        case "none":
            selectedOptic = getOpticByName("None");
            break;
        case "static-random-optic":
            if (item === "optic" || item === "button"){
                shuffle(attachmentsOptics);
                attSel = attachmentsOptics[0];
                selectedOptic = getOpticByName(attSel);
            }
            else {
                selectedOptic = getOpticByName(opticName);
            }
            break;
        default:
            const selectedIndex = selectorOptic.selectedIndex;
            const selectedText = selectorOptic.options[selectedIndex].text;
            selectedOptic = getOpticByName(selectedText);
    }
    selectedAttachments.ADSCritChance += selectedOptic.ADSCritChance;

    addName(selectedOptic.Name, "opticname", "attachment", selectedOptic.StatDescription, "opticdesc");
}

// Arrays; don't add functions below this

let oilsAllMain = [
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

let oilsAmmoMain = [
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

let oilsCritMain = [
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

let oilsBounceMain = [
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

let oilsSpeedMain = [
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

let oilsAddDamMain = [
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

let oilsMultDamMain = [
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

let oilsDurMain = [
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

let oilsPenMain = [
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

let oilsProjMain = [
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

let oilsRecoilMain = [
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

let oilsReloadMain = [
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

let oilsRPMMain = [
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

let oilsSpreadMain = [
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