// friendly reminder to comment your shit cause you're a dumbass and won't remember what this macguyvered code does
// also ty stackoverflow

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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
    arrow.innerHTML = "<span class='fa-solid fa-sort-down'></span>";
    arrow.style.fontSize = "16px";
    arrow.style.marginTop = "-15px";

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
let oilDefault = null;
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

const coreSelections = new Map();

function resetCoreSelections() {
    coreSelections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    coreSelections.set("ench1", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench2", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench3", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench4", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench5", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("barrel", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("optic", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("laser", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("firemode", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("chamber", {Name: "None", Value: "static-no-selection"});
}

resetCoreSelections()

const chamberValueIndexer = new Map();
const chamberNameIndexer = new Map();

const barrelValueIndexer = new Map();

function setBarrelValueIndexer() {
    barrelValueIndexer.set("a12c-muzzle-brake", "A12C Muzzle Brake");
    barrelValueIndexer.set("aftermarket-haukland-silencer", "Aftermarket Haukland Silencer");
    barrelValueIndexer.set("barrel-extension-2in", "Barrel Extension 2in");
    barrelValueIndexer.set("barrel-extension-4in", "Barrel Extension 4in");
    barrelValueIndexer.set("barrel-extension-6in", "Barrel Extension 6in");
    barrelValueIndexer.set("breznik-bmd-tactical", "Breznik BMD (Tactical)");
    barrelValueIndexer.set("breznik-bmd", "Breznik BMD");
    barrelValueIndexer.set("haukland-flash-hider", "Haukland Flash Hider");
    barrelValueIndexer.set("haukland-silencer", "Haukland Silencer");
    barrelValueIndexer.set("improvised-barrel-extension", "Improvised Barrel Extension");
    barrelValueIndexer.set("shrouded-barrel-extension", "Shrouded Barrel Extension");
    barrelValueIndexer.set("sr-p3-silencer", "SR-P3 Silencer");
    barrelValueIndexer.set("warmage-compensator", "Warmage Compensator");
    barrelValueIndexer.set("m87-albatross-silencer", "M87 Albatross Silencer");
}



function setChamberValueIndexer() {

    chamberValueIndexer.set("chamber-chisel---.50-bmg", "Chamber Chisel - .50 BMG");
    chamberValueIndexer.set("chamber-chisel---12ga", "Chamber Chisel - 12Ga");
    chamberValueIndexer.set("chamber-chisel---5.56mm", "Chamber Chisel - 5.56mm");
    chamberValueIndexer.set("chamber-chisel---7.62mm", "Chamber Chisel - 7.62mm");
    chamberValueIndexer.set("chamber-chisel---9mm", "Chamber Chisel - 9mm");

}

function setChamberNameIndexer() {

    chamberValueIndexer.set("Chamber Chisel - .50 BMG", "chamber-chisel---.50-bmg");
    chamberValueIndexer.set("Chamber Chisel - 12Ga", "chamber-chisel---12ga");
    chamberValueIndexer.set("Chamber Chisel - 5.56mm", "chamber-chisel---5.56mm");
    chamberValueIndexer.set("Chamber Chisel - 7.62mm", "chamber-chisel---7.62mm");
    chamberValueIndexer.set("Chamber Chisel - 9mm", "chamber-chisel---9mm");

}

function encodeBuildAsUri() {
    let buildToEncode = "build";
    function toBuild(value, key, map) {
        buildToEncode += value.Value;
        buildToEncode += "+";
    }
    coreSelections.forEach(toBuild);
    console.log(buildToEncode);
    const encodedBuild = btoa(buildToEncode);
    console.log(encodedBuild)
   // const decodedBuild = atob(encodedBuild);
     //   console.log(decodedBuild);
        history.pushState(encodedBuild, "", encodedBuild);
        //YnVpbGR
    
}

function decodeUriAsBuild() {
    const currentURL = window.location.href;
    console.log(currentURL)
    let split = currentURL.split("YnVpbGR");
    let resplit = "YnVpbGR" + split[1];
    console.log(split);
    let decoded = atob(resplit);
    console.log(decoded);
    let finalSplit = decoded.split("+");
console.log(finalSplit);
let iterationSplit = 0
if (finalSplit[0] !== "buildn\u009d×\u009f\u008aw\u009d") {
    function rebuildBuild(value, key, map) {
        coreSelections.set("key", finalSplit[iterationSplit]);
        iterationSplit += 1;
    }
    coreSelections.forEach(rebuildBuild);
    console.log(coreSelections)
}
}

setChamberValueIndexer();
setChamberNameIndexer();
setBarrelValueIndexer();

const weaponValueIndexer = new Map();

function setWeaponValueIndexer() {

    weaponValueIndexer.set("beck-8", "Beck 8");
    weaponValueIndexer.set("bronco-89", "Bronco 89");
    weaponValueIndexer.set("cavalier", "Cavalier");
    weaponValueIndexer.set("flicker", "Flicker");
    weaponValueIndexer.set("gravekeeper", "Gravekeeper");
    weaponValueIndexer.set("hell-n-back", "Hell 'N' Back");
    weaponValueIndexer.set("p38-dirk", "P38 Dirk");
    weaponValueIndexer.set("salamander", "Salamander");
    weaponValueIndexer.set("socom-9", "Socom 9");
    weaponValueIndexer.set("star-witness", "Star & Witness");
    weaponValueIndexer.set("unknown", "Unknown");
    weaponValueIndexer.set("random-revolvers", "Random Revolver");
    weaponValueIndexer.set(".357-balthazar", ".357 Balthazar");
    weaponValueIndexer.set("palehorse-topclipper", "Palehorse Topclipper");
    weaponValueIndexer.set("snut-.38", "Snut .38");
    weaponValueIndexer.set("wyatt-pulsar", "Wyatt PULSAR");
    weaponValueIndexer.set("random-shotguns", "Random Shotgun");
    weaponValueIndexer.set("1889-mario", "1889 Mario");
    weaponValueIndexer.set("arbiter-2", "Arbiter 2");
    weaponValueIndexer.set("augusta", "Augusta");
    weaponValueIndexer.set("breacher-8", "Breacher 8");
    weaponValueIndexer.set("flock-76", "Flock 76");
    weaponValueIndexer.set("majordome", "Majordome");
    weaponValueIndexer.set("mossman", "Mossman");
    weaponValueIndexer.set("random-smgs", "Random SMG");
    weaponValueIndexer.set("deathstar-pg", "Deathstar PG");
    weaponValueIndexer.set("drifter-9", "Drifter 9");
    weaponValueIndexer.set("ferryman", "Ferryman");
    weaponValueIndexer.set("m3-termite", "M3 Termite");
    weaponValueIndexer.set("ploika-compact", "Ploika Compact");
    weaponValueIndexer.set("songbird", "Songbird");
    weaponValueIndexer.set("valet", "Valet");
    weaponValueIndexer.set("vrede", "Vrede");
    weaponValueIndexer.set("random-assault-rifles", "Random Assault Rifle");
    weaponValueIndexer.set("catacoil-rapid-x", "Catacoil Rapid X");
    weaponValueIndexer.set("corpsemaker", "Corpsemaker");
    weaponValueIndexer.set("m11a2-fisk", "M11A2 Fisk");
    weaponValueIndexer.set("type-80-typhoon", "Type 80 Typhoon");
    weaponValueIndexer.set("wingman", "Wingman");
    weaponValueIndexer.set("random-lmgs", "Random LMG");
    weaponValueIndexer.set("chat-pardeur-98", "Chat-Pardeur 98");
    weaponValueIndexer.set("duhar", "Duhar");
    weaponValueIndexer.set("neuraxis-f22", "Neuraxis F22");
    weaponValueIndexer.set("rektor-100rd", "Rektor 100rd");
    weaponValueIndexer.set("warpig", "Warpig");
    weaponValueIndexer.set("random-rifles", "Random Rifle");
    weaponValueIndexer.set("farsight", "Farsight");
    weaponValueIndexer.set("knop-22", "Knop .22");
    weaponValueIndexer.set("m182-pierre-fusil", "M182 Pierre-Fusil");
    weaponValueIndexer.set("tailor-marksman-mkii", "Tailor Marksman MKII");
    weaponValueIndexer.set("random-sniper-rifles", "Random Sniper Rifle");
    weaponValueIndexer.set("d4rt", "D4RT");
    weaponValueIndexer.set("dolphin-99", "Dolphin 99");
    weaponValueIndexer.set("impala-gravita", "Impala Gravita");
    weaponValueIndexer.set("longboy", "Longboy");
    weaponValueIndexer.set("rokua-308", "Rokua .308");

}

setWeaponValueIndexer()

const weaponNameIndexer = new Map();

function setWeaponNameIndexer() {

    function addToWNI(value, key, map) {
        weaponNameIndexer.set(value, key);
    }

    weaponValueIndexer.forEach(addToWNI);  
    
}

setWeaponNameIndexer()

let scrollValueIndexer = new Map();

function setScrollValueIndexer() {

    scrollValueIndexer.set("scroll-of-toxic-lobotomy", "Scroll of Toxic Lobotomy");

}

setScrollValueIndexer()

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
}

function randomizeAllOils() {
    shallNotPass = true;
    document.getElementById("oils1selector").proDropdown.setValue("static-random-all");
    document.getElementById("oils2selector").proDropdown.setValue("static-random-all");
    document.getElementById("oils3selector").proDropdown.setValue("static-random-all");
    document.getElementById("oils4selector").proDropdown.setValue("static-random-all");
    document.getElementById("oils5selector").proDropdown.setValue("static-random-all");
    rollAggregator('ench1', 'oils1selector', 1, "static-random-all", "ench");
    rollAggregator('ench2', 'oils2selector', 2, "static-random-all", "ench");
    rollAggregator('ench3', 'oils3selector', 3, "static-random-all", "ench");
    rollAggregator('ench4', 'oils4selector', 4, "static-random-all", "ench");
    rollAggregator('ench5', 'oils5selector', 5, "static-random-all", "ench");
    shallNotPass = false;
}

function resetAllOils() {

    shallNotPass = true;
    document.getElementById("oils1selector").proDropdown.setValue("static-no-selection");
    document.getElementById("oils2selector").proDropdown.setValue("static-no-selection");
    document.getElementById("oils3selector").proDropdown.setValue("static-no-selection");
    document.getElementById("oils4selector").proDropdown.setValue("static-no-selection");
    document.getElementById("oils5selector").proDropdown.setValue("static-no-selection");
    
    rollAggregator('ench1', 'oils1selector', 1, "static-no-selection", "ench");
    rollAggregator('ench2', 'oils2selector', 2, "static-no-selection", "ench");
    rollAggregator('ench3', 'oils3selector', 3, "static-no-selection", "ench");
    rollAggregator('ench4', 'oils4selector', 4, "static-no-selection", "ench");
    rollAggregator('ench5', 'oils5selector', 5, "static-no-selection", "ench");
    shallNotPass = false;
}

function randomizeAllAttachments() {
    shallNotPass = true;
    document.getElementById("barrelselector").proDropdown.setValue("static-random-barrel");
    document.getElementById("opticselector").proDropdown.setValue("static-random-optic");
    document.getElementById("laserselector").proDropdown.setValue("static-random-laser");
    document.getElementById("chamberselector").proDropdown.setValue("static-random-chamber");
    rollAggregator('barrel', 'barrelselector', 1, "static-random-barrel", "attachment");
    rollAggregator('optic', 'opticselector', 2, "static-random-optic", "attachment");
    rollAggregator('laser', 'laserselector', 3, "static-random-laser", "attachment");
    rollAggregator('chamber', 'chamberselector', 5, "static-random-chamber", "attachment");
    shallNotPass = false;
}

function resetAllAttachments() {

    shallNotPass = true;
    document.getElementById("barrelselector").proDropdown.setValue("none");
    document.getElementById("opticselector").proDropdown.setValue("none");
    document.getElementById("laserselector").proDropdown.setValue("none");
    document.getElementById("firemodeselector").proDropdown.setValue("none");
    document.getElementById("chamberselector").proDropdown.setValue("none");
    
    rollAggregator('barrel', 'barrelselector', 1, "none", "attachment");
    rollAggregator('optic', 'opticselector', 2, "none", "attachment");
    rollAggregator('laser', 'laserselector', 3, "none", "attachment");
    rollAggregator('firemode', 'firemodeselector', 4, "none", "attachment");
    rollAggregator('chamber', 'chamberselector', 5, "none", "attachment");
    shallNotPass = false;
}

function commitSelection(buttonID, dropdownID, item) {
    shallNotPass = true;
    let getValue = coreSelections.get(item);
    let value = getValue.Value; 
    document.getElementById(dropdownID).proDropdown.setValue(value);
    shallNotPass = false;
}

function commitAllEnch() {
    commitSelection('buttonCommitOil1', 'oils1selector', 'ench1');
    commitSelection('buttonCommitOil2', 'oils2selector', 'ench2');
    commitSelection('buttonCommitOil3', 'oils3selector', 'ench3');
    commitSelection('buttonCommitOil4', 'oils4selector', 'ench4');
    commitSelection('buttonCommitOil5', 'oils5selector', 'ench5');
}

function commitAllAtt() {
    commitSelection('buttonCommitBarrel', 'barrelselector', 'barrel');
    commitSelection('buttonCommitOptic', 'opticselector', 'optic');
    commitSelection('buttonCommitLaser', 'laserselector', 'laser');
    commitSelection('buttonCommitFiremode', 'firemodeselector', 'firemode');
    commitSelection('buttonCommitChamber', 'chamberselector', 'chamber');
}

// Used to remove and replace oils to prevent dupes
function oilRemover() {

    var selector1Options = items.filter(i => i.li.dataset.dropdownId === "oils1selectorcollection");
    var selector2Options = items.filter(i => i.li.dataset.dropdownId === "oils2selectorcollection");
    var selector3Options = items.filter(i => i.li.dataset.dropdownId === "oils3selectorcollection");
    var selector4Options = items.filter(i => i.li.dataset.dropdownId === "oils4selectorcollection");
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

    function hideSelectedOils(value, key, map) {
        
        if (key.startsWith("ench")) {
            let compOilRep = value.Name.Name.replaceAll(" ", "-");
            let compOilLower = compOilRep.toLowerCase();

            for (const value of selector1Options) {
                if (value.li.dataset.value === compOilLower) {
                    value.li.hidden = true;
                }
            }
            for (const value of selector2Options) {
                if (value.li.dataset.value === compOilLower) {
                    value.li.hidden = true;
                }
            }
            for (const value of selector3Options) {
                if (value.li.dataset.value === compOilLower) {
                    value.li.hidden = true;
                }
            }
            for (const value of selector4Options) {
                if (value.li.dataset.value === compOilLower) {
                    value.li.hidden = true;
                }
            }
            for (const value of selector5Options) {
                if (value.li.dataset.value === compOilLower) {
                    value.li.hidden = true;
                }
            }
        }
    }

    makeAllOilsVisible()

    coreSelections.forEach(hideSelectedOils)

} 

function attachmentFilter(evt) {

    let selectorBarrel = document.getElementById("barrelselector");
    let selectorFiremode = document.getElementById("firemodeselector");
    let selectorChamber = document.getElementById("chamberselector");

    let dropdownWeapon = ((coreSelections.get("weapon")).Name); 
    let selChamber = ((coreSelections.get("chamber")).Value);
    let selBar = ((coreSelections.get("barrel")).Value);
    let selFire = ((coreSelections.get("firemode")).Value);
    
    // Unhide everything by default
    items.filter(i => i.li.dataset.value === "priming-bolt")[0].li.hidden = false;
    items.filter(i => i.li.dataset.value === "gun-crank")[0].li.hidden = false;
    document.getElementById("chamberselector").disabled = "";
    document.getElementById("barrelselector").disabled = "";
    document.getElementById("firemodeselector").disabled = "";
    // And set to N/A
    if (selChamber === "static-not-applicable") {
        selectorChamber.proDropdown.setValue("static-choose")
    }
    if (selBar === "static-not-applicable") {
        selectorBarrel.proDropdown.setValue("static-choose");
    }
    if (selFire === "static-not-applicable") {
        selectorFiremode.proDropdown.setValue("static-choose");
    }

    // Filter Firemodes
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
  rollOnPageLoad('weapon', 'pageload', 7, 'p38-dirk', 'weapon');
}, 150);

// For when the button is clicked.
function onGenerate() {
    rollAggregator("weapon", "weapons", 1, weaponSelectHandler.value, "weapon");
    rollAggregator("ench1", "oils1selector", 1, ench1SelectHandler.value, "ench");
    rollAggregator("ench2", "oils2selector", 2, ench2SelectHandler.value, "ench");
    rollAggregator("ench3", "oils3selector", 3, ench3SelectHandler.value, "ench");
    rollAggregator("ench4", "oils4selector", 4, ench4SelectHandler.value, "ench");
    rollAggregator("ench5", "oils5selector", 5, ench5SelectHandler.value, "ench");
    rollAggregator("barrel", "barrelselector", 1, barrelSelectHandler.value, "attachment");
    rollAggregator("optic", "opticselector", 2, opticSelectHandler.value, "attachment");
    rollAggregator("laser", "laserselector", 3, laserSelectHandler.value, "attachment");
    rollAggregator("firemode", "firemodeselector", 4, firemodeSelectHandler.value, "attachment");
    rollAggregator("chamber", "chamberselector", 5, chamberSelectHandler.value, "attachment");
}

function addAllEventListeners() {

    // Weapon onchange handler

    weaponSelectHandler = document.getElementById('weapons');
    weaponSelectHandler.addEventListener('change', rollOnSelect, true);
    weaponSelectHandler.flag = "weapon"
    weaponSelectHandler.selector = "weapons";
    weaponSelectHandler.selID = 1;
    weaponSelectHandler.selType = "weapon";

    // Enchantments onchange handlers

    ench1SelectHandler = document.getElementById('oils1selector');
    ench1SelectHandler.addEventListener('change', rollOnSelect, false);
    ench1SelectHandler.flag = "ench1"
    ench1SelectHandler.selector = "oils1selector";
    ench1SelectHandler.selID = 1;
    ench1SelectHandler.selType = "ench";

    ench2SelectHandler = document.getElementById('oils2selector');
    ench2SelectHandler.addEventListener('change', rollOnSelect, false);
    ench2SelectHandler.flag = "ench2"
    ench2SelectHandler.selector = "oils2selector";
    ench2SelectHandler.selID = 2;
    ench2SelectHandler.selType = "ench";

    ench3SelectHandler = document.getElementById('oils3selector');
    ench3SelectHandler.addEventListener('change', rollOnSelect, false);
    ench3SelectHandler.flag = "ench3"
    ench3SelectHandler.selector = "oils3selector";
    ench3SelectHandler.selID = 3;
    ench3SelectHandler.selType = "ench";

    ench4SelectHandler = document.getElementById('oils4selector');
    ench4SelectHandler.addEventListener('change', rollOnSelect, false);
    ench4SelectHandler.flag = "ench4"
    ench4SelectHandler.selector = "oils4selector";
    ench4SelectHandler.selID = 4;
    ench4SelectHandler.selType = "ench";

    ench5SelectHandler = document.getElementById('oils5selector');
    ench5SelectHandler.addEventListener('change', rollOnSelect, false);
    ench5SelectHandler.flag = "ench5"
    ench5SelectHandler.selector = "oils5selector";
    ench5SelectHandler.selID = 5;
    ench5SelectHandler.selType = "ench";

    // Attachments onchange handlers

    barrelSelectHandler = document.getElementById('barrelselector');
    barrelSelectHandler.addEventListener('change', rollOnSelect, false);
    barrelSelectHandler.flag = "barrel"
    barrelSelectHandler.selector = "barrelselector";
    barrelSelectHandler.selID = 1;
    barrelSelectHandler.selType = "attachment";

    opticSelectHandler = document.getElementById('opticselector');
    opticSelectHandler.addEventListener('change', rollOnSelect, false);
    opticSelectHandler.flag = "optic"
    opticSelectHandler.selector = "opticselector";
    opticSelectHandler.selID = 2;
    opticSelectHandler.selType = "attachment";

    laserSelectHandler = document.getElementById('laserselector');
    laserSelectHandler.addEventListener('change', rollOnSelect, false);
    laserSelectHandler.flag = "laser"
    laserSelectHandler.selector = "laserselector";
    laserSelectHandler.selID = 3;
    laserSelectHandler.selType = "attachment";

    firemodeSelectHandler = document.getElementById('firemodeselector');
    firemodeSelectHandler.addEventListener('change', rollOnSelect, false);
    firemodeSelectHandler.flag = "firemode"
    firemodeSelectHandler.selector = "firemodeselector";
    firemodeSelectHandler.selID = 4;
    firemodeSelectHandler.selType = "attachment";

    chamberSelectHandler = document.getElementById('chamberselector');
    chamberSelectHandler.addEventListener('change', rollOnSelect, false);
    chamberSelectHandler.flag = "chamber"
    chamberSelectHandler.selector = "chamberselector";
    chamberSelectHandler.selID = 5;
    chamberSelectHandler.selType = "attachment";

    // Animations

    // Mobile checks
    //dropdownSelectHandler = document.getElementsByClassName('custom-select');
    //for (var i = 0; i < dropdownSelectHandler.length; i++) {
    //   dropdownSelectHandler[i].addEventListener('click', mobileDropdownCheck, false);
    //}


}

let dropdownSelectHandler = null;
let customDropHandler = document.getElementsByClassName('custom-select');
let weaponSelectHandler = document.getElementById('weapons');
let ench1SelectHandler = document.getElementById('oils1selector');
let ench2SelectHandler = document.getElementById('oils2selector');
let ench3SelectHandler = document.getElementById('oils3selector');
let ench4SelectHandler = document.getElementById('oils4selector');
let ench5SelectHandler = document.getElementById('oils5selector');
let barrelSelectHandler = document.getElementById('barrelselector');
let opticSelectHandler = document.getElementById('opticselector');
let laserSelectHandler = document.getElementById('laserselector');
let firemodeSelectHandler = document.getElementById('firemodeselector');
let chamberSelectHandler = document.getElementById('chamberselector');

let flag = null;
let selector = null;
let selID = null;
let selValue = null;
let selType = null;

let shallNotPass = false;

async function rollOnPageLoad(flag, selector, selID, value, type) {

    const result = await loadOrigWeapons();
    const result2 = await loadWeapons();
    let selPageLoad = document.getElementById("weapons");

    

    selPageLoad.proDropdown.setValue("value"); 
    
    oilDefault = oilsData?.Oil["Default"];
    
    oilStatModifiers = structuredClone(oilDefault);

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
    loadScrolls()
    loadOrigWeapons()
    loadAttachments()
    
    rollSelections(flag, selector, selID, value, type);
    rollSelections('ench1', 'oils1selector', 1, 'static-choose', 'ench');
    rollSelections('ench2', 'oils2selector', 2, 'static-choose', 'ench');
    rollSelections('ench3', 'oils3selector', 3, 'static-choose', 'ench');
    rollSelections('ench4', 'oils4selector', 4, 'static-choose', 'ench');
    rollSelections('ench5', 'oils5selector', 5, 'static-choose', 'ench');
    rollSelections('barrel', 'barrel', 1, 'static-choose', 'attachment');
    rollSelections('optic', 'optic', 2, 'static-choose', 'attachment');
    rollSelections('laser', 'laser', 3, 'static-choose', 'attachment');
    rollSelections('firemode', 'firemode', 4, 'static-choose', 'attachment');
    rollSelections('chamber', 'chamber', 5, 'static-choose', 'attachment');
    oilStats();
    oilCalcs(oilStatModifiers);
    addName();
    decodeUriAsBuild();
}

function rollAggregator(flag, selector, selID, selValue, selType) {
    
    document.getElementById("oilstatcontainer1").classList.remove("spinanimation");
    document.getElementById("oilstatcontainer2").classList.remove("spinanimation");
    document.getElementById("oilstatcontainer3").classList.remove("spinanimation");
    document.getElementById("oilstatcontainer4").classList.remove("spinanimation");
    document.getElementById("oilstatcontainer5").classList.remove("spinanimation");

    document.getElementById("cardOil1Img").classList.remove("otherspinanimation");
    document.getElementById("cardOil2Img").classList.remove("otherspinanimation");
    document.getElementById("cardOil3Img").classList.remove("otherspinanimation");
    document.getElementById("cardOil4Img").classList.remove("otherspinanimation");
    document.getElementById("cardOil5Img").classList.remove("otherspinanimation");

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
    loadScrolls()
    loadOrigWeapons()
    loadAttachments()

    rollSelections(flag, selector, selID, selValue, selType);
    attachmentFilter();
    oilRemover();
    oilStats();
    oilCalcs(oilStatModifiers);

    setTimeout(() => {
    document.getElementById("oilstatcontainer1").classList.add("spinanimation");
    document.getElementById("cardOil1Img").classList.add("otherspinanimation");
    }, 10);
    setTimeout(() => {
    document.getElementById("oilstatcontainer2").classList.add("spinanimation");
    document.getElementById("cardOil2Img").classList.add("otherspinanimation");
    }, 110);
    setTimeout(() => {
    document.getElementById("oilstatcontainer3").classList.add("spinanimation");
    document.getElementById("cardOil3Img").classList.add("otherspinanimation");
    }, 210);
    setTimeout(() => {
    document.getElementById("oilstatcontainer4").classList.add("spinanimation");
    document.getElementById("cardOil4Img").classList.add("otherspinanimation");
    }, 310);
    setTimeout(() => {
    document.getElementById("oilstatcontainer5").classList.add("spinanimation");
    document.getElementById("cardOil5Img").classList.add("otherspinanimation");
    }, 410);
    
    
    setTimeout(() => {
    addName();
    }, 430);
    
    encodeBuildAsUri();
}

function rollOnSelect(evt) {
    if (shallNotPass === false) {

        shallNotPass = true;

        flag = evt.currentTarget.flag;
        selector = evt.currentTarget.selector;
        selID = evt.currentTarget.selID;
        selValue = evt.currentTarget.value;
        selType = evt.currentTarget.selType;

        rollAggregator(flag, selector, selID, selValue, selType);

        shallNotPass = false;
    }
    if (!(evt)) {

    }
}

function addName() {

    function addCoreToCard(value, key, map) {
        let coreName = value.Name.Name;
        let coreVal = value.Value;
        switch (key) {
            case "weapon":
                let weapReplace = coreName.replaceAll(" ", "_");
                document.getElementById("weaponimage").src = `.\\Images\\Weapons\\${weapReplace}.png`;
                document.getElementById("cardWeaponName").textContent = coreName;
                break;
            case "ench1":
                let oil1 = null;
                if (coreName.endsWith("Oil") === true) {
                    oil1 =  getOilByName(coreName);
                }
                else if (coreName.startsWith("Scroll") === true) {
                    oil1 =  getScrollByName(coreName);
                }
                else {
                    oil1 =  getOilByName(coreName);
                }
                document.getElementById("cardOilDesc1").innerHTML = oil1.StatDescription;
                document.getElementById("cardOilName1").textContent = coreName;
                document.getElementById(`cardOil1Img`).style.backgroundImage = `url('./Images/Enchantments/${coreName}.webp')`;
                break;
            case "ench2":
                let oil2 = getOilByName(coreName);
                document.getElementById("cardOilDesc2").innerHTML = oil2.StatDescription;
                document.getElementById("cardOilName2").textContent = coreName;
                document.getElementById(`cardOil2Img`).style.backgroundImage = `url('./Images/Enchantments/${coreName}.webp')`;
                break;
            case "ench3":
                let oil3 = getOilByName(coreName);
                document.getElementById("cardOilDesc3").innerHTML = oil3.StatDescription;
                document.getElementById("cardOilName3").textContent = coreName;
                document.getElementById(`cardOil3Img`).style.backgroundImage = `url('./Images/Enchantments/${coreName}.webp')`;
                break;
            case "ench4":
                let oil4 = getOilByName(coreName);
                document.getElementById("cardOilDesc4").innerHTML = oil4.StatDescription;
                document.getElementById("cardOilName4").textContent = coreName;
                document.getElementById(`cardOil4Img`).style.backgroundImage = `url('./Images/Enchantments/${coreName}.webp')`;                break;
            case "ench5":
                let oil5 = getOilByName(coreName);
                document.getElementById("cardOilDesc5").innerHTML = oil5.StatDescription;
                document.getElementById("cardOilName5").textContent = coreName;
                document.getElementById(`cardOil5Img`).style.backgroundImage = `url('./Images/Enchantments/${coreName}.webp')`;                break;
            case "barrel":
                let barrel = getBarrelByName(coreName);
                document.getElementById("barrelname").textContent = coreName;
                document.getElementById("barreldesc").innerHTML = barrel.StatDescription;
                break;
            case "optic":
                document.getElementById("opticname").textContent = coreName;
                document.getElementById("opticdesc").innerHTML = value.Name.StatDescription;
                break;
            case "laser":
                let laser = getBarrelByName(coreName);
                document.getElementById("lasername").textContent = coreName;
                document.getElementById("laserdesc").innerHTML = value.Name.StatDescription;
                break;
            case "firemode":
                let firemode = getBarrelByName(coreName);
                document.getElementById("firemodename").textContent = coreName;
                document.getElementById("firemodedesc").innerHTML = value.Name.StatDescription;
                break;   
            case "all":
                break;
            default:
            
        }
    }

    coreSelections.forEach(addCoreToCard);

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

async function loadScrolls() {
    const response = await fetch("./Scrolls.json");
    scrollsData = await response.json();
}

function percentConv(stat) {
       return stat *= 100;
    }

function oilStats() {
    oilStatModifiers = structuredClone(oilDefault);

    function oilStatCalcs(selectedOil) {
        if (selectedOil.AmmoConsumeChance != 0.0) {
            oilStatModifiers.AmmoConsumeChance += selectedOil.AmmoConsumeChance;
        }
        if (selectedOil.Bounces != 0) {
            oilStatModifiers.Bounces += selectedOil.Bounces;
        }
        if (selectedOil.BulletDrop != 0) {
            oilStatModifiers.BulletDrop += selectedOil.BulletDrop;
        }
        if (selectedOil.BulletSpeed != 0) {
            oilStatModifiers.BulletSpeed += selectedOil.BulletSpeed;
        }
        if (selectedOil.ExtraAmmoUseChance != 0) {
            oilStatModifiers.ExtraAmmoUseChance += selectedOil.ExtraAmmoUseChance;
        }
        if (selectedOil.BaseCritChance != 0) {
            oilStatModifiers.BaseCritChance += selectedOil.BaseCritChance;
        }
        if (selectedOil.DamageAdd != 0) {
            oilStatModifiers.DamageAdd += selectedOil.DamageAdd;
        }
        if (selectedOil.DamageMult != 0) {
            oilStatModifiers.DamageMult += selectedOil.DamageMult;
        }
        if (selectedOil.CanADS != "Yes") {
            oilStatModifiers.CanADS = selectedOil.CanADS;
        }
        if (selectedOil.JumpPower != 0) {
            oilStatModifiers.JumpPower += selectedOil.JumpPower;
        }
        if (selectedOil.LootDropChance != 0) {
            oilStatModifiers.LootDropChance += selectedOil.LootDropChance;
        }
        if (selectedOil.DurabilityMult != 0) {
            oilStatModifiers.DurabilityMult += selectedOil.DurabilityMult;
        }
        if (selectedOil.MovementSpeedMult != 0) {
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
        if (selectedOil.ProjectileMult != 0) {
            oilStatModifiers.ProjectileMult += selectedOil.ProjectileMult;
        }
        if (selectedOil.RPM != 0) {
            oilStatModifiers.RPM += selectedOil.RPM;
        }
        if (selectedOil.RecoilAdd != 0) {
            oilStatModifiers.RecoilAdd += selectedOil.RecoilAdd;
        }
        if (selectedOil.RecoilMult != 0) {
            oilStatModifiers.RecoilMult += selectedOil.RecoilMult;
        }
        if (selectedOil.ReloadSpeed != 0) {
            oilStatModifiers.ReloadSpeed += selectedOil.ReloadSpeed;
        }
        if (selectedOil.SpreadAdd != 0) {
            oilStatModifiers.SpreadAdd += selectedOil.SpreadAdd;
        }
        if (selectedOil.SpreadMult != 0) {
            oilStatModifiers.SpreadMult += selectedOil.SpreadMult;
        }
        if (selectedOil.Drag != 0) {
            oilStatModifiers.Drag += selectedOil.Drag;
        }
        if (selectedOil.DurabilityUsage != 0) {
            oilStatModifiers.DurabilityUsage += selectedOil.DurabilityUsage;
        }
        if (selectedOil.BulletBounciness != 0) {
            oilStatModifiers.BulletBounciness += selectedOil.BulletBounciness;
        }
        if (selectedOil.MovingAccuracy != 0) {
            oilStatModifiers.MovingAccuracy += selectedOil.MovingAccuracy;
        }
        if (selectedOil.DurLossMult != 0) {
            oilStatModifiers.DurLossMult += selectedOil.DurLossMult;
        }
        if (selectedOil.ADSCritChance != 0) {
            oilStatModifiers.ADSCritChance += selectedOil.ADSCritChance;
        }
        if (selectedOil.Firemode !== 'None') {
            oilStatModifiers.Firemode = selectedOil.Firemode;
        }
        if (selectedOil.BulletSize !== 0) {
            oilStatModifiers.Firemode = selectedOil.Firemode;
        }
        if (selectedOil.RPMBaseShift !== 0) {
            oilStatModifiers.RPMBaseShift = selectedOil.RPMBaseShift;
        }
        if (selectedOil.IsRailgun !== false) {
            oilStatModifiers.IsRailgun = selectedOil.IsRailgun;
        }
        if (selectedOil.HeadshotDamage !== 0) {
            oilStatModifiers.HeadshotDamage = selectedOil.HeadshotDamage;
        }
    }

    function coreStats(value, key, map) {

        let coreName = value.Name;
        if (key !== "weapon") {
            oilStatCalcs(coreName);
        }
        
    }

    coreSelections.forEach(coreStats);
    
}

function oilCalcs(calcOil) {
    let weaponName = coreSelections.get("weapon");
    let weaponStats = getWeaponByName(weaponName.Name.Name);
    let weapon = structuredClone(weaponStats);
    let weaponOriginal = structuredClone(weaponStats);
    
    let weaponOriginalChamber = getChamberByName(`Chamber Chisel - ${weaponOriginal.AmmoType}`);

    let chamberStats = null;
    let chamberName = coreSelections.get("chamber");
    if (chamberName.Name === "None") {
        chamberStats = getChamberByName(`Chamber Chisel - ${weaponOriginal.AmmoType}`);
    }
    else {
        chamberStats = getChamberByName(chamberName.Name.Name);
    }

    let chamber = chamberStats;
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
    document.getElementById("cardRPMArrow").innerHTML = "";
    document.getElementById("cardRPMArrow").style.color = "";
    document.getElementById("cardRPMLBrac").textContent = "";
    document.getElementById("cardRPMComp").textContent = "";
    document.getElementById("cardRPMRBrac").textContent = "";

    let rpmShift = weapon.RPM * (1 + calcOil.RPMBaseShift);

    let rpmCalc = rpmShift * (1 + calcOil.RPM);
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
        document.getElementById("cardRPMArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
        document.getElementById("cardRPMArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
    document.getElementById("cardAmmoArrow").innerHTML = "";
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
        document.getElementById("cardAmmoArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
    document.getElementById("cardExtraArrow").innerHTML = "";
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
        document.getElementById("cardExtraArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardBouncesArrow").innerHTML = "";
    document.getElementById("cardBouncesArrow").style.color = "";
    document.getElementById("cardBouncesLBrac").textContent = "";
    document.getElementById("cardBouncesComp").textContent = "";
    document.getElementById("cardBouncesRBrac").textContent = "";

    weapon.Bounces = calcOil.Bounces;

    if (weapon.Bounces > 0.0) {
        document.getElementById("cardBounces").textContent = weapon.Bounces;
        document.getElementById("cardBounces").style.color = "Lime";
        document.getElementById("cardBouncesArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardDropArrow").innerHTML = "";
    document.getElementById("cardDropArrow").style.color = "";
    document.getElementById("cardDropLBrac").textContent = "";
    document.getElementById("cardDropComp").textContent = "";
    document.getElementById("cardDropRBrac").textContent = "";

    weapon.BulletDrop += calcOil.BulletDrop;

    if (weapon.BulletDrop > 0) {
        document.getElementById("cardDrop").textContent = weapon.BulletDrop;
        document.getElementById("cardDrop").style.color = "OrangeRed";
        document.getElementById("cardDropArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardSpeedArrow").innerHTML = "";
    document.getElementById("cardSpeedArrow").style.color = "";
    document.getElementById("cardSpeedLBrac").textContent = "";
    document.getElementById("cardSpeedComp").textContent = "";
    document.getElementById("cardSpeedRBrac").textContent = "";

    let speedCalc = weapon.BulletSpeed + calcOil.BulletSpeed;
    let speedConv = percentConv(speedCalc);

    let speedRound = Math.round((speedConv + Number.EPSILON)* 100) / 100;

    if (speedRound < 1) {
        speedRound = 1;
    }

    if (calcOil.IsRailgun === true) {
        speedRound = 999;
    }

    if (speedRound > 100) {
        document.getElementById("cardSpeed").textContent = speedRound;
        document.getElementById("cardSpeed").style.color = "Lime";
        document.getElementById("cardSpeed%").textContent = "%";
        document.getElementById("cardSpeed%").style.color = "Lime";
        document.getElementById("cardSpeedArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
        document.getElementById("cardSpeedArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
    document.getElementById("cardCritArrow").innerHTML = "";
    document.getElementById("cardCritArrow").style.color = "";
    document.getElementById("cardCritLBrac").textContent = "";
    document.getElementById("cardCritComp").textContent = "";
    document.getElementById("cardCritRBrac").textContent = "";

    let baseCalc = calcOil.BaseCritChance;
    let baseConv = percentConv(baseCalc);
    let baseAdd = weapon.BaseCritChance + baseConv;

    let baseRound = Math.round((baseAdd + Number.EPSILON)* 100) / 100;

    if (baseRound > 0.0) {
        document.getElementById("cardCrit").textContent = baseRound;
        document.getElementById("cardCrit").style.color = "Lime";
        document.getElementById("cardCrit%").textContent = "%";
        document.getElementById("cardCrit%").style.color = "Lime";
        document.getElementById("cardCritArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardADSCritArrow").innerHTML = "";
    document.getElementById("cardADSCritArrow").style.color = "";
    document.getElementById("cardADSCritLBrac").textContent = "";
    document.getElementById("cardADSCritComp").textContent = "";
    document.getElementById("cardADSCritRBrac").textContent = "";

    let adsConv = percentConv(calcOil.ADSCritChance);
    let adsCalc = weapon.ADSCritChance + adsConv;

    let adsRound = Math.round((adsCalc + Number.EPSILON)* 100) / 100;

    if (adsRound > 0.0) {
        document.getElementById("cardADSCrit").textContent = adsRound;
        document.getElementById("cardADSCrit").style.color = "Lime";
        document.getElementById("cardADSCrit%").textContent = "%";
        document.getElementById("cardADSCrit%").style.color = "Lime";
        document.getElementById("cardADSCritArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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

                Run runArrowUp1 = new Run("<span class='fa-solid fa-caret-up'></span>");
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
    document.getElementById("cardDamageArrow").innerHTML = "";
    document.getElementById("cardDamageArrow").style.color = "";
    document.getElementById("cardDamageComp").textContent = "";
    document.getElementById("cardDamageLBrac").textContent = "";
    document.getElementById("cardDamageRBrac").textContent = "";
    document.getElementById("cardDamageProj").textContent = "";
    document.getElementById("cardDamageLRArrow").innerHTML = "";
    document.getElementById("cardDamageProj").style.color = "";
    document.getElementById("cardDamageProjArrow").innerHTML = "";
    document.getElementById("cardDamageProjArrow").style.color = "";
    document.getElementById("cardDamageProjComp").textContent = "";
    document.getElementById("cardDamageX").innerHTML = "";
    document.getElementById("cardDamageMultiX").innerHTML = "";
    document.getElementById("cardDamageMulti").textContent = "";
    document.getElementById("cardDamageMulti").style.color = "";
    document.getElementById("cardDamageMultiXComp").innerHTML = "";
    document.getElementById("cardDamageMultiComp").textContent = "";
    document.getElementById("cardDamageXComp").innerHTML = "";

    //// Projectiles
    let weapProj = weapon.Projectiles * (1 + calcOil.ProjectileMult);
    //// Damage Add
    let damAdd = weapon.Damage + calcOil.DamageAdd;
    let zeroDamage = weapon.Damage;
    //// Damage Multiplier
    let damCalc = damAdd * (1 + calcOil.DamageMult);
    let damRound = Math.round((damCalc + Number.EPSILON)* 100) / 100;
    if (zeroDamage > 0 && damRound <= 0) {
        damRound = zeroDamage * 0.01;
    }
    //// Total Damage Calc
    let totalCalc = damRound * weapProj * weapon.MultiShot;
    let totalRound = Math.round((totalCalc + Number.EPSILON)* 100) / 100;

    weaponOriginal.TotalDamage = weaponOriginal.Damage * weaponOriginal.Projectiles * weaponOriginal.MultiShot;
    weaponOriginal.TotalDamage = Math.round((weaponOriginal.TotalDamage + Number.EPSILON)* 100) / 100;

    document.getElementById("cardDamageTotal").textContent = totalRound;

    ////// Damage & Projectiles card addition
    if (damRound < weaponOriginal.Damage) {

        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageArrow").style.color = OrangeRed;
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProj").style.color = "OrangeRed";
            document.getElementById("cardDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageProjArrow").style.color = OrangeRed;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProj").style.color = "Lime";
            document.getElementById("cardDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageProjArrow").style.color = "Lime";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
    }
    if (damRound > weaponOriginal.Damage) {
        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProj").style.color = "OrangeRed";
            document.getElementById("cardDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageProjArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProj").style.color = "Lime";
            document.getElementById("cardDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageProjArrow").style.color = "Lime";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
    }
    if (damRound === weaponOriginal.Damage) {
        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProj").style.color = "OrangeRed";
            document.getElementById("cardDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageProjArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProj").style.color = "Lime";
            document.getElementById("cardDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageProjArrow").style.color = "Lime";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
            }
        }
    }

            ////// Total Damage card addition

            document.getElementById("cardDamageTotal").textContent = "";
            document.getElementById("cardDamageTotal").style.color = "";
            document.getElementById("cardDamageTotalArrow").innerHTML = "";
            document.getElementById("cardDamageTotalArrow").style.color = "";
            document.getElementById("cardDamageTotalLRArrow").innerHTML = "";
            document.getElementById("cardDamageTotalLBrac").textContent = "";
            document.getElementById("cardDamageTotalComp").textContent = "";
            document.getElementById("cardDamageTotalRBrac").textContent = "";

    if (totalRound > weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = totalRound;
            document.getElementById("cardDamageTotal").style.color = "Lime";
            document.getElementById("cardDamageTotalArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageTotalArrow").style.color = "Lime";
            document.getElementById("cardDamageTotalLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (totalRound < weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = totalRound;
            document.getElementById("cardDamageTotal").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageTotalArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (totalRound == weaponOriginal.TotalDamage) {
        document.getElementById("cardDamageTotal").textContent = totalRound;
    }
    //#endregion

    //////////////////////////////
    //// Headshot Damage ////
    //////////////////////////////
    //#region

    document.getElementById("cardHeadDamage").textContent = "";
    document.getElementById("cardHeadDamage").style.color = "";
    document.getElementById("cardHeadDamageArrow").innerHTML = "";
    document.getElementById("cardHeadDamageArrow").style.color = "";
    document.getElementById("cardHeadDamageComp").textContent = "";
    document.getElementById("cardHeadDamageLBrac").textContent = "";
    document.getElementById("cardHeadDamageRBrac").textContent = "";
    document.getElementById("cardHeadDamageProj").textContent = "";
    document.getElementById("cardHeadDamageLRArrow").innerHTML = "";
    document.getElementById("cardHeadDamageProj").style.color = "";
    document.getElementById("cardHeadDamageProjArrow").innerHTML = "";
    document.getElementById("cardHeadDamageProjArrow").style.color = "";
    document.getElementById("cardHeadDamageProjComp").textContent = "";
    document.getElementById("cardHeadDamageX").innerHTML = "";
    document.getElementById("cardHeadDamageMultiX").innerHTML = "";
    document.getElementById("cardHeadDamageMulti").textContent = "";
    document.getElementById("cardHeadDamageMulti").style.color = "";
    document.getElementById("cardHeadDamageMultiXComp").innerHTML = "";
    document.getElementById("cardHeadDamageMultiComp").textContent = "";
    document.getElementById("cardHeadDamageXComp").innerHTML = "";

    let headshotDamage = damRound * (1 + calcOil.HeadshotDamage);

    //// Total Damage Calc
    let totalHead = headshotDamage * weapProj * weapon.MultiShot;
    let totalHeadRound = Math.round((totalHead + Number.EPSILON)* 100) / 100;

    document.getElementById("cardHeadDamageTotal").textContent = totalHeadRound;

    ////// Damage & Projectiles card addition
    if (headshotDamage < damRound) {

        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamage").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardHeadDamageArrow").style.color = OrangeRed;
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProj").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardHeadDamageProjArrow").style.color = OrangeRed;
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamage").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardHeadDamageArrow").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProj").style.color = "Lime";
            document.getElementById("cardHeadDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardHeadDamageProjArrow").style.color = "Lime";
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamage").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardHeadDamageArrow").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
    }
    if (headshotDamage > damRound) {
        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamage").style.color = "Lime";
            document.getElementById("cardHeadDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardHeadDamageArrow").style.color = "Lime";
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProj").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardHeadDamageProjArrow").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamage").style.color = "Lime";
            document.getElementById("cardHeadDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardHeadDamageArrow").style.color = "Lime";
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProj").style.color = "Lime";
            document.getElementById("cardHeadDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardHeadDamageProjArrow").style.color = "Lime";
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamage").style.color = "Lime";
            document.getElementById("cardHeadDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardHeadDamageArrow").style.color = "Lime";
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
    }
    if (headshotDamage === damRound) {
        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProj").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardHeadDamageProjArrow").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamageComp").textContent = damRound;
            document.getElementById("cardHeadDamageLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageLBrac").textContent = "(";
            document.getElementById("cardHeadDamageRBrac").textContent = ")";
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageProj").style.color = "Lime";
            document.getElementById("cardHeadDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardHeadDamageProjArrow").style.color = "Lime";
            document.getElementById("cardHeadDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardHeadDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardHeadDamage").textContent = headshotDamage;
            document.getElementById("cardHeadDamageProj").textContent = weapProj;
            document.getElementById("cardHeadDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardHeadDamageMultiX").innerHTML = "<span class='fa-solid fa-x'></span>";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
            }
        }
    }

            ////// Total Damage card addition

            document.getElementById("cardHeadDamageTotal").textContent = "";
            document.getElementById("cardHeadDamageTotal").style.color = "";
            document.getElementById("cardHeadDamageTotalArrow").innerHTML = "";
            document.getElementById("cardHeadDamageTotalArrow").style.color = "";
            document.getElementById("cardHeadDamageTotalLRArrow").innerHTML = "";
            document.getElementById("cardHeadDamageTotalLBrac").textContent = "";
            document.getElementById("cardHeadDamageTotalComp").textContent = "";
            document.getElementById("cardHeadDamageTotalRBrac").textContent = "";

    if (totalHeadRound > weaponOriginal.TotalDamage) {
            document.getElementById("cardHeadDamageTotal").textContent = totalHeadRound;
            document.getElementById("cardHeadDamageTotal").style.color = "Lime";
            document.getElementById("cardHeadDamageTotalArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardHeadDamageTotalArrow").style.color = "Lime";
            document.getElementById("cardHeadDamageTotalLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageTotalLBrac").textContent = "(";
            document.getElementById("cardHeadDamageTotalComp").textContent = totalRound;
            document.getElementById("cardHeadDamageTotalRBrac").textContent = ")";
    }
    if (totalHeadRound < weaponOriginal.TotalDamage) {
            document.getElementById("cardHeadDamageTotal").textContent = totalHeadRound;
            document.getElementById("cardHeadDamageTotal").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageTotalArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardHeadDamageTotalArrow").style.color = "OrangeRed";
            document.getElementById("cardHeadDamageTotalLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardHeadDamageTotalLBrac").textContent = "(";
            document.getElementById("cardHeadDamageTotalComp").textContent = totalRound;
            document.getElementById("cardHeadDamageTotalRBrac").textContent = ")";
    }
    if (totalHeadRound == weaponOriginal.TotalDamage) {
        document.getElementById("cardHeadDamageTotal").textContent = totalHeadRound;
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
    document.getElementById("cardJumpArrow").innerHTML = "";
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
        document.getElementById("cardJumpArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
        document.getElementById("cardJumpArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardLootArrow").innerHTML = "";
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
        document.getElementById("cardLootArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
    document.getElementById("cardDurabilityArrow").innerHTML = "";
    document.getElementById("cardDurabilityArrow").style.color = "";
    document.getElementById("cardDurabilityLBrac").textContent = "";
    document.getElementById("cardDurabilityComp").textContent = "";
    document.getElementById("cardDurabilityRBrac").textContent = "";

    let durMin = weaponOriginal.Durability * 0.01;

    let durCalc = weapon.Durability *(1 + calcOil.DurabilityMult);

    let durRound = Math.round((durCalc + Number.EPSILON)* 100) / 100;

    if (durRound < durMin) {
        durRound = durMin;
    }

    if (durRound < weaponOriginal.Durability) {
                
        document.getElementById("cardDurability").textContent = durRound;
        document.getElementById("cardDurability").style.color = "OrangeRed";
        document.getElementById("cardDurabilityArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
        document.getElementById("cardDurabilityArrow").style.color = "OrangeRed";
        document.getElementById("cardDurabilityLBrac").textContent = "(";
        document.getElementById("cardDurabilityComp").textContent = weaponOriginal.Durability;
        document.getElementById("cardDurabilityRBrac").textContent = ")";
    }
    if (durRound > weaponOriginal.Durability) {

        document.getElementById("cardDurability").textContent = durRound;
        document.getElementById("cardDurability").style.color = "Lime";
        document.getElementById("cardDurabilityArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardMoveArrow").innerHTML = "";
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
    let moveCalc = resultMovementSpeed * (1 + calcOil.MovementSpeedMult);

    let moveRound = Math.round((moveCalc + Number.EPSILON)* 100) / 100;

    if (moveRound < 1) {
        moveRound= 1;
    }

    if (moveRound < resultMovementSpeedComp) {
        document.getElementById("cardMove").textContent = moveRound;
        document.getElementById("cardMove").style.color = "OrangeRed";
        document.getElementById("cardMoveArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
        document.getElementById("cardMoveArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardPenArrow").innerHTML = "";
    document.getElementById("cardPenArrow").style.color = "";
    document.getElementById("cardPenLBrac").textContent = "";
    document.getElementById("cardPenComp").textContent = "";
    document.getElementById("cardPenRBrac").textContent = "";

    weapon.Penetrations += calcOil.Penetrations;

    if (weapon.Penetrations > weaponOriginal.Penetrations) {
        document.getElementById("cardPen").textContent = weapon.Penetrations;
        document.getElementById("cardPen").style.color = "Lime";
        document.getElementById("cardPenArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardRecoilArrow").innerHTML = "";
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

    let recoilMin = weapon.RecoilBase * 0.01;

    //// Recoil Add

    let recoilAdd = weapon.RecoilMult + calcOil.RecoilAdd;

    //// Recoil Multiplier

    let recoilCalc = weapon.RecoilBase * (recoilAdd * (1 + calcOil.RecoilMult));

    let recoilRound = Math.round((recoilCalc + Number.EPSILON)* 100) / 100;

    if (recoilRound < recoilMin && weapon.AmmoType != "Energy") {
        recoilRound = recoilMin;
    }

    if (recoilRound < weaponOriginal.RecoilBase) {
        document.getElementById("cardRecoil").textContent = recoilRound;
        document.getElementById("cardRecoil").style.color = "Lime";
        document.getElementById("cardRecoilArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
        document.getElementById("cardRecoilArrow").style.color = "Lime";
        document.getElementById("cardRecoilLBrac").textContent = "(";
        document.getElementById("cardRecoilComp").textContent = weaponOriginal.RecoilBase;
        document.getElementById("cardRecoilRBrac").textContent = ")";
    }
    if (recoilRound > weaponOriginal.RecoilBase) {
        document.getElementById("cardRecoil").textContent = recoilRound;
        document.getElementById("cardRecoil").style.color = "OrangeRed";
        document.getElementById("cardRecoilArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
        document.getElementById("cardRecoilArrow").style.color = "OrangeRed";
        document.getElementById("cardRecoilLBrac").textContent = "(";
        document.getElementById("cardRecoilComp").textContent = weaponOriginal.RecoilBase;
        document.getElementById("cardRecoilRBrac").textContent = ")";
    }
    if (recoilRound === weaponOriginal.RecoilBase) {
        document.getElementById("cardRecoil").textContent = recoilRound;
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
    document.getElementById("cardReloadSpeedArrow").innerHTML = "";
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
        document.getElementById("cardReloadSpeedArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
        document.getElementById("cardReloadSpeedArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardReloadTimeArrow").innerHTML = "";
    document.getElementById("cardReloadTimeArrow").style.color = "";
    document.getElementById("cardReloadTimeLBrac").textContent = "";
    document.getElementById("cardReloadTimeComp").textContent = "";
    document.getElementById("cardReloadTimeRBrac").textContent = "";

    let reloadTime = weapon.ReloadTime / reloadTimeModifier;

    let reloadTimeRound = Math.round((reloadTime + Number.EPSILON)* 100) / 100;

    if (reloadTimeRound > weapon.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = `${reloadTimeRound}s`;
        document.getElementById("cardReloadTime").style.color = "OrangeRed";
        document.getElementById("cardReloadTimeArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
        document.getElementById("cardReloadTimeArrow").style.color = "OrangeRed";
        document.getElementById("cardReloadTimeLBrac").textContent = "(";
        document.getElementById("cardReloadTimeComp").textContent = `${weapon.ReloadTime}s`;
        document.getElementById("cardReloadTimeRBrac").textContent = ")";
    }
    if (reloadTimeRound < weaponOriginal.ReloadTime) {
        document.getElementById("cardReloadTime").textContent = `${reloadTimeRound}s`;
        document.getElementById("cardReloadTime").style.color = "Lime";
        document.getElementById("cardReloadTimeArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
    document.getElementById("cardSpreadArrow").innerHTML = "";
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

    //// Spread Multiplier

    let spreadCalc = spreadCalc1 * (1 + calcOil.SpreadMult);
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
        document.getElementById("cardSpreadArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
        document.getElementById("cardSpreadArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
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
    document.getElementById("cardDragArrow").innerHTML = "";
    document.getElementById("cardDragArrow").style.color = "";
    document.getElementById("cardDragComp").textContent = "";
    document.getElementById("cardDragLBrac").textContent = "";
    document.getElementById("cardDragRBrac").textContent = "";

    weapon.Drag += calcOil.Drag;

    if (weapon.Drag > 0) {
        document.getElementById("cardDrag").textContent = weapon.Drag;
        document.getElementById("cardDrag").style.color = "OrangeRed";
        document.getElementById("cardDragArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
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
    document.getElementById("cardDurabilityUsageArrow").innerHTML = "";
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

    if (calcOil.Firemode !== 'None') {
        weapon.Firemode = calcOil.Firemode;
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

function getScrollByName(name) {
    return scrollsData?.Scroll[name] || null;
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

function convNameToVal(name) {
    let nameConv = name.replaceAll(" ", "-");
    return nameConv.toLowerCase();
}

function addToCoreMap(flag, itemName, itemValue) {
    if (itemName !== null) {
        switch (flag) {
            case "weapon":
                coreSelections.set("weapon", {Name: itemName, Value: itemValue});
                break;
            case "ench1":
                coreSelections.set("ench1", {Name: itemName, Value: itemValue});
                break;
            case "ench2":
                coreSelections.set("ench2", {Name: itemName, Value: itemValue});
                break;
            case "ench3":
                coreSelections.set("ench3", {Name: itemName, Value: itemValue});
                break;
            case "ench4":
                coreSelections.set("ench4", {Name: itemName, Value: itemValue});
                break;
            case "ench5":
                coreSelections.set("ench5", {Name: itemName, Value: itemValue});
                break;
            case "barrel":
                coreSelections.set("barrel", {Name: itemName, Value: itemValue});
                break;
            case "optic":
                coreSelections.set("optic", {Name: itemName, Value: itemValue});
                break;
            case "laser":
                coreSelections.set("laser", {Name: itemName, Value: itemValue});
                break;
            case "firemode":
                coreSelections.set("firemode", {Name: itemName, Value: itemValue});
                break;
            case "chamber":
                coreSelections.set("chamber", {Name: itemName, Value: itemValue});
                break;   
            case "all":
                break;
            default:
        }
    }
}

function convertToUpper(item) {
            let compItemRep = item.replaceAll("-", " ");
            var splitStr = compItemRep.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            }
            return splitStr.join(' '); 
        }

function poolRemover(name) {

    const indexAll = oilsAll.indexOf(name);
    if (indexAll > -1) {
        oilsAll.splice(indexAll, 1);
    }
    const indexAmmo = oilsAmmo.indexOf(name);
    if (indexAmmo > -1) {
        oilsAmmo.splice(indexAmmo, 1);
    }
    const indexCrit = oilsCrit.indexOf(name);
    if (indexCrit > -1) {
        oilsCrit.splice(indexCrit, 1);
    }
    const indexBounce = oilsBounce.indexOf(name);
    if (indexBounce > -1) {
        oilsBounce.splice(indexBounce, 1);
    }
    const indexSpeed = oilsSpeed.indexOf(name);
    if (indexSpeed > -1) {
        oilsSpeed.splice(indexSpeed, 1);
    }
    const indexAddDam = oilsAddDam.indexOf(name);
    if (indexAddDam > -1) {
        oilsAddDam.splice(indexAddDam, 1);
    }
    const indexMultDam = oilsMultDam.indexOf(name);
    if (indexMultDam > -1) {
        oilsMultDam.splice(indexMultDam, 1);
    }
    const indexDur = oilsDur.indexOf(name);
    if (indexDur > -1) {
        oilsDur.splice(indexDur, 1);
        }
    const indexPen = oilsPen.indexOf(name);
    if (indexPen > -1) {
        oilsPen.splice(indexPen, 1);
    }
    const indexProj = oilsProj.indexOf(name);
    if (indexProj > -1) {
        oilsProj.splice(indexProj, 1);
    }
    const indexRecoil = oilsRecoil.indexOf(name);
    if (indexRecoil > -1) {
        oilsRecoil.splice(indexRecoil, 1);
    }
    const indexReload = oilsReload.indexOf(name);
    if (indexReload > -1) {
        oilsReload.splice(indexReload, 1);
    }
    const indexRPM = oilsRPM.indexOf(name);
    if (indexRPM > -1) {
        oilsRPM.splice(indexRPM, 1);
    }
    const indexSpread = oilsSpread.indexOf(name);
    if (indexSpread > -1) {
        oilsSpread.splice(indexSpread, 1);
    }
}

function rollSelections(flag, selector, selID, value, type) {
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

    let selectedItem = null;
    let selectedValue = null;
    let selChamb = null;
    let selChambName = null;

    function setDefaultChamber(gun) {
        selChamb = getChamberByName(`Chamber Chisel - ${gun.AmmoType}`);
        selChambName = chamberNameIndexer.get(selChamb);
        addToCoreMap("chamber", selChamb, selChambName);
    }

    function rollEnch(value, flag) {
        switch (value) {
            case "static-no-selection":
                selectedItem = getOilByName("None");
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-choose":
                selectedItem = getOilByName("None");
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case null:
                selectedItem = getOilByName("None");
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "":
                selectedItem = getOilByName("None");
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-all-oils":
                shuffle(oilsAll);
                selectedItem = getOilByName(oilsAll[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-ammo-consume-chance":
                shuffle(oilsAmmo);
                selectedItem = getOilByName(oilsAmmo[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-base-crit-chance":
                shuffle(oilsCrit);
                selectedItem = getOilByName(oilsCrit[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-bullet-bounce":
                shuffle(oilsBounce);
                selectedItem = getOilByName(oilsBounce[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-bullet-speed":
               shuffle(oilsSpeed);
                selectedItem = getOilByName(oilsSpeed[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-add-damage":
                shuffle(oilsAddDam);
                selectedItem = getOilByName(oilsAddDam[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-mult-damage":
                shuffle(oilsMultDam);
                selectedItem = getOilByName(oilsMultDam[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-max-durability":
                shuffle(oilsDur);
                selectedItem = getOilByName(oilsDur[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-penetration":
                shuffle(oilsPen);
                selectedItem = getOilByName(oilsPen[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-projectiles":
                shuffle(oilsProj);
                selectedItem = getOilByName(oilsProj[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-recoil":
                shuffle(oilsRecoil);
                selectedItem = getOilByName(oilsRecoil[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-reload-speed":
               shuffle(oilsReload);
                selectedItem = getOilByName(oilsReload[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-rpm":
                shuffle(oilsRPM);
                selectedItem = getOilByName(oilsRPM[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-spread":
                shuffle(oilsSpread);
                selectedItem = getOilByName(oilsSpread[0]);
                selectedValue = convNameToVal(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-durability-loss-multiplier-+200%":
                selectedItem = getOilByName("Durability Loss Multiplier +200%");
                addToCoreMap(flag, selectedItem, value);
                break;
            case "static-durability-loss-multiplier-+350%":
                selectedItem = getOilByName("Durability Loss Multiplier +350%");
                addToCoreMap(flag, selectedItem, value);
                break;
            default:
                if (value.endsWith("oil") === true) {
                    let selItem = convertToUpper(value);
                    selectedItem = getOilByName(selItem);
                }
                if (value.startsWith("scroll") === true) {
                    let scroll = scrollValueIndexer.get(value);
                    selectedItem = getScrollByName(scroll);
                }
                addToCoreMap(flag, selectedItem, value);
        }
        poolRemover(selectedItem.Name);
    }

    function rollWeapon(value, flag) {
        switch (value) {
            case "random-all-weapons":
                shuffle(gunsAll);
                selectedItem = getWeaponByName(gunsAll[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-pistols":
                shuffle(gunsPistols);
                selectedItem = getWeaponByName(gunsPistols[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-revolvers":
                shuffle(gunsRevolvers);
                selectedItem = getWeaponByName(gunsRevolvers[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-shotguns":
                shuffle(gunsShotguns);
                selectedItem = getWeaponByName(gunsShotguns[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-smgs":
                shuffle(gunsSMGs);
                selectedItem = getWeaponByName(gunsSMGs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-assault-rifles":
                shuffle(gunsARs);
                selectedItem = getWeaponByName(gunsARs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-lmgs":
                shuffle(gunsLMGs);
                selectedItem = getWeaponByName(gunsLMGs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-rifles":
                shuffle(gunsRifles);
                selectedItem = getWeaponByName(gunsRifles[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-sniper-rifles":
                shuffle(gunsSnipers);
                selectedItem = getWeaponByName(gunsSnipers[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            default:
                let selectedGun = weaponValueIndexer.get(value);
                selectedItem = getWeaponByName(selectedGun);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, value);
        }
        
    }

    function rollAttachment(value, flag) {
        if (flag === "barrel") {
            console.log(flag, value)
            switch (value) {
                case "static-not-applicable":
                    selectedItem = getBarrelByName("None");
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-choose":
                    selectedItem = getBarrelByName("None");
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "none":
                    selectedItem = getBarrelByName("None");
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-random-barrel":
                    shuffle(attachmentsBarrels);
                    selectedItem = getBarrelByName(attachmentsBarrels[0]);
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                default:
                    let selbar = barrelValueIndexer.get(value);
                    selectedItem = getBarrelByName(selbar);
                    addToCoreMap(flag, selectedItem, value);
            }
        }
        if (flag === "optic") {
            switch (value) {
                case "static-choose":
                    selectedItem = getOpticByName("None");
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "none":
                    selectedItem = getOpticByName("None");
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-random-optic":
                    shuffle(attachmentsOptics);
                    selectedItem = getOpticByName(attachmentsOptics[0]);
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                default:
                    let seloptic = convertToUpper(value);
                    selectedItem = getOpticByName(seloptic);
                    addToCoreMap(flag, selectedItem, value);
            }
        }
        if (flag === "laser") {
            switch (value) {
                case "static-choose":
                    selectedItem = getLaserByName("None");
                    selectedValue = "none";
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "none":
                    selectedItem = getLaserByName("None");
                    selectedValue = "none";
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-random-laser":
                    shuffle(attachmentsLasers);
                    selectedItem = getLaserByName(attachmentsLasers[0]);
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                default:
                    let selaser = convertToUpper(value);
                    selectedItem = getLaserByName(selaser);
                    addToCoreMap(flag, selectedItem, value);
            }
        }
        if (flag === "firemode") {
            switch (value) {
                case "static-not-applicable":
                    selectedItem = getFiremodeByName("None");
                    selectedValue = "none";
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-choose":
                    selectedItem = getFiremodeByName("None");
                    selectedValue = "none";
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "none":
                    selectedItem = getFiremodeByName("None");
                    addToCoreMap(flag, selectedItem, "none")
                    break;
                default:
                    if (value === "gun-crank") {
                        selectedItem = getFiremodeByName("Gun Crank");
                    }
                    else {
                        selectedItem = getFiremodeByName("Priming Bolt");
                    }
                    addToCoreMap(flag, selectedItem, value);
            }
        }
        if (flag === "chamber") {
            let weapon = coreSelections.get("weapon");
            let weaponName = weapon.Name.Name;
            let weaponStats = getWeaponByName(weaponName);
            switch (value) {
                case "static-choose":
                    let weapCha = coreSelections.get("weapon");
                    let weapChaObj = weapCha.Name;
                    setDefaultChamber(weapChaObj);
                    break;
                case "none":
                    let weapCha1 = coreSelections.get("weapon");
                    let weapChaObj1 = weapCha1.Name;
                    setDefaultChamber(weapChaObj1);
                    break;
                case "static-random-chamber":
                    shuffle(attachmentsRechambers);
                    selectedItem = getChamberByName(attachmentsRechambers[0]);
                    selectedValue = convNameToVal(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                default:
                    console.log(value)
                    selectedItem = chamberValueIndexer.get(value);
                    selectedChamber = getChamberByName(selectedItem);
                    addToCoreMap(flag, selectedChamber, value);
            }
        }
    }

    switch (type) {
        case "ench":
            rollEnch(value, flag);
            break;
        case "attachment":
            rollAttachment(value, flag);
            break;
        case "weapon":
            rollWeapon(value, flag);
            break;
        default:
    }

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

const attachmentsLasers = [
    "Red",
    "Green",
    "Yellow"
];

const attachmentsFiremodes = [
    "Gun Crank",
    "Priming Bolt"
];

const attachmentsRechambers = [
    "Chamber Chisel - .50 BMG",
    "Chamber Chisel - 12Ga",
    "Chamber Chisel - 5.56mm",
    "Chamber Chisel - 7.62mm",
    "Chamber Chisel - 9mm"
];
function mobileDropdownCheck(evt) {
    let helloThere = "hello there";
    console.log("checking if mobile");
    if (window.mobileCheck() === true) {

        dropdownSelectHandler = document.getElementsByClassName('mobiledrop');
        customDropHandler = document.getElementsByClassName('custom-select');

        for (var i = 0; i < dropdownSelectHandler.length; i++) {
            if (dropdownSelectHandler[i] !== undefined) {
                dropdownSelectHandler[i].classList.remove("custom-dropdown");
                dropdownSelectHandler[i].classList.add("show");
            }
            
        }

        for (var i = 0; i < customDropHandler.length; i++) {
            customDropHandler[i].hidden = true;
        }
    }
    addAllEventListeners()
    console.log(helloThere);
}

const dropPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        mobileDropdownCheck();
    }, 500);
})
