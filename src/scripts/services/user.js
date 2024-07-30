import { baseUrl } from '../variables.js';

async function userProfile(userName){
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json();
}

export { userProfile }