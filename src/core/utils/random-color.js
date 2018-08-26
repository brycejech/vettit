'use strict';

module.exports = () => {
    const letters = '0123456789abcdef';
    let color = '#';
    while(color.length < 7){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
