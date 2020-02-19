function reqListener() {
  let response = this.responseText;
  let parsedJSON = JSON.parse(response);
  printData(parsedJSON);
  //let strJSON = JSON.stringify(parsedJSON, null, 4);
}

function printData(data) {
  for (var i = 0; i < data.length; i++) {
    document.getElementById("research").innerHTML +=
      "<tr>" +
        "<td>N°" +
          data[i]["id"] +
        "</td>" +
        "<td>" +
          data[i]["title"] +
        '</td>' +
        '<td>' +
          '<a href=# class="waves-effect waves-light btn">Explore</a>' +
        '</td>' +
        '<td>' +
          '<a href=# class="waves-effect waves-light btn red">X</a>' +
        '</td>' +
      '</tr>';
    //let strJSON = JSON.stringify(data[i]["id"], null, 4);
    //console.log(strJSON);
  }
}

let oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("GET", "research.json", true);
oReq.send();

var request = new XMLHttpRequest()
request.open('GET', 'https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyDZdvjyFFyOPpXtTIC4tmKc8j_d5lC0Xdo&cx=006919893845713215134:e8qxrvdnxr2&q=yolostart=1&num=10', true)
request.onload = function() {

}

// https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyDZdvjyFFyOPpXtTIC4tmKc8j_d5lC0Xdo&cx=006919893845713215134:e8qxrvdnxr2&q=yolo&start=2&num=10
// Explication de l'URL :
// https://www.googleapis.com/customsearch/v1/siterestrict?
// key = KEY_ID
// cx = Google custom search engine Id
// q = query keywords
// start = page number (max 10 pages)
// num = number of results in this page

request.send()
