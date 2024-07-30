import { baseUrl, maxItens} from '../variables.js';

async function userRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxItens}`);
    return await response.json();
}



export { userRepositories }