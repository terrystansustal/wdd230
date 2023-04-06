const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const phoneNumber = document.querySelector('#phone');
const email = document.querySelector('#email');
const specialInstruction = document.querySelector('#special-instruction');
const outputArea = document.querySelector('#output');

// Get select elemennts from HTML
const select1 = document.querySelector("#fruit1");
const select2 = document.querySelector("#fruit2");
const select3 = document.querySelector("#fruit3");

const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let data;

async function getFruitData()
{
    const response = await fetch(url);
    data = await response.json(url);
    console.log(data);

    // Populate the select elements with fruits from JSON data
    data.forEach((fruit) => {
        // create option element
        const option1 = document.createElement('option');
        option1.value = fruit.name;
        option1.text = fruit.name;
        select1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = fruit.name;
        option2.text = fruit.name;
        select2.appendChild(option2);

        const option3 = document.createElement('option');
        option3.value = fruit.name;
        option3.text = fruit.name;
        select3.appendChild(option3);
    });
}

getFruitData();

const button = document.querySelector("#submitBtn");

button.addEventListener('click', (event) => {
    event.preventDefault();

    // Get current date for order
    const currentDate = new Date().toDateString();
  
    // Check if input values are not empty before accessing their value
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const phoneNumberValue = phoneNumber.value;
    const emailValue = email.value;
    const specialInstructionValue = specialInstruction.value;

    const selectedFruit1 = data.find(fruit => fruit.name === select1.value);
    const selectedFruit2 = data.find(fruit => fruit.name === select2.value);
    const selectedFruit3 = data.find(fruit => fruit.name === select3.value);

    // Calculate total nutritions
    const totalCarbs = selectedFruit1.nutritions.carbohydrates + selectedFruit2.nutritions.carbohydrates + selectedFruit3.nutritions.carbohydrates;
    const totalProtein = selectedFruit1.nutritions.protein + selectedFruit2.nutritions.protein + selectedFruit3.nutritions.protein;
    const totalFat = selectedFruit1.nutritions.fat + selectedFruit2.nutritions.fat + selectedFruit3.nutritions.fat;
    const totalCalories = selectedFruit1.nutritions.calories + selectedFruit2.nutritions.calories + selectedFruit3.nutritions.calories;
    const totalSugar = selectedFruit1.nutritions.sugar + selectedFruit2.nutritions.sugar + selectedFruit3.nutritions.sugar;

    // Format the display output

    const outputText = `
    <p>Order Details:</p>
    <p>Order Date: ${currentDate}</p>
    <p>First name: ${firstNameValue}</p>
    <p>Last name: ${lastNameValue}</p>
    <p>Email: ${emailValue}</p>
    <p>Phone: ${phoneNumberValue}</p>
    <p>Fruit 1: ${select1.value}</p>
    <p>Fruit 2: ${select2.value}</p>
    <p>Fruit  3: ${select3.value}</p>
    <p>Special Instruction: ${specialInstructionValue}</p>
    <p>Carbohydrates: ${totalCarbs.toFixed(2)}</p>
    <p>Protein: ${totalProtein.toFixed(2)}</p>
    <p>Fat: ${totalFat.toFixed(2)}</p>
    <p>Calories: ${totalCalories.toFixed(2)}</p>
    <p>Sugar: ${totalSugar.toFixed(2)}</p>`;

    outputArea.innerHTML = outputText;

    let numSubmission = localStorage.getItem('submission');
    
    if (numSubmission)
    {
        const numOrderSpan = document.querySelector('#num-Of-Order');
        numOrderSpan.textContent = numSubmission++;
    }
});