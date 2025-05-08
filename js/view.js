document.addEventListener("DOMContentLoaded", function() {
  const reports = JSON.parse(localStorage.getItem("wasteReports")) || [];
  const container = document.getElementById("reportsContainer");

  if (reports.length === 0) {
      container.innerHTML = "<p>No reports found.</p>";
      return;
  }

  reports.forEach(report => {
      const reportDiv = document.createElement("div");
      reportDiv.className = "report-card";
      reportDiv.innerHTML = `
          <h3>${report.location}</h3>
          <p><strong>Issue:</strong> ${report.issueType.replace("_", " ")}</p>
          <p><strong>Description:</strong> ${report.description}</p>
          <p><strong>Date:</strong> ${report.date}</p>
      `;
      container.appendChild(reportDiv);
  });
});