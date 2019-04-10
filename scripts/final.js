let mic;
// var fft;
// var smoothing = 0.8;
//https://github.com/therewasaguy/p5-music-viz/blob/master/demos/05a_fft_particle_system/sketch.js
//using this example to get frequency and smooth things out

//https://p5js.org/examples/sound-oscillator-frequency.html

//https://github.com/processing/p5.js-sound/issues/274 fixes audiocontext issue
$(function() { 
  $("#play").click(function(){
    getAudioContext().resume(); 
  });
  $("#pause").click(function(){
    getAudioContext().suspend();
  });
});

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

  // fft = new p5.FFT();
  // fft.setInput(mic);
}

function draw() {
  background('#c7fcf5');

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel()*1000;
  console.log(vol);

  // let spectrum = fft.analyze();
  // console.log("SPECTRUM: " + spectrum);

  fill('#afd0ff');
  stroke('#77afff');
  strokeWeight(10);

  // Draw an ellipse with height based on volume
  ellipse(width / 2, height/2, vol+500, vol+500);
}
