const nameEl = document.getElementById("name");
const cardEl = document.querySelector(".card");

// 3D hover effect
var mouse = {
  X   : 0,
  Y   : 0,
  CX  : 0,
  CY  : 0
},
block = {
  X   : mouse.X,
  Y   : mouse.Y,
  CX  : mouse.CX,
  CY  : mouse.CY
};

cardEl.addEventListener('mousemove', function(e) {
  mouse.X   = (e.pageX - cardEl.offsetLeft) - cardEl.offsetWidth / 2;
  mouse.Y   = (e.pageY - cardEl.offsetTop) - cardEl.offsetHeight / 2;
});

cardEl.addEventListener('mouseleave', function(e) {
  mouse.X   = mouse.CX;
  mouse.Y   = mouse.CY;
});

// Use requestAnimationFrame for smoother animations
function animateCard() {
  block.CY += (mouse.Y - block.CY) / 15; // Faster smoothing for more responsive feel
  block.CX += (mouse.X - block.CX) / 15; // Faster smoothing for more responsive feel

  cardEl.style.transform = 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)';
  
  requestAnimationFrame(animateCard);
}

animateCard();
