var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
$searchBtn.addEventListener("click", handleSearchButtonClick);


var $stateInput = document.querySelector("#state");
var $stateBtn = document.querySelector("#statesearch");
$stateBtn.addEventListener("click",handleStateButtonClick);

var $cityInput = document.querySelector("#city");
var $cityBtn = document.querySelector("#citysearch");
$cityBtn.addEventListener("click",handleCityButtonClick);

// var $countryInput = document.querySelector("#country");
// var $countryBtn = document.querySelector("#countrysearch");
// $countryBtn.addEventListener("click",handleCountryButtonClick);

var $shapeInput = document.querySelector("#shape");
var $shapeBtn = document.querySelector("#shapesearch");
$shapeBtn.addEventListener("click",handleShapeButtonClick);

// set ufoData to data initially

var ufoDataFiltered = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for(var i = 0 ; i < ufoDataFiltered.length; i++ ) {
        var ufo = ufoDataFiltered[i];
        var fields = Object.keys(ufo);
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = ufo[field];
        }
    }
}

function handleSearchButtonClick(){
    var filterDate = $dateInput.value.trim().toLowerCase();  
    ufoDataFiltered = dataSet.filter ( function(ufo){
        var ufoCountry = ufo.datetime.toLowerCase();
        return ufoCountry === filterDate; 
    });
    renderTable();
    }

function handleStateButtonClick(){
    var filterState = $stateInput.value.trim().toLowerCase();
    ufoDataFiltered = dataSet.filter(function(ufo){
        var ufoCountry = ufo.state.toLowerCase();
        return ufoCountry === filterState;
    });

    renderTable();
}

function handleCityButtonClick(){
    var filterCity = $cityInput.value.trim().toLowerCase();
    ufoDataFiltered = dataSet.filter(function(ufo){
        var ufoCountry = ufo.city.toLowerCase();
        return ufoCountry === filterCity;
    });

    renderTable();
}

// function handleCountryButtonClick(){
//     var filterCountry = $countryInput.value.trim().toLowerCase();
//     ufoDataFiltered = dataSet.filter(function(ufo){
//         var ufoCountry = ufo.country.toLowerCase();
//         return ufoCountry === filterCountry;
//     });

//     renderTable();
// }

function handleShapeButtonClick(){
    var filterShape = $shapeInput.value.trim().toLowerCase();
    ufoDataFiltered = dataSet.filter(function(ufo){
        var ufoCountry = ufo.shape.toLowerCase();
        return ufoCountry === filterShape;
    });

    renderTable();
}

renderTable();


    