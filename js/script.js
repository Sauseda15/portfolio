function showExperience() {
    document.getElementById('experience-content').style.display = 'block';
    document.getElementById('education-content').style.display = 'none';
    document.querySelector('.tab-button.active').classList.remove('active');
    document.querySelectorAll('.tab-button')[0].classList.add('active');
}

function showEducation() {
    document.getElementById('experience-content').style.display = 'none';
    document.getElementById('education-content').style.display = 'block';
    document.querySelector('.tab-button.active').classList.remove('active');
    document.querySelectorAll('.tab-button')[1].classList.add('active');
}