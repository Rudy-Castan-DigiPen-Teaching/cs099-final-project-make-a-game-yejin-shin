// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021
var start_top = 400
var start_left = 140

var how2play_top = 400
var how2play_left = 140

var start_width = 500
var start_height = 80

var how2play_width = 500
var how2play_height = 80

var start_button_MouseIsOver = false
var how2play_button_MouseIsOver = false

var button_MouseWasPressed = false

function preload()
{
    mouse_cursor = loadImage('Images/mouse cursor.png')
    Magnifying_Glass = loadImage('Images/Magnifying Glass cursor.png')
    shelving = loadImage('Images/shelving left side.png')
}

let Current_Screen = main_menu; 

function setup()
{

    createCanvas( 800, 600 );

}




function draw()
{
    background( '#f3edd3' );

    

    const h_left = how2play_left;
    const h_right = how2play_left + how2play_width;
    const h_top = how2play_top;
    const h_bottom = how2play_top + how2play_height;

    const s_left = start_left;
    const s_right = start_left + how2play_width;
    const s_top = start_top;
    const s_bottom = start_top + how2play_height;

    const within_hx = mouseX > h_left && mouseX < h_right;
    const within_hy = mouseY > h_top && mouseY < h_bottom;
    const within_sx = mouseX > s_left && mouseX < s_right;
    const within_sy = mouseY > s_top && mouseY < s_bottom;

    how2play_button_MouseIsOver = within_hx && within_hy
    start_button_MouseIsOver = within_sx && within_sy

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

    let fill_color = 255
    let start_offset = 0;
    let how2play_offset = 0;
    

    if(how2play_button_MouseIsOver)
    {
        how2play_width = 510
        how2play_height = 82

        how2play_offset = 3
    }

        else{
            how2play_width = 500
            how2play_height = 80
        }

    if(start_button_MouseIsOver)
    {
        start_width = 510
        start_height = 82
    
        start_offset = 3
    }
    
        else{
            start_width = 500
            start_height = 80
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
    fill(fill_color)
    rectMode(CENTER)
    rect(start_top, 300, start_width, start_height)
    strokeWeight(0)
    fill('black')
    textSize(55)
    text('Start', width/2 - 50, height/2 + 15)

    strokeWeight(5)
    stroke('black')
    fill(fill_color)
    rect(how2play_top, 300 + 150, how2play_width, how2play_height)
    strokeWeight(0)
    fill('black')
    textSize(55)
    text('How To Play', width/2 - 150, height/2 + 165 + how2play_offset)
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
                    background('#BBBBBB')
                    noStroke();
                    fill('#8E7F7F')
                    quad(0, 0, width, 0, 660, 141, 136, 141)
                    fill('#BBBBBB')
                    rect(398, 380, 522, 300)
                    fill('#E2D5D5')
                    quad(137, 398, 659, 400, width, 600, 0, 600)
                    strokeWeight(3)
                    stroke('black')
                    line(136, 141, 137, 398)
                    line(660, 141, 659, 400)

                    line(136, 141, 660, 141)
                    line(137,398, 659, 400)

                    line(136, 141, 0, 0)
                    line(660, 141, width, 0)

                    line(659, 400, width, height)
                    line(137, 398, 0, height)

                    image(shelving, 450, 200, 400, 400)

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
                    text('4. Click the item to see the detailed description of the item.',width/2 - 330, height/2 + 20 )
                    text('5. ',width/2 - 330, height/2 + 70)
                    
                }
    }
    

    
    image(mouse_cursor, mouseX , mouseY , 50, 50)
    //image(Magnifying_Glass, mouseX , mouseY , 50, 50)
}


function mousePressed()
{
    console.log(mouseX, mouseY);
}
