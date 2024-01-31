import * as server from './supabase.js';

document.addEventListener('DOMContentLoaded', function() {

    const submitButton = document.getElementById('submit-message');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value
        var email = document.getElementById('mail').value
        var message = document.getElementById('message').value
        server.saveMessage(email, name, message)
    });
});

server.getAllData()