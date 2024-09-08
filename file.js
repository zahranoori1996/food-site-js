// select elements 
let $ = document;
let lightModeBtn = $.getElementById("light-btn");
let darkModeBtn = $.getElementById("dark-btn");
let imgLight = $.querySelector(".light");
let imgDark = $.querySelector(".dark");
let links = $.querySelectorAll("a");
let h1Elem = $.querySelector(".text-information");
let spanElem = $.querySelectorAll("span");
let pElem = $.querySelectorAll("p");
let h3Elem = $.querySelectorAll("h3");
let boxMenu = $.querySelector(".food-list-menu-2");
let boxMenu2 = $.querySelectorAll(".food-list-menu-1");
let footer = $.getElementById("footer-website");
let flagDrakLightMode = true;
let loader = $.getElementById("loader");
let contanier = $.getElementsByClassName("contanier")[0];
let imageShoppingBascket = $.getElementById("image-shop")
let bookTable = $.getElementById("book-table")
let customScroll = $.getElementById("scroll");

// perload 
window.addEventListener("load",function(){
    loader.style.display = "none";
    loader.style.transition = "all 1s ease-in-out";
    contanier.style.display = "block"
})
// event set dark mode
function darkModeHandler(){
        flagDrakLightMode = false;
        // console.log(flagDrakLightMode);
        // console.log("dark");
        $.body.style.background = "#000";
        $.body.style.transition = "all 100ms ease-in-out";
        imgLight.style.opacity = ".3";
        imgLight.style.transition = "all 100ms ease-in-out";
        imgDark.style.transition = "all 150ms ease-in-out";
        imgDark.style.opacity = "1";
        h1Elem.style.color = "#ff2400";
        footer.style.background = "rgb(40, 38, 45)";
        imageShoppingBascket.setAttribute("src","./images/icons8-shopping-bag-50.png");
        imageShoppingBascket.style.width = "26px" ;
        boxMenu.style.border = "3px solid #fff";
        links.forEach(function(link){
            link.style.color = "#fff";
            
        });
        spanElem.forEach(function(span){
            span.style.color = "rgb(140, 140, 140)";
          
        });
        pElem.forEach(function(p){
            p.style.color = "#fff";
           
        });
        h3Elem.forEach(function(h3){
            h3.style.color = "#fff";
        
        });
        boxMenu2.forEach(function(box){
            box.style.border = "3px solid #fff";
        });
        bookTable.style.color= "#ff2400"
        isDark()
    
}



// event set light mode
function lightModeHanddler(){
        flagDrakLightMode = true;
        // console.log(flagDrakLightMode);
        // console.log("light");
        $.body.style.background = "#fff";
        $.body.style.transition = "all 100ms ease-in-out";
        imgLight.style.opacity = "1";
        imgLight.style.transition = "all 100ms ease-in-out";
        imgDark.style.transition = "all 150ms ease-in-out";
        imgDark.style.opacity = ".3";
        h1Elem.style.color = "rgb(23, 22, 26)";
        footer.style.background = "#faebd7"
        imageShoppingBascket.setAttribute("src","./images/icons8-shopping-bag-32.png");
        imageShoppingBascket.style.width = "32px" ;
        boxMenu.style.border = "3px solid #000";
        links.forEach(function(link){
            link.style.color = "rgb(23, 22, 26)";
            
        });
        spanElem.forEach(function(span){
            span.style.color = "rgb(23, 22, 26)";
           
           
        });
        pElem.forEach(function(p){
            p.style.color = "rgb(23, 22, 26)";
            
        });
        h3Elem.forEach(function(h3){
            h3.style.color = "rgb(23, 22, 26)";
           
        });
        boxMenu2.forEach(function(box){
            box.style.border = "3px solid #000";
            
        });
        bookTable.style.color= "#000";
        isDark()
}


function isDark(){
    if(flagDrakLightMode){
        return localStorage.setItem("theme", "light");
    }else{
        return localStorage.setItem("theme", "dark");
    }

}
window.onload = function(){
    let localStorageTheme = localStorage.getItem("theme");
    // console.log(localStorageTheme);
    if(localStorageTheme === "dark"){
        darkModeHandler()
    
    }else{
      lightModeHanddler()  
    }
}
imgDark.addEventListener("click",darkModeHandler);
imgLight.addEventListener("click",lightModeHanddler);

window.addEventListener("scroll", function(){
    console.log("object");
    // scroll kojast
    let scrollTop = window.scrollY;
    // height page website
    let documentHeight = $.body.clientHeight;
    // height dispaly
    let windowHeight = window.innerHeight;
    // calac scroll
    let scrollPercent = scrollTop / (documentHeight - windowHeight);
    // convert %
    let scrollPercentRonder = Math.round(scrollPercent * 100);

    customScroll.style.width = `${scrollPercentRonder}%`

    console.log(scrollPercentRonder);

})

