// a4cc90b77e91426f9f474fe2d4d76352
// variables
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const healthBtn = document.getElementById("health");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");
const newsSearch = document.getElementById("newsSearch");

const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

// Array
var newsDataArr =[];

// apis
const API_KEY = "a4cc90b77e91426f9f474fe2d4d76352";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apikey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=";
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=health&apikey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apikey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function(){
    newsType.innerHTML="<h3>Today's Headlines</h3> <hr>";
    fetchHeadlines();
    
};

generalBtn.addEventListener("click" , function(){
    newsType.innerHTML="<h3>General News</h3><hr>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click" , function(){
    newsType.innerHTML="<h3>Business News</h3><hr>";
    fetchBusinessNews();    
});

sportsBtn.addEventListener("click" , function(){
    newsType.innerHTML="<h3>Sports News</h3><hr>";
    fetchSportsNews();
});

technologyBtn.addEventListener("click" , function(){
    newsType.innerHTML="<h3>Technology News</h3><hr>";
    fetchTechnologyNews();
});

healthBtn.addEventListener("click" , function(){
    newsType.innerHTML="<h3>Health News</h3><hr>";
    fetchHealthNews();
});

entertainmentBtn.addEventListener("click" , function(){
    newsType.innerHTML="<h3>Entertainment News</h3><hr>";
    fetchEntertainmentNews();
});

searchBtn.addEventListener("click" , function(){
    newsType.innerHTML=`<h3>Search results for "${newsSearch.value}"</h3><hr>`;
    fetchqueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}
const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}

const fetchHealthNews = async () => {
    const response = await fetch(HEALTH_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}

const fetchqueryNews = async () => {

    if(newsSearch.value == null){
        return ;
    }

    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsSearch.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status<300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else{
        // handles error
        console.log(response.status , response.statusText);
    }
    displayNews();
}

function displayNews(){

    newsDetails.innerHTML = "";

    if(newsDataArr.length == 0){
        newsDetails.innerHTML = "<h5> No data Found. </h5>"
        return ;
    }

    newsDataArr.forEach( news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2";
         
        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height" , "matchparnt");
        image.setAttribute("width" , "100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className="card-title";
        newsHeading.innerHTML=news.title;

        var dateHeading= document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML=date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target" , "_blank");
        link.href = news.url;
        link.innerHTML = "Read More...."

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.appendChild(col); 
    });

    let year = new Date().getFullYear();
    const footer = document.getElementById("footer");
    footer.innerHTML=`<h6 class="text-light me-auto ms-auto"> Copyright &#169; ${year} <span class="text-info">A<span class="text-light">to</span>Z News</span> | Made with <span class="text-danger"> &#9829;</span> by <a href="https://github.com/omg3604">Om Golhani</a></h6>
    `;
}