// Swiper slider start
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: false,
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1100: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    468: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});

// Swiper slider end

// Dropdown Menu start

const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownBackdrop = document.getElementById('dropdown-backdrop');

function toggleDropdown() {
  const isHidden = dropdownMenu.classList.contains('hidden');
  dropdownMenu.classList.toggle('hidden', !isHidden);
  dropdownBackdrop.classList.toggle('hidden', !isHidden);

  dropdownToggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
}

function closeDropdown() {
  dropdownMenu.classList.add('hidden');
  dropdownBackdrop.classList.add('hidden');
  dropdownToggle.setAttribute('aria-expanded', 'false');
}

dropdownToggle.addEventListener('click', (event) => {
  event.stopPropagation(); 
  toggleDropdown();
});

dropdownBackdrop.addEventListener('click', closeDropdown);

document.addEventListener('click', (event) => {
  if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
    closeDropdown();
  }
});

// Dropdown Menu end

