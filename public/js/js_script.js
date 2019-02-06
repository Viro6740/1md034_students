function MenuItem(name, kCal, gluten, lactose, imgSrc) {
    this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imgSrc = imgSrc
    this.item = function() {
        return this.name + ": " + this.kCal + " Kcal"
    };
    this.getName = function() {
        return this.name
    };
    this.getInfo = function() {
  	    var info = this.kCal + " Kcal";
  	    if (this.gluten){
    	      info += " samt innehåller gluten";
            if(this.lactose){return info + " och laktos"}
        }
  	    if (this.lactose){
    	      return info + " samt innehåller laktos";
  	    }
        return info
    };
    this.getImgSrc = function() {
        return this.imgSrc
    }
}

var eburg = new MenuItem("Eld Burgare", 2000, true, true, "img/fireburger.png");
var kburg = new MenuItem("Kalkon Burgare", 1200, true, true, "img/turkeyburger.png");
var fburg = new MenuItem("Burgare med Flair", 2000, false, false, "img/candyburger.png");
var sburg = new MenuItem("Skink Burgare", 1500, true, true,"img/hamburger.png");
var gburg = new MenuItem("Glutenfri Burgare", 1200, false, true, "img/glutenburger.png");

var burgers = [eburg, kburg, fburg, sburg, gburg];

var burgerMenu = document.getElementById("burgerMenu");
var title = document.createElement("h3");
title.appendChild(document.createTextNode("Välj en Burgare"));
burgerMenu.appendChild(title);
burgerMenu.appendChild(document.createElement("p").appendChild(document.createTextNode("Här kan du se och välja vilken burgare du vill ha")));

var menuDiv = document.createElement("div")
menuDiv.style.display = "grid"
menuDiv.style.gridGap = '0px 50px 50px 50px'
menuDiv.style.gridTemplateColumns = '500px 500px 500px'
menuDiv.style.marginLeft = '10px'
menuDiv.style.marginRight = '10px'
menuDiv.style.marginTop = '10px'
menuDiv.style.marginBottom = '10px'
menuDiv.style.gridRowGap = '10px'

for (var burger in food) {
    
    var itemName = document.createTextNode(food[burger].name)
    itemName.textAlign = 'center'
    var itemList = document.createElement("div")
    var img = document.createElement("img")
    img.src = food[burger].img
    img.height = 300
    img.width = 400
    
    itemList.appendChild(document.createElement("p").appendChild(itemName))       
    var checkBox = document.createElement("INPUT");    
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("checkBoxes")
    checkBox.setAttribute("name", food[burger].name);
    itemList.appendChild(checkBox)
    itemList.appendChild(document.createElement("br"))
    itemList.appendChild(img)
    itemList.appendChild(document.createElement("br"))    
    var itemStr = food[burger].kCal + " kcal"
    if (food[burger].gluten){
    	  itemStr += " samt innehåller gluten"
        if(food[burger].lactose){
            itemStr += " och laktos"
        }
        }else{                         
  	        if(food[burger].lactose){
    	          itemStr += " samt innehåller laktos"
  	        }            
        }
    var itemInfo = document.createElement("p").appendChild(document.createTextNode(itemStr))
    
    itemInfo.textAlign = 'center'
    itemList.appendChild(itemInfo) 
    menuDiv.appendChild(itemList)
    
}

burgerMenu.appendChild(menuDiv)


/*
var button = document.getElementById("myButton");

button.onclick = function () {
    console.log("Button clicked!")
}

*/



function getContact (){
    var contactInfo = document.getElementsByClassName("contactInfo");
    var cArray = [];
    for(cInfo in contactInfo){
        if(contactInfo[cInfo].value != undefined)
        cArray.push(contactInfo[cInfo].value)
    }
    
    var gender = document.getElementsByName("gender")
    for(g in gender){
        if(gender[g].checked){
            cArray.push(gender[g].value)
        }
    }

    var checkBoxes = document.getElementsByClassName("checkBoxes")
    for(c in checkBoxes){
        if(checkBoxes[c].checked){
            cArray.push(checkBoxes[c].name)
        }
    }
    
    return cArray
}


console.log(getContact())
