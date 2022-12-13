const splide = new Splide(".splide", {
  type: "slide", //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: "20px", //1 rem default
  rewind: true,
  speed: 500, //transition in milliseconds
  // fixedWidth: "100vw",
  // width: "100vw",
  perPage: 1,
  start: 0,
  perMove: 1,
  // autoplay: true,
  interval: 3000,
  arrows: true,
  pagination: true,
  pauseOnHover: true,
  wheel: true,
  //
  // type: "loop",
  // drag: "free",
  // focus: "center",
  // perPage: 3,
  // autoScroll: {
  //   speed: -1,
  // },
  //
});
splide.mount();
