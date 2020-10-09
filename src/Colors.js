exports.log = (input, color) => {
    console.log(`\u001b[1;${colorCodes[color]}m${input}\u001b[0m`);
}

let colorCodes = {
    "red": "31",
    "green": "32",
    "yellow": "33",
    "blue": "34",
    "purple": "35",
    "cyan": "36"
}

