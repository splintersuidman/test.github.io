const templateWidth = 2000;
const templateHeight = 2000;
canvas.width = templateWidth;
canvas.height = templateHeight;

const backgroundImage = new DraggableResizableObject(canvas, "imageSize", document.createElement('img'), 0, 0, 0, 0);
backgroundImage.makeDraggable(canvas);

const topText = new TextBoxDrawable({
    font: "Bebas Neue",
    linespacing: 0.4,
    color: "white",
    backgroundColor: "#C2000B",
    allCaps: true,
    context,
    xPosition: 50,
    yPosition: 1450,
    maxWidth: 1940,
    maxHeight: 400,
    inputID:"titelText",
    doCenter: true,
    doDynamicSize: false,
    fontSize: 120,
    shadowEnable: false
});
topText.makeDraggable();
topText.lockXPosition();

const ondertitel = new TextDrawable({
    font: "BebasNeueBook",
    linespacing: 0,
    color: "white",
    allCaps: true,
    context,
    textBaseline: "alphabetic",
    xPosition: templateWidth/2,
    yPosition: 1800,
    doDynamicSize: false,
    fontSize: 68,
    doCenter: true,
    inputID: "ondertitel",
    useDynamicLineHeight: false
});

const topTextSizeSlider = document.getElementById("titelSize");
topText.setFont(size=topTextSizeSlider.value);
topTextSizeSlider.addEventListener("input", _ => topText.setFont(topTextSizeSlider.value));

const logo = new ImgWrapper("templateImages/Evenement/logo140x140.png");
logo.setPosition(templateWidth/2 - 140/2, templateHeight - 180);

const gradient = new ImgWrapper("templateImages/Evenement/gradient.png");

// Define layers here
let layers = [
    backgroundImage, 
    gradient,
    logo,
    ondertitel,
    topText,
];