window.onload = function WindowLoad(event) {
    /*var qs = require('querystring');
    console.log(qs);
    var v1 = qs.get("result");
    console.log(v1);*/

    let url = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
    let result = url.substring(url.indexOf('=')+1, url.length);
    console.log(result);
    document.getElementById("final_score").innerHTML = `${result}점`;

    let intResult = parseInt(result);
    var treeHtml = "";
    for(var i=0; i<intResult; i++){
        treeHtml += `<img src="/static/image/tree.png" width="64" height="64">`;
    }
    document.getElementById("trees").innerHTML = treeHtml;
}