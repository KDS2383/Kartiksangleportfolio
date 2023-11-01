// -------------------------------------IMG BD1---------------------------------------

const card101 = document.querySelector(".card-cerimg1");
const motionMatchMedia101 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD101 = 10;

function handleHover101(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD101 / 2 - horizontal * THRESHOLD101).toFixed(2);
  const rotateY = (vertical * THRESHOLD101 - THRESHOLD101 / 2 +120).toFixed(2);

  card101.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles101(e) {
  card101.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia101.matches) {
  card101.addEventListener("mousemove", handleHover101);
  card101.addEventListener("mouseleave", resetStyles101);
}

// -------------------------------------IMG BD2---------------------------------------

const card102 = document.querySelector(".card-cerimg2");
const motionMatchMedia102 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD102 = 10;

function handleHover102(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD102 / 2 - horizontal * THRESHOLD102).toFixed(2);
  const rotateY = (vertical * THRESHOLD102 - THRESHOLD102 / 2 +120).toFixed(2);

  card102.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles102(e) {
  card102.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia102.matches) {
  card102.addEventListener("mousemove", handleHover102);
  card102.addEventListener("mouseleave", resetStyles102);
}

// -------------------------------------IMG BD3---------------------------------------

const card103 = document.querySelector(".card-cerimg3");
const motionMatchMedia103 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD103 = 13;

function handleHover103(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD103 / 2 - horizontal * THRESHOLD103).toFixed(2);
  const rotateY = (vertical * THRESHOLD103 - THRESHOLD103 / 2 +180).toFixed(2);

  card103.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles103(e) {
  card103.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia103.matches) {
  card103.addEventListener("mousemove", handleHover103);
  card103.addEventListener("mouseleave", resetStyles103);
}

// -------------------------------------IMG BD4---------------------------------------

const card104 = document.querySelector(".card-cerimg4");
const motionMatchMedia104 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD104 = 13;

function handleHover104(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD104 / 2 - horizontal * THRESHOLD104).toFixed(2);
  const rotateY = (vertical * THRESHOLD104 - THRESHOLD104 / 2 +180).toFixed(2);

  card104.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles104(e) {
  card104.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia104.matches) {
  card104.addEventListener("mousemove", handleHover104);
  card104.addEventListener("mouseleave", resetStyles104);
}


// -------------------------------------IMG BD5---------------------------------------

const card105 = document.querySelector(".card-cerimg5");
const motionMatchMedia105 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD105 = 17;

function handleHover105(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD105 / 2 - horizontal * THRESHOLD105).toFixed(2);
  const rotateY = (vertical * THRESHOLD105 - THRESHOLD105 / 2 +180).toFixed(2);

  card105.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles105(e) {
  card105.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia104.matches) {
  card105.addEventListener("mousemove", handleHover105);
  card105.addEventListener("mouseleave", resetStyles105);
}


// -------------------------------------IMG BD6---------------------------------------

const card106 = document.querySelector(".card-cerimg6");
const motionMatchMedia106 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD106 = 17;

function handleHover106(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD106 / 2 - horizontal * THRESHOLD106).toFixed(2);
  const rotateY = (vertical * THRESHOLD106 - THRESHOLD106 / 2 +180).toFixed(2);

  card106.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles106(e) {
  card106.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia106.matches) {
  card106.addEventListener("mousemove", handleHover106);
  card106.addEventListener("mouseleave", resetStyles106);
}

// -------------------------------------IMG BD7---------------------------------------

const card107 = document.querySelector(".card-cerimg7");
const motionMatchMedia107 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD107 = 10;

function handleHover107(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD107 / 2 - horizontal * THRESHOLD107).toFixed(2);
  const rotateY = (vertical * THRESHOLD107 - THRESHOLD107 / 2 +180).toFixed(2);

  card107.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles107(e) {
  card107.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia107.matches) {
  card107.addEventListener("mousemove", handleHover107);
  card107.addEventListener("mouseleave", resetStyles107);
}
