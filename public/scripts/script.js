document.getElementById("form").onsubmit = () => {
    
    let isFormValid = true;

     // Reset all errors
    resetAllErrors();

    const jobTitle = document.querySelector("#job-title");
    const companyName = document.querySelector("#company-name");
    const tradeArea = document.querySelector("#trade-area");
    const location = document.querySelector("#location");
    const workingHours = document.getElementsByName("working-hours");
    


    // If job title is empty
    if (jobTitle.value.trim() === "") {
        document.querySelector("#err-job-title").style.display = "block";
        isFormValid = false;
    }

    // If company name is empty
    if (companyName.value.trim() === "") {
        document.querySelector("#err-company-name").style.display = "block";
        isFormValid = false;
    }

    // If trade area is empty
    if (tradeArea.value === "") {
        document.querySelector("#err-trade-area").style.display = "block";
        isFormValid = false;
    }

    // If location is empty
    if (location.value.trim() === "") {
        document.querySelector("#err-location").style.display = "block";
        isFormValid = false;
    }

    // Used to check if a radio button is selected
    let workingHourButtonsCount = workingHours.length;

    workingHours.forEach((option) => {

        // If a button is selected, decrement the count by one
        if (option.checked) {
            workingHourButtonsCount -= 1; 
        }
    })

    

    // If no buttons are selected, display error
    if (workingHourButtonsCount === workingHours.length) {
        document.querySelector("#err-working-hours").style.display = "block";
        isFormValid;
    }

    return isFormValid;
}

/**
 * Resets all errors on the form in the add-job.ejs file
 */
function resetAllErrors() {
    document.querySelectorAll(".err").forEach((err) => {
        err.style.display = "none";
    })
}