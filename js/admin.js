document.addEventListener("DOMContentLoaded", function() {
    const reports = JSON.parse(localStorage.getItem("wasteReports")) || [];
    document.getElementById("totalReports").textContent = reports.length;
    document.getElementById("pendingActions").textContent = reports.length; // Mock data
});