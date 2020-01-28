import {populate} from './helper';
function home(){
  let items =
  [
    [ "div.container-fluid bg-dark text-white py-3",
      [
        [ "div.container",
          [
            [ "div.row",
              [
                [ "div.col-sm-12",
                  [
                    [ "h1.#title"]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ],
    ["div.container-fluid", [
      [
        "div.row",
        [
            [ "div.col-12 col-md-6  py-3 my-3#texts",
              [
                ["h2"],
                ["h3"],
                ["p"]
              ]
            ],
            [ "div.col-12 col-md-6 pr-md-0 mr-md-0",
              [
                ["img.img-fluid#imgp"]
              ]
            ]
          ]
        ]
      ]
    ]
  ];

  let bigText = "A <b>taco</b> (US: /ˈtɑːkoʊ/, UK: /ˈtækoʊ/, Spanish: [ˈtako]) is a traditional Mexican dish " +
  "consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is" +
  " then folded around the filling and eaten by hand. A taco can be made with a variety of fillings,"+
  " including beef, pork, chicken, seafood, vegetables, and cheese, allowing great versatility and "+
  " variety. They are often garnished with various condiments, such as salsa, guacamole, or sour "+
  " cream, and vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form "+
  " of antojitos, or Mexican street food, which have spread around the world.";


  let cont = document.querySelector('#content');

  populate(items, cont);

  document.querySelector('#title').innerHTML = "The Restaurant";
  document.querySelector('#texts h2').innerHTML = "This is the best restaurant ever!";
  document.querySelector('#texts h3').innerHTML = "we serve the best tacos!";
  document.querySelector('#texts p').innerHTML = bigText;
  document.querySelector('#imgp').src = "tacos.png";
}

export default home;