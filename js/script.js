document.getElementById("wasteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const issueType = document.getElementById("issueType").value;
    const description = document.getElementById("description").value;

    const report = {
        location,
        issueType,
        description,
        date: new Date().toLocaleString()
    };

    // Save to Local Storage
    let reports = JSON.parse(localStorage.getItem("wasteReports")) || [];
    reports.push(report);
    localStorage.setItem("wasteReports", JSON.stringify(reports));

    alert("Report submitted successfully!");
    document.getElementById("wasteForm").reset();
});