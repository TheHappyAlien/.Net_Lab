const button = document.getElementById('table-prompt-button');
button.onclick = function() {
    let n = window.prompt("Side length of the table (between 5 and 20):", 5);
    if (n >= 5 && n <= 20)
    {
        createGrid(n);
    }
    else
    {
        const text = document.createElement('p');
        text.innerHTML = 'Wrong side length provided: (' + n + ')<br>Defaulting to a 5x5 table.';
        text.id = 'wrong-side-length-info';
        createGrid(5);
        document.getElementById('table-div').appendChild(text);
    }   
}

function createGrid(n) {
    let oldTab = document.getElementsByClassName('multiplication-tab')[0];
    if (oldTab != undefined)
    {
        oldTab.remove();
    }
    let text = document.getElementById('wrong-side-length-info');
    if (text != undefined)
    {
        text.remove();
    }
    
    let columns = [n];
    let rows = [n];
    
    n++;

    for (let i = 0; i < n; i++) {
       columns[i] = Math.max(Math.floor(Math.random()*100), 1);
    }

    for (let i = 0; i < n; i++) {
        rows[i] = Math.max(Math.floor(Math.random()*100), 1);
    }

    const table = document.createElement('table');
    table.classList.add('multiplication-tab');
    
    for (let i = 0; i < n; i++) {
        const row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 0; j < n; j++){
            if (i == 0 && j == 0) {
                const cell = document.createElement('th');
                cell.innerHTML = '';
                row.appendChild(cell);
            }
            else if (i == 0) { 
                const cell = document.createElement('th');
                cell.innerHTML = columns[j - 1];
                row.appendChild(cell);
            }
            else if (j == 0) { 
                const cell = document.createElement('th');
                cell.innerHTML = rows[i - 1];
                row.appendChild(cell);
            }
            else {
                const cell = document.createElement('td');
                cell.innerHTML = columns[j - 1] * rows[i - 1];
                if (cell.innerHTML % 3 == 0) {
                    cell.classList.add('mod-zero');
                }
                else if (cell.innerHTML % 3 == 1) {
                    cell.classList.add('mod-one');
                }
                else {
                    cell.classList.add('mod-two');
                }
                row.appendChild(cell);
            }
        }
    }
    document.getElementById('table-div').appendChild(table);
}