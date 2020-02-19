function reqListener() {
  let response = this.responseText;
  let parsedJSON = JSON.parse(response);
  printData(parsedJSON);
  //let strJSON = JSON.stringify(parsedJSON, null, 4);
}

function printData(data) {
  for (var i = 0; i < data.length; i++) {
    document.getElementById("research").innerHTML +=
      "<tr><td>N°" +
      data[i]["id"] +
      "</td><td>" +
      data[i]["title"] +
      '</td><td><a href=# class="waves-effect waves-light btn">Explore</a></td></tr>';
    let strJSON = JSON.stringify(data[i]["id"], null, 4);
    console.log(strJSON);
  }
}

let oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "research.json", true);
oReq.send();
