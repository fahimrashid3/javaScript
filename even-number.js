var shoppingCard = {
  books : 3,
  sunglass: 1,
  keyboard:5,
  mouse :1,
  pen :25,
  shoes:2

}

const keys=Object.keys(shoppingCard);
const value =Object.values(shoppingCard);

// console.log(keys);
// console.log(value);


for(var i=0; i<keys.length; i++){
  propertyName = keys[i];
  propertyValue =shoppingCard[propertyName];
  console.log(propertyName, propertyValue)

  
}
