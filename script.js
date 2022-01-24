window.addEventListener('DOMContentLoaded',function (){
  var aboutSection = document.getElementById('about'),
      mainSection = document.querySelector('.page-content'),
      aboutButton = document.querySelector('.about-button'),
      tabButtons = document.querySelectorAll('.tab-selector'),
      themeButton = document.querySelector('.mode-toggle');

  themeButton.addEventListener('click', () => {
    var doc = document.documentElement,
        bod = document.body;
    if(themeButton.checked){
      doc.style.setProperty('--primary-color', '#2e2e2e');
      doc.style.setProperty('--secondary-color', '#fefefe');
      doc.style.setProperty('--secondary-color-alpha', '#9e9e9e33');
      bod.style.setProperty('background-image', 'none');
    } else{
      doc.style.setProperty('--primary-color', '#fefefe');
      doc.style.setProperty('--secondary-color', '#2e2e2e');
      doc.style.setProperty('--secondary-color-alpha', '#9e9e9e33');
      bod.style.setProperty('background-image', 'linear-gradient(to top, #3E5879, #020B1A)');
    }
  });

  aboutButton.addEventListener('click', () =>{
    mainSection.classList.toggle('blurred');
    aboutSection.classList.toggle('show');
  });

  aboutSection.addEventListener('click', () =>{
    mainSection.classList.toggle('blurred');
    aboutSection.classList.toggle('show');
  });

  tabButtons.forEach(element => {
    element.addEventListener('click',(e)=>{
      if(element.classList.contains('active')) return;
      tabButtons.forEach(element => {
        element.classList.remove('active');
      });
      changeTab(e, element.title);
    })
  });

  function changeTab(e, tabName){
    let div = document.querySelector('.tab-content');
    let idsList = {'sunny':'5SosqlxeVmbp47asMuQlqi', 'cloudy':'3nR8btC3svZmUktrXDBuRY', 'rainy':'2HC4JdZb7ZqFto0xX4OkMv', 'storm':'4bJCKmpKgti10f3ltz6LLl'};
    div.style.height = "0px";
    const iFrame = document.createElement('iframe');
    iFrame.setAttribute('src', `https://open.spotify.com/embed/album/${idsList[tabName]}?utm_source=generator`);
    iFrame.setAttribute('frameBorder', "0");
    iFrame.setAttribute('allow','autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    iFrame.classList.add('weather-canvas');
    e.target.classList.toggle('active');
    iFrame.addEventListener('load', () =>{
      div.style.height='380px';
    })
    div.innerHTML = "";
    div.appendChild(iFrame);
  }
});

