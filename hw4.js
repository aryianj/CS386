window.addEventListener("load", fLoad);

function fLoad() {
    document.getElementById("loginBtn").addEventListener("click", fValidation);
    document.getElementById("resetBtn").addEventListener("click", fReset);
}

function fValidation() {
    let inp = document.getElementsByTagName("input");
    for (let i = 0, len = inp.length; i <len; i++) {
        if (inp[i].value.length == 0) {
           inp[i].style.backgroundColor = "red";
        }
        else {
            if (inp[i].style.backgroundColor == "red") {
                inp[i].style.backgroundColor = ""; 
            }
            inp[i].style.backgroundColor = "green";
        }
    }
}

function fReset() {
    let inp = document.getElementsByTagName("input");
    for (let i = 0, len = inp.length; i <len; i++) {
        inp[i].style.backgroundColor = ""; 
        inp[i].value = "";
    }
}

