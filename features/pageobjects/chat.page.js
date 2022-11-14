class ChatPage {
    get btnLogout () {
        return $('button[class="loginButton btn btn-primary"]');
    }
}

module.exports = new ChatPage();
