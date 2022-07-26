const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-count");
let remCount = document.getElementById("rem-count");

let char=0;

const updateCounter = () =>{ 
    userChar = charVal.value.length;
    totalCount.innerText=userChar;
    remCount.innerText=180-userChar; 
} ;

charVal.addEventListener("keyup",() => updateCounter());

const copytext=()=>{
    charVal.select();
    charVal.setSelectionRange(0,181);
    navigator.clipboard.writeText(charVal.value);
};
