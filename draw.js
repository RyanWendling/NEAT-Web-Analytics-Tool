var singleInstance = 0;

function getUser() {
    var id = document.getElementById("partID");
    var user = id.options[id.selectedIndex].value;
    return user;
}

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

// Small Multiple
function smallMultiple(user) {
    window.localStorage.setItem("user", user);
    window.location.href = "smallMultiple.html";
}


//STACKED BAR CHART
function barChart() {
    var fileName = "csv/barChartData.csv";
    window.localStorage.setItem("fileName", fileName);
    window.location.href = "barChart.html";
}


//AVERAGE SMALL MULTIPLE
function avgSmallMultiple() {
    var fileName = "csv/avgMultipleData.csv";
    window.localStorage.setItem("fileName", fileName);
    window.location.href = "avgSmallMultiple.html";
}

//STREAM GRAPH
function streamGraph(user) {
    window.localStorage.setItem("user", user);
    window.location.href = "streamGraph.html";
}

//HEAT MAP
function heatMap(user) {
    window.localStorage.setItem("user", user);
    window.location.href = "heatMap.html";
}