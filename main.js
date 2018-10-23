

function renderStockTable() {
 		let table = "<table>";
 		let header = prepareTableHeader(["Název", "Kategorie", "Jednotka", "Cena"]);
 		table += header;

 		for (i = 0; i < stock.length; i++) {
 			table += prepareTableRow(i);
 		}
 	
 		table += "</table>";

 		document.getElementById("table-section").innerHTML = table;
 }

 function prepareTableHeader(titles) {
 	 	let header = "<tr>";

 		for (let i = 0; i < 4 ; i++){
 			header += "<th>" + titles[i] + "</th>"
 		}

 		header += "</tr>";
 		
 		return header;
 }

 function prepareTableRow(i) {
  		let row = "<tr>";
 		row += "<td>" + stock[i].name + "</td>";
 		row += "<td>" + stock[i].category + "</td>";
 		row += "<td>" + stock[i].price + "</td>";
 		row += "<td>" + stock[i].unit + "</td>";
 		row += "</tr>";

 		return row;
 }

function renderCategorySelect(categories){
	let selectCategories = "<select>" +  "<option>" + "zvolte kategorii" + "</option>";
		for(i = 0; i < categories.length; i++){
		selectCategories += "<option " + "value = " + categories[i] +  ">" + categories[i] + "</option>";
		}

	
	selectCategories += "</select>"

	document.getElementById("category-select-section").innerHTML = selectCategories
}

function getCategories(itemlist){
	let categoriesGet = [];
	for (let i = 0; i < stock.length; i++){
		
		categoriesGet.push(stock[i].category);
 	}
 let uniqueCategoriesGet = categoriesGet.filter(function(item, pos) {
    return categoriesGet.indexOf(item) == pos;
})	
return uniqueCategoriesGet
}


// nasledujúci príkaz nemeň, ale inak si rob v celom súbore, čo chceš =)
window.onload = () => {
    renderStockTable(stock);
    renderCategorySelect(getCategories(stock));
}

