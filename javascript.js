const url ='https://pokeapi.co/api/v2/pokemon/ditto' 

async function pokemon (){
    const resp = await fetch ( 'https://pokeapi.co/api/v2/pokemon/ditto'); //Here, you fetch the url
    const data = await resp.json(); //The data is converted to json
    console.log(data)

    
};
    pokemon();


    async function getdata(){
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(res);
    }
    getdata();

    function fetchKantoPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon))
      }