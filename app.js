        // Define variables to reference the input fields, button, and section for displaying quotes
        var quoteInput = document.getElementById('quote');
        var authorInput = document.getElementById('author');
        var addQuoteBtn = document.getElementById('addQuoteBtn');
        var quoteList = document.getElementById('quoteList');

        // Add event listener to the button that triggers a function when clicked
        addQuoteBtn.addEventListener('click', addQuote);

        // Function for adding quotes
        function addQuote() {
            var quote = quoteInput.value.trim();
            var author = authorInput.value.trim();

            if (quote === '' || author === '') {
                alert('Please enter both a quote and an author.');
                return;
            }

            // Create a new quote object
            var quoteObject = {
                text: quote,
                author: author
            };

            // Get quotes from local storage or initialize an empty array if none exist
            var quotes = JSON.parse(localStorage.getItem('quotes')) || [];

            // Add the new quote to the array
            quotes.push(quoteObject);

            // Save the updated array back to local storage
            localStorage.setItem('quotes', JSON.stringify(quotes));

            // Clear input fields
            quoteInput.value = '';
            authorInput.value = '';

            // Display the updated list of quotes
            displayQuotes();
        }

        // Function to display quotes from local storage
        function displayQuotes() {
            // Clear the current list of quotes
            quoteList.innerHTML = '';

            // Get quotes from local storage
            var quotes = JSON.parse(localStorage.getItem('quotes')) || [];

            // Loop through each quote and add it to the list
            quotes.forEach(function(quoteObject, index) {
                var li = document.createElement('li');
                li.textContent = '"' + quoteObject.text + '" - ' + quoteObject.author;

                // Create a remove button for each quote
                var removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.setAttribute('data-index', index);

                // Add the remove button to the list item
                li.appendChild(removeBtn);

                // Add the list item to the quote list
                quoteList.appendChild(li);

                // Add event listener to the remove button
                removeBtn.addEventListener('click', removeQuote);
            });
        }

        // Function to remove a quote
        function removeQuote(event) {
            // Get the index of the quote to be removed from the button's data attribute
            var index = event.target.getAttribute('data-index');

            // Get quotes from local storage
            var quotes = JSON.parse(localStorage.getItem('quotes')) || [];

            // Remove the quote at the specified index
            quotes.splice(index, 1);

            // Save the updated array back to local storage
            localStorage.setItem('quotes', JSON.stringify(quotes));

            // Display the updated list of quotes
            displayQuotes();
        }

        // Initial display of quotes when the page loads
        displayQuotes();