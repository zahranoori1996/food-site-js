
let labelsFood = [];
let countLikerFood = [];
let btnChange = document.getElementById('btn-change');
// console.log(btnChange);
async function fetchData() {
    const response = await fetch('https://favorite-foods-dfb7b-default-rtdb.firebaseio.com/foods.json')
    const data = await response.json();
    return data;
    
}
fetchData().then(res => {
    let foodData = Object.entries(res);
    foodData.forEach(food => {
        labelsFood.push(food[1].nameFood);
        countLikerFood.push(food[1].countLiker);
        // console.log(labelsFood);
        
    });
})
.catch(err => console.log("Error : ",err))


let chartData = {
    labels: labelsFood,
    datasets: [{
        data: countLikerFood,
        label: 'value',
        backgroundColor: "#ff2400",
        borderColor: "#000",
        borderWidth: 1
    }]

}
// console.log(labelsFood);
// console.log(countLikerFood);
// console.log(chartData);

// create chart function

const ctx = document.getElementById('canvas-chart').getContext('2d');

async function createChart (data , type = "bar" ) { 

     return await new Chart(ctx,{
        type: type,
        data: data,
        Option: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onclick: (event, activeElement)=>{
                if(activeElement.length > 0){
                    const {datasetIndex,index} = activeElement[0];
                    removeData(datasetIndex,index);

                }
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
        
            
        }
    })
 }

 createChart(chartData)

//  change type chart

// console.log(btnChange);
// btnChange.addEventListener('click', ()=>{
//     const selectedType = document.getElementById('chart-type').value;
//     createChart(chartData).destroy(); //destroy the old chart 
//     createChart(chartData,selectedType)
// })

// change type chart
// function updateChartType(){
//     const selectedType = document.getElementById('chart-type').value;
//     createChart(chartData).destroy(); //destroy the old chart 
//     createChart(chartData,selectedType);
// }
