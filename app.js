// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

function displayData(data){
data.forEach((info) => {
  var row = tbody.append("tr");
  Object.entries(info).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

}




displayData(tableData);

var button = d3.select("#filter-btn");

button.on("click", function() {
    tbody.text("")
    var dateInputText = d3.select("#datetime");
    var new_table1 = tableData.filter(info => info.datetime===dateInputText.property("value"));
    displayData(new_table1);
    var dateInputText = d3.select("#city");
    var new_table2 = tableData.filter(info => info.city===dateInputText.property("value"));  
    displayData(new_table2);
    var dateInputText = d3.select("#state");
    var new_table3 = tableData.filter(info => info.state===dateInputText.property("value"));
    displayData(new_table3);    
    var dateInputText = d3.select("#country");    
    var new_table4 = tableData.filter(info => info.country===dateInputText.property("value"));
    displayData(new_table4);
    var dateInputText = d3.select("#shape");
    var new_table5 = tableData.filter(info => info.shape===dateInputText.property("value"));
    displayData(new_table5);
});





