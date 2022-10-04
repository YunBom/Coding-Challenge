const form = document.querySelector("#form");
const maxNumber = document.querySelector("#max_number");
const userNumber = document.querySelector("#user_number");
const showUserNumber = document.querySelector("#user_choose");
const showMachineNumber = document.querySelector("#machine_choose");
const showResult = document.querySelector("#result");


function submitDefault(event){
    event.preventDefault();
    if(parseInt(userNumber.value) <= parseInt(maxNumber.value)) {
       playGame();
    } 
    else {
        alert(maxNumber.value + " 이하의 숫자를 적어주세요.");
    }}

function playGame(event) {
    showUserNumber.innerText = userNumber.value;
    const MachineNumber = Math.floor(Math.random() *(parseInt(maxNumber.value)+1));
    showMachineNumber.innerText = MachineNumber;

    if(JSON.stringify(showUserNumber.innerText)==JSON.stringify(showMachineNumber.innerText)) {
        showResult.innerText = "You Won!";
    }
    else {
        showResult.innerText = "You lose!";
    }
};

form.addEventListener("submit", submitDefault);


