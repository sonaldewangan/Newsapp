console.log("This is our news channel");

source = "bbc-news";
let apiKey = "907b859b6d03452e822678df4e33f0de";

let newsAccordion = document.getElementById('newsAccordion');

let xhr = new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index) {
            // console.log(element);
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b> Breaking news ${index+1}:</b> ${element['title']}
                            </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                            <div class="accordion-body">${element['content']}<a href="${element['url']}" target="_blank">Read more</a></div>
                            </div>
                        </div>`
                newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some Error Occured");
    }
}

xhr.send();




