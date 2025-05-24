const gridContainer = document.querySelector('#grid');
const createGridButton = document.querySelector('.controls #createGridButton');
const resetGridButton = document.querySelector('.controls #resetGridButton');
const toggleRandomColorsButton = document.querySelector('.controls #toggleRandomColorsButton');

let randomizeColors = false;
let hoverColor = '#000';

function getRGBARandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    hoverColor = `rgba(${r}, ${g}, ${b})`;
    return hoverColor;
}

function createGrid(size = 16) {
    if ( size > 100 ) {
        size = 100;
    }
    // Clear grid
    gridContainer.innerHTML = '';
    for ( let x = 0; x < size; x++ ) {
        const newRow = document.createElement("div");
        newRow.classList.add('row');

        gridContainer.appendChild(newRow);
        for ( let i = 0; i < size; i++ ) {
            const newColumn = document.createElement("div");
            newColumn.classList.add('column');
            newColumn.addEventListener('mouseover', () => {
                newColumn.style.backgroundColor = randomizeColors ? getRGBARandomColor() : '#000';
                if ( ! randomizeColors ) {
                    let opacity = parseFloat(newColumn.style.opacity) || 0;
                    if ( opacity < 1 ) {
                        newColumn.style.opacity = opacity + 0.1;
                    }
                }
                console.log(newColumn.style.opacity);
            });

            newRow.appendChild(newColumn);
        }
    }
}

createGridButton.addEventListener('click', () => {
    const gridSize = document.querySelector('.controls #gridSize').value;
    createGrid(gridSize);
});

resetGridButton.addEventListener('click', () => {
    const gridSize = document.querySelector('.controls #gridSize').value;
    createGrid(gridSize);
})

toggleRandomColorsButton.addEventListener('click', () => {
    randomizeColors = ! randomizeColors;
});

createGrid();