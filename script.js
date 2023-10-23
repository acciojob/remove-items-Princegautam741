// Get references to the dropdown and the button
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector("input[type=button]");

// Add an event listener to the button
removeButton.addEventListener("click", function () {
    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    if (selectedOption) {
        // Remove the selected option
        colorSelect.removeChild(selectedOption);
    }
});
