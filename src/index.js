import { contents } from "./food.js";
import {menu} from "./menu.js";
import {contacts} from "./contact.js";

const menuElement = document.getElementById("menu");
const contactElement = document.getElementById("contact");
const homeElement = document.getElementById("home");

contents();

const clearContent = () =>{
    const content = document.getElementById("content");
    if(content){
        content.innerHTML = ``;
    };
};

if(homeElement){
    homeElement.addEventListener("click", () => {
        clearContent();
        contents();
    });
}

if(menuElement){
    menuElement.addEventListener("click", () => {
        clearContent();
        menu();
    });
}

if(contactElement){
    contactElement.addEventListener("click", () => {
        clearContent();
        contacts();
    });
}

