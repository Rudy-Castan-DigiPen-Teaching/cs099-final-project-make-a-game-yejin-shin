// Name       : Yejin shin
// Assignment : final project make a game
// Course     : CS099
// Spring 2021

class button_text
{
    constructor(x, y, Text_size, BUTTON_text, detail_button)
    {
        this.x = x;
        this.y = y;
        this.width = 130;
        this.height = 35;
        this.size = Text_size
        this.text = BUTTON_text
        this.detail = detail_button
        this.offset = 0;

        this.image = insert_image
    }

    update()
    {
        const Bt_left = this.x - this.width / 2;
        const Bt_right = this.x + this.width / 2;
        const Bt_top = this.y - this.height /2;
        const Bt_bottom = this.y + this.height /2;

        const within_Btx = mouseX >= Bt_left && mouseX < Bt_right;
        const within_Bty = mouseY >= Bt_top && mouseY < Bt_bottom;
        
        var BUTTON_text_mouseisover = false

        BUTTON_text_mouseisover = within_Btx && within_Bty
        
        if(BUTTON_text_mouseisover)
        {
            this.width = 135;
            this.height = 38;

            this.offset = 2;

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
            const mouse_BtX = mouseX >= Bt_left && mouseX < Bt_right
            const mouse_Bty = mouseY >= Bt_top && mouseY < Bt_bottom

            if(mouse_BtX && mouse_Bty)
            {
                fill('white')
                text(this.detail, 81, 560)

                insert_image
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