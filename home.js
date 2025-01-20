const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');

      }
  });
});

const cricketbuttonElement = document.querySelectorAll('.cricketbutton');
cricketbuttonElement.forEach((el) => observer.observe(el));
const FutbuttonElement = document.querySelectorAll('.Futbutton');
FutbuttonElement.forEach((el) => observer.observe(el));

const F1buttonElement = document.querySelectorAll('.F1button');
F1buttonElement.forEach((el) => observer.observe(el));
const font1Element = document.querySelectorAll('.font1');
font1Element.forEach((el) => observer.observe(el));
const font2Element = document.querySelectorAll('.font2');
font2Element.forEach((el) => observer.observe(el));
const font3Element = document.querySelectorAll('.font3');
font3Element.forEach((el) => observer.observe(el));
const font4Element = document.querySelectorAll('.font4');
font4Element.forEach((el) => observer.observe(el));

const img1Element = document.querySelectorAll('.img1');
img1Element.forEach((el) => observer.observe(el));

const img2Element = document.querySelectorAll('.img2');
img2Element.forEach((el) => observer.observe(el));


const img4Element = document.querySelectorAll('.img4');
img4Element.forEach((el) => observer.observe(el));