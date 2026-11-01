document.getElementById("form").onsubmit = () => {
    
    let isFormValid = true;

     // Reset all errors
    resetAllErrors();

    const jobTitle = document.querySelector("#job-title");
    const companyName = document.querySelector("#company-name");
    const tradeArea = document.querySelector("#trade-area");

    // If job title is empty
    if (jobTitle.value.trim() === "") {
        document.querySelector("#err-job-title").style.display = "block";
        isFormValid = false;
    }

    if (companyName.value.trim() === "") {
        document.querySelector("#err-company-name").style.display = "block";
        isFormValid = false;
    }

    if (tradeArea.value === "") {
        document.querySelector("#err-trade-area").style.display = "block";
        isFormValid = false;
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