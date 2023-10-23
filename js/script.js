"use strict"

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    },
];


for(let i=0; i < teamMembers.length; i++){
    printCard(teamMembers[i]);
}

function printCard(member){
    const colEl = document.createElement('div');
    colEl.classList.add('col-6', 'col-lg-4');
    const template =`
        <div class="card text-start">
            <img class="card-img-top" src="img/${member.picture}" alt="picture">
            <div class="card-body text-center">
                <h3 class="card-title fs-5 fw-bold">${member.name}</h3>
                <h5 class="card-title text-muted fs-6">${member.role}</h5>
            </div>
        </div>
    `
    const rowEl = document.querySelector('.row');
    colEl.innerHTML = template;
    rowEl.append(colEl);
};

const btnForm = document.querySelector('.btn.btn-success');
const formEl = document.querySelector('.form-group');

btnForm.addEventListener('click', function(){
    formEl.classList.remove('d-none');
});

const btnSubmit = document.querySelector('button.btn-warning');

btnSubmit.addEventListener('click', function(){
    const newMember = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        picture: document.getElementById('file').value
    }

    teamMembers.push(newMember);
    printCard(newMember);
    reset();
});

const btnCloseForm = document.querySelector('.btn-danger');
btnCloseForm.addEventListener('click', function(){
    formEl.classList.add('d-none');
})

function reset(){
    name: document.getElementById('name').value ='';
    role: document.getElementById('role').value= '';
    picture: document.getElementById('file').value = '';
}

