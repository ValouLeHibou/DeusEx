fs = require('fs');
window.addEventListener("load",function() {
    document.getElementById('form-key').addEventListener("submit",function(e) {
        e.preventDefault(); // before the code
        const newApiKey = document.getElementById('form-key').elements.apiKey.value;
        let parsedJSON = JSON.parse(fs.readFileSync('apiKey.json'));
        parsedJSON[0]["key"] != newApiKey;
        fs.writeFile('apiKey.json', parsedJSON);
        window.location.replace("dashboard.html");
    });
});
document.cookie = "username=DeusEx User; expired=1893459661; key=toto";
