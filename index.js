const electricHeartAudio = new Audio("heartbeat-electric.mp3");
const heartBeatAudio = new Audio("heartbeat-sound-effects-for-you-122458.mp3");

electricHeartAudio.loop = true;
heartBeatAudio.loop = true;

setTimeout(() => {
  // remove
  document.querySelector(".electric-heart").classList.add('fade');
  document.querySelector(".electric-heart").style.display = "none";
  let links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("beat.css")) {
      links[i].parentNode.removeChild(links[i]);
      break;
    }
  }
  // add
  document.querySelector(".heart").style.display = "block";
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "heart.css";
  document.head.appendChild(link);
  //

  electricHeartAudio.pause();
  heartBeatAudio.play();
}, 6000);


document.onclick = function () {
  electricHeartAudio.play();
}

setTimeout(() => {
  document.body.style.background = "black";
  document.body.classList.add('fade');
  document.body.style.opacity = 0;
  heartBeatAudio.pause();
  //
  window.location.href = './birthday.html';
}, 15000);
