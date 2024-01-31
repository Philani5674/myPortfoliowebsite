import * as server from './supabase.js'

document.addEventListener('DOMContentLoaded', function() {
    let editButtons = document.getElementById('edit-contact');
    let cancelBtn = document.getElementById('cancel-contact');
    let saveBtn = document.getElementById('save-contact')

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
});