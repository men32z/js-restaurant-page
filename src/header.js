import {populate, el} from './helper';
function header(cont){
  let items = [
    [ "div.container-fluid bg-dark text-white py-3",
      [
        [ "div.container",
          [
            [ "div.row",
              [
                [ "div.col-12 col-md-6 text-center text-md-left",
                  [
                    [ "h1.#title"]
                  ]
                ],
                [ "div.col-12 col-md-6 menu d-flex flex-column flex-md-row",
                  [
                    ["button.#home"],
                    ["button.#menu"],
                    ["button.#contact"]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ];
  populate(items, cont);
  document.querySelector('#title').innerHTML = "The Restaurant";
  document.querySelector('#home').innerHTML = "Home";
  document.querySelector('#menu').innerHTML = "Menu";
  document.querySelector('#contact').innerHTML = "Contact";
  let contentDiv = el('div');
  contentDiv.id = "tabContent"
  cont.appendChild(contentDiv);
}

export default header;