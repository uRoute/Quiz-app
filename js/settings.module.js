import { Quiz } from "./quiz.module.js";

export class Setting{
    constructor(){
        $('#quiz-finish').slideUp(0);
        $('#quiz-page').slideUp(0);
        $('#alert1').hide(0);
        $('#alert2').hide(0);
        $('#inCorrect').hide(0);
        $('#Correct').hide(0);
        this.category = document.getElementById('category');
        this.difficulty = document.getElementsByName('difficulty');
        this.numberOfQuestions = document.getElementById('numberOfQuestions');
        document.getElementById('startBtn').addEventListener("click",()=>{
            this.start()
        })
    }


    async start(){
        let category = this.category.value;
        let difficulty = Array.from(this.difficulty).find((e)=>{return e.checked}).value;
        let queNums = this.numberOfQuestions.value;
        if(category&&difficulty&&queNums){
            if(queNums<45){
                let api = `https://opentdb.com/api.php?amount=${queNums}&category=${category}&difficulty=${difficulty}`
                let data =await this.fetchQuiz(api);
                    if(data.length>0){
                        $("#quiz-app").fadeOut(500);
                        $("#quiz-page").fadeIn(500);
                        let quiz = new Quiz(data)
                    }
            }else{
                $('#alert1').hide(100);
                $('#alert2').show(100);
            }
        }else{
            $('#alert1').show(100);
        }
    }

    async fetchQuiz(api){
        let data =await fetch(api);
        data =await data.json();
        return data.results
    }


}