var squares = document.querySelectorAll(".square");
var colors = buildColorArray(); 
var winningColor = pickWinner();
var target = document.querySelector("#target");
var resetButton = document.querySelector("#resetButton");
var h1 = document.querySelector("h1");
var feedback = document.querySelector("#feedback");

target.textContent = winningColor;

resetButton.addEventListener("click", function()
{
    colors = buildColorArray();
    resetButton.textContent = "Reset";

    h1.style.backgroundColor = "steelblue";

    winningColor = pickWinner();

    target.textContent = winningColor;

    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    feedback.textContent = "";
});


for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function()
    {
        var pickedColor = this.style.backgroundColor;
        if(pickedColor === winningColor)     /* === mean this and only this is equal it has to be an exact match */
        {
            resetButton.textContent = "Play Again";
            changeColor(winningColor);
            h1.style.backgroundColor = winningColor;
            feedback.textContent = "CORRECT";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            feedback.textContent = "TRY AGAIN";
        }

    });
}

function changeColor(color)
{
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickWinner()
{
    var index = Math.floor(Math.random() * squares.length);
    return colors[index];
}

function buildColorArray()
{
    var arr = [];       /* instead of new the empty array saves space in memory*/

    for(var i = 0; i < squares.length; i++)
    {
        arr.push(generateColor());
    }
    return arr;
}


function generateColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";      /*need the space between the rgb or else it wont work*/
}
/* modularize seperates functions into methods */
