
  export const el = (element) => document.createElement(element);
  export const elObj = (tag, clas = null, id = null) => ({tag, clas, id});



  export const  populate = (items, parent) => {
    for(let i in items){
      let obj = elObj(...items[i][0].split(/\.|\#/));
      let element = el(obj.tag);

      if(obj.clas) element.classList.add(...obj.clas.split(" ").filter(x=>x));
      if(obj.id) element.id = obj.id;
      if (items[i][1]) {
        element = populate(items[i][1], element);
      }
      if(element) parent.appendChild(element);
    }
    return parent;
  }
