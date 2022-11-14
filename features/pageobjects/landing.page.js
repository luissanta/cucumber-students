class LandingPage {
    get baseUrl () {
        return 'https://losestudiantes.com/';
    }

    async navegateTo (path) {
        await browser.url(this.baseUrl + path)
    }
}

module.exports = new LandingPage();
