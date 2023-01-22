//drop down toggle

function toggleShowClass() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//javascript dropdown menu functie wanneer persoon op andere plek klikt dan het menu sluit het menu
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

let clickButtonDiscord = document.getElementById("discordButtonId");
let clickButtonMaster = document.getElementById("masterButtonId");
let clickButtonScript = document.getElementById("scriptButtonId");
let projectText = document.getElementById("projectText");
let discordPanel = document.getElementById("discordPanelId");
let masterPanel = document.getElementById("masterPanelId");
let scriptPanel = document.getElementById("scriptPanelId");

let discordCount = false;
let masterCount = false;
let scriptCount = false;
let timeDone = true;

clickButtonDiscord.addEventListener("click", () => {
  if (!discordCount && timeDone == true) {
    timeDone = false;
    clickButtonDiscord.classList.toggle("clicked");
    clickButtonMaster.classList.remove("clicked");
    clickButtonScript.classList.remove("clicked");

    discordCount = true;

    gsap.set([discordPanel], { x: -300, opacity: 1 });
    gsap.from([discordPanel], { duration: 1, x: -1500, y: 0, opacity: 1 });
    gsap.to([projectText], { duration: 1, x: 500, y: 0, opacity: 0 });

    masterC();
    scriptC();

    timeDone = true;
  }
});
clickButtonMaster.addEventListener("click", () => {
  if (!masterCount && timeDone == true) {
    timeDone = false;
    clickButtonMaster.classList.toggle("clicked");
    clickButtonDiscord.classList.remove("clicked");
    clickButtonScript.classList.remove("clicked");
    masterCount = true;

    gsap.set([masterPanel], { x: -300, opacity: 1 });
    gsap.from([masterPanel], { duration: 1, x: -1500, y: 0, opacity: 1 });
    gsap.to([projectText], { duration: 1, x: 500, y: 0, opacity: 0 });

    discordC();
    scriptC();

    timeDone = true;
  }
});
clickButtonScript.addEventListener("click", () => {
  if (!scriptCount && timeDone == true) {
    timeDone = false;
    clickButtonScript.classList.toggle("clicked");
    clickButtonDiscord.classList.remove("clicked");
    clickButtonMaster.classList.remove("clicked");

    scriptCount = true;

    gsap.set([scriptPanel], { x: -300, opacity: 1 });
    gsap.from([scriptPanel], { duration: 1, x: -1500, y: 0, opacity: 1 });
    gsap.to([projectText], { duration: 1, x: 500, y: 0, opacity: 0 });

    masterC();
    discordC();

    timeDone = true;
  }
});

function scriptC() {
  if (scriptCount) {
    gsap.to([scriptPanel], { duration: 1, x: 500, y: 0, opacity: 0 });
    gsap.set([scriptPanel], { x: -500, y: 0, opacity: 0, delay: 1 });
    scriptCount = false;
  }
}
function masterC() {
  if (masterCount) {
    gsap.to([masterPanel], { duration: 1, x: 500, y: 0, opacity: 0 });
    gsap.set([masterPanel], { x: 0, y: 0, opacity: 0, delay: 1 });
    masterCount = false;
  }
}
function discordC() {
  if (discordCount) {
    gsap.to([discordPanel], { duration: 1, x: 500, y: 0, opacity: 0 });
    gsap.set([discordPanel], { x: 0, y: 0, opacity: 0, delay: 1 });
    discordCount = false;
  }
}
