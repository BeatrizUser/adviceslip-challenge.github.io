async function Adviceslip(){
    const api = fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data)=>{
        res = data.slip;
        $("#card").html(`
            <h3>ADVICE #${res.id}</h3>
            <q>${res.advice}</q>
            <img class="divider" src="./images/pattern-divider-desktop.svg">
            <button class="btn-advice" OnCLick=(Adviceslip())><img src="./images/icon-dice.svg"></button>
        `)
    })
}

Adviceslip();   