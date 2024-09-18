const charactersList = document.querySelector('.characters-list');


const getCharacters = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '../data/characters.json')
    request.setRequestHeader('Content-type','application')
    request.send()

    request.onload = () => {
        const characters = JSON.parse(request.response)

        characters.forEach((person)=> {
            const div = document.createElement('div')
            div.classList.add('character-card')
            div.innerHTML=`
            <h4>${person.name} </h4>  
            `

            charactersList.appendChild(div)

        })
    }

}
getCharacters()