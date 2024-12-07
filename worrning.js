const module = $.getElementById('module');
const closeModule = $.querySelector('#module div');


window.addEventListener('load', ()=>{
    setTimeout(()=>{
        module.style.display = "flex";
       
    },1000)
})
setTimeout(()=>{
    closeModule.addEventListener('click', ()=>{
        module.style.display = "none";

    })

},1100)