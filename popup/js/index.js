function checkApiKey() {
    let response = this.responseText;
    let parsedJSON = JSON.parse(response);
    console.log(parsedJSON[0]["key"]);
    if (parsedJSON[0]["key"] != '') {
        window.location.replace("dashboard.html");
    }
    else {
        window.location.replace("welcome.html");
    }
};

let oReq = new XMLHttpRequest();
oReq.onload = checkApiKey;
oReq.open("get", "apiKey.json", true);
oReq.send();
