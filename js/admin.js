import * as server from './supabase.js'

document.addEventListener('DOMContentLoaded', async function() {
    let editButtons = document.getElementById('edit-contact');
    let cancelBtn = document.getElementById('cancel-contact');
    let saveBtn = document.getElementById('save-contact')
    const skillsList = document.getElementById('skills-list');
    const editSkillForm = document.getElementById('edit-skill-form');
    const updateSkillForm = document.getElementById('update-skill-form');
    const newSkillForm = document.getElementById('new-skill-form')
    const skillNameInput = document.getElementById('skill-name');
    let newBtn = document.getElementById('cancel')
    const messagesList = document.getElementById('messages-list');


    editButtons.addEventListener("click", function(event) {
        event.preventDefault();
        editButtons.style.display = 'none'
        saveBtn.style.display = 'block'
        cancelBtn.style.display = 'block'
    });

    cancelBtn.addEventListener("click", function(event) {
        event.preventDefault();
        editButtons.style.display = 'block'
        saveBtn.style.display = 'none'
        cancelBtn.style.display = 'none'
    });

    saveBtn.addEventListener("click", function(event) {
        event.preventDefault();
        editButtons.style.display = 'block'
        saveBtn.style.display = 'none'
        cancelBtn.style.display = 'none'
            //save logic


    });



    newBtn.addEventListener('click', function(event) {
        event.preventDefault()
        updateSkillForm.style.display = 'none';
        newSkillForm.style.display = 'block'

    });

    async function displaySkills() {
        const skills = await server.fetchSkills();
        skillsList.innerHTML = '';
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill.name;
            li.dataset.skillId = skill.id;
            li.addEventListener('click', () => {
                editSkillForm.style.display = 'block';
                newSkillForm.style.display = 'none'
                skillNameInput.value = skill.name;
            });
            skillsList.appendChild(li);
        });
    }

    async function updateSkill(skillId, updatedData) {}

    updateSkillForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const skillId = document.querySelector('#skills-list li.active').dataset.skillId;
        const updatedData = {
            name: skillNameInput.value,
            description: skillDescriptionInput.value
        };
        await updateSkill(skillId, updatedData);
        // Optionally, display a success message or update UI
    });



    const messagesTable = document.getElementById('messages-table');

    async function fetchMessages() {}


    async function displayMessages() {
        const messages = await server.fetchMessages()
        const tbody = messagesTable.querySelector('tbody');
        tbody.innerHTML = '';
        messages.forEach(message => {
            const row = document.createElement('tr');
            row.innerHTML = `
                    <td>${message.id}</td>
                    <td>${message.full_name}</td>
                    <td>${message.email || ''}</td>
                    <td>${message.message}</td>
                    <td>${new Date(message.created_at).toLocaleString()}</td>
                `;
            tbody.appendChild(row);
        });
    }
    await displayMessages();

    await displaySkills();
});