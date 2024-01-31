import { signIn } from './supabase.js'

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        signIn(username, password)
    });
});