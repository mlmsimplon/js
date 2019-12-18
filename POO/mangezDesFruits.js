
        let canvas = document.getElementById('canvas');
        canvas.addEventListener("keydown", keydown, true); 
        let ctx = canvas.getContext('2d');

        let x = 100;
        let y = 100;

        let img = new Image();
        img.src='/olive.png';
        img.addEventListener('load', function() {
            ctx.drawImage(img,x,y,50,50); 
        });
    

          redraw();

        
        
        function keydown(e) {
           
        //w
        if(e.keyCode == 87) {
            clearCanvas();
            y = y-10;
            redraw();
            
        }//s
        if (e.keyCode == 83) {
            clearCanvas();
            y = y + 10;
            redraw();
        }//a
        if (e.keyCode == 65) {
            clearCanvas();
            x = x - 10;
            redraw();
           
        }//d
        if (e.keyCode == 68) {
            clearCanvas();
            x = x + 10;
            redraw();
         
        }

    }
    
    function relancer() {
        img = setInterval(redraw, 2000);
    }
    function redraw() {
        ctx.drawImage(img,x,y,50,50);
    }

    function clearCanvas() {
        canvas.width = canvas.width
    } 
   
   