// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

function preload()
{

}

function setup()
{

    createCanvas( 800, 600 );

}




function draw()
{
    background( '#f3edd3' );

    for (let x = 20; x <= width; x += 250)
    {
        noStroke();
        fill('#dc5c21')
        rect(x - 50, height/25, 200, 40)
        fill('#c25726')
        rect(x - 10, height/1.5, 200, 40)
        fill('#dc5c21')
        rect(x - 40, height/2, 200, 40)
        fill('#c25726')
        rect(x - 50, height/3, 200, 40)
        fill('#c25726')
        rect(x, height/5.5, 200, 40)
        fill('#dc5c21')
        rect(x, height/1.2, 200, 40)
        fill('#c25726')
        rect(x -50, height/1.04, 200, 40)
        
    }

    fill(255, 255, 255, 95);
    rectMode(CENTER);
    rect(width/2, height/2, 800, 600);

    strokeWeight(5)
    stroke('black')
    fill('white')
    textSize(100)
    text('Escape Game', width/2 - 300, height/2 - 150)

    strokeWeight(5)
    stroke('black')
    fill('white')
    rectMode(CENTER)
    rect(width/2, height/2, 500, 80)
    strokeWeight(0)
    fill('black')
    textSize(55)
    text('Start', width/2 - 50, height/2 + 15)
    strokeWeight(5)
    stroke('black')
    fill('white')
    rect(width/2, height/2 + 150, 500, 80)
    strokeWeight(0)
    fill('black')
    textSize(55)
    text('How To Play', width/2 - 150, height/2 + 165)
    strokeWeight(5)

}
