// анимация (изменение длинны загрузки) происходит после изменений процента загрузки в разметке

// анимация круговой загрузки
let percentageEntity = document.querySelector('.percentage');
let textEntity = document.querySelector('.circle');

let percentage = percentageEntity.textContent;

let x = parseInt(percentage.replace(/[^\d]/g, ''));

let attribute = textEntity.getAttribute('stroke-dasharray');

let attributeValue = attribute.substring(0, 2);

if (x !== attributeValue) {
  textEntity.setAttribute('stroke-dasharray', x + ', 100');
}


// анимация прямой загрузки
let percent = document.querySelector('.uploader__percent');

let level = document.querySelector('.uploader__level');

level.style.width = percent.textContent + '%';
