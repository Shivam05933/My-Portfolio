let movies = [
    {
       name:"Avengers Infinity",
       poster:"https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg",
       rating:7.8
    },
    {
       name:"Lagaan",
       poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisJCN2d8N2mWUvJfPzeSuE5acF3Nu3YlzdQ&s",
       rating:7.9
    },
    {
       name:"Pushpa",
       poster:"https://m.media-amazon.com/images/I/51KVzz46JxL._AC_UF1000,1000_QL80_.jpg",
       rating:7.7
    },
    {
       name:"Pathaan",
       poster:"https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-5.jpg",
       rating:7.8
    },
    {
       name:"Uri",
       poster:"https://m.media-amazon.com/images/I/91uSkUMWc+L._AC_UF350,350_QL50_.jpg",
       rating:7.9
    },
    {
       name:"Padmaavat",
       poster:"https://www.tallengestore.com/cdn/shop/products/Padmaavat-DeepikaPadukone-BollywoodHindiMoviePoster_ee53bd47-4b45-40e9-bfc4-9f6db47b9bfb.jpg?v=1625220934",
       rating:8.8
    },
    {
       name:"Kabir Singh",
       poster:"https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
       rating:8.5
    },
    {
       name:"K G F",
       poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa177cd-d8d3-41c3-b280-304677328f14/de3i302-c1a020da-9333-4af6-9f85-d4b4e71e8ae5.jpg/v1/fill/w_1000,h_800,q_70,strp/bollywood_movie_poster_by_yferdianto_de3i302-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZhYTE3N2NkLWQ4ZDMtNDFjMy1iMjgwLTMwNDY3NzMyOGYxNFwvZGUzaTMwMi1jMWEwMjBkYS05MzMzLTRhZjYtOWY4NS1kNGI0ZTcxZThhZTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iiEgd9A3ibX56rci1naACpjZ8XJXefNmGyTlES6PaZ8",
       rating:7.8
    },
    {
      name:"Spider-Man",
      poster:"https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg",
      rating:7.9
   },
   {
      name:"KALKI",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzrv5L6XacacCMz2GVVPTJ6HKHsPqkJ38jCNkufiELrvQZ2ExxHT3_-7U3genPKfISoY&usqp=CAU",
      rating:9
   },
   {
      name :"BRAHmASTRA",
      poster :"https://m.media-amazon.com/images/M/MV5BYzdlZTAxMjAtOTk2Ni00ZjIyLTg5MTgtODM2ODk0YjNlZDM1XkEyXkFqcGc%40._V1_.jpg",
      rating: 7.1
   },
   {
      name : "BHOLA",
      poster :"https://media-cache.cinematerial.com/p/500x/bdec4lzw/bholaa-indian-movie-poster.jpg?v=1671567223",
      rating:8.3
   },
   {
      name:"Leo",
      poster:"https://images.indianexpress.com/2023/09/leo1-1.jpg",
      rating:9.3
   },
   {
      name:"BEAST",
      poster:"https://static.moviecrow.com/gallery/20220412/195926-FQFV9tBXoAMnJ46.jpg",
      rating:9.5
   },
   {
      name:"VETTAIYAN",
      poster:"https://media.assettype.com/indulgexpress%2F2024-09-16%2Fc9iuyrkf%2FGXkwjLzWMAEA33d.jpeg?auto=format%2Ccompress&w=640",
      rating:9
   },
   {
      name:"RRR",
      poster:"https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
      rating:8.9
   },
   {
      name:"Lucky Bhashkar",
      poster:"https://cdn.dribbble.com/userupload/18000885/file/original-87e48ee8d1cbd617af24b56767b5672b.jpg?resize=752x&vertical=center",
      rating :7.6
   }

   ];

          
    function clickk()
    { 
            let movieName = document.getElementById('search').value;
              
            if(movieName!=="")
            {
                let result = movies.filter(function(movie)
                 {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                }) 
                displayMovies(result);
            }
            else{
               displayMovies(movies);
            }
            
    }

  function displayMovies(data){       
    
      let htmlString = ` `;

    for(let i=0; i < data.length; i++)
    {
        htmlString=htmlString+`
         <div class="movie">
          <div class="overlay"> 
            <div class="videos"> 

            </div>
            <div class="details">
               <h1>${data[i].name}</h1>
                <h2>IMDB : ${data[i].rating}</h2>
                <p> Director . shivam . satyam</p>
            </div>
        </div>

        <img class="poster" src="${data[i].poster}" alt="">
   </div> 
         `
    }
    console.log(htmlString);
    document.getElementById("movies").innerHTML=htmlString; 
   }
   displayMovies(movies);



//     // function to create HTML using JS //
//    function displayMovie(){
//     let movieDiv = document.createElement("div");
//     movieDiv.classList.add("movie");

 

//     let overlayDiv = document.createElement("div");
//     overlayDiv.classList.add("overlay")
   
//     // console.log(movieDiv,overlayDiv)

//     movieDiv.appendChild(overlayDiv);
  

//     let videosDiv = document.createElement("div");
//     videosDiv.classList.add("video")

//     overlayDiv.appendChild(videosDiv);

//     let detailsDiv = document.createElement("div");
//     detailsDiv.classList.add("details")
//     detailsDiv.id="detail";

//     overlayDiv.appendChild(detailsDiv);
    
//     document.body.appendChild(movieDiv);

//     document.getElementById("detail").innerHTML = `
//     <h1>Avenger Infinity</h1> 
//      <h2>IMDB : 7.8</h2> 
//     <p>Director . shivam . satyam</p>
//     `;
   
//   console.log(movieDiv); 
// }
// displayMovie();

   



