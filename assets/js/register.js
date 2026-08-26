document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const registerBtn = document.getElementById("registerBtn");
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");

    if (!form || !registerBtn) return;

    // Create Error message element
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please fill out all required fields.";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.9rem";
    errorMessage.style.textAlign = "center";
    errorMessage.style.display = "none";
    form.appendChild(errorMessage);

    // Form validation function
    const validateForm = () => {
        const username = document.getElementById("username")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const phone = document.getElementById("phone")?.value.trim() || "";
        const password = document.getElementById("password")?.value || "";
        
        const genderSelected = Array.from(genderInputs).some(input => input.checked);
        
        const daySelected = daySelect ? daySelect.value !== "" : true;
        const monthSelected = monthSelect ? monthSelect.value !== "" : true;
        const yearSelected = yearSelect ? yearSelect.value !== "" : true;

        const isValid = username.length >= 3 && 
                        email.includes("@") && 
                        phone.length === 10 && 
                        password.length >= 6 && 
                        genderSelected && 
                        daySelected && 
                        monthSelected && 
                        yearSelected;

        registerBtn.disabled = !isValid;
    };

    // Real-time validation checks
    form.addEventListener("input", validateForm);
    form.addEventListener("change", validateForm);

    // Form submit check
    form.addEventListener("submit", (event) => {
        const genderSelected = Array.from(genderInputs).some(input => input.checked);

        if (!form.checkValidity() || !genderSelected) {
            event.preventDefault(); // Stop form submission
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    });

    // Run initial validation check
    validateForm();
});