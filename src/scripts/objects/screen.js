const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
             `<div class="info">
                 <img src=${user.avatarUrl} alt="foto de perfil usuário"/>
                 <div class="data">
                 <h1>${user.name ?? 'não possui um nome cadastrado 😪'}</h1>
                 <p>${user.bio ?? 'não possui uma bio cadastrada 😪'}</p>
                 <h4 class="followers-and-following">  <span class="style-numbers">${user.followers}</span> SEGUIDORES 👥</h4>
                 <h4 class="followers-and-following">  <span class="style-numbers">${user.following}</span> SEGUINDO 🫂</h4>
               </div>
             </div>`

             let repositoriesItens = ''
             user.repositories.forEach(repo => repositoriesItens += 
                `<li><a href="${repo.html_url}" target="_blank" >${repo.name}
                <div class="info-repositories">
                <span>🍴${repo.forks_count}</span>
                <span>⭐${repo.stargazers_count}</span>
                <span>👀${repo.watchers_count}</span>
                <span>👨‍💻${repo.language}</span>
                </div>   
                </a></li>
                   `)
            

             if(user.repositories.length > 0) {
                this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                                </div>`

            if(user.events.length > 0) {                                    
            let eventItens = ''
            user.events.forEach(event => {

            if (event.type === 'PushEvent') {
                eventItens += `<li><span class="repo-name">${event.repo.name}</span> ~<span class="commit">${event.payload.commits[0].message}</span></li>`
            } else if (event.type === 'CreateEvent') {
                `<li><span class="repo-name">event.repo.name</span> ~<span class="commit">Sem mensagens de commit</span></li>`
            }
        })

        this.userProfile.innerHTML +=   `
                                          <h2>Eventos</h2>
                                          <div>
                                          <ul>${eventItens}</ul>
                                          </div>`


    }
    } 
    },
   renderUserNotFOund(userName){
        this.userProfile.innerHTML = `<h3>O usuário <span class="thisuser">${userName}</span> não foi encontrado</h3>`
    }
}
export { screen }