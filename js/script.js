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
