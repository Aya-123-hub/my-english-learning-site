fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cards-container'); // ✅ use existing div

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${item.expression}</h2>
        <p>${item.arabic}</p>
        <p>${item.indonesian}</p>
        <p><i>${item.example}</i></p>
      `;
      container.appendChild(card);
    });
  });


