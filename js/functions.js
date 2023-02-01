//drop down toggle

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

function myFunction(x) {
  if (x.matches) {
    clickButtonDiscord.addEventListener("click", () => {
      if (!discordCount && timeDone == true) {
        timeDone = false;
        clickButtonDiscord.classList.toggle("clicked");
        clickButtonMaster.classList.remove("clicked");
        clickButtonScript.classList.remove("clicked");

        discordCount = true;

        gsap.set([discordPanel], { x: 0, opacity: 1 });
        gsap.from([discordPanel], { duration: 1, x: -500, y: 0, opacity: 1 });
        gsap.to([projectText], { duration: 1, x: 0, y: 0, opacity: 0 });

        masterCP();
        scriptCP();

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

        gsap.set([masterPanel], { x: 0, opacity: 1 });
        gsap.from([masterPanel], { duration: 1, x: -500, y: 0, opacity: 1 });
        gsap.to([projectText], { duration: 1, x: 0, y: 0, opacity: 0 });

        discordCP();
        scriptCP();

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

        gsap.set([scriptPanel], { x: 0, opacity: 1 });
        gsap.from([scriptPanel], { duration: 1, x: -500, y: 0, opacity: 1 });
        gsap.to([projectText], { duration: 1, x: 0, y: 0, opacity: 0 });

        masterCP();
        discordCP();

        timeDone = true;
      }
    });
  } else {
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
  }
}

var x = window.matchMedia("(max-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function scriptC() {
  if (scriptCount) {
    gsap.to([scriptPanel], { duration: 1, x: 500, y: 0, opacity: 0 });
    gsap.set([scriptPanel], { x: 0, y: 0, opacity: 0, delay: 1 });
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

function scriptCP() {
  if (scriptCount) {
    gsap.to([scriptPanel], { duration: 1, x: 500, y: 0, opacity: 0 });
    gsap.set([scriptPanel], { x: 0, y: 0, opacity: 0, delay: 1 });
    scriptCount = false;
  }
}
function masterCP() {
  if (masterCount) {
    gsap.to([masterPanel], { duration: 1, x: 500, y: 0, opacity: 0 });
    gsap.set([masterPanel], { x: 0, y: 0, opacity: 0, delay: 1 });
    masterCount = false;
  }
}
function discordCP() {
  if (discordCount) {
    gsap.to([discordPanel], { duration: 1, x: 500, y: 0, opacity: 0 });
    gsap.set([discordPanel], { x: 0, y: 0, opacity: 0, delay: 1 });
    discordCount = false;
  }
}
