//import html2canvas from 'html2canvas';

// friendly reminder to comment your shit cause you're a dumbass and won't remember what this macguyvered code does
// also ty stackoverflow

let isMobile = (() => {
    console.info("KBH: Checking for mobile device (once)");
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
})();

function mobileCSS() {
    if (isMobile === true) {

        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.maxWidth = "100vw";
        document.body.style.overflowX = "hidden";

        document.getElementById("mobileheaderbox").style.display = "flex";

        document.getElementById("infoboxText").style.fontSize = "2vw";

        document.getElementById("mobilefooterbox").style.display = "flex";

        document.getElementById("mainbuildcontainer").classList.remove("container");
        document.getElementById("mainbuildcontainer").classList.add("container-mobile");
        
        document.getElementById("tooltipboxdiv").classList.remove("tooltipboxdiv");
        document.getElementById("tooltipboxdiv").classList.add("tooltipboxdiv-mobile");

        document.getElementById("weapondiv").classList.remove("weapondiv");
        document.getElementById("weapondiv").classList.add("weapondiv-mobile");

        document.getElementById("bigboxbuttons").classList.remove("bigboxbuttons");
        document.getElementById("bigboxbuttons").classList.add("bigboxbuttons-mobile");

        document.getElementById("oilcontainer").classList.remove("oilcontainer");
        document.getElementById("oilcontainer").classList.add("oilcontainer-mobile");

        document.getElementById("armorcontainer").classList.remove("oilcontainer");
        document.getElementById("armorcontainer").classList.add("oilcontainer-mobile");

        document.getElementById("bigboxdeals").classList.remove("bigboxdeals");
        document.getElementById("bigboxdeals").classList.add("bigboxdeals-mobile");

        document.getElementById("attachmentcontainer").classList.remove("attachmentcontainer");
        document.getElementById("attachmentcontainer").classList.add("attachmentcontainer-mobile");

        document.getElementById("trinketcontainer").classList.remove("attachmentcontainer");
        document.getElementById("trinketcontainer").classList.add("attachmentcontainer-mobile");

        document.getElementById("targetme").classList.remove("build-card");
        document.getElementById("targetme").classList.add("build-card-mobile");

        document.getElementById("targetcontainer").classList.remove("target-container");
        document.getElementById("targetcontainer").classList.add("target-container-mobile");

        document.getElementById("containerweapon").classList.remove("containerweapon");
        document.getElementById("containerweapon").classList.add("containerweapon-mobile");

        document.getElementById("mobilearrow").classList.remove("mobile-arrow");
        document.getElementById("mobilearrow").classList.add("mobile-arrow-mobile");

        //document.getElementById("containerheaders").classList.add("containerheadershidden");
        //document.getElementById("containerheaders").classList.remove("containerheaders");
        //document.getElementById("containerheaders2").classList.add("containerheaders3");
        //document.getElementById("containerheaders2").classList.remove("containerheaders2");
        document.getElementById("containerheaders").classList.add("containerheaders3");
        document.getElementById("containerheaders").classList.remove("containerheaders");
        document.getElementById("containerheaders").style.height = "auto";
        document.getElementById("containerheaders").style.width = "100%";

        document.getElementById("containheadatt").classList.remove("containerheaders");
        document.getElementById("containheadatt").classList.add("containerheaders2-mobile");

        document.getElementById("containheadench").classList.remove("containerheaders");
        document.getElementById("containheadench").classList.add("containerheaders2-mobile");

        document.getElementById("containheadarm").classList.remove("containerheaders");
        document.getElementById("containheadarm").classList.add("containerheaders2-mobile");

        document.getElementById("containheadtrinket").classList.remove("containerheaders");
        document.getElementById("containheadtrinket").classList.add("containerheaders2-mobile");

        document.getElementById("oilresultcontainer").classList.remove("oilresultcontainer");
        document.getElementById("oilresultcontainer").classList.add("oilresultcontainer-mobile");
        
        document.getElementById("weaponstuffcontainer").classList.remove("weaponstuffcontainer");
        document.getElementById("weaponstuffcontainer").classList.add("weaponstuffcontainer-mobile");

        document.getElementById("secondpagediv").classList.remove("secondpagediv");
        document.getElementById("secondpagediv").classList.add("secondpagediv-mobile");

        document.getElementById("extendstatbox").classList.remove("extendstatbox");
        document.getElementById("extendstatbox").classList.add("extendstatbox-mobile");

        document.getElementById("yetanotherspacer").classList.remove("mobile-arrow");
        document.getElementById("yetanotherspacer").classList.add("ext-mob");

        document.getElementById("spacer1").style.display = "none";
        document.getElementById("spacer2").style.display = "none";

        document.getElementById("overall-stats").style.display = "none";
        document.getElementById("session-stats").style.display = "none";

        document.getElementById("oilequipwrapper").style.flexWrap = "wrap";

        document.getElementById("equipbox1").style.flexBasis = "45%";
        document.getElementById("equipbox1").style.flexGrow = "1";
        document.getElementById("equipbox1").style.marginLeft = "0";
        document.getElementById("equipbox1").style.marginbottom = "5px";
        document.getElementById("equipbox2").style.flexBasis = "45%";
        document.getElementById("equipbox2").style.flexGrow = "1";
        document.getElementById("equipbox2").style.marginbottom = "5px";

        document.getElementById("weaponstuffcontainerequip").classList.remove("hide-selectors");
        document.getElementById("weaponstuffcontainerequip").classList.add("hide-selectors-mobile");
        document.getElementById("weaponstuffcontainerequip").classList.remove("weaponstuffcontainer");
        document.getElementById("weaponstuffcontainerequip").classList.add("weaponstuffcontainer-mobile");

        document.getElementById("bigbuttondiv2").style.display = "none";
        document.getElementById("bigbuttondiv1").style.display = "none";

        document.getElementById("externalbuttondiv").classList.remove("external-button-cont");
        document.getElementById("externalbuttondiv").classList.add("external-button-cont-mobile");

        document.getElementById("containerweapchoose").classList.remove("containerweapchoose");
        document.getElementById("containerweapchoose").classList.add("containerweapchoose-mobile");
        document.getElementById("containerweapchoose").style.flexBasis = "100%";
        document.getElementById("containerweapchoose").style.fontSize = "2vw";

        document.getElementById("overall-stats").style.flexBasis = "45%";
        document.getElementById("overall-stats").style.flexGrow = "1";
        document.getElementById("overall-stats").style.maxHeight = "9vh";
        document.getElementById("overall-stats").style.marginLeft = "0px";
        document.getElementById("overall-stats").style.marginBottom = "0px";
        document.getElementById("overall-stats").style.background = "#2D424B";

        document.getElementById("session-stats").style.flexBasis = "45%";
        document.getElementById("session-stats").style.flexGrow = "1";
        document.getElementById("session-stats").style.maxHeight = "9vh";
        document.getElementById("session-stats").style.marginBottom = "0px";
        document.getElementById("session-stats").style.background = "#2D424B";

        document.getElementById("weapon-parts-button").style.fontSize = "4vw";
        document.getElementById("equipment-button").style.fontSize = "4vw";
        
        document.querySelectorAll(".buttonGeneral").forEach(e => {e.classList.add("buttonGeneral-mobile")});
        document.querySelectorAll(".buttonGeneral").forEach(e => {e.classList.remove("buttonGeneral")});

        document.querySelectorAll(".custom-select-top-row").forEach(e => {e.classList.add("custom-select-top-row-mobile")});
        document.querySelectorAll(".custom-select-top-row").forEach(e => {e.classList.remove("custom-select-top-row")});

        document.querySelectorAll(".card-cat-header").forEach(e => {e.classList.add("card-cat-header-mobile")});
        document.querySelectorAll(".card-cat-header").forEach(e => {e.classList.remove("card-cat-header")});

        document.querySelectorAll(".cardStatEquip").forEach(e => {e.classList.add("cardStatEquip-mobile")});
        document.querySelectorAll(".cardStatEquip").forEach(e => {e.classList.remove("cardStatEquip")});

        document.querySelectorAll(".scrollcard").forEach(e => {e.classList.add("scrollcard-mobile")});
        document.querySelectorAll(".scrollcard").forEach(e => {e.classList.remove("scrollcard")});

        document.querySelectorAll(".attachtitle").forEach(e => {e.classList.add("attachtitle-mobile")});
        document.querySelectorAll(".attachtitle").forEach(e => {e.classList.remove("attachtitle")});

        document.querySelectorAll(".build-copy-button").forEach(e => {e.classList.add("build-copy-button-mobile")});
        document.querySelectorAll(".build-copy-button").forEach(e => {e.classList.remove("build-copy-button")});

        document.querySelectorAll(".stat-header").forEach(e => {e.classList.add("stat-header-mobile")});
        document.querySelectorAll(".stat-header").forEach(e => {e.classList.remove("stat-header")});

        document.querySelectorAll(".stat-text").forEach(e => {e.classList.add("stat-text-mobile")});
        document.querySelectorAll(".stat-text").forEach(e => {e.classList.remove("stat-text")});

        document.querySelectorAll(".ench-card-header").forEach(e => {e.classList.add("ench-card-header-mobile")});
        document.querySelectorAll(".ench-card-header").forEach(e => {e.classList.remove("ench-card-header")});

        document.querySelectorAll(".custom-select-selected").forEach(e => {e.style.height = "40px", e.style.fontSize = "2em", e.style.border = "0.1em solid black"});
        document.querySelectorAll(".custom-select").forEach(e => {e.style.height = "60px"});
        document.querySelectorAll(".oils").forEach(e => {e.classList.add("oils-mobile")});
        document.querySelectorAll(".oils").forEach(e => {e.classList.remove("oils")});
        document.querySelectorAll("h2").forEach(e => {e.style.fontSize = "3vw"});
        document.querySelectorAll(".buttonCommitInd").forEach(e => {e.style.height = "50px", e.style.width = "50px"});

        document.querySelectorAll(".cardStat").forEach(e => {e.classList.add("cardStat-mobile")});
        document.querySelectorAll(".cardStat").forEach(e => {e.classList.remove("cardStat")});

        document.querySelectorAll(".oilimages").forEach(e => {e.classList.add("oilimages-mobile")});
        document.querySelectorAll(".oilimages").forEach(e => {e.classList.remove("oilimages")});

        document.querySelectorAll(".build-chooser-button").forEach(e => {e.classList.add("build-chooser-button-mobile")});
        document.querySelectorAll(".build-chooser-button").forEach(e => {e.classList.remove("build-chooser-button")});

        document.querySelectorAll(".selector-header").forEach(e => {e.style.marginBottom = "5px";});

        document.getElementById("weapsubdiv").style.height = "70px";
        document.getElementById("buttonRandomGun").style.width = "70px";
        document.getElementById("buttonResetGun").style.width = "70px";
        document.getElementById("buttonCommitGun").style.width = "70px";

        document.getElementById("bigboxdeals").style.height = "auto";

        document.getElementById("dropdownselectordiv").classList.add("dropdownselectordiv-mobile");
        document.getElementById("dropdownselectordiv").classList.remove("dropdownselectordiv");

        document.getElementById("extendstatbox").style.marginRight = "0px";

        document.getElementById("extendstatsbutton").style.minHeight = "0px";
        document.getElementById("extendstatsbutton").style.height = "100%";

        document.getElementById("guncardgrid1").style.minHeight = "0px";
        document.getElementById("guncardgrid2").style.minHeight = "0px";
        document.getElementById("guncardgrid3").style.minHeight = "0px";
        document.getElementById("guncardgrid4").style.minHeight = "0px";
        document.getElementById("guncardgrid5").style.minHeight = "0px";
        document.getElementById("guncardgrid6").style.minHeight = "0px";
        document.getElementById("guncardgrid8").style.minHeight = "0px";

        document.getElementById("extendstatbox").style.minHeight = "0px";
        document.getElementById("extendstatbox").style.height = "auto";
        document.getElementById("extendstatbox").style.marginTop = "10px";
        document.getElementById("extendstatbox").style.marginLeft = "10px";
        document.getElementById("extendstatbox").style.marginRight = "10px";

        document.getElementById("build-chooser-button-div").classList.add("build-chooser-button-div-mobile");
        document.getElementById("build-chooser-button-div").classList.remove("build-chooser-button-div");

        document.getElementById("boxglowthing").style.height = "125px";

        //document.getElementById("containerheaders2").style.display = "";
 
        document.querySelectorAll(".stuffbutton").forEach(e => {e.classList.add("stuffbutton-mobile")});

        let mainbuild = document.getElementById("mainbuildcontainer");
        let mobilebuild = document.getElementById("mobileheaderbox");
        let tooltip = document.getElementById("containerheaders");
        let bigbox = document.getElementById("bigboxdeals");
        let target = document.getElementById("targetcontainer");
        let second = document.getElementById("secondpagediv");
        let extend = document.getElementById("extendedstatscontainer2");
        let spacer3 = document.getElementById("spacer3");
        let mobilearrow = document.getElementById("mobilearrow");
        let builddiv = document.getElementById("build-chooser-button-div");

        target.append(second, mobilearrow)
        mainbuild.append(bigbox, target, extend);
        mobilebuild.append(tooltip, builddiv);

        let buildcardrow1 = document.getElementById("buildcardrow1");
        let buildcardrow2 = document.getElementById("buildcardrow2");
        let buildcardrow3 = document.getElementById("buildcardrow3");
        let buildcardrow4 = document.getElementById("buildcardrow4");

        let guncardgrid1 = document.getElementById("guncardgrid1");
        let guncardgrid2 = document.getElementById("guncardgrid2");
        let guncardgrid3 = document.getElementById("guncardgrid3");
        let guncardgrid4 = document.getElementById("guncardgrid4");
        let guncardgrid5 = document.getElementById("guncardgrid5");
        let guncardgrid6 = document.getElementById("guncardgrid6");
        let guncardgrid8 = document.getElementById("guncardgrid8");

        buildcardrow1.style.width = "100%";
        buildcardrow2.style.width = "100%";
        buildcardrow3.style.width = "100%";
        buildcardrow4.style.width = "100%";

        buildcardrow2.style.display = "flex";
        buildcardrow3.style.display = "flex";

        guncardgrid8.style.borderTop = "0px";

        buildcardrow1.append(guncardgrid1, guncardgrid2, guncardgrid8);
        buildcardrow2.append(guncardgrid1, guncardgrid2);
        buildcardrow3.append(guncardgrid5, guncardgrid6);

        guncardgrid1.style.width = "50%";
        guncardgrid2.style.width = "50%";
        guncardgrid3.style.width = "49.85%";
        guncardgrid5.style.width = "50%";
        guncardgrid6.style.width = "50%";

        buildcardrow2.style.borderTop = "1px solid #FDB142";
        guncardgrid2.style.borderTop = "0px";

        document.getElementById("scrollinfobackground").style.display = "none"

        mainbuild.addEventListener("scroll", () => {
            if (scrollBlock === false) {
                if (mainbuild.scrollLeft < (window.innerWidth / 2)) {
                    document.getElementById("mobilescrollbuttonright").classList.remove("mobile-scroll-button-selected");
                    document.getElementById("mobilescrollbuttonleft").classList.add("mobile-scroll-button-selected");
                }
                else if (mainbuild.scrollLeft > (window.innerWidth / 2)) {
                    document.getElementById("mobilescrollbuttonleft").classList.remove("mobile-scroll-button-selected");
                    document.getElementById("mobilescrollbuttonright").classList.add("mobile-scroll-button-selected");
                }
            }
        });

        target.addEventListener("scroll", () => {
            if (target.scrollTop > (target.scrollTopMax * 0.9)) {
                document.getElementById("mobilearrow").classList.remove("mobile-arrow-mobile");
                document.getElementById("mobilearrow").classList.add("mobile-arrow");
                return;
            }
            else {
                document.getElementById("mobilearrow").classList.remove("mobile-arrow");
                document.getElementById("mobilearrow").classList.add("mobile-arrow-mobile");
            }
        });
    }
}

let scrollBlock = false;

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

// Initiate item data

let dropdownReadyResolve;

const dropdownsReady = new Promise(res => {
    dropdownReadyResolve = res;
});

let chamberDupe = null;
let weaponDupe = null;
let weaponOrigDupe = null;
let attachmentDupe = null;
let barrelDupe = null;
let opticDupe = null;
let laserDupe = null;
let firemodeDupe = null;
let oilDupe = null;
let scrollDupe = null;
let oilScrollDupe = null;

async function loadChamber() {
    const response = await fetch("./itemdata/Chamber.json");
    chamberData = await response.json();
    const response2 = await fetch("./itemdata/ChamberNoEn.json");
    chamberData2 = await response2.json();
    chamberDupe = structuredClone(chamberData2);
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

async function loadHeadArmor() {
    const response = await fetch("./itemdata/armorHead.json");
    armorHeadData = await response.json();
    return armorHeadData;
}
async function loadChestArmor() {
    const response = await fetch("./itemdata/armorChest.json");
    armorChestData = await response.json();
    return armorChestData;
}
async function loadFootArmor() {
    const response = await fetch("./itemdata/armorFeet.json");
    armorFootData = await response.json();
    return armorFootData;
}
async function loadTrinkets() {
    const response = await fetch("./itemdata/Trinkets.json");
    trinketData = await response.json();
    return trinketData;
}

let firstTimeSetup = true;

async function dropdownBuilder() {
    const selects = document.querySelectorAll("select.custom-dropdown");
    if (firstTimeSetup === true) {
        firstTimeSetup = false;
        await Promise.all(
            [...selects].map(select => {
                if (!select.nextElementSibling?.classList.contains("custom-select")) {
                    return createProDropdown(select);
                }
            })
        );
        return true;
    }
}
/*
async function dropdownBuilder() {
    document
        .querySelectorAll("select.custom-dropdown")
        .forEach(select => {
            if (!select.nextElementSibling?.classList.contains("custom-select")) {
                createProDropdown(select);
            }
        });
    return true;
}*/

let firstLoad = true;

document.addEventListener("DOMContentLoaded", async () => {
    await loadOilsScrolls();
    await loadChamber();
    await loadWeapons();
    await loadOrigWeapons();
    await loadAttachments();
    await loadBarrels();
    await loadOptics();
    await loadLasers();
    await loadFiremodes();
    await loadOils();
    await loadScrolls();
    await loadHeadArmor();
    await loadChestArmor();
    await loadFootArmor();
    await loadTrinkets();
    await rebuildRandomArrays();
    await setOilValueIndexer();
    await setOilNameIndexer();
    await resetCoreSelections();
    await resetTempSelections();
    await setChamberValueIndexer();
    await setChamberNameIndexer();
    await setBarrelValueIndexer();
    await setBarrelNameIndexer();
    await setOpticValueIndexer();
    await setOpticNameIndexer();
    await setLaserValueIndexer();
    await setLaserNameIndexer();
    await setFiremodeValueIndexer();
    await setFiremodeNameIndexer();
    await setWeaponValueIndexer();
    await setWeaponNameIndexer();
    await setScrollValueIndexer();
    await setScrollNameIndexer();
    await setArmorHeadValueIndexer();
    await setArmorHeadNameIndexer();
    await setArmorChestValueIndexer();
    await setArmorChestNameIndexer();
    await setArmorFootValueIndexer();
    await setArmorFootNameIndexer();
    await setTrinketValueIndexer();
    await setTrinketNameIndexer();

    await dropdownBuilder();
    dropdownReadyResolve();
    rollOnPageLoad('weapon', 'pageload', 7, 'p38-dirk', 'weapon');
});

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
    coreSelections.set("head", {Name: "None", Value: "none"});
    coreSelections.set("chest", {Name: "None", Value: "none"});
    coreSelections.set("lfoot", {Name: "None", Value: "none"});
    coreSelections.set("rfoot", {Name: "None", Value: "none"});
    coreSelections.set("trinket1", {Name: "None", Value: "none"});
    coreSelections.set("trinket2", {Name: "None", Value: "none"});
    coreSelections.set("trinket3", {Name: "None", Value: "none"});
    coreSelections.set("trinket4", {Name: "None", Value: "none"});

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
    tempSelections.set("head", {Name: "None", Value: "none"});
    tempSelections.set("chest", {Name: "None", Value: "none"});
    tempSelections.set("lfoot", {Name: "None", Value: "none"});
    tempSelections.set("rfoot", {Name: "None", Value: "none"});
    tempSelections.set("trinket1", {Name: "None", Value: "none"});
    tempSelections.set("trinket2", {Name: "None", Value: "none"});
    tempSelections.set("trinket3", {Name: "None", Value: "none"});
    tempSelections.set("trinket4", {Name: "None", Value: "none"});
}

const build1Selections = new Map();

function resetBuild1Selections() {
    console.info("KBH: Resetting Build 1 selections");
    build1Selections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    build1Selections.set("ench1", {Name: "None", Value: "none"});
    build1Selections.set("ench2", {Name: "None", Value: "none"});
    build1Selections.set("ench3", {Name: "None", Value: "none"});
    build1Selections.set("ench4", {Name: "None", Value: "none"});
    build1Selections.set("ench5", {Name: "None", Value: "none"});
    build1Selections.set("barrel", {Name: "None", Value: "none"});
    build1Selections.set("optic", {Name: "None", Value: "none"});
    build1Selections.set("laser", {Name: "None", Value: "none"});
    build1Selections.set("firemode", {Name: "None", Value: "none"});
    build1Selections.set("chamber", {Name: "None", Value: "none"});
    build1Selections.set("head", {Name: "None", Value: "none"});
    build1Selections.set("chest", {Name: "None", Value: "none"});
    build1Selections.set("lfoot", {Name: "None", Value: "none"});
    build1Selections.set("rfoot", {Name: "None", Value: "none"});
    build1Selections.set("trinket1", {Name: "None", Value: "none"});
    build1Selections.set("trinket2", {Name: "None", Value: "none"});
    build1Selections.set("trinket3", {Name: "None", Value: "none"});
    build1Selections.set("trinket4", {Name: "None", Value: "none"});

    return;
}
const build2Selections = new Map();

function resetBuild2Selections() {
    console.info("KBH: Resetting Build 2 selections");
    build2Selections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    build2Selections.set("ench1", {Name: "None", Value: "none"});
    build2Selections.set("ench2", {Name: "None", Value: "none"});
    build2Selections.set("ench3", {Name: "None", Value: "none"});
    build2Selections.set("ench4", {Name: "None", Value: "none"});
    build2Selections.set("ench5", {Name: "None", Value: "none"});
    build2Selections.set("barrel", {Name: "None", Value: "none"});
    build2Selections.set("optic", {Name: "None", Value: "none"});
    build2Selections.set("laser", {Name: "None", Value: "none"});
    build2Selections.set("firemode", {Name: "None", Value: "none"});
    build2Selections.set("chamber", {Name: "None", Value: "none"});
    build2Selections.set("head", {Name: "None", Value: "none"});
    build2Selections.set("chest", {Name: "None", Value: "none"});
    build2Selections.set("lfoot", {Name: "None", Value: "none"});
    build2Selections.set("rfoot", {Name: "None", Value: "none"});
    build2Selections.set("trinket1", {Name: "None", Value: "none"});
    build2Selections.set("trinket2", {Name: "None", Value: "none"});
    build2Selections.set("trinket3", {Name: "None", Value: "none"});
    build2Selections.set("trinket4", {Name: "None", Value: "none"});

    return;
}
const build3Selections = new Map();

function resetBuild3Selections() {
    console.info("KBH: Resetting Build 3 selections");
    build3Selections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    build3Selections.set("ench1", {Name: "None", Value: "none"});
    build3Selections.set("ench2", {Name: "None", Value: "none"});
    build3Selections.set("ench3", {Name: "None", Value: "none"});
    build3Selections.set("ench4", {Name: "None", Value: "none"});
    build3Selections.set("ench5", {Name: "None", Value: "none"});
    build3Selections.set("barrel", {Name: "None", Value: "none"});
    build3Selections.set("optic", {Name: "None", Value: "none"});
    build3Selections.set("laser", {Name: "None", Value: "none"});
    build3Selections.set("firemode", {Name: "None", Value: "none"});
    build3Selections.set("chamber", {Name: "None", Value: "none"});
    build3Selections.set("head", {Name: "None", Value: "none"});
    build3Selections.set("chest", {Name: "None", Value: "none"});
    build3Selections.set("lfoot", {Name: "None", Value: "none"});
    build3Selections.set("rfoot", {Name: "None", Value: "none"});
    build3Selections.set("trinket1", {Name: "None", Value: "none"});
    build3Selections.set("trinket2", {Name: "None", Value: "none"});
    build3Selections.set("trinket3", {Name: "None", Value: "none"});
    build3Selections.set("trinket4", {Name: "None", Value: "none"});

    return;
}
const build4Selections = new Map();

function resetBuild4Selections() {
    console.info("KBH: Resetting Build 4 selections");
    build4Selections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    build4Selections.set("ench1", {Name: "None", Value: "none"});
    build4Selections.set("ench2", {Name: "None", Value: "none"});
    build4Selections.set("ench3", {Name: "None", Value: "none"});
    build4Selections.set("ench4", {Name: "None", Value: "none"});
    build4Selections.set("ench5", {Name: "None", Value: "none"});
    build4Selections.set("barrel", {Name: "None", Value: "none"});
    build4Selections.set("optic", {Name: "None", Value: "none"});
    build4Selections.set("laser", {Name: "None", Value: "none"});
    build4Selections.set("firemode", {Name: "None", Value: "none"});
    build4Selections.set("chamber", {Name: "None", Value: "none"});
    build4Selections.set("head", {Name: "None", Value: "none"});
    build4Selections.set("chest", {Name: "None", Value: "none"});
    build4Selections.set("lfoot", {Name: "None", Value: "none"});
    build4Selections.set("rfoot", {Name: "None", Value: "none"});
    build4Selections.set("trinket1", {Name: "None", Value: "none"});
    build4Selections.set("trinket2", {Name: "None", Value: "none"});
    build4Selections.set("trinket3", {Name: "None", Value: "none"});
    build4Selections.set("trinket4", {Name: "None", Value: "none"});

    return;
}
const build5Selections = new Map();

function resetBuild5Selections() {
    console.info("KBH: Resetting Build 5 selections");
    build5Selections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    build5Selections.set("ench1", {Name: "None", Value: "none"});
    build5Selections.set("ench2", {Name: "None", Value: "none"});
    build5Selections.set("ench3", {Name: "None", Value: "none"});
    build5Selections.set("ench4", {Name: "None", Value: "none"});
    build5Selections.set("ench5", {Name: "None", Value: "none"});
    build5Selections.set("barrel", {Name: "None", Value: "none"});
    build5Selections.set("optic", {Name: "None", Value: "none"});
    build5Selections.set("laser", {Name: "None", Value: "none"});
    build5Selections.set("firemode", {Name: "None", Value: "none"});
    build5Selections.set("chamber", {Name: "None", Value: "none"});
    build5Selections.set("head", {Name: "None", Value: "none"});
    build5Selections.set("chest", {Name: "None", Value: "none"});
    build5Selections.set("lfoot", {Name: "None", Value: "none"});
    build5Selections.set("rfoot", {Name: "None", Value: "none"});
    build5Selections.set("trinket1", {Name: "None", Value: "none"});
    build5Selections.set("trinket2", {Name: "None", Value: "none"});
    build5Selections.set("trinket3", {Name: "None", Value: "none"});
    build5Selections.set("trinket4", {Name: "None", Value: "none"});

    return;
}

resetBuild1Selections();
resetBuild2Selections();
resetBuild3Selections();
resetBuild4Selections();
resetBuild5Selections();

let selectedBuild = 1;
let buildSwapping = false;

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
    attachmentsLasers.forEach(laser => {
        const key = laser.toLowerCase().replaceAll(" ", "-");
        laserValueIndexer.set(key, laser);
    });
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
    weaponValueIndexer.set("static-random-all-weapons", "Random Weapon");
    weaponValueIndexer.set("static-random-pistols", "Random Pistol");
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
    weaponValueIndexer.set("static-random-revolvers", "Random Revolver");
    weaponValueIndexer.set(".357-balthazar", ".357 Balthazar");
    weaponValueIndexer.set("palehorse-topclipper", "Palehorse Topclipper");
    weaponValueIndexer.set("snut-.38", "Snut .38");
    weaponValueIndexer.set("wyatt-pulsar", "Wyatt PULSAR");
    weaponValueIndexer.set("static-random-shotguns", "Random Shotgun");
    weaponValueIndexer.set("1889-mario", "1889 Mario");
    weaponValueIndexer.set("arbiter-2", "Arbiter 2");
    weaponValueIndexer.set("augusta", "Augusta");
    weaponValueIndexer.set("breacher-8", "Breacher 8");
    weaponValueIndexer.set("flock-76", "Flock 76");
    weaponValueIndexer.set("majordome", "Majordome");
    weaponValueIndexer.set("mossman", "Mossman");
    weaponValueIndexer.set("static-random-smgs", "Random SMG");
    weaponValueIndexer.set("deathstar-pg", "Deathstar PG");
    weaponValueIndexer.set("drifter-9", "Drifter 9");
    weaponValueIndexer.set("ferryman", "Ferryman");
    weaponValueIndexer.set("m3-termite", "M3 Termite");
    weaponValueIndexer.set("ploika-compact", "Ploika Compact");
    weaponValueIndexer.set("songbird", "Songbird");
    weaponValueIndexer.set("valet", "Valet");
    weaponValueIndexer.set("vrede", "Vrede");
    weaponValueIndexer.set("static-random-assault-rifles", "Random AR");
    weaponValueIndexer.set("catacoil-rapid-x", "Catacoil Rapid X");
    weaponValueIndexer.set("corpsemaker", "Corpsemaker");
    weaponValueIndexer.set("socom-acr", "Socom ACR");
    weaponValueIndexer.set("m11a2-fisk", "M11A2 Fisk");
    weaponValueIndexer.set("type-80-typhoon", "Type 80 Typhoon");
    weaponValueIndexer.set("wingman", "Wingman");
    weaponValueIndexer.set("static-random-lmgs", "Random LMG");
    weaponValueIndexer.set("chat-pardeur-98", "Chat-Pardeur 98");
    weaponValueIndexer.set("duhar", "Duhar");
    weaponValueIndexer.set("neuraxis-f22", "Neuraxis F22");
    weaponValueIndexer.set("rektor-100rd", "Rektor 100rd");
    weaponValueIndexer.set("warpig", "Warpig");
    weaponValueIndexer.set("static-random-rifles", "Random Rifle");
    weaponValueIndexer.set("farsight", "Farsight");
    weaponValueIndexer.set("knop-22", "Knop .22");
    weaponValueIndexer.set("m182-pierre-fusil", "M182 Pierre-Fusil");
    weaponValueIndexer.set("tailor-marksman-mkii", "Tailor Marksman MKII");
    weaponValueIndexer.set("static-random-sniper-rifles", "Random Sniper");
    weaponValueIndexer.set("d4rt", "D4RT");
    weaponValueIndexer.set("dolphin-99", "Dolphin 99");
    weaponValueIndexer.set("impala-gravita", "Impala Gravita");
    weaponValueIndexer.set("longboy", "Longboy");
    weaponValueIndexer.set("rokua-308", "Rokua .308");
    weaponValueIndexer.set("terrier-urb", "Terrier URB");

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
        await loadScrolls();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("oil-dropdown")) {
        const data = await loadOils();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("weapon-dropdown")) {
        const data = await loadWeapons();
        await loadOrigWeapons();
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
    if (select.classList.contains("head-dropdown")) {
        const data = await loadHeadArmor();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("chest-dropdown")) {
        const data = await loadChestArmor();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("foot-dropdown")) {
        const data = await loadFootArmor();
        state.options = normalizeOptions(data);
    }
    if (select.classList.contains("trinket-dropdown")) {
        const data = await loadTrinkets();
        state.options = normalizeOptions(data);
    }
    
    // ===== BUILD DOM N SHIT BROTHERRRRRR =====
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
    if (isMobile === true) {
        panel.className = "custom-select-panel-mobile";
    }
    else {
        panel.className = "custom-select-panel";
    }
    panel.id = (`${select.id}-custom-panel`);

    // build search stuff
    const searchInput = document.createElement("input");
    if (isMobile === true) {
        searchInput.className = "select-mobile custom-select-search";
    }
    else {
        searchInput.className = "custom-select-search";
    }
    
    searchInput.placeholder = "Search...";
    searchInput.id = (`${select.id}-custom-search`)

    const searchX = document.createElement("button");
    if (isMobile === true) {
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
    if (isMobile === true) {
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
    if (isMobile === true) {
        buttonAlph.className = "custom-select-panel-button-mobile";
        buttonAlph.innerHTML = "<span class='fa-solid fa-arrow-down-a-z' style='font-size: 50px; display: flex; text-align: center; justify-content: center; width: auto; height: auto;'></span>"; 
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
    if (isMobile === true) {
        buttonPos.className = "custom-select-panel-button-mobile";
        buttonPos.innerHTML = "<span class='fa-solid fa-arrow-down-9-1' style='font-size: 50px; display: flex; text-align: center; justify-content: center; width: auto; height: auto;'></span>";
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
    
    if (isMobile === true) {
        buttonNeg.className = "custom-select-panel-button-mobile";
        buttonNeg.innerHTML = "<span class='fa-solid fa-arrow-down-1-9' style='font-size: 50px; display: flex; text-align: center; justify-content: center; width: auto; height: auto;'></span>";
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
    if (isMobile === true) {
        buttonClose.className = "custom-select-panel-close-mobile";
        buttonClose.innerHTML = "<span style='font-size: 50px; display: flex;' class='fa-solid fa-xmark'></span>"
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
    if (isMobile === true) {
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
                dropnamecheck = "Barrel";
                break;
            case "opticselector":
                dropnamecheck = "Optic";
                break;
            case "laserselector":
                dropnamecheck = "Laser";
                break;
            case "firemodeselector":
                dropnamecheck = "Firemode";
                break;
            case "chamberselector":
                dropnamecheck = "Chamber";
                break;
            case "headselector":
                dropnamecheck = "Head Armor";
                break;
            case "chestselector":
                dropnamecheck = "Chest Armor";
                break;
            case "lfootselector":
                dropnamecheck = "Left Foot Armor";
                break;
            case "rfootselector":
                dropnamecheck = "Right Foot Armor";
                break;
            case "trinket1selector":
                dropnamecheck = "Trinket 1";
                break;
            case "trinket2selector":
                dropnamecheck = "Trinket 2";
                break;
            case "trinket3selector":
                dropnamecheck = "Trinket 3";
                break;
            case "trinket4selector":
                dropnamecheck = "Trinket 4";
                break;
            default:
        }
        dropname.innerHTML = dropnamecheck;
        topRowClose.append(dropname, buttonClose);
    }
    else {
        topRowClose.append(buttonClose);
    }

    const header = document.createElement("div");
    header.classList = "custom-select-header";

    topRow.append(topRowSort, topRowClose)
    header.append(topRow, searchContainer)
    panel.append(header, list);
    
    wrapper.append(control, panel);

    searchInput.addEventListener("focus", () => {
    if (wrapper.classList.contains("open"))
        decideDirection();
    });

    // Up or down
    function decideDirection() {
        wrapper.classList.remove("drop-up");

        const rect = panel.getBoundingClientRect();
        const panelHeight = panel.offsetHeight || 380;

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
        if (data.ArmorHead) {
            const heads = data.ArmorHead;

            Object.entries(heads).forEach(([key, head]) => {

                if (!head.Name || ["none", "Default"].includes(head.Name)) return;

                let group = head.TypePositive1 || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: head.Name,
                    value: armorHeadNameIndexer.get(head.Name),
                    group: group,
                    meta: head
                });
            });
        }
        if (data.ArmorChest) {
            const chests = data.ArmorChest;

            Object.entries(chests).forEach(([key, chest]) => {

                if (!chest.Name || ["none", "Default"].includes(chest.Name)) return;

                let group = chest.TypePositive1 || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: chest.Name,
                    value: armorChestNameIndexer.get(chest.Name),
                    group: group,
                    meta: chest
                });
            });
        }
        if (data.ArmorFeet) {
            const feet = data.ArmorFeet;

            Object.entries(feet).forEach(([key, foot]) => {

                if (!foot.Name || ["none", "Default"].includes(foot.Name)) return;

                let group = foot.TypePositive1 || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: foot.Name,
                    value: armorFootNameIndexer.get(foot.Name),
                    group: group,
                    meta: foot
                });
            });
        }
        if (data.Trinket) {
            const trinks = data.Trinket;

            Object.entries(trinks).forEach(([key, trink]) => {

                if (!trink.Name || ["none", "Default"].includes(trink.Name)) return;

                let group = trink.TypePositive1 || "Other";

                if (group === "None") group = "Other";

                results.push({
                    label: trink.Name,
                    value: trinketNameIndexer.get(trink.Name),
                    group: group,
                    meta: trink
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
        "Random Bullet Size Oil",
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
        "Random Head Armor",
        "Random Chest Armor",
        "Random Foot Armor",
        "Random Trinket",
        "None"
    ]);

    // ===== SORTING (EXTENSIBLE, PLEASEEEEEEE) =====
    const sorters = {
        default: (a, b) => a.label.localeCompare(b.label),
        scorepos: (a,b) => a.meta.ScorePos - b.meta.ScorePos,
        scoreposdec: (b,a) => a.meta.ScorePos - b.meta.ScorePos,
        scoreneg: (a,b) => a.meta.ScoreNeg - b.meta.ScoreNeg,
        scorenegdec: (b,a) => a.meta.ScoreNeg - b.meta.ScoreNeg
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
            o.meta.SearchDescription.toLowerCase().includes(s)
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
                if (isMobile === true) {
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
                el.dataset.DupeFilter = opt.meta.DupeFilter;
                if (el.dataset.DupeFilter === "true") {
                    el.classList.add("filtered-option");
                }
                if (isMobile === true) {
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

    function dupeFilter(optval) {
        state.options.forEach((o) => {
            if (o.value === optval) {
                o.meta.DupeFilter = true;
            }
        });
    }
    function removeDupeFilter(optval) {
        state.options.forEach((o) => {
            if (o.value === optval) {
                o.meta.DupeFilter = false;
            }
        });
        updateDisplay();
    }

    // expose API
    select.getValue = getValue;
    select.setValue = setValue;
    select.updateDisplay = updateDisplay;
    select.render = render;
    select.setSortMode = setSortMode;
    select.setGroupMode = setGroupMode;
    select.dupeFilter = dupeFilter;
    select.removeDupeFilter = removeDupeFilter;
    
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

    // keyboard support - extend this pls
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
        dupeFilter,
        removeDupeFilter,
        setSortMode: (mode) => {
            sortMode = mode;
            render();
        },
        setGroupMode
    };
}

function clickLink(dest) {
    switch (dest) {
        case "discord":
            window.open('https://discord.gg/gt7rkb5543', '_blank');
            break;
        case "vern":
            window.open('https://verncarson.com', '_blank');
            break;
        case "wiki":
            window.open('https://sulfur.wiki.gg/', '_blank');
            break;
    }
}

function scrollExtendedStats() {
    window.scrollTo({ top: 9999999, behavior: 'smooth' });
}

function scrollMobileLeft() {
    scrollBlock = true;
    document.getElementById("mobilescrollbuttonright").classList.remove("mobile-scroll-button-selected");
    document.getElementById("mobilescrollbuttonleft").classList.add("mobile-scroll-button-selected");
    let dascroll = document.getElementById("mainbuildcontainer");
    dascroll.addEventListener("scrollend", (event) => { 
    scrollBlock = false;
    });
    dascroll.scrollTo({ left: 0, behavior: 'smooth' });
}
function scrollMobileRight() {
    scrollBlock = true;
    document.getElementById("mobilescrollbuttonleft").classList.remove("mobile-scroll-button-selected");
    document.getElementById("mobilescrollbuttonright").classList.add("mobile-scroll-button-selected");
    let dascroll = document.getElementById("mainbuildcontainer");
    dascroll.addEventListener("scrollend", (event) => { 
    scrollBlock = false;
    });
    dascroll.scrollTo({ left: 9999999, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function swapScreenshotMode() {
    let mode = document.getElementById("screenshottype");
    if (mode.textContent === "Simple") {
        mode.textContent = "Ext";
    }
    else {
        mode.textContent = "Simple";
    }
}

// Screenshots
async function captureElement(activated, save) {
    
    let mode = document.getElementById("screenshottype");
    let newtarget = null;
    document.getElementById("helicoptermode").style.display = "none";

    if (isMobile === false) {
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

        document.getElementById("sharingbar").style.display = "none";
        document.getElementById("weaponnamebar").style.width = "100%";

        document.getElementById("bigboxdeals").classList.remove("bigboxdeals");
        document.getElementById("bigboxdeals").classList.add("bigboxdeals-screen");

        document.getElementById("secondpagediv").classList.remove("secondpagediv");
        document.getElementById("secondpagediv").classList.add("secondpagediv-screen");

        document.getElementById("containerglass").style.opacity = "30%";

        let node = null;
        let clone = null;
        let node1 = null;
        let clone1 = null;
        
        if (mode.textContent === "Simple") {
            document.getElementById("containerheaders").classList.remove("containerheaders");
            document.getElementById("containerheaders").classList.add("mobile-arrow");
            document.getElementById("build-chooser-button-div").style.display = "none";
            document.getElementById("targetme").style.backgroundColor = "#2D424B";
            document.getElementById("targetme").classList.remove("build-card");
            document.getElementById("targetme").classList.add("build-card-screen");
            document.getElementById("oilequipwrapper").style.marginTop = "1px";
            newtarget = "targetme";
        }
        else {
            node = document.getElementById("extendstatbox");
            clone = node.cloneNode(true);
            node1 = document.getElementById("targetcontainer");
            clone1 = node1.cloneNode(true);
            node1.style.display = "none";
            clone1.childNodes[7].style.maxWidth = "68vw";
            document.getElementById("screenshotcontainer").style.display = "grid";
            document.getElementById("screenshotcontainer").append(clone1, clone);
            document.getElementById("screenshotcontainer").style.backgroundColor = "#2D424B";
            newtarget = "screenshotcontainer";
        }

        await takeScreenshot(activated, save, newtarget);

        if (mode.textContent === "Simple") {
            document.getElementById("containerheaders").classList.remove("mobile-arrow");
            document.getElementById("containerheaders").classList.add("containerheaders");
            document.getElementById("build-chooser-button-div").style.display = "";
            document.getElementById("targetme").style.backgroundColor = "";
            document.getElementById("targetme").classList.remove("build-card-screen");
            document.getElementById("targetme").classList.add("build-card");
            document.getElementById("oilequipwrapper").style.marginTop = "0";
        }
        else {
            clone.remove();
            clone1.remove();
            node1.style.display = "";
        }

        document.getElementById("sharingbar").style.display = "flex";
        document.getElementById("weaponnamebar").style.width = "30%";
        document.getElementById("bigboxdeals").classList.remove("bigboxdeals-screen");
        document.getElementById("bigboxdeals").classList.add("bigboxdeals");
        document.getElementById("secondpagediv").classList.remove("secondpagediv-screen");
        document.getElementById("secondpagediv").classList.add("secondpagediv");
        document.getElementById("containerglass").style.opacity = "100%";
        document.getElementById("targetme").style.backgroundColor = "";
        document.getElementById("boxglowthing").classList.add("boxglowthing");
        document.getElementById("otherboxthing").classList.add("otherboxthing");
        document.getElementById("weaponimage").classList.add("weaponimage");
        document.getElementById("weaponimage").classList.remove("weaponimage2");
    }
    else {
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

        document.getElementById("sharingbar").style.display = "none";
        document.getElementById("weaponnamebar").style.width = "100%";

        document.getElementById("secondpagediv").classList.remove("secondpagediv-mobile");
        document.getElementById("secondpagediv").classList.add("secondpagediv-screen-mobile");

        document.getElementById("containerglass").style.opacity = "30%";

        document.getElementById("targetcontainer").style.backgroundColor = "#2D424B";
        document.getElementById("mobilearrow").style.display = "none";
        document.getElementById("build-chooser-button-div").style.display = "none";

        let node = null;
        let clone = null;
        let node1 = null;
        let clone1 = null;
        
        if (mode.textContent === "Simple") {
            document.getElementById("extendstatbox").style.display = "none";
            document.getElementById("targetme").style.backgroundColor = "#2D424B";
            document.getElementById("oilequipwrapper").style.marginTop = "1px";
            newtarget = "targetme";
        }
        else {
            newtarget = "targetcontainer";
        }

        await takeScreenshot(activated, save, newtarget);

        if (mode.textContent === "Simple") {
            document.getElementById("extendstatbox").style.display = "";
            document.getElementById("targetme").style.backgroundColor = "";
            document.getElementById("oilequipwrapper").style.marginTop = "0";
        }
        
        document.getElementById("sharingbar").style.display = "flex";
        document.getElementById("weaponnamebar").style.width = "30%";
        document.getElementById("build-chooser-button-div").style.display = "";
        document.getElementById("secondpagediv").classList.remove("secondpagediv-screen-mobile");
        document.getElementById("secondpagediv").classList.add("secondpagediv-mobile");
        document.getElementById("containerglass").style.opacity = "100%";
        document.getElementById("targetme").style.backgroundColor = "";
        document.getElementById("boxglowthing").classList.add("boxglowthing");
        document.getElementById("otherboxthing").classList.add("otherboxthing");
        document.getElementById("weaponimage").classList.add("weaponimage");
        document.getElementById("weaponimage").classList.remove("weaponimage2");
    }
    document.getElementById("helicoptermode").style.display = "";
}

function takeScreenshot(activated, save, target2) {
    let mode = document.getElementById("screenshottype");
    let screeny = null;
    const target = document.getElementById(target2);
    infoboxClear();

    html2canvas(target, {
        scale: 1.4,
        allowTaint: true,
        removeContainer: true
        
    }).then(canvas => {
        canvas.toBlob((blob) => {
            
            const cbi2 = new window.ClipboardItem({ 
                'image/png': blob,
            });
            if (save === true) {
                getNewFileHandle(blob);
            }
            else if (activated === true ) {
                navigator.clipboard.write([cbi2]);
            }
            screeny = blob;
        });
    });

    return true;
}

function getNewFileHandle(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    let currentURL = window.location.hash;
    let split = currentURL.split("#!");
    let resplit = split[1]
    let decoded = decodeURIComponent(resplit);
    let split2 = decoded.split("build");

    a.href = url;
    a.download = `${split2[1]}.png`;
    a.style.hidden = "true";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

const favoriteOils = new Set(
    JSON.parse(localStorage.getItem("favoriteOils") || "[]")
);

function saveFavorites() {
    localStorage.setItem("favoriteOils", JSON.stringify([...favoriteOils]));
}

let buildToEncode = null;

let buildBlocker = false;

function encodeBuildAsUri(last) {
    if (buildBlocker === true) {
        return;
    }
    if (last === true) {
        console.info("KBH: Encoding build as URI string and applying to URL");

        buildToEncode = "build";
        function toBuild(value, key, map) {
            
            buildToEncode += value.Value;
            buildToEncode += "+";
        }
        coreSelections.forEach(toBuild);
        const encodedBuild = "#!" + encodeURIComponent(buildToEncode);
        history.pushState(encodedBuild, "", encodedBuild);
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


function decodeUriAsBuild(source, link) {
    console.info("KBH: Decoding URL to detect build");
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
        return false;
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
                if (value === undefined || value === "static-no-selection" || value === "") {
                        value = "none";
                    }
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
                    let selaser = laserValueIndexer.get(value);
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
                if (key === "head") {
                    let selhead = armorHeadValueIndexer.get(value);
                    selectedItem = getHeadByName(selhead);
                    addToCoreMap("head", selectedItem, value);
                    select = document.getElementById("headselector");
                    select.setValue(value);
                }
                if (key === "chest") {
                    let selchest = armorChestValueIndexer.get(value);
                    selectedItem = getChestByName(selchest);
                    addToCoreMap("chest", selectedItem, value);
                    select = document.getElementById("chestselector");
                    select.setValue(value);
                }
                if (key === "lfoot") {
                    let sellfoot = armorFootValueIndexer.get(value);
                    selectedItem = getFootByName(sellfoot);
                    addToCoreMap("lfoot", selectedItem, value);
                    select = document.getElementById("lfootselector");
                    select.setValue(value);
                }
                if (key === "rfoot") {
                    let selrfoot = armorFootValueIndexer.get(value);
                    selectedItem = getFootByName(selrfoot);
                    addToCoreMap("rfoot", selectedItem, value);
                    select = document.getElementById("rfootselector");
                    select.setValue(value);
                }
                if (key === "trinket1") {
                    let selt1 = trinketValueIndexer.get(value);
                    selectedItem = getTrinketByName(selt1);
                    addToCoreMap("trinket1", selectedItem, value);
                    select = document.getElementById("trinket1selector");
                    select.setValue(value);
                }
                if (key === "trinket2") {
                    let selt2 = trinketValueIndexer.get(value);
                    selectedItem = getTrinketByName(selt2);
                    addToCoreMap("trinket2", selectedItem, value);
                    select = document.getElementById("trinket2selector");
                    select.setValue(value);
                }
                if (key === "trinket3") {
                    let selt3 = trinketValueIndexer.get(value);
                    selectedItem = getTrinketByName(selt3);
                    addToCoreMap("trinket3", selectedItem, value);
                    select = document.getElementById("trinket3selector");
                    select.setValue(value);
                }
                if (key === "trinket4") {
                    let selt4 = trinketValueIndexer.get(value);
                    selectedItem = getTrinketByName(selt4);
                    addToCoreMap("trinket4", selectedItem, value);
                    select = document.getElementById("trinket4selector");
                    select.setValue(value);
                }
            }
                    
        }
        
        
        coreSelections.forEach(rebuildBuild);
        let yeeteth = tempSelections.get("weapon");
        
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
    return true;
}

// It's time to shuffle
function shuffle(array) {
    console.info("KBH: Shuffling...");
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function buildLink() {
    if (document.getElementById("buttonCopyBuildLink").textContent === "Copy") {
        copyBuildLink();
    }
    else {
        pasteBuildLink();
    }
}

function copyLoadButton() {
    if (window.location.href === document.getElementById("linkbox").value) {
        document.getElementById("buttonCopyBuildLink").textContent = "Copy";
    }
    else {
        document.getElementById("buttonCopyBuildLink").textContent = "Load"
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
    shallNotPass = true;
    document.getElementById("weapons").setValue("static-random-all-weapons");
    shallNotPass = false;
    rollAggregator('weapon', 'weapons', 1, "static-random-all-weapons", "weapon", true, "setAllAsRandom");
    randomizeAllAttachments();
    randomizeAllOils();
    randomizeAllArmor();
    randomizeAllTrinkets();
}

function makeEquipmentMenuVisible() {
    if (isMobile === true) {
        document.getElementById("weapon-parts-button").classList.remove("menu-switcher-button-selected");
        document.getElementById("equipment-button").classList.add("menu-switcher-button-selected");
        document.getElementById("weaponstuffcontainer").classList.add("hide-selectors-mobile");
        document.getElementById("weaponstuffcontainerequip").classList.remove("hide-selectors-mobile");
    }
    else {
        document.getElementById("weapon-parts-button").classList.remove("menu-switcher-button-selected");
        document.getElementById("equipment-button").classList.add("menu-switcher-button-selected");
        document.getElementById("weaponstuffcontainer").classList.add("hide-selectors");
        document.getElementById("weaponstuffcontainerequip").classList.remove("hide-selectors");
    }
}

function makeWeaponStuffMenuVisible() {
    if (isMobile === true) {
        document.getElementById("equipment-button").classList.remove("menu-switcher-button-selected");
        document.getElementById("weapon-parts-button").classList.add("menu-switcher-button-selected");
        document.getElementById("weaponstuffcontainerequip").classList.add("hide-selectors-mobile");
        document.getElementById("weaponstuffcontainer").classList.remove("hide-selectors-mobile");
    }
    else {
        document.getElementById("equipment-button").classList.remove("menu-switcher-button-selected");
        document.getElementById("weapon-parts-button").classList.add("menu-switcher-button-selected");
        document.getElementById("weaponstuffcontainerequip").classList.add("hide-selectors");
        document.getElementById("weaponstuffcontainer").classList.remove("hide-selectors");
    }
}

function checkAnimation() {
    if(animationCardEnd === false) {
       window.setTimeout(checkAnimation, 100);
    }
    /*else {
        console.log("should be first before animation")
        animationCardEnd = false;
        return true;
    }*/
}

async function rollFiveBuilds() {
    animationCardEnd = false;
    resetBuild1Selections();
    resetBuild2Selections();
    resetBuild3Selections();
    resetBuild4Selections();
    resetBuild5Selections();
    
    buildSwapping = true;
    setBuildAsActive(1);
    buildSwapping = false;
    setTimeout(() => {
        setAllAsRandom();
    },500);
    setTimeout(() => {
        buildSwapping = true;
        setBuildAsActive(2);
        buildSwapping = false;
    },1500);
    setTimeout(() => {
        setAllAsRandom();
    },2000);
    setTimeout(() => {
        buildSwapping = true;
        setBuildAsActive(3);
        buildSwapping = false;
    },3000);
    setTimeout(() => {
        setAllAsRandom();
    },3500);
    setTimeout(() => {
        buildSwapping = true;
        setBuildAsActive(4);
        buildSwapping = false;
    },4500);
    setTimeout(() => {
        setAllAsRandom();
    },5000);
    setTimeout(() => {
        buildSwapping = true;
        setBuildAsActive(5);
        buildSwapping = false;
    },6000);
    setTimeout(() => {
        setAllAsRandom();
    },6500);
    setTimeout(() => {
        buildSwapping = false;
    },7500);
}

function setBuildButton(sel) {
    document.querySelectorAll(".build-chooser-button-selected").forEach(e => {e.classList.remove("build-chooser-button-selected")});
    switch (sel) {
        case 1:
            document.getElementById("build-button-1").classList.add("build-chooser-button-selected");
            break;
        case 2:
            document.getElementById("build-button-2").classList.add("build-chooser-button-selected");
            break;
        case 3:
            document.getElementById("build-button-3").classList.add("build-chooser-button-selected");
            break;
        case 4:
            document.getElementById("build-button-4").classList.add("build-chooser-button-selected");
            break;
        case 5:
            document.getElementById("build-button-5").classList.add("build-chooser-button-selected");
            break;
    }
    return true;
}

function cloneBuild(sel) {
    setBuildAsActive(sel, true);
}

async function setBuildAsActive(sel, clone) {
    if (selectedBuild === sel) {
        return;
    }
    else {
        if (clone === true) {
            buildSwapping = true;

            let build = null;

            switch (selectedBuild) {
                case 1:
                    build = build1Selections;
                    break;
                case 2:
                    build = build2Selections;
                    break;
                case 3:
                    build = build3Selections;
                    break;
                case 4:
                    build = build4Selections;
                    break;
                case 5:
                    build = build5Selections;
                    break;
            }
            
            selectedBuild = sel;
            setBuildButton(sel)

            if (shallNotPass === false) {
                shallNotPass = true;
                document.getElementById("weapons").setValue(build.get("weapon").Value);
                document.getElementById("barrelselector").setValue(build.get("barrel").Value);
                document.getElementById("opticselector").setValue(build.get("optic").Value);
                document.getElementById("laserselector").setValue(build.get("laser").Value);
                document.getElementById("chamberselector").setValue(build.get("chamber").Value);
                document.getElementById("oils1selector").setValue(build.get("ench1").Value);
                document.getElementById("oils2selector").setValue(build.get("ench2").Value);
                document.getElementById("oils3selector").setValue(build.get("ench3").Value);
                document.getElementById("oils4selector").setValue(build.get("ench4").Value);
                document.getElementById("oils5selector").setValue(build.get("ench5").Value);
                document.getElementById("headselector").setValue(build.get("head").Value);
                document.getElementById("chestselector").setValue(build.get("chest").Value);
                document.getElementById("lfootselector").setValue(build.get("lfoot").Value);
                document.getElementById("rfootselector").setValue(build.get("rfoot").Value);
                document.getElementById("trinket1selector").setValue(build.get("trinket1").Value);
                document.getElementById("trinket2selector").setValue(build.get("trinket2").Value);
                document.getElementById("trinket3selector").setValue(build.get("trinket3").Value);
                document.getElementById("trinket4selector").setValue(build.get("trinket4").Value);
                rollAggregator('weapon', 'weapons', 1, build.get("weapon").Value, "weapon", false, "setBuildAsActive");
                rollAggregator('barrel', 'barrelselector', 1, build.get("barrel").Value, "attachment", false, "setBuildAsActive");
                rollAggregator('optic', 'opticselector', 2, build.get("optic").Value, "attachment", false, "setBuildAsActive");
                rollAggregator('laser', 'laserselector', 3, build.get("laser").Value, "attachment", false, "setBuildAsActive");
                rollAggregator('chamber', 'chamberselector', 5, build.get("chamber").Value, "attachment", false, "setBuildAsActive");
                rollAggregator('ench1', 'oils1selector', 1, build.get("ench1").Value, "ench", false, "setBuildAsActive");
                rollAggregator('ench2', 'oils2selector', 2, build.get("ench2").Value, "ench", false, "setBuildAsActive");
                rollAggregator('ench3', 'oils3selector', 3, build.get("ench3").Value, "ench", false, "setBuildAsActive");
                rollAggregator('ench4', 'oils4selector', 4, build.get("ench4").Value, "ench", false, "setBuildAsActive");
                rollAggregator('ench5', 'oils5selector', 5, build.get("ench5").Value, "ench", false, "setBuildAsActive");
                rollAggregator('head', 'headselector', 1, build.get("head").Value, "armor", false, "setBuildAsActive");
                rollAggregator('chest', 'chestselector', 2, build.get("chest").Value, "armor", false, "setBuildAsActive");
                rollAggregator('lfoot', 'lfootselector', 3, build.get("lfoot").Value, "armor", false, "setBuildAsActive");
                rollAggregator('rfoot', 'rfootselector', 4, build.get("rfoot").Value, "armor", false, "setBuildAsActive");
                rollAggregator('trinket1', 'trinket1selector', 1, build.get("trinket1").Value, "trinket", false, "setBuildAsActive");
                rollAggregator('trinket2', 'trinket2selector', 2, build.get("trinket2").Value, "trinket", false, "setBuildAsActive");
                rollAggregator('trinket3', 'trinket3selector', 3, build.get("trinket3").Value, "trinket", false, "setBuildAsActive");
                rollAggregator('trinket4', 'trinket4selector', 4, build.get("trinket4").Value, "trinket", true, "setBuildAsActive");
                buildSwapping = false;
            }

        }
        else {
            buildSwapping = true;
            setBuildButton(sel)

            selectedBuild = sel;
            let build = null;

            switch (selectedBuild) {
                case 1:
                    build = build1Selections;
                    break;
                case 2:
                    build = build2Selections;
                    break;
                case 3:
                    build = build3Selections;
                    break;
                case 4:
                    build = build4Selections;
                    break;
                case 5:
                    build = build5Selections;
                    break;
            }
            if (shallNotPass === false) {
                shallNotPass = true;
                document.getElementById("weapons").setValue(build.get("weapon").Value);
                document.getElementById("barrelselector").setValue(build.get("barrel").Value);
                document.getElementById("opticselector").setValue(build.get("optic").Value);
                document.getElementById("laserselector").setValue(build.get("laser").Value);
                document.getElementById("chamberselector").setValue(build.get("chamber").Value);
                document.getElementById("oils1selector").setValue(build.get("ench1").Value);
                document.getElementById("oils2selector").setValue(build.get("ench2").Value);
                document.getElementById("oils3selector").setValue(build.get("ench3").Value);
                document.getElementById("oils4selector").setValue(build.get("ench4").Value);
                document.getElementById("oils5selector").setValue(build.get("ench5").Value);
                document.getElementById("headselector").setValue(build.get("head").Value);
                document.getElementById("chestselector").setValue(build.get("chest").Value);
                document.getElementById("lfootselector").setValue(build.get("lfoot").Value);
                document.getElementById("rfootselector").setValue(build.get("rfoot").Value);
                document.getElementById("trinket1selector").setValue(build.get("trinket1").Value);
                document.getElementById("trinket2selector").setValue(build.get("trinket2").Value);
                document.getElementById("trinket3selector").setValue(build.get("trinket3").Value);
                document.getElementById("trinket4selector").setValue(build.get("trinket4").Value);
                rollSelections('weapon', 'weapons', 1, build.get("weapon").Value, "weapon", false, "setBuildAsActive");
                rollSelections('barrel', 'barrelselector', 1, build.get("barrel").Value, "attachment", false, "setBuildAsActive");
                rollSelections('optic', 'opticselector', 2, build.get("optic").Value, "attachment", false, "setBuildAsActive");
                rollSelections('laser', 'laserselector', 3, build.get("laser").Value, "attachment", false, "setBuildAsActive");
                rollAggregator('chamber', 'chamberselector', 5, build.get("chamber").Value, "attachment", true, "setBuildAsActive");
                rollSelections('ench1', 'oils1selector', 1, build.get("ench1").Value, "ench", false, "setBuildAsActive");
                rollSelections('ench2', 'oils2selector', 2, build.get("ench2").Value, "ench", false, "setBuildAsActive");
                rollSelections('ench3', 'oils3selector', 3, build.get("ench3").Value, "ench", false, "setBuildAsActive");
                rollSelections('ench4', 'oils4selector', 4, build.get("ench4").Value, "ench", false, "setBuildAsActive");
                rollAggregator('ench5', 'oils5selector', 5, build.get("ench5").Value, "ench", false, "setBuildAsActive");
                rollAggregator('head', 'headselector', 1, build.get("head").Value, "armor", false, "setBuildAsActive");
                rollAggregator('chest', 'chestselector', 2, build.get("chest").Value, "armor", false, "setBuildAsActive");
                rollAggregator('lfoot', 'lfootselector', 3, build.get("lfoot").Value, "armor", false, "setBuildAsActive");
                rollAggregator('rfoot', 'rfootselector', 4, build.get("rfoot").Value, "armor", false, "setBuildAsActive");
                rollAggregator('trinket1', 'trinket1selector', 1, build.get("trinket1").Value, "trinket", false, "setBuildAsActive");
                rollAggregator('trinket2', 'trinket2selector', 2, build.get("trinket2").Value, "trinket", false, "setBuildAsActive");
                rollAggregator('trinket3', 'trinket3selector', 3, build.get("trinket3").Value, "trinket", false, "setBuildAsActive");
                rollAggregator('trinket4', 'trinket4selector', 4, build.get("trinket4").Value, "trinket", true, "setBuildAsActive");
                
                buildSwapping = false;
            }
        }
            //await oilRemover();
            await attachmentFilter();
            shallNotPass = false;
    }
    setTimeout(() => {
        return true;
    },200);
}

function commitAll() {
    commitSelection('weapon', 'weapons', 'weapon');
    commitAllEnch();
    commitAllAtt();
    commitAllArmor();
    commitAllTrink();
}

function resetAll() {
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("weapons").setValue("p38-dirk");

        rollAggregator('weapon', 'weapons', 1, "p38-dirk", "weapon", false, "resetAll");
        
        document.getElementById("oils1selector").setValue("static-no-selection");
        document.getElementById("oils2selector").setValue("static-no-selection");
        document.getElementById("oils3selector").setValue("static-no-selection");
        document.getElementById("oils4selector").setValue("static-no-selection");
        document.getElementById("oils5selector").setValue("static-no-selection");
        
        rollAggregator('ench1', 'oils1selector', 1, "static-no-selection", "ench", true, "resetAll");
        rollAggregator('ench2', 'oils2selector', 2, "static-no-selection", "ench", true, "resetAll");
        rollAggregator('ench3', 'oils3selector', 3, "static-no-selection", "ench", true, "resetAll");
        rollAggregator('ench4', 'oils4selector', 4, "static-no-selection", "ench", true, "resetAll");
        rollAggregator('ench5', 'oils5selector', 5, "static-no-selection", "ench", true, "resetAll");

        document.getElementById("barrelselector").setValue("none");
        document.getElementById("opticselector").setValue("none");
        document.getElementById("laserselector").setValue("none");
        document.getElementById("firemodeselector").setValue("none");
        document.getElementById("chamberselector").setValue("none");
        
        rollAggregator('barrel', 'barrelselector', 1, "none", "attachment", true, "resetAll");
        rollAggregator('optic', 'opticselector', 2, "none", "attachment", true, "resetAll");
        rollAggregator('laser', 'laserselector', 3, "none", "attachment", true, "resetAll");
        rollAggregator('firemode', 'firemodeselector', 4, "none", "attachment", true, "resetAll");
        rollAggregator('chamber', 'chamberselector', 5, "none", "attachment", true, "resetAll");

        document.getElementById("headselector").setValue("none");
        document.getElementById("chestselector").setValue("none");
        document.getElementById("lfootselector").setValue("none");
        document.getElementById("rfootselector").setValue("none");
        
        rollAggregator('head', 'headselector', 1, "none", "armor", true, "resetAll");
        rollAggregator('chest', 'chestselector', 2, "none", "armor", true, "resetAll");
        rollAggregator('lfoot', 'lfootselector', 3, "none", "armor", true, "resetAll");
        rollAggregator('rfoot', 'rfootselector', 4, "none", "armor", true, "resetAll");

        document.getElementById("trinket1selector").setValue("none");
        document.getElementById("trinket2selector").setValue("none");
        document.getElementById("trinket3selector").setValue("none");
        document.getElementById("trinket4selector").setValue("none");
        
        rollAggregator('trinket1', 'trinket1selector', 1, "none", "trinket", true, "resetAll");
        rollAggregator('trinket2', 'trinket2selector', 2, "none", "trinket", true, "resetAll");
        rollAggregator('trinket3', 'trinket3selector', 3, "none", "trinket", true, "resetAll");
        rollAggregator('trinket4', 'trinket4selector', 4, "none", "trinket", true, "resetAll");
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
        rollAggregator('weapon', 'weapons', 1, "p38-dirk", "weapon", true, "resetGun");
        shallNotPass = false;
    }
}

function randomizeGun() {
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("weapons").setValue("static-random-all-weapons");
        rollAggregator('weapon', 'weapons', 1, "static-random-all-weapons", "weapon", true, "randomizeGun");
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
        rollAggregator(key, selector, index, value, type, true, "setSlot");
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
            rollSelections('ench1', 'oils1selector', 1, "static-random-all-enchantments", "ench", false, "randomizeAllOils");
            rollSelections('ench2', 'oils2selector', 2, "static-random-all-oils", "ench", false, "randomizeAllOils");
            rollSelections('ench3', 'oils3selector', 3, "static-random-all-oils", "ench", false, "randomizeAllOils");
            rollSelections('ench4', 'oils4selector', 4, "static-random-all-oils", "ench", false, "randomizeAllOils");
            rollAggregator('ench5', 'oils5selector', 5, "static-random-all-oils", "ench", true, "randomizeAllOils");
        shallNotPass = false;
    }
}

function randomizeAllArmor() {
    console.info("KBH: Randomizing all armor slots");
    if (shallNotPass === false) {
        shallNotPass = true;
            document.getElementById("headselector").setValue("static-random-all-head-armor");
            document.getElementById("chestselector").setValue("static-random-all-chest-armor");
            document.getElementById("lfootselector").setValue("static-random-all-foot-armor");
            document.getElementById("rfootselector").setValue("static-random-all-foot-armor");
            rollSelections('head', 'headselector', 1, "static-random-all-head-armor", "armor", false, "randomizeAllArmor");
            rollSelections('chest', 'chestselector', 2, "static-random-all-chest-armor", "armor", false, "randomizeAllArmor");
            rollSelections('lfoot', 'lfootselector', 3, "static-random-all-foot-armor", "armor", false, "randomizeAllArmor");
            rollAggregator('rfoot', 'rfootselector', 4, "static-random-all-foot-armor", "armor", true, "randomizeAllArmor");
        shallNotPass = false;
    }
}

function randomizeAllTrinkets() {
    console.info("KBH: Randomizing all trinket slots");
    if (shallNotPass === false) {
        shallNotPass = true;
            document.getElementById("trinket1selector").setValue("static-random-all-trinkets");
            document.getElementById("trinket2selector").setValue("static-random-all-trinkets");
            document.getElementById("trinket3selector").setValue("static-random-all-trinkets");
            document.getElementById("trinket4selector").setValue("static-random-all-trinkets");
            rollSelections('trinket1', 'trinket1selector', 1, "static-random-all-trinkets", "trinket", false, "randomizeAllTrinkets");
            rollSelections('trinket2', 'trinket2selector', 2, "static-random-all-trinkets", "trinket", false, "randomizeAllTrinkets");
            rollSelections('trinket3', 'trinket3selector', 3, "static-random-all-trinkets", "trinket", false, "randomizeAllTrinkets");
            rollAggregator('trinket4', 'trinket4selector', 4, "static-random-all-trinkets", "trinket", true, "randomizeAllTrinkets");
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
            
            rollSelections('ench1', 'oils1selector', 1, "static-no-selection", "ench", false, "resetAllOils");
            rollSelections('ench2', 'oils2selector', 2, "static-no-selection", "ench", false, "resetAllOils");
            rollSelections('ench3', 'oils3selector', 3, "static-no-selection", "ench", false, "resetAllOils");
            rollSelections('ench4', 'oils4selector', 4, "static-no-selection", "ench", false, "resetAllOils");
            rollAggregator('ench5', 'oils5selector', 5, "static-no-selection", "ench", true, "resetAllOils");
        shallNotPass = false;
    }
}

function randomizeAllAttachments(all) {
    console.info("KBH: Randomizing all attachment slots");
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("barrelselector").setValue("static-random-barrel");
        document.getElementById("opticselector").setValue("static-random-optic");
        document.getElementById("laserselector").setValue("static-random-laser");
        document.getElementById("chamberselector").setValue("static-random-chamber");
        rollSelections('barrel', 'barrelselector', 1, "static-random-barrel", "attachment", false, "randomizeAllAttachments");
        rollSelections('optic', 'opticselector', 2, "static-random-optic", "attachment", false, "randomizeAllAttachments");
        rollSelections('laser', 'laserselector', 3, "static-random-laser", "attachment", false, "randomizeAllAttachments");
        rollAggregator('chamber', 'chamberselector', 5, "static-random-chamber", "attachment", true, "randomizeAllAttachments");
        shallNotPass = false;
    }
}

function resetAllAttachments(all) {
console.info("KBH: Resetting all attachment slots");
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("barrelselector").setValue("none");
        document.getElementById("opticselector").setValue("none");
        document.getElementById("laserselector").setValue("none");
        document.getElementById("firemodeselector").setValue("none");
        document.getElementById("chamberselector").setValue("none");
        
        rollAggregator('barrel', 'barrelselector', 1, "none", "attachment", false, "resetAllAttachments");
        rollAggregator('optic', 'opticselector', 2, "none", "attachment", false, "resetAllAttachments");
        rollAggregator('laser', 'laserselector', 3, "none", "attachment", false, "resetAllAttachments");
        rollAggregator('firemode', 'firemodeselector', 4, "none", "attachment", false, "resetAllAttachments");
        rollAggregator('chamber', 'chamberselector', 5, "none", "attachment", true, "resetAllAttachments");
        shallNotPass = false;
    }   
}

function resetAllArmor() {
console.info("KBH: Resetting all armor slots");
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("headselector").setValue("none");
        document.getElementById("chestselector").setValue("none");
        document.getElementById("lfootselector").setValue("none");
        document.getElementById("rfootselector").setValue("none");
        
        rollAggregator('head', 'headselector', 1, "none", "armor", false, "resetAllArmor");
        rollAggregator('chest', 'chestselector', 2, "none", "armor", false, "resetAllArmor");
        rollAggregator('lfoot', 'lfootselector', 3, "none", "armor", false, "resetAllArmor");
        rollAggregator('rfoot', 'rfootselector', 4, "none", "armor", true, "resetAllArmor");
        shallNotPass = false;
    }   
}
function resetAllTrinkets() {
console.info("KBH: Resetting all trinket slots");
    if (shallNotPass === false) {
        shallNotPass = true;
        document.getElementById("trinket1selector").setValue("none");
        document.getElementById("trinket2selector").setValue("none");
        document.getElementById("trinket3selector").setValue("none");
        document.getElementById("trinket4selector").setValue("none");
        
        rollAggregator('trinket1', 'trinket1selector', 1, "none", "trinket", false, "resetAllTrinkets");
        rollAggregator('trinket2', 'trinket2selector', 2, "none", "trinket", false, "resetAllTrinkets");
        rollAggregator('trinket3', 'trinket3selector', 3, "none", "trinket", false, "resetAllTrinkets");
        rollAggregator('trinket4', 'trinket4selector', 4, "none", "trinket", true, "resetAllTrinkets");
        shallNotPass = false;
    }   
}

function commitSelection(buttonID, dropdownID, item) {
    console.info("KBH: Committing...");
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

function commitAllArmor() {
    console.info("KBH: Committing all armor pieces to their respective slots");
    commitSelection('buttonCommitHead', 'headselector', 'head');
    commitSelection('buttonCommitChest', 'chestselector', 'chest');
    commitSelection('buttonCommitLFoot', 'lfootselector', 'lfoot');
    commitSelection('buttonCommitRFoot', 'rfootselector', 'rfoot');
}

function commitAllAtt() {
    console.info("KBH: Committing all attachments to their respective slots");
    commitSelection('buttonCommitBarrel', 'barrelselector', 'barrel');
    commitSelection('buttonCommitOptic', 'opticselector', 'optic');
    commitSelection('buttonCommitLaser', 'laserselector', 'laser');
    commitSelection('buttonCommitFiremode', 'firemodeselector', 'firemode');
    commitSelection('buttonCommitChamber', 'chamberselector', 'chamber');
}

function commitAllTrink() {
    console.info("KBH: Committing all attachments to their respective slots");
    commitSelection('buttonCommitTrinket1', 'trinket1selector', 'trinket1');
    commitSelection('buttonCommitTrinket2', 'trinket2selector', 'trinket2');
    commitSelection('buttonCommitTrinket3', 'trinket3selector', 'trinket3');
    commitSelection('buttonCommitTrinket4', 'trinket4selector', 'trinket4');
}

// Used to remove and replace oils to prevent dupes - this should ALWAYS run before attachmentFilter ---- unless I've removed it entirely from the chain LOL
function oilRemover(build) {
console.info("KBH: Beginning oil filtering process");

    let altSelector1Options = document.getElementById("oils1selector-custom").childNodes[1].childNodes[1].childNodes;
    let altSelector2Options = document.getElementById("oils2selector-custom").childNodes[1].childNodes[1].childNodes;
    let altSelector3Options = document.getElementById("oils3selector-custom").childNodes[1].childNodes[1].childNodes;
    let altSelector4Options = document.getElementById("oils4selector-custom").childNodes[1].childNodes[1].childNodes;
    let altSelector5Options = document.getElementById("oils5selector-custom").childNodes[1].childNodes[1].childNodes;
    let fireModeOptions = document.getElementById("firemodeselector-custom").childNodes[1].childNodes[1].childNodes;

    let filteredOptions = document.querySelectorAll(".filtered-option");

    let oilsel1 = document.getElementById("oils1selector");
    let oilsel2 = document.getElementById("oils2selector");
    let oilsel3 = document.getElementById("oils3selector");
    let oilsel4 = document.getElementById("oils4selector");
    let oilsel5 = document.getElementById("oils5selector");
    let firesel = document.getElementById("firemodeselector");
    function makeAllOilsVisible() {
        console.info("KBH: Making all oils selectable");
        for (var i = 0; i < filteredOptions.length; i++) {
            oilsel1.removeDupeFilter(filteredOptions[i].dataset.value);
            oilsel2.removeDupeFilter(filteredOptions[i].dataset.value);
            oilsel3.removeDupeFilter(filteredOptions[i].dataset.value);
            oilsel4.removeDupeFilter(filteredOptions[i].dataset.value);
            oilsel5.removeDupeFilter(filteredOptions[i].dataset.value);
            firesel.removeDupeFilter(filteredOptions[i].dataset.value);
            filteredOptions[i].classList.remove("filtered-option");
        }
    }
    
    function hideSelectedOils(value, key, map) {
        if (key.startsWith("ench")) {
        console.info("KBH: Hiding", key);
            if (value.Value === "none" || value.Value.startsWith("static") || value.Value.startsWith("scroll")) {
                return;
            }
            for (var i = 0; i < altSelector1Options.length; i++) {
                if (altSelector1Options[i].dataset.value === value.Value) {
                    oilsel1.dupeFilter(value.Value);
                }
            }
            for (var i = 0; i < altSelector2Options.length; i++) {
                if (altSelector2Options[i].dataset.value === value.Value) {
                    oilsel2.dupeFilter(value.Value);
                }
            }
            for (var i = 0; i < altSelector3Options.length; i++) {
                if (altSelector3Options[i].dataset.value === value.Value) {
                    oilsel3.dupeFilter(value.Value);
                }
            }
            for (var i = 0; i < altSelector4Options.length; i++) {
                if (altSelector4Options[i].dataset.value === value.Value) {
                    oilsel4.dupeFilter(value.Value);
                }
            }
            for (var i = 0; i < altSelector5Options.length; i++) {
                if (altSelector5Options[i].dataset.value === value.Value) {
                    oilsel5.dupeFilter(value.Value);
                }
            }
        }
    }

    makeAllOilsVisible();
    //coreSelections.forEach(hideSelectedOils);
    switch (selectedBuild) {
        case 1:
            build1Selections.forEach(hideSelectedOils);
            break;
        case 2:
            build2Selections.forEach(hideSelectedOils);
            break;
        case 3:
            build3Selections.forEach(hideSelectedOils);
            break;
        case 4:
            build4Selections.forEach(hideSelectedOils);
            break;
        case 5:
            build5Selections.forEach(hideSelectedOils);
            break;
    }
    return true;
} 

function attachmentFilter(evt) {

    console.info("KBH: Filtering attachments based on weapon selection");

    let selectorChamber = document.getElementById("chamberselector");
    let selectorBarrel = document.getElementById("barrelselector");
    let selectorFiremode = document.getElementById("firemodeselector");
    let selectorFiremodePro = document.getElementById("firemodeselector-custom").childNodes[1].childNodes[1].childNodes;

    let dropdownWeapon = ((coreSelections.get("weapon")).Name);

    document.getElementById("chamberselector-custom").classList.remove("disabled");
    document.getElementById("barrelselector-custom").classList.remove("disabled");
    document.getElementById("firemodeselector-custom").classList.remove("disabled");
    
    // Filter Firemodes

    for (var i = 0; i < selectorFiremodePro.length; i++) {
        if (selectorFiremodePro[i].classList.contains("filtered-option")) {
            selectorFiremode.removeDupeFilter(selectorFiremodePro[i].dataset.value);
            break;
        }
    }
    shallNotPass = true;
    if (dropdownWeapon.AmmoType === "Energy") {
        selectorChamber.setValue("none");
        selectorBarrel.setValue("none");
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

    switch (dropdownWeapon.Firemode) {
        case "Single":
            for (var i = 0; i < selectorFiremodePro.length; i++) {
                if (selectorFiremodePro[i].dataset.value === "priming-bolt") {
                    selectorFiremode.dupeFilter("priming-bolt");
                }
            }
            if (selectorFiremode.getValue() === "priming-bolt") {
                selectorFiremode.setValue("none");
                let name1 = getFiremodeByName("None");
                addToCoreMap("firemode", name1, "none");
            };
            break;
        case "Auto":
            for (var i = 0; i < selectorFiremodePro.length; i++) {
                if (selectorFiremodePro[i].dataset.value === "gun-crank") {
                    selectorFiremode.dupeFilter("gun-crank");
                }
            }
            if (selectorFiremode.getValue() === "gun-crank") {
                selectorFiremode.setValue("none");
                let name2 = getFiremodeByName("None");
                addToCoreMap("firemode", name2, "none");
            }
            break;
        case "3-Round Burst":
            if (selectorFiremode.getValue() === "priming-bolt") {
                selectorFiremode.setValue("none");     
            };
            for (var i = 0; i < selectorFiremodePro.length; i++) {
                if (selectorFiremodePro[i].dataset.value === "priming-bolt") {
                    selectorFiremode.dupeFilter("priming-bolt");
                }
            }
            break;
        case "2-Round Burst":
            if (selectorFiremode.getValue() === "priming-bolt") {
                selectorFiremode.setValue("none");     
            };
            for (var i = 0; i < selectorFiremodePro.length; i++) {
                if (selectorFiremodePro[i].dataset.value === "priming-bolt") {
                    selectorFiremode.dupeFilter("priming-bolt");
                }
            }
            break;
        case "Static Single":
            selectorFiremode.setValue("none");
            document.getElementById("firemodeselector-custom").classList.add("disabled");
            let name3 = getFiremodeByName("None");
            addToCoreMap("firemode", name3, "none")
            break;
        default:
        //selectorFiremode.updateDisplay();
    }
    shallNotPass = false;
    return true;
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
    rollAggregator("weapon", "weapons", 1, document.getElementById("weapons").getValue(), "weapon", false, "onGenerate");
    rollAggregator("ench1", "oils1selector", 1, document.getElementById("oils1selector").getValue(), "ench", false, "onGenerate");
    rollAggregator("ench2", "oils2selector", 2, document.getElementById("oils2selector").getValue(), "ench", false, "onGenerate");
    rollAggregator("ench3", "oils3selector", 3, document.getElementById("oils3selector").getValue(), "ench", false, "onGenerate");
    rollAggregator("ench4", "oils4selector", 4, document.getElementById("oils4selector").getValue(), "ench", false, "onGenerate");
    rollAggregator("ench5", "oils5selector", 5, document.getElementById("oils5selector").getValue(), "ench", false, "onGenerate");
    rollAggregator("barrel", "barrelselector", 1, document.getElementById("barrelselector").getValue(), "attachment", false, "onGenerate");
    rollAggregator("optic", "opticselector", 2, document.getElementById("opticselector").getValue(), "attachment", false, "onGenerate");
    rollAggregator("laser", "laserselector", 3, document.getElementById("laserselector").getValue(), "attachment", false, "onGenerate");
    rollAggregator("firemode", "firemodeselector", 4, document.getElementById("firemodeselector").getValue(), "attachment", false, "onGenerate");
    rollAggregator("chamber", "chamberselector", 5, document.getElementById("chamberselector").getValue(), "attachment", false, "onGenerate");
    rollAggregator("head", "headselector", 1, document.getElementById("headselector").getValue(), "armor", false, "onGenerate");
    rollAggregator("chest", "chestselector", 2, document.getElementById("chestselector").getValue(), "armor", false, "onGenerate");
    rollAggregator("lfoot", "lfootselector", 3, document.getElementById("lfootselector").getValue(), "armor", false, "onGenerate");
    rollAggregator("rfoot", "rfootselector", 4, document.getElementById("rfootselector").getValue(), "armor", false, "onGenerate");
    rollAggregator("trinket1", "trinket1selector", 1, document.getElementById("trinket1selector").getValue(), "trinket", false, "onGenerate");
    rollAggregator("trinket2", "trinket2selector", 2, document.getElementById("trinket2selector").getValue(), "trinket", false, "onGenerate");
    rollAggregator("trinket3", "trinket3selector", 3, document.getElementById("trinket3selector").getValue(), "trinket", false, "onGenerate");
    rollAggregator("trinket4", "trinket4selector", 4, document.getElementById("trinket4selector").getValue(), "trinket", true, "onGenerate");
}

function rerollRandomEnch(opt) {
    switch (opt) {
        case "ench1":
            rollAggregator("ench1", "oils1selector", 1, document.getElementById("oils1selector").getValue(), "ench", true, "rerollRandomEnch");
            break;
        case "ench2":
            rollAggregator("ench2", "oils2selector", 2, document.getElementById("oils2selector").getValue(), "ench", true, "rerollRandomEnch");
            break;
        case "ench3":
            rollAggregator("ench3", "oils3selector", 3, document.getElementById("oils3selector").getValue(), "ench", true, "rerollRandomEnch");
            break;
        case "ench4":
            rollAggregator("ench4", "oils4selector", 4, document.getElementById("oils4selector").getValue(), "ench", true, "rerollRandomEnch");
            break;
        case "ench5":
            rollAggregator("ench5", "oils5selector", 5, document.getElementById("oils5selector").getValue(), "ench", true, "rerollRandomEnch");
            break;
        case "barrel":
            rollAggregator("barrel", "barrelselector", 5, document.getElementById("barrelselector").getValue(), "attachment", true, "rerollRandomEnch");
            break;
        case "optic":
            rollAggregator("optic", "opticselector", 5, document.getElementById("opticselector").getValue(), "attachment", true, "rerollRandomEnch");
            break;
        case "laser":
            rollAggregator("laser", "laserselector", 5, document.getElementById("laserselector").getValue(), "attachment", true, "rerollRandomEnch");
            break;
        case "chamber":
            rollAggregator("chamber", "chamberselector", 5, document.getElementById("chamberselector").getValue(), "attachment", true, "rerollRandomEnch");
            break;
        case "head":
            rollAggregator("head", "headselector", 5, document.getElementById("headselector").getValue(), "armor", true, "rerollRandomEnch");
            break;
        case "chest":
            rollAggregator("chest", "chestselector", 5, document.getElementById("chestselector").getValue(), "armor", true, "rerollRandomEnch");
            break;
        case "lfoot":
            rollAggregator("lfoot", "lfootselector", 5, document.getElementById("lfootselector").getValue(), "armor", true, "rerollRandomEnch");
            break;
        case "rfoot":
            rollAggregator("rfoot", "rfootselector", 5, document.getElementById("rfootselector").getValue(), "armor", true, "rerollRandomEnch");
            break;
        case "trinket1":
            rollAggregator("trinket1", "trinket1selector", 5, document.getElementById("trinket1selector").getValue(), "trinket", true, "rerollRandomEnch");
            break;
        case "trinket2":
            rollAggregator("trinket2", "trinket2selector", 5, document.getElementById("trinket2selector").getValue(), "trinket", true, "rerollRandomEnch");
            break;
        case "trinket3":
            rollAggregator("trinket3", "trinket3selector", 5, document.getElementById("trinket3selector").getValue(), "trinket", true, "rerollRandomEnch");
            break;
        case "trinket4":
            rollAggregator("trinket4", "trinket4selector", 5, document.getElementById("trinket4selector").getValue(), "trinket", true, "rerollRandomEnch");
            break;
        default:
    }
}

function rollFromBuild() {
        document.getElementById("weapons").setValue(coreSelections.get("weapon").Value);
        onGenerate();
        shallNotPass = false;
}

let animationCardEnd = false;

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

    armorHeadSelectHandler = document.getElementById('headselector');
    armorHeadSelectHandler.addEventListener('change', rollOnSelect);
    armorHeadSelectHandler.flag = "head"
    armorHeadSelectHandler.selector = "headselector";
    armorHeadSelectHandler.selID = 1;
    armorHeadSelectHandler.selType = "armor";

    armorChestSelectHandler = document.getElementById('chestselector');
    armorChestSelectHandler.addEventListener('change', rollOnSelect);
    armorChestSelectHandler.flag = "chest"
    armorChestSelectHandler.selector = "chestselector";
    armorChestSelectHandler.selID = 2;
    armorChestSelectHandler.selType = "armor";

    armorLFootSelectHandler = document.getElementById('lfootselector');
    armorLFootSelectHandler.addEventListener('change', rollOnSelect);
    armorLFootSelectHandler.flag = "lfoot"
    armorLFootSelectHandler.selector = "lfootselector";
    armorLFootSelectHandler.selID = 3;
    armorLFootSelectHandler.selType = "armor";

    armorRFootSelectHandler = document.getElementById('rfootselector');
    armorRFootSelectHandler.addEventListener('change', rollOnSelect);
    armorRFootSelectHandler.flag = "rfoot"
    armorRFootSelectHandler.selector = "rfootselector";
    armorRFootSelectHandler.selID = 4;
    armorRFootSelectHandler.selType = "armor";

    trinket1SelectHandler = document.getElementById('trinket1selector');
    trinket1SelectHandler.addEventListener('change', rollOnSelect);
    trinket1SelectHandler.flag = "trinket1"
    trinket1SelectHandler.selector = "trinket1selector";
    trinket1SelectHandler.selID = 1;
    trinket1SelectHandler.selType = "trinket";

    trinket2SelectHandler = document.getElementById('trinket2selector');
    trinket2SelectHandler.addEventListener('change', rollOnSelect);
    trinket2SelectHandler.flag = "trinket2"
    trinket2SelectHandler.selector = "trinket2selector";
    trinket2SelectHandler.selID = 1;
    trinket2SelectHandler.selType = "trinket";

    trinket3SelectHandler = document.getElementById('trinket3selector');
    trinket3SelectHandler.addEventListener('change', rollOnSelect);
    trinket3SelectHandler.flag = "trinket3"
    trinket3SelectHandler.selector = "trinket3selector";
    trinket3SelectHandler.selID = 1;
    trinket3SelectHandler.selType = "trinket";

    trinket4SelectHandler = document.getElementById('trinket4selector');
    trinket4SelectHandler.addEventListener('change', rollOnSelect);
    trinket4SelectHandler.flag = "trinket4"
    trinket4SelectHandler.selector = "trinket4selector";
    trinket4SelectHandler.selID = 1;
    trinket4SelectHandler.selType = "trinket";

    // Buttons and fields

    

    // Animations

    cardAnimationHandler = document.getElementById('cardOil5Img');
    cardAnimationHandler.addEventListener('animationend', () => {
        animationCardEnd = true;
    });


    // Mobile checks
    //dropdownSelectHandler = document.getElementsByClassName('custom-select');
    //for (var i = 0; i < dropdownSelectHandler.length; i++) {
    //   dropdownSelectHandler[i].addEventListener('click', mobileDropdownCheck, false);
    //}
    return true;

}

/*function togglePos(select) {
    ? close() : open();
}*/

function toggleNeg(select) {

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
let armorHeadSelectHandler = document.getElementById('headselector');
let armorChestSelectHandler = document.getElementById('chestselector');
let armorLFootSelectHandler = document.getElementById('lfootselector');
let armorRFootSelectHandler = document.getElementById('rfootselector');
let trinket1SelectHandler = document.getElementById('trinket1selector');
let trinket2SelectHandler = document.getElementById('trinket2selector');
let trinket3SelectHandler = document.getElementById('trinket3selector');
let trinket4SelectHandler = document.getElementById('trinket4selector');

let cardAnimationHandler = document.getElementById('cardOil5Img');

let flag = null;
let selector = null;
let selID = null;
let selValue = null;
let selType = null;

let shallNotPass = true;

let skipRollCounting = false;

async function rollOnPageLoad(flag, selector, selID, value, type) {
    console.info("KBH: Beginning initial load");
    skipRollCounting = true;
    await dropdownsReady;
    await addAllEventListeners();

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

    let decode = await decodeUriAsBuild();
    if (decode === false) {
        console.info("KBH: Loading defaults");
        let selPageLoad = document.getElementById("weapons");
        selPageLoad.setValue(value); 
        rollAggregator(flag, selector, selID, value, type, false, "rollOnPageLoad");
        rollAggregator('ench1', 'oils1selector', 1, 'none', 'ench', false, "rollOnPageLoad");
        rollAggregator('ench2', 'oils2selector', 2, 'none', 'ench', false, "rollOnPageLoad");
        rollAggregator('ench3', 'oils3selector', 3, 'none', 'ench', false, "rollOnPageLoad");
        rollAggregator('ench4', 'oils4selector', 4, 'none', 'ench', false, "rollOnPageLoad");
        rollAggregator('ench5', 'oils5selector', 5, 'none', 'ench', false, "rollOnPageLoad");
        rollAggregator('barrel', 'barrel', 1, 'none', 'attachment', false, "rollOnPageLoad");
        rollAggregator('optic', 'optic', 2, 'none', 'attachment', false, "rollOnPageLoad");
        rollAggregator('laser', 'laser', 3, 'none', 'attachment', false, "rollOnPageLoad");
        rollAggregator('firemode', 'firemode', 4, 'none', 'attachment', false, "rollOnPageLoad");
        rollAggregator('chamber', 'chamber', 5, 'none', 'attachment', false, "rollOnPageLoad");
        rollAggregator('head', 'headselector', 1, "none", "armor", false, "rollOnPageLoad");
        rollAggregator('chest', 'chestselector', 2, "none", "armor", false, "rollOnPageLoad");
        rollAggregator('lfoot', 'lfootselector', 3, "none", "armor", false, "rollOnPageLoad");
        rollAggregator('rfoot', 'rfootselector', 4, "none", "armor", false, "rollOnPageLoad");
        rollAggregator('trinket1', 'trinket1selector', 1, "none", "trinket", false, "rollOnPageLoad");
        rollAggregator('trinket2', 'trinket2selector', 2, "none", "trinket", false, "rollOnPageLoad");
        rollAggregator('trinket3', 'trinket3selector', 3, "none", "trinket", false, "rollOnPageLoad");
        rollAggregator('trinket4', 'trinket4selector', 4, "none", "trinket", true, "rollOnPageLoad");
    }
    mobileCSS();
    skipRollCounting = false;
    shallNotPass = false;
}

let poolRebuildReady = true;

// Initialize weapon name arrays

let gunsAll = [];
let gunsPistols = [];
let gunsRevolvers = [];
let gunsShotguns = [];
let gunsSMGs = [];
let gunsARs = [];
let gunsLMGs = [];
let gunsRifles = [];
let gunsSnipers = [];

// Initialize enchantment name arrays
let enchAll = [];
let scrollsAll = [];
let scrollsT1 = [];
let scrollsT2 = [];
let oilsAll = [];
let oilsAmmo = [];
let oilsCrit = [];
let oilsBounce = [];
let oilsSpeed = [];
let oilsAddDam = [];
let oilsMultDam = [];
let oilsDur = [];
let oilsPen = [];
let oilsProj = [];
let oilsRecoil = [];
let oilsReload = [];
let oilsRPM = [];
let oilsSpread = [];
let oilsSize = [];

// Initalize attachment name arrays
let attachmentsLasers = [];
let attachmentsBarrels = [];
let attachmentsOptics = [];
let attachmentsFiremodes = [];
let attachmentsRechambers = [];

// Initialize equipment name arrays
let armorHeadAll = [];
let armorChestAll = [];
let armorFeetAll = [];
let trinketsAll = [];

// Initalize counters
let weaponCount = 0;
let weaponARCount = 0;
let weaponLMGCount = 0;
let weaponPistolCount = 0;
let weaponRevolverCount = 0;
let weaponRifleCount = 0;
let weaponShotgunCount = 0;
let weaponSMGCount = 0;
let weaponSniperCount = 0;
let scrollCount = 0;
let scrollT1Count = 0;
let scrollT2Count = 0;
let oilCount = 0;
let oilACCCount = 0;
let oilBCCCount = 0;
let oilBounceCount = 0;
let oilBSpeedCount = 0;
let oilDamFlatCount = 0;
let oilDamMultCount = 0;
let oilMaxDurCount = 0;
let oilPenCount = 0;
let oilProjCount = 0;
let oilRecCount = 0;
let oilRelCount = 0;
let oilRPMCount = 0;
let oilSpreadCount = 0;
let oilBSizeCount = 0;
let barrelCount = 0;
let opticCount = 0;
let laserCount = 0;
let firemodeCount = 0;
let chamberCount = 0;
let attachmentCount = 0;
let armorCount = 0;
let armorHeadCount = 0;
let armorChestCount = 0;
let armorFootCount = 0;
let trinketCount = 0;

let initialCount = true;

function rebuildRandomArrays() {

    // Clear arrays
    gunsAll = [];
    gunsPistols = [];
    gunsRevolvers = [];
    gunsShotguns = [];
    gunsSMGs = [];
    gunsARs = [];
    gunsLMGs = [];
    gunsRifles = [];
    gunsSnipers = [];
    enchAll = [];
    scrollsAll = [];
    scrollsT1 = [];
    scrollsT2 = [];
    oilsAll = [];
    oilsAmmo = [];
    oilsCrit = [];
    oilsSize = [];
    oilsBounce = [];
    oilsSpeed = [];
    oilsAddDam = [];
    oilsMultDam = [];
    oilsDur = [];
    oilsPen = [];
    oilsProj = [];
    oilsRecoil = [];
    oilsReload = [];
    oilsRPM = [];
    oilsSpread = [];
    attachmentsLasers = [];
    attachmentsBarrels = [];
    attachmentsOptics = [];
    attachmentsFiremodes = [];
    attachmentsRechambers = [];
    armorHeadAll = [];
    armorChestAll = [];
    armorFeetAll = [];
    trinketsAll = [];

    // Weapon arrays
    Object.values(weaponsData.Weapon).forEach(weap => {
        if (weap.Name !== "none" && weap.Name !== "None" && weap.Name !== "Default" && weap.Name !== undefined && weap.Name !== null && !(weap.Name.startsWith("Random"))) {
            gunsAll.push(weap.Name);
            if (weap.TypePositive1 === "AR") {
                gunsARs.push(weap.Name);
            }
            if (weap.TypePositive1 === "LMG") {
                gunsLMGs.push(weap.Name);
            }
            if (weap.TypePositive1 === "Pistol") {
                gunsPistols.push(weap.Name);
            }
            if (weap.TypePositive1 === "Revolver") {
                gunsRevolvers.push(weap.Name);
            }
            if (weap.TypePositive1 === "Rifle") {
                gunsRifles.push(weap.Name);
            }
            if (weap.TypePositive1 === "Shotgun") {
                gunsShotguns.push(weap.Name);
            }
            if (weap.TypePositive1 === "SMG") {
                gunsSMGs.push(weap.Name);
            }
            if (weap.TypePositive1 === "Sniper") {
                gunsSnipers.push(weap.Name);
            }
        }
    });

    // Scroll and oil arrays
    Object.values(oilsScrollsData.OilScroll).forEach(oil => {
        if (oil.Name !== "none" && oil.Name !== "None" && oil.Name !== "Default" && oil.Name !== undefined && oil.Name !== null && !(oil.Name.startsWith("Random"))) {
            enchAll.push(oil.Name);
            if (oil.TypePositive1 === "Scrolls - Tier 1" || oil.TypePositive1 === "Scrolls - Tier 2") {
                scrollsAll.push(oil.Name);
            }
            if (oil.TypePositive1 === "Scrolls - Tier 1") {
                scrollsT1.push(oil.Name);
            }
            if (oil.TypePositive1 === "Scrolls - Tier 2") {
                scrollsT2.push(oil.Name);
            }
            if (!(oil.Name.startsWith("Scroll"))) {
                oilsAll.push(oil.Name);
            }
            if (oil.TypePositive1 === "Ammo Consume Chance") {
                oilsAmmo.push(oil.Name);
            }
            if (oil.TypePositive1 === "Base Crit Chance") {
                oilsCrit.push(oil.Name);
            }
            if (oil.TypePositive1 === "Bullet Bounces") {
                oilsBounce.push(oil.Name);
            }
            if (oil.TypePositive1 === "Bullet Speed") {
                oilsSpeed.push(oil.Name);
            }
            if (oil.TypePositive1 === "Damage - Flat") {
                oilsAddDam.push(oil.Name);
            }
            if (oil.TypePositive1 === "Damage - Mult") {
                oilsMultDam.push(oil.Name);
            }
            if (oil.TypePositive1 === "Max Durability") {
                oilsDur.push(oil.Name);
            }
            if (oil.TypePositive1 === "Penetration") {
                oilsPen.push(oil.Name);
            }
            if (oil.TypePositive1 === "Projectiles") {
                oilsProj.push(oil.Name);
            }
            if (oil.TypePositive1 === "Recoil") {
                oilsRecoil.push(oil.Name);
            }
            if (oil.TypePositive1 === "Reload Speed") {
                oilsReload.push(oil.Name);
            }
            if (oil.TypePositive1 === "RPM") {
                oilsRPM.push(oil.Name);
            }
            if (oil.TypePositive1 === "Spread") {
                oilsSpread.push(oil.Name);
            }
            if (oil.TypePositive1 === "Bullet Size") {
                oilsSize.push(oil.Name);
            }
        }
    });

    // Attachment arrays
    Object.values(barrelsData.Barrel).forEach(barrel => {
            if (barrel.Name !== "none" && barrel.Name !== "None" && barrel.Name !== "Default" && barrel.Name !== undefined && barrel.Name !== null && !(barrel.Name.startsWith("Random"))) {
                attachmentsBarrels.push(barrel.Name);
            }

    });
    Object.values(opticsData.Optic).forEach(optic => {
            if (optic.Name !== "none" && optic.Name !== "None" && optic.Name !== "Default" && optic.Name !== undefined && optic.Name !== null && !(optic.Name.startsWith("Random"))) {
                attachmentsOptics.push(optic.Name);
            }

    });
    Object.values(lasersData.Laser).forEach(laser => {
            if (laser.Name !== "none" && laser.Name !== "None" && laser.Name !== "Default" && laser.Name !== undefined && laser.Name !== null && !(laser.Name.startsWith("Random"))) {
                attachmentsLasers.push(laser.Name);
            }

    });
    Object.values(firemodesData.Firemode).forEach(fire => {
            if (fire.Name !== "none" && fire.Name !== "None" && fire.Name !== "Default" && fire.Name !== undefined && fire.Name !== null && !(fire.Name.startsWith("Random"))) {
                attachmentsFiremodes.push(fire.Name);
            }

    });
    Object.values(chamberData2.Chamber).forEach(chamber => {
            if (chamber.Name !== "none" && chamber.Name !== "None" && chamber.Name !== "Default" && chamber.Name !== undefined && chamber.Name !== null && !(chamber.Name.startsWith("Random"))) {
                attachmentsRechambers.push(chamber.Name);
            }

    });
    // Equipment arrays
    Object.values(armorHeadData.ArmorHead).forEach(head => {
            if (head.Name !== "none" && head.Name !== "None" && head.Name !== "Default" && head.Name !== undefined && head.Name !== null && !(head.Name.startsWith("Random"))) {
                armorHeadAll.push(head.Name);
            }

    });
    Object.values(armorChestData.ArmorChest).forEach(chest => {
            if (chest.Name !== "none" && chest.Name !== "None" && chest.Name !== "Default" && chest.Name !== undefined && chest.Name !== null && !(chest.Name.startsWith("Random"))) {
                armorChestAll.push(chest.Name);
            }

    });
    Object.values(armorFootData.ArmorFeet).forEach(foot => {
            if (foot.Name !== "none" && foot.Name !== "None" && foot.Name !== "Default" && foot.Name !== undefined && foot.Name !== null && !(foot.Name.startsWith("Random"))) {
                armorFeetAll.push(foot.Name);
            }

    });
    Object.values(trinketData.Trinket).forEach(trink => {
            if (trink.Name !== "none" && trink.Name !== "None" && trink.Name !== "Default" && trink.Name !== undefined && trink.Name !== null && !(trink.Name.startsWith("Random"))) {
                trinketsAll.push(trink.Name);
            }

    });

    if (initialCount === true) {
        initialCount = false;
        addCountToDisplay();
    }
    return true;
}

function addCountToDisplay() {

    let combination = gunsAll.length * enchAll.length * (oilsAll.length - 1) * (oilsAll.length - 2) * (oilsAll.length - 3) * (oilsAll.length - 4) * attachmentsBarrels.length * attachmentsLasers.length * attachmentsOptics.length * attachmentsRechambers.length * armorChestAll.length * armorHeadAll.length * armorFeetAll.length * armorFeetAll.length * trinketsAll.length;

    document.getElementById("totScrollSpan").textContent = scrollsAll.length;
    document.getElementById("totOilSpan").textContent = oilsAll.length;
    document.getElementById("totWeapSpan").textContent = gunsAll.length;
    document.getElementById("totAttSpan").textContent = attachmentsBarrels.length + attachmentsLasers.length + attachmentsOptics.length + attachmentsRechambers.length + attachmentsFiremodes.length;
    document.getElementById("totArmSpan").textContent = armorChestAll.length + armorHeadAll.length + armorFeetAll.length;
    document.getElementById("totTrinkSpan").textContent = trinketsAll.length;
    document.getElementById("totComboSpan").textContent = combination.toLocaleString('en-US');
}

async function rollAggregator(flag, selector, selID, selValue, selType, last, source) {

    if (buildSwapping === false) {
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
    }
    shallNotPass = true;
    let select = null;
    if (flag.startsWith("ench")) {
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
    if (flag === "head") {
        select = document.getElementById("headselector");
        select.setValue(selValue);
    }
    if (flag === "chest") {
        select = document.getElementById("chestselector");
        select.setValue(selValue);
    }
    if (flag === "lfoot") {
        select = document.getElementById("lfootselector");
        select.setValue(selValue);
    }
    if (flag === "rfoot") {
        select = document.getElementById("rfootselector");
        select.setValue(selValue);
    }
    shallNotPass = false;    

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

    if (last === true) {
        //await oilRemover();
        await attachmentFilter();
        oilStats();
        oilCalcs(oilStatModifiers);
        if (buildSwapping === false) {
            setTimeout(() => {
            document.getElementById("oilstatcontainer1").classList.add("spinanimation");
            document.getElementById("cardOil1Img").classList.add("otherspinanimation");
            }, 10);
            setTimeout(() => {
            document.getElementById("oilstatcontainer2").classList.add("spinanimation");
            document.getElementById("cardOil2Img").classList.add("otherspinanimation");
            }, 50);
            setTimeout(() => {
            document.getElementById("oilstatcontainer3").classList.add("spinanimation");
            document.getElementById("cardOil3Img").classList.add("otherspinanimation");
            }, 90);
            setTimeout(() => {
            document.getElementById("oilstatcontainer4").classList.add("spinanimation");
            document.getElementById("cardOil4Img").classList.add("otherspinanimation");
            }, 130);
            setTimeout(() => {
            document.getElementById("oilstatcontainer5").classList.add("spinanimation");
            document.getElementById("cardOil5Img").classList.add("otherspinanimation");
            }, 170);

            setTimeout(async() => {
                await addName();
                encodeBuildAsUri(last);
            }, 170);
            //setTimeout(() => {
            //setBuildAsMetadata();
            //}, 530);
        }
        else if (buildSwapping === true) {
            await addName();
            encodeBuildAsUri(last);
            //setBuildAsMetadata();
        }
        
    }
    
    if (shallNotPass = false) {
        poolRebuildReady = true;
        gunsAll = [];
        gunsPistols = [];
        gunsRevolvers = [];
        gunsShotguns = [];
        gunsSMGs = [];
        gunsARs = [];
        gunsLMGs = [];
        gunsRifles = [];
        gunsSnipers = [];
        enchAll = [];
        scrollsAll = [];
        scrollsT1 = [];
        scrollsT2 = [];
        oilsAll = [];
        oilsAmmo = [];
        oilsCrit = [];
        oilsSize = [];
        oilsBounce = [];
        oilsSpeed = [];
        oilsAddDam = [];
        oilsMultDam = [];
        oilsDur = [];
        oilsPen = [];
        oilsProj = [];
        oilsRecoil = [];
        oilsReload = [];
        oilsRPM = [];
        oilsSpread = [];
        attachmentsLasers = [];
        attachmentsBarrels = [];
        attachmentsOptics = [];
        attachmentsFiremodes = [];
        attachmentsRechambers = [];
        armorHeadAll = [];
        armorChestAll = [];
        armorFeetAll = [];
        trinketsAll = [];
    }
    
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
                    rollAggregator(flag, selector, selID, selValue, selType, true, "rollOnSelect");
        
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
                if (test > 199) {
                    let weapReplace = coreName.replaceAll(" ", "_");
                    document.getElementById("weaponimage").src = `.\\Images\\Dead_Skrip.png`;
                    document.getElementById("cardWeaponName").textContent = coreName;
                    document.getElementById("bydonk").hidden = false;
                }
                else {
                    let firstStepReplace = coreName.replaceAll(" ", "_");
                    let weapReplace = firstStepReplace.replaceAll(".", "");
                    document.getElementById("weaponimage").src = `.\\Images\\Weapons\\${weapReplace}.png`;
                    document.getElementById("cardWeaponName").textContent = coreName;
                }
                break;
            case "ench1":
                let oil1 = null;
                if (coreName.endsWith("Oil") === true) {
                    oil1 = getOilByName(coreName);
                }
                else if (coreName.startsWith("Scroll") === true) {
                    oil1 = getScrollByName(coreName);
                }
                else {
                    oil1 = getOilByName(coreName);
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
                document.getElementById(`cardOil4Img`).style.backgroundImage = `url('./Images/Enchantments/${coreName}.webp')`;
                break;
            case "ench5":
                let oil5 = getOilByName(coreName);
                document.getElementById("cardOilDesc5").innerHTML = oil5.StatDescription;
                document.getElementById("cardOilName5").textContent = coreName;
                document.getElementById(`cardOil5Img`).style.backgroundImage = `url('./Images/Enchantments/${coreName}.webp')`;
                break;
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
            case "chamber":
                if (coreSelections.get("chamber").Name.AmmoType === coreSelections.get("weapon").Name.AmmoType) {
                    if (shallNotPass === true) {
                        document.getElementById("chamberselector").setValue("none");
                    }
                    else {
                        shallNotPass = true;
                        document.getElementById("chamberselector").setValue("none");
                        shallNotPass = false;
                    }
                }
                break;
            case "head":
                let headImgName = "armorHeadSlot";
                if (value.Value === "none") {
                    headImgName = "armorHeadSlot";
                }
                else {
                    let headReplace1 = coreName.replaceAll(" ", "_");
                    headImgName = headReplace1.replaceAll("'", "");
                }
                document.getElementById("armorHeaderHead").textContent = coreName;
                document.getElementById("armorDescHead").innerHTML = value.Name.StatDescription;
                document.getElementById("headArmorImg").src = `.\\Images\\Armor\\${headImgName}.png`;
                break;
            case "chest":
                let chestImgName = "armorChestSlot";
                if (value.Value === "none") {
                    chestImgName = "armorChestSlot";
                }
                else {
                    let chestReplace1 = coreName.replaceAll(" ", "_");
                    chestImgName = chestReplace1.replaceAll("'", "");
                }
                document.getElementById("armorHeaderChest").textContent = coreName;
                document.getElementById("armorDescChest").innerHTML = value.Name.StatDescription;
                document.getElementById("chestArmorImg").src = `.\\Images\\Armor\\${chestImgName}.png`;
                break;
            case "lfoot":
                let lfootImgName = "armorLFootSlot";
                if (value.Value === "none") {
                    lfootImgName = "armorLFootSlot";
                }
                else {
                    let lfootReplace1 = coreName.replaceAll(" ", "_");
                    lfootImgName = lfootReplace1.replaceAll("'", "");
                }
                document.getElementById("armorHeaderLFoot").textContent = coreName;
                document.getElementById("armorDescLFoot").innerHTML = value.Name.StatDescription;
                document.getElementById("lfootArmorImg").src = `.\\Images\\Armor\\${lfootImgName}.png`;
                break;
            case "rfoot":
                let rfootImgName = "armorRFootSlot";
                if (value.Value === "none") {
                    rfootImgName = "armorRFootSlot";
                }
                else {
                    let rfootReplace1 = coreName.replaceAll(" ", "_");
                    rfootImgName = rfootReplace1.replaceAll("'", "");
                }
                document.getElementById("armorHeaderRFoot").textContent = coreName;
                document.getElementById("armorDescRFoot").innerHTML = value.Name.StatDescription;
                document.getElementById("rfootArmorImg").src = `.\\Images\\Armor\\${rfootImgName}.png`;
                break;
            case "trinket1":
                let trinket1ImgName = "None";
                if (value.Value === "none") {
                    trinket1ImgName = "None";
                }
                else {
                    let trinket1Replace1 = coreName.replaceAll(" ", "_");
                    trinket1ImgName = trinket1Replace1.replaceAll("'", "");
                }
                document.getElementById("trinket1header").textContent = coreName;
                document.getElementById("trinket1desc").innerHTML = value.Name.StatDescription;
                document.getElementById("trinket1Img").src = `.\\Images\\Armor\\${trinket1ImgName}.png`;
                break;
            case "trinket2":
                let trinket2ImgName = "None";
                if (value.Value === "none") {
                    trinket2ImgName = "None";
                }
                else {
                    let trinket2Replace1 = coreName.replaceAll(" ", "_");
                    trinket2ImgName = trinket2Replace1.replaceAll("'", "");
                }
                document.getElementById("trinket2header").textContent = coreName;
                document.getElementById("trinket2desc").innerHTML = value.Name.StatDescription;
                document.getElementById("trinket2Img").src = `.\\Images\\Armor\\${trinket2ImgName}.png`;
                break;
            case "trinket3":
                let trinket3ImgName = "None";
                if (value.Value === "none") {
                    trinket3ImgName = "None";
                }
                else {
                    let trinket3Replace1 = coreName.replaceAll(" ", "_");
                    trinket3ImgName = trinket3Replace1.replaceAll("'", "");
                }
                document.getElementById("trinket3header").textContent = coreName;
                document.getElementById("trinket3desc").innerHTML = value.Name.StatDescription;
                document.getElementById("trinket3Img").src = `.\\Images\\Armor\\${trinket3ImgName}.png`;
                break;
            case "trinket4":
                let trinket4ImgName = "None";
                if (value.Value === "none") {
                    trinket4ImgName = "None";
                }
                else {
                    let trinket4Replace1 = coreName.replaceAll(" ", "_");
                    trinket4ImgName = trinket4Replace1.replaceAll("'", "");
                }
                document.getElementById("trinket4header").textContent = coreName;
                document.getElementById("trinket4desc").innerHTML = value.Name.StatDescription;
                document.getElementById("trinket4Img").src = `.\\Images\\Armor\\${trinket4ImgName}.png`;
                break;
            case "all":
                break;
            default:
        }
    }

    coreSelections.forEach(addCoreToCard);
    rebuildRandomArrays();
    return true;
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
        if (selectedOil.ReloadSpeed < 0 && selectedOil.ReloadSpeed !== undefined) {
            oilStatModifiers.ReloadNegative *= (1 + selectedOil.ReloadSpeed);
        }
        if (selectedOil.ReloadSpeed > 0 && selectedOil.ReloadSpeed !== undefined) {
            oilStatModifiers.ReloadPositive += selectedOil.ReloadSpeed;
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
        if (selectedOil.BulletSize < 0 && selectedOil.BulletSize !== undefined) {
            oilStatModifiers.BulletSizeNegative *= (1 + selectedOil.BulletSize);
        }
        if (selectedOil.BulletSize > 0 && selectedOil.BulletSize !== undefined) {
            oilStatModifiers.BulletSizePositive += selectedOil.BulletSize;
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
        if (selectedOil.DamageMultInd !== "None" && selectedOil.DamageMultInd !== 0) {
            oilStatModifiers.DamageMultInd = selectedOil.DamageMultInd;
        }
        if (selectedOil.DamageMultWearableAR !== 0 && selectedOil.DamageMultWearableAR !== undefined) {
            oilStatModifiers.DamageMultWearableAR += selectedOil.DamageMultWearableAR;
        }
        if (selectedOil.DamageMultWearableAutomatic !== 0 && selectedOil.DamageMultWearableAutomatic !== undefined) {
            oilStatModifiers.DamageMultWearableAutomatic += selectedOil.DamageMultWearableAutomatic;
        }
        if (selectedOil.DamageMultWearableLMG !== 0 && selectedOil.DamageMultWearableLMG !== undefined) {
            oilStatModifiers.DamageMultWearableLMG += selectedOil.DamageMultWearableLMG;
        }
        if (selectedOil.DamageMultWearablePistol !== 0 && selectedOil.DamageMultWearablePistol !== undefined) {
            oilStatModifiers.DamageMultWearablePistol += selectedOil.DamageMultWearablePistol;
        }
        if (selectedOil.DamageMultWearableRevolver !== 0 && selectedOil.DamageMultWearableRevolver !== undefined) {
            oilStatModifiers.DamageMultWearableRevolver += selectedOil.DamageMultWearableRevolver;
        }
        if (selectedOil.DamageMultWearableRifle !== 0 && selectedOil.DamageMultWearableRifle !== undefined) {
            oilStatModifiers.DamageMultWearableRifle += selectedOil.DamageMultWearableRifle;
        }
        if (selectedOil.DamageMultWearableShotgun !== 0 && selectedOil.DamageMultWearableShotgun !== undefined) {
            oilStatModifiers.DamageMultWearableShotgun += selectedOil.DamageMultWearableShotgun;
        }
        if (selectedOil.DamageMultWearableSniper !== 0 && selectedOil.DamageMultWearableSniper !== undefined) {
            oilStatModifiers.DamageMultWearableSniper += selectedOil.DamageMultWearableSniper;
        }
        if (selectedOil.MovementSpeedEquipment !== 0 && selectedOil.MovementSpeedEquipment !== undefined) {
            oilStatModifiers.MovementSpeedEquipment += selectedOil.MovementSpeedEquipment;
        }
        if (selectedOil.SprintSpeedEquipment !== 0 && selectedOil.SprintSpeedEquipment !== undefined) {
            oilStatModifiers.SprintSpeedEquipment += selectedOil.SprintSpeedEquipment;
        }
        if (selectedOil.SwimSpeedEquipment !== 0 && selectedOil.SwimSpeedEquipment !== undefined) {
            oilStatModifiers.SwimSpeedEquipment += selectedOil.SwimSpeedEquipment;
        }
        if (selectedOil.JumpPowerEquipment !== 0 && selectedOil.JumpPowerEquipment !== undefined) {
            oilStatModifiers.JumpPowerEquipment += selectedOil.JumpPowerEquipment;
        }
        if (selectedOil.MeleeDamageMultEquip !== 0 && selectedOil.MeleeDamageMultEquip !== undefined) {
            oilStatModifiers.MeleeDamageMultEquip += selectedOil.MeleeDamageMultEquip;
        }
        if (selectedOil.WeaponWeightModifier !== 0 && selectedOil.WeaponWeightModifier !== undefined) {
            oilStatModifiers.WeaponWeightModifier += selectedOil.WeaponWeightModifier;
        }
        if (selectedOil.MoveAccuracyEquipment !== 0 && selectedOil.MoveAccuracyEquipment !== undefined) {
            oilStatModifiers.MoveAccuracyEquipment += selectedOil.MoveAccuracyEquipment;
        }
        if (selectedOil.MeleeDamageMultEquip !== 0 && selectedOil.MeleeDamageMultEquip !== undefined) {
            oilStatModifiers.ExtraJumpsMult += selectedOil.ExtraJumpsMult;
        }
        if (selectedOil.Charisma !== 0 && selectedOil.Charisma !== undefined) {
            oilStatModifiers.Charisma += selectedOil.Charisma;
        }
        if (selectedOil.Armor !== 0 && selectedOil.Armor !== undefined) {
            oilStatModifiers.Armor += selectedOil.Armor;
        }
        if (selectedOil.CharmResistance !== 0 && selectedOil.CharmResistance !== undefined) {
            oilStatModifiers.CharmResistance += selectedOil.CharmResistance;
        }
        if (selectedOil.CoyoteTime !== 0 && selectedOil.CoyoteTime !== undefined) {
            oilStatModifiers.CoyoteTime += selectedOil.CoyoteTime;
        }
        if (selectedOil.DamageResistElectric !== 0 && selectedOil.DamageResistElectric !== undefined) {
            oilStatModifiers.DamageResistElectric += selectedOil.DamageResistElectric;
        }
        if (selectedOil.DamageResistExplosive !== 0 && selectedOil.DamageResistExplosive !== undefined) {
            oilStatModifiers.DamageResistExplosive += selectedOil.DamageResistExplosive;
        }
        if (selectedOil.DamageResistFire !== 0 && selectedOil.DamageResistFire !== undefined) {
            oilStatModifiers.DamageResistFire += selectedOil.DamageResistFire;
        }
        if (selectedOil.DamageResistFrost !== 0 && selectedOil.DamageResistFrost !== undefined) {
            oilStatModifiers.DamageResistFrost += selectedOil.DamageResistFrost;
        }
        if (selectedOil.DamageResistLight !== 0 && selectedOil.DamageResistLight !== undefined) {
            oilStatModifiers.DamageResistLight += selectedOil.DamageResistLight;
        }
        if (selectedOil.DamageResistPoison !== 0 && selectedOil.DamageResistPoison !== undefined) {
            oilStatModifiers.DamageResistPoison += selectedOil.DamageResistPoison;
        }
        if (selectedOil.ExtraJumps !== 0 && selectedOil.ExtraJumps !== undefined) {
            oilStatModifiers.ExtraJumps += selectedOil.ExtraJumps;
        }
        if (selectedOil.Luck !== 0 && selectedOil.Luck !== undefined) {
            oilStatModifiers.Luck += selectedOil.Luck;
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
   
    weaponOriginal.Damage = Math.round(((weapon.DamageMultiplier * chamber.Damage) + Number.EPSILON)* 100) / 100;
    weaponOriginal.AmmoType = chamber.AmmoType;
    weaponOriginal.Projectiles = chamber.Projectiles;

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
    //#region

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
            document.getElementById(id).style.display = "";
        }
    }
    
    animateScrollCard(calcOil.ScrollField);
    //#endregion

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
    //#region

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
    document.getElementById("dropmeters").textContent = "";

    weapon.BulletDrop += calcOil.BulletDrop;

    if (weapon.BulletDrop > 0) {
            let dropMeters =  (105 / (Math.log(weapon.BulletDrop)) - 20);
            let dropMeterRound = Math.round((dropMeters + Number.EPSILON)* 100) / 100;
            document.getElementById("dropmeters").textContent = `~${dropMeterRound}m`;
            document.getElementById("dropimage").src = "./Images/bullet_drop_pos.png";
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

    /////////////////////
    //// Bullet Size ////
    /////////////////////
    //#region

    document.getElementById("cardSize").textContent = "";
    document.getElementById("cardSize").style.color = "";
    document.getElementById("cardSize%").textContent = "";
    document.getElementById("cardSize%").style.color = "";
    document.getElementById("cardSizeArrow").innerHTML = "";
    document.getElementById("cardSizeArrow").style.color = "";
    document.getElementById("cardSizeLBrac").textContent = "";
    document.getElementById("cardSizeComp").textContent = "";
    document.getElementById("cardSizeRBrac").textContent = "";

    let bSizeSpdCalc = (calcOil.BulletSizePositive) * calcOil.BulletSizeNegative;

    let bSizeSpdConv = percentConv(bSizeSpdCalc);

    let sizeRound = Math.round((bSizeSpdConv + Number.EPSILON)* 100) / 100;

    if (sizeRound < 0) {
        sizeRound = 0;
    }

    if (sizeRound > 100) {
        document.getElementById("cardSize").textContent = sizeRound;
        document.getElementById("cardSize").style.color = "Lime";
        document.getElementById("cardSize%").textContent = "%";
        document.getElementById("cardSize%").style.color = "Lime";
        document.getElementById("cardSizeArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
        document.getElementById("cardSizeArrow").style.color = "Lime";
        document.getElementById("cardSizeLBrac").textContent = "(";
        document.getElementById("cardSizeComp").textContent = "100%";
        document.getElementById("cardSizeRBrac").textContent = ")";
    }
    if (sizeRound < 100) {
        document.getElementById("cardSize").textContent = sizeRound;
        document.getElementById("cardSize").style.color = "OrangeRed";
        document.getElementById("cardSize%").textContent = "%";
        document.getElementById("cardSize%").style.color = "OrangeRed";
        document.getElementById("cardSizeArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
        document.getElementById("cardSizeArrow").style.color = "OrangeRed";
        document.getElementById("cardSizeLBrac").textContent = "(";
        document.getElementById("cardSizeComp").textContent = "100%";
        document.getElementById("cardSizeRBrac").textContent = ")";
    }
    if (sizeRound === 100) {
        document.getElementById("cardSize").textContent = "100%";
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
    document.getElementById("cardDamageTotalLBrac").textContent = "";
    document.getElementById("cardDamageTotalComp").textContent = "";
    document.getElementById("cardDamageTotalRBrac").textContent = "";

    //// Projectiles
    let weapProj = weapon.Projectiles * (1 + calcOil.ProjectileMult);
    if (weapProj > (weapon.Projectiles * 10)) {
        weapProj = weapon.Projectiles * 10;
    }

    //// Damage Add
    let damAdd = weapon.Damage + calcOil.DamageAdd;
    let zeroDamage = damAdd;

    //// Damage Multiplier
    let damCalc = damAdd * (1 + calcOil.DamageMult);
    let damSub = damCalc * (1 + calcOil.DamageMultInd);
    let damSubRound = Math.round((damSub + Number.EPSILON)* 100) / 100;
    if (zeroDamage > 0 && damSubRound <= 0) {
        damSubRound = zeroDamage * 0.01;
    }

    let eqpDmgMod = 1;

    switch (weapon.Type) {
        case "AR":
            eqpDmgMod += calcOil.DamageMultWearableAR;
            break;
        case "Rifle":
            eqpDmgMod += calcOil.DamageMultWearableRifle;
            break;
        case "LMG":
            eqpDmgMod += calcOil.DamageMultWearableLMG;
            break;
        case "Pistol":
            eqpDmgMod += calcOil.DamageMultWearablePistol;
            break;
        case "Revolver":
            eqpDmgMod += calcOil.DamageMultWearableRevolver;
            break;
        case "Shotgun":
            eqpDmgMod += calcOil.DamageMultWearableShotgun;
            break;
        case "Sniper":
            eqpDmgMod += calcOil.DamageMultWearableSniper;
            break;
    }

    if (weapon.Firemode === "Auto") {
        eqpDmgMod += calcOil.DamageMultWearableAutomatic;
    }
    
    let eqpModifiedDmg = damSubRound * eqpDmgMod;

    let damRound = Math.round((eqpModifiedDmg + Number.EPSILON)* 100) / 100;

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
            scrollDam = 80;
            break;
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
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageArrow").style.color = "OrangeRed";
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
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "OrangeRed";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
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
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageArrow").style.color = "Lime";
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
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamage").style.color = "Lime";
            document.getElementById("cardDamageArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageArrow").style.color = "Lime";
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            document.getElementById("cardDamageXComp").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
    }
    if (damComp === weaponOriginal.Damage) {
        if (weapProj < weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
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
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj > weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamageComp").textContent = weaponOriginal.Damage;
            document.getElementById("cardDamageLBrac").textContent = "(";
            document.getElementById("cardDamageRBrac").textContent = ")";
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageProj").style.color = "Lime";
            document.getElementById("cardDamageProjArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
            document.getElementById("cardDamageProjArrow").style.color = "Lime";
            document.getElementById("cardDamageProjComp").textContent = weaponOriginal.Projectiles;
            document.getElementById("cardDamageX").innerHTML = " <span class='fa-solid fa-x'></span> ";
            document.getElementById("cardDamageXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardDamageMultiComp").textContent = weaponOriginal.MultiShot;
            }
        }
        if (weapProj === weaponOriginal.Projectiles) {
            document.getElementById("cardDamage").textContent = damRound;
            document.getElementById("cardDamageProj").textContent = weapProj;
            document.getElementById("cardDamageX").innerHTML = "<span class='fa-solid fa-x'></span>";
            if (weapon.MultiShot > 1.0) {
                document.getElementById("cardDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
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
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (totalComp < weaponOriginal.TotalDamage) {
            document.getElementById("cardDamageTotal").textContent = totalRound;
            document.getElementById("cardDamageTotal").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
            document.getElementById("cardDamageTotalArrow").style.color = "OrangeRed";
            document.getElementById("cardDamageTotalLBrac").textContent = "(";
            document.getElementById("cardDamageTotalComp").textContent = weaponOriginal.TotalDamage;
            document.getElementById("cardDamageTotalRBrac").textContent = ")";
    }
    if (totalComp == weaponOriginal.TotalDamage) {
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

    let headshotPreRound = damRound * (1 + calcOil.HeadshotDamage);

    let headshotDamage = Math.round((headshotPreRound + Number.EPSILON)* 100) / 100;

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
                document.getElementById("cardHeadDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
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
                document.getElementById("cardHeadDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
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
                document.getElementById("cardHeadDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
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
                document.getElementById("cardHeadDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
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
                document.getElementById("cardHeadDamageMultiX").innerHTML = " <span class='fa-solid fa-x'></span> ";
                document.getElementById("cardHeadDamageMulti").textContent = weapon.MultiShot;
                document.getElementById("cardHeadDamageMultiXComp").innerHTML = " <span class='fa-solid fa-x'></span> ";
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

    document.getElementById("cardDamagePerMag").textContent = "";

    let damageMagazine = null;

    if (calcOil.ScrollField === "scrollinfotoxic") {
        damageMagazine = (totalHeadRound * effRound) + (scrollMult * effRound);
    }
    else {
        damageMagazine = (totalComp * effRound);
    }
    let dMagRound = Math.round((damageMagazine + Number.EPSILON)* 100) / 100;
    document.getElementById("cardDamagePerMag").textContent = dMagRound;

    document.getElementById("cardDPMCrit").textContent = "";
    let dpmCrit =  ((totalRound * effRound) * (1 + baseCalc)) + (scrollMult * effRound);
    let dCritRound = Math.round((dpmCrit + Number.EPSILON)* 100) / 100;
    document.getElementById("cardDPMCrit").textContent = dCritRound;

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

    let jumpSub = jumpConv * (1 + calcOil.JumpPowerEquipment);

    let jumpRound = Math.round((jumpSub + Number.EPSILON)* 100) / 100;

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
        document.getElementById("cardJumpComp").textContent = "100%";
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
        document.getElementById("cardJumpComp").textContent = "100%";
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
    document.getElementById("cardWeight").style.color = "";
    document.getElementById("cardWeightArrow").innerHTML = "";
    document.getElementById("cardWeightArrow").style.color = "";
    document.getElementById("cardWeightLBrac").textContent = "";
    document.getElementById("cardWeightComp").textContent = "";
    document.getElementById("cardWeightRBrac").textContent = "";

    let weaponWeightFinal = Math.round(((weapon.WeaponWeight * (1 + calcOil.WeaponWeightModifier)) + Number.EPSILON)* 100) / 100;

    if (weaponWeightFinal < weapon.WeaponWeight) {
        document.getElementById("cardWeight").textContent = weaponWeightFinal;
        document.getElementById("cardWeight").style.color = "Lime";
        document.getElementById("cardWeightArrow").innerHTML = "<span class='fa-solid fa-caret-down'></span>";
        document.getElementById("cardWeightArrow").style.color = "Lime";
        document.getElementById("cardWeightLBrac").textContent = "(";
        document.getElementById("cardWeightComp").textContent = weapon.WeaponWeight;
        document.getElementById("cardWeightRBrac").textContent = ")";
    }
    else if (weaponWeightFinal > weapon.WeaponWeight) {
        document.getElementById("cardWeight").textContent = weaponWeightFinal;
        document.getElementById("cardWeight").style.color = "OrangeRed";
        document.getElementById("cardWeightArrow").innerHTML = "<span class='fa-solid fa-caret-up'></span>";
        document.getElementById("cardWeightArrow").style.color = "OrangeRed";
        document.getElementById("cardWeightLBrac").textContent = "(";
        document.getElementById("cardWeightComp").textContent = weapon.WeaponWeight;
        document.getElementById("cardWeightRBrac").textContent = ")";
    }
    else if (weaponWeightFinal === weapon.WeaponWeight) {
        document.getElementById("cardWeight").textContent = weaponWeightFinal;
    }

    let weaponWeightAdjustment = calcOil.WeaponWeightModifier;
    let s = weapon.MovementSpeedModifier * (1 + calcOil.MovementSpeedEquipment);
    //// Duplicate calculation for original comparison
    let resultFirstMvmntStepComp = (1 - weapon.WeightClassFactor);
    let resultSecondMvmntStepComp = 1 - resultFirstMvmntStepComp;
    let resultMovementSpeedComp = resultSecondMvmntStepComp * (100);
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

    
    let relSpdCalc = (calcOil.ReloadPositive) * calcOil.ReloadNegative;

    let reloadTimeModifier = (calcOil.ReloadPositive) * calcOil.ReloadNegative;
    if (reloadTimeModifier < 0.01) {
        reloadTimeModifier = 0.01;
    }

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
    let shotsToBreakRounded = Math.ceil(shotsToBreak);

    if (shotsToBreakRounded < 1) {
        shotsToBreakRounded = 1;
    }

    document.getElementById("cardShotsToBreak").textContent = shotsToBreakRounded;
    //#endregion

    /////////////
    //// DPS ////
    /////////////
    //#region

    document.getElementById("cardTotDam60").textContent = "";
    document.getElementById("cardDPS60").textContent = "";

    // setup for ammo cost calcs
    let ammoCost = 0;
    let ammoCostSpent60 = 0;
    let ammoCostSpentDur = 0;
    switch (weapon.AmmoType) {
        case "9mm":
            ammoCost = 1;
            break;
        case "7.62mm":
            ammoCost = 4;
            break;
        case "5.56mm":
            ammoCost = 3.33;
            break;
        case ".50 BMG":
            ammoCost = 16.67;
            break;
        case "12Ga":
            ammoCost = 5.83;
            break;
        case "Energy":
            ammoCost = 3.33;
            break;
    }

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
    let projFired60 = 0;

    let damageForDPS = 0;
    if (calcOil.ScrollField === "scrollinfotoxic") {
        damageForDPS = totalHeadRound;
    }
    else {
        damageForDPS = totalRound;
    }

    // simulate firing for 60 seconds
    do {
        let magSizeCalc = 0;

        // firing weapon
        do {
            dpsTime += secPerRound;

            // Base Damage
            dps60Dam += damageForDPS;

            // add projectiles fired for this bullet
            projFired60 += weapProj * weapon.MultiShot;

            // Unmodifiable Damage
            dps60DamUnmod += scrollMult;

            // ammo cost
            let acc = getRandomInt();
            if (acc < ammoRound) {
                ammoCostSpent60 += ammoCost;
                let eauc = getRandomInt();
                if (eauc < extraRound) {
                    ammoCostSpent60 += ammoCost;
                }
            }

            magSizeCalc += 1;
        }
        while (magSizeCalc < effMagSize && dpsTime < 60);

        // reloading weapon, if applicable
        dpsTime += reloadTime;

    }
    while (dpsTime < 60);

    // simulate firing until broken
    do {
        let magSizeCalc = 0;

        // firing weapon
        do {
            // Durability Window
            durWinTime += secPerRound;
            durWinDam += damageForDPS;
            durWinDamUnmod += scrollMult;
            durWinShots -= 1;

            // ammo cost
            let acc = getRandomInt();
            if (acc < ammoRound) {
                ammoCostSpentDur += ammoCost;
                let eauc = getRandomInt();
                if (eauc < extraRound) {
                    ammoCostSpentDur += ammoCost;
                }
            }

            magSizeCalc += 1;
        }
        while (magSizeCalc < effMagSize && durWinShots > 0);

        // reloading weapon, if applicable
        durWinTime += reloadTime;

    }
    while (durWinShots > 0);

    let ammoCostSec = ammoCostSpent60 / 60;
    let ammoCostSecRound = Math.round((ammoCostSec + Number.EPSILON)* 100) / 100;
    let ammoCostSpent60Round = Math.round((ammoCostSpent60 + Number.EPSILON)* 100) / 100;
    let ammoCostSpentDurRound = Math.round((ammoCostSpentDur + Number.EPSILON)* 100) / 100;

    let projPerSec = projFired60 / 60;
    let projPerSecRound = Math.round((projPerSec + Number.EPSILON)* 100) / 100;

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

    document.getElementById("cardAmmoCostSec").textContent = ammoCostSecRound; 
    document.getElementById("cardAmmoCostMin").textContent = ammoCostSpent60Round;
    document.getElementById("cardAmmoCostDur").textContent = ammoCostSpentDurRound;

    document.getElementById("cardProjShot").textContent = weapProj * weapon.MultiShot;
    document.getElementById("cardProjSec").textContent = projPerSecRound;
    document.getElementById("cardProjMin").textContent = projFired60; 

    document.getElementById("cardBreakDam").textContent = durWinDamRound;
    document.getElementById("cardBreakTime").textContent = `${durWinTimeRound} seconds`;

    // RPM/Recoil ratio

    let recoilRatio = recoilRound;
    let rpmRatio = rpmRound;
    let firemodeRatio = 1;

    switch (weapon.Firemode) {
        case "Single":
            firemodeRatio = 4;
            break;
        case "2-Round Burst":
            firemodeRatio = 3;
            break;
        case "3-Round Burst":
            firemodeRatio = 2;
        default:
    }

    if (rpmRatio < 110) {
        recoilRatio = recoilRound / 2;
    }

    let totalRatio = ((recoilRatio * rpmRatio) / 500) / firemodeRatio;

    document.getElementById("cardRPMToRec").textContent = totalRatio;
    
    //#endregion

    /////////////////////////
    //// Equipment Stuff ////
    /////////////////////////
    //#region

    // Reset fields
    document.getElementById("cardArmor").textContent = "";
    document.getElementById("cardExpRes").textContent = "";
    document.getElementById("cardFireRes").textContent = "";
    document.getElementById("cardPoisonRes").textContent = "";
    document.getElementById("cardFrostRes").textContent = "";
    document.getElementById("cardElectricRes").textContent = "";
    document.getElementById("cardLightRes").textContent = "";
    document.getElementById("cardCharmRes").textContent = "";
    document.getElementById("cardExtraJumps").textContent = "";
    document.getElementById("cardMelee").textContent = "";
    document.getElementById("cardSprint").textContent = "";
    document.getElementById("cardSwim").textContent = "";
    document.getElementById("cardCoyote").textContent = "";
    document.getElementById("cardLuck").textContent = "";
    document.getElementById("cardCharisma").textContent = "";
    document.getElementById("explosionResistDiv").style.display = "none";
    document.getElementById("fireResistDiv").style.display = "none";
    document.getElementById("poisonResistDiv").style.display = "none";
    document.getElementById("frostResistDiv").style.display = "none";
    document.getElementById("electricResistDiv").style.display = "none";
    document.getElementById("lightResistDiv").style.display = "none";
    document.getElementById("charmResistDiv").style.display = "none";
    
    // Set all non-resistance fields
    document.getElementById("cardArmor").textContent = calcOil.Armor;
    document.getElementById("cardExtraJumps").textContent = calcOil.ExtraJumps * (1 + calcOil.ExtraJumpsMult);
    document.getElementById("cardMelee").textContent = `${Math.round(((((1 + calcOil.MeleeDamageMultEquip) * 1) * 100) + Number.EPSILON)* 100) / 100}%`;
    document.getElementById("cardSprint").textContent = `${Math.round(((((1 + calcOil.SprintSpeedEquipment) * 1) * 100) + Number.EPSILON)* 100) / 100}%`;
    document.getElementById("cardSwim").textContent = `${Math.round(((((1 + calcOil.SwimSpeedEquipment) * 1) * 100) + Number.EPSILON)* 100) / 100}%`;
    document.getElementById("cardCoyote").textContent = `${calcOil.CoyoteTime}s`;
    document.getElementById("cardLuck").textContent = calcOil.Luck;
    document.getElementById("cardCharisma").textContent = calcOil.Charisma;

    // Enable and set all resistance fields

    if (calcOil.DamageResistExplosive > 0) {
        document.getElementById("explosionResistDiv").style.display = "flex";
        document.getElementById("cardExpRes").textContent = calcOil.DamageResistExplosive;
    }
    if (calcOil.DamageResistFire > 0) {
        document.getElementById("fireResistDiv").style.display = "flex";
        document.getElementById("cardFireRes").textContent = calcOil.DamageResistFire;
    }
    if (calcOil.DamageResistPoison > 0) {
        document.getElementById("poisonResistDiv").style.display = "flex";
        document.getElementById("cardPoisonRes").textContent = calcOil.DamageResistPoison;
    }
    if (calcOil.DamageResistFrost > 0) {
        document.getElementById("frostResistDiv").style.display = "flex";
        document.getElementById("cardFrostRes").textContent = calcOil.DamageResistFrost;
    }
    if (calcOil.DamageResistElectric > 0) {
        document.getElementById("electricResistDiv").style.display = "flex";
        document.getElementById("cardElectricRes").textContent = calcOil.DamageResistElectric;
    }
    if (calcOil.DamageResistLight > 0) {
        document.getElementById("lightResistDiv").style.display = "flex";
        document.getElementById("cardLightRes").textContent = calcOil.DamageResistLight;
    }
    if (calcOil.CharmResistance > 0) {
        document.getElementById("charmResistDiv").style.display = "flex";
        document.getElementById("cardCharmRes").textContent = calcOil.CharmResistance;
    }

    //#endregion
}

function getRandomInt() {
  const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(100);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
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

function getHeadByName(name) {
    return armorHeadData?.ArmorHead[name] || null;
}

function getChestByName(name) {
    return armorChestData?.ArmorChest[name] || null;
}

function getFootByName(name) {
    return armorFootData?.ArmorFeet[name] || null;
}

function getTrinketByName(name) {
    return trinketData?.Trinket[name] || null;
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
            case "head":
                coreSelections.set("head", {Name: itemName, Value: itemValue});
                break;
            case "chest":
                coreSelections.set("chest", {Name: itemName, Value: itemValue});
                break;
            case "lfoot":
                coreSelections.set("lfoot", {Name: itemName, Value: itemValue});
                break;
            case "rfoot":
                coreSelections.set("rfoot", {Name: itemName, Value: itemValue});
                break;
            case "trinket1":
                coreSelections.set("trinket1", {Name: itemName, Value: itemValue});
                break;
            case "trinket2":
                coreSelections.set("trinket2", {Name: itemName, Value: itemValue});
                break;
            case "trinket3":
                coreSelections.set("trinket3", {Name: itemName, Value: itemValue});
                break;
            case "trinket4":
                coreSelections.set("trinket4", {Name: itemName, Value: itemValue});
                break;
            case undefined:
                break;  
            case "all":
                break;
            default:
        }
        addToActiveBuild(flag, itemName, itemValue);
    }
    
}
let clone = 0;

function cloneTo(flag, itemName, itemValue) {
    let build = null;
    switch (clone) {
            case 1:
                build = build1Selections;
                break;
            case 2:
                build = build2Selections;
                break;
            case 3:
                build = build3Selections;
                break;
            case 4:
                build = build4Selections;
                break;
            case 5:
                build = build5Selections;
                break;
        }

    if (itemName !== null && itemValue !== null && itemValue !== "") {
        
        switch (flag) {
            case "weapon":
                build.set("weapon", {Name: itemName, Value: itemValue});
                break;
            case "ench1":
                build.set("ench1", {Name: itemName, Value: itemValue});
                break;
            case "ench2":
                build.set("ench2", {Name: itemName, Value: itemValue});
                break;
            case "ench3":
                build.set("ench3", {Name: itemName, Value: itemValue});
                break;
            case "ench4":
                build.set("ench4", {Name: itemName, Value: itemValue});
                break;
            case "ench5":
                build.set("ench5", {Name: itemName, Value: itemValue});
                break;
            case "barrel":
                build.set("barrel", {Name: itemName, Value: itemValue});
                break;
            case "optic":
                build.set("optic", {Name: itemName, Value: itemValue});
                break;
            case "laser":
                build.set("laser", {Name: itemName, Value: itemValue});
                break;
            case "firemode":
                build.set("firemode", {Name: itemName, Value: itemValue});
                break;
            case "chamber":
                build.set("chamber", {Name: itemName, Value: itemValue});
                break;
            case "head":
                build.set("head", {Name: itemName, Value: itemValue});
                break;
            case "chest":
                build.set("chest", {Name: itemName, Value: itemValue});
                break;
            case "lfoot":
                build.set("lfoot", {Name: itemName, Value: itemValue});
                break;
            case "rfoot":
                build.set("rfoot", {Name: itemName, Value: itemValue});
                break;
            case "trinket1":
                build.set("trinket1", {Name: itemName, Value: itemValue});
                break;
            case "trinket2":
                build.set("trinket2", {Name: itemName, Value: itemValue});
                break;
            case "trinket3":
                build.set("trinket3", {Name: itemName, Value: itemValue});
                break;
            case "trinket4":
                build.set("trinket4", {Name: itemName, Value: itemValue});
                break;
            case undefined:
                break;  
            case "all":
                break;
            default:
        }
    }
    
}

function addToActiveBuild(flag, itemName, itemValue) {

    let build = null;

    switch (selectedBuild) {
        case 1:
            build = build1Selections;
            break;
        case 2:
            build = build2Selections;
            break;
        case 3:
            build = build3Selections;
            break;
        case 4:
            build = build4Selections;
            break;
        case 5:
            build = build5Selections;
            break;
    }

    if (itemName !== null && itemValue !== null && itemValue !== "") {
        
        switch (flag) {
            case "weapon":
                build.set("weapon", {Name: itemName, Value: itemValue});
                break;
            case "ench1":
                build.set("ench1", {Name: itemName, Value: itemValue});
                break;
            case "ench2":
                build.set("ench2", {Name: itemName, Value: itemValue});
                break;
            case "ench3":
                build.set("ench3", {Name: itemName, Value: itemValue});
                break;
            case "ench4":
                build.set("ench4", {Name: itemName, Value: itemValue});
                break;
            case "ench5":
                build.set("ench5", {Name: itemName, Value: itemValue});
                break;
            case "barrel":
                build.set("barrel", {Name: itemName, Value: itemValue});
                break;
            case "optic":
                build.set("optic", {Name: itemName, Value: itemValue});
                break;
            case "laser":
                build.set("laser", {Name: itemName, Value: itemValue});
                break;
            case "firemode":
                build.set("firemode", {Name: itemName, Value: itemValue});
                break;
            case "chamber":
                build.set("chamber", {Name: itemName, Value: itemValue});
                break;
            case "head":
                build.set("head", {Name: itemName, Value: itemValue});
                break;
            case "chest":
                build.set("chest", {Name: itemName, Value: itemValue});
                break;
            case "lfoot":
                build.set("lfoot", {Name: itemName, Value: itemValue});
                break;
            case "rfoot":
                build.set("rfoot", {Name: itemName, Value: itemValue});
                break;
            case "trinket1":
                build.set("trinket1", {Name: itemName, Value: itemValue});
                break;
            case "trinket2":
                build.set("trinket2", {Name: itemName, Value: itemValue});
                break;
            case "trinket3":
                build.set("trinket3", {Name: itemName, Value: itemValue});
                break;
            case "trinket4":
                build.set("trinket4", {Name: itemName, Value: itemValue});
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
            case "head":
                tempSelections.set("head", {Name: itemName, Value: itemValue});
                break;
            case "chest":
                tempSelections.set("chest", {Name: itemName, Value: itemValue});
                break;
            case "lfoot":
                tempSelections.set("lfoot", {Name: itemName, Value: itemValue});
                break;
            case "rfoot":
                tempSelections.set("rfoot", {Name: itemName, Value: itemValue});
                break;
            case "trinket1":
                tempSelections.set("trinket1", {Name: itemName, Value: itemValue});
                break;
            case "trinket2":
                tempSelections.set("trinket2", {Name: itemName, Value: itemValue});
                break;
            case "trinket3":
                tempSelections.set("trinket3", {Name: itemName, Value: itemValue});
                break;
            case "trinket4":
                tempSelections.set("trinket4", {Name: itemName, Value: itemValue});
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

    const indexEnchAll = enchAll.indexOf(name);
    if (indexEnchAll > -1) {
        enchAll.splice(indexEnchAll, 1);
    }
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
    const indexSize = oilsSize.indexOf(name);
    if (indexSize > -1) {
        oilsSize.splice(indexSize, 1);
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

function oilSwapper(flag, val) {

    let oil1 = document.getElementById("oils1selector").getValue();
    let oil2 = document.getElementById("oils2selector").getValue();
    let oil3 = document.getElementById("oils3selector").getValue();
    let oil4 = document.getElementById("oils4selector").getValue();
    let oil5 = document.getElementById("oils5selector").getValue();

    let oils = [];
    oils.push(oil1);
    oils.push(oil2);
    oils.push(oil3);
    oils.push(oil4);
    oils.push(oil5);

    let active = null;

    let sel = null;

    switch (flag) {
        case "ench1":
            active = 0;
            sel = "oils1selector";
            break;
        case "ench2":
            active = 1;
            sel = "oils2selector";
            break;
        case "ench3":
            active = 2;
            sel = "oils3selector";
            break;
        case "ench4":
            active = 3;
            sel = "oils4selector";
            break;
        case "ench5":
            active = 4;
            sel = "oils5selector";
            break;
    }

    let counter = 0;
    let selectedItem = null;
    let selectedValue = null;

    oils.forEach((oil) => {
        if (oil === val && counter !== active && val !== "none" && !(val.startsWith("static")) && !(val.startsWith("scroll"))) {
            shallNotPass = true;
            switch (counter) {
                case 0:
                    document.getElementById("oils1selector").setValue("none");
                    selectedItem = getOilByName("None");
                    selectedValue = oilNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    rollAggregator('ench1', 'oils1selector', 1, "none", "ench", false, "oilSwapper");
                    rollAggregator(flag, sel, 1, val, "ench", true, "oilSwapper");
                    break;
                case 1:
                    document.getElementById("oils2selector").setValue("none");
                    selectedItem = getOilByName("None");
                    selectedValue = oilNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    rollAggregator('ench2', 'oils2selector', 2, "none", "ench", false, "oilSwapper");
                    rollAggregator(flag, sel, 1, val, "ench", true, "oilSwapper");
                    break;
                case 2:
                    document.getElementById("oils3selector").setValue("none");
                    selectedItem = getOilByName("None");
                    selectedValue = oilNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    rollAggregator('ench3', 'oils3selector', 3, "none", "ench", false, "oilSwapper");
                    rollAggregator(flag, sel, 1, val, "ench", true, "oilSwapper");
                    break;
                case 3:
                    document.getElementById("oils4selector").setValue("none");
                    selectedItem = getOilByName("None");
                    selectedValue = oilNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    rollAggregator('ench4', 'oils4selector', 4, "none", "ench", false, "oilSwapper");
                    rollAggregator(flag, sel, 1, val, "ench", true, "oilSwapper");
                    break;
                case 4:
                    document.getElementById("oils5selector").setValue("none");
                    selectedItem = getOilByName("None");
                    selectedValue = oilNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    rollAggregator('ench5', 'oils5selector', 5, "none", "ench", false, "oilSwapper");
                    rollAggregator(flag, sel, 1, val, "ench", true, "oilSwapper");
                    break;
            }
            shallNotPass = false;
        }
        counter += 1;
    })

}

let totalItemRolls = 0;
let totalRandomRolls = 0;

function rollSelections(flag, selector, selID, value, type) {
    if (buildSwapping === false && skipRollCounting === false) {
        totalItemRolls += 1;
        if (value.startsWith("static")) {
            totalRandomRolls += 1;
        }
    }
    document.getElementById("totItemRollSpan").textContent = totalItemRolls;
    document.getElementById("totRandomRollSpan").textContent = totalRandomRolls;

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
            case "static-random-bullet-size":
                shuffle(oilsSize);
                selectedItem = getOilByName(oilsSize[0]);
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
                selectedValue = value;
                addToCoreMap(flag, selectedItem, value);
        }
        if (selectedItem !== null) {
            poolRemover(selectedItem.Name);
            oilSwapper(flag, selectedValue)
        }
    }

    function rollWeapon(value, flag) {
        
        switch (value) {
            case "static-random-all-weapons":
                shuffle(gunsAll);
                selectedItem = getWeaponByName(gunsAll[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-pistols":
                shuffle(gunsPistols);
                selectedItem = getWeaponByName(gunsPistols[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-revolvers":
                shuffle(gunsRevolvers);
                selectedItem = getWeaponByName(gunsRevolvers[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-shotguns":
                shuffle(gunsShotguns);
                selectedItem = getWeaponByName(gunsShotguns[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-smgs":
                shuffle(gunsSMGs);
                selectedItem = getWeaponByName(gunsSMGs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-assault-rifles":
                shuffle(gunsARs);
                selectedItem = getWeaponByName(gunsARs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-lmgs":
                shuffle(gunsLMGs);
                selectedItem = getWeaponByName(gunsLMGs[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-rifles":
                shuffle(gunsRifles);
                selectedItem = getWeaponByName(gunsRifles[0]);
                selectedValue = weaponNameIndexer.get(selectedItem.Name);
                setDefaultChamber(selectedItem);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-sniper-rifles":
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
                    case "":
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
                        selectedValue = chamberNameIndexer.get(selectedItem.Name);
                        if (selectedItem.AmmoType === coreSelections.get("weapon").Name.AmmoType) {
                            weapCha = coreSelections.get("weapon");
                            setDefaultChamber(weapCha.Name);
                        }
                        addToCoreMap(flag, selectedItem, selectedValue);
                        break;
                    default:
                        selectedItem = chamberValueIndexer.get(value);
                        selectedChamber = getChamberByName(selectedItem);
                        if (selectedChamber.AmmoType === coreSelections.get("weapon").Name.AmmoType) {
                            weapCha = coreSelections.get("weapon");
                            setDefaultChamber(weapCha.Name);
                        }
                        addToCoreMap(flag, selectedChamber, value);
                }
            }
        }
    }

    function rollArmor(value, flag) {
        if (flag === "head") {
            switch (value) {
                case "static-choose":
                    selectedItem = getHeadByName("None");
                    selectedValue = armorHeadNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "none":
                    selectedItem = getHeadByName("None");
                    selectedValue = armorHeadNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-random-all-head-armor":
                    shuffle(armorHeadAll);
                    selectedItem = getHeadByName(armorHeadAll[0]);
                    selectedValue = armorHeadNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                default:
                    let selhead = armorHeadValueIndexer.get(value);
                    selectedItem = getHeadByName(selhead);
                    addToCoreMap(flag, selectedItem, value);
            }
        }
        if (flag === "chest") {
            switch (value) {
                case "static-choose":
                    selectedItem = getChestByName("None");
                    selectedValue = armorChestNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "none":
                    selectedItem = getChestByName("None");
                    selectedValue = armorChestNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-random-all-chest-armor":
                    shuffle(armorChestAll);
                    selectedItem = getChestByName(armorChestAll[0]);
                    selectedValue = armorChestNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                default:
                    let selchest = armorChestValueIndexer.get(value);
                    selectedItem = getChestByName(selchest);
                    addToCoreMap(flag, selectedItem, value);
            }
        }
        if (flag === "lfoot" || flag === "rfoot") {
            switch (value) {
                case "static-choose":
                    selectedItem = getFootByName("None");
                    selectedValue = armorFootNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "none":
                    selectedItem = getFootByName("None");
                    selectedValue = armorFootNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                case "static-random-all-foot-armor":
                    shuffle(armorFeetAll);
                    selectedItem = getFootByName(armorFeetAll[0]);
                    selectedValue = armorFootNameIndexer.get(selectedItem.Name);
                    addToCoreMap(flag, selectedItem, selectedValue);
                    break;
                default:
                    let selfoot = armorFootValueIndexer.get(value);
                    selectedItem = getFootByName(selfoot);
                    addToCoreMap(flag, selectedItem, value);
            }
        }
    }

    function rollTrinket(value, flag) {
        switch (value) {
            case "static-choose":
                selectedItem = getTrinketByName("None");
                selectedValue = trinketNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "none":
                selectedItem = getTrinketByName("None");
                selectedValue = trinketNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            case "static-random-all-trinkets":
                shuffle(trinketsAll);
                selectedItem = getTrinketByName(trinketsAll[0]);
                selectedValue = trinketNameIndexer.get(selectedItem.Name);
                addToCoreMap(flag, selectedItem, selectedValue);
                break;
            default:
                let seltrink = trinketValueIndexer.get(value);
                selectedItem = getTrinketByName(seltrink);
                addToCoreMap(flag, selectedItem, value);
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
        case "armor":
            rollArmor(value, flag);
            break;
        case "trinket":
            rollTrinket(value, flag);
            break;
        default:
    }
}



// Arrays; don't add functions below this

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
    oilValueIndexer.set("static-random-bullet-size", "Random Bullet Size Oil");
    oilValueIndexer.set("static-random-damage---flat", "Random Damage - Flat Oil");
    oilValueIndexer.set("static-random-damage---mult", "Random Damage - Mult Oil");
    oilValueIndexer.set("static-random-max-durability", "Random Max Durability Oil");
    oilValueIndexer.set("static-random-penetration", "Random Penetration Oil");
    oilValueIndexer.set("static-random-projectiles", "Random Projectiles Oil");
    oilValueIndexer.set("static-random-recoil", "Random Recoil Oil");
    oilValueIndexer.set("static-random-reload-speed", "Random Reload Speed Oil");
    oilValueIndexer.set("static-random-rpm", "Random RPM Oil");
    oilValueIndexer.set("static-random-spread", "Random Spread Oil");
    oilsAll.forEach(oil => {
        const key = oil.toLowerCase().replaceAll(" ", "-");
        oilValueIndexer.set(key, oil);
    });
    return true;
}

const oilNameIndexer = new Map();

function setOilNameIndexer() {
console.info("KBH: Setting oil name indexer");
    oilNameIndexer.set("None", "none");
    function addToWNI(value, key, map) {
        oilNameIndexer.set(value, key);
    }

    oilValueIndexer.forEach(addToWNI);  
    return true;
}

const armorHeadValueIndexer = new Map();

function setArmorHeadValueIndexer() {
    console.info("KBH: Setting head armor value indexer");
    armorHeadValueIndexer.set("none", "None");
    armorHeadValueIndexer.set("static-random-all-head-armor", "Random Head Armor");
    armorHeadAll.forEach(head => {
        const key1 = head.toLowerCase().replaceAll("'", "");
        const key = key1.replaceAll(" ", "-");
        armorHeadValueIndexer.set(key, head);
    });
    return true;
}

const armorHeadNameIndexer = new Map();

function setArmorHeadNameIndexer() {
console.info("KBH: Setting head armor name indexer");
    function addToWNI(value, key, map) {
        armorHeadNameIndexer.set(value, key);
    }

    armorHeadValueIndexer.forEach(addToWNI);  
    return true;
}

const armorChestValueIndexer = new Map();

function setArmorChestValueIndexer() {
    console.info("KBH: Setting chest armor value indexer");
    armorChestValueIndexer.set("none", "None");
    armorChestValueIndexer.set("static-random-all-chest-armor", "Random Chest Armor");
    armorChestAll.forEach(chest => {
        const key1 = chest.toLowerCase().replaceAll("'", "");
        const key = key1.replaceAll(" ", "-");
        armorChestValueIndexer.set(key, chest);
    });
    return true;
}

const armorChestNameIndexer = new Map();

function setArmorChestNameIndexer() {
console.info("KBH: Setting chest armor name indexer");
    function addToWNI(value, key, map) {
        armorChestNameIndexer.set(value, key);
    }

    armorChestValueIndexer.forEach(addToWNI);  
    return true;
}

const armorFootValueIndexer = new Map();

function setArmorFootValueIndexer() {
    console.info("KBH: Setting foot armor value indexer");
    armorFootValueIndexer.set("none", "None");
    armorFootValueIndexer.set("static-random-all-foot-armor", "Random Foot Armor");
    armorFeetAll.forEach(foot => {
        const key1 = foot.toLowerCase().replaceAll("'", "");
        const key = key1.replaceAll(" ", "-");
        armorFootValueIndexer.set(key, foot);
    });
    return true;
}

const armorFootNameIndexer = new Map();

function setArmorFootNameIndexer() {
console.info("KBH: Setting foot armor name indexer");
    function addToWNI(value, key, map) {
        armorFootNameIndexer.set(value, key);
    }

    armorFootValueIndexer.forEach(addToWNI);  
    return true;
}

const trinketValueIndexer = new Map();

function setTrinketValueIndexer() {
    console.info("KBH: Setting trinket value indexer");
    trinketValueIndexer.set("none", "None");
    trinketValueIndexer.set("static-random-all-trinkets", "Random Trinket");
    trinketsAll.forEach(trink => {
        const key1 = trink.toLowerCase().replaceAll("'", "");
        const key = key1.replaceAll(" ", "-");
        trinketValueIndexer.set(key, trink);
    });
    return true;
}

const trinketNameIndexer = new Map();

function setTrinketNameIndexer() {
console.info("KBH: Setting trinket name indexer");
    function addToWNI(value, key, map) {
        trinketNameIndexer.set(value, key);
    }

    trinketValueIndexer.forEach(addToWNI);  
    return true;
}

function mobileDropdownCheck(evt) {
    /*let helloThere = "hello there, i am mobile";
    
    if (isMobile === true) {
        
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

