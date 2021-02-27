// All Elements
const begin_btn = document.querySelector(".begin_btn button");
const information_card = document.querySelector(".information_card");
const exit_btn = information_card.querySelector(".buttons .quit");
const continue_btn = information_card.querySelector(".buttons .restart");


// Begin Quiz button clickable
begin_btn.onclick = ()=>{
        
    information_card.classList.add("activeInfo"); // Add Information Card
}

// Exit Quiz button clickable
exit_btn.onclick = ()=>{
    
    information_card.classList.remove("activeInfo"); // Remove Information Card
}

// Continue Quiz button clickable
continue_btn.onclick = ()=>{

    information_card.classList.remove("activeInfo"); // Remove information Card
    quiz_card.classList.add("activeQuiz"); // Add quiz card


// Restart Quiz button clickable
restart_quiz.onclick = ()=>{

    quiz_card.classList.add("activeQuiz"); // Add quiz card
    results_card.classList.remove("activeResult"); // Remove results card
