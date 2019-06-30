import Bowser from "bowser"; // ES6 (and TypeScript with --esModuleInterop enabled)

const browser = Bowser.getParser(window.navigator.userAgent);
export const result = browser.getResult();
