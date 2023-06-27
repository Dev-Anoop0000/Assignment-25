let color1 = "blue";
let color2 = 'yellow';
switch (((color1 == `${color1}` && color2 == `${color2}`) || (color1 == `${color2}` && color2 == `${color1}`))) {
    case (((color1 == "red" && color2 == "blue") || (color1 == "blue" && color2 == "red"))):
        console.log("purple");
        break;
    case (((color1 == "red" && color2 == "yellow") || (color1 == "yellow" && color2 == "red"))):
        console.log("Orange");
        break;
    case (((color1 == "yellow" && color2 == "blue") || (color1 == "blue" && color2 == "yellow"))):
        console.log("green");
        break;
    default:
        console.log("Invalid color combination");
}