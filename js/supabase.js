import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://hvlatkavzuxhjvnztxqq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bGF0a2F2enV4aGp2bnp0eHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NjU0MTUsImV4cCI6MjAyMTQ0MTQxNX0.6l4QactgubeHqEL3c6MwMs2EC0cNSzSkbXhwLiucne8'; // Replace with your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);


export function getSupabase() {
    return supabase

}


export async function saveMessage(ema, fullname, mess) {

    const { data, error } = await supabase
        .from('messege')
        .insert([{
            email: ema,
            full_name: fullname,
            message: mess
        }, ])
        .select()
    if (error) {
        alert('Request not sent')
        console.log(error)

    } else {
        alert('Request Sent')
    }

}


export async function getSkills() {
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


export async function profileDetails() {
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

export async function getEducation() {
    let { data, error } = await supabase
        .from('education')
        .select('institution,degree,start_date,end_date')
    if (!error) {
        var educationList = document.getElementById('doclist')

        data.forEach(education => {
            const educationItem = document.createElement('div');
            const startDate = new Date(education.start_date).getFullYear();
            const endDate = new Date(education.end_date).getFullYear();
            educationItem.classList.add('education-item');
            educationItem.innerHTML = `
                <h3>${education.institution}</h3>
                <p>${education.degree}</p>
                <p>${startDate}- ${endDate}</p>
            `;
            educationList.appendChild(educationItem);
        });

    }
}


export function getAllData() {
    getSkills()
    profileDetails()
    getEducation()
}



export async function signIn(email, password) {
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {

            alert('Wrong password or username')
        } else {
            window.location.href = 'admin.html';
        }

    } catch (error) {}
}


export async function updateprofile(email, linkedln, github, summary) {
    await getSupabase
        .from('profile')
        .update({
            about_me: summary,
            email: email,
            linkedln: linkedln,
            github: github

        })
        .eq(id, 1)
}


export async function updateSkills() {}


export async function viewMesseges() {

}

export async function fetchSkills() {
    const { data, error } = await supabase.from('skill').select('*');
    if (error) {

        return [];
    }
    console.log(data)
    return data;
}

export async function fetchMessages() {
    const { data, error } = await supabase.from('messege').select('*');
    if (error) {
        return [];
    }
    console.log(data)
    return data;
}


export async function fetchMessagesALL() {
    console.log('hhdhd')
    const { data, error } = await supabase
        .from('messege')
        .select('full_name, email,message');

    if (error) {
        console.error('Error fetching messages:', error.message);
        return;
    }


    const messageContainer = document.getElementById('message-container');
    // messageContainer.removeChild()
    data.forEach(message => {
        const messageCol = document.createElement('div');
        messageCol.classList.add('message-col');
        messageCol.innerHTML = `
            <strong>From:</strong> ${message.full_name} ${message.email}<br>
            <strong>Message:</strong> ${message.message}
        `;
        
        messageContainer.appendChild(messageCol);
    });
}