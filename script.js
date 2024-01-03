const searchBtn = document.getElementById("button")
const searchInput = document.querySelector("#searchFollowers")
const cardsDiv = document.getElementById("cards")

//+ https://api.github.com/users/psyBeth/followers

let followers = [];

const getFollowers = async (username) => {
    try {
        const res = fetch(`https://api.github.com/users/${username}/followers?per_page=100`);
        if(res.ok){
            const data = await res.json()
            console.log(data);
            followers = data;
            searchInput.style.display = "flex";
            data.forEach((item) => createElem(item))
        } else {
            searchInput.style.display = "none";
            cardsDiv.innerHTML = `<h1>User not found</h2>`
        }
        //? const data = await res.json()
    } catch (error) {}
}
console.log(followers);