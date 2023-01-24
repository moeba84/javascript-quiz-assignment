var questionsEl=document.querySelector("questionsbox")
var currentquestionIndex= 0
var questions=[
    {
        title: "what is not a primitive type in javascrript?",
        choices: ["String", "Text", "Boolean", "Number"],
        answer: "Text"
    },{
        title: "Which symbol represents strict equality in javascript?",
        choices: ["=","!==","==","==="],
        answer: "==="
    }
]
questionsEl.innerHTML= questions[0]
function getQuestion(){
    var currentQuestion= questions[
         currentquestionIndex
    ]
    var titleEl= document.getelementbyid("questiontitle")
    titleEl.textContent= currentQuestion.title
    for(var i=0;i<currentQuestion.choices.length; i++)
    var choice = currentQuestion.choices[i] [
        choiceIndex
    ]
    
    

    

}
