function emailValidation(email) {
    if (!email) {
        return false
    }
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const resultValidation = emailValid.test(email);
    if (!resultValidation) {
        return false
    } else {
        return true
    }
}

export {
    emailValidation
}