export class Quiz{
    constructor(data){
        this.current = 0;
        this.score = 0;
        this.data = data;
        this.totalNums = data.length;
        document.getElementById('next').addEventListener('click',()=>{this.next()})
        document.getElementById('tryBtn').addEventListener('click',this.tryAgain)
        this.showQuiz()
    }
    randomaizer(answers){
        let current = answers.length , randomer;
        while(current!=0){
            randomer = Math.floor(Math.random()*current);//0 => 0.9999999 0.42 0.66*2 1.9
            /*
            3.99999
            1-math.floor => 3
            2-math.round => 4
            3-math.ceil => 4
            */
            current--;
            //swap 
            [answers[current],answers[randomer]] = [answers[randomer],answers[current]]
        }
    }

    showQuiz(){
        document.getElementById("currentQuestion").innerHTML = this.current+1;
        document.getElementById("totalNumberOfQuestions").innerHTML =this.totalNums;
        document.getElementById("question").innerHTML =this.data[this.current].question;
        let answers = [this.data[this.current].correct_answer,...this.data[this.current].incorrect_answers]
        this.randomaizer(answers)
        let answersContainer = ``;
        for(let i = 0 ; i<answers.length ; i++){
            // console.log(finalAnswers);
            answersContainer+=` <label class="form-check-label mb-2">
                                <input type="radio" class="form-check-input" name="answer" value="${answers[i]}">
                                     ${answers[i]}
                                </label>`
        }
        document.getElementById("rowAnswer").innerHTML = answersContainer
    }


    next(){
        let userAnswer = Array.from(document.getElementsByName('answer')).find((e)=>{return e.checked});
        
        if(userAnswer!=undefined){
            userAnswer = userAnswer.value;
            let correctAnswr = this.data[this.current].correct_answer;
            this.checkAnswer(userAnswer,correctAnswr);
            this.current++
            if(this.current<this.totalNums){
                this.showQuiz();
            }else{
                $("#quiz-page").fadeOut(500);
                $("#quiz-finish").fadeIn(500);
                document.getElementById('score').innerHTML = this.score;
            }

        }else{
            $('#alert').show(100);
        }
        
    }

    checkAnswer(userAnswer,correctAnswr){
        if(userAnswer==correctAnswr){
            this.score++;
            $('#Correct').show(500).hide(200);
        }else{
            $('#inCorrect').show(500).hide(200);
        }
    }

    tryAgain(){
        $("#quiz-finish").fadeOut(500);
        $("#quiz-app").fadeIn(500);
    }

}