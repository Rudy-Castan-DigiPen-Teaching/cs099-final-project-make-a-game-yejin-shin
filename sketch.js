// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

function preload()
{

}

let Current_Screen = main_menu; 

function setup()
{

    createCanvas( 800, 600 );

}




function draw()
{
    background( '#f3edd3' );

    switch (Current_Screen)
    {
        case main_menu:
            {
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

        if(mouseIsPressed)
        {
            const mouse_X = mouseX >= width/2 - 250 && mouseX < width/2 + 250
            const mouse_y = mouseY >= height/2 + 150 - 40 && mouseY < height/2 + 150 + 40

            if(mouse_X && mouse_y)
            {
                Current_Screen = How_to_play
            }
        }

        if(mouseIsPressed)
        {
            const mouse_x = mouseX >= width/2 - 250 && mouseX < width/2 + 250
            const mouse_y = mouseY >= height/2 - 40 && mouseY < height/2 + 40

            if(mouse_x && mouse_y)
            {
                Current_Screen = room1_middle
            }
        }

            }

            break;
            case room1_middle:
                {
                    background('#bab8b8')



                }
            break;
            case How_to_play:
                {
                    background('#f3edd3')
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

                    fill(255, 255, 255);
                    rect(width/2, height/2 + 50, 700, 450);

                    strokeWeight(5)
                    stroke('black')
                    fill('white')
                    textSize(100)
                    text('How to play', width/2 - 270, height/2 - 210)

                    strokeWeight(0);
                    fill('black')
                    textSize(30)
                    text('1. This game only playing by mousePressed',width/2 - 330, height/2 - 130)
                    textSize(24)
                    text('2. You have to solve the problem to escape the room',width/2 - 330, height/2 - 80)
                    text('3. Click the item to see the detailed description of the item.',width/2 - 330, height/2 - 30)
                    text('5. Click the item to see the detailed description of the item.',width/2 - 330, height/2 + 20 )
                    text('6. ',width/2 - 330, height/2 + 70)
                    
                }
    }
    

    

}
