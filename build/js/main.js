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

var tableWithCheckbox = document.querySelector('.table--with-checkbox');
var mainInput = tableWithCheckbox.querySelector('input[name^=all');

function checkAll(obj) {
  var nodes = tableWithCheckbox.querySelectorAll('input[name^=name');

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].onclick = function () {
      var allChecked = tableWithCheckbox.querySelectorAll('input[name^=name]:checked').length;
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

// анимация (изменение длинны загрузки) происходит после изменений процента загрузки в разметке

// анимация круговой загрузки
var percentageEntity = document.querySelector('.percentage');
var textEntity = document.querySelector('.circle');

var percentage = percentageEntity.textContent;

var x = parseInt(percentage.replace(/[^\d]/g, ''));

var attribute = textEntity.getAttribute('stroke-dasharray');

var attributeValue = attribute.substring(0, 2);

if (x !== attributeValue) {
  textEntity.setAttribute('stroke-dasharray', x + ', 100');
}


// анимация прямой загрузки
var percent = document.querySelector('.uploader__percent');

var level = document.querySelector('.uploader__level');

level.style.width = percent.textContent + '%';

window.disableLitepickerStyles = true;

new Litepicker({
  element: document.getElementById('datepicker'),
  singleMode: false,
  position: 'bottom',
  format: 'DD.MM.YYYY'
})

var selects = document.querySelectorAll('.select');

selects.forEach(function (select) {

  var defaultSelect = function () {
    // var element = document.querySelector('.select');
    var choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
    });
  };

  defaultSelect();
});


