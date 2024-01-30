

drawBoard(16);
draw();
function drawBoard(numSquares){
    let divContainer = document.querySelector('#container')
    divContainer.innerHTML = '';

    for (let i = 0; i < numSquares; i++){
        let divRow = document.createElement('div');
        divRow.className = 'gridRow';

        for (let j = 0; j < numSquares; j++){
            let divCol = document.createElement('div');
            divCol.className = 'gridCol';
            divRow.appendChild(divCol);
        }
        divContainer.appendChild(divRow);

    }
    
}

function draw() {
    const testing = document.querySelectorAll('div.gridCol')
    testing.forEach ((element) => {
        element.addEventListener('mouseover',() => {
            element.style.backgroundColor = randomColor()
        })
    }) 
    
}

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let newBoard = prompt('How many squares would you like? ');

    if (newBoard > 100){
        newBoard = prompt("That's too many! Please enter a number less than 100")
    }
    
    drawBoard(newBoard);
    draw();

})

const randomColor = function(){
    const o = Math.round, r = Math.random, s = 225;
    return 'rgba(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ', ' + r().toFixed(1) + ')';
}
console.log(randomColor())

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = randomColor();
})