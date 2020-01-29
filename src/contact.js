import {populate} from './helper';
function contact(cont){
  let items =
  [
    ["div.container-fluid#map"],
    ["div.container",[
      ["div.row", [
        ["div.col-12 col-md-6 py-3", [
          ["h3.py-3#c-title"],
          ["p.#c-info"]
        ]],
        ["div.col-12 col-md-6 py-3", [
          ["h3.py-3#m-title"],
          ["div.form-group#m-name", [
            ["label"],
            ["input.form-control"]
          ]],
          ["div.form-group#m-mail", [
            ["label"],
            ["input.form-control"]
          ]],
          ["div.form-group#m-body", [
            ["label"],
            ["textarea.form-control"]
          ]],
          ["div.form-group", [
            ["button.btn btn-success#m-submit"]
          ]]
        ]]
      ]]
    ]]
  ];

  populate(items, cont);
  document.querySelector('#map').innerHTML = "<iframe src=\"https://www.google.com/maps/"+
  "embed?pb=!1m18!1m12!1m3!1d42565.52221426508!2d-99.15638039337222!3d19.4427932393244!2m3"+
  "!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d2e0e4dbd%3A0x905574a740c4893d!"+
  "2sCentro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Ciudad%2"+
  "0de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1580260716621!5m2!1ses-419!2smx\" "+
  " frameborder=\"0\" style=\"border:0; width:100%; height:400px;\" allowfullscreen=\"\"></iframe>";

  document.querySelector('#c-title').innerHTML = "Info";
  document.querySelector('#c-info').innerHTML = "<b>#tel: </b> +52 651-351-5531<br>"+
  "<b>@mail: </b> tacos@mexico.com<br> <b>*address: </b> #25 mexico road, mexico city, mexico<br>";

  document.querySelector('#m-title').innerHTML = "Contact";
  document.querySelector('#m-name label').innerHTML = "Name:";
  document.querySelector('#m-mail label').innerHTML = "Mail:";
  document.querySelector('#m-body label').innerHTML = "Description:";
  document.querySelector('#m-submit').innerHTML = "Send";
  document.querySelector('#m-submit').addEventListener('click', function(){alert("Message sended");});
}

export default contact;