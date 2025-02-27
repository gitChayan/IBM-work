let form=document.getElementById("userForm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let movieName=document.getElementById("movieName").value;
    let movieDes=document.getElementById("movieDes").value;
    let movieRel=document.getElementById("movieRel").value;
    let movieRating=document.getElementById("movieRating").value;
    let GenreSelect=document.getElementById("GenreSelect").value;
    let movieposter=document.getElementById("movieposter").value;
    let obj={
        movieName,movieDes,movieRel,movieRating,movieposter,GenreSelect
    }
   

       
    // console.log(name);
    let tr =document.createElement("tr")
    td1=document.createElement("td")
    td1.innerText= obj.movieName;

    td2=document.createElement("td")
    td2.innerText= obj.movieDes;

    td3=document.createElement("td")
    td3.innerText= obj.movieRel;

    td4=document.createElement("td")
    td4.innerText= obj.movieRating;

    td5=document.createElement("td")
    td5.innerText= obj.GenreSelect;

    td6=document.createElement("td")
    td6.innerText= obj.movieposter;

    tr.append(td1,td2,td3,td4,td5,td6);

    document.getElementById("tbody").append(tr);
    // window.location.href="movie.html";

    



});