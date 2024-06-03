function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

let redHex = rgbToHex(255, 0, 0);       
let brownHex = rgbToHex(165, 42, 42); 
let grayHex = rgbToHex(128, 128, 128);  
console.log(`Red: ${redHex}`);   
console.log(`Brown: ${brownHex}`);
console.log(`Gray: ${grayHex}`);






















