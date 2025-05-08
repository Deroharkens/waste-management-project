const stats = document.getElementById('stats');
const reports = JSON.parse(localStorage.getItem('reports') || '[]');
stats.textContent = `Total Reports: ${reports.length}`;