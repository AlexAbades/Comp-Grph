window.onload = function init ()
{
    // Call the canvas by its id (on html file) and we specify we are going to call functions on it. 
    // document its thge html file
    var canvas = document.getElementById("canv");

    // render webGL context (Acces directly to the API without anu need of extra libraries)
    var gl = canvas.getContext("webgl");

    // print on console something went wrong if it didn't get the API
    if (!gl) {        
        console.log("Error occured");
    }

    // Clear the canvas
    gl.clearColor(0.3921, 0.5843, 0.9294, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}