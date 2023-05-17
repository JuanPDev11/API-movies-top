let page = 1;
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const btnPrev3 = document.getElementById("btn3");
const btnNext4 = document.getElementById("btn4");




btnNext.addEventListener("click",()=>{
    if(page<1000){
    page += 1;
    cargarPeliculas();
    }
});

btnPrev.addEventListener("click",()=>{
    if(page>1){
    page -= 1;
    cargarPeliculas();
    }
});


const cargarPeliculas = async()=>{
try {
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6a9441915f975d3906b9868986f73fbe&page=${page}`);

    

    if(respuesta.status === 200){
        const datos = await respuesta.json();
        
        let peliculas = "";
        datos.results.forEach((pelicula)=>{
            peliculas += `
            <div class="pelicula-container">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <div class="data-container">
                    <h1 class="title">${pelicula.title}</h1>
                    <p class="overview">${pelicula.overview}</p>
                </div>
            </div>
            `
        })
        
        document.getElementById("contenedor").innerHTML = peliculas;
        



    }else if(respuesta.status === 401){
        console.log("key incorreta");
    }else if(respuesta.status === 404){
        console.log("movie not found")
    }else{
        console.log("error inesperado")
    }

} catch (error) {
   console.log(error); 
}
}

cargarPeliculas(); 

btnNext4.addEventListener("click",()=>{
    if(page<1000){
    page += 1;
    cargarPeliculas();
    }
});

btnPrev3.addEventListener("click",()=>{
    if(page>1){
    page -= 1;
    cargarPeliculas();
    }
});