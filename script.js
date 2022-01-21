window.addEventListener('DOMContentLoaded',function (){
  var aboutSection =this.document.getElementById('about'),
      mainSection= this.document.querySelector('.page-content'),
      aboutButton=this.document.querySelector('.about-button'),
      tabButtons=this.document.querySelectorAll('.tab-selector'),
      tabContent=this.document.querySelectorAll('.weather-card');

  window.addEventListener('click', (e) =>{
  
      console.log(e.target);
  
  })
      
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

  function changeTab(event, tabName){
    tabContent.forEach(element => {
      element.classList.remove('active');
      if(element.classList.contains(tabName)){
        element.classList.toggle('active');       
        event.target.classList.toggle('active');
      }    
    });
  }

});

