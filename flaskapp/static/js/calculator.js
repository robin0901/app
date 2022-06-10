document.getElementById("q3-1").onclick = function(){
    let option1 = document.getElementById("question3-a-1");
    option1.classList.remove("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.add("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.remove("dis_none");

}


document.getElementById("q3-2").onclick = function(){
    let option1 = document.getElementById("question3-a-1");
    option1.classList.remove("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.add("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.remove("dis_none");
}


document.getElementById("q3-3").onclick = function(){
    let option1 = document.getElementById("question3-a-1");
    option1.classList.add("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.remove("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.add("dis_none");
}


document.getElementById("q3-4").onclick = function(){
    let option1 = document.getElementById("question3-a-1");
    option1.classList.add("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.remove("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.add("dis_none");
}




document.getElementById("resultbtn").onclick = function(){
    var answers = document.getElementsByName(`q3`);
    console.log(answers);
    for(var i =0; i< answers.length;  i++){
        if(answers[i].checked){
            console.log(parseInt(answers[i].value));
        }
    }
}