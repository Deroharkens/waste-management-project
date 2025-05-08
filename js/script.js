document.getElementById('reportForm').addEventListener('submit', function(e) {
e.preventDefault();
const location = document.getElementById('location').value;
const description = document.getElementById('description').value;
let reports = JSON.parse(localStorage.getItem('reports') || '[]');
reports.push({ location, description });
localStorage.setItem('reports', JSON.stringify(reports));
alert('Report submitted!');
});