document.getElementById('fetch-fact').addEventListener('click', getCatFact);

function getCatFact() {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      document.getElementById('cat-fact').textContent = data.fact;
    })
    .catch(error => console.error('Error fetching cat fact:', error));
}
