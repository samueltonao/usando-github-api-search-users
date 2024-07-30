import { userProfile } from './services/user.js';

import { userRepositories } from './services/repositories.js';

import { getEvents } from './services/events.js';

import { user } from './objects/user.js'

import { screen } from './objects/screen.js';


document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value;
    if(validateEmptyInput(userName)) {
        return;
    }
    getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const ifKeyCode = key === 13
    
    if(ifKeyCode) {
        if(validateEmptyInput(userName)) {
            return;
        }
        getUserData(userName);
    }
});

function validateEmptyInput(userName){
if(userName.length === 0){
    alert('Por favor, insira um nome de usuário!')
    return true;
}
}

async function getUserData(userName){
    const userResponse = await userProfile(userName)

    if(userResponse.message === 'Not Found'){
        screen.renderUserNotFOund(userName)
        return;
    }

    const repositoriesResponse = await userRepositories(userName)
    
    const eventsResponse = await getEvents(userName)

    user.setEvents(eventsResponse)

    user.setInfo(userResponse)
    
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
    
}
