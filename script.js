const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let message="";
let key="";
let autoKey="";
let cipher="";
let decrypted="";

let step=0;
let mode="encrypt";

function start(){

message = document.getElementById("message").value.toUpperCase();
key = document.getElementById("key").value.toUpperCase();

if(key.length !== 1){
alert("Key must be ONE letter only.");
return;
}

autoKey = key + message;

cipher="";
decrypted="";
step=0;
mode="encrypt";

document.getElementById("game").style.display="block";

showStep();
}

function showStep(){

document.getElementById("step").innerText = step+1;

if(mode==="encrypt"){

document.getElementById("mode").innerText="Encryption";

document.getElementById("letter1").innerText=message[step];
document.getElementById("letter2").innerText=autoKey[step];

document.getElementById("formula").innerText="Formula: (P + K) mod 26";

}
else{

document.getElementById("mode").innerText="Decryption";

document.getElementById("letter1").innerText=cipher[step];
document.getElementById("letter2").innerText=autoKey[step];

document.getElementById("formula").innerText="Formula: (C - K) mod 26";

}

document.getElementById("answer").value="";
document.getElementById("feedback").innerText="";
}

function check(){

let user=document.getElementById("answer").value.toUpperCase();

if(mode==="encrypt"){

let p=alphabet.indexOf(message[step]);
let k=alphabet.indexOf(autoKey[step]);

let c=(p+k)%26;
let correct=alphabet[c];

if(user===correct){

cipher+=correct;

document.getElementById("feedback").innerText="Correct";

step++;

if(step<message.length){
showStep();
}
else{

document.getElementById("cipherResult").innerText=cipher;

mode="decrypt";
step=0;

document.getElementById("feedback").innerText="Now start Decryption!";
showStep();

}

}
else{
document.getElementById("feedback").innerText="Try Again";
}

}

else{

let c=alphabet.indexOf(cipher[step]);
let k=alphabet.indexOf(autoKey[step]);

let p=(c-k+26)%26;
let correct=alphabet[p];

if(user===correct){

decrypted+=correct;

document.getElementById("feedback").innerText="Correct";

step++;

if(step<message.length){
showStep();
}
else{

document.getElementById("plainResult").innerText=decrypted;
document.getElementById("feedback").innerText="Decryption Complete!";

}

}
else{
document.getElementById("feedback").innerText="Try Again";
}

}

}
