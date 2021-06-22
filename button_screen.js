// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

class button_screen
{
    constructor(x, y, screen, Text_size, BUTTON_text, detail_button, insert_color, i_x, i_y, i_w, i_h)
    {
        this.x = x;
        this.y = y;
        this.width = 130;
        this.height = 35;
        this.screen = screen
        this.size = Text_size
        this.text = BUTTON_text
        this.detail = detail_button
        this.insert_x = i_x
        this.insert_y = i_y
        this.insert_w = i_w
        this.insert_h = i_h
        this.insert_color = insert_color
        this.offset = 0;
    }

    update()
    {
        const Bs_left = this.x - this.width / 2;
        const Bs_right = this.x + this.width / 2;
        const Bs_top = this.y - this.height /2;
        const Bs_bottom = this.y + this.height /2;

        const within_Bsx = mouseX >= Bs_left && mouseX < Bs_right;
        const within_Bsy = mouseY >= Bs_top && mouseY < Bs_bottom;
        
        var BUTTON_screen_mouseisover = false

        BUTTON_screen_mouseisover = within_Bsx && within_Bsy
        
        if(BUTTON_screen_mouseisover)
        {
            this.width = 133;
            this.height = 37;

            this.offset = 2;

            fill(this.insert_color)
            rect(this.insert_x, this.insert_y, this.insert_w, this.insert_h)

            fill('white')
            text(this.detail, 81, 560)
        }
        else
        {
            this.width = 130;
            this.height = 35;

            this.offset = 0;
        }

        if(mouseIsPressed)
        {
            const mouse_BsX = mouseX >= Bs_left && mouseX < Bs_right
            const mouse_Bsy = mouseY >= Bs_top && mouseY < Bs_bottom

            if(mouse_BsX && mouse_Bsy)
            {
                Current_Screen = this.screen
            }
        }
    }

    draw()
    {
        push();
        stroke('black')
        strokeWeight(5);
        fill('white');
        rect(this.x, this.y, this.width, this.height, 20);
        strokeWeight(1)
        fill('black')
        textSize(this.size)
        text(this.text, this.x - this.width/4, this.y + this.height/5 + this.offset);
        pop();
    }

}