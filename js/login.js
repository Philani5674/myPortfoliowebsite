import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://hvlatkavzuxhjvnztxqq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bGF0a2F2enV4aGp2bnp0eHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NjU0MTUsImV4cCI6MjAyMTQ0MTQxNX0.6l4QactgubeHqEL3c6MwMs2EC0cNSzSkbXhwLiucne8'; // Replace with your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);



document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        signIn(username, password)
    });
});


async function signIn(email, password) {
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            document.getElementById('username').style.border = "red solid 0.3cm"
            alert('Wrong password or username')
        } else {
            window.location.href = 'admin.html';
        }

    } catch (error) {}
}