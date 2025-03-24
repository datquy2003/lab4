function checkNull(input) {
    return input.value.trim().length === 0;
}

function isInteger(value) {
    return /^\d+$/.test(value);
}

function validatePhone(phone) {
    return /^\(\d{2,4}\)[\s.-]?\d{3}[\s.-]?\d{3}$/.test(phone);
}

function validform(f) {
    
    if (checkNull(f.fullname)) {
        alert("Fullname must not be empty.");
        f.fullname.focus();
        return;
    }
    if (!/^[A-Za-z\s]+$/.test(f.fullname.value)) {
        alert("Fullname must contain only letters and spaces.");
        f.fullname.focus();
        return;
    }

    if (checkNull(f.age)) {
        alert("Age must not be empty.");
        f.age.focus();
        return;
    }
    if (!isInteger(f.age.value)) {
        alert("Age must be a valid number.");
        f.age.focus();
        return;
    }
    let age = parseInt(f.age.value, 10);
    if (age <= 0 || age >= 200) {
        alert("Age must be between 0 and 200.");
        f.age.focus();
        return;
    }

    let genderChecked = false;
    for (let i = 0; i < f.gender.length; i++) {
        if (f.gender[i].checked) {
            genderChecked = true;
            break;
        }
    }
    if (!genderChecked) {
        alert("Please select your gender.");
        return;
    }

    if (checkNull(f.phone)) {
        alert("Phone number must not be empty.");
        f.phone.focus();
        return;
    }
    if (!validatePhone(f.phone.value)) {
        alert("Phone is not valid. Format: (XX) XXX-XXX");
        f.phone.focus();
        return;
    }

    alert("Validate successfully!");
    f.submit();
}
