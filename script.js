fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.createElement('div');
    container.className = 'container';

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="expression">${item.expression}</div>
        <div class="translation">Arabic: ${item.arabic}</div>
        <div class="translation">Indonesian: ${item.indonesian}</div>
        <div class="example">Example: ${item.example}</div>
      `;
      container.appendChild(card);
    });

    document.body.appendChild(container);
  });
