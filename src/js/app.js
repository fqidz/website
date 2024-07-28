window.onload = function(){
    // Load font
    let f = new FontFace("Poppins", "url(\"fonts/Poppins-Italic.ttf\")")
    f.style = "italic";

    f.load().then(() => {
        // Create a pattern, offscreen
        const patternCanvas = document.createElement("canvas");
        const patternContext = patternCanvas.getContext("2d");

        // Write text on canvas
        patternCanvas.width = 57;
        patternCanvas.height = 19;
        patternContext.font = "italic 20px Poppins";
        patternContext.fillStyle = "#ffffff";
        patternContext.textBaseline = "top";
        patternContext.fillText("FAIDZ", 0, 0);

        // Create our primary canvas and fill it with the pattern
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const pattern = ctx.createPattern(patternCanvas, "repeat");
        // Set width and height to window size
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Make canvas stick to window
        canvas.style.position = "fixed";
        canvas.style.zIndex = "-1";
        canvas.style.width = "100%";
        canvas.style.display = "block";
        // Add our primary canvas to the webpage
        document.body.appendChild(canvas);
    });
}
