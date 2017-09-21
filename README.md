# NEAT-Web-Analytics-Tool
Year-long senior capstone course where we published research papers, wrote user documentation and collaborated 
to build a website that invoked D3 data visualizations to analyze users’ smoking habits. Executed SQL queries to 
get data from a UMN database. Coded in HTML, CSS and JavaScript.


README:

The web analytics tool only works on Firefox for the moment.

Additional documentation for NEAT web analytics tool. Note that each visualization has additional comments within their respective HTML files. Each visualization is also modified from existing d3 example code found on the internet.

The github repo containing all the code can be cloned at: https://github.com/destab/NEAT-Web-Analytics-Tool.git

All of the visualizations are in separate html files. The html code in these files are the same, but the javascript code in the <script> elements are different. All of these files call draw.js, which is a javascript file that allows the transition between these files. Home.html is the first page users will visit and the page that is rendered when users clear any visualization. The css file: homecss, is the file used to customize all of the html files.

We are currently using csv files to generate the visualizations. All of the csv files are in the folder called csv. The average small multiple and the stacked bar chart visualization are comparative so they only need one csv file. The rest of the visualizations depend on the selected user, so there is one csv file per user. Inside the csv folder there are three other folders holding these csv files: heatMapData, smallMultipleData and streamGraphData.

Currently we are using different versions of d3 throughout the project. Small multiple, average small multiple, and stacked bar chart all use the latest version of d3 (version 4). Heat map currently uses version 3 and stream graph uses version 2 of d3. Since all of the visualizations are in different files, it is currently not causing a problem.

Queries we used from SQLite:


Query for average small multiples:
SELECT intParticipantID, avg(dblStressIntensity),  strftime('%H', time(strDateTime)) AS hour, intSession FROM tblInferenceLog
WHERE (intParticipantID BETWEEN 6000 AND 7000) AND intSession > 7
GROUP BY hour, intParticipantID
ORDER BY intParticipantID

Query for stacked bar chart:
SELECT intParticipantID, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 11 AND intParticipantID = 6001) as day1, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 12 AND intParticipantID = 6001) as day2, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 13 AND intParticipantID = 6001) as day3, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 14 AND intParticipantID = 6001) as day4 FROM tblInferenceLog
WHERE intParticipantID = 6001
GROUP BY intParticipantID
UNION
SELECT intParticipantID, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 11 AND intParticipantID = 6000) as day1, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 12 AND intParticipantID = 6000) as day2, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 13 AND intParticipantID = 6000) as day3, (SELECT avg(dblStressIntensity) FROM tblInferenceLog WHERE intSession = 14 AND intParticipantID = 6000) as day4 FROM tblInferenceLog
WHERE intParticipantID = 6000
GROUP BY intParticipantID
UNION
… repeat as needed for participants you want to include

Query for stream graph:
SELECT substr(strDateTime, 1, 10) AS date, strftime('%H', time(strDateTime)) AS hour, avg(dblStressIntensity) AS stress
FROM tblInferenceLog
WHERE intParticipantID = 6000
GROUP BY substr(strDateTime, 1, 11), hour, intParticipantID
ORDER BY intParticipantID
NOTE: Change the participant ID as needed (currently 6000)

Query for detailed small multiple:
SELECT substr(strDateTime, 1, 10) AS date, substr(strDateTime, 12, 19) AS time, dblStressIntensity AS stress
FROM tblInferenceLog
WHERE intParticipantID = 6000
NOTE: Change the participant ID as needed (currently 6000)

Query for heatmap:
SELECT intParticipantID as participant, avg(dblStressIntensity) as stress, substr(strDateTime,1,11) as date, strftime('%H', time(strDateTime)) AS hour, intSession FROM tblInferenceLog
WHERE participant = '6008'
GROUP BY hour, participant
NOTE: Change the participant ID as needed (currently 6008)
