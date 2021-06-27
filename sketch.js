// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021


//moving effect setting
let Y = 0;
let s_y = 0;
let s_yl = 0;
let s_yr = 0;
let credit_y = 0;

//button class
let room1_key_section_button
let room1_something_section_button
let room1_investigate_the_frame_button
let back_to_the_room1_button
let back_to_the_room1_button2
let back_to_the_room1_button3
let open_the_b_door

//button setting
var start_top = 250
var start_left = 140

var how2play_top = 400
var how2play_left = 140

var credit_top = 250
var credit_left = 140

var main_top = 511
var main_left = 573

var start_width = 500
var start_height = 80

var how2play_width = 500
var how2play_height = 80

var main_width = 165
var main_height = 53

var credit_width = 500
var credit_height = 80

var start_button_MouseIsOver = false
var how2play_button_MouseIsOver = false
var credit_button_MouseIsOver = false
var frame1_MouseIsOver = false
var elevator_MouseIsOver = false
var screw_1_MouseIsOver = false
var screw_2_MouseIsOver = false
var p_MouseIsOver = false
var g_o_MouseIsOver = false
var g_x_MouseIsOver = false
var g_t_MouseIsOver = false

//sound effect setting
let bgs
let pick_up

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
    sd = loadImage('Images/Basement/screwdriver.png')
    empty = loadImage('Images/Basement/empty space.png')
    screw = loadImage('Images/Basement/screw.png')
    paint = loadImage('Images/Basement/eye moving paint.jpg')
    wire_p = loadImage('Images/Basement/wire puzzles.jpg')
    p_bg = loadImage('Images/Basement/paint background.jpg')
    generator_e = loadImage('Images/Basement/wire puzzles ERROR.jpg')
    generator_r = loadImage('Images/Basement/wire puzzles RIGHT.jpg')

    //background music
    bgs = loadSound ('Effect/Background.mp3')
    pick_up = loadSound('Effect/pick up sound.wav')
}

let Current_Screen = main_menu; 

function setup()
{
    createCanvas( 800, 600 );

    //sound
    bgs.loop();

    Y = height/2;
    s_y = 121;
    s_yl = 121;
    s_yr = 121;

    credit_y = height;


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
    back_to_room_g = new button_screen(73, 259, room2_middle, 25, 'Back', '▶Go back to the room.', 'black', width/2, height, 800, 200)
    open_the_g = new button_screen(73, 201, room2_open_g, 25, 'Open it', '▶Open the generator', 'black', width/2, height, 800, 200)
    back_to_the_g = new button_screen(73, 259, room2_generator, 25, 'Back', '▶Go back to the generator.', 'black', width/2, height, 800, 200)
    use_screwdriver = new button_screen(73, 308, room2_use_screwdriver, 17, 'screwdriver', '▶Open the generator with screwdriver', 'black', width/2, height, 800, 200)
    open_the_g_finally = new button_screen(73, 201, room2_g_is_finally_open, 25, 'Open it', '▶Open the generator', 'black', width/2, height, 800, 200)
    back_to_the_room_p = new button_screen(121.5, 213.5, room2_middle, 25, 'Back', '▶Go back to the room.', 'black', width/2, height, 800, 200)
    investigate_paint = new button_screen(121.5, 161, room2_investigate_p, 16, 'investigate', '▶Look into the picture.', 'black', width/2, height, 800, 200)
    investigate_gw = new button_screen(73, 259, room2_gp_how2play, 16, 'investigate', '▶Investigate the wire.', 'black', width/2, height, 800, 200)
    push_the_button_g = new button_screen(73, 308, room2_gp_button_press, 12, 'Push the button', '▶Fix the electricity by pushing The "o", "x" and triangle button', 'black', width/2, height, 800, 200)
    try_again = new button_screen(73, 308, room2_gp_button_press, 17, 'Try again', '▶Go back to the press button section.', 'black', width/2, height, 800, 200);
    find_clue = new button_screen(73, 259, room2_middle, 25, 'Back', '▶Go back to the room and find some clue', 'black', width/2, height, 800, 200)
    
    go_back = new button_screen(73, 259, room2_middle_ele_working, 25, 'Back', '▶Go back to the room and take a elevator', 'black', width/2, height, 800, 200)
    push_the_button_ending = new button_screen(99, 228, ENDING, 25, 'Button', '▶Escape this room', 'black', width/2, height, 800, 200)
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

    const c_left = credit_left;
    const c_right = credit_left + credit_width;
    const c_top = credit_top;
    const c_bottom = credit_top + credit_height;

    const within_hx = mouseX > h_left && mouseX < h_right;
    const within_hy = mouseY > h_top && mouseY < h_bottom;

    const within_sx = mouseX > s_left && mouseX < s_right;
    const within_sy = mouseY > s_top && mouseY < s_bottom;

    const within_mx = mouseX > m_left && mouseX < m_right;
    const within_my = mouseY > m_top && mouseY < m_bottom;

    const within_cx = mouseX > c_left && mouseX < c_right;
    const within_cy = mouseY > c_top && mouseY < c_bottom;
    
    how2play_button_MouseIsOver = within_hx && within_hy
    start_button_MouseIsOver = within_sx && within_sy
    main_button_MouseIsOver = within_mx && within_my
    credit_button_MouseIsOver = within_cx && within_cy

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

    //screw effect setting 1
    const screw_1_left = 279;
    const screw_1_right = 279 + 12;
    const screw_1_top = 316;
    const screw_1_bottom = 316 + 15;

    const within_Sc1x = mouseX >= screw_1_left && mouseX < screw_1_right;
    const within_Sc1y = mouseY >= screw_1_top && mouseY < screw_1_bottom;

    screw_1_MouseIsOver = within_Sc1x && within_Sc1y

    //screw effect setting 2
    const screw_2_left = 776;
    const screw_2_right = 776 + 12;
    const screw_2_top = 316;
    const screw_2_bottom = 316 + 15;

    const within_Sc2x = mouseX >= screw_2_left && mouseX < screw_2_right;
    const within_Sc2y = mouseY >= screw_2_top && mouseY < screw_2_bottom;

    screw_2_MouseIsOver = within_Sc2x && within_Sc2y

    //paint effect setting
    const p_left = 150;
    const p_right = 150 + 118;
    const p_top = 185;
    const p_bottom = 185 + 170;

    const within_px = mouseX >= p_left && mouseX < p_right;
    const within_py = mouseY >= p_top && mouseY < p_bottom;

    p_MouseIsOver = within_px && within_py

    //g_o button effect setting
    const g_o_left = 374;
    const g_o_right = 374 + 28;
    const g_o_top = 291;
    const g_o_bottom = 291 + 28;

    const within_g_ox = mouseX >= g_o_left && mouseX < g_o_right;
    const within_g_oy = mouseY >= g_o_top && mouseY < g_o_bottom;

    g_o_MouseIsOver = within_g_ox && within_g_oy

    //g_x button effect setting
    const g_x_left = 408;
    const g_x_right = 408 + 28;
    const g_x_top = 291;
    const g_x_bottom = 291 + 28;

    const within_g_xx = mouseX >= g_x_left && mouseX < g_x_right;
    const within_g_xy = mouseY >= g_x_top && mouseY < g_x_bottom;

    g_x_MouseIsOver = within_g_xx && within_g_xy

    //g_t button effect setting
    const g_t_left = 444;
    const g_t_right = 444 + 28;
    const g_t_top = 291;
    const g_t_bottom = 291 + 28;

    const within_g_tx = mouseX >= g_t_left && mouseX < g_t_right;
    const within_g_ty = mouseY >= g_t_top && mouseY < g_t_bottom;

    g_t_MouseIsOver = within_g_tx && within_g_ty
    
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

                    pick_up.play();
                
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

                pick_up.play();

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

                        pick_up.play();
                        image(detail_frame, 0, 50 , 800, 487)

                        fill('black')
                        rect(width/2, height, 800, 200)

                        fill('white')
                        text('▶You pick the screwdriver.', 66, 560)
                        
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

                    image(paint, 150, 187.5, 120, 169)
                    
                    fill('#69f5f7')
                    let x1 = map(mouseX, 0, width, 188, 192);
                    let x2 = map(mouseX, 0, width, 226, 230);
                    circle(x1, 259, 12)
                    circle(x2, 258.2, 12)
                    
                    fill('#62564a')
                    let x3 = map(mouseX, 0, width, 187, 193)
                    let x4 = map(mouseX, 0, width, 225, 231)
                    
                    circle(x3, 259, 9)
                    circle(x4, 258.2, 9)

                    textSize(80)
                    fill('#76f300')
                    text('O', 587.5 ,213.5)

                    strokeWeight(0)
                    fill('black')
                    rect(width/2, height, 800, 200)

                    image(mouse_cursor, mouseX , mouseY , 50, 50)

                    if(p_MouseIsOver)
                    {
                        fill('white')
                        textSize(25)
                        text('▶It is a frame with a picture of a woman.', 50, 560)

                        image(Magnifying_Glass, mouseX , mouseY , 50, 50)
                        
                        if(mouseIsPressed)
                        {
                            Current_Screen = room2_p_detail;
                        }
                    }


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
                case room2_p_detail :
                    {
                        image(p_bg, 0, 0, 800, 600)

                        image(paint, 269, 72, 320, 420)

                        fill('#69f5f7')
                        let x1 = map(mouseX, 0, width, 372, 379);
                        let x2 = map(mouseX, 0, width, 473, 480);
                        circle(x1, 248, 30)
                        circle(x2, 247, 30)
                        
                        fill('#62564a')
                        let x3 = map(mouseX, 0, width, 372, 379)
                        let x4 = map(mouseX, 0, width, 473, 480)
                        
                        circle(x3, 248, 18)
                        circle(x4, 247, 18)

                        strokeWeight(0);
                        fill('black');
                        rect(width/2, height, 800, 200);

                        fill('white')
                        text('▶I feel like a woman is just looking at me.', 50, 560);

                        
                        back_to_the_room_p.draw();
                        back_to_the_room_p.update();

                        investigate_paint.draw();
                        investigate_paint.update();


                        image(mouse_cursor, mouseX , mouseY , 50, 50)

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


                        fill('#fc9090')
                        textSize(15)
                        text('X', 647 ,400)

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
                            
                            image(detail_generator, 148, 113, 520, 320)
                            
                            strokeWeight(0);
                            fill('black');
                            rect(width/2, height, 800, 200);
                            
                            back_to_room_g.draw();
                            back_to_room_g.update();

                            open_the_g.draw();
                            open_the_g.update();

                            image(mouse_cursor, mouseX , mouseY , 50, 50)
                        }

                    break;
                    case room2_open_g :
                        {
                            image(g_bg, 0, 0, 800, 600)
                            
                            image(detail_generator, 148, 113, 520, 320)
                            
                            strokeWeight(0);
                            fill('black');
                            rect(width/2, height, 800, 200);
                            
                            fill('white')
                            text('▶It is tightly closed with screws. I think I need a screwdriver.', 50, 560);    

                            back_to_the_g.draw();
                            back_to_room_g.update();

                            use_screwdriver.draw();
                            use_screwdriver.update();

                            image(mouse_cursor, mouseX , mouseY , 50, 50)
                        }

                    break;
                    case room2_use_screwdriver :
                        {
                            image(g_bg, 0, 0, 800, 600)
                            
                            image(detail_generator, 148, 113, 520, 320)
                            
                            strokeWeight(0);
                            fill('black');
                            rect(width/2, height, 800, 200);

                            fill('white')
                            text('▶Loosen the screw with the screwdriver.', 50, 560); 
                            
                            if(screw_1_MouseIsOver)
                            {
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('white')
                                text('▶Click to loosen it', 50, 560); 

                                if(mouseIsPressed)
                                {
                                    Current_Screen = room2_right_one_is_loosen
                                }
                            }
                            if(screw_2_MouseIsOver)
                            {
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('white')
                                text('▶Click to loosen it', 50, 560); 

                                if(mouseIsPressed)
                                {
                                    Current_Screen = room2_left_one_is_loosen
                                }
                            }

                            
                            back_to_room_g.draw();
                            back_to_room_g.update();



                            image(sd, mouseX - 130, mouseY - 205 , 148, 228)
                        }

                        break;
                        case room2_right_one_is_loosen :
                            {
                                image(g_bg, 0, 0, 800, 600)
                            
                                image(detail_generator, 148, 113, 520, 320)

                                image(screw, 159.5, s_y, 50, 38)
                                s_y += 20
                            
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('white')
                                text('▶Loosen the screw with the screwdriver.', 50, 560); 
                    
                                image(empty, 150, 116, 20, 18)
                            
                                back_to_room_g.draw();
                                back_to_room_g.update();

                                if(screw_2_MouseIsOver)
                                {
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('white')
                                text('▶Click to loosen it', 50, 560); 

                                if(mouseIsPressed)
                                {
                                    Current_Screen = room2_g_is_really_open_l
                                }
                                }

                                image(sd, mouseX - 130, mouseY - 205 , 148, 228)
                            }

                        break;
                        case room2_left_one_is_loosen:
                            {
                                image(g_bg, 0, 0, 800, 600)
                            
                                image(detail_generator, 148, 113, 520, 320)

                                image(screw, 652.5, s_y, 50, 38)
                                s_y += 20
                            
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('white')
                                text('▶Loosen the screw with the screwdriver.', 50, 560); 
            
                                image(empty, 645, 116, 20, 18)

                                if(screw_1_MouseIsOver)
                            {
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('white')
                                text('▶Click to loosen it', 50, 560); 

                                if(mouseIsPressed)
                                {
                                    Current_Screen = room2_g_is_really_open_r
                                }
                            }
                            
                                back_to_room_g.draw();
                                back_to_room_g.update();

                                image(sd, mouseX - 130, mouseY - 205 , 148, 228)
                            }

                        break;
                        case room2_g_is_really_open_r :
                            {
                            image(g_bg, 0, 0, 800, 600)
                            
                            image(detail_generator, 148, 113, 520, 320)

                            image(screw, 159.5, s_yr, 50, 38)
                            s_yr += 20
                            
                            strokeWeight(0);
                            fill('black');
                            rect(width/2, height, 800, 200);

                            fill('white')
                            text('▶All screws are loosen.', 50, 560);

                            image(empty, 645, 116, 20, 18);
                            image(empty, 150, 116, 20, 18);

                            open_the_g_finally.draw();
                            open_the_g_finally.update();
                            
                            image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }

                            break;
                            case room2_g_is_really_open_l :
                                {
                                image(g_bg, 0, 0, 800, 600)
                                
                                image(detail_generator, 148, 113, 520, 320)
    
                                image(empty, 645, 116, 20, 18);
                                image(empty, 150, 116, 20, 18);
                                
                                image(screw, 652.5, s_yl, 50, 38)
                                s_yl += 20

                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);
    
                                fill('white')
                                text('▶All screws are loosen.', 50, 560);

                                open_the_g_finally.draw();
                                open_the_g_finally.update();
                                
                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                                }

                            break;
                            case room2_g_is_finally_open :
                                {
                                    image(g_bg, 0, 0, 800, 600)
                            
                                    image(wire_p, 148, 113, 520, 320)
                            
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    textSize(18)
                                    text('▶I think I need to fix the electricity by pressing the button to use the elevator.', 50, 560);

                                    investigate_gw.draw();
                                    investigate_gw.update();
                                
                                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                                }

                            break;
                            case room2_gp_how2play :
                                {
                                    image(g_bg, 0, 0, 800, 600)
                            
                                    image(wire_p, 148, 113, 520, 320)
                            
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('#62a6ff')
                                    textSize(15);
                                    text('1', 557.5 ,274)

                                    fill('#81ff91')
                                    textSize(15);
                                    text('2', 565.5, 293)

                                    fill('#fc9090')
                                    textSize(15);
                                    text('3', 312.5, 337)
                                    
                                    fill('white')
                                    textSize(18)
                                    text('▶I dusted off the wire, and the numbers came out.', 50, 560);
                                    text('There are 1 on the blue wire, 2 on the green wire, and 3 on the red wire.', 50, 590);
                                    
                                    push_the_button_g.draw();
                                    push_the_button_g.update();

                                   image(mouse_cursor, mouseX , mouseY , 50, 50) 
                                }

                        break;
                        case room2_gp_button_press :
                            {
                                image(g_bg, 0, 0, 800, 600)
                            
                                image(wire_p, 148, 113, 520, 320)
                        
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('#62a6ff')
                                textSize(15);
                                text('1', 557.5 ,274)

                                fill('#81ff91')
                                textSize(15);
                                text('2', 565.5, 293)

                                fill('#fc9090')
                                textSize(15);
                                text('3', 312.5, 337)
                                
                                fill('white')
                                textSize(18)
                                text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);

                                if(g_o_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶button "o"', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_o_first
                                    }

                                }

                                if(g_x_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button "X"', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_x_first
                                    }
                                }

                                if(g_t_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button triangle', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_t_first
                                    }
                                }

                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }

                        break;
                        case room2_button_o_first :
                            {
                                image(g_bg, 0, 0, 800, 600)
                            
                                image(wire_p, 148, 113, 520, 320)
                        
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('#62a6ff')
                                textSize(15);
                                text('1', 557.5 ,274)

                                fill('#81ff91')
                                textSize(15);
                                text('2', 565.5, 293)

                                fill('#fc9090')
                                textSize(15);
                                text('3', 312.5, 337)
                                
                                fill('white')
                                textSize(18)
                                text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);

                                if(g_x_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button "X"', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_of_xs
                                    }
                                }

                                if(g_t_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button triangle', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_of_ts
                                    }
                                }

                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }

                        break;
                        case room2_button_x_first :
                            {
                                image(g_bg, 0, 0, 800, 600)
                            
                                image(wire_p, 148, 113, 520, 320)
                        
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('#62a6ff')
                                textSize(15);
                                text('1', 557.5 ,274)

                                fill('#81ff91')
                                textSize(15);
                                text('2', 565.5, 293)

                                fill('#fc9090')
                                textSize(15);
                                text('3', 312.5, 337)
                                
                                fill('white')
                                textSize(18)
                                text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);

                                if(g_o_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button "O"', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_xf_os
                                    }
                                }

                                if(g_t_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button triangle', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_xf_ts
                                    }
                                }

                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }

                        break;
                        case room2_button_t_first :
                            {
                                image(g_bg, 0, 0, 800, 600)
                            
                                image(wire_p, 148, 113, 520, 320)
                        
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('#62a6ff')
                                textSize(15);
                                text('1', 557.5 ,274)

                                fill('#81ff91')
                                textSize(15);
                                text('2', 565.5, 293)

                                fill('#fc9090')
                                textSize(15);
                                text('3', 312.5, 337)
                                
                                fill('white')
                                textSize(18)
                                text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);

                                if(g_o_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button "O"', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_tf_os
                                    }
                                }

                                if(g_x_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button "X"', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_tf_xs
                                    }
                                }

                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }

                        break;
                        case room2_button_of_xs :
                            {
                                image(g_bg, 0, 0, 800, 600)
                            
                                image(wire_p, 148, 113, 520, 320)
                        
                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);

                                fill('#62a6ff')
                                textSize(15);
                                text('1', 557.5 ,274)

                                fill('#81ff91')
                                textSize(15);
                                text('2', 565.5, 293)

                                fill('#fc9090')
                                textSize(15);
                                text('3', 312.5, 337)
                                
                                fill('white')
                                textSize(18)
                                text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);

                                if(g_t_MouseIsOver)
                                {
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);

                                    fill('white')
                                    text('▶Button triangle', 50, 560); 

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_button_Wrong
                                    }
                                }

                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }

                            break;
                            case room2_button_of_ts :
                                {
                                    image(g_bg, 0, 0, 800, 600)
                                
                                    image(wire_p, 148, 113, 520, 320)
                            
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);
    
                                    fill('#62a6ff')
                                    textSize(15);
                                    text('1', 557.5 ,274)
    
                                    fill('#81ff91')
                                    textSize(15);
                                    text('2', 565.5, 293)
    
                                    fill('#fc9090')
                                    textSize(15);
                                    text('3', 312.5, 337)
                                    
                                    fill('white')
                                    textSize(18)
                                    text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);
    
                                    if(g_x_MouseIsOver)
                                    {
                                        strokeWeight(0);
                                        fill('black');
                                        rect(width/2, height, 800, 200);
    
                                        fill('white')
                                        text('▶Button "X"', 50, 560); 
    
                                        if(mouseIsPressed)
                                        {
                                            Current_Screen = room2_button_Wrong
                                        }
                                    }
    
                                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                                }

                                break;
                                case room2_button_xf_os :
                                    {
                                        image(g_bg, 0, 0, 800, 600)
                                    
                                        image(wire_p, 148, 113, 520, 320)
                                
                                        strokeWeight(0);
                                        fill('black');
                                        rect(width/2, height, 800, 200);
        
                                        fill('#62a6ff')
                                        textSize(15);
                                        text('1', 557.5 ,274)
        
                                        fill('#81ff91')
                                        textSize(15);
                                        text('2', 565.5, 293)
        
                                        fill('#fc9090')
                                        textSize(15);
                                        text('3', 312.5, 337)
                                        
                                        fill('white')
                                        textSize(18)
                                        text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);
        
                                        if(g_t_MouseIsOver)
                                        {
                                            strokeWeight(0);
                                            fill('black');
                                            rect(width/2, height, 800, 200);
        
                                            fill('white')
                                            text('▶Button triangle', 50, 560); 
        
                                            if(mouseIsPressed)
                                            {
                                                Current_Screen = room2_button_Wrong
                                            }
                                        }
        
                                        image(mouse_cursor, mouseX , mouseY , 50, 50)
                                    }

                                    break;
                                    case room2_button_xf_ts :
                                        {
                                            image(g_bg, 0, 0, 800, 600)
                                        
                                            image(wire_p, 148, 113, 520, 320)
                                    
                                            strokeWeight(0);
                                            fill('black');
                                            rect(width/2, height, 800, 200);
            
                                            fill('#62a6ff')
                                            textSize(15);
                                            text('1', 557.5 ,274)
            
                                            fill('#81ff91')
                                            textSize(15);
                                            text('2', 565.5, 293)
            
                                            fill('#fc9090')
                                            textSize(15);
                                            text('3', 312.5, 337)
                                            
                                            fill('white')
                                            textSize(18)
                                            text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);
            
                                            if(g_o_MouseIsOver)
                                            {
                                                strokeWeight(0);
                                                fill('black');
                                                rect(width/2, height, 800, 200);
            
                                                fill('white')
                                                text('▶Button "o"', 50, 560); 
            
                                                if(mouseIsPressed)
                                                {
                                                    Current_Screen = room2_button_Wrong
                                                }
                                            }
            
                                            image(mouse_cursor, mouseX , mouseY , 50, 50)
                                        }

                                        break;
                                        case room2_button_tf_os :
                                            {
                                                image(g_bg, 0, 0, 800, 600)
                                            
                                                image(wire_p, 148, 113, 520, 320)
                                        
                                                strokeWeight(0);
                                                fill('black');
                                                rect(width/2, height, 800, 200);
                
                                                fill('#62a6ff')
                                                textSize(15);
                                                text('1', 557.5 ,274)
                
                                                fill('#81ff91')
                                                textSize(15);
                                                text('2', 565.5, 293)
                
                                                fill('#fc9090')
                                                textSize(15);
                                                text('3', 312.5, 337)
                                                
                                                fill('white')
                                                textSize(18)
                                                text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);
                
                                                if(g_x_MouseIsOver)
                                                {
                                                    strokeWeight(0);
                                                    fill('black');
                                                    rect(width/2, height, 800, 200);
                
                                                    fill('white')
                                                    text('▶Button "X"', 50, 560); 
                
                                                    if(mouseIsPressed)
                                                    {
                                                        Current_Screen = room2_button_tf_os_xt_C
                                                    }
                                                }
                
                                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                                            }

                        break;
                        case room2_button_tf_xs :
                                            {
                                                image(g_bg, 0, 0, 800, 600)
                                            
                                                image(wire_p, 148, 113, 520, 320)
                                        
                                                strokeWeight(0);
                                                fill('black');
                                                rect(width/2, height, 800, 200);
                
                                                fill('#62a6ff')
                                                textSize(15);
                                                text('1', 557.5 ,274)
                
                                                fill('#81ff91')
                                                textSize(15);
                                                text('2', 565.5, 293)
                
                                                fill('#fc9090')
                                                textSize(15);
                                                text('3', 312.5, 337)
                                                
                                                fill('white')
                                                textSize(18)
                                                text('▶Tip! You have to press the buttons in "specific" order to get electricity. ', 50, 560);
                
                                                if(g_o_MouseIsOver)
                                                {
                                                    strokeWeight(0);
                                                    fill('black');
                                                    rect(width/2, height, 800, 200);
                
                                                    fill('white')
                                                    text('▶Button "O"', 50, 560); 
                
                                                    if(mouseIsPressed)
                                                    {
                                                        Current_Screen = room2_button_Wrong
                                                    }
                                                }
                
                                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                                            }
                                                    break;
                        case room2_button_Wrong :
                            {
                                    image(g_bg, 0, 0, 800, 600)
                                
                                    image(generator_e, 148, 113, 520, 320)
                            
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);
    
                                    fill('#62a6ff')
                                    textSize(15);
                                    text('1', 557.5 ,274)
    
                                    fill('#81ff91')
                                    textSize(15);
                                    text('2', 565.5, 293)
    
                                    fill('#fc9090')
                                    textSize(15);
                                    text('3', 312.5, 337)
                                    
                                    fill('white')
                                    textSize(18)
                                    text('▶Wrong password. Try again. ', 50, 560);

                                    try_again.draw();
                                    try_again.update();

                                    find_clue.draw();
                                    find_clue.update();
    
                                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }

                        break;
                        case room2_button_tf_os_xt_C :
                            {
                                image(g_bg, 0, 0, 800, 600)
                                
                                    image(generator_r, 148, 113, 520, 320)
                            
                                    strokeWeight(0);
                                    fill('black');
                                    rect(width/2, height, 800, 200);
    
                                    fill('#62a6ff')
                                    textSize(15);
                                    text('1', 557.5 ,274)
    
                                    fill('#81ff91')
                                    textSize(15);
                                    text('2', 565.5, 293)
    
                                    fill('#fc9090')
                                    textSize(15);
                                    text('3', 312.5, 337)
                                    
                                    fill('white')
                                    textSize(18)
                                    text('▶Right password. You can take a elevator.', 50, 560);

                                    go_back.draw();
                                    go_back.update();
    
                                    image(mouse_cursor, mouseX , mouseY , 50, 50)
                            }
                        break;
                        case room2_investigate_p :
                            {
                                image(p_bg, 0, 0, 800, 600)

                                image(paint, 269, 72, 320, 420)
        
                                fill('#69f5f7')
                                let x1 = map(mouseX, 0, width, 372, 379);
                                let x2 = map(mouseX, 0, width, 473, 480);
                                circle(x1, 248, 30)
                                circle(x2, 247, 30)
                                
                                fill('#62564a')
                                let x3 = map(mouseX, 0, width, 372, 379)
                                let x4 = map(mouseX, 0, width, 473, 480)
                                
                                circle(x3, 248, 18)
                                circle(x4, 247, 18)
                                
                                //fill('#2154ac')
                                //textSize(35)
                                //text('3', 486.5, 437.5)

                                strokeWeight(8)
                                stroke('#2154ac')
                                noFill();
                                triangle(470.5 ,423.5, 459.5 ,445.5, 485.5 ,445.5)

                                strokeWeight(0);
                                fill('black');
                                rect(width/2, height, 800, 200);
                                
                                fill('white')
                                textSize(25)
                                text('▶"triangle" is written on her clothes.', 50, 560);


                                back_to_the_room_p.draw();
                                back_to_the_room_p.update();
                                
                                image(mouse_cursor, mouseX , mouseY , 50, 50)
                        }
                        break;
                        case room2_middle_ele_working :
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

                                image(paint, 150, 187.5, 120, 169)
                    
                                fill('#69f5f7')
                                let x1 = map(mouseX, 0, width, 188, 192);
                                let x2 = map(mouseX, 0, width, 226, 230);
                                circle(x1, 259, 12)
                                circle(x2, 258.2, 12)
                    
                                fill('#62564a')
                                let x3 = map(mouseX, 0, width, 187, 193)
                                let x4 = map(mouseX, 0, width, 225, 231)
                    
                                circle(x3, 259, 9)
                                circle(x4, 258.2, 9)

                                strokeWeight(0)
                                fill('black')
                                rect(width/2, height, 800, 200)

                                image(mouse_cursor, mouseX , mouseY , 50, 50)


                                if(elevator_MouseIsOver)
                                {   
                                    fill('white')
                                    textSize(25)
                                    text('▶The elevator. The electricity is connect.', 50, 560)

                                    image(Magnifying_Glass, mouseX , mouseY , 50, 50)

                                    if(mouseIsPressed)
                                    {
                                        Current_Screen = room2_ele_is_working
                                    }
                        
                    
                                }       
                                        }

                    break;
                    case room2_ele_is_working :
                        {
                            image(detail_elevator, 0, 0, 800, 600);

                            strokeWeight(0);
                            fill('black');
                            rect(width/2, height, 800, 200);

                            push_the_button_ending.draw();
                            push_the_button_ending.update();

                            image(mouse_cursor, mouseX , mouseY , 50, 50)
                        }

                    break;
                    case ENDING :
                        {
                            let credit_offset = 0;

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
                        
                            strokeWeight(5)
                            stroke('black')
                            fill('white')
                            textSize(80)
                            text('Congratulations!', width/2 - 300, height/2 - 150)

                            if(credit_button_MouseIsOver)
                            {
                                credit_width = 510
                                credit_height = 82

                                credit_offset = 3
                            }

                                else{
                                        credit_width = 500
                                        credit_height = 80
                                    }

                                if(mouseIsPressed)
        {
            const mouse_cx = mouseX >= width/2 - 250 && mouseX < width/2 + 250
            const mouse_cy = mouseY >= height/2 - 40 && mouseY < height/2 + 40

            if(mouse_cx && mouse_cy)
            {
                Current_Screen = credit
            }
        }

        strokeWeight(5)
        stroke('black')
        fill(255)
        rectMode(CENTER)
        rect(400, 300, credit_width , credit_height)
        strokeWeight(2)
        fill('black')
        textSize(55)
        text('Credit', width/2 - 50, height/2 + 15 + credit_offset)

                            
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

                                fill(255, 255, 255, 95);
                                rect(width/2, height/2, 800, 600);

                                credit_y -= 4

                                fill('black')
                                text('Made by Yejin', 0, credit_y)
                                text('designed by Yejin', 0, credit_y + 50)
                                text('coding by Yejin', 0, credit_y + 100)


                            }
                                    }

                                             

}

function mousePressed()
{
    console.log(mouseX, mouseY);
}


