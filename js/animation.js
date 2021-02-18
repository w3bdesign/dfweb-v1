const startScrollMagic = () => {
  const controller = new ScrollMagic.Controller();
  const revealElements = document.getElementsByClassName("reveal");
  for (let i = 0; i < revealElements.length; i++) {
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
};

startScrollMagic();
