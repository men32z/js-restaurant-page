import {populate, el} from './helper';
function menu(cont){
  let items =
  [
    ["div.container-fluid", [
      [
        "div.row",
        [
            [ "div.col-12 col-md-6  py-3 my-3#tacos",[
              ['h1'], ['p'], ['div.col-12 row']
            ]],
            [ "div.col-12 col-md-6  py-3 my-3#quesadillas",[
              ['h1'], ['p'], ['div.col-12 row']
            ]],
            [ "div.col-12 col-md-6  py-3 my-3#burguers", [
              ['h1'], ['p'], ['div.col-12 row']
            ]]
          ]
        ]
      ]
    ]
  ];

  function makeList(items){
    let ul = el('ul');
    ul.classList.add('list-group');
    for (let i = 0; i < items.length; i++) {
      let badge = el('span')
      badge.classList.add('badge');
      badge.innerHTML = '$' + (Math.random() * (4-1)).toFixed(1);
      let li = el('li');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      li.innerHTML = items[i];
      li.appendChild(badge);
      ul.appendChild(li);
    }
    return ul;
  }

  populate(items, cont);
  let tacos = ['carnitas', 'chicken', 'barbacoa', 'chicharron', 'chorizo', 'avocado'];
  let quesadillas = ['mushroom', 'tomatoe', 'avocado', 'chicharron'];
  let burguers = ['doble', 'cheeseburguer', 'triple', 'bacon', 'western'];

  document.querySelector('#tacos h1').innerHTML = 'Tacos';
  document.querySelector('#tacos p').innerHTML = 'the speciallity of the house,open tortilla with some meat inside, '+
  ' coriander and onion, and some sauces';
  document.querySelector('#tacos div').appendChild(makeList(tacos));

  document.querySelector('#quesadillas h1').innerHTML = 'Quesadillas';
  document.querySelector('#quesadillas p').innerHTML = 'Same as tacos but with melted cheese, and the tortilla closed!!'
  document.querySelector('#quesadillas div').appendChild(makeList(tacos));

  document.querySelector('#burguers h1').innerHTML = 'Burguers';
  document.querySelector('#burguers p').innerHTML = 'I mean, why not xD'
  document.querySelector('#burguers div').appendChild(makeList(burguers));

}

export default menu;