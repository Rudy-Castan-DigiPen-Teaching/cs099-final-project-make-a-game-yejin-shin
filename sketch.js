// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021
var start_top = 250
var start_left = 140

var how2play_top = 400
var how2play_left = 140

var main_top = 511
var main_left = 573

var start_width = 500
var start_height = 80

var how2play_width = 500
var how2play_height = 80

var main_width = 165
var main_height = 53

var start_button_MouseIsOver = false
var how2play_button_MouseIsOver = false
var frame1_MouseIsOver = false

var button_MouseWasPressed = false

function preload()
{
    mouse_cursor = loadImage('Images/mouse cursor.png')
    Magnifying_Glass = loadImage('Images/Magnifying Glass cursor.png')
    frame1 = loadImage('Images/piano paint.jpg')
    shelving1 = loadImage('Images/shelving 1.png')
    key = loadImage('Images/KEY.png')
    bed = loadImage('Images/bed.png')
    lug = loadImage('Images/lug.png')
    detail_shelving1 = loadImage('Images/room1_Shelving.jpg')
}

let Current_Screen = main_menu; 

function setup()
{

    createCanvas( 800, 600 );


}




function draw()
{
    background( '#f3edd3' );

    

    //button effect setting

    const h_left = how2play_left;
    const h_right = how2play_left + how2play_width;
    const h_top = how2play_top;
    const h_bottom = how2play_top + how2play_height;

    const s_left = start_left;
    const s_right = start_left + start_width;
    const s_top = start_top;
    const s_bottom = start_top + start_height;

    const m_left = main_left;
    const m_right = main_left + main_width;
    const m_top = main_top;
    const m_bottom = main_top + main_height;

    const within_hx = mouseX > h_left && mouseX < h_right;
    const within_hy = mouseY > h_top && mouseY < h_bottom;

    const within_sx = mouseX > s_left && mouseX < s_right;
    const within_sy = mouseY > s_top && mouseY < s_bottom;

    const within_mx = mouseX > m_left && mouseX < m_right;
    const within_my = mouseY > m_top && mouseY < m_bottom;


    how2play_button_MouseIsOver = within_hx && within_hy
    start_button_MouseIsOver = within_sx && within_sy
    main_button_MouseIsOver = within_mx && within_my

    //frame 1 effect setting
    const f1_left = 368;
    const f1_right = 368 + 80;
    const f1_top = 180;
    const f1_bottom = 180 + 80;

    const within_f1x = mouseX > f1_left && mouseX < f1_right;
    const within_f1y = mouseY > f1_top && mouseY < f1_bottom;

    frame1_MouseIsOver = within_f1x && within_f1y

    //shelving 1 effect setting
    const s1_left = 142;
    const s1_right = 142 + 200;
    const s1_top = 150;
    const s1_bottom = 150 + 290;

    const within_s1x = mouseX > s1_left && mouseX < s1_right;
    const within_s1y = mouseY > s1_top && mouseY < s1_bottom;

    shelving1_MouseIsOver = within_s1x && within_s1y

    //bed effect setting
    const b_left = 488;
    const b_right = 410 + 250;
    const b_top = 190;
    const b_bottom = 190 + 300;

    const within_bx = mouseX > b_left && mouseX < b_right;
    const within_by = mouseY > b_top && mouseY < b_bottom;

    bed_MouseIsOver = within_bx && within_by

    //lug effect setting
    const l_left = 200;
    const l_right = 200 + 200;
    const l_top = 400;
    const l_bottom = 400 + 100;

    const within_lx = mouseX > l_left && mouseX < l_right;
    const within_ly = mouseY > l_top && mouseY < l_bottom;

    lug_MouseIsOver = within_lx && within_ly

    
    //screen change

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

    //button effect

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
    rect(400, 300, start_width , start_height)
    strokeWeight(2)
    fill('black')
    textSize(55)
    text('Start', width/2 - 50, height/2 + 15 + start_offset)

    strokeWeight(5)
    stroke('black')
    fill(fill_color)
    rect(400, 300 + 150, how2play_width, how2play_height)
    strokeWeight(2)
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
        
        image(mouse_cursor, mouseX , mouseY , 50, 50)

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

                    

                    image(lug, 200, 400, 400, 100)

                    noStroke();
                    fill('#1f691c');
                    circle(142, 411, 20);
                    circle(132, 417, 10);
                    image(shelving1, 142 , 150, 200, 290);

                    image(frame1, 368, 180, 80, 80)
                    
                    image(key, 155, 218, 60, 40)
                    
                    image(bed, 410, 195, 300, 300)

                    
                    fill('black')
                    rect(width/2, height, 800, 200)
                    
                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                    
                
                if(shelving1_MouseIsOver)
                    {
                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        fill('white')
                        textSize(30)
                        text('The cabinet with the key in the first compartment. ', 50, 540)
                        text('There is something off in the back.', 50, 580)
                    }

                    if(mouseIsPressed)
                    {
                        if(within_s1x && within_s1y)
                        {
                            Current_Screen = room1_Shelving
                        }

                    }

                    if(frame1_MouseIsOver)
                    {
                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)

                        fill('white')
                        textSize(30)
                        text('A picture with a piano on it.', 50, 560)
                    }   

                   
                    if(bed_MouseIsOver)
                    {
                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        fill('white')
                        textSize(25)
                        text('The bed. There is nothing special.', 50, 560)
                    }  
                    
                    if(lug_MouseIsOver)
                    {
                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        fill('white')
                        textSize(25)
                        text('The lug. I think there is something underneath.', 50, 560)
                    }





                    
                    

                    
                    


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
                    text('3. You can see the description of the item ',width/2 - 330, height/2 - 30)
                    text('by placing the cursor on it.',width/2 - 300, height/2 + 20 )
                    text('4. You can do some interact with the item by click.',width/2 - 330, height/2 + 70)
                    text('5. Items described as "There is nothing special"',width/2 - 330, height/2 + 70 + 50)
                    text('cannot interact with any action, including clicking.',width/2 - 300, height/2 + 70 + 50 + 50)

                    //main menu button
                    
                    let main_menu_offset = 0;

                    if(main_button_MouseIsOver)
                    {
                        main_width = 168
                        main_height = 55

                        main_menu_offset = 2
                    }

                    else
                    {
                        main_width = 165
                        main_height = 53
                    }

                    if(mouseIsPressed)
                    {
                     const mouse_mX = mouseX >= main_left && mouseX < main_left + main_width
                     const mouse_my = mouseY >= main_top && mouseY < main_top + main_height

                         if(mouse_mX && mouse_my)
                        {
                            Current_Screen = main_menu
                        }
                    }

                    stroke('black')
                    strokeWeight(5)
                    fill('white')
                    rect(660, 540, main_width, main_height)
                    fill('black')
                    strokeWeight(2)
                    text('Main Menu', 600, 550 + main_menu_offset)

                    

                    

                    

                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                    
                }
                break;
                case credit :
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
                    }

    break;
    case room1_Shelving :
        {
            background('#BBBBBB')
            image(detail_shelving1, 0, 0, 645, 647)

            strokeWeight(8.5)
            stroke('black')
            line(196, 127, 800, 127)

            noStroke();
            fill('#8E7F7F')
            rect(642, 0, 350, 245)
        }
    

    
    }
}

function mousePressed()
{
    console.log(mouseX, mouseY);

}
