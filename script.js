window.addEventListener('DOMContentLoaded',function (){
  var aboutSection =this.document.getElementById('about'),
      mainSection= this.document.querySelector('.page-content'),
      aboutButton=this.document.querySelector('.about-button'),
      tabButtons=this.document.querySelectorAll('.tab-selector');
      
  aboutButton.addEventListener('click', (event) =>{
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
    let div=document.querySelector('.tab-content');
    let idsList= {'sunny':'5SosqlxeVmbp47asMuQlqi', 'cloudy':'3nR8btC3svZmUktrXDBuRY', 'rainy':'2HC4JdZb7ZqFto0xX4OkMv', 'storm':'4bJCKmpKgti10f3ltz6LLl'};
    const iFrame= document.createElement('iframe');
    iFrame.setAttribute('src', `https://open.spotify.com/embed/album/${idsList[tabName]}?utm_source=generator`);
    iFrame.setAttribute('frameBorder', "0");
    iFrame.setAttribute('allow','autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    iFrame.classList.add('weather-canvas');
    iFrame.addEventListener('load', () =>{
      div.style.height='55vmin';
      e.target.classList.toggle('active');
    })
    div.style.height="0px";
    div.innerHTML="";
    div.appendChild(iFrame);
  }

});

