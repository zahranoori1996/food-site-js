let listFoods = [
    {id:1, image : "./images/plate-1-300.png", nameFood: "Dietary pasta", description: "Suitable for barbies", price: 11, count: 1},
    {id:2, image : "./images/steak-2-300.png", nameFood: "Lamb Steak", description: "Popular food", price: 49, count: 1},
    {id:3, image : "./images/phtochini-300.png", nameFood: "Spicy Fettuccini", description: "A delicious Italian dish", price: 23, count: 1},
    {id:4, image : "./images/spaghetti-300.png", nameFood: "Spaghetti", description: "Light and low calorie food", price: 19, count: 1},
    {id:5, image : "./images/noodel-300.png", nameFood: "Noodel Italy", description: "Noodel is very good", price: 13, count: 1},
    {id:6, image : "./images/Tomato-300.png", nameFood: "Mixed Food", description: "Eggplant and tomato", price: 21, count: 1},
    {id:7, image : "./images/salad-300.png", nameFood: "Salad food", description: "Low fat salad", price: 17, count: 1},
    {id:8, image : "./images/pasta-dumplings-300.png", nameFood: "pasta dumplings", description: "Meatballs and parmesan sauce", price: 37, count: 1},
    {id:9, image : "./images/Alfredo-pasta-300.png", nameFood: "Alfredo pasta", description: "Pasta for restaurants", price: 31, count: 1},
    {id:10, image : "./images/pasta-coort-300.png", nameFood: "carrot Pasta", description: "Pureed carrot flavor", price: 28, count: 1}
    ]

const foodPartyDivElm = $.getElementById("food-party");
const tbody = $.querySelector("tbody");
let showShoppingCart = $.getElementById("cart");
const allREmoveShoppingCart = $.getElementById("all-remove-shopping-cart");
let countBasketCart = $.getElementById("basket");
let userBasket = [];
let totalPriceContainer = $.getElementById("total-price");
let sumPrices = $.getElementById("sum-result");
let showCountShoppingCart = $.createElement("small");


// create card food dynamic with array list *_*

let foodsFragment = $.createDocumentFragment();

listFoods.forEach((food)=>{
    // console.log(food);
    let cardContainer = $.createElement("div");
    cardContainer.classList.add("card");

    
    let imageIconContainer = $.createElement("div");
    imageIconContainer.classList.add("image-food-card");
    cardContainer.appendChild(imageIconContainer);


    let iconBuy = $.createElement("img");
    iconBuy.setAttribute("src", "./images/icons8-shopping-cart-24.png");
    iconBuy.classList.add("icon-buy");
    iconBuy.setAttribute("id",food.id);
    iconBuy.addEventListener("click", function(){
        createUserBacketList(food.id);
        
       
    })

    

    let imageFood = $.createElement("img");
    imageFood.setAttribute("src", food.image);
    imageFood.classList.add("image-product");
    imageIconContainer.append(iconBuy,imageFood);

    let detailsFoodContainer = $.createElement("div");
    detailsFoodContainer.classList.add("detealis-food-card");

    let titleFood = $.createElement("h4");
    titleFood.innerHTML = food.nameFood;

    let descriptionFood = $.createElement("p");
    descriptionFood.innerHTML = food.description;

    let brTag = $.createElement("br");

    let priceFood = $.createElement("span");
    priceFood.innerHTML = `$${food.price}.00`;

    detailsFoodContainer.append(titleFood,descriptionFood,brTag,priceFood);

    cardContainer.append(imageIconContainer,detailsFoodContainer);
    foodsFragment.appendChild(cardContainer)

});

foodPartyDivElm.appendChild(foodsFragment);


function createUserBacketList(idFood){
  
   let findFood = listFoods.find((food)=>{
    
    return food.id === idFood
   })
//    console.log(findFood)
   let isFoodBasket = userBasket.some((food)=>{
    return food.id === idFood;
   });
   if(!isFoodBasket){
       
       userBasket.push(findFood);
   }
//    console.log(isFoodBasket)
   
   createShoppingCart(userBasket);
clactotalPrice(userBasket)

}

function createShoppingCart(arrayBascket){
    showShoppingCart.style.display = "flex";
   
    tbody.innerHTML = "";
    sumPrices.innerHTML = "";
    arrayBascket.forEach((food) => {
 

      let trNew = $.createElement("tr");

      let tdONe = $.createElement("td");

      let imageShoppingBascket = $.createElement("img");
      imageShoppingBascket.setAttribute("src", food.image);
      imageShoppingBascket.style.width = "50px"

      let titleShoppingBascket = $.createElement("span");
      titleShoppingBascket.innerHTML = food.nameFood;
      tdONe.append(imageShoppingBascket,titleShoppingBascket);

      let tdTwo = $.createElement("td");
      tdTwo.innerHTML = `$${food.price}.00`;
      
      
 
      
      let tdThree = $.createElement("td");
      tdThree.style.cssText = "display: flex; justify-content: center; gap: 8px;";

      let countFood = $.createElement("input");
      countFood.value = food.count;
      countFood.setAttribute("type","number");
      countFood.setAttribute("min", 1);
      countFood.addEventListener('change', function(){
        updateCount(food.id, countFood.value);
      })

      let btnDeleteFood = $.createElement("button");
      btnDeleteFood.innerHTML = "remove";
      btnDeleteFood.addEventListener("click", function(){
        deleteFoodItem(food.id)
      })


      tdThree.append(countFood,btnDeleteFood)

      trNew.append(tdONe,tdTwo,tdThree);
      tbody.append(trNew);
     
    })

    updateBasketHeader(userBasket)

}


allREmoveShoppingCart.addEventListener("click", function(){
    userBasket = [];
    createShoppingCart(userBasket);
    updateBasketHeader(userBasket)
   console.log(userBasket.length);
    
    showShoppingCart.style.display = "none";

});

function deleteFoodItem(item){
    console.log(userBasket);
    
    console.log(item);
   userBasket = userBasket.filter((food)=>{
    return food.id !== item;
    });
    createShoppingCart(userBasket);
    updateBasketHeader(userBasket);
    if(userBasket.length == 0){
        showShoppingCart.style.display = "none";
    }
    clactotalPrice(userBasket)
 
}

function updateBasketHeader(customerShoppingList){
    if(customerShoppingList.length > 0){
        showCountShoppingCart.style.cssText = `position: relative;
        background: rgb(255, 36, 0);
        color: #fff;
        padding: 5px 10px;
        border-radius: 60px;
        text-align: center;
        right: 15px;
        bottom: 25px;`
        showCountShoppingCart.innerHTML = userBasket.length;
        countBasketCart.append(showCountShoppingCart);

    }else if(customerShoppingList.length == 0){
        showCountShoppingCart.style.display = "none";
        console.log(customerShoppingList.length);

    }
}
function clactotalPrice(userBasketArray){
    let sum = 0;
    userBasketArray.forEach((food)=>{
        sum += food.count * food.price;
    })
    sumPrices.innerHTML = ` Total : $${sum}.00`;
}
function updateCount(foodId, newCount){
    // console.log(foodId, newCount);
    userBasket.forEach(function(food){
        if(food.id === foodId){
            food.count = newCount
        }
    })
    clactotalPrice(userBasket)
}

console.log("%c CapsCode!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
