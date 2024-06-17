function setup() {
    createCanvas(750, 750);
       background("green")
    
  }
  
  function draw() {
    
    stroke("purple");
    fill("blue");
    
    if(mouseIsPressed){
      circle(mouseX, mouseY, 25, 25,);
    }
  }