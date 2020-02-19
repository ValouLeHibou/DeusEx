function reqListener() {
    let response = this.responseText;
    let parsedJSON = JSON.parse(response);
    printData(parsedJSON);
    //let strJSON = JSON.stringify(parsedJSON, null, 4);
}

function printData(data) {
    let lastId = '';
    for (var i = 0; i < data.length; i++) {
        lastId = data[i]["id"];
    }
    console.log(lastId);
    document.getElementById("id").value = lastId + 1;
}

let oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "research.json", true);
oReq.send();

window.addEventListener("load",function() {
    document.getElementById('form-explorer').addEventListener("submit",function(e) {
        e.preventDefault(); // before the code
        const id = document.getElementById('form-explorer').elements.id.value;
        const title = document.getElementById('form-explorer').elements.title.value;
        const keyword = document.getElementById('form-explorer').elements.keyword.value;
        const schedule = document.getElementById('form-explorer').elements.schedule.value;
        console.log(title, keyword, schedule);
        window.location.replace("dashboard.html");
    });
});
