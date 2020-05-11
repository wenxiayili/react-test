let designWidth: number = 750;
let devicePixelWidth: number = window.screen.width;
let width: number = devicePixelWidth > designWidth ? designWidth : devicePixelWidth;
let fontSize: number = width / designWidth * 100;
let docEL: HTMLElement = document.documentElement;
docEL.style.fontSize = `${fontSize}px`;
document.body.style.fontSize = '0.28rem';
document.body.style.width = '7.5rem';

export default {};