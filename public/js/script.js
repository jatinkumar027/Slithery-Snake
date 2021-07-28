let inputDirection = {x: 0, y:0};
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArray = [
    {x: 5, y: 8}
];

let food = {x: 13, y:8};

const GameGrid = document.getElementsByClassName('GameGrid')[0];

// Main function

let main = currentTime => {
    window.requestAnimationFrame(main);
    if((currentTime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = currentTime;
    gameEngine();
}

window.requestAnimationFrame(main);

// Game Engine having all the controls is

let gameEngine = () => {

    // Display the Snake on the board
    GameGrid.innerHTML = "";
    snakeArray.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        // snakeElement.style.gridColumnEnd = 8;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        GameGrid.appendChild(snakeElement);
    });

    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    GameGrid.appendChild(foodElement);

    // Moving the snake

    for(let i = snakeArray.length - 2; i >=0; i--){
        snakeArray[i+1] = {...snakeArray[i]};
    }

    snakeArray[0].x += inputDirection.x;
    snakeArray[0].y += inputDirection.y;    
    
}

document.addEventListener('keydown',(e)=>{
    inputDirection = {x: 0, y: 1} // Start the game
    switch(e.key){
        case "ArrowUp":
            inputDirection.x = 0;
            inputDirection.y = -1;
            if(inputDirection.y > snakeArray[0].x){
                snakeArray[0].x = 0
            }
            break;
        case "ArrowDown":
            inputDirection.x = 0;
            inputDirection.y = 1;
            break;    
        case "ArrowRight":
            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
        case "ArrowLeft":
            inputDirection.x = -1;
            inputDirection.y = 0;
            break;   
        default:
            console.log(inputDirection.x, inputDirection.y);
            break;               
    }

});