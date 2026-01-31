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

// Track mouse movement anywhere in the window
document.addEventListener('mousemove', function(e) {
  // Calculate mouse position relative to card center
  const cardRect = cardEl.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;
  
  mouse.X = e.clientX - cardCenterX;
  mouse.Y = e.clientY - cardCenterY;
});

// Reset position when mouse leaves window
document.addEventListener('mouseleave', function(e) {
  mouse.X = 0;
  mouse.Y = 0;
});

// Use requestAnimationFrame for smoother animations
function animateCard() {
  block.CY += (mouse.Y - block.CY) / 15; // Faster smoothing for more responsive feel
  block.CX += (mouse.X - block.CX) / 15; // Faster smoothing for more responsive feel

  cardEl.style.transform = 'scale(1.03) translate(' + (block.CX * 0.03) + 'px, ' + (block.CY * 0.03) + 'px) rotateX(' + (block.CY * 0.03) + 'deg) rotateY(' + (block.CX * 0.03) + 'deg)';
  
  requestAnimationFrame(animateCard);
}

animateCard();
