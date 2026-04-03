//import html2canvas from 'html2canvas';

// friendly reminder to comment your shit cause you're a dumbass and won't remember what this macguyvered code does
// also ty stackoverflow

window.mobileCheck = function() {
    console.info("KBH: Checking for mobile device");
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function mobileCSS() {
    if (window.mobileCheck() === true) {
        console.log("mobile classes")
        document.getElementById("mainbuildcontainer").classList.remove("container");
        document.getElementById("mainbuildcontainer").classList.add("container-mobile");

        document.getElementById("targetme").classList.remove("build-card");
        document.getElementById("targetme").classList.add("build-card-mobile");

        document.getElementById("targetcontainer").classList.remove("target-container");
        document.getElementById("targetcontainer").classList.add("target-container-mobile");

        document.getElementById("bigbuttondiv1").classList.remove("bigbuttondiv");
        document.getElementById("bigbuttondiv1").classList.add("bigbuttondiv-mobile");

        document.getElementById("bigbuttondiv2").classList.remove("bigbuttondiv");
        document.getElementById("bigbuttondiv2").classList.add("bigbuttondiv-mobile");

        document.getElementById("containerweapon").classList.remove("containerweapon");
        document.getElementById("containerweapon").classList.add("containerweapon-mobile");

        document.getElementById("containerheaders").classList.remove("containerheaders");
        document.getElementById("containerheaders").classList.add("containerheaders-mobile");

        document.getElementById("containheadatt").classList.remove("containerheaders");
        document.getElementById("containheadatt").classList.add("containerheaders2-mobile");

        document.getElementById("containheadench").classList.remove("containerheaders");
        document.getElementById("containheadench").classList.add("containerheaders2-mobile");

        document.getElementById("targetsub").classList.remove("targetsub");
        document.getElementById("targetsub").classList.add("targetsub-mobile");
        
        document.getElementById("weaponstuffcontainer").classList.remove("weaponstuffcontainer");
        document.getElementById("weaponstuffcontainer").classList.add("weaponstuffcontainer-mobile");

        document.getElementById("extendedstatscontainer1").classList.remove("extendedstatscontainer");
        document.getElementById("extendedstatscontainer1").classList.add("extendedstatscontainer-mobile");

        document.getElementById("extendedstatscontainer2").classList.remove("extendedstatscontainer");
        document.getElementById("extendedstatscontainer2").classList.add("extendedstatscontainer-mobile");
        
        document.getElementById("extendstatgrid").classList.remove("extend-stat-grid");
        document.getElementById("extendstatgrid").classList.add("extend-stat-grid-mobile");

        document.getElementById("weapondiv").classList.remove("weapondiv");
        document.getElementById("weapondiv").classList.add("weapondiv-mobile");
        
        document.getElementById("tooltipboxdiv").classList.remove("tooltipboxdiv");
        document.getElementById("tooltipboxdiv").classList.add("tooltipboxdiv-mobile");

        document.getElementById("containerweapchoose").classList.remove("containerweapchoose");
        document.getElementById("containerweapchoose").classList.add("containerweapchoose-mobile");
        
        document.querySelectorAll(".buttonGeneral").forEach(e => {e.classList.add("buttonGeneral-mobile")});
        document.querySelectorAll(".buttonGeneral").forEach(e => {e.classList.remove("buttonGeneral")});

        document.getElementById("spacer").style.display = "none";

        document.querySelectorAll(".custom-select-selected").forEach(e => {e.style.height = "40px", e.style.fontSize = "2em", e.style.border = "0.1em solid black"});
        document.querySelectorAll(".custom-select").forEach(e => {e.style.height = "60px"});
        document.querySelectorAll(".oils").forEach(e => {e.style.fontSize = "1.5em"});
        document.querySelectorAll("h2").forEach(e => {e.style.fontSize = "2em"});
        document.querySelectorAll(".buttonCommitInd").forEach(e => {e.style.height = "40px", e.style.width = "40px"});

        document.querySelectorAll(".cardStat").forEach(e => {e.style.fontSize = "1.2em"});
    }
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

// Initiate item data

let dropdownReadyResolve;

const dropdownsReady = new Promise(res => {
    dropdownReadyResolve = res;
});

async function loadChamber() {
    const response = await fetch("./itemdata/Chamber.json");
    chamberData = await response.json();
    const response2 = await fetch("./itemdata/ChamberNoEn.json");
    chamberData2 = await response2.json();
    return chamberData2;
}

async function loadWeapons() {
    const response = await fetch("./itemdata/Weapons.json");
    weaponsData = await response.json();
    return weaponsData;
}

async function loadOrigWeapons() {
    const response = await fetch("./itemdata/OrigWeapons.json");
    weaponsOrigData = await response.json();
    return weaponsOrigData;
}

async function loadAttachments() {
    const response = await fetch("./itemdata/Attachments.json");
    attachmentsData = await response.json();
    return attachmentsData;

}
async function loadBarrels() {
    const response = await fetch("./itemdata/Barrels.json");
    barrelsData = await response.json();
    return barrelsData;
}
async function loadOptics() {
    const response = await fetch("./itemdata/Optics.json");
    opticsData = await response.json();
    return opticsData;
}
async function loadLasers() {
    const response = await fetch("./itemdata/Lasers.json");
    lasersData = await response.json();
    return lasersData;
}
async function loadFiremodes() {
    const response = await fetch("./itemdata/Firemodes.json");
    firemodesData = await response.json();
    return firemodesData;
}

async function loadOils() {
    const response = await fetch("./itemdata//Oils.json");
    oilsData = await response.json();
    
    return oilsData;
}

async function loadScrolls() {
    const response = await fetch("./itemdata/Scrolls.json");
    scrollsData = await response.json();
    return scrollsData;
}

async function loadOilsScrolls() {
    const response = await fetch("./itemdata/OilsScrolls.json");
    oilsScrollsData = await response.json();
    return oilsScrollsData;
}
/*
// Oils to dropdowns
//// By positive (default)
function normalizeOils(data) {
  return Object.entries(data.Oil)
    .filter(([key]) => !["none", "None", "Default"].includes(key))
    .map(([key, oil]) => ({
      id: key.toLowerCase().replace(/\s+/g, "-"),
      name: oil.Name,
      desc: oil.DropdownDescription || "",

      positive: oil.TypePositive1,
      negative: oil.TypeNegative1,

      raw: oil
    }));
}

function filterOils(oils, mode) {
  if (mode === "positive") {
    return oils.filter(o => o.positive && o.positive !== "None");
  }

  if (mode === "negative") {
    return oils.filter(o => o.negative && o.negative !== "None");
  }

  return oils;
}

function scoreOil(oil) {
  const o = oil.raw;
  let score = 0;

  // When positive is better
  if (o.DamageAdd) score += o.DamageAdd;
  if (o.DamageMult) score += o.DamageMult;
  if (o.RPM) score += o.RPM;
  if (o.ReloadSpeed) score += o.ReloadSpeed;
  if (o.Bounces) score += o.Bounces;
  if (o.BulletSpeed) score += o.BulletSpeed;
  if (o.BaseCritChance) score += o.BaseCritChance;
  if (o.JumpPower) score += o.JumpPower;
  if (o.LootDropChance) score += o.LootDropChance;
  if (o.MovementSpeedMult) score += o.MovementSpeedMult;
  if (o.Penetrations) score += o.Penetrations;
  if (o.ProjectileMult) score += o.ProjectileMult;
  if (o.BulletBounciness) score += o.BulletBounciness;
  if (o.MovingAccuracy) score += o.MovingAccuracy;
  if (o.BulletSize) score += o.BulletSize;
  if (o.RecoilAdd) score -= o.RecoilAdd;
  if (o.RecoilMult) score -= o.RecoilMult;
  if (o.SpreadAdd) score -= o.SpreadAdd;
  if (o.SpreadMult) score -= o.SpreadMult;
  if (o.AmmoConsumeChance) score -= o.AmmoConsumeChance;
  if (o.BulletDrop) score -= o.BulletDrop;
  if (o.ExtraAmmoUseChance) score -= o.ExtraAmmoUseChance;
  if (o.DurabilityMult) score -= o.DurabilityMult;
  if (o.Drag) score -= o.Drag;

  return score;
}

/*function scoreOil(oil) {
  const o = oil.raw;
  let score = 0;

  // GOOD when higher
  if (o.DamageAdd) score += o.DamageAdd * 2;
  if (o.DamageMult) score += o.DamageMult * 2;
  if (o.RPM) scorescore += o.RPM * 1.5;
  if (o.ReloadSpeed) score += o.ReloadSpeed * 1.2;
  if (o.MovementSpeedMult) score += o.MovementSpeedMult;
  if (o.BulletSpeed) score += o.BulletSpeed;
  if (o.BaseCritChance) score += o.BaseCritChance * 1.5;
  if (o.Bounces) score += o.Bounces;

  // GOOD when LOWER (so invert)
  if (o.RecoilAdd) score -= o.RecoilAdd * 2;
  if (o.RecoilMult) score -= o.RecoilMult * 2;
  if (o.SpreadAdd) score -= o.SpreadAdd * 2;
  if (o.SpreadMult) score -= o.SpreadMult * 2;
  if (o.BulletDrop) score -= o.BulletDrop;
  if (o.Drag) score -= o.Drag;
  if (o.ExtraAmmoUseChance) score -= o.ExtraAmmoUseChance;
  if (o.DurabilityMult) score -= o.DurabilityMult;

  // BAD stats (penalties)
  if (o.AmmoConsumeChance) score -= o.AmmoConsumeChance * 2;
  if (o.ExtraAmmoUseChance) score -= o.ExtraAmmoUseChance * 2;
  if (o.DurabilityMult) score -= o.DurabilityMult;

  return score;
}*/
/*
function sortOilsAdvanced(oils, sortMode) {
  switch (sortMode) {

    case "best":
      return oils.sort((a, b) => scoreOil(b) - scoreOil(a));

    case "alpha":
      return oils.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );

    case "type":
      return oils.sort((a, b) =>
        (a.positive || "").localeCompare(b.positive || "")
      );

    default:
      return oils;
  }
}

function groupByType(oils) {
  const groups = {};

  oils.forEach(oil => {
    const type = oil.type;

    if (!groups[type]) {
      groups[type] = [];
    }

    groups[type].push(oil);
  });

  return groups;
}

function buildSelectFromTypes(data, select, {
  filter = "positive" | "negative",
  sort = "best" | "alpha"
} = {}) {

  let oils = normalizeOils(data);

  oils = filterOils(oils, filter);

  oils = sortOilsAdvanced(oils, sort);

  const groups = groupByType(
    oils.map(o => ({
      ...o,
      type: filter === "negative" ? o.negative : o.positive
    }))
  );

  clearGenerated(select);

  Object.entries(groups).forEach(([type, oils]) => {

    const optgroup = document.createElement("optgroup");
    optgroup.label = type;
    optgroup.dataset.generated = "true";

    optgroup.appendChild(createOption({
      value: `static-random-${slug(type)}`,
      text: `Random ${type} Oil`
    }));

    oils.forEach(oil => {
      optgroup.appendChild(createOption({
        value: oil.id,
        text: `${oil.name} — [${stripHtml(oil.desc)}]`,
        attrs: {
            "data-positive": oil.positive || "",
            "data-negative": oil.negative || "",
            "data-score": scoreOil(oil)
        }
        }));
    });

    select.appendChild(optgroup);
  });
}

let currentFilter = "positive";
let currentSort = "best";

function rebuildDropdown(select, data) {
  buildSelectFromTypes(data, select, {
    filter: currentFilter,
    sort: currentSort
  });

  select.nextElementSibling?.remove();
  createProDropdown(select);
}

function sortOptionsWithPinnedRandom(options) {
  return options.sort((a, b) => {
    const aIsRandom = a.name?.startsWith("Random");
    const bIsRandom = b.name?.startsWith("Random");

    if (aIsRandom && !bIsRandom) return -1;
    if (!aIsRandom && bIsRandom) return 1;

    return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
  });
}

function sortOils(oils) {
  return oils.sort((a, b) => a.name.localeCompare(b.name));
}

function clearGenerated(select) {
  select.querySelectorAll('[data-generated="true"]').forEach(el => el.remove());
}

function createOption(opt) {
  const option = document.createElement("option");
  option.value = opt.value;
  option.textContent = opt.text;

  if (opt.attrs) {
    Object.entries(opt.attrs).forEach(([k, v]) => {
      if (v === true) option.setAttribute(k, "");
      else option.setAttribute(k, v);
    });
  }

  return option;
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || "";
}

function slug(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
/*
document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll("select.custom-dropdown")
        .forEach(createProDropdown);
});*/


document.addEventListener("DOMContentLoaded", () => {
    
    
    document
        .querySelectorAll("select.custom-dropdown")
        .forEach(select => {
            if (!select.nextElementSibling?.classList.contains("custom-select")) {
                createProDropdown(select);
            }
        });

    
    dropdownReadyResolve()
    rollOnPageLoad('weapon', 'pageload', 7, 'p38-dirk', 'weapon')
});
/*
async function createProDropdown(select) {
    const items = [];

    if (select.dataset.proInitialized) return;
select.dataset.proInitialized = "true";

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

function applyFilter() {
    search.dispatchEvent(new Event("input"));
}

function applySort() {

    const groups = list.querySelectorAll(".custom-group");

    groups.forEach(group => {

        // collect items in THIS group only
        let next = group.nextElementSibling;
        const groupItems = [];

        while (next && !next.classList.contains("custom-group")) {
            if (next.classList.contains("custom-option")) {
                groupItems.push(next);
            }
            next = next.nextElementSibling;
        }

        // sort items
        groupItems.sort((a, b) => {

            if (currentSort === "alpha") {
                return a.textContent.localeCompare(b.textContent);
            }

            if (currentSort === "best") {
                return (parseFloat(b.dataset.score) || 0) - (parseFloat(a.dataset.score) || 0);
            }

            return 0;
        });

        // reinsert AFTER the group header, in order
        groupItems.forEach(li => {
            group.parentNode.insertBefore(li, group.nextElementSibling);
        });

    });
}

function updateGroupVisibility() {

    list.querySelectorAll(".custom-group").forEach(group => {

        let next = group.nextElementSibling;
        let hasVisible = false;

        while (next && !next.classList.contains("custom-group")) {

            if (
                next.classList.contains("custom-option") &&
                !next.classList.contains("filter-hidden") &&
                !next.classList.contains("search-hidden")
            ) {
                hasVisible = true;
                break;
            }

            next = next.nextElementSibling;
        }

        group.classList.toggle("hidden-group-header", !hasVisible);
    });
}
function updateDropdownLive() {
    
    applyFilter();
    applySort();
    updateGroupVisibility();
}

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

        Object.assign(g.dataset, node.dataset);

        if (node.id)
            g.id = node.id;

        if (node.hidden)
            g.style.display = "none";

        g.dataset.label = node.label;

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

        const li = document.createElement("li");
        li.className = "custom-option";
        li.textContent = opt.text;

        li.dataset.dropdownId = dropdownId;
        li.dataset.value = opt.value;

        Object.assign(li.dataset, opt.dataset);

        if (opt.dataset.negative) li.dataset.negative = opt.dataset.negative;
        if (opt.dataset.score) li.dataset.score = opt.dataset.score;

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

// Opening groups in dropdown
function openGroup(groupEl) {

    groupEl.dataset.collapsed = "false";

    let next = groupEl.nextElementSibling;

    while (next && !next.classList.contains("custom-group")) {

        if (next.classList.contains("custom-option"))
            next.classList.remove("hidden-group");

        next = next.nextElementSibling;
    }
}

// closing groups in dropdown
function closeGroup(groupEl) {

    groupEl.dataset.collapsed = "true";

    let next = groupEl.nextElementSibling;

    while (next && !next.classList.contains("custom-group")) {

        if (next.classList.contains("custom-option"))
            next.classList.add("hidden-group");

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

    // Selecting

    function selectItem(opt) {

        select.value = opt.value;
        label.textContent = opt.text;

        wrapper.classList.remove("open");

        select.dispatchEvent(
            new Event("change", { bubbles:true })
        );
    }

    // Open Dropdown

    function resetSearch() {

        search.value = "";

        items.forEach(({ li, opt }) => {

            li.classList.remove("search-hidden");
            li.textContent = opt.text;

        });

        list.querySelectorAll(".custom-group").forEach(group => {

            group.classList.remove("hidden-group-header");

            if (group.dataset.collapsed === "true")
                closeGroup(group);
            else
                openGroup(group);

        });

    }

    selected.addEventListener("click", () => {

    if (wrapper.classList.contains("disabled")) return;

    wrapper.classList.toggle("open");

    if (wrapper.classList.contains("open")) {
        decideDirection();
        search.focus();
        scrollToSelected();
    }
});

    document.addEventListener("click", e => {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove("open");
            resetSearch();
        }
    });

    

    // Search

    function previewOpenGroup(groupEl) {

        let next = groupEl.nextElementSibling;

        while (next && !next.classList.contains("custom-group")) {

            if (next.classList.contains("custom-option"))
                next.classList.remove("hidden-group");

            next = next.nextElementSibling;
        }
    }

    search.addEventListener("input", () => {

        const term = search.value.toLowerCase();
        const groupsWithMatches = new Set();

        items.forEach(({ li, opt }) => {

            const text = opt.text;

            const matchesSearch = !term || text.toLowerCase().includes(term);

            const isPositive = li.dataset.positive && li.dataset.positive !== "None";
            const isNegative = li.dataset.negative && li.dataset.negative !== "None";

            let passesFilter = true;

            if (currentFilter === "positive") passesFilter = isPositive;
            if (currentFilter === "negative") passesFilter = isNegative;

            const visible = matchesSearch && passesFilter;

            li.classList.toggle("search-hidden", !visible);

            if (visible && term) {
                li.innerHTML = text.replace(
                    new RegExp(`(${term})`, "ig"),
                    "<mark>$1</mark>"
                );
            } else {
                li.textContent = text;
            }
        });

        list.querySelectorAll(".custom-group").forEach(group => {

    if (!term) return;

    let next = group.nextElementSibling;
    let hasVisible = false;

    while (next && !next.classList.contains("custom-group")) {

        if (
            next.classList.contains("custom-option") &&
            !next.classList.contains("search-hidden")
        ) {
            hasVisible = true;
            break;
        }

        next = next.nextElementSibling;
    }

    if (hasVisible) {
        group.classList.remove("hidden-group-header");
        previewOpenGroup(group)
    } else {
        group.classList.add("hidden-group-header");
    }

});

    });

    // Keyboard Shenanigans

    let highlightedIndex = -1;

search.addEventListener("keydown", e => {

    const visible = items.filter(({ li }) =>
        li.offsetParent !== null && !li.classList.contains("search-hidden")
    );

    if (!visible.length) return;

    if (e.key === "ArrowDown") {
        highlightedIndex = (highlightedIndex + 1) % visible.length;
        visible.forEach(({ li }) => li.classList.remove("highlight"));
        visible[highlightedIndex].li.classList.add("highlight");
        visible[highlightedIndex].li.scrollIntoView({ block: "nearest" });
        e.preventDefault();
    }

    if (e.key === "ArrowUp") {
        highlightedIndex = (highlightedIndex - 1 + visible.length) % visible.length;
        visible.forEach(({ li }) => li.classList.remove("highlight"));
        visible[highlightedIndex].li.classList.add("highlight");
        visible[highlightedIndex].li.scrollIntoView({ block: "nearest" });
        e.preventDefault();
    }

    if (e.key === "Enter" && highlightedIndex >= 0) {
        visible[highlightedIndex].li.click();
        highlightedIndex = -1;
    }

    if (e.key === "Escape") {
        wrapper.classList.remove("open");
        resetSearch();
    }
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

    wrapper.api = {
        getItems: () => items,
        refresh: () => search.dispatchEvent(new Event("input")),
        update: updateDropdownLive
    };

    // use:
    /* const dropdown = document.querySelector(".custom-select");
    document.querySelectorAll(".custom-select")
    .forEach(w => {
        const items = w.api.getItems();
    }); *//*
    updateDropdownLive();
    wrapper.updateDropdownLive = updateDropdownLive;
    wrapper._items = items;
}



function updateAllDropdowns() {
    
    
    document.querySelectorAll(".custom-select").forEach(w => {
        
        w.updateDropdownLive?.();
    });
}

function isPositive(oil) {
  return oil.TypePositive1 && oil.TypePositive1 !== "None";
}

function isNegative(oil) {
  return oil.TypeNegative1 && oil.TypeNegative1 !== "None";
}
*/

const coreSelections = new Map();

function resetCoreSelections() {
    console.info("KBH: Resetting core selections");
    coreSelections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    coreSelections.set("ench1", {Name: "None", Value: "none"});
    coreSelections.set("ench2", {Name: "None", Value: "none"});
    coreSelections.set("ench3", {Name: "None", Value: "none"});
    coreSelections.set("ench4", {Name: "None", Value: "none"});
    coreSelections.set("ench5", {Name: "None", Value: "none"});
    coreSelections.set("barrel", {Name: "None", Value: "none"});
    coreSelections.set("optic", {Name: "None", Value: "none"});
    coreSelections.set("laser", {Name: "None", Value: "none"});
    coreSelections.set("firemode", {Name: "None", Value: "none"});
    coreSelections.set("chamber", {Name: "None", Value: "none"});

    return;
}

const tempSelections = new Map();

function resetTempSelections() {
    console.info("KBH: Resetting temp selections");
    tempSelections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    tempSelections.set("ench1", {Name: "None", Value: "none"});
    tempSelections.set("ench2", {Name: "None", Value: "none"});
    tempSelections.set("ench3", {Name: "None", Value: "none"});
    tempSelections.set("ench4", {Name: "None", Value: "none"});
    tempSelections.set("ench5", {Name: "None", Value: "none"});
    tempSelections.set("barrel", {Name: "None", Value: "none"});
    tempSelections.set("optic", {Name: "None", Value: "none"});
    tempSelections.set("laser", {Name: "None", Value: "none"});
    tempSelections.set("firemode", {Name: "None", Value: "none"});
    tempSelections.set("chamber", {Name: "None", Value: "none"});
}

// Indexers //
//#region

// Optic Indexer

let barrelValueIndexer = new Map();

function setBarrelValueIndexer() {
    console.info("KBH: Setting barrel value indexer");
    barrelValueIndexer.set("none", "None");
    barrelValueIndexer.set("static-random-barrel", "Random Barrel");
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

let barrelNameIndexer = new Map();

function setBarrelNameIndexer() {
    console.info("KBH: Setting barrel name indexer");
    function addToWNI(value, key, map) {
        barrelNameIndexer.set(value, key);
    }

    barrelValueIndexer.forEach(addToWNI);  
    
}

// Optic Indexer
let opticValueIndexer = new Map();

function setOpticValueIndexer() {
    console.info("KBH: Setting optic value indexer");
    opticValueIndexer.set("none", "None");
    opticValueIndexer.set("static-random-optic", "Random Optic");
    opticValueIndexer.set("assault-scope", "Assault Scope");
    opticValueIndexer.set("compact-sight", "Compact Sight");
    opticValueIndexer.set("holographic-sight", "Holographic Sight");
    opticValueIndexer.set("hunting-scope", "Hunting Scope");
    opticValueIndexer.set("recon-scope", "Recon Scope");
    opticValueIndexer.set("reflex-sight", "Reflex Sight");
    opticValueIndexer.set("sniper-scope", "Sniper Scope");
}

let opticNameIndexer = new Map();

function setOpticNameIndexer() {
    console.info("KBH: Setting optic name indexer");
    function addToWNI(value, key, map) {
        opticNameIndexer.set(value, key);
    }

    opticValueIndexer.forEach(addToWNI);  
    
}

// Laser Indexer
let laserValueIndexer = new Map();

function setLaserValueIndexer() {
    console.info("KBH: Setting laser value indexer");
    laserValueIndexer.set("none", "None");
    laserValueIndexer.set("static-random-laser", "Random Laser");
    laserValueIndexer.set("red", "Red");
    laserValueIndexer.set("yellow", "Yellow");
    laserValueIndexer.set("green", "Green");
}

let laserNameIndexer = new Map();

function setLaserNameIndexer() {
    console.info("KBH: Setting laser name indexer");
    function addToWNI(value, key, map) {
        laserNameIndexer.set(value, key);
    }

    laserValueIndexer.forEach(addToWNI);  
    
}

// Firemode Indexer
let firemodeValueIndexer = new Map();

function setFiremodeValueIndexer() {
    console.info("KBH: Setting firemode value indexer");
    firemodeValueIndexer.set("none", "None");
    firemodeValueIndexer.set("gun-crank", "Gun Crank");
    firemodeValueIndexer.set("priming-bolt", "Priming Bolt");
}

let firemodeNameIndexer = new Map();

function setFiremodeNameIndexer() {
    console.info("KBH: Setting firemode name indexer");
    function addToWNI(value, key, map) {
        firemodeNameIndexer.set(value, key);
    }

    firemodeValueIndexer.forEach(addToWNI);  
    
}

// Chamber Indexer

let chamberValueIndexer = new Map();
let chamberNameIndexer = new Map();

function setChamberValueIndexer() {
console.info("KBH: Setting chamber value indexer");

    chamberValueIndexer.set("none", "None");
    chamberValueIndexer.set("static-random-chamber", "Random Chamber");
    chamberValueIndexer.set("chamber-chisel---.50-bmg", "Chamber Chisel - .50 BMG");
    chamberValueIndexer.set("chamber-chisel---12ga", "Chamber Chisel - 12Ga");
    chamberValueIndexer.set("chamber-chisel---5.56mm", "Chamber Chisel - 5.56mm");
    chamberValueIndexer.set("chamber-chisel---7.62mm", "Chamber Chisel - 7.62mm");
    chamberValueIndexer.set("chamber-chisel---9mm", "Chamber Chisel - 9mm");
    chamberValueIndexer.set("chamber-chisel---energy", "Chamber Chisel - Energy");

}

function setChamberNameIndexer() {
console.info("KBH: Setting chamber name indexer");
    chamberNameIndexer.set("None", "none");
    chamberNameIndexer.set("Random Chamber", "static-random-chamber");
    chamberNameIndexer.set("Chamber Chisel - .50 BMG", "chamber-chisel---.50-bmg");
    chamberNameIndexer.set("Chamber Chisel - 12Ga", "chamber-chisel---12ga");
    chamberNameIndexer.set("Chamber Chisel - 5.56mm", "chamber-chisel---5.56mm");
    chamberNameIndexer.set("Chamber Chisel - 7.62mm", "chamber-chisel---7.62mm");
    chamberNameIndexer.set("Chamber Chisel - 9mm", "chamber-chisel---9mm");
    chamberNameIndexer.set("Chamber Chisel - Energy", "chamber-chisel---energy");

}

// Weapon Indexer

const weaponValueIndexer = new Map();

function setWeaponValueIndexer() {
console.info("KBH: Setting weapon value indexer");
    weaponValueIndexer.set("none", "None");
    weaponValueIndexer.set("random-all-weapons", "Random Weapon");
    weaponValueIndexer.set("random-pistols", "Random Pistol");
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
    weaponValueIndexer.set("random-assault-rifles", "Random AR");
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
    weaponValueIndexer.set("random-sniper-rifles", "Random Sniper");
    weaponValueIndexer.set("d4rt", "D4RT");
    weaponValueIndexer.set("dolphin-99", "Dolphin 99");
    weaponValueIndexer.set("impala-gravita", "Impala Gravita");
    weaponValueIndexer.set("longboy", "Longboy");
    weaponValueIndexer.set("rokua-308", "Rokua .308");

}

const weaponNameIndexer = new Map();

function setWeaponNameIndexer() {
console.info("KBH: Setting weapon name indexer");
    function addToWNI(value, key, map) {
        weaponNameIndexer.set(value, key);
    }

    weaponValueIndexer.forEach(addToWNI);  
    
}

// Scroll Indexer

let scrollValueIndexer = new Map();

function setScrollValueIndexer() {
console.info("KBH: Setting scroll value indexer");

    scrollValueIndexer.set("none", "None");
    scrollValueIndexer.set("static-random-all-enchantments", "Random Enchantment");
    scrollValueIndexer.set("static-random-all-scrolls", "Random Scroll");
    scrollValueIndexer.set("static-random-scroll-t1", "Random T1 Scroll");
    scrollValueIndexer.set("static-random-scroll-t2", "Random T2 Scroll");
    scrollValueIndexer.set("scroll-of-dark", "Scroll of Dark");
    scrollValueIndexer.set("scroll-of-earth", "Scroll of Earth");
    scrollValueIndexer.set("scroll-of-embers", "Scroll of Embers");
    scrollValueIndexer.set("scroll-of-frostbite", "Scroll of Frostbite");
    scrollValueIndexer.set("scroll-of-light", "Scroll of Light");
    scrollValueIndexer.set("scroll-of-nature", "Scroll of Nature");
    scrollValueIndexer.set("scroll-of-plague", "Scroll of Plague");
    scrollValueIndexer.set("scroll-of-surge", "Scroll of Surge");
    scrollValueIndexer.set("scroll-of-water", "Scroll of Water");
    scrollValueIndexer.set("scroll-of-holy-fire", "Scroll of Holy Fire");
    scrollValueIndexer.set("scroll-of-aftershock", "Scroll of Aftershock");
    scrollValueIndexer.set("scroll-of-chain-lightning", "Scroll of Chain Lightning");
    scrollValueIndexer.set("scroll-of-chaos-strike", "Scroll of Chaos Strike");
    scrollValueIndexer.set("scroll-of-charm", "Scroll of Charm");
    scrollValueIndexer.set("scroll-of-corpse-explosion", "Scroll of Corpse Explosion");
    scrollValueIndexer.set("scroll-of-crusader", "Scroll of Crusader");
    scrollValueIndexer.set("scroll-of-explosions", "Scroll of Explosions");
    scrollValueIndexer.set("scroll-of-fear", "Scroll of Fear");
    scrollValueIndexer.set("scroll-of-flame-thrower", "Scroll of Flame Thrower");
    scrollValueIndexer.set("scroll-of-holy-purge", "Scroll of Holy Purge");
    scrollValueIndexer.set("scroll-of-lava", "Scroll of Lava");
    scrollValueIndexer.set("scroll-of-least-resistance", "Scroll of Least Resistance");
    scrollValueIndexer.set("scroll-of-noxiosa", "Scroll of Noxiosa");
    scrollValueIndexer.set("scroll-of-pesticide", "Scroll of Pesticide");
    scrollValueIndexer.set("scroll-of-petrification", "Scroll of Petrification");
    scrollValueIndexer.set("scroll-of-petroleum", "Scroll of Petroleum");
    scrollValueIndexer.set("scroll-of-poison-blood", "Scroll of Poison Blood");
    scrollValueIndexer.set("scroll-of-prism", "Scroll of Prism");
    scrollValueIndexer.set("scroll-of-rocket-launcher", "Scroll of Rocket Launcher");
    scrollValueIndexer.set("scroll-of-slush", "Scroll of Slush");
    scrollValueIndexer.set("scroll-of-sacrifice", "Scroll of Sacrifice");
    scrollValueIndexer.set("scroll-of-storm-surge", "Scroll of Storm Surge");
    scrollValueIndexer.set("scroll-of-thunderbolt", "Scroll of Thunderbolt");
    scrollValueIndexer.set("scroll-of-toxic-lobotomy", "Scroll of Toxic Lobotomy");
    scrollValueIndexer.set("scroll-of-voodoo", "Scroll of Voodoo");

}

let scrollNameIndexer = new Map();

function setScrollNameIndexer() {
console.info("KBH: Setting scroll name indexer");

    function addToWNI(value, key, map) {
        scrollNameIndexer.set(value, key);
    }

    scrollValueIndexer.forEach(addToWNI);  

}

//#endregion

resetCoreSelections();
resetTempSelections();
setChamberValueIndexer();
setChamberNameIndexer();
setBarrelValueIndexer();
setBarrelNameIndexer();
setOpticValueIndexer();
setOpticNameIndexer();
setLaserValueIndexer();
setLaserNameIndexer();
setFiremodeValueIndexer();
setFiremodeNameIndexer();
setWeaponValueIndexer();
setWeaponNameIndexer();
setScrollValueIndexer();
setScrollNameIndexer();

function fuzzyMatch(text, query) {
    text = text.toLowerCase();
    query = query.toLowerCase();

    let ti = 0, qi = 0;

    while (ti < text.length && qi < query.length) {
        if (text[ti] === query[qi]) qi++;
        ti++;
    }

    return qi === query.length;
}

async function createProDropdown(select) {

    const state = {
        open: false,
        value: select.value || null,
        search: "",
        options: [],
        filtered: [],
        sortMode: "default",
        groupMode: "positive"
    };

   

    // ===== LOAD DATA =====
    if (select.classList.contains("scroll-dropdown")) {
        const data = await loadOilsScrolls();
        loadScrolls();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("oil-dropdown")) {
        const data = await loadOils();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("weapon-dropdown")) {
        const data = await loadWeapons();
        loadOrigWeapons();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("barrel-dropdown")) {
        const data = await loadBarrels();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("optic-dropdown")) {
        const data = await loadOptics();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("laser-dropdown")) {
        const data = await loadLasers();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("firemode-dropdown")) {
        const data = await loadFiremodes();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("chamber-dropdown")) {
        const data = await loadChamber();
        state.options = normalizeOptions(data);
    }
    
    // ===== BUILD DOM =====
    const wrapper = document.createElement("div");
    wrapper.className = "custom-select";
    wrapper.id = (`${select.id}-custom`)

    let sortMode = select.dataset.sort || "default";

    const control = document.createElement("div");
    control.className = "custom-select-selected";
    control.id = (`${select.id}-custom-selected`)

    const display = document.createElement("span");

    const arrow = document.createElement("span");
    arrow.className = "custom-arrow";
    arrow.textContent = "▾";

    control.append(display, arrow);

    // dropdown panel
    const panel = document.createElement("div");
    if (window.mobileCheck() === true) {
        panel.className = "custom-select-panel-mobile";
    }
    else {
        panel.className = "custom-select-panel";
    }
    panel.id = (`${select.id}-custom-panel`);

    // build search stuff
    const searchInput = document.createElement("input");
    if (window.mobileCheck() === true) {
        searchInput.className = "select-mobile custom-select-search";
    }
    else {
        searchInput.className = "custom-select-search";
    }
    
    searchInput.placeholder = "Search...";
    searchInput.id = (`${select.id}-custom-search`)

    const searchX = document.createElement("button");
    if (window.mobileCheck() === true) {
        searchX.className = "custom-select-search-x-mobile";
        searchX.innerHTML = "<span style='font-size: 18px; display: flex' class='fa-solid fa-x'></span>";
    }
    else {
        searchX.className = "custom-select-search-x";
        searchX.innerHTML = "<span style='font-size: 12px; display: flex' class='fa-solid fa-x'></span>";
    }
    
    searchX.addEventListener("click", () => {
        state.search = "";
        searchInput.value = "";
        render();
    });

    const searchContainer = document.createElement("div");
    searchContainer.className = "custom-select-search-container";

    searchContainer.append(searchInput, searchX)

    // option list
    const list = document.createElement("div");
    if (window.mobileCheck() === true) {
        list.className = "custom-select-menu-mobile";
    }
    else {
        list.className = "custom-select-menu";
    }
    list.id = `${select.id}-custom-menu`;

    // top row buttons  
    const topRow = document.createElement("div");
    topRow.className = "custom-select-top-row";

    const topRowSort = document.createElement("div");
    topRowSort.className = "custom-select-top-row-sort";

    const topRowClose = document.createElement("div");
    topRowClose.className = "custom-select-top-row-close";

    // alphabetical button
    const buttonAlph = document.createElement("button");
    if (window.mobileCheck() === true) {
        buttonAlph.className = "custom-select-panel-button-mobile";
        buttonAlph.innerHTML = "<span class='fa-solid fa-arrow-down-a-z' style='font-size: 50px; display: flex; text-align: center; justify-content: center; width: auto; height: auto; margin-right: 20px; margin-left: 30px'></span>"; 
    }
    else {
        buttonAlph.className = "custom-select-panel-button";
        buttonAlph.innerHTML = "<span class='fa-solid fa-arrow-down-a-z' style='font-size: 15px; display: flex; text-align: center; justify-content: center; width: auto; height: auto'></span>";
    }
    
    buttonAlph.addEventListener("click", () => {
        filterChanger('default', select.id);
    });
    buttonAlph.addEventListener("mouseover", () => {
        infoboxHover('button', 0, '', 'Sorts alphabetically');
    });
    buttonAlph.addEventListener("mouseout", () => {
        infoboxClear();
    });

    // positive sort button
    const buttonPos = document.createElement("button");
    if (window.mobileCheck() === true) {
        buttonPos.className = "custom-select-panel-button-mobile";
        buttonPos.innerHTML = "<span class='fa-solid fa-arrow-down-9-1' style='font-size: 50px; display: flex; text-align: center; justify-content: center; width: auto; height: auto; margin-right: 20px; margin-left: 50px'></span>";
    }
    else {
        buttonPos.className = "custom-select-panel-button";
        buttonPos.innerHTML = "<span class='fa-solid fa-arrow-down-9-1' style='font-size: 15px; display: flex; text-align: center; justify-content: center; width: auto; height: auto'></span>";
    }
    
    buttonPos.addEventListener("click", () => {
        filterChanger('positive', select.id);
    });
    buttonPos.addEventListener("mouseover", () => {
        infoboxHover('button', 0, '', 'Sorts by positive stat amount');
    });
    buttonPos.addEventListener("mouseout", () => {
        infoboxClear();
    });

    // negative sort button
    const buttonNeg = document.createElement("button");
    
    if (window.mobileCheck() === true) {
        buttonNeg.className = "custom-select-panel-button-mobile";
        buttonNeg.innerHTML = "<span class='fa-solid fa-arrow-down-1-9' style='font-size: 50px; display: flex; text-align: center; justify-content: center; width: auto; height: auto; margin-right: 20px; margin-left: 70px'></span>";
    }
    else {
        buttonNeg.className = "custom-select-panel-button";
        buttonNeg.innerHTML = "<span class='fa-solid fa-arrow-down-1-9' style='font-size: 15px; display: flex; text-align: center; justify-content: center; width: auto; height: auto'></span>";
    }
    buttonNeg.addEventListener("click", () => {
        filterChanger('negative', select.id);
    });
    buttonNeg.addEventListener("mouseover", () => {
        infoboxHover('button', 0, '', 'Sorts by negative stat amount');
    });
    buttonNeg.addEventListener("mouseout", () => {
        infoboxClear();
    });

    // close dropdown button
    const buttonClose = document.createElement("button");
    if (window.mobileCheck() === true) {
        buttonClose.className = "custom-select-panel-close-mobile";
        buttonClose.innerHTML = "<span style='font-size: 50px; display: flex; margin-right: 30px;' class='fa-solid fa-xmark'></span>"
    }
    else {
        buttonClose.className = "custom-select-panel-close";
        buttonClose.innerHTML = "<span style='font-size: 20px; display: flex' class='fa-solid fa-xmark'></span>"
    }
    
    buttonClose.addEventListener("click", () => {
        close();
    });
    buttonClose.addEventListener("mouseover", () => {
        infoboxHover('button', 0, '', 'Close dropdown');
    });
    buttonClose.addEventListener("mouseout", () => {
        infoboxClear();
    });

    topRowSort.append(buttonAlph, buttonPos, buttonNeg);
    if (window.mobileCheck() === true) {
        const dropname = document.createElement("span");
        dropname.className = "custom-panel-name";
        let dropnamecheck = null;
        switch (select.id) {
            case "weapons":
                dropnamecheck = "Weapon";
                break;
            case "oils1selector":
                dropnamecheck = "Enchantment 1";
                break;
            case "oils2selector":
                dropnamecheck = "Enchantment 2";
                break;
            case "oils3selector":
                dropnamecheck = "Enchantment 3";
                break;
            case "oils4selector":
                dropnamecheck = "Enchantment 4";
                break;
            case "oils5selector":
                dropnamecheck = "Enchantment 5";
                break;
            case "barrelselector":
                dropnamecheck = "Barrel"
                break;
            case "opticselector":
                dropnamecheck = "Optic"
                break;
            case "laserselector":
                dropnamecheck = "Laser"
                break;
            case "firemodeselector":
                dropnamecheck = "Firemode"
                break;
            case "chamberselector":
                dropnamecheck = "Chamber"
                break;
            default:
        }
        dropname.innerHTML = dropnamecheck;
        topRowClose.append(dropname, buttonClose);
    }
    else {
        topRowClose.append(buttonClose);
    }
    topRow.append(topRowSort, topRowClose)
    panel.append(topRow, searchContainer, list);
    
    wrapper.append(control, panel);

    searchInput.addEventListener("focus", () => {
    if (wrapper.classList.contains("open"))
        decideDirection();
    });

    // Up or down
    function decideDirection() {
    console.log(wrapper)
        wrapper.classList.remove("drop-up");

        const rect = panel.getBoundingClientRect();
        const panelHeight = panel.offsetHeight || 320;

        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        if (spaceBelow < panelHeight && spaceAbove > panelHeight) {
            wrapper.classList.add("drop-up");
        }
    }

    select.style.position = "absolute";
    select.style.opacity = "0";
    select.style.pointerevents = "none";
    select.style.height = "0";
    select.insertAdjacentElement("afterend", wrapper);

    select.addEventListener("change", () => {
        state.value = select.value;
        render();
    });

    // ===== NORMALIZATION =====
    function normalizeOptions(data) {
        const results = [];

        if (data.OilScroll){
            const oilscrolls = data.OilScroll;

            function getName(item) {
                let value = null;
                if (item.startsWith("Scroll") || item.endsWith("Scroll")) {
                    value = scrollNameIndexer.get(item)
                }
                else if (item.endsWith("Oil")) {
                    value = oilNameIndexer.get(item)
                }
                else {
                    value = oilNameIndexer.get(item)
                }
                return value;
            }

            Object.entries(oilscrolls).forEach(([key, oilscroll]) => {

                if (!oilscroll.Name || ["none", "Default"].includes(oilscroll.Name)) return;

                let group = "Other";

                results.push({
                    label: oilscroll.Name,
                    value: getName(oilscroll.Name),
                    group: group,
                    meta: oilscroll
                });
            });
        }
        if (data.Oil){
            const oils = data.Oil;

            Object.entries(oils).forEach(([key, oil]) => {

                if (!oil.Name || ["none", "Default"].includes(oil.Name)) return;

                let group = "Other";

                results.push({
                    label: oil.Name,
                    value: oilNameIndexer.get(oil.Name),
                    group: group,
                    meta: oil
                });
            });
        }
        if (data.Weapon){
            const weapons = data.Weapon;

            Object.entries(weapons).forEach(([key, weapon]) => {

                if (!weapon.Name || ["Default"].includes(weapon.Name)) return;

                let group = weapon.Type || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: weapon.Name,
                    value: weaponNameIndexer.get(weapon.Name),
                    group: group,
                    meta: weapon
                });
            });
        }
        if (data.Barrel) {
            const barrels = data.Barrel;

            Object.entries(barrels).forEach(([key, barrel]) => {

                if (!barrel.Name || ["Default"].includes(barrel.Name)) return;

                let group = barrel.Type || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: barrel.Name,
                    value: barrelNameIndexer.get(barrel.Name),
                    group: group,
                    meta: barrel
                });
            });
        }
        if (data.Optic) {
            const optics = data.Optic;

            Object.entries(optics).forEach(([key, optic]) => {

                if (!optic.Name || ["Default"].includes(optic.Name)) return;

                let group = optic.Type || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: optic.Name,
                    value: opticNameIndexer.get(optic.Name),
                    group: group,
                    meta: optic
                });
            });
        }
        if (data.Laser) {
            const lasers = data.Laser;

            Object.entries(lasers).forEach(([key, laser]) => {

                if (!laser.Name || ["Default"].includes(laser.Name)) return;

                let group = laser.Type || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: laser.Name,
                    value: laserNameIndexer.get(laser.Name),
                    group: group,
                    meta: laser
                });
            });
        }
        if (data.Firemode) {
            const firemodes = data.Firemode;

            Object.entries(firemodes).forEach(([key, firemode]) => {

                if (!firemode.Name || ["Default"].includes(firemode.Name)) return;

                let group = firemode.Type || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: firemode.Name,
                    value: firemodeNameIndexer.get(firemode.Name),
                    group: group,
                    meta: firemode
                });
            });
        }
        if (data.Chamber) {
            const chambers = data.Chamber;

            Object.entries(chambers).forEach(([key, chamber]) => {

                if (!chamber.Name || ["Default"].includes(chamber.Name)) return;

                let group = chamber.Type || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: chamber.Name,
                    value: chamberNameIndexer.get(chamber.Name),
                    group: group,
                    meta: chamber
                });
            });
        }
    
        return results;
    }

    if (select.value) {
        state.value = select.value;
    } else if (state.options.length) {
        state.value = state.options[0].value;
    }

    const priorityGroups = [
        "General",
        "Scrolls - Tier 1",
        "Scrolls - Tier 2"
    ];

    const priorityOptions = new Set([
        "Random Weapon",
        "Random Pistol",
        "Random Revolver",
        "Random Shotgun",
        "Random SMG",
        "Random AR",
        "Random LMG",
        "Random Rifle",
        "Random Sniper",
        "Random Enchantment",
        "Random Oil",
        "Random Scroll",
        "Random T1 Scroll",
        "Random T2 Scroll",
        "Random Ammo Consume Chance Oil",
        "Random Base Crit Chance Oil",
        "Random Bullet Bounce Oil",
        "Random Bullet Speed Oil",
        "Random Damage - Flat Oil",
        "Random Damage - Mult Oil",
        "Random Max Durability Oil",
        "Random Penetration Oil",
        "Random Projectiles Oil",
        "Random Recoil Oil",
        "Random Reload Speed Oil",
        "Random RPM Oil",
        "Random Spread Oil",
        "Random Barrel",
        "Random Optic",
        "Random Laser",
        "Random Chamber",
        "None"
    ]);

    // ===== SORTING (EXTENSIBLE) =====
    const sorters = {
        default: (a, b) => a.label.localeCompare(b.label),
        scorepos: (a,b) => a.meta.ScorePos - b.meta.ScorePos,
        scoreneg: (a,b) => a.meta.ScoreNeg - b.meta.ScoreNeg
    };

    function applySort(options, sortMode) {
        const sorter = sorters[sortMode];

        return [...options].sort((a, b) => {
            const aPriority = priorityOptions.has(a.label);
            const bPriority = priorityOptions.has(b.label);

            if (aPriority && !bPriority) return -1;
            if (!aPriority && bPriority) return 1;

            return sorter ? sorter(a, b) : 0;
        });
    }

    // ===== FILTERING =====
    function applyFilter(options) {
        if (!state.search) return options;

        const s = state.search.toLowerCase();
        return options.filter(o =>
            o.label.toLowerCase().includes(s)
        );
    }

    // ===== GROUPING =====
    function groupOptions(options) {
        const groups = {};
        options.forEach(o => {
            let g;
            if (state.groupMode === "positive") {
                g = o.meta.TypePositive1;
            } else if (state.groupMode === "negative") {
                g = o.meta.TypeNegative1;
            } else {
                g = o.group; // fallback
            }

            if (!g || g === "None") g = "Other";
            if (!groups[g]) groups[g] = [];
            groups[g].push(o);
        });
        let groups2 = Object.fromEntries(Object.entries(groups).sort());
        return groups2;
    }

    function sortGroups(groups) {
        return Object.entries(groups).sort(([a], [b]) => {
            const aPriority = priorityGroups.includes(a);
            const bPriority = priorityGroups.includes(b);

            if (aPriority && !bPriority) return -1;
            if (!aPriority && bPriority) return 1;

            return a.localeCompare(b);
        });
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

// Opening groups in dropdown
function openGroup(groupEl) {

    groupEl.dataset.collapsed = "false";

    let next = groupEl.nextElementSibling;

    while (next && !next.classList.contains("custom-group")) {

        if (next.classList.contains("custom-option"))
            next.classList.remove("hidden-group");

        next = next.nextElementSibling;
    }
}

// closing groups in dropdown
function closeGroup(groupEl) {

    groupEl.dataset.collapsed = "true";

    let next = groupEl.nextElementSibling;

    while (next && !next.classList.contains("custom-group")) {

        if (next.classList.contains("custom-option"))
            next.classList.add("hidden-group");

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


    // ===== RENDER =====
    function render() {
        list.innerHTML = '';

        let opts = applySort(state.options, sortMode);
        opts = applyFilter(opts);
        state.filtered = opts;

        const groups = groupOptions(opts);

        sortGroups(groups).forEach(([groupName, items]) => {
            if (groupName !== "_") {
                const header = document.createElement("div");
                if (window.mobileCheck() === true) {
                    header.className = "group-font-size custom-group";
                }
                else {
                    header.className = "custom-group";
                }
                
                header.addEventListener("click", () => toggleGroup(header));;
                header.dataset.collapsible = select.dataset.collapsible === "false" ? "false" : "true";

                header.dataset.collapsed = select.dataset.collapsed ?? "true";

                Object.assign(header.dataset, select.dataset);

                if (header.dataset.collapsible === "true") {
                    if (header.dataset.collapsed === "true") {
                        closeGroup(header);
                    } else {
                        openGroup(header);
                    }
                }

                header.textContent = groupName;
                list.appendChild(header);
            }
            items.forEach(opt => {
                const el = document.createElement("div");
                el.className = "custom-option";
                el.dataset.value = opt.value;
                if (window.mobileCheck() === true) {
                    el.innerHTML = `
                    <div class="name-mobile">${opt.label}</div>
                    <div class="desc-mobile">${opt.meta.DropdownDescription}</div>
                    `;
                }
                else {
                    el.innerHTML = `
                    <div class="name">${opt.label}</div>
                    <div class="desc">${opt.meta.DropdownDescription}</div>
                    `;
                }

                if (opt.value === state.value) {
                    el.classList.add("selected");
                }

                list.appendChild(el);
            });
        });

        updateDisplay();

        list.querySelectorAll(".custom-group").forEach(header => {
            if (header.dataset.collapsible === "true" && header.textContent !== "Barrel" && header.textContent !== "Optic" && header.textContent !== "Laser" && header.textContent !== "Firemode" && header.textContent !== "Chamber" && header.textContent !== "General") {
                closeGroup(header);
    }
});
    }

    function populateNativeSelect() {
        select.innerHTML = '';

        const groups = {};

        state.options.forEach(o => {
            if (!groups[o.group]) groups[o.group] = [];
            groups[o.group].push(o);
        });

        sortGroups(groups).forEach(([group, items]) => {
            const optgroup = document.createElement("optgroup");
            optgroup.label = group;

            items.forEach(o => {
                const opt = document.createElement("option");
                opt.value = o.value;
                opt.textContent = o.label;

                if (o.value === state.value) {
                    opt.selected = true;
                }

                optgroup.appendChild(opt);
            });

            select.appendChild(optgroup);
        });
    }

    populateNativeSelect();

    function updateDisplay() {
        const selected = state.options.find(o => o.value === state.value);
        display.textContent = selected ? selected.label : "Select...";
    }

    // ===== OPEN / CLOSE =====
    function open() {
        if (state.open) return;
        state.open = true;
        wrapper.classList.add("open");
        searchInput.focus();
        render();
    }

    function close() {
        if (!state.open) return;
        state.open = false;
        wrapper.classList.remove("open");

        // reset search
        state.search = "";
        searchInput.value = "";
    }

    function toggle() {
        state.open ? close() : open();
    }

    // ===== VALUE API =====
    function setValue(val, silent = false) {
        state.value = val;
        select.value = val;
        

        if (true) {
            select.dispatchEvent(new Event("change", { bubbles: true }));
        }

        render();
    }

    function getValue() {
        return state.value;
    }

    // expose API
    select.getValue = getValue;
    select.setValue = setValue;
    select.updateDisplay = updateDisplay;
    select.render = render;
    select.setSortMode = setSortMode;
    select.setGroupMode = setGroupMode;
    
    function setSortMode(mode) {
        sortMode = mode;
        render();
    }

    function setGroupMode(mode) {
        state.groupMode = mode;
        render();
    }

    // ===== EVENTS =====

    // toggle
    control.addEventListener("click", (e) => {
        e.stopPropagation();
        toggle();
    });

    // click outside
    document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
            close();
        }
    }, true);

    // prevent panel clicks from closing
    panel.addEventListener("click", (e) => e.stopPropagation());

    // search
    searchInput.addEventListener("input", (e) => {
        state.search = e.target.value;
        console.log(e.target);
        render();
        list.querySelectorAll(".custom-group").forEach(header => {
            if (header.dataset.collapsible === "true" && header.textContent !== "Barrel" && header.textContent !== "Optic" && header.textContent !== "Laser" && header.textContent !== "Firemode" && header.textContent !== "Chamber" && header.textContent !== "General") {
                if (!state.search) {
                    closeGroup(header);
                }
                else {
                    openGroup(header);
                }
            }
            
        });
    });

    // OPTION CLICK (delegated)
    list.addEventListener("click", (e) => {
        const option = e.target.closest(".custom-option");
        if (!option) return;

        setValue(option.dataset.value);
        close();
    });

    // keyboard support (basic)
    control.addEventListener("keydown", (e) => {
        if (e.key === "Enter") toggle();
        if (e.key === "Escape") close();
    });

    // ===== INIT =====
    render();

    return {
        getValue,
        setValue,
        updateDisplay,
        open,
        close,
        render,
        setSortMode: (mode) => {
            sortMode = mode;
            render();
        },
        setGroupMode
    };
}

function scrollExtendedStats() {
    window.scrollTo({ top: 9999999, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Screenshots
function captureElement(activated) {
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

    document.getElementById("boxglowthing").classList.remove("boxglowthing");
    document.getElementById("otherboxthing").classList.remove("otherboxthing");
    document.getElementById("weaponimage").classList.remove("weaponimage");
    document.getElementById("weaponimage").classList.add("weaponimage2");

    document.getElementById("buttonTakeScreenshot").classList.remove("buttonCommitInd");
    document.getElementById("buttonCopyBuildLink").classList.remove("buttonCommitInd");
    document.getElementById("buttonLoadBuildLink").classList.remove("buttonCommitInd");
    document.getElementById("buttonTakeScreenshot").classList.add("buttonCommitInd2");
    document.getElementById("buttonCopyBuildLink").classList.add("buttonCommitInd2");
    document.getElementById("buttonLoadBuildLink").classList.add("buttonCommitInd2");

    document.getElementById("targetme").style.backgroundColor = "#2D424B";

    let screeny = null;
    const target = document.getElementById('targetme');
    infoboxHover("screenshot");
    // Use html2canvas to capture the element
    html2canvas(target, {
        imageTimeout: 200,
        allowTaint: true,
        windowWidth: target.scrollWidth,
        windowHeight: target.scrollHeight,
        useCORS: true,
                        scrollX: -window.scrollX,
                        scrollY: -window.scrollY
    }).then(canvas => {
        // Append the canvas to the page
        canvas.toBlob((blob) => {
            ///const cbi = new ClipboardItem({ 'image/png': blob });
            
            const cbi2 = new window.ClipboardItem({ 
                'image/png': blob,
            });
            if (activated == true ) {
                //navigator.clipboard.write([cbi]);
                navigator.clipboard.write([cbi2]);
            }
            screeny = blob;
        });
    });

    setTimeout(() => {
    document.getElementById("boxglowthing").classList.add("boxglowthing");
    document.getElementById("otherboxthing").classList.add("otherboxthing");
    document.getElementById("weaponimage").classList.add("weaponimage");
    document.getElementById("weaponimage").classList.remove("weaponimage2");
    document.getElementById("buttonTakeScreenshot").classList.remove("buttonCommitInd2");
    document.getElementById("buttonCopyBuildLink").classList.remove("buttonCommitInd2");
    document.getElementById("buttonLoadBuildLink").classList.remove("buttonCommitInd2");
    document.getElementById("buttonTakeScreenshot").classList.add("buttonCommitInd");
    document.getElementById("buttonCopyBuildLink").classList.add("buttonCommitInd");
    document.getElementById("buttonLoadBuildLink").classList.add("buttonCommitInd");
    }, 500);
}

const favoriteOils = new Set(
    JSON.parse(localStorage.getItem("favoriteOils") || "[]")
);

function saveFavorites() {
    localStorage.setItem("favoriteOils", JSON.stringify([...favoriteOils]));
}

let buildToEncode = null;

let buildBlocker = false;

function encodeBuildAsUri() {
    console.info("KBH: Encoding build as URI string and applying to URL");
    if (buildBlocker === true) {
        return;
    }
    else {
        buildToEncode = "build";
        function toBuild(value, key, map) {
            
            buildToEncode += value.Value;
            buildToEncode += "+";
        }
        coreSelections.forEach(toBuild);
        const encodedBuild = "#!" + encodeURIComponent(buildToEncode);
    // const decodedBuild = atob(encodedBuild);
        //   
            history.pushState(encodedBuild, "", encodedBuild);
            //YnVpbGR
            document.getElementById("linkbox").value = `https://verdictfps.github.io/kevins-build-helper/${encodedBuild}`;
    }
}

function setBuildAsMetadata() {
    console.info("KBH: Setting encoded string as site metadata");
    const encodedBuild = "#" + btoa(buildToEncode);

    let _desc = null;
    let descWep = coreSelections.get("weapon").Name.Name;
    let descEnch1 = coreSelections.get("ench1").Name.Name;
    let descEnch2 = coreSelections.get("ench2").Name.Name;
    let descEnch3 = coreSelections.get("ench3").Name.Name;
    let descEnch4 = coreSelections.get("ench4").Name.Name;
    let descEnch5 = coreSelections.get("ench5").Name.Name;
    let descBarrel= coreSelections.get("barrel").Name.Name;
    let descOptic = coreSelections.get("optic").Name.Name;
    let descLaser = coreSelections.get("laser").Name.Name;
    let descFiremode = coreSelections.get("firemode").Name.Name;
    let descChamber = coreSelections.get("chamber").Name.Name;

    _desc = "Weapon: " + descWep + "&#10;" + "Enchantment 1: " + descEnch1 + "&#10;" + "Enchantment 2: " + descEnch2 + "&#10;" + "Enchantment 3: " + descEnch3 + "&#10;" + "Enchantment 4: " + descEnch4 + "&#10;" + "Enchantment 5: " + descEnch5 + "&#10;" + "Barrel: " + descBarrel + "&#10;" + "Optic: " + descOptic + "&#10;" + "Laser: " + descLaser + "&#10;" + "Firemode: " + descFiremode + "&#10;" + "Chamber: " + descChamber; 

    document.querySelector('meta[property="og:description"]').setAttribute("content", _desc);
    //document.querySelector('meta[property="og:image"]').setAttribute("content", `.\\${encodedBuild}`);
}

/*var encryptedBuild = CryptoJS.AES.encrypt("Message", "Secret Passphrase");

var decryptedBuild = CryptoJS.AES.decrypt(encryptedBuild, "Secret Passphrase");

*/


function decodeUriAsBuild(source, link) {
    console.info("KBH: Decoding URL to detect build");
    buildBlocker = true;

    let currentURL = null;
    if (source === "load") {
        currentURL = link;
    }
    else {
        currentURL = window.location.href;
    }
    
    let split = currentURL.split("#!");
    let finalSplit = null;
    let iterationSplit = null;
    
    if (typeof split[1] === 'undefined') {
        console.info("KBH: No build found");
    }
    else {
        console.info("KBH: Build found. Loading...");
        let resplit = split[1]
        let decoded = decodeURIComponent(resplit);
        let split2 = decoded.split("build");
        finalSplit = split2[1].split("+");
        iterationSplit = 0
        
    }

    let defShantPass = false;
    setTimeout(() => {
    if (split[1].startsWith("build") === true && defShantPass === false ){
        defShantPass = true;
        

        function rebuildBuild(value, key, map) {
            tempSelections.set(key, finalSplit[iterationSplit]);
            
            
            iterationSplit += 1;
        }
        
        function grabOils(value, key, map) {

            let selectedItem = null;
            let scroll = null;
            let selItem = null;
            let select = null;

            switch (key) {
                case undefined:
                    break;
                default:
                    

                if (key.startsWith("ench")) {
                    if (value.endsWith("oil") === true || value === "none") {
                        selItem = convertToUpper(value);
                        selectedItem = getOilByName(selItem);
                        addToCoreMap(key, selectedItem, value);
                    }
                    if (value.startsWith("scroll") === true) {
                        scroll = scrollValueIndexer.get(value);
                        selectedItem = getScrollByName(scroll);
                        
                        addToCoreMap(key, selectedItem, value);
                    }
                    switch (key) {
                        case "ench1":
                            select = document.getElementById("oils1selector");
                            select.setValue(value);
                            break;
                        case "ench2":
                            select = document.getElementById("oils2selector");
                            select.setValue(value);
                            break;
                        case "ench3":
                            select = document.getElementById("oils3selector");
                            select.setValue(value);
                            break;
                        case "ench4":
                            select = document.getElementById("oils4selector");
                            select.setValue(value);
                            break;
                        case "ench5":
                            select = document.getElementById("oils5selector");
                            select.setValue(value);
                            break;
                        default:
                    }
                }
                if (key === "chamber") {
                    
                    if (value === undefined || value === "static-no-selection") {
                        value = "none";
                    }
                    selectedItem = chamberValueIndexer.get(value);
                    
                    selectedChamber = getChamberByName(selectedItem);
                    
                    addToCoreMap("chamber", selectedChamber, value);
                    select = document.getElementById("chamberselector");
                    select.setValue(value);
                }
                if (key === "barrel") {
                    let selbar = barrelValueIndexer.get(value);
                    selectedItem = getBarrelByName(selbar);
                    addToCoreMap("barrel", selectedItem, value);
                    select = document.getElementById("barrelselector");
                    select.setValue(value);
                }
                if (key === "laser") {
                    let selaser = convertToUpper(value);
                    selectedItem = getLaserByName(selaser);
                    addToCoreMap("laser", selectedItem, value);
                    select = document.getElementById("laserselector");
                    select.setValue(value);
                }
                if (key === "optic") {
                    let seloptic = convertToUpper(value);
                    selectedItem = getOpticByName(seloptic);
                    addToCoreMap("optic", selectedItem, value);
                    select = document.getElementById("opticselector");
                    select.setValue(value);
                }
                if (key === "firemode") {
                    if (value === "none") {
                        selectedItem = getFiremodeByName("None");
                        selectedValue = "none";
                        addToCoreMap("firemode", selectedItem, selectedValue);
                    }
                    else if (value === "gun-crank") {
                        selectedItem = getFiremodeByName("Gun Crank");
                        addToCoreMap("firemode", selectedItem, value);
                    }
                    else {
                        selectedItem = getFiremodeByName("Priming Bolt");
                        addToCoreMap("firemode", selectedItem, value);
                    }
                    select = document.getElementById("firemodeselector");
                    select.setValue(value);
                    
                }
            }
                    
        }
        
        
        coreSelections.forEach(rebuildBuild);
        let yeeteth = coreSelections.get("weapon");
        
        let gunny = weaponValueIndexer.get(yeeteth);
        let gunboog = getWeaponByName(gunny);
        
        addToCoreMap("weapon", gunboog, yeeteth);
        tempSelections.forEach(grabOils);

        /*let confirmBuild = true;
        
        function checkBuild(value, key, map) {
            let itemCheck = value.Name;
            if (itemCheck === undefined)
            {
                confirmBuild = false;
            }
        }

        tempSelections.forEach(checkBuild)

        if (confirmBuild === true) {
            function convertToCore(value, key, map) {
                addToTempMap(key, value.Name, value.Value);
            }
            tempSelections.forEach(convertToCore)
        }*/

        
        rollFromBuild();
        defShantPass = false;
    }
    }, 500);
    setTimeout(() => {
        buildBlocker = false;
    }, 1000);
}

// It's time to shuffle
function shuffle(array) {
    console.info("KBH: Shuffling", array);
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function copyBuildLink() {
    let copyObj = document.getElementById("linkbox");
    copyObj.select;
    copyObj.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyObj.value);
    infoboxHover('button', 0, 0, 'Link copied to clipboard')
}

function pasteBuildLink() {
    let pasteObj = document.getElementById("linkbox");
    let currentURL = window.location.href;
    let reg = /https:\/\/verdictfps\.github\.io\/kevins-build-helper\/[#][!]/;
        if (pasteObj.value !== currentURL && reg.test(pasteObj.value) == true) {
            decodeUriAsBuild("load", pasteObj.value)
            infoboxHover('loadsucceed')
        }
        else {
            infoboxHover('loadfail')
        }
}

function setAllAsRandom() {
    document.getElementById("weapons").setValue("random-all-weapons");
    rollAggregator('weapon', 'weapons', 1, "random-all-weapons", "weapon");
    randomizeAllAttachments();
    randomizeAllOils();
}

function commitAll() {
    commitSelection('weapon', 'weapons', 'weapon');
    commitAllEnch();
    commitAllAtt();
}

function resetAll() {
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("weapons").setValue("p38-dirk");

        rollAggregator('weapon', 'weapons', 1, "p38-dirk", "weapon");
        
        document.getElementById("oils1selector").setValue("static-no-selection");
        document.getElementById("oils2selector").setValue("static-no-selection");
        document.getElementById("oils3selector").setValue("static-no-selection");
        document.getElementById("oils4selector").setValue("static-no-selection");
        document.getElementById("oils5selector").setValue("static-no-selection");
        
        rollAggregator('ench1', 'oils1selector', 1, "static-no-selection", "ench");
        rollAggregator('ench2', 'oils2selector', 2, "static-no-selection", "ench");
        rollAggregator('ench3', 'oils3selector', 3, "static-no-selection", "ench");
        rollAggregator('ench4', 'oils4selector', 4, "static-no-selection", "ench");
        rollAggregator('ench5', 'oils5selector', 5, "static-no-selection", "ench");

        document.getElementById("barrelselector").setValue("none");
        document.getElementById("opticselector").setValue("none");
        document.getElementById("laserselector").setValue("none");
        document.getElementById("firemodeselector").setValue("none");
        document.getElementById("chamberselector").setValue("none");
        
        rollAggregator('barrel', 'barrelselector', 1, "none", "attachment");
        rollAggregator('optic', 'opticselector', 2, "none", "attachment");
        rollAggregator('laser', 'laserselector', 3, "none", "attachment");
        rollAggregator('firemode', 'firemodeselector', 4, "none", "attachment");
        rollAggregator('chamber', 'chamberselector', 5, "none", "attachment");
        shallNotPass = false;
    }
}

function commitGun() {
    if (shallNotPass === false) {
        shallNotPass = true;
        commitSelection('weapon', 'weapons', 'weapon');
        shallNotPass = false;
    }
}

function resetGun() {
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("weapons").setValue("p38-dirk");
        rollAggregator('weapon', 'weapons', 1, "p38-dirk", "weapon");
        shallNotPass = false;
    }
}

function randomizeGun() {
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("weapons").setValue("random-all-weapons");
        rollAggregator('weapon', 'weapons', 1, "random-all-weapons", "weapon");
        shallNotPass = false;
    }
}
/*
function zip_encode(str) {
    const ascii = encodeURIComponent(str)
    const array = new TextEncoder().encode(ascii)
    const zip = fflate.deflateSync(array, {level: 9})
    return window.btoa(String.fromCharCode(...zip))
}

function zip_decode(base64) {
    const raw = window.atob(base64)
    const array = Uint8Array.from(raw, c => c.charCodeAt(0))
    const unzip = fflate.inflateSync(array)
    const ascii = new TextDecoder().decode(unzip)
    return decodeURIComponent(ascii)
}

let zipencode = zip_encode("P38 Dirk");
let zipdecode = zip_decode(zipencode);

*/
let infoboxBlock = false;
function infoboxHover(elementType, value, name, data) {
    
    if (infoboxBlock === false) {
        infoboxBlock = true;
        document.getElementById("mainHeader").innerHTML = "";
        switch (elementType) {
            case "button":
                document.getElementById("infoboxText").innerHTML = data;
                infoboxBlock = false;
                break;
            case "option":
                break;
            case "stat":
                document.getElementById("infoboxText").innerHTML = data;
                infoboxBlock = false;
                break;
            case "dropdown":
                break;
            case "loadsucceed":
                document.getElementById("infoboxText").innerHTML = "<span style='font-size: 20px; color: yellow; text-shadow: 0px 0px 5px white'>Build loading...</span>";
                setTimeout(() => {
                    document.getElementById("infoboxText").innerHTML = "<span style='font-size: 20px; color: lightgreen; animation: goodlink 1s steps(4, end) 2; text-shadow: 0px 0px 5px green'>Build loaded</span>";
                    setTimeout(() => {
                        infoboxClear();
                        infoboxBlock = false;
                    },2000);
                },500);
                break;
            case "loadfail":
                document.getElementById("infoboxText").innerHTML = "<span style='font-size: 20px; color: red; animation: invalidlink 1s steps(4, end) 2; text-shadow: 0px 0px 5px red'>Invalid link</span>";
                setTimeout(() => {
                    infoboxClear();
                    infoboxBlock = false;
                },2000);
                break;
            default:
                infoboxBlock = false;
        }
    }
    else {}
}

function infoboxClear() {
    if (infoboxBlock === false) {
        document.getElementById("infoboxText").innerHTML = "";
        document.getElementById("mainHeader").innerHTML = "Kevin's Build Helper";
    }
}

function setSlot(key, selector, index, value, type) {
    
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById(selector).setValue(value);
        rollAggregator(key, selector, index, value, type);
        shallNotPass = false;
    }
}

function randomizeAllOils() {
    console.info("KBH: Randomizing all enchantment slots");
    if (shallNotPass === false) {
        shallNotPass = true;

        document.getElementById("oils1selector").setValue("static-random-all-enchantments");
        document.getElementById("oils2selector").setValue("static-random-all-oils");
        document.getElementById("oils3selector").setValue("static-random-all-oils");
        document.getElementById("oils4selector").setValue("static-random-all-oils");
        document.getElementById("oils5selector").setValue("static-random-all-oils");
        rollAggregator('ench1', 'oils1selector', 1, "static-random-all-enchantments", "ench");
        rollAggregator('ench2', 'oils2selector', 2, "static-random-all-oils", "ench");
        rollAggregator('ench3', 'oils3selector', 3, "static-random-all-oils", "ench");
        rollAggregator('ench4', 'oils4selector', 4, "static-random-all-oils", "ench");
        rollAggregator('ench5', 'oils5selector', 5, "static-random-all-oils", "ench");
        shallNotPass = false;

    }
}

function resetAllOils() {
    console.info("KBH: Resetting all enchantment slots");
    if (shallNotPass === false) {
        shallNotPass = true;

        document.getElementById("oils1selector").setValue("static-no-selection");
        document.getElementById("oils2selector").setValue("static-no-selection");
        document.getElementById("oils3selector").setValue("static-no-selection");
        document.getElementById("oils4selector").setValue("static-no-selection");
        document.getElementById("oils5selector").setValue("static-no-selection");
        
        rollAggregator('ench1', 'oils1selector', 1, "static-no-selection", "ench");
        rollAggregator('ench2', 'oils2selector', 2, "static-no-selection", "ench");
        rollAggregator('ench3', 'oils3selector', 3, "static-no-selection", "ench");
        rollAggregator('ench4', 'oils4selector', 4, "static-no-selection", "ench");
        rollAggregator('ench5', 'oils5selector', 5, "static-no-selection", "ench");
        shallNotPass = false;

    }
}

function randomizeAllAttachments() {
    console.info("KBH: Randomizing all attachment slots");
    if (shallNotPass === false) {
        shallNotPass = true;

        document.getElementById("barrelselector").setValue("static-random-barrel");
        document.getElementById("opticselector").setValue("static-random-optic");
        document.getElementById("laserselector").setValue("static-random-laser");
        document.getElementById("chamberselector").setValue("static-random-chamber");
        rollAggregator('barrel', 'barrelselector', 1, "static-random-barrel", "attachment");
        rollAggregator('optic', 'opticselector', 2, "static-random-optic", "attachment");
        rollAggregator('laser', 'laserselector', 3, "static-random-laser", "attachment");
        rollAggregator('chamber', 'chamberselector', 5, "static-random-chamber", "attachment");
        shallNotPass = false;

    }
}

function resetAllAttachments() {
console.info("KBH: Resetting all attachment slots");
    if (shallNotPass === false) {
        shallNotPass = true;

        document.getElementById("barrelselector").setValue("none");
        document.getElementById("opticselector").setValue("none");
        document.getElementById("laserselector").setValue("none");
        document.getElementById("firemodeselector").setValue("none");
        document.getElementById("chamberselector").setValue("none");
        
        rollAggregator('barrel', 'barrelselector', 1, "none", "attachment");
        rollAggregator('optic', 'opticselector', 2, "none", "attachment");
        rollAggregator('laser', 'laserselector', 3, "none", "attachment");
        rollAggregator('firemode', 'firemodeselector', 4, "none", "attachment");
        rollAggregator('chamber', 'chamberselector', 5, "none", "attachment");
        shallNotPass = false;

    }   
}

function commitSelection(buttonID, dropdownID, item) {
    console.info("KBH: Committing", item, "to", dropdownID);
    if (shallNotPass === false) {
        shallNotPass = true;

        let getValue = coreSelections.get(item);
        let value = getValue.Value; 
        document.getElementById(dropdownID).setValue(value);
        shallNotPass = false;

    }
}

function commitAllEnch() {
    console.info("KBH: Committing all enchantments to their respective slots");
    commitSelection('buttonCommitOil1', 'oils1selector', 'ench1');
    commitSelection('buttonCommitOil2', 'oils2selector', 'ench2');
    commitSelection('buttonCommitOil3', 'oils3selector', 'ench3');
    commitSelection('buttonCommitOil4', 'oils4selector', 'ench4');
    commitSelection('buttonCommitOil5', 'oils5selector', 'ench5');
}

function commitAllAtt() {
    console.info("KBH: Committing all attachments to their respective slots");
    commitSelection('buttonCommitBarrel', 'barrelselector', 'barrel');
    commitSelection('buttonCommitOptic', 'opticselector', 'optic');
    commitSelection('buttonCommitLaser', 'laserselector', 'laser');
    commitSelection('buttonCommitFiremode', 'firemodeselector', 'firemode');
    commitSelection('buttonCommitChamber', 'chamberselector', 'chamber');
}

// Used to remove and replace oils to prevent dupes
function oilRemover() {
console.info("KBH: Beginning oil filtering process");

    let altSelector1Options = document.getElementById("oils1selector").options;
    let altSelector2Options = document.getElementById("oils2selector").options;
    let altSelector3Options = document.getElementById("oils3selector").options;
    let altSelector4Options = document.getElementById("oils4selector").options;
    let altSelector5Options = document.getElementById("oils5selector").options;

    let oilsel1 = document.getElementById("oils1selector");
    let oilsel2 = document.getElementById("oils2selector");
    let oilsel3 = document.getElementById("oils3selector");
    let oilsel4 = document.getElementById("oils4selector");
    let oilsel5 = document.getElementById("oils5selector");

    function makeAllOilsVisible() {
        console.info("KBH: Making all oils visible");
        /*if (window.mobileCheck === false) {
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
        if (window.mobileCheck === true) {*/
            for (var i = 0; i < altSelector1Options.length; i++) {
                if (altSelector1Options[i].hidden === true) {
                    altSelector1Options[i].hidden = false;
                }
            }
            for (var i = 0; i < altSelector2Options.length; i++) {
                if (altSelector2Options[i].hidden === true) {
                    altSelector2Options[i].hidden = false;
                }
            }
            for (var i = 0; i < altSelector3Options.length; i++) {
                if (altSelector3Options[i].hidden === true) {
                    altSelector3Options[i].hidden = false;
                }
            }
            for (var i = 0; i < altSelector4Options.length; i++) {
                if (altSelector4Options[i].hidden === true) {
                    altSelector4Options[i].hidden = false;
                }
            }
            for (var i = 0; i < altSelector5Options.length; i++) {
                if (altSelector5Options[i].hidden === true) {
                    altSelector5Options[i].hidden = false;
                }
            }
        //}
    }

    function hideSelectedOils(value, key, map) {
        console.info("KBH: Hiding ", key, value);
        /*if (window.mobileCheck === false) {
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
        if (window.mobileCheck === true) {*/
            if (key.startsWith("ench")) {
                let compOilRep = value.Value;

                for (const value of altSelector1Options) {
                    if (value.value === compOilRep) {
                        value.hidden = true;
                    }
                }
                for (const value of altSelector2Options) {
                    if (value.value === compOilRep) {
                        value.hidden = true;
                    }
                }
                for (const value of altSelector3Options) {
                    if (value.value === compOilRep) {
                        value.hidden = true;
                    }
                }
                for (const value of altSelector4Options) {
                    if (value.value === compOilRep) {
                        value.hidden = true;
                    }
                }
                for (const value of altSelector5Options) {
                    if (value.value === compOilRep) {
                        value.hidden = true;
                    }
                }
            }
        //}
    }

    makeAllOilsVisible()

    coreSelections.forEach(hideSelectedOils)

    /*oilsel1.updateDisplay();
    oilsel2.updateDisplay();
    oilsel3.updateDisplay();
    oilsel4.updateDisplay();
    oilsel5.updateDisplay();*/

} 

function attachmentFilter(evt) {
console.info("KBH: Filtering attachments based on weapon selection");
    let selectorBarrel = document.getElementById("barrelselector");
    let selectorFiremode = document.getElementById("firemodeselector");
    let selectorChamber = document.getElementById("chamberselector");

    let dropdownWeapon = ((coreSelections.get("weapon")).Name); 
    
    document.getElementById("chamberselector-custom").classList.remove("disabled");
    document.getElementById("barrelselector-custom").classList.remove("disabled");
    document.getElementById("firemodeselector-custom").classList.remove("disabled");
    // Filter Firemodes

    let sFire = selectorFiremode.options;

    for (let i = 0; i < sFire.length; i++) {
        sFire[i].hidden = false;
    }

    switch (dropdownWeapon.Firemode) {
        case "Single":
            sFire[2].hidden = true;
            if (selectorFiremode.getValue() === "priming-bolt") {
                selectorFiremode.setValue("none");     
            };
            break;
        case "Auto":
            sFire[1].hidden = true;
            if (selectorFiremode.getValue() === "gun-crank") {
                selectorFiremode.setValue("none")
            }
            break;
        case "3-Round Burst":
            sFire[2].hidden = true;
            if (selectorFiremode.getValue() === "priming-bolt") {
                selectorFiremode.setValue("none");     
            };
            break;
        case "Static Single":
            document.getElementById("firemodeselector-custom").classList.add("disabled");
            selectorFiremode.setValue("static-not-applicable");
        default:
    }
    
    if (dropdownWeapon.AmmoType === "Energy") {
        selectorChamber.setValue("static-not-applicable");
        selectorBarrel.setValue("static-not-applicable");
        document.getElementById("chamberselector-custom").classList.add("disabled");
        document.getElementById("barrelselector-custom").classList.add("disabled");
    }

    if (document.getElementById("chamberselector-custom").classList.contains("disabled")) {
        selectorChamber.setValue("none");
        let cham = getChamberByName("Chamber Chisel - Energy");
        addToCoreMap("chamber", cham, "chamber-chisel---energy");
    }
    if (document.getElementById("barrelselector-custom").classList.contains("disabled")) {
        selectorBarrel.setValue("none");
        let bar = getBarrelByName("None");
        addToCoreMap("barrel", bar, "none");
    }
    if (document.getElementById("firemodeselector-custom").classList.contains("disabled")) {
        selectorFiremode.setValue("none");
        let fire = getFiremodeByName("None");
        addToCoreMap("firemode", fire, "none");
    }
}

function animationQueue(type, id) {
	switch (type) {
		case "scrollCardIn":
            document.getElementById(id).classList.remove();
			document.getElementById(id).classList.add();
			break;
        case "scrollCardOut":
            document.getElementById(id).classList.remove();
			document.getElementById(id).classList.add();
            break;
        case "oilCardSpin1":
            document.getElementById(id).classList.remove();
			document.getElementById(id).classList.add();
            break;
        case "oilCardSpin2":
            document.getElementById(id).classList.remove();
			document.getElementById(id).classList.add();
            break;
        case "oilCardSpin3":
            document.getElementById(id).classList.remove();
			document.getElementById(id).classList.add();
            break;
        case "oilCardSpin4":
            document.getElementById(id).classList.remove();
			document.getElementById(id).classList.add();
            break;
        case "oilCardSpin5":
            document.getElementById(id).classList.remove();
			document.getElementById(id).classList.add();
            break;
        default:
	}
}

//setTimeout(() => {
//  rollOnPageLoad('weapon', 'pageload', 7, 'p38-dirk', 'weapon');
//}, 150);

// For when the button is clicked.
function onGenerate() {
    rollAggregator("weapon", "weapons", 1, document.getElementById("weapons").getValue(), "weapon");
    rollAggregator("ench1", "oils1selector", 1, document.getElementById("oils1selector").getValue(), "ench");
    rollAggregator("ench2", "oils2selector", 2, document.getElementById("oils2selector").getValue(), "ench");
    rollAggregator("ench3", "oils3selector", 3, document.getElementById("oils3selector").getValue(), "ench");
    rollAggregator("ench4", "oils4selector", 4, document.getElementById("oils4selector").getValue(), "ench");
    rollAggregator("ench5", "oils5selector", 5, document.getElementById("oils5selector").getValue(), "ench");
    rollAggregator("barrel", "barrelselector", 1, document.getElementById("barrelselector").getValue(), "attachment");
    rollAggregator("optic", "opticselector", 2, document.getElementById("opticselector").getValue(), "attachment");
    rollAggregator("laser", "laserselector", 3, document.getElementById("laserselector").getValue(), "attachment");
    rollAggregator("firemode", "firemodeselector", 4, document.getElementById("firemodeselector").getValue(), "attachment");
    rollAggregator("chamber", "chamberselector", 5, document.getElementById("chamberselector").getValue(), "attachment");
}

function rerollRandomEnch(opt) {
    switch (opt) {
        case "ench1":
            rollAggregator("ench1", "oils1selector", 1, document.getElementById("oils1selector").getValue(), "ench");
            break;
        case "ench2":
            rollAggregator("ench2", "oils2selector", 2, document.getElementById("oils2selector").getValue(), "ench");
            break;
        case "ench3":
            rollAggregator("ench3", "oils3selector", 3, document.getElementById("oils3selector").getValue(), "ench");
            break;
        case "ench4":
            rollAggregator("ench4", "oils4selector", 4, document.getElementById("oils4selector").getValue(), "ench");
            break;
        case "ench5":
            rollAggregator("ench5", "oils5selector", 5, document.getElementById("oils5selector").getValue(), "ench");
            break;
        default:
    }
}

function rollFromBuild() {
    if (shallNotPass === false) {
        shallNotPass = true;

        commitSelection('', 'weapons', 'weapon');
        commitSelection('buttonCommitOil1', 'oils1selector', 'ench1');
        commitSelection('buttonCommitOil2', 'oils2selector', 'ench2');
        commitSelection('buttonCommitOil3', 'oils3selector', 'ench3');
        commitSelection('buttonCommitOil4', 'oils4selector', 'ench4');
        commitSelection('buttonCommitOil5', 'oils5selector', 'ench5');
        commitSelection('buttonCommitBarrel', 'barrelselector', 'barrel');
        commitSelection('buttonCommitOptic', 'opticselector', 'optic');
        commitSelection('buttonCommitLaser', 'laserselector', 'laser');
        commitSelection('buttonCommitFiremode', 'firemodeselector', 'firemode');
        commitSelection('buttonCommitChamber', 'chamberselector', 'chamber');
        rollAggregator("weapon", "weapons", 1, coreSelections.get("weapon").Value, "weapon");
        onGenerate()
        shallNotPass = false;

    }
}

function addAllEventListeners() {

    // Weapon onchange handler

    weaponSelectHandler = document.getElementById('weapons');
    weaponSelectHandler.addEventListener('change', rollOnSelect);
    weaponSelectHandler.flag = "weapon"
    weaponSelectHandler.selector = "weapons";
    weaponSelectHandler.selID = 1;
    weaponSelectHandler.selType = "weapon";
    

    // Enchantments onchange handlers

    ench1SelectHandler = document.getElementById('oils1selector');
    ench1SelectHandler.addEventListener('change', rollOnSelect);
    ench1SelectHandler.flag = "ench1"
    ench1SelectHandler.selector = "oils1selector";
    ench1SelectHandler.selID = 1;
    ench1SelectHandler.selType = "ench";

    ench2SelectHandler = document.getElementById('oils2selector');
    ench2SelectHandler.addEventListener('change', rollOnSelect);
    ench2SelectHandler.flag = "ench2"
    ench2SelectHandler.selector = "oils2selector";
    ench2SelectHandler.selID = 2;
    ench2SelectHandler.selType = "ench";

    ench3SelectHandler = document.getElementById('oils3selector');
    ench3SelectHandler.addEventListener('change', rollOnSelect);
    ench3SelectHandler.flag = "ench3"
    ench3SelectHandler.selector = "oils3selector";
    ench3SelectHandler.selID = 3;
    ench3SelectHandler.selType = "ench";

    ench4SelectHandler = document.getElementById('oils4selector');
    ench4SelectHandler.addEventListener('change', rollOnSelect);
    ench4SelectHandler.flag = "ench4"
    ench4SelectHandler.selector = "oils4selector";
    ench4SelectHandler.selID = 4;
    ench4SelectHandler.selType = "ench";

    ench5SelectHandler = document.getElementById('oils5selector');
    ench5SelectHandler.addEventListener('change', rollOnSelect);
    ench5SelectHandler.flag = "ench5"
    ench5SelectHandler.selector = "oils5selector";
    ench5SelectHandler.selID = 5;
    ench5SelectHandler.selType = "ench";

    // Attachments onchange handlers

    barrelSelectHandler = document.getElementById('barrelselector');
    barrelSelectHandler.addEventListener('change', rollOnSelect);
    barrelSelectHandler.flag = "barrel"
    barrelSelectHandler.selector = "barrelselector";
    barrelSelectHandler.selID = 1;
    barrelSelectHandler.selType = "attachment";

    opticSelectHandler = document.getElementById('opticselector');
    opticSelectHandler.addEventListener('change', rollOnSelect);
    opticSelectHandler.flag = "optic"
    opticSelectHandler.selector = "opticselector";
    opticSelectHandler.selID = 2;
    opticSelectHandler.selType = "attachment";

    laserSelectHandler = document.getElementById('laserselector');
    laserSelectHandler.addEventListener('change', rollOnSelect);
    laserSelectHandler.flag = "laser"
    laserSelectHandler.selector = "laserselector";
    laserSelectHandler.selID = 3;
    laserSelectHandler.selType = "attachment";

    firemodeSelectHandler = document.getElementById('firemodeselector');
    firemodeSelectHandler.addEventListener('change', rollOnSelect);
    firemodeSelectHandler.flag = "firemode"
    firemodeSelectHandler.selector = "firemodeselector";
    firemodeSelectHandler.selID = 4;
    firemodeSelectHandler.selType = "attachment";

    chamberSelectHandler = document.getElementById('chamberselector');
    chamberSelectHandler.addEventListener('change', rollOnSelect);
    chamberSelectHandler.flag = "chamber"
    chamberSelectHandler.selector = "chamberselector";
    chamberSelectHandler.selID = 5;
    chamberSelectHandler.selType = "attachment";

    // Buttons and fields

    linkboxHandler = document.getElementById('buttonLoadBuildLink');
    linkboxHandler.addEventListener('click', pasteBuildLink, false);




    // Animations

    // Mobile checks
    //dropdownSelectHandler = document.getElementsByClassName('custom-select');
    //for (var i = 0; i < dropdownSelectHandler.length; i++) {
    //   dropdownSelectHandler[i].addEventListener('click', mobileDropdownCheck, false);
    //}


}

function filterChanger(mode, selector) {
    let select = null;
    switch (mode) {
        case "default":
            select = document.getElementById(selector);
            select.setSortMode("default");
            select.render();
            break;
        case "positive":
            select = document.getElementById(selector);
            select.setSortMode("scorepos");
            select.setGroupMode("positive")
            select.render();
            break;
        case "negative":
            select = document.getElementById(selector);
            select.setSortMode("scoreneg");
            select.setGroupMode("negative")
            select.render();
            break;
    }
    
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
let linkboxHandler = document.getElementById('buttonLoadBuildLink');

let flag = null;
let selector = null;
let selID = null;
let selValue = null;
let selType = null;

let shallNotPass = false;


async function rollOnPageLoad(flag, selector, selID, value, type) {
    console.info("KBH: Beginning initial load");
    await dropdownsReady;
    setTimeout(() => {
        addAllEventListeners()
        let selPageLoad = document.getElementById("weapons");
        selPageLoad.setValue("value"); 

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
        mobileCSS();
    }, 500);
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

    let select = null;
    if (flag.startsWith("ench")) {
        console.log(flag, selValue)
        switch (flag) {
            case "ench1":
                select = document.getElementById("oils1selector");
                select.setValue(selValue);
                break;
            case "ench2":
                select = document.getElementById("oils2selector");
                select.setValue(selValue);
                break;
            case "ench3":
                select = document.getElementById("oils3selector");
                select.setValue(selValue);
                break;
            case "ench4":
                select = document.getElementById("oils4selector");
                select.setValue(selValue);
                break;
            case "ench5":
                select = document.getElementById("oils5selector");
                select.setValue(selValue);
                break;
            default:
        }
    }
    if (flag === "chamber") {
        
        if (selValue === undefined || selValue === "static-no-selection") {
            selValue = "none";
        }
        select = document.getElementById("chamberselector");
        select.setValue(selValue);
    }
    if (flag === "barrel") {
        select = document.getElementById("barrelselector");
        select.setValue(selValue);
    }
    if (flag === "laser") {
        select = document.getElementById("laserselector");
        select.setValue(selValue);
    }
    if (flag === "optic") {
        select = document.getElementById("opticselector");
        select.setValue(selValue);
    }
    if (flag === "firemode") {
        select = document.getElementById("firemodeselector");
        select.setValue(selValue);
    }
            

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
    scrollToTop();
    }, 430);
    
    setTimeout(() => {
    encodeBuildAsUri();
    setBuildAsMetadata();
    }, 730);
}

function rollOnSelect(evt) {
    if (evt.currentTarget.getValue() === "") {
        return;
    }
    else {
        if (shallNotPass === false) {
                shallNotPass = true;
        
        
                flag = evt.currentTarget.flag;
                selector = evt.currentTarget.selector;
                selID = evt.currentTarget.selID;
                selValue = evt.currentTarget.getValue()
                selType = evt.currentTarget.selType;

                rollAggregator(flag, selector, selID, selValue, selType);

                shallNotPass = false;
        
            }
            if (!(evt)) {

            }
    }
    
}

function addName() {

    function addCoreToCard(value, key, map) {
        let coreName = value.Name.Name;
        let coreVal = value.Value;
        switch (key) {
            case "weapon":
                let test = Math.floor(Math.random() * 200);
                document.getElementById("bydonk").hidden = true;
                if (test > 198) {
                    let weapReplace = coreName.replaceAll(" ", "_");
                    document.getElementById("weaponimage").src = `.\\Images\\Dead_Skrip.png`;
                    document.getElementById("cardWeaponName").textContent = coreName;
                    document.getElementById("bydonk").hidden = false;
                }
                else {
                    let weapReplace = coreName.replaceAll(" ", "_");
                    document.getElementById("weaponimage").src = `.\\Images\\Weapons\\${weapReplace}.png`;
                    document.getElementById("cardWeaponName").textContent = coreName;
                }
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


function percentConv(stat) {
    return stat *= 100;
}

function oilStats() {
    oilStatModifiers = structuredClone(oilDefault);

    function oilStatCalcs(selectedOil) {
        
        if (selectedOil === undefined) {
            return;
        }
        if (selectedOil.AmmoConsumeChance != 0.0 && selectedOil.AmmoConsumeChance !== undefined) {
            oilStatModifiers.AmmoConsumeChance += selectedOil.AmmoConsumeChance;
        }
        if (selectedOil.Bounces != 0 && selectedOil.Bounces !== undefined) {
            oilStatModifiers.Bounces += selectedOil.Bounces;
        }
        if (selectedOil.BulletDrop != 0 && selectedOil.BulletDrop !== undefined) {
            oilStatModifiers.BulletDrop += selectedOil.BulletDrop;
        }
        if (selectedOil.BulletSpeed != 0 && selectedOil.BulletSpeed !== undefined) {
            oilStatModifiers.BulletSpeed += selectedOil.BulletSpeed;
        }
        if (selectedOil.ExtraAmmoUseChance != 0 && selectedOil.ExtraAmmoUseChance !== undefined) {
            oilStatModifiers.ExtraAmmoUseChance += selectedOil.ExtraAmmoUseChance;
        }
        if (selectedOil.BaseCritChance != 0 && selectedOil.BaseCritChance !== undefined) {
            oilStatModifiers.BaseCritChance += selectedOil.BaseCritChance;
        }
        if (selectedOil.DamageAdd != 0 && selectedOil.DamageAdd !== undefined) {
            oilStatModifiers.DamageAdd += selectedOil.DamageAdd;
        }
        if (selectedOil.DamageMult != 0 && selectedOil.DamageMult !== undefined) {
            oilStatModifiers.DamageMult += selectedOil.DamageMult;
        }
        if (selectedOil.CanADS != "Yes" && selectedOil.CanADS !== undefined) {
            oilStatModifiers.CanADS = selectedOil.CanADS;
        }
        if (selectedOil.JumpPower != 0 && selectedOil.JumpPower !== undefined) {
            oilStatModifiers.JumpPower += selectedOil.JumpPower;
        }
        if (selectedOil.LootDropChance != 0 && selectedOil.LootDropChance !== undefined) {
            oilStatModifiers.LootDropChance += selectedOil.LootDropChance;
        }
        if (selectedOil.DurabilityMult != 0 && selectedOil.DurabilityMult !== undefined) {
            oilStatModifiers.DurabilityMult += selectedOil.DurabilityMult;
        }
        if (selectedOil.MovementSpeedMult != 0 && selectedOil.MovementSpeedMult !== undefined) {
            oilStatModifiers.MovementSpeedMult += selectedOil.MovementSpeedMult;
        }
        if (selectedOil.MoneyDrops != "Yes" && selectedOil.MoneyDrops !== undefined) {
            oilStatModifiers.MoneyDrops = selectedOil.MoneyDrops;
        }
        if (selectedOil.OrganDrops != "Yes" && selectedOil.OrganDrops !== undefined) {
            oilStatModifiers.OrganDrops = selectedOil.OrganDrops;
        }
        if (selectedOil.Penetrations != 0 && selectedOil.Penetrations !== undefined) {
            oilStatModifiers.Penetrations += selectedOil.Penetrations;
        }
        if (selectedOil.ProjectileMult != 0 && selectedOil.ProjectileMult !== undefined) {
            oilStatModifiers.ProjectileMult += selectedOil.ProjectileMult;
        }
        if (selectedOil.RPM != 0 && selectedOil.RPM !== undefined) {
            oilStatModifiers.RPM += selectedOil.RPM;
        }
        if (selectedOil.RecoilAdd != 0 && selectedOil.RecoilAdd !== undefined) {
            oilStatModifiers.RecoilAdd += selectedOil.RecoilAdd;
        }
        if (selectedOil.RecoilMult != 0 && selectedOil.RecoilMult !== undefined) {
            oilStatModifiers.RecoilMult += selectedOil.RecoilMult;
        }
        if (selectedOil.ReloadSpeed != 0 && selectedOil.ReloadSpeed !== undefined) {
            oilStatModifiers.ReloadSpeed += selectedOil.ReloadSpeed;
        }
        if (selectedOil.SpreadAdd != 0 && selectedOil.SpreadAdd !== undefined) {
            oilStatModifiers.SpreadAdd += selectedOil.SpreadAdd;
        }
        if (selectedOil.SpreadMult != 0 && selectedOil.SpreadMult !== undefined) {
            oilStatModifiers.SpreadMult += selectedOil.SpreadMult;
        }
        if (selectedOil.Drag != 0 && selectedOil.Drag !== undefined) {
            oilStatModifiers.Drag += selectedOil.Drag;
        }
        if (selectedOil.DurabilityUsage != 0 && selectedOil.DurabilityUsage !== undefined) {
            oilStatModifiers.DurabilityUsage += selectedOil.DurabilityUsage;
        }
        if (selectedOil.BulletBounciness != 0 && selectedOil.BulletBounciness !== undefined) {
            oilStatModifiers.BulletBounciness += selectedOil.BulletBounciness;
        }
        if (selectedOil.MovingAccuracy != 0 && selectedOil.MovingAccuracy !== undefined) {
            oilStatModifiers.MovingAccuracy += selectedOil.MovingAccuracy;
        }
        if (selectedOil.DurLossMult != 0 && selectedOil.DurLossMult !== undefined) {
            oilStatModifiers.DurLossMult += selectedOil.DurLossMult;
        }
        if (selectedOil.ADSCritChance != 0 && selectedOil.ADSCritChance !== undefined) {
            oilStatModifiers.ADSCritChance += selectedOil.ADSCritChance;
        }
        if (selectedOil.Firemode !== 'None' && selectedOil.Firemode !== undefined) {
            oilStatModifiers.Firemode = selectedOil.Firemode;
        }
        if (selectedOil.BulletSize !== 0 && selectedOil.Firemode !== undefined) {
            oilStatModifiers.Firemode = selectedOil.Firemode;
        }
        if (selectedOil.RPMBaseShift !== 0 && selectedOil.RPMBaseShift !== undefined) {
            oilStatModifiers.RPMBaseShift = selectedOil.RPMBaseShift;
        }
        if (selectedOil.IsRailgun !== false && selectedOil.IsRailgun !== undefined) {
            oilStatModifiers.IsRailgun = selectedOil.IsRailgun;
        }
        if (selectedOil.HeadshotDamage !== 0 && selectedOil.HeadshotDamage !== undefined) {
            oilStatModifiers.HeadshotDamage = selectedOil.HeadshotDamage;
        }
        if (selectedOil.ScrollField !== "None" && selectedOil.ScrollField !== undefined) {
            
            oilStatModifiers.ScrollField = selectedOil.ScrollField;
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

    weapon.Damage = weapon.DamageMultiplier * chamber.Damage;
    weapon.AmmoType = chamber.AmmoType;
    weapon.Projectiles = chamber.Projectiles;
   
    weaponOriginal.Damage = weaponOriginal.DamageMultiplier * weaponOriginalChamber.Damage;
    weaponOriginal.AmmoType = weaponOriginalChamber.AmmoType;
    weaponOriginal.Projectiles = weaponOriginalChamber.Projectiles;

    if (weapon.Name === "Augusta") {
        weapon.Projectiles = 3;
        weaponOriginal.Projectiles = 3;
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

    //////////////////////
    //// Scroll Cards ////
    //////////////////////

    let scrollDefaultCard = document.getElementById("scrollinfodefault");

    document.getElementById("scrollinfoholyfire").style.display = "none";
    document.getElementById("scrollinfotoxic").style.display = "none";
    document.getElementById("scrollinfodark").style.display = "none";
    document.getElementById("scrollinfoembers").style.display = "none";
    document.getElementById("scrollinfoearth").style.display = "none";
    document.getElementById("scrollinfofrostbite").style.display = "none";
    document.getElementById("scrollinfolight").style.display = "none";
    document.getElementById("scrollinfonature").style.display = "none";
    document.getElementById("scrollinfoplague").style.display = "none";
    document.getElementById("scrollinfosurge").style.display = "none";
    document.getElementById("scrollinfowater").style.display = "none";
    document.getElementById("scrollinfoaftershock").style.display = "none";
    document.getElementById("scrollinfochain").style.display = "none";
    document.getElementById("scrollinfochaos").style.display = "none";
    document.getElementById("scrollinfocharm").style.display = "none";
    document.getElementById("scrollinfocorpse").style.display = "none";
    document.getElementById("scrollinfocrusader").style.display = "none";
    document.getElementById("scrollinfoexplosions").style.display = "none";
    document.getElementById("scrollinfofear").style.display = "none";
    document.getElementById("scrollinfoflamethrower").style.display = "none";
    document.getElementById("scrollinfopesticide").style.display = "none";
    document.getElementById("scrollinfoholypurge").style.display = "none";
    document.getElementById("scrollinfolava").style.display = "none";
    document.getElementById("scrollinfoleast").style.display = "none";
    document.getElementById("scrollinfonoxiosa").style.display = "none";
    document.getElementById("scrollinfopetrification").style.display = "none";
    document.getElementById("scrollinfopetroleum").style.display = "none";
    document.getElementById("scrollinfopoisonblood").style.display = "none";
    document.getElementById("scrollinfoprism").style.display = "none";
    document.getElementById("scrollinforocket").style.display = "none";
    document.getElementById("scrollinfoslush").style.display = "none";
    document.getElementById("scrollinfosacrifice").style.display = "none";
    document.getElementById("scrollinfostormsurge").style.display = "none";
    document.getElementById("scrollinfothunderbolt").style.display = "none";
    document.getElementById("scrollinfovoodoo").style.display = "none";

    function animateScrollCard(id) {
        
        if (id === undefined) {
            scrollDefaultCard.classList.remove("scrollcardanimate");
            setTimeout(() => {
                scrollDefaultCard.classList.add("scrollcardanimate");
            }, 50);
            scrollDefaultCard.style.display = "flex";
        }
        else if (id === "None") {
            scrollDefaultCard.classList.remove("scrollcardanimate");
            setTimeout(() => {
                scrollDefaultCard.classList.add("scrollcardanimate");
            }, 50);
            scrollDefaultCard.style.display = "flex";
        }
        else {
            document.getElementById(id).classList.remove("scrollcardanimate");
            setTimeout(() => {
                document.getElementById(id).classList.add("scrollcardanimate");
            }, 50);
            scrollDefaultCard.style.display = "none";
            document.getElementById(id).style.display = "flex";
        }
    }
    
    animateScrollCard(calcOil.ScrollField);

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
    if (ammoCalc < 0.01) {
        ammoCalc = 0;
    }
    let ammoConv = percentConv(ammoCalc);
    
    let ammoRound = Math.round((ammoConv + Number.EPSILON)* 100) / 100;

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

    //////////////////
    //// Mag Size ////
    //////////////////

    document.getElementById("cardMagSize").textContent = weapon.MagSize;

    let ammoEff = null;
    let extraEff = null;
    

    if (ammoCalc < 0.01) {
        ammoEff = 0;
        
    }
    else
    {
        ammoEff = ammoCalc;
    }

    if (extraCalc > 1) {
        extraEff = 1;
    }
    else {
        extraEff = extraCalc;
    }

    let effMagSize = weapon.MagSize / (ammoEff * (1 + extraEff));

    if (ammoEff === 0) {
        effMagSize = Infinity;
    }
    

    let effRound = Math.round((effMagSize + Number.EPSILON)* 100) / 100;

    document.getElementById("cardEffMagSize").textContent = effRound;

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
    document.getElementById("dropmeters").textContent = "";

    weapon.BulletDrop += calcOil.BulletDrop;

    if (weapon.BulletDrop > 0) {
        if (calcOil.ScrollField !== "scrollinforocket") {
            let dropMeters =  (105 / (Math.log(weapon.BulletDrop)) - 20);
            let dropMeterRound = Math.round((dropMeters + Number.EPSILON)* 100) / 100;
            document.getElementById("dropmeters").textContent = `approx. ${dropMeterRound}m`;
            document.getElementById("dropimage").src = "./Images/bullet_drop_pos.png";
        }
        document.getElementById("cardDrop").textContent = weapon.BulletDrop;
        document.getElementById("cardDrop").style.color = "OrangeRed";
        document.getElementById("cardDropArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
        document.getElementById("cardDropArrow").style.color = "OrangeRed";
        document.getElementById("cardDropLBrac").textContent = "(";
        document.getElementById("cardDropComp").textContent = "0";
        document.getElementById("cardDropRBrac").textContent = ")";
    }
    if (weapon.BulletDrop == 0) {
        document.getElementById("dropimage").src = "./Images/bullet_drop_0.png";
       document.getElementById("cardDrop").textContent = "0";
       document.getElementById("dropmeters").textContent = "-";
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
    document.getElementById("cardDamageScroll").textContent = "";

    document.getElementById("cardDamageTotal").textContent = "";
    document.getElementById("cardDamageTotalScroll").textContent = "";
    document.getElementById("cardDamageTotal").style.color = "";
    document.getElementById("cardDamageTotalArrow").innerHTML = "";
    document.getElementById("cardDamageTotalArrow").style.color = "";
    document.getElementById("cardDamageTotalLRArrow").innerHTML = "";
    document.getElementById("cardDamageTotalLBrac").textContent = "";
    document.getElementById("cardDamageTotalComp").textContent = "";
    document.getElementById("cardDamageTotalRBrac").textContent = "";

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

    //// Scrolls
    let scrollDam = 0;
    let damComp = 0;
    let totalComp = 0;
    let scrollMult = 0;

    switch (calcOil.ScrollField) {
        case "scrollinfoembers":
            scrollDam = 10;
            break;
        case "scrollinfoexplosions":
            scrollDam = 25;
            break;
        case "scrollinforocket":
            scrollDam = 50;
        case "scrollinfochaos":
            scrollDam = 125 / weapProj;
            break;
        default:
    }

    scrollMult = weapProj * scrollDam * weapon.MultiShot;
    damComp = damRound + scrollDam;
    totalComp = totalRound + scrollMult;

    if (scrollDam !== 0) {
        document.getElementById("cardDamageScroll").textContent = ` (+${scrollDam})`;
        document.getElementById("cardDamageTotalScroll").textContent = ` (+${scrollMult})`;
    }
    ////// Damage & Projectiles card addition
    if (damComp < weaponOriginal.Damage) {

        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageArrow").style.color = "OrangeRed";
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
    if (damComp > weaponOriginal.Damage) {
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
    if (damComp === weaponOriginal.Damage) {
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

    if (totalComp > weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = totalRound;
            document.getElementById("cardDamageTotal").style.color = "Lime";
            document.getElementById("cardDamageTotalArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageTotalArrow").style.color = "Lime";
            document.getElementById("cardDamageTotalLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (totalComp < weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = totalRound;
            document.getElementById("cardDamageTotal").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageTotalArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalLRArrow").innerHTML = " <span style='color: #89a0b8' class='fa-solid fa-arrow-left'></span> ";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (totalComp == weaponOriginal.TotalDamage) {
        document.getElementById("cardDamageTotal").textContent = totalRound;
    }
    //#endregion

    document.getElementById("cardDamagePerMag").textContent = "";
    let damageMagazine = totalComp * effRound;
    let dMagRound = Math.round((damageMagazine + Number.EPSILON)* 100) / 100;
    document.getElementById("cardDamagePerMag").textContent = dMagRound;

    document.getElementById("cardDPMCrit").textContent = "";
    let dpmCrit =  ((totalRound * effRound) * (1 + baseCalc)) + (scrollMult * effRound);
    let dCritRound = Math.round((dpmCrit + Number.EPSILON)* 100) / 100;
    document.getElementById("cardDPMCrit").textContent = dCritRound;

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

    if (lootRound < 0.01) {
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
    if (reloadTimeModifier < 0.01) {
        reloadTimeModifier = 0.01;
    }
    let relSpdCalc = weapon.ReloadSpeed * ((1 + calcOil.ReloadSpeed));
    let relSpdConv = percentConv(relSpdCalc);
    let relSpdConvOrig = percentConv(weaponOriginal.ReloadSpeed);

    let relSpdRound = Math.round((relSpdConv + Number.EPSILON)* 100) / 100;
        
    if (relSpdRound < 1) {
        relSpdRound = 1;
        
    }
    else {
        
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
    if (reloadTimeRound === Infinity) {
        reloadTimeRound = 9999999999;
    }

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

    if (spreadRound < 0.01) {
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

    if (shotsToBreakRounded < 1) {
        shotsToBreakRounded = 1;
    }

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

    /////////////
    //// DPS ////
    /////////////
    //#region

    document.getElementById("cardTotDam60").textContent = "";
    document.getElementById("cardDPS60").textContent = ""; 

    let dpsRPM = 0;
    
    if (weapon.Name === "Neuraxis F22") {
        dpsRPM = neuraxisMaxRPMRound;
    }
    else {
        dpsRPM = rpmRound
    }

    let secPerRound = 60 / dpsRPM;
    let dpsTime = 0;
    let dps60Dam = 0;
    let dps60DamUnmod = 0;
    let durWinDam = 0;
    let durWinDamUnmod = 0;
    let durWinTime = 0;
    let durWinShots = shotsToBreakRounded;

    do {
        let magSizeCalc = 0;
        do {
            dpsTime += secPerRound;

            // Base Damage
            dps60Dam += totalRound;

            // Unmodifiable Damage
            dps60DamUnmod += scrollMult;

            magSizeCalc += 1;
        }
        while (magSizeCalc < effMagSize && dpsTime < 60);

        dpsTime += reloadTime;

    }
    while (dpsTime < 60);

    do {
        let magSizeCalc = 0;
        do {
            // Durability Window
            durWinTime += secPerRound;
            durWinDam += totalRound;
            durWinDamUnmod += scrollMult;
            durWinShots -= 1;

            magSizeCalc += 1;
        }
        while (magSizeCalc < effMagSize && durWinShots > 0);

        durWinTime += reloadTime;

    }
    while (durWinShots > 0);

    let dps60 = dps60Dam / 60;
    let dps60Unmod = dps60DamUnmod / 60;
    let dps60Crit = (dps60Dam * (1 + baseCalc)) / 60;
    let dps60CritUnmod = ((dps60Dam * (1 + baseCalc)) + dps60Unmod) / 60;
    let dps60TotDamUnmod = (dps60Dam * (1 + baseCalc)) + dps60DamUnmod;

    let durWinTot = (durWinDam * (1 + baseCalc)) + durWinDamUnmod;

    let dps60Round = Math.round((dps60 + Number.EPSILON)* 100) / 100;
    let dps60UnmodRound = Math.round((dps60CritUnmod + Number.EPSILON)* 100) / 100;
    let dmgTotRound = Math.round(((dps60TotDamUnmod) + Number.EPSILON)* 100) / 100;

    let durWinTimeRound = Math.round((durWinTime + Number.EPSILON)* 100) / 100;
    let durWinDamRound = Math.round(((durWinTot) + Number.EPSILON)* 100) / 100;

    document.getElementById("cardTotDam60").textContent = dmgTotRound;
    document.getElementById("cardDPS60").textContent = dps60UnmodRound; 

    document.getElementById("cardBreakDam").textContent = durWinDamRound;
    document.getElementById("cardBreakTime").textContent = `${durWinTimeRound} seconds`; 
    
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
    if (itemName !== null && itemValue !== null && itemValue !== "") {
        
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
            case undefined:
                break;  
            case "all":
                break;
            default:
        }
    }
    
}

function addToTempMap(flag, itemName, itemValue) {
    if (itemName !== null && itemValue !== null && itemValue !== "") {
        switch (flag) {
            case "weapon":
                tempSelections.set("weapon", {Name: itemName, Value: itemValue});
                break;
            case "ench1":
                tempSelections.set("ench1", {Name: itemName, Value: itemValue});
                break;
            case "ench2":
                tempSelections.set("ench2", {Name: itemName, Value: itemValue});
                break;
            case "ench3":
                tempSelections.set("ench3", {Name: itemName, Value: itemValue});
                break;
            case "ench4":
                tempSelections.set("ench4", {Name: itemName, Value: itemValue});
                break;
            case "ench5":
                tempSelections.set("ench5", {Name: itemName, Value: itemValue});
                break;
            case "barrel":
                tempSelections.set("barrel", {Name: itemName, Value: itemValue});
                break;
            case "optic":
                tempSelections.set("optic", {Name: itemName, Value: itemValue});
                break;
            case "laser":
                tempSelections.set("laser", {Name: itemName, Value: itemValue});
                break;
            case "firemode":
                tempSelections.set("firemode", {Name: itemName, Value: itemValue});
                break;
            case "chamber":
                tempSelections.set("chamber", {Name: itemName, Value: itemValue});
                break; 
            case undefined:
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

let selChamb = null;
let selChambName = null;

function setDefaultChamber(gun) {
    
    if (gun === null) {
        return;
    }
    else {
        selChamb = getChamberByName(`Chamber Chisel - ${gun.AmmoType}`);
        
        selChambName = chamberNameIndexer.get(selChamb.Name);
        if (document.getElementById("chamberselector").getValue() === "none" || document.getElementById("chamberselector").getValue() === undefined || gun.AmmoType === "Energy") {
            addToCoreMap("chamber", selChamb, selChambName);
        }
    }
}

function rollSelections(flag, selector, selID, value, type) {
    enchAll = enchAllMain.slice();
    scrollsAll = scrollsAllMain.slice();
    scrollsT1 = scrollsT1Main.slice();
    scrollsT2 = scrollsT2Main.slice();
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

    function rollEnch(value, flag) {
        
            
        switch (value) {
            case "static-no-selection":
                selectedItem = getOilByName("None");
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-choose":
                selectedItem = getOilByName("None");
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case null:
                selectedItem = getOilByName("None");
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "none":
                selectedItem = getOilByName("None");
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "":
                selectedItem = getOilByName("None");
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case undefined:
                selectedItem = getOilByName("None");
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-all-oils":
                shuffle(oilsAll);
                selectedItem = getOilByName(oilsAll[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-scroll-t1":
                shuffle(scrollsT1);
                selectedItem = getScrollByName(scrollsT1[0]);
                selectedValue = scrollNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-all-scrolls":
                shuffle(scrollsAll);
                selectedItem = getScrollByName(scrollsAll[0]);
                selectedValue = scrollNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-scroll-t2":
                shuffle(scrollsT2);
                selectedItem = getScrollByName(scrollsT2[0]);
                selectedValue = scrollNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-all-enchantments":
                shuffle(enchAll);
                
                if (enchAll[0].endsWith("Oil") === true) {
                    selectedItem = getOilByName(enchAll[0]);
                    selectedValue = oilNameIndexer.get(selectedItem.Name);
                }
                if (enchAll[0].startsWith("Scroll") === true) {
                    selectedItem = getScrollByName(enchAll[0]);
                    selectedValue = scrollNameIndexer.get(selectedItem.Name);
                }
                addToCoreMap(flag, selectedItem, selectedValue);
                
                break;
            case "static-random-ammo-consume-chance":
                shuffle(oilsAmmo);
                selectedItem = getOilByName(oilsAmmo[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-base-crit-chance":
                shuffle(oilsCrit);
                selectedItem = getOilByName(oilsCrit[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-bullet-bounces":
                shuffle(oilsBounce);
                selectedItem = getOilByName(oilsBounce[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-bullet-speed":
               shuffle(oilsSpeed);
                selectedItem = getOilByName(oilsSpeed[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-damage---flat":
                shuffle(oilsAddDam);
                selectedItem = getOilByName(oilsAddDam[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-damage---mult":
                shuffle(oilsMultDam);
                selectedItem = getOilByName(oilsMultDam[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-max-durability":
                shuffle(oilsDur);
                selectedItem = getOilByName(oilsDur[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-penetration":
                shuffle(oilsPen);
                selectedItem = getOilByName(oilsPen[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-projectiles":
                shuffle(oilsProj);
                selectedItem = getOilByName(oilsProj[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-recoil":
                shuffle(oilsRecoil);
                selectedItem = getOilByName(oilsRecoil[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-reload-speed":
               shuffle(oilsReload);
                selectedItem = getOilByName(oilsReload[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-rpm":
                shuffle(oilsRPM);
                selectedItem = getOilByName(oilsRPM[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-spread":
                shuffle(oilsSpread);
                selectedItem = getOilByName(oilsSpread[0]);
                selectedValue = oilNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            default:
                
                if (value.endsWith("oil") === true) {
                    let selItem = oilValueIndexer.get(value);
                    selectedItem = getOilByName(selItem);
                }
                if (value.startsWith("scroll") === true) {
                    let scroll = scrollValueIndexer.get(value);
                    selectedItem = getScrollByName(scroll);
                }
                addToCoreMap(flag, selectedItem, value);
        }
        if (selectedItem !== null) {
            poolRemover(selectedItem.Name);
        }
    }

    function rollWeapon(value, flag) {
        
        switch (value) {
            case "random-all-weapons":
                shuffle(gunsAll);
                selectedItem = getWeaponByName(gunsAll[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-pistols":
                shuffle(gunsPistols);
                selectedItem = getWeaponByName(gunsPistols[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-revolvers":
                shuffle(gunsRevolvers);
                selectedItem = getWeaponByName(gunsRevolvers[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-shotguns":
                shuffle(gunsShotguns);
                selectedItem = getWeaponByName(gunsShotguns[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-smgs":
                shuffle(gunsSMGs);
                selectedItem = getWeaponByName(gunsSMGs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-assault-rifles":
                shuffle(gunsARs);
                selectedItem = getWeaponByName(gunsARs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-lmgs":
                shuffle(gunsLMGs);
                selectedItem = getWeaponByName(gunsLMGs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-rifles":
                shuffle(gunsRifles);
                selectedItem = getWeaponByName(gunsRifles[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "random-sniper-rifles":
                shuffle(gunsSnipers);
                selectedItem = getWeaponByName(gunsSnipers[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case undefined:
                
                let selectedGun2 = weaponValueIndexer.get("p38-dirk");
                selectedItem = getWeaponByName(selectedGun2);
                
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, value);
            case "":
                
                let selectedGun4 = weaponValueIndexer.get("p38-dirk");
                selectedItem = getWeaponByName(selectedGun4);
                
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, value);
            case null:
                
                let selectedGun3 = weaponValueIndexer.get("p38-dirk");
                selectedItem = getWeaponByName(selectedGun3);
                
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, value);
            default:
                
                let selectedGun = weaponValueIndexer.get(value);
                selectedItem = getWeaponByName(selectedGun);
                setDefaultChamber(selectedItem);
                
                addToCoreMap(flag, selectedItem, value);
        }
        
    }

    function rollAttachment(value, flag) {
        if (flag === "barrel") {
            if (coreSelections.get("weapon").Name.AmmoType === "Energy") {
                selectedItem = getBarrelByName("None");
                selectedValue = barrelNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                document.getElementById("barrelselector").setValue("static-not-applicable");
            }
            else {
                switch (value) {
                    case "static-not-applicable":
                        selectedItem = getBarrelByName("None");
                        selectedValue = barrelNameIndexer.get(selectedItem.Name);
                        addToCoreMap(flag, selectedItem, selectedValue);
                        break;
                    case "static-choose":
                        selectedItem = getBarrelByName("None");
                        selectedValue = barrelNameIndexer.get(selectedItem.Name);
                        addToCoreMap(flag, selectedItem, selectedValue);
                        break;
                    case "none":
                        selectedItem = getBarrelByName("None");
                        selectedValue = barrelNameIndexer.get(selectedItem.Name);
                        addToCoreMap(flag, selectedItem, selectedValue);
                        break;
                    case "static-random-barrel":
                        shuffle(attachmentsBarrels);
                        selectedItem = getBarrelByName(attachmentsBarrels[0]);
                        selectedValue = barrelNameIndexer.get(selectedItem.Name);
                        addToCoreMap(flag, selectedItem, selectedValue);
                        break;
                    default:
                        let selbar = barrelValueIndexer.get(value);
                        selectedItem = getBarrelByName(selbar);
                        addToCoreMap(flag, selectedItem, value);
                        
                }
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
            
            let weapCha = null;
            let weapon = coreSelections.get("weapon");
            let weaponName = weapon.Name.Name;
            let weaponStats = getWeaponByName(weaponName);
            if (coreSelections.get("weapon").Name.AmmoType === "Energy") {
                let weapCha = coreSelections.get("weapon");
                let weapChaObj = weapCha.Name;
                setDefaultChamber(weapChaObj);
                document.getElementById("chamberselector").setValue("static-not-applicable");
            }
            else {
                switch (value) {
                    case "static-choose":
                        weapCha = coreSelections.get("weapon");
                        
                        setDefaultChamber(weapCha.Name);
                        break;
                    case undefined:
                        weapCha = coreSelections.get("weapon");
                        setDefaultChamber(weapCha.Name);
                        break;
                    case "none":
                        weapCha = coreSelections.get("weapon");
                        setDefaultChamber(weapCha.Name);
                        break;
                    case "static-random-chamber":
                        shuffle(attachmentsRechambers);
                        selectedItem = getChamberByName(attachmentsRechambers[0]);
                        selectedValue = convNameToVal(selectedItem.Name);
                        addToCoreMap(flag, selectedItem, selectedValue);
                        break;
                    default:
                        selectedItem = chamberValueIndexer.get(value);
                        selectedChamber = getChamberByName(selectedItem);
                        addToCoreMap(flag, selectedChamber, value);
                }
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

let scrollsT1Main = [
    "Scroll of Dark",
    "Scroll of Earth",
    "Scroll of Embers",
    "Scroll of Frostbite",
    "Scroll of Light",
    "Scroll of Nature",
    "Scroll of Plague",
    "Scroll of Surge",
    "Scroll of Water"
];

let scrollsT2Main = [
    "Scroll of Holy Fire",
    "Scroll of Aftershock",
    "Scroll of Toxic Lobotomy",
    "Scroll of Chain Lightning",
    "Scroll of Chaos Strike",
    "Scroll of Charm",
    "Scroll of Corpse Explosion",
    "Scroll of Crusader",
    "Scroll of Explosions",
    "Scroll of Fear",
    "Scroll of Flame Thrower",
    "Scroll of Holy Purge",
    "Scroll of Lava",
    "Scroll of Least Resistance",
    "Scroll of Noxiosa",
    "Scroll of Pesticide",
    "Scroll of Petrification",
    "Scroll of Petroleum",
    "Scroll of Poison Blood",
    "Scroll of Prism",
    "Scroll of Rocket Launcher",
    "Scroll of Slush",
    "Scroll of Sacrifice",
    "Scroll of Storm Surge",
    "Scroll of Thunderbolt",
    "Scroll of Voodoo"
];

let scrollsAllMain = [
    "Scroll of Dark",
    "Scroll of Earth",
    "Scroll of Embers",
    "Scroll of Frostbite",
    "Scroll of Light",
    "Scroll of Nature",
    "Scroll of Plague",
    "Scroll of Surge",
    "Scroll of Water",
    "Scroll of Holy Fire",
    "Scroll of Aftershock",
    "Scroll of Toxic Lobotomy",
    "Scroll of Chain Lightning",
    "Scroll of Chaos Strike",
    "Scroll of Charm",
    "Scroll of Corpse Explosion",
    "Scroll of Crusader",
    "Scroll of Explosions",
    "Scroll of Fear",
    "Scroll of Flame Thrower",
    "Scroll of Holy Purge",
    "Scroll of Lava",
    "Scroll of Least Resistance",
    "Scroll of Noxiosa",
    "Scroll of Pesticide",
    "Scroll of Petrification",
    "Scroll of Petroleum",
    "Scroll of Poison Blood",
    "Scroll of Prism",
    "Scroll of Rocket Launcher",
    "Scroll of Slush",
    "Scroll of Sacrifice",
    "Scroll of Storm Surge",
    "Scroll of Thunderbolt",
    "Scroll of Voodoo"
];

let enchAllMain = [
     "Scroll of Dark",
    "Scroll of Earth",
    "Scroll of Embers",
    "Scroll of Frostbite",
    "Scroll of Light",
    "Scroll of Nature",
    "Scroll of Plague",
    "Scroll of Surge",
    "Scroll of Water",
    "Scroll of Holy Fire",
    "Scroll of Aftershock",
    "Scroll of Toxic Lobotomy",
    "Scroll of Chain Lightning",
    "Scroll of Chaos Strike",
    "Scroll of Charm",
    "Scroll of Corpse Explosion",
    "Scroll of Crusader",
    "Scroll of Explosions",
    "Scroll of Fear",
    "Scroll of Flame Thrower",
    "Scroll of Holy Purge",
    "Scroll of Lava",
    "Scroll of Least Resistance",
    "Scroll of Noxiosa",
    "Scroll of Pesticide",
    "Scroll of Petrification",
    "Scroll of Petroleum",
    "Scroll of Poison Blood",
    "Scroll of Prism",
    "Scroll of Rocket Launcher",
    "Scroll of Slush",
    "Scroll of Sacrifice",
    "Scroll of Storm Surge",
    "Scroll of Thunderbolt",
    "Scroll of Voodoo",
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
    "Tetrus Oil",
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
    "Tetrus Oil",
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

const oilValueIndexer = new Map();

function setOilValueIndexer() {
    console.info("KBH: Setting oil value indexer");
    oilValueIndexer.set("none", "None");
    oilValueIndexer.set("static-random-all-enchantments", "Random Enchantment");
    oilValueIndexer.set("static-random-all-oils", "Random Oil");
    oilValueIndexer.set("static-random-ammo-consume-chance", "Random Ammo Consume Chance Oil");
    oilValueIndexer.set("static-random-base-crit-chance", "Random Base Crit Chance Oil");
    oilValueIndexer.set("static-random-bullet-bounces", "Random Bullet Bounce Oil");
    oilValueIndexer.set("static-random-bullet-speed", "Random Bullet Speed Oil");
    oilValueIndexer.set("static-random-damage---flat", "Random Damage - Flat Oil");
    oilValueIndexer.set("static-random-damage---mult", "Random Damage - Mult Oil");
    oilValueIndexer.set("static-random-max-durability", "Random Max Durability Oil");
    oilValueIndexer.set("static-random-penetration", "Random Penetration Oil");
    oilValueIndexer.set("static-random-projectiles", "Random Projectiles Oil");
    oilValueIndexer.set("static-random-recoil", "Random Recoil Oil");
    oilValueIndexer.set("static-random-reload-speed", "Random Reload Speed Oil");
    oilValueIndexer.set("static-random-rpm", "Random RPM Oil");
    oilValueIndexer.set("static-random-spread", "Random Spread Oil");
    oilsAllMain.forEach(oil => {
        const key = oil.toLowerCase().replaceAll(" ", "-");
        oilValueIndexer.set(key, oil);
    });
}

setOilValueIndexer();

const oilNameIndexer = new Map();

function setOilNameIndexer() {
console.info("KBH: Setting oil name indexer");
    oilNameIndexer.set("None", "none");
    function addToWNI(value, key, map) {
        oilNameIndexer.set(value, key);
    }

    oilValueIndexer.forEach(addToWNI);  
    
}

setOilNameIndexer()

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
    "Tetrus Oil",
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
    "Bolt Oil",
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
    "Great Oil",
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
    "Impala Gravita", "Longboy", "Chat-Pardeur 98", "Warpig", "Songbird"
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
    "Ferryman", "M3 Termite", "Deathstar PG", "Valet", "Songbird"
];

const gunsARs = [
    "Corpsemaker", "Catacoil Rapid X",
    "Type 80 Typhoon", "M11A2 Fisk", "Wingman"
];

const gunsLMGs = [
    "Rektor 100rd", "Duhar", "Neuraxis F22", "Chat-Pardeur 98", "Warpig"
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
    /*let helloThere = "hello there, i am mobile";
    
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
   
    */
}

const dropPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        mobileDropdownCheck();
    }, 500);
})

