import { baseUrl, maxItens} from '../variables.js';

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItens}`)
    return await response.json();
}

export { getEvents }