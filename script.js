// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.header').classList.toggle('menu-open');
}

// PDP tabs
function switchTab(idx, el) {
  document.querySelectorAll('.tab-bar button').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach((p, i) => {
    p.style.display = i === idx ? 'grid' : 'none';
  });
}

// Size button selector
function pickSize(el) {
  el.parentElement.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// Color swatch selector
function pickColor(el) {
  el.parentElement.querySelectorAll('.col').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// PDP thumbnail switcher
function switchImg(src, el) {
  document.getElementById('main-pdp-img').src = src;
  el.parentElement.querySelectorAll('img').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
}

// Card heart toggle (categories + product cards)
function toggleHeart(el) {
  el.classList.toggle('active');
}

// Wishlist button toggle (PDP)
function toggleWishlist(el) {
  el.classList.toggle('active');
  const label = el.querySelector('span');
  if (label) {
    label.textContent = el.classList.contains('active') ? 'Added to Wishlist' : 'Add to Wishlist';
  }
}
