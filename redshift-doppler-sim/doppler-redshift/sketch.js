var xspacing = 10;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 50.0; // Height of wave
var period = 150.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var hubble;
var star;

function setup() {
  createCanvas(1450, 450);
hubble = createImg("https://preview.ibb.co/eT137m/hubble.jpg");
  hubble.hide();
star = createImg("https://preview.ibb.co/chwsHm/heic0703a.jpg");
  star.hide();

     // hue, saturation, and brightness
  colorMode(RGB,255,255,255,255);
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(-10, 10, 0);
  slider.position(1000,360);

  w = width+16;
  dx = (TWO_PI / period) * ((xspacing+(slider.value()/2)));
  yvalues = new Array(floor(w/(xspacing+(slider.value()/2))));

}

function draw() { 
  background(0);
  calcWave();
  renderWave();

 image(hubble, 1130, 110, 280, 200);

fill(255);
textSize(13);
text("0", 1063, 350);
textSize(14);
text("Velocity of Celestial Object", 985, 400);
textSize(20);
text("+", 1125, 352);
textSize(25);
text("-", 998, 354);
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += -0.04;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  var k = 20;
  noStroke();
  if (slider.value()>0) {
stroke(255, 255-(k*slider.value()), 255-(k*slider.value()));
  fill(255, 255-(k*slider.value()), 255-(k*slider.value()));
   image(star, 760+(35+(1.25*slider.value())+((112/(xspacing+(slider.value()/3)))-112))*(xspacing+(slider.value()/3)), 120, 250, 240);
    for (var x = 35+floor(1.25*slider.value()); x < 112; x++) {
    ellipse(1020+(x+((112/(xspacing+(slider.value()/3)))-112))*(xspacing+(slider.value()/3)), height/2+yvalues[x], 10, 10);
  }
  } 
    else{
  stroke(255+(k*slider.value()), 255+(k*slider.value()), 255);
  fill(255+(k*slider.value()), 255+(k*slider.value()), 255);
   image(star, 760+(35+floor(2*slider.value())+((112/(xspacing+(slider.value()/3)))-112))*(xspacing+(slider.value()/3)), 120, 250, 240);
    for (var x = 35+floor(2*slider.value()); x < 112; x++) {
    ellipse(1020+(x+((112/(xspacing+(slider.value()/3)))-112))*(xspacing+(slider.value()/3)), height/2+yvalues[x], 10, 10);
  }
  };
  
}