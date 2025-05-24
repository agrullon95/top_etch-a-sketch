const gridContainer = document.querySelector('#grid');
const createGridButton = document.querySelector('.controls #createGridButton');

function createGrid(size = 16) {
    // Clear grid
    gridContainer.innerHTML = '';
    for ( let x = 0; x < size; x++ ) {
        const newRow = document.createElement("div");
        newRow.classList.add('row');

        gridContainer.appendChild(newRow);
        for ( let i = 0; i < size; i++ ) {
            const newColumn = document.createElement("div");
            newColumn.classList.add('column');

            newRow.appendChild(newColumn);
        }
    }
}
createGridButton.addEventListener('click', event => {
    const gridSize = document.querySelector('.controls #gridSize').value;

    createGrid(gridSize);
});

createGrid();