const container = document.getElementById('reportsContainer');
const reports = JSON.parse(localStorage.getItem('reports') || '[]');
reports.forEach(r => {
  const div = document.createElement('div');
  div.textContent = `Location: ${r.location}, Description: ${r.description}`;
  container.appendChild(div);
});