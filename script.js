"use strict"

/* **************************************************
******************** VARIABLES **********************
************************************************** */

const DIV = document.querySelector("#timer");
const START = document.querySelector("#start");
const STOP = document.querySelector("#stop");
STOP.setAttribute("disabled", "true");
const RESET = document.querySelector("#reset");
RESET.setAttribute("disabled", "true");
let milli = 0;
let sec = 0;
let min = 0;
let timerID;

/* **************************************************
******************** FUNCTIONS **********************
************************************************** */

function timer() {
    milli++;
    milli == 100 ? (sec == 60 ? (min++, sec = 0) : sec++, milli = 0) : null;
    DIV.textContent = `${min < 10 ? ("0" + min):min} : ${sec < 10 ? ("0" + sec):sec} : ${milli < 10 ? ("0" + milli):milli}`;
};

function starter() {
    timerID = setInterval(timer, 10);
    RESET.setAttribute("disabled", "true");
    START.setAttribute("disabled", "true");
    STOP.removeAttribute("disabled");
}


function stopper() {
    clearInterval(timerID);
    RESET.removeAttribute("disabled");
    START.removeAttribute("disabled");
    STOP.setAttribute("disabled", "true");
}

function reset() {
    milli = 0;
    sec = 0;
    min = 0;
    DIV.textContent = "00 : 00 : 00";
    RESET.setAttribute("disabled", "true");
}

/* **************************************************
****************** CORE PROGRAMM ********************
************************************************** */

START.addEventListener("click", starter);
STOP.addEventListener("click", stopper)
RESET.addEventListener("click", reset);