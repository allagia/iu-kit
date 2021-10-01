/** Порядок подключения JS-модулей */

// =require modules/slider.js
// =require modules/tabs.js
// =require modules/pagination.js
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


