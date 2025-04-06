let current = 0;
const lights = document.querySelectorAll('.light');

function changeLight() {
  lights.forEach((light, index) => {
    light.classList.remove('active');
    if (index === current) {
      light.classList.add('active');
    }
  });
  current = (current + 1) % lights.length;
}
