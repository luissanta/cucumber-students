class RegisterPage {
    get btnRegister () {
        return $("p[class=' text-center font-bold'] a");
    }

    get inputFirstname () {
        return $('input[name="firstname"]');
    }

    get inputLastname () {
        return $('input[name="lastname"]');
    }

    get inputEmail () {
        return $('input[name="email"]');
    }

    get checkBtnAcceptTerms () {
        return $('input[name="accept"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get inputConfirmPassword () {
        return $('input[name="password2"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get registrationNotification () {
        return $('h2[class="swal2-title"]');
    }

    get alertInput () {
        return $('div[class="notice alert alert-danger"]');
    }

    get loginForm () {
        return $('p[class="font-extrabold text-center"]');
    }

    get registerForm () {
        return $('p[class=" text-center font-bold"]');
    }

    async registration (firstname, lastname, email, password, confirmPassword) {
        await this.btnRegister.click();
        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPassword);
        await this.checkBtnAcceptTerms.click();
        await this.btnSubmit.click();
    }
}

module.exports = new RegisterPage();
