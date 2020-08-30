function match(selector, element) {
    if (!selector || !element.attributes) {
        return false;
    }
    let selectLists = selector.split(" ").reverse();
    let selectList =selectLists[0].match(/(#|.)?[\w]+/g);
    if (selectList.length > 1) {
      for (let i = 0; i < selectList.length; i++) {
              if(!match(selectList[i],element)){
                  return false;
              }
          }
          return true;
    }
     if(selector.charAt(0) == "#"){
          var attr =  element.attributes['id'].name === 'id';
          if(attr && element.attributes['id'].value === selector.replace("#","")){
              return true;
          }
      }else if (selector.charAt(0) == ".") {
          var attr = element.attributes['class'].name === 'class'
          if (attr) {
              return element.attributes['class'].value.split(" ").some((value) => {
                  return value === selector.replace(".", '');
              });
          }
      }else{
          if(element.tagName === selector){
              return true;
          }
      }
      return false;
  }