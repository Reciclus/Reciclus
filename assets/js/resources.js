
class Resources {

  loading = [];
  resourceCache = {};
  readyCallbacks = [];

  
  load = (urls) => {

    if(urls instanceof Array) urls.forEach(url => this._load(url));
    else this._load(urls);
  }


  _load = (url) => {

    if(this.resourceCache[url]) {

     
      return this.resourceCache[url];

    } else {

      
      const image = new Image();
      image.onload = () => {

        this.resourceCache[url] = image;

        
        if(this.isReady()) { this.readyCallbacks.forEach(callback => callback())}
      };

      
      this.resourceCache[url] = false;
      image.src = url;
    }
  }

  
  get = (url) => {
    return this.resourceCache[url];
  }

  
  isReady = () => {

    let ready = true;

    for(let key in this.resourceCache) {
      if(this.resourceCache.hasOwnProperty(key) && !this.resourceCache[key]) ready = false;
    }

    return ready;
  }

  
  onReady = (callback) => {
    this.readyCallbacks.push(callback);
  }
}
