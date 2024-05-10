function openModal({ name, audio, img, description }) {
  document.querySelector(".modal").classList.add("active");
  localStorage.setItem("modalAudioSRC", audio);
  document.querySelector(".musicTitle").innerHTML = name;
  document.querySelector(".musicImg").src = img;
  document.querySelector(".musicDescription").innerHTML = description;
}

const closeModal = () => {
  document.querySelector(".modal").classList.remove("active");
};

const array = ["little_prince.m4a"];

let index = 1;

function play() {
  pause();
  document.querySelector(".audio").play();
  document.querySelector(".play").classList.add("dn");
  document.querySelector(".pause").classList.remove("dn");
}

function pause() {
  document.querySelector(".audio").pause();
  document.querySelector(".play").classList.remove("dn");
  document.querySelector(".pause").classList.add("dn");
}

function set() {
  const audio = localStorage.getItem("modalAudioSRC");
  document.querySelector(".audio").src = audio;

  play();
}

function played() {
  document.querySelector(".audio").play();
  document.querySelector(".played").classList.add("dn");
  document.querySelector(".paused").classList.remove("dn");
}

function paused() {
  document.querySelector(".audio").pause();
  document.querySelector(".played").classList.remove("dn");
  document.querySelector(".paused").classList.add("dn");
}

function prev() {
  document.querySelector(".audio").play();
  document.querySelector(".audio").src = array[index];
  play();
  document.querySelector(".audio").play();
  if (index === 0) {
    return (index = array.length - 1);
  }
  index = index - 1;
}

function next() {
  document.querySelector(".audio").src = array[index];
  play();
  document.querySelector(".audio").play();
  if (index === array.length - 1) {
    return (index = 0);
  }
  index = index + 1;
}
