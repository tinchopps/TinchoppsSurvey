const form = document.getElementById('survey-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert("Thank you for participating!");
         form.reset();
        });
            