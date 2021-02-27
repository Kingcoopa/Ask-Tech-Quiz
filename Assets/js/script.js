// All Elements
    const begin_btn = document.querySelector(".begin_btn button");
    const information_card = document.querySelector(".information_card");
    const exit_btn = information_card.querySelector(".buttons .quit");
    const continue_btn = information_card.querySelector(".buttons .restart");
    const quiz_card = document.querySelector(".quiz_card");
    const results_card = document.querySelector(".results_card");
    const choices_list = document.querySelector(".answ_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".quiz_timer .time_text");
    const timeCount = document.querySelector(".quiz_timer .time_seconds");

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

        showQuestions(0); // Show Questions
        queCounting(1); // Show 1 on the Que-Counter
        startTime(15); // Start Timer
        startTimeLine(0); // Start Timer Line
}

        let timeVal =  15;
        let que_counter = 0;
        let que_number = 1;
        let playersScore = 0;
        let counter;
        let counterLine;
        let widthVal = 0;

    const restart_quiz = results_card.querySelector(".buttons .restart");
    const quit_quiz = results_card.querySelector(".buttons .quit");

// Restart Quiz button clickable
    restart_quiz.onclick = ()=>{

        quiz_card.classList.add("activeQuiz"); // Add quiz card
        results_card.classList.remove("activeResult"); // Remove results card

        timeVal = 15; 
        que_counter = 0;
        que_number = 1;
        playersScore = 0;
        widthVal = 0;
        showQuestions(que_counter); // Call - show question
        queCounting(que_number); // passing que_numb value to queCounter
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counter line
        startTime(timeVal); // start time
        startTimeLine(widthVal); // start timer line

    timeText.textContent = "Secs:";
    next_btn.classList.remove("show"); // remove next button
}

// Quit quiz button clickable
    quit_quiz.onclick = ()=>{
    
        window.location.reload(); // reload window
}

    const next_btn = document.querySelector("footer .next_btn");
    const bottom_counter = document.querySelector("footer .total_que");

// Next button
    next_btn.onclick = ()=>{

        if  (que_counter < questions.length - 1){ // question count less than question length
                que_counter++; // que_counter value
                que_number++; // que_number value
                showQuestions(que_counter); //Call - show question
                queCounting(que_number); // que_numb value to queCounter
                clearInterval(counter); // clear counter
                clearInterval(counterLine); // clear line
                startTime(timeVal); // start time
                startTimeLine(widthVal); // start time line

            timeText.textContent = "Secs:"; //time left
            next_btn.classList.remove("show"); //remove next button
    }else{
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear line
            showResult(); // show result
    }
}

// getting questions from the array
    function showQuestions(index){

        const q_text = document.querySelector(".ques_text");

// <p> tag for questions and choices, passing value using array
        let ques_tag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
        let choice_tag = '<p class="choice"><span>'+ questions[index].choices[0] +'</span></p>'
        + '<p class="choice"><span>'+ questions[index].choices[1] +'</span></p>'
        + '<p class="choice"><span>'+ questions[index].choices[2] +'</span></p>'
        + '<p class="choice"><span>'+ questions[index].choices[3] +'</span></p>';
        q_text.innerHTML = ques_tag; // span tag inside ques_tag
        choices_list.innerHTML = choice_tag; // new p tag inside choice_tag
    
    const choice = choices_list.querySelectorAll(".choice");

//  all available choices clickable
    for (i=0; i < choice.length; i++){

        choice[i].setAttribute("onclick", "optionSelected(this)");

}
}

// tags for right and wrong icons
    let tickTag = '<div class="icon-tick"><i class="fas fa-check"></i></div>';
    let crossTag = '<div class="icon-cross"><i class="fas fa-times"></i></div>';

// Clicking on an answer
    function optionSelected(answer){

        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counterLine
        let playersAnsw = answer.textContent; // selects answer
        let correctAnsw = questions[que_counter].answer; // array the right answer
        const allchoices = choices_list.children.length; // all choices

    if      (playersAnsw == correctAnsw){ // player selects right answer
            playersScore += 1; // increase score by 1
            answer.classList.add("correct"); // adds green to correct answer
            answer.insertAdjacentHTML("beforeend", tickTag); // adds check for the right answer
            console.log("Correct Answer");
            console.log("Your correct answers = " + playersScore);
    }else{
            answer.classList.add("incorrect"); // adds red to incorrect answer
            answer.insertAdjacentHTML("beforeend", crossTag); // adds X for wrong answer
            console.log("Wrong Answer");

    for (i=0; i < allchoices; i++){

    if      (choices_list.children[i].textContent == correctAnsw){ // answer matches the array answer
            choices_list.children[i].setAttribute("class", "choice correct"); // adds green color
            choices_list.children[i].insertAdjacentHTML("beforeend", tickTag); // adds check
            console.log("Auto selected correct answer.");

        }
    }
}

    for     (i=0; i < allchoices; i++){

        choices_list.children[i].classList.add("disabled"); // once answer is picked, the answer choices are disabled

    }

        next_btn.classList.add("show"); // shows next button, once answer is picked

}

    function showResult(){

        information_card.classList.remove("activeInfo"); // hide information card
        quiz_card.classList.remove("activeQuiz"); // hide quiz card
        results_card.classList.add("activeResult"); // show results card
        const scoreText = results_card.querySelector(".score_text");
        localStorage.setItem('score', playersScore);

    if      (playersScore > 3){ // Player scores 3 or better

            // players score and total question number to win/lose
            let scoreTag = '<span> You Win! You got <p>'+ playersScore +'</p> out of <p>'+ questions.length +'</p></span>';
            scoreText.innerHTML = scoreTag;  //add score text
    }

    else if     (playersScore > 1){ // player scores 1, but less than 3

                let scoreTag = '<span>You are so close! You got <p>'+ playersScore +'</p> out of <p>'+ questions.length +'</p></span>';
                scoreText.innerHTML = scoreTag;
    }

    else        { // player scores 0
                let scoreTag = '<span>You Loss! You got only <p>'+ playersScore +'</p> out of <p>'+ questions.length +'</p></span>';
                scoreText.innerHTML = scoreTag;
    }
}

    function startTime(time){

        counter = setInterval(timer, 1000);
        function timer(){   
        timeCount.textContent = time; // time count to time value
        time--;

    if      (time < 9){ // time below 9
            let Zero = timeCount.textContent; 
            timeCount.textContent = "0" + Zero; // adds a 0 for single digit
    }

    if      (time < 0){ // time below 0
            clearInterval(counter); // ends counter
            timeText.textContent = "Secs:";
            const allchoices = choices_list.children.length; // grabs all answers in the array
            let correctAnsw = questions[que_counter].answer; // shows the right answer

    for     (i=0; i < allchoices; i++){

    if      (choices_list.children[i].textContent == correctAnsw){ // choice matches the array answer
                    choices_list.children[i].setAttribute("class", "choice correct"); //adds  green color 
                    choices_list.children[i].insertAdjacentHTML("beforeend", tickTag); //adds check
                    console.log("Time Off: Auto selected correct answer.");
    }
}

    for     (i=0; i < allchoices; i++){
                choices_list.children[i].classList.add("disabled"); // when an answer is choosen the answer console is disabled
    }

            next_btn.classList.add("show"); //shows the next button

        }
    }
}

    function startTimeLine(time){

            counterLine = setInterval(timer, 29);
            function timer(){

                time += 1; // increase time by 1
                time_line.style.width = time + "px"; // increase time line
                if(time > 549){ // time greater than 549
                    clearInterval(counterLine); // hide counter line
        }
    }
}

    function queCounting(index){

        // passed question number and total questions
        let totQuesCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
        bottom_counter.innerHTML = totQuesCounTag;  // add number in bottom counter
}
