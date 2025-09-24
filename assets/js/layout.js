(function(){
  function inject(selector, url){
    var host = document.querySelector(selector);
    if(!host) return Promise.resolve();
    return fetch(url).then(function(r){return r.text();}).then(function(html){ host.innerHTML = html; });
  }
  function init(){
    Promise.all([
      inject('#app-header','partials/header.html'),
      inject('#app-footer','partials/footer.html')
    ]).then(function(){
      document.dispatchEvent(new CustomEvent('partials:loaded'));
    }).catch(function(){ /* yoksay */ });
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{ init(); }
})();
