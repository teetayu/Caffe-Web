document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const registerBtn = document.getElementById("registerBtn");
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const errorMessage = document.createElement("p");

    // เพิ่มข้อความ Error message
    errorMessage.textContent = "Please fill out all required fields.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";
    form.appendChild(errorMessage);

    // ฟังก์ชันตรวจสอบฟอร์ม
    const validateForm = () => {
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const genderSelected = Array.from(genderInputs).some(input => input.checked);

        const isValid = username && email && phone && genderSelected;
        registerBtn.disabled = !isValid; // ปุ่มจะใช้งานได้ก็ต่อเมื่อข้อมูลครบ
    };

    // ตรวจสอบทุกครั้งที่มีการกรอกข้อมูล
    form.addEventListener("input", validateForm);

    // ตรวจสอบเมื่อกด Submit
    form.addEventListener("submit", (event) => {
        const genderSelected = Array.from(genderInputs).some(input => input.checked);

        if (!form.checkValidity() || !genderSelected) {
            event.preventDefault(); // ป้องกันการส่งฟอร์ม
            errorMessage.style.display = "block"; // แสดงข้อความแจ้งเตือน
        } else {
            errorMessage.style.display = "none"; // ซ่อนข้อความแจ้งเตือน
        }
    });
});