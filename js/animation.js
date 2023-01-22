var blockLeft = document.getElementById("mainBlockLeft");
var blockMid = document.getElementById("mainBlockMid");
var blockRight = document.getElementById("mainBlockRight");
var background = document.getElementById("background");
var mainText = document.getElementById("mainBlockMidText");
var backPatternId = document.getElementById("backPatternId");

function springIn(element, valuePos, timeDelay, durationOpacity = 800) {
  if (element == blockMid || element == mainText) {
    anime({
      targets: element,
      translateY: [{ value: valuePos }, { value: 0, duration: 2000 }],
      opacity: {
        value: [0.0, 1],
        easing: "linear",
        duration: durationOpacity,
        delay: timeDelay,
      },
      easing: "cubicBezier(0.770, 0.000, 0.175, 1.000)",
    });
  } else {
    anime({
      targets: element,
      translateX: [{ value: valuePos }, { value: 0, duration: 2000 }],
      opacity: {
        value: [0.01, 1],
        easing: "linear",
        duration: durationOpacity,
        delay: timeDelay,
      },
      easing: "cubicBezier(0.770, 0.000, 0.175, 1.000)",
    });
  }
}
anime({
  targets: background,
  scale: {
    value: [0.8, 1],
    easing: "cubicBezier(0.770, 0.000, 0.175, 1.500)",
    duration: 800,
  },
  easing: "cubicBezier(0.770, 0.000, 0.175, 1.000)",
});

window.onload = springIn(blockLeft, -50, (timeDelay = 1000));
window.onload = springIn(blockMid, 50, 1000);
window.onload = springIn(blockRight, 50, 1000);
window.onload = springIn(mainText, 50, 1000);

window.onload = springIn(backPatternId, 0, 0, 2000);