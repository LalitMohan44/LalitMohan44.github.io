var request = new XMLHttpRequest();

request.open("GET", 'https://api.github.com/users/LalitMohan44/repos', true);
request.responseType = 'json';
request.send();

request.onload = function() {
    var data = request.response;
    repo(data);
}

function repo(data) {
    var div = document.getElementById("cont");
    document.getElementById("reps").addEventListener("click", myFunction);

    function myFunction() {
        if (div.innerHTML == "") {
            var arrHead = new Array();
            arrHead = ['Name', 'Link', 'Discription'];

            var repTable = document.createElement('TABLE');

            var tr = document.createElement('tr');

            for (var h = 0; h < arrHead.length; h++) {
                var th = document.createElement('th');
                th.innerHTML = arrHead[h];
                tr.appendChild(th);
            }
            repTable.appendChild(tr);
            for (var i = 0; i < data.length; i++) {
                var tra = document.createElement('tr');
                tra.innerHTML += `<td>${data[i]["name"]}</td><td><a href=${data[i]["html_url"]} target="_blank">${data[i]["html_url"]}</a></td><td>${data[i]["description"]}</td></tr>`
                repTable.appendChild(tra);
            }

            div.appendChild(repTable);

        } else {
            div.innerHTML = "";
        }
    }


}