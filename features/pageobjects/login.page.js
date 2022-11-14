class LoginPage {
    get btnLogin () {
        return $('button[class="loginButton btn btn-primary"]');
    }

    get inputUsername () {
        return $('input[name="email"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get wrongCredentialsAlert () {
        return $('div[class="notice alert alert-danger"]');
    }

    async enterLoginForm () {
        await this.btnLogin.click();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
