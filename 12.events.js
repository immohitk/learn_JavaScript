/*
Events in JavaScript

=> The change in the state of an object is known as an event.
=> Events are fired to notify code of "interesting changes" that may affect code execution.

        - Mouse events (e.g., click, hover, scroll)
        - Keyboard events (e.g., keydown, keyup, keypress)
        - Form events (e.g., submit, reset)
        - Print event 
        And many more...

Syntax :-

        node.event = () => {
            //handle here
        }
*/


let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Button clicked");
}




let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("Mouse is over the div");
}


/*
**NOTE** -> if we handled our event in both inline or in javascript, then the javascript event will be called first.
*/


/*
Event Object

=> It is a special object that has details about the event.
=> all events handlers have access to thr Event Object's properties and methods.


Syntax :-

        node.event =(e)=>{
            //handle here
        }


        -> e.target : The element that triggered the event.
        -> e.type : The type of event.
        -> e.clientX : The x-coordinate of the mouse pointer relative to the client area of the window.
        -> e.clientY : The y-coordinate of the mouse pointer relative to the client area of the window.
*/

let btn2 = document.querySelector("#btn2");

btn2.onclick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX, e.clientY);
};



/*
Event Listeners

        - node.addEventListener(event,callback)
        - node.removeEventListener(event,callback)

**NOTE** -> the callback reference should be same to remove
*/

btn1.addEventListener("click", () => {
    console.log("btn1 clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("btn1 clicked - handler2");
});

const handler3 = () => {
    console.log("btn1 clicked - handler3");
};

btn1.addEventListener("click", () => {
    console.log("btn1 clicked - handler4");
});


// remove event listener
btn1.removeEventListener("click", handler3);