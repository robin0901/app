document.getElementById("q3-1").onclick = function () {
    let option1 = document.getElementById("question3-a-1");
    option1.classList.remove("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.add("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.remove("dis_none");

}

document.getElementById("q3-2").onclick = function () {
    let option1 = document.getElementById("question3-a-1");
    option1.classList.remove("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.add("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.remove("dis_none");
}

document.getElementById("q3-3").onclick = function () {
    let option1 = document.getElementById("question3-a-1");
    option1.classList.add("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.remove("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.add("dis_none");
}

document.getElementById("q3-4").onclick = function () {
    let option1 = document.getElementById("question3-a-1");
    option1.classList.add("dis_none");
    let option2 = document.getElementById("question3-b-1");
    option2.classList.remove("dis_none");
    let option3 = document.getElementById("question3-a-2");
    option3.classList.add("dis_none");
}

document.getElementById("resultbtn").onclick = function () {
    var waterAmount = document.getElementById('q2-1-ml').value / 1000;
    var answers = document.getElementsByName(`q3`);
    var waterType = "";
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            waterType = parseInt(answers[i].value)
        }
    }

    var score = 0;
    if (waterType <= 1) {
        // 생수
        var co2Value = document.getElementById('q3-a-1-1').value;
        var labelExists = document.getElementsByName(`q3-a-2`);
        let isLabel = labelExists[0].checked ? true : false;
        score = waterAmount * co2Value
        if (isLabel) {
            score += waterType == 0 ? 66 : 32
        }
    }
    else {
        if (waterType == 2) {
            score += waterAmount * 0.512
        }
        else if (waterType == 3) {
            score += waterAmount * 210
        }
        var bottleType = document.getElementsByName('q3-b');
        if (bottleType[0].checked) {
            score += 12.04
        }
        else if (bottleType[2].checked) {
            score += 0.71
        }
    }
    window.location = `/calculator_result/${parseInt(score)}`;
}