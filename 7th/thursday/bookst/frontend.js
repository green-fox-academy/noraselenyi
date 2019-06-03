// let url = 'http://localhost:3000/showall';
// const bks = new XMLHttpRequest();
// bks.open('GET', url, true);
// bks.send();

// bks.onload = data => {
//     const table = document.createElement('ul');
//     table.innerText = 'List of titles:'
//     let tolist = data.target.response.replace('[', '').replace(']', '');
//     let tadam = tolist.split(',')
//     for (let i = 0; i < tadam.length; i++){
//         const titles = document.createElement('li');
//         titles.innerText = tadam[i];
//         table.appendChild(titles);
//     }
//     document.getElementsByTagName('body')[0].appendChild(table);
// }


let url = 'http://localhost:3000/bookmast';
const bks = new XMLHttpRequest();
bks.open('GET', url, true);
bks.send();

bks.onload = data => {
    let table = document.createElement('table');
    table.setAttribute('style', "width:800px");

    let tadam = JSON.parse(data.target.response);
    
    let titlelist = ['Title', 'Author', 'Category',' Name of publisher', 'Price'];
    let titles = document.createElement('tr');
    for (let i = 0; i < titlelist.length; i++){
        let title = document.createElement('th');
        title.innerText = titlelist[i];
        titles.appendChild(title);
        table.appendChild(titles);
        document.getElementsByTagName('body')[0].appendChild(table);
    }
    
    for (let j = 0; j < tadam.length; j++){
        let columns = document.createElement('tr');
        let details = Object.values(tadam[j]);
        for (let i = 0; i < details.length; i++){
            let column = document.createElement('td');
            column.innerText = details[i];
            columns.appendChild(column);
            table.appendChild(columns);
            document.getElementsByTagName('body')[0].appendChild(table);
        }
    }
}

