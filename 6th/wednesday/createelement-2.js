const toremove = document.getElementsByTagName('li')[0];
const removeFrom= document.getElementsByTagName('ul')[0];

removeFrom.removeChild(toremove);

const planetData = [
    {category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    }];

for (let i = 0; i < planetData.length; i++){
    if (planetData[i].asteroid === true){
        let item = document.createElement('li');
        let text = document.createTextNode(planetData[i].content)
        item.appendChild(text);
        item.setAttribute('category',planetData[i].category);
        document.getElementsByTagName('ul')[0].appendChild(item);
    }
}
console.log(document.getElementsByTagName('li'));