document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    const celsiusInput = document.getElementById("celsius");
    const resultParagraph = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultParagraph.textContent = `${celsius.toFixed(1)}°C is ${fahrenheit.toFixed(1)}°F`;
        } else {
            resultParagraph.textContent = "Please enter a valid temperature.";
        }
    });
});
