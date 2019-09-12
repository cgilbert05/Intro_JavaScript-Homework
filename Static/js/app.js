// from data.js
var tableData = data;

var inputElement = d3.select("#datetime");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

for (const sighting of tableData) {
    var row = tbody.append("tr");   
    
    Object.entries(sighting).forEach(function ([key, value]) {
        row.append("td").text(value);
    })    
};

button.on("click", function() {
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    tbody.html("");

    for (const sighting of filteredData) {
        var row = tbody.append("tr");   
        
        Object.entries(sighting).forEach(function ([key, value]) {
            row.append("td").text(value);
        })    
    };
    
})













