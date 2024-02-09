'use strict';
const div = Document.getElementById('user');

function getUsers () {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://reqres.in/api/unknown');

    request.addEventListener('load', function() {
        const textResult = this.responseText;
        const parsedresult = JSON.parse(textResult);
        const ulElement = document.createElement('ul');
        
        


        parsedresult.data.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} ${item.Color}`;
            ulElement.appendChild(li);

            div.appendChild(ulElement);
        });
        
    });

    request.send();
}

getUsers();