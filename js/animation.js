/** global: ScrollMagic */
const startScrollMagic = () => {
  const controller = new ScrollMagic.Controller();
  const revealElements = document.getElementsByClassName('reveal');
  const revealElementCount = revealElements.length - 1;
  const elementsArray = Array.from(revealElements);

  let counter = 0;

  // Replaced for loop here with modern ES6 syntax and forEach
  elementsArray.forEach((_) => {
    const counterEqElementCount = counter === revealElementCount;
    const myOffset = counterEqElementCount ? -100 : 200;
    new ScrollMagic.Scene({
      triggerElement: revealElements[counter],
      offset: myOffset, // standard = 100
      reverse: false,
      triggerHook: 0.9,
    })
      .setClassToggle(revealElements[counter], 'visible')
      .addTo(controller);
    counter++;
  });
};

/*for (let i = 0; i < revealElements.length; i++) {
    const myOffset = i === revealElements.length - 1 ? -100 : 200;
    new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      offset: myOffset, // standard = 100
      reverse: false,
      triggerHook: 0.9,
    })
      .setClassToggle(revealElements[i], "visible")
      .addTo(controller);
  }
};*/

startScrollMagic();
