/*
 * Caching service  
 * Event step 
 * 1 - on Install   
 * 2 - on Activate 
 * 3 - on Fetch 
 */

const CACHE_NAME ="Sw::Cv"

let {

    cacheLoader

} = CACHE_CORE = {


    On_install (){
    
     self.addEventListener("install" ,evt =>{
       
         /*evt.waitUntil(
             caches
             .open(CACHE_NAME) 
             .then(cache_name => {
              cache_name.addAll(CURRENT_CACHE_ASSETS)
             })
         )*/
     })
    } , 

    On_active (){
    
       self.addEventListener("activate"  , evt=>{
          console.log("the Cache is successfully  activated")
           evt.waitUntil(

               caches.keys()
               .then(current_cacheName => {
                   return Promise['all'](
                    current_cacheName.map(_Cn => {
                    if (_Cn != current_cacheName){ return caches.delete(_Cn)}    
                    })
                   )
               })
           )
       
       })
    } , 
    
    On_fetch () {
    
        self.addEventListener("fetch" , evt => {
            
            console.log("fetching url ::" + evt.request.url) 
            evt.respondWith(
                fetch(evt.resquest)
                .then(res =>  {
                    const request_clone  = res.clone()
                    caches.open(CACHE_NAME)
                    .then(enable_cache => {
                        enable_cache.put(evt.request , request_clone)
                    }) 
                    return res
                })
                .catch(()=> caches.match(evt.request).then(res => res))
        
             )
        })
    }  , 

    /**
     * subNameSpace : cacheLaoder  
     * loader level : 1 
     * load all method available on CACHE_CORE 
     */
    cacheLoader (mainNameSpace) {
    
        let NoEmptyNamespace = false 
        if (mainNameSpace) {
        
            let keys_exists = Object.keys(mainNameSpace)  ; 

            (keys_exists || keys_exists.length > 0)?NoEmptyNamespace = true : NoEmptyNamespace 
            
            if(NoEmptyNamespace){
                
                for(let method in mainNameSpace){
                
                    (typeof mainNameSpace[method] == "function") ? mainNameSpace[method]() : console.warn(`no module found  on ${mainNameSpace}`)
                }
            }
        }
        
    }
}

cacheLoader(CACHE_CORE) ; 


