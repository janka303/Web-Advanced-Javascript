let mic;
var music = document.getElementById("mp3");
var bubbles = 12;

// var fft;
// var smoothing = 0.8;
//https://github.com/therewasaguy/p5-music-viz/blob/master/demos/05a_fft_particle_system/sketch.js
//using this example to get frequency and smooth things out

//https://p5js.org/examples/sound-oscillator-frequency.html

//https://github.com/processing/p5.js-sound/issues/274 fixes audiocontext issue

$(function() { 
  $("#play").click(function(){
    getAudioContext().resume();
    playAudio();
    $("#intro").hide();
  
  });
  $("#pause").click(function(){
    getAudioContext().suspend();
    pauseAudio();
  });
});

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index','-2');
  getAudioContext().suspend();

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
  let vol = mic.getLevel()*3000;
  console.log(vol);

  // let spectrum = fft.analyze();
  // console.log("SPECTRUM: " + spectrum);

  fill('#afd0ff');
  stroke('#77afff');
  strokeWeight(10);

  // Draw an ellipse with height based on volume
  ellipse(width / 2, height/2, vol+500, vol+500);
}

// https://www.w3schools.com/jsref/met_audio_play.asp

function playAudio(){
  music.play();
}

function pauseAudio(){
  music.pause();
}

