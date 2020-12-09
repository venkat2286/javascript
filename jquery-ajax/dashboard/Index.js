const isApiCall = false;
const serviceEndPoint = "http://localhost:3000/";
//http://localhost:8080/connections/AGWCDEV
//http://localhost:8080/connections/AGWCQA
const connectionsStatus = () => {
    var envrionment = document.getElementById("environment").value;
    if (isApiCall) fetchConnectionStatusAPI(envrionment);
    else fetchConnectionStatusLocal(envrionment);
}

const fetchConnectionStatusAPI = (envrionment) => {
    let serviceURL=serviceEndPoint+envrionment;
    fetch(serviceURL).then(
        res => {
            res.json().then(
                data => {
                    //   console.log(data);
                    buildTable(data)
                }
            )
        }
    )

}

const fetchConnectionStatusLocal = (environment) => {

    const dataSource = "data" + environment;
    if (environment == 'AGWCDEV') {
        let connectionStatus = JSON.parse(dataAGWCDEV);
        buildTable(connectionStatus);
    } else if (environment == 'AGWCQA') {
        let connectionStatus = JSON.parse(dataAGWCQA);
        buildTable(connectionStatus);
    } else if (environment == 'AGWCQA1') {
        let connectionStatus = JSON.parse(dataAGWCQA1);
        buildTable(connectionStatus);
    } else if (environment == 'AGWCQA2') {
        let connectionStatus = JSON.parse(dataAGWCQA2);
        buildTable(connectionStatus);
    } else if (environment == 'AGWCQA3') {
        let connectionStatus = JSON.parse(dataAGWCQA3);
        buildTable(connectionStatus);
    } else if (environment == 'AGWCQA4') {
        let connectionStatus = JSON.parse(dataAGWCQA4);
        buildTable(connectionStatus);
    } else if (environment == 'AGWCPROD') {
        let connectionStatus = JSON.parse(dataAGWCPROD);
        buildTable(connectionStatus);
    }


}

const buildTable = (data) => {
    var returnTable = "<table class='dashboard'><thead><th>TARGET SYSTEM</th><th>STATUS</th><th>CONTACT</th></thead></tbody>";

    data.forEach((connectionStatus) => {
        returnTable += "<tr>" + "<td>" + connectionStatus.target + "</td>" + statusSymbol(connectionStatus.success) + "<td>" + "ServiceNow-WindowchillSupport@johndeere.com" + "</td>" + "</tr>";
    })
    returnTable += "</table>";
    document.getElementById("connectionsStatus").innerHTML = returnTable;
}
const statusSymbol = (status) => {
    return (status == 'true' ? "<td class='success' align=\"center\"><img src=\"images/success.jpg\" width=\"30\" height=\"30\"></td>" : "<td class='failure' align=\"center\"><img src=\"images/failed.jpg\" width=\"30\" height=\"30\"></td>");
}


dataAGWCDEV = '[{"target" : "SAP_PAG(CAG410)", "success" : "true"},{"target" : "SAP_PA2(CA2410)", "success" : "true"},{"target" : "SAP_PAA(CAG410)", "success" : "false"}]';
dataAGWCQA = '[{"target" : "SAP_PAG(QAG410)", "success" : "true"},{"target" : "SAP_PA2(QA2410)", "success" : "false"},{"target" : "SAP_PAA(QAG410)", "success" : "true"}]';
dataAGWCQA1 = '[{"target" : "SAP_PAG(QAG410)", "success" : "true"},{"target" : "SAP_PA2(QA2410)", "success" : "true"},{"target" : "SAP_PAA(QAG410)", "success" : "false"}]';
dataAGWCQA2 = '[{"target" : "SAP_PAG(QAG410)", "success" : "false"},{"target" : "SAP_PA2(QA2410)", "success" : "false"},{"target" : "SAP_PAA(QAG410)", "success" : "true"}]';
dataAGWCQA3 = '[{"target" : "SAP_PAG(QAG410)", "success" : "true"},{"target" : "SAP_PA2(QA2410)", "success" : "false"},{"target" : "SAP_PAA(QAG410)", "success" : "false"}]';
dataAGWCQA4 = '[{"target" : "SAP_PAG(QAG410)", "success" : "false"},{"target" : "SAP_PA2(QA2410)", "success" : "false"},{"target" : "SAP_PAA(QAG410)", "success" : "true"}]';
dataAGWCPROD = '[{"target" : "SAP_PAG(QAG410)", "success" : "true"},{"target" : "SAP_PA2(QA2410)", "success" : "true"},{"target" : "SAP_PAA(QAG410)", "success" : "false"}]';




