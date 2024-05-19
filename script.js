let fields = [
    'circle',
    null,
    null,
    null,
    null,
    null,
    'cross',
    null,
    null,
];


function init() {
    render();
}


function render() {
    const contentDiv = document.getElementById('content');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    let cellIndex = 0;
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            cell.textContent = fields[cellIndex] === 'circle' ? 'O' : fields[cellIndex] === 'cross' ? 'X' : '';
            row.appendChild(cell);
            cellIndex++;
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    contentDiv.innerHTML = ''; // Clear previous content
    contentDiv.appendChild(table);
}

