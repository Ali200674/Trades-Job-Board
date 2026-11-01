document.getElementById("form").onsubmit = () => {
    let isFormValid = true;

    const jobTitle = document.querySelector("#job-title");

    // If job title is empty
    if (jobTitle.value.trim() === "") {
        document.querySelector("#err-job-title").style.display = "block";
        isFormValid = false;
    }

    return isFormValid;
}