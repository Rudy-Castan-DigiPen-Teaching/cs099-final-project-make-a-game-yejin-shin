## 1. Shapes

### make the base of room
- I using the shape(line, quad and rect) to make the base of room. such as walls, floor and ceiling.

### make the ladder
- I using the shape(line and quad) to make the ladder

## 2. Colors

- I using the colors to fill the walls, floor, ladder and ceiling.

## 3. Variables

## 4. Conditional Statements
### sketch.js line 379 ~ 390
### sketch.js line 392 ~ 403
### sketch.js line 646 ~ 452
### sketch.js line 654 ~ 458

- make the button effect that when the mouse cursor is on the button then button width and height will be bigger than original size and text(such as 'start' , 'How to play', 'Back') will be little down.

### sketch.js line 527 ~ 533
### sketch.js line 556 ~ 552
### sketch.js line 564 ~ 570
### sketch.js line 573 ~ 579
### sketch.js line 902 ~ 908
### sketch.js line 917 ~ 923
### sketch.js line 934 ~ 936
### sketch.js line 1097 ~ 1104
### sketch.js line 1111 ~ 1118
### sketch.js line 1157 ~ 1164
### sketch.js line 1194 ~ 1201
### ...ect

- make the cursor effect that when the mouse cursor is on the specific item then explanation will be show up on the black space.

### sketch.js line 444 ~ 453(main menu to How _to_play screen)
### sketch.js line 455 ~ 463(main menu to room1_middle screen)
### sketch.js line 535 ~ 532(room1_middle to detail_key screen)
### sketch.js line 546 ~ 553(room1_middle to detail_frame screen)
### sketch.js line 581 ~ 588(room1_middle to detail_lug screen)
### sketch.js line 660 ~ 669(How_to_play to main menu screen)
### sketch.js line 910 ~ 914(room2_middle to detail_paint screen)
### sketch.js line 925 ~ 930(room2_middle to detail_elevator screen)
### sketch.js line 942 ~ 948(room2_middle to detail_generator screen)
### sketch.js line 1106 ~ 1109(detail_generator to right_is_loosen screen)
### sketch.js line 1120 ~ 1124(detail_generator to left_is_loosen screen)
### sketch.js line 1166 ~ 1173(detail_generator to g_is_open1 screen)
### sketch.js line 1203 ~ 1207(detail_generator to g_is_open2 screen)
### ...ect

- If the button will be pressed then Current screen will be translate to another screen.

## 5. Loops

### sketch.js line 351 ~ 369
### sketch.js line 567 ~ 615
### sketch.js line 2038 ~ 2057
### sketch.js line 2109 ~ 2228

- make the bricks on the wall


## 6. Functions
- I don't use it

## 7. Classes
### button_screen.js
-At first, I made te button all the time. But I realized it takes long time to make one by one. So, I decided make a button class and use it.

#### what kind of thing is used
- first of all, I made a **constructor** and add to **x**, **y**, **screen**, **Text_size**, **BUTTON_text**, **detail_button**, **insert_color**, **i_x**, **i_y**, **i_w**, **i_h**
    - In this case, **screen** is the function that after the button was pressed(move to another screen), **detail_button** is the function that happening when the cursor in on the button, **insert_color**,  **i_x**, **i_y**, **i_w** and **i_h** is the function that black space will be show up.

- second, I made a **update** and make the effect of button
    - 1.  I made the button effect that will be little bigger than before and button_text will be little down than before(for the make some effect that button seems to pressed)
    - 2.  I made the function that when the button is pressed(then, Current_screen will be changed)

- last thing, I made a **draw** and make the shape of button

## 8. Arrays
- I don't use it