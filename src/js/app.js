window.onload = function(){
    // const background = document.getElementById("background");
    // var text = "faidz ";
    // var repeated_text = text.repeat(20);
    // background.innerText = repeated_text;

    // var text = 'Making the Web a Better Place Making the Web';
    // var canvas = document.createElement("canvas");
    // var fontSize = 20;
    // canvas.setAttribute('height', fontSize);
    // var context = canvas.getContext('2d');
    // context.fillStyle    = 'rgba(0,0,0,0.1)';
    // context.font         = fontSize + 'px sans-serif';
    // context.fillText(text, 0, fontSize);

    // var background = document.getElementById("background");
    // background.style.setProperty("background-image", "url(" + canvas.toDataURL() + ")")
    // console.log(background.style.backgroundImage);

    // sleep(1000)
    // var background = document.getElementById("background");
    // var canvas = background.getContext("2d");
    // canvas.fillText("test", 0, 10);
    // console.log(background.style.backgroundRepeat);

    // /** @type {HTMLCanvasElement} */
    // const canvas = document.getElementById("background");
    // const ctx = canvas.getContext("2d");
    // ctx.fillText("test", 0, 10);

    // const img = new Image();
    // img.src = canvas.toDataURL();
    
    // img.onload = () => {
    //     const pattern = ctx.createPattern(img, "repeat");
    //     ctx.fillStyle = pattern;
    //     console.log(pattern);
    // }
    let f = new FontFace("Poppins", "url(\"/src/fonts/Poppins-Italic.ttf\")")
    f.style = "italic";
    console.log(f);


    f.load().then(() => {
        // Create a pattern, offscreen
        const patternCanvas = document.createElement("canvas");
        const patternContext = patternCanvas.getContext("2d");

        patternCanvas.width = 57;
        patternCanvas.height = 19;
        patternContext.font = "italic 20px Poppins";
        patternContext.fillStyle = "#151517";
        patternContext.fillText("FAIDZ", 0, 15);

        // Create our primary canvas and fill it with the pattern
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const pattern = ctx.createPattern(patternCanvas, "repeat");
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add our primary canvas to the webpage
        document.body.appendChild(canvas);
    });
}

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }