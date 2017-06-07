//To make sure the visualization don't repeat on the same page
var singleInstance = 0;

//Get the user from the spinner
function getUser() {
    var id = document.getElementById("partID");
    var user = id.options[id.selectedIndex].value;
    return user;
}

//Call the apropriate visualization depending on what vizualization is chosen from the radio buttons
function runVisualization(user, vizualizationChosen) {
    if (vizualizationChosen === "Small Multiple") {
        smallMultiple(user);
    }
    else if ((vizualizationChosen === "Stacked Bar Chart") && singleInstance === 0) {
        singleInstance = 1;
        barChart();
    }
    else if (vizualizationChosen === "Average Small Multiple") {
        avgSmallMultiple();
    }
    else if (vizualizationChosen === "Stream Graph") {
        streamGraph(user);
    }
    else if (vizualizationChosen === "Heat Map") {
        heatMap(user);
    }
}

// Call the Small Multiple Visualization file and pass in the user
function smallMultiple(user) {
    window.localStorage.setItem("user", user);
    window.location.href = "smallMultiple.html";
}


//Call the STACKED BAR CHART Visualization file and pass in the user
function barChart() {
    var fileName = "csv/barChartData.csv";
    window.localStorage.setItem("fileName", fileName);
    window.location.href = "barChart.html";
}


//Call the AVERAGE SMALL MULTIPLE Visualization file and pass in the user
function avgSmallMultiple() {
    var fileName = "csv/avgMultipleData.csv";
    window.localStorage.setItem("fileName", fileName);
    window.location.href = "avgSmallMultiple.html";
}

//Call the STREAM GRAPH Visualization file and pass in the user
function streamGraph(user) {
    window.localStorage.setItem("user", user);
    window.location.href = "streamGraph.html";
}

//Call the HEAT MAP Visualization file and pass in the user
function heatMap(user) {
    window.localStorage.setItem("user", user);
    window.location.href = "heatMap.html";
}