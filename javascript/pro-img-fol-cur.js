// -------------------------------------IMG BD1---------------------------------------

const card = document.querySelector(".card-bd1");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 30;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2 +72).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}

// -------------------------------------IMG BD2---------------------------------------

const card2 = document.querySelector(".card-bd2");
const motionMatchMedia2 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD2 = 24;

function handleHover2(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD2 / 2 - horizontal * THRESHOLD2).toFixed(2);
  const rotateY = (vertical * THRESHOLD2 - THRESHOLD2 / 2 +72).toFixed(2);

  card2.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles2(e) {
  card2.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia2.matches) {
  card2.addEventListener("mousemove", handleHover2);
  card2.addEventListener("mouseleave", resetStyles2);
}


// -------------------------------------IMG HD3---------------------------------------

const card3 = document.querySelector(".card-bd3");
const motionMatchMedia3 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD3 = 16;

function handleHover3(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD3 / 2 - horizontal * THRESHOLD3).toFixed(2);
  const rotateY = (vertical * THRESHOLD3 - THRESHOLD3 / 2 +72).toFixed(2);

  card3.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles3(e) {
  card3.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia3.matches) {
  card3.addEventListener("mousemove", handleHover3);
  card3.addEventListener("mouseleave", resetStyles3);
}


// -------------------------------------IMG HD4---------------------------------------

const card4 = document.querySelector(".card-bd4");
const motionMatchMedia4 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD4 = 16;

function handleHover4(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD4 / 2 - horizontal * THRESHOLD4).toFixed(2);
  const rotateY = (vertical * THRESHOLD4 - THRESHOLD4 / 2 +72).toFixed(2);

  card4.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles4(e) {
  card4.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia4.matches) {
  card4.addEventListener("mousemove", handleHover4);
  card4.addEventListener("mouseleave", resetStyles4);
}

// -------------------------------------IMG HD5---------------------------------------

const card5 = document.querySelector(".card-bd5");
const motionMatchMedia5 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD5 = 15;

function handleHover5(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD5 / 2 - horizontal * THRESHOLD5).toFixed(2);
  const rotateY = (vertical * THRESHOLD5 - THRESHOLD5 / 2 +72).toFixed(2);

  card5.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles5(e) {
  card5.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia5.matches) {
  card5.addEventListener("mousemove", handleHover5);
  card5.addEventListener("mouseleave", resetStyles5);
}

// -------------------------------------IMG HD6---------------------------------------

const card6 = document.querySelector(".card-bd6");
const motionMatchMedia6 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD6 = 9;

function handleHover6(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD6 / 2 - horizontal * THRESHOLD6).toFixed(2);
  const rotateY = (vertical * THRESHOLD6 - THRESHOLD6 / 2 +72).toFixed(2);

  card6.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles6(e) {
  card6.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia6.matches) {
  card6.addEventListener("mousemove", handleHover6);
  card6.addEventListener("mouseleave", resetStyles6);
}

// -------------------------------------IMG HD7---------------------------------------

const card7 = document.querySelector(".card-bd7");
const motionMatchMedia7 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD7 = 10;

function handleHover7(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD7 / 2 - horizontal * THRESHOLD7).toFixed(2);
  const rotateY = (vertical * THRESHOLD7 - THRESHOLD7 / 2 +72).toFixed(2);

  card7.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles7(e) {
  card7.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia6.matches) {
  card7.addEventListener("mousemove", handleHover7);
  card7.addEventListener("mouseleave", resetStyles7);
}


// ******************************************* WEB ***************************************************

// -------------------------------------IMG HD8---------------------------------------

const card8 = document.querySelector(".card-bd8");
const motionMatchMedia8 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD8 = 26;

function handleHover8(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD8 / 2 - horizontal * THRESHOLD8).toFixed(2);
  const rotateY = (vertical * THRESHOLD8 - THRESHOLD8 / 2 +215).toFixed(2);

  card8.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles8(e) {
  card8.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia6.matches) {
  card8.addEventListener("mousemove", handleHover8);
  card8.addEventListener("mouseleave", resetStyles8);
}


// -------------------------------------IMG HD9---------------------------------------

const card9 = document.querySelector(".card-bd9");
const motionMatchMedia9 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD9 = 29;

function handleHover9(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD9 / 2 - horizontal * THRESHOLD9).toFixed(2);
  const rotateY = (vertical * THRESHOLD9 - THRESHOLD9 / 2 +215).toFixed(2);

  card9.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles9(e) {
  card9.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia6.matches) {
  card9.addEventListener("mousemove", handleHover9);
  card9.addEventListener("mouseleave", resetStyles9);
}


// -------------------------------------IMG HD10---------------------------------------

const card10 = document.querySelector(".card-bd10");
const motionMatchMedia10 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD10 = 23.5;

function handleHover10(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD10 / 2 - horizontal * THRESHOLD10).toFixed(2);
  const rotateY = (vertical * THRESHOLD10 - THRESHOLD10 / 2 +215).toFixed(2);

  card10.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles10(e) {
  card10.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia6.matches) {
  card10.addEventListener("mousemove", handleHover10);
  card10.addEventListener("mouseleave", resetStyles10);
}

// -------------------------------------IMG HD11---------------------------------------

const card11 = document.querySelector(".card-bd11");
const motionMatchMedia11 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD11 = 20;

function handleHover11(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD11 / 2 - horizontal * THRESHOLD11).toFixed(2);
  const rotateY = (vertical * THRESHOLD11 - THRESHOLD11 / 2 +215).toFixed(2);

  card11.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles11(e) {
  card11.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia11.matches) {
  card11.addEventListener("mousemove", handleHover11);
  card11.addEventListener("mouseleave", resetStyles11);
}


// -------------------------------------IMG HD12---------------------------------------

const card12 = document.querySelector(".card-bd12");
const motionMatchMedia12 = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD12 = 21;

function handleHover12(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD12 / 2 - horizontal * THRESHOLD12).toFixed(2);
  const rotateY = (vertical * THRESHOLD12 - THRESHOLD12 / 2 +215).toFixed(2);

  card12.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles12(e) {
  card12.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia12.matches) {
  card12.addEventListener("mousemove", handleHover12);
  card12.addEventListener("mouseleave", resetStyles12);
}
