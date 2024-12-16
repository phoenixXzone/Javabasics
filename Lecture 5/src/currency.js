document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        // Get the currency input from the user
        const currency = document.querySelector('#currency').value.toUpperCase();

        // Validate input: Ensure it's not empty
        if (!currency) {
            document.querySelector('#result').innerHTML = 'Please enter a currency.';
            return false;
        }

        // Fetch exchange rate data from the API
        fetch('https://v6.exchangerate-api.com/v6/110f71b81e17bb1b3d68b247/latest/USD')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Check if the API returned success
                if (data.result !== 'success') {
                    throw new Error('Failed to fetch exchange rates from the API.');
                }

                // Log the full API response for debugging
                console.log('API Response:', data);

                // Get the conversion rates
                const rates = data.conversion_rates;

                // Retrieve the rate for the entered currency
                const rate = rates[currency];

                if (rate) {
                    // Display the exchange rate
                    document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
                } else {
                    // Display an error message for invalid currency
                    document.querySelector('#result').innerHTML = 'Invalid currency. Please try again.';
                }
            })
            .catch((error) => {
                // Handle fetch or network errors
                console.error('Error fetching exchange rates:', error);
                document.querySelector('#result').innerHTML = 'An error occurred. Please try again later.';
            });

        // Prevent default form submission behavior
        return false;
    };
});
