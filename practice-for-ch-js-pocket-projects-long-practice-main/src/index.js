import * as warmUp from "./warmup";
import Clock from "./clock";
import attachDogLinks from "./dropdown";

const clock = new Clock();

const clockEle = document.querySelector("#clock");
setInterval(() => {
    warmUp.htmlGenerator(clock.getTime(), clockEle)
}, 1000);

attachDogLinks()
