window.onload = () => {
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
    }, 1500);
  
    populateAtomicMass();
    populateMolecularMass();
    populateElementInfo();
    populatePeriodicTable();
  };
  
  function showScreen(screenId) {
    // Hide all screens and show the selected one
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
  }
  
  function populateAtomicMass() {
    const grid = document.getElementById('atomic-mass-grid');
    elements.forEach(el => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${el.name} (${el.symbol})</h3>
        <p>Atomic Mass: ${el.atomicMass}</p>
      `;
      grid.appendChild(card);
    });
  }
  
  function populateMolecularMass() {
    const grid = document.getElementById('molecular-mass-grid');
    molecules.forEach(molecule => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${molecule.name}</h3>
        <p>Formula: ${molecule.formula}</p>
        <p>Molecular Mass: ${molecule.molecularMass}</p>
      `;
      grid.appendChild(card);
    });
  }
  
  function populateElementInfo() {
    const grid = document.getElementById('element-info-grid');
    elements.forEach(el => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${el.name} (${el.symbol})</h3>
        <p>Atomic Number: ${el.number}</p>
        <p>Category: ${el.category}</p>
        <p>${el.info}</p>
      `;
      grid.appendChild(card);
    });
  }
  
  function populatePeriodicTable() {
    const grid = document.getElementById('periodic-grid');
    elements.forEach(el => {
      const box = document.createElement('div');
      box.className = 'element-box';
      box.innerHTML = `
        <div class="element-symbol">${el.symbol}</div>
        <div class="element-name">${el.name}</div>
        <div class="atomic-number">${el.number}</div>
      `;
      grid.appendChild(box);

    });
  }
  
  function displayElementInfo(element) {
    const infoGrid = document.getElementById('element-info-grid');
    infoGrid.innerHTML = `
      <h3>${element.name} (${element.symbol})</h3>
      <p>Atomic Number: ${element.number}</p>
      <p>Category: ${element.category}</p>
      <p>${element.info}</p>
      <p>Atomic Mass: ${element.atomicMass}</p>
    `;
  }
  
  function searchElement() {
    const input = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.grid .card').forEach(card => {
      if (card.innerText.toLowerCase().includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  