/**
 * a Comment
 */
"use strict";
(

    function () {
    let url;
    console.log("All ready");
    url = "data/schoollist.json";
    fetch(url)
        .then((response) => {
        return response.json();
    })
        .then((myJson1) => {
            console.log(myJson1);
            var table = document.getElementById("table1");
            var data = myJson1.Kommuner;
            for (var i = 0; i < data.length; i++) {
                var row = table.insertRow(table.rows.length);
                var c1 = row.insertCell(0);
                c1.innerHTML = data[i].Kommunkod;
                var c2 = row.insertCell(1);
                c2.innerHTML = data[i].Namn;
                var c3 = row.insertCell(2);
                c3.innerHTML = "enter";
                row.addEventListener("click",function () {
                    getColumnDetail(this);
                })


            }
        });

})();
function getColumnDetail(column) {
    column.style.color = "blue"; //将被点击的单元格设置为蓝色
    let url = "data/"+column.cells[0].innerHTML+".json";
    alert(url); //弹出被点单元格里的内容
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            var table = document.getElementById("table2");
            var rows = table.rows;
            var q = rows.length;
            for(var i=0; i<q;i++)
            {
                removeRow(rows[0]);
            }
            alert("clear");

            var data = myJson.Skolenheter;
            for (var i = 0; i < data.length; i++) {
                var row = table.insertRow(table.rows.length);
                var c1 = row.insertCell(0);
                c1.innerHTML = data[i].Skolenhetskod;
                var c2 = row.insertCell(1);
                c2.innerHTML = data[i].Skolenhetsnamn;
                var c3 = row.insertCell(2);
                c3.innerHTML = data[i].Kommunkod;
                var c4 = row.insertCell(3);
                c4.innerHTML= data[i].PeOrgNr;

            }
        })
}


function removeRow(r)
{
    var root = r.parentNode;
    var allRows = root.getElementsByTagName('tr');
    if(allRows.length > 3){
        root.removeChild(r);
    }
}