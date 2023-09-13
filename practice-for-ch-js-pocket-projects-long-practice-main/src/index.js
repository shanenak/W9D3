import * as warmUp from "./warmup";
import Clock from "./clock";

const clock = new Clock();

const clockEle = document.querySelector("#clock");
setInterval(() => {
    warmUp.htmlGenerator(clock.getTime(), clockEle)
}, 1000);