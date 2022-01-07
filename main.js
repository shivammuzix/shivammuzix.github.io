//gvar cid = "UCgUmIK6sSgyuKp8fHrLFGMQ";

var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
let iframes = document.getElementById('latestVideoEmbed')
async function fetchDataJSON(iframes) {
  const response = await fetch(reqURL + 'UCgUmIK6sSgyuKp8fHrLFGMQ');
  const fullData = await response.json();
  return fullData;
}

  fetchDataJSON().then(fullData => {
    fullData;
    console.log(fullData.items[0].link)
    var link =fullData.items[0].link;
    var id = link.substr(link.indexOf("=") + 1);
    
    iframes.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=1");
  });


let phonediv=document.getElementById('phonediv')

