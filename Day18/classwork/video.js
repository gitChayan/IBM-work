let videoData = JSON.parse(localStorage.getItem("videoData"));

let mainContainer = document.getElementById("container");


async function showVideo(data) {
    
    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;

    iframe.height = "700px"
    iframe.width = "60%"

    let title = document.createElement("p");
    title.innerText = data.snippet.title;

    let channel_title = document.createElement("p");
    channel_title.innerText = data.snippet.channelTitle;
    let description = document.createElement("p1");
    description.innerText = data.snippet.description;

    
    

    iframe.setAttribute("allowfullscreen", true)



    mainContainer.append(iframe,title, channel_title,description)
}

showVideo(videoData);

let API_KEY = "AIzaSyCy72l1pxo6bczRGc439YBWxCG6zrGOHHQ";

let suggestion = document.getElementsByClassName("suggestion");

let search_term = document.getElementById("query").value || "India Gate";

async function getData() {
    try {
        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)

        let res = await data.json();
        console.log(res.items);
        showData(res.items)
    } catch (error) {
        console.log(error);
    }
}

getData();

async function showData(arr){
    document.getElementById("loading").style.display="none"
    arr.forEach(({snippet, id}) => {
        let box = document.createElement("div");
        box.className="video";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = snippet.title;

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle;

        box.append(img, title, channel_title);

        lower_body.append(box)

        box.onclick=()=>{
            let obj ={
                snippet, id
            }

            localStorage.setItem("videoData", JSON.stringify(obj));

            window.location.href = "video.html"
        }
    });
}