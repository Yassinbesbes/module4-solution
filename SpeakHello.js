// STEP 2: Wrapping SpeakHello.js inside IIFE
(function(window) {

// STEP 3: Creating helloSpeaker object and attaching speak method
var helloSpeaker = {};
helloSpeaker.speak = function(name) {
console.log(speakWord + " " + name);
};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 5: Expose the 'helloSpeaker' object to the global scope
window.helloSpeaker = helloSpeaker;

})(window); // Passing window object as parameter to the IIFE function.