window.onload = function WindowLoad(event) {
    let url = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    let result = url.substring(url.indexOf('=')+1, url.length);
    console.log(result);
    document.getElementById("final_score").innerHTML = `오늘의 환경 점수는 ${result}점입니다.`;

    let intResult = parseInt(result);
    var treeHtml = "";
    for(var i=0; i<intResult; i++){
        treeHtml += `<img src="/static/image/tree.png" width="64" height="64">`;
    }
    document.getElementById("trees").innerHTML = treeHtml;
}