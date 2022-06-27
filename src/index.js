const init = () => {
//   Add Event Listeners to capture Form Data and Override the Form's behavior.
const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', (event) =>{
    event.preventDefault();

// Access input value directly

// event.target.children[1].value
    const input = document.querySelector('input#searchById');
    console.log(input.value)

    // fetch data based on the user input.
    // fetch function based on input typed into the HTML form.
fetch(`http://localhost:3000/movies/${input.value}`)
.then (response =>response.json())
.then (data =>{
    const title = document.querySelector('section#movieDeatails h4');
    const summary = document.querySelector('section#moviedDetails p');
    title.innerText = data.title;
    summary.innerText = data.summary;
    console.log(data)
});
//Display Fetched Data on the Page
    //Work inside the second then of our fetch request.Access the DOM and store the two elements in JavaScript.
    //setting their innerText values to the appropriate values in our data


});

}

