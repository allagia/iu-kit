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
