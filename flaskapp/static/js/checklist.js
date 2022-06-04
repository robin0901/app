document.getElementById("resultbtn").onclick = function(){
    var totalscore = 0;
    for(var j=0; j<6; j++){
        var answers = document.getElementsByName(`q${j+1}`);
        for(var i =0; i< answers.length;  i++){
            if(answers[i].checked){
                totalscore += parseInt(answers[i].value);
            }
        }
    }
    window.location = `checklist_result.html?result=${totalscore}`;
}
