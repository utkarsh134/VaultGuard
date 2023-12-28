const passwordbox = document.getElementById("input");
const copybtn = document.getElementById("copy");
const generatebtn = document.getElementById("generatebtn");

// generatebtn.addEventListener("click", ()=>{
//     inputvalue.value = "abcdef!@#ANF" ;
// })

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "~!@#$%^&*([]{<>})_+?`'-=" ;

generatebtn.addEventListener("click", () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    let all = upperCase + lowerCase + numbers + special;
    while (password.length < 12) {
        password+= all[Math.floor(Math.random() * all.length)];
    }

    passwordbox.value = password ;
}) ;

copybtn.addEventListener("click", ()=>{
    passwordbox.select() ;
    document.execCommand("copy") ;
})


