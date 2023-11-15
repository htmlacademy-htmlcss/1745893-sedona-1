'use strict';

function fillParent(selector, childOrder, quant) {
  let node = document.querySelector(selector);

for (let i = 1; i <= quant; i++) {
  let clone = node.children[childOrder].cloneNode(true);
  node.appendChild(clone);
}
}
