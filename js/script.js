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

console.log(teamMembers);

const rowEl = document.querySelector('.row');

function printCard(){
    const colEl = document.createElement('div');
    colEl.classList.add('col-4');
    const template =`
        <div class="card text-start">
            <img class="card-img-top" src="img/cats/${member.picture}" alt="picture">
            <div class="card-body text-center">
                <h3 class="card-title">${member.name}</h3>
                <h5 class="card-title">${member.role}</h5>
            </div>
        </div>
    `
    colEl.innerHTML = template;
    rowEl.append(colEl);
};





//CONSOLE LOG
console.log(teamMembers);
console.log(rowEl);