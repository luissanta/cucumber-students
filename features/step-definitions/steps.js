const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const ChatPage = require('../pageobjects/chat.page');
const LandingPage = require('../pageobjects/landing.page');
const RegisterPage = require('../pageobjects/register.page');

// Login
Given(/^I am on the (\w+) sub page$/, async (path) => {
    await LandingPage.navegateTo(path)
});

Given(/^I enter the login form$/, async () => {
    await LoginPage.enterLoginForm()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a alert message saying (.*)$/, async (message) => {
    await expect(LoginPage.wrongCredentialsAlert).toBeExisting();
    await expect(LoginPage.wrongCredentialsAlert).toHaveTextContaining(message);
});

Then(/^I see that I am logged in correctly$/, async () => {
    await expect(ChatPage.btnLogout).toBeExisting();
    await expect(ChatPage.btnLogout).toHaveTextContaining('Salir');
});


// Registration
Given(/^I press the register button$/, async () => {
    await RegisterPage.enterBtnRegistration();
});

When(/^I register with (.+), (.+), (.+), (.+) and (.+)$/, async (
    firstname,
    lastname,
    email,
    password,
    confirmPassword) => {
    await RegisterPage.registration(
        firstname,
        lastname,
        email,
        password,
        confirmPassword
    )
});

Then(/^I want to see a message confirming my successful registration$/, async () => {
    await expect(RegisterPage.registrationNotification).toBeExisting();
    await expect(RegisterPage.registrationNotification).toHaveTextContaining('¡Inscripción exitosa!');
});

Then(/^I want to see a message with an alert by already existing user$/, async () => {
    await expect(RegisterPage.registrationNotification).toBeExisting();
    await expect(RegisterPage.registrationNotification).toHaveTextContaining('Ocurrió un error');
});

Then(/^I see an alert for the input fields with (.+)$/, async (message) => {
    await expect(RegisterPage.alertInput).toBeExisting();
    await expect(RegisterPage.alertInput).toHaveTextContaining(message);
});
