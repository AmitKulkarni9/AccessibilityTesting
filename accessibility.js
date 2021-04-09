const pa11y = require('C:/node_modules/pa11y');

async function runPa11y() {
    try {
        const results = await pa11y('https://www.example.com');
        // Do something with the results
        console.log(results);
    } catch (error) {
        // Handle the error
        console.log(error);
    }
}

runPa11y();
