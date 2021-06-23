// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

let Y = 0;

//button class
let room1_key_section_button
let room1_something_section_button
let room1_investigate_the_frame_button
let back_to_the_room1_button
let back_to_the_room1_button2
let back_to_the_room1_button3
let open_the_b_door

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
var elevator_MouseIsOver = false

var button_MouseWasPressed = false

function preload()
{
    //cursor
    mouse_cursor = loadImage('Images/Room1/mouse cursor.png')
    Magnifying_Glass = loadImage('Images/Room1/Magnifying Glass cursor.png')
    
    //room 1
    frame1 = loadImage('Images/Room1/piano paint.jpg')
    shelving1 = loadImage('Images/Room1/shelving 1.png')
    key = loadImage('Images/Room1/KEY.png')
    bed = loadImage('Images/Room1/bed.png')
    lug = loadImage('Images/Room1/lug.png')
    detail_shelving1 = loadImage('Images/Room1/detail shelving.png')
    b_door = loadImage('Images/Room1/basement door.png')
    detail_lug = loadImage('Images/Room1/lug detail.jpg')
    detail_frame = loadImage('Images/Room1/frame detail.png')
    square_thing = loadImage('Images/Room1/square (brown one).jpg')
    remove_something = loadImage('Images/Room1/remove the something.png')

    //room2(basement)
    basement_background = loadImage('Images/Basement/Basement background.JPG')
    elevator = loadImage('Images/Basement/elevator.png')
    generator = loadImage('Images/Basement/Generator.png')
    detail_elevator = loadImage('Images/Basement/elevator detail background.jpg')
    g_bg = loadImage('Images/Basement/generator background.jpg')
    detail_generator = loadImage('Images/Basement/generator detail.jpg')
}

let Current_Screen = main_menu; 

function setup()
{
    createCanvas( 800, 600 );

    X = width/2
    Y = height/2


    //room1 button
    room1_key_section_button = new button_screen(120, 120, room1_pick_the_key, 20,'The key', '▶Pick the key',  'black', width/2, height, 800, 200)
    room1_something_section_button = new button_screen(120, 177, room1_pick_the_something_shelving, 17,'Something', '▶To investigate',  'black', width/2, height, 800, 200)
    back_to_the_room1_button = new button_screen(120, 234, room1_middle, 25, 'Back', '▶Go back to the room',  'black', width/2, height, 800, 200)
    back_to_the_room1_button2 = new button_screen(606, 270, room1_middle, 25, 'Back', '▶Go back to the room',  'black', width/2, height, 800, 200)
    back_to_the_room1_button3 = new button_screen(120, 426, room1_middle, 25, 'Back', '▶Go back to the room', 'black', width/2, height, 800, 200)
    open_the_b_door = new button_screen(120, 375, room2_middle, 20, 'Basement', '▶Escape from this room', 'black', width/2, height, 800, 200)
    room1_investigate_the_frame_button = new button_screen(606, 215, room1_investigate_the_frame, 25, 'frame', '▶Investigate the frame', 'black', width/2, height, 800, 200)
    pick_the_something_frame = new button_screen(606, 316, room1_pick_the_something_frame, 25, 'Pick it', '▶Pick the something', 'black', width/2, height, 800, 200)

    //room2(basement) button

    push_the_button = new button_screen(99, 228, room2_ele_not_working, 25, 'Button', '▶Push the elevator button', 'black', width/2, height, 800, 200)
    investigate_door = new button_screen(99, 182, room2_ele_not_working, 25, 'Door', '▶Investigate the elevator door.', 'black', width/2, height, 800, 200)
    investigate_screen = new button_screen(99, 271, room2_ele_not_working, 16, 'Floor screen', '▶Investigate the Floor screen', 'black', width/2, height, 800, 200)
    back_to_room2_button = new button_screen(99, 315, room2_middle, 25, 'Back', '▶Go back to the room.', 'black', width/2, height, 800, 200)
    back_to_the_ele = new button_screen(717.5, 222, room2_elevator, 25, 'Back', '▶Go back to the elevator.', 'black', width/2, height, 800, 200)
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

    //key effect setting
    const k_left = 254;
    const k_right = 254 + 92;
    const k_top = 312;
    const k_bottom = 312 + 56;

    const within_kx = mouseX > k_left && mouseX < k_right;
    const within_ky = mouseY < k_top && mouseY < k_bottom;

    key_MouseIsOver = within_kx && within_ky

    //elevator effect setting
    const e_left = 282;
    const e_right = 282 + 208;
    const e_top = 187;
    const e_bottom = 284 + 115 + 115;

    const within_ex = mouseX >= e_left && mouseX < e_right;
    const within_ey = mouseY >= e_top && mouseY < e_bottom;

    elevator_MouseIsOver = within_ex && within_ey


    //generator effect setting
    const g_left = 668;
    const g_right = 668 + 130;
    const g_top = 120;
    const g_bottom = 120 + 222;

    const within_gx = mouseX >= g_left && mouseX < g_right;
    const within_gy = mouseY >= g_top && mouseY < g_bottom;

    generator_MouseIsOver = within_gx && within_gy

    //image(generator, 668, 120, 130, 222)

    
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
                        textSize(25)
                        text('▶There was a key on the shelf and something fell behind it.', 50, 560)
                    }

                    if(mouseIsPressed)
                    {
                        if(within_s1x && within_s1y)
                        {
                            Current_Screen = room1_key
                        }

                    }

                    

                    if(mouseIsPressed)
                    {
                        if(within_f1x && within_f1y)
                        {
                            Current_Screen = room1_frame
                        }

                    }


                if(frame1_MouseIsOver)
                {
                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        fill('white')
                        textSize(25)
                        text('▶It is a frame with a picture of the piano. ', 50, 560)
                }
                   
                    if(bed_MouseIsOver)
                    {
                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        fill('white')
                        textSize(25)
                        text('▶The bed. There is nothing special.', 50, 560)
                    }  

                    
                    if(lug_MouseIsOver)
                    {
                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        fill('white')
                        textSize(25)
                        text('▶The lug. I think there is something underneath.', 50, 560)
                    }

                    if(mouseIsPressed)
                    {
                        if(within_lx && within_ly)
                        {
                            Current_Screen = room1_lug
                        }

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
    case room1_key :
        {
            background('#BBBBBB')
            image(detail_shelving1, 100, 0, 700, 530)

            fill('black')
            rect(width/2, height, 800, 200) 


            
            
            room1_key_section_button.draw()
            room1_key_section_button.update()

            room1_something_section_button.draw()
            room1_something_section_button.update()

            back_to_the_room1_button.draw()
            back_to_the_room1_button.update()

            

            image(mouse_cursor, mouseX , mouseY , 50, 50)


    
        }
    
    break;
    case room1_lug :
        {
            background('#E2D5D5')

            image(detail_lug, 0 , 0 , 800, 370)
            image(b_door, 146, 170 , 666, 375)

            fill('black')
            rect(width/2, height, 800, 200) 

            fill('white')
            textSize(25)
            text('Under the lug, there is a door leading to the basement.', 50, 560)     

            back_to_the_room1_button3.draw()
            back_to_the_room1_button3.update()

            open_the_b_door.draw()
            open_the_b_door.update()

            image(mouse_cursor, mouseX , mouseY , 50, 50)
        }

        break;
        case room1_frame :
            {
                background('#8E7F7F') 

                image(detail_frame, 0, 50 , 800, 487)

                fill('black')
                rect(width/2, height, 800, 200)
                
                

                room1_investigate_the_frame_button.draw()
                room1_investigate_the_frame_button.update()

                back_to_the_room1_button2.draw()
                back_to_the_room1_button2.update()

                image(mouse_cursor, mouseX , mouseY , 50, 50)

            }

            break;
            case room1_pick_the_key :
                {
                    background('#BBBBBB')
                    image(detail_shelving1, 100, 0, 700, 530)
                    image(square_thing, 303, -22, 165, 165)


                    fill('black')
                    rect(width/2, height, 800, 200) 

                    fill('white')
                    text('▶That was a toy key.',66, 560)
                    
                    back_to_the_room1_button.draw()
                    back_to_the_room1_button.update()
                
                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                }
            break;
            case room1_pick_the_something_shelving :
            {
                background('#BBBBBB')
                image(detail_shelving1, 100, 0, 700, 530)

                fill('black')
                rect(width/2, height, 800, 200)
                
                image(remove_something, 231, 438, 56, 61)

                fill('white')
                text('▶That was dust.',66, 560)

                back_to_the_room1_button.draw()
                back_to_the_room1_button.update()

                image(mouse_cursor, mouseX , mouseY , 50, 50)
            }

            break;
            case room1_investigate_the_frame :
                {
                    background('#8E7F7F') 

                    image(detail_frame, 0, 50 , 800, 487)

                    Y += 15

                    fill('yellow')
                    circle(390,Y,15)

                    fill('black')
                    rect(width/2, height, 800, 200)

                    fill('white')
                    text('▶Something is drop out.', 66, 560)

                    pick_the_something_frame.draw()
                    pick_the_something_frame.update()

                    
                    back_to_the_room1_button2.draw()
                    back_to_the_room1_button2.update()

                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                }

                break;
                case room1_pick_the_something_frame:
                    {
                        background('#8E7F7F') 

                        image(detail_frame, 0, 50 , 800, 487)

                        fill('black')
                        rect(width/2, height, 800, 200)

                        fill('white')
                        text('▶You pick the driver.', 66, 560)
                        
                        back_to_the_room1_button2.draw()
                        back_to_the_room1_button2.update()
    
                        image(mouse_cursor, mouseX , mouseY , 50, 50) 
                    }


        break;
        case room2_middle :
            {
                    image(basement_background,0, 0, 800, 600)

                    strokeWeight(8)
                    stroke('black')
                    line(35, 39, 35, 502)
                    line(92, 98, 92, 460)

                    strokeWeight(0)
                    fill('#c46d35')
                    quad(39, 120, 88, 161, 88, 200, 39, 165)
                    quad(39, 220, 88, 261, 88, 300, 39, 265)
                    quad(39, 320, 88, 361, 88, 400, 39, 365)

                    image(elevator, 280, 142, 250, 257)

                    image(generator, 668, 120, 130, 222)

                    

                    strokeWeight(0)
                    fill('black')
                    rect(width/2, height, 800, 200)

                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                    
                    if(elevator_MouseIsOver)
                    {
                        fill('white')
                        textSize(25)
                        text('▶The elevator. The electricity seems to have been cut off.', 50, 560)

                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        
                        if(mouseIsPressed)
                        {
                            Current_Screen = room2_elevator;
                        }
                    
                    }



                    if(generator_MouseIsOver)
                    {
                        fill('white')
                        textSize(25)
                        text('▶The generator.', 50, 560)

                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        
                        if(mouseIsPressed)
                        {
                            Current_Screen = room2_generator;
                        }
                    
                    
                    }
                    
                       
                }
                break;
                case room2_elevator :
                    {
                        image(detail_elevator, 0, 0, 800, 600);

                        strokeWeight(0);
                        fill('black');
                        rect(width/2, height, 800, 200);

                        push_the_button.draw();
                        push_the_button.update();

                        investigate_door.draw();
                        investigate_door.update();

                        back_to_room2_button.draw();
                        back_to_room2_button.update();

                        investigate_screen.draw();
                        investigate_screen.update();

                        image(mouse_cursor, mouseX , mouseY , 50, 50)
                    }

                break;
                case room2_ele_not_working :
                    {
                        image(detail_elevator, 0, 0, 800, 600);

                        strokeWeight(0);
                        fill('black');
                        rect(width/2, height, 800, 200);

                        fill('white')
                        text('▶It is not working.', 50, 560);

                        back_to_the_ele.draw();
                        back_to_the_ele.update();

                        image(mouse_cursor, mouseX , mouseY , 50, 50)
                    }
                    
                    break;
                    case room2_generator :
                        {
                            image(g_bg, 0, 0, 800, 600)
                            
                            image(detail_generator, 133, 109, 560, 360)
                            
                            strokeWeight(0);
                            fill('black');
                            rect(width/2, height, 800, 200);

                            image(mouse_cursor, mouseX , mouseY , 50, 50)
                        }
}

}

function mousePressed()
{
    console.log(mouseX, mouseY);
}




