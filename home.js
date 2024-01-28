import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://hvlatkavzuxhjvnztxqq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bGF0a2F2enV4aGp2bnp0eHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NjU0MTUsImV4cCI6MjAyMTQ0MTQxNX0.6l4QactgubeHqEL3c6MwMs2EC0cNSzSkbXhwLiucne8'; // Replace with your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

function signIn(email, password) {
    try {
        const { user, error } = supabase.auth.signInWithPassword({
            email,
            password,
        });


    } catch (error) {}
}

signIn('philaningcamu18@gmail.com', 'philaningcamu18@gmail.com')
getAllData()



function getAllData() {
    getSkills()
    profileDetails()
}

async function getSkills() {
    //get all the skills and display the skills

    const { data, error } = await supabase
        .from('skill')
        .select('name')

    var container = document.getElementById('skills')
    if (data && data.length > 0) {

        var ul = document.createElement('ul');
        ul.style.display = 'flex';

        data.forEach(skill => {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.textContent = skill.name;
            li.appendChild(button);
            ul.appendChild(li);
        });

        container.appendChild(ul);
    }


}


async function profileDetails() {
    //get all the profile details and display the details

    const { data, error } = await supabase
        .from('profile')
        .select('about_me, github, email, linkedln')



    if (!error) {
        var about_me = data[0]['about_me']
        var github = data[0]['github']
        var linkedln = data[0]['linkedln']
        var email = data[0]['email']

        var summary = document.getElementById('summary')
        var emaill = document.getElementById('email')
        var git = document.getElementById('git')
        var ln = document.getElementById('ln')
        summary.innerHTML = about_me
        emaill.innerHTML = email
        ln.href = linkedln
        git.href = github
    }
}