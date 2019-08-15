function removeUrlAnchor(url){
    let newUrl = url.split('#')[0];
    return newUrl;
  }
  
  console.log(removeUrlAnchor("www.Ironhack.com#about"));