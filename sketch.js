var myImage
var posX
var posY
function preload(){
   myImage = loadImage("images/background.jpg")
}
function setup() {
createCanvas(windowWidth,windowHeight)
}
function draw() {
   myImage.filter("blur",second()/5);
    //imageMode(CENTER);
   backgroundImage(myImage);     
   
    translate(-width/6,0);
    
    
    for (i=0;i<= 60;i++){
       posX = random(width/8,width);
       posY = random(height/8,height);
    var myColor = get(posX, posY);
        if(i==second()){
          fill(0,0,0,97);
          textSize(height/4); 
        }else{
         fill(myColor);
         textSize(height/15);
        }
       textFont('Lato');
       textAlign(CENTER);
       text(i,posX,posY);   
    }
    
    fill(0,0,0,97)
    textFont('Lato');
    textSize(height/6);
    text(hour(),width/3,height/2);
    text(minute(),width/3*2,height/2);
  
    
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
    myImage.filter("blur",second()/5);
    //imageMode(CENTER);
   backgroundImage(myImage); 
    
}

function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;


    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;


    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;


    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);


    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;


    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;


    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}
     