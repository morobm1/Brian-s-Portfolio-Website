const company = document.querySelector('.companyname');
const pDate = document.querySelector('.purchaseDate');
const dAmount = document.querySelector('.amountEnter');
const submitButton = document.querySelector('.submitButton')
const expenseName = document.querySelector('.name')
const expenseDate = document.querySelector('.date')
const expenseAmount = document.querySelector('.amount')

submitButton.addEventListener('click', addExpense)

function addExpense(event){
    event.preventDefault();


    const enterName = document.createElement('tr');
    enterName.classList.add('expenseGroup');

        const nameNew = document.createElement('td');
        nameNew.innerText = company.value;
        nameNew.classList.add('lName');
        enterName.appendChild(nameNew);
        expenseName.appendChild(enterName);

    const enterDate = document.createElement('tr');
    enterDate.classList.add('expenseGroup');

        const nameDate = document.createElement('td');
        nameDate.innerText = pDate.value;
        nameDate.classList.add('lDate');
        enterDate.appendChild(nameDate);
        expenseDate.appendChild(enterDate);    

    const enterAmount = document.createElement('tr');
    enterAmount.classList.add('expenseGroup');

        const amountnew = document.createElement('td');
        amountnew.innerText = "$ " + dAmount.value;
        amountnew.classList.add('lAmount');
        enterAmount.appendChild(amountnew);
        expenseAmount.appendChild(enterAmount);  

}