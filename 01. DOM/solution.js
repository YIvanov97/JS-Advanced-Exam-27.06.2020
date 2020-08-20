function solve() {
    document.querySelector('#container > button').addEventListener('click', onAdd);
    
    let firstSection = document.querySelector('#adoption > ul');
    let secondSection = document.querySelector('#adopted > ul');
    let allInputs = document.querySelectorAll('#container > input');
    let nameInput = Array.from(allInputs)[0]
    let yearInput = Array.from(allInputs)[1]
    let kindInput = Array.from(allInputs)[2]
    let ownerInput = Array.from(allInputs)[3]

    let list = document.createElement('li');

    let newInput = document.createElement('input');
        newInput.setAttribute('placeholder', 'Enter your names');

    function onAdd(e) {
        if (nameInput && nameInput.value && yearInput && yearInput.value && ownerInput && ownerInput.value && kindInput && kindInput.value) {
            if (!Number(yearInput.value)) {
                const error = document.createElement('text')
                error.textContent = 'Age must be a number.';
                error.setAttribute('id', 'age-error');
                yearInput.appendChild(error);
                return;
            }
            
            let par = document.createElement('p');

            par.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${yearInput.value}</strong> year old <strong>${kindInput.value}</strong>`
            
            let ownerSection = document.createElement('span');
            ownerSection.textContent = `Owner: ${ownerInput.value}`;

            let contactButton = document.createElement('button');
            contactButton.textContent = 'Contact with owner';
            contactButton.addEventListener('click', () => {
                let newDiv = document.createElement('div');

                contactButton.textContent = 'Yes! I take it!';
                contactButton.addEventListener('click', onTakeIt);

                newDiv.appendChild(newInput);
                newDiv.appendChild(contactButton);
                list.appendChild(newDiv);

                e.preventDefault();
            });

            list.appendChild(par);
            list.appendChild(ownerSection);
            list.appendChild(contactButton);
            firstSection.appendChild(list);
        }
        e.preventDefault();
    }

    function onTakeIt(e) {
        if (nameInput.value) {
            let newList = document.createElement('li');

            let par = document.createElement('p');

            par.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${yearInput.value}</strong> year old <strong>${kindInput.value}</strong>`

            let ownerSection = document.createElement('span');
            ownerSection.textContent = `New Owner: ${newInput.value}`;

            let checkedButton = document.createElement('button');
            checkedButton.textContent = 'Checked';
            checkedButton.addEventListener('click', onChecked);

            newList.appendChild(par);
            newList.appendChild(ownerSection);
            newList.appendChild(checkedButton);
            secondSection.appendChild(newList);
        }
    }

    function onChecked(e) {
        e.target.parentElement.parentElement.remove();
    }
}