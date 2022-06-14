const app = document.getElementById("app");
let b;

const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'b3afd590camsh32c4750e2d62613p1e4a4cjsnbcab951938ee',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

function getData() {
    fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes", options)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const date = data.results.map(date => {
            return `${date.created_at}`;
        });
        for(let i=0;i<date.length;i++){
            let a = new Date(date[i]*1000).toUTCString()
            // console.log(a);
            b = JSON.stringify(a);
            console.log(b);

        }
        
        
        const html = data.results.map(details => {
            return `
                <div class="flex-parent">
                    <div class="recipieName">${details.name}<br/></div>
                    <div class="recipieImage"><img src="${details.thumbnail_url}"<br/></div>
                    <div class="recipieDate">${b}</div>
                </div>
            `;
        }
        ).join('');

        app.insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

getData();