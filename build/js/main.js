/** Порядок подключения JS-модулей */

// import noUiSlider from '../vendor/nouislider.js';

// запуск ползунка для фильтра Розничная цена
var slider = document.getElementById('slider');
var sliderTwoHandles = document.getElementById('slider-two-handels');
var slider2 = document.getElementById('slider-2');
var slider3 = document.getElementById('slider-3');
var slider4 = document.getElementById('slider-4');

if (slider) {
  noUiSlider.create(slider, {
    start: [50],
    connect: 'lower',
    range: {
      'min': [1],
      'max': [100],
    },
  });
}


if (sliderTwoHandles) {
  noUiSlider.create(sliderTwoHandles, {
    start: [15, 34],
    connect: true,
    range: {
      'min': [1],
      'max': [100],
    },
  });
}



if (slider3) {
  noUiSlider.create(slider3, {
    start: [15, 34],
    connect: true,
    tooltips: [true, true],
    format: wNumb({
      decimals: 0,
    }),
    range: {
      'min': [1],
      'max': [100],
    },
  });
}



if (slider2) {
  noUiSlider.create(slider2, {
    start: [50],
    connect: 'lower',
    tooltips: [true],
    format: wNumb({
      decimals: 0,
    }),
    range: {
      'min': [1],
      'max': [100],
    },
  });
}


if (slider4) {
  noUiSlider.create(slider4, {
    start: [15, 34],
    connect: true,
    tooltips: [true, true],
    format: wNumb({
      decimals: 0,
    }),
    range: {
      'min': [1],
      'max': [100],
    },
  });
}

var tabs = document.querySelectorAll('.tabs__item--general');
var tabsIcon = document.querySelectorAll('.tabs__item--icon');
var tabsSize = document.querySelectorAll('.tabs__item--size');
var tabsNav = document.querySelectorAll('.tabs-nav');


var addActiveClass = function (array) {
  if (array) {
    var removeActiveClass = function () {
      array.forEach(function (tab) {
        tab.classList.remove('active');
      });
    };

    array.forEach(function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        removeActiveClass(array);
        tab.classList.add('active');
      });
    });
  }

};

tabsNav.forEach(function (item) {
  var tabsItem = item.querySelectorAll('.tab');
  addActiveClass(tabsItem);
});


addActiveClass(tabs);
addActiveClass(tabsIcon);
addActiveClass(tabsSize);


var pages = document.querySelectorAll('.pagination-3__link');

if (pages) {
  addActiveClass(pages);
}

const tableWithCheckbox = document.querySelector('.table--with-checkbox');
const mainInput = tableWithCheckbox.querySelector('input[name^=all');
// const list = tableWithCheckbox.querySelectorAll('.standards-checkbox__list');
// const nodes = list.querySelectorAll('input[name^=name');
function checkAll(obj) {
  const nodes = tableWithCheckbox.querySelectorAll('input[name^=name');

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].onclick = function () {
      const allChecked = tableWithCheckbox.querySelectorAll('input[name^=name]:checked').length;
      mainInput.checked = allChecked === nodes.length;
      mainInput.indeterminate = allChecked > 0 && allChecked < nodes.length;
    };
  }

  [].forEach.call(nodes, function (elem) {
    elem.checked = obj.checked;
  });

}

mainInput.addEventListener('change', function () {
  checkAll(mainInput);
});

// =require modules/uploader-animation.js
