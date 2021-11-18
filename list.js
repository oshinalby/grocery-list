let tableBody = document.querySelector("#table-list > tbody");

function ajaxTable () {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET","ajax.json",true);

    xhttp.onload = () => {
        try{
            const json = JSON.parse(xhttp.responseText);
            populateTable(json);
            document.getElementById("s1").style.visibility="hidden";
        }catch(e){
            console.warn("Could not load list items!!!");
        }
    };

    xhttp.send();
}
function populateTable(json) {
    //clears out existing tabledata
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }

    //populate table
    json.forEach((row) => {
        const tr = document.createElement("tr");

       row.forEach((cell) => {
           const td = document.createElement("td");
           td.textContent = cell;
           tr.appendChild(td);
       });

       tableBody.appendChild(tr);
    });
}



button.addEventListener("click", () => {
    ajaxTable(); 
    tableVisible();
});

function tableVisible() {
    document.getElementById("section").style.visibility = "visible";
}