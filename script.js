const searchBtn = document.getElementById("button")
const searchInput = document.querySelector("#searchFollowers")
const cardsDiv = document.getElementById("cards")

//+ https://api.github.com/users/psyBeth/followers

const getFollowers = async (username) => {
    try {
        const res = fetch(`https://api.github.com/users/${username}/followers?per_page=100`);
        if(res.ok){
            const data = await res.json()
        } else {
            cardsDiv.innerHTML = `<h1>User not found</h2>`
        }
        const data = await res.json()
    } catch (error) {
        
    }
}