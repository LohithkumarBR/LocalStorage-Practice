let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storageKey = "userInput";

let storedVal = localStorage.getItem(storageKey);

if (storedVal !== null) {
    msgEl.value = storedVal;
} else {
    msgEl.value = "";
}

saveBtnEl.onclick = function() {
    let msgVal = msgEl.value;
    localStorage.setItem(storageKey, msgVal);
};

clearBtnEl.onclick = function() {
    msgEl.value = "";
    localStorage.removeItem(storageKey);
};