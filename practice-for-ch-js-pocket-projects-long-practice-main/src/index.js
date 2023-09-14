import * as warmUp from "./warmup";
import Clock from "./clock";
import attachDogLinks from "./dropdown";
import {todoList, addToDos} from "./todo-list";

const clock = new Clock();

const clockEle = document.querySelector("#clock");
setInterval(() => {
    warmUp.htmlGenerator(clock.getTime(), clockEle)
}, 1000);

attachDogLinks()
addToDos()
todoList()
