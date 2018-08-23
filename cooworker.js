/*
 * Caching service  
 * Event step 
 * 1 - on Install   
 * 2 - on Activate 
 * 3 - on Fetch 
 */

const CACHE_NAME ="" 

const CURRENT_CACHE_ASSETS = new Set([])


let {

    cacheLoader

} = CACHE_CORE = {


    On_install (){
    
     self.addEventListener("install" ,evt =>{
     

        
     })
    } , 

    On_active (){
    
       self.addEventListener("active"  , evt=>{
       
       
       })
    } , 
    
    On_fetch () {}  , 

    /**
     * subNameSpace : cacheLaoder  
     * loader level : 1 
     * load all method available on CACHE_CORE 
     */
    cacheLoader (mainNameSpace) {
    
        let NoEmptyNamespace = false 
        if (typeof mainNameSpace == "object" ) {
        
            let keys_exists = Object.keys(mainNameSpace)  ; 

            (keys_exists || keys_exists.length > 0)?NoEmptyNamespace = true : NoEmptyNamespace 
            
            if(NoEmptyNamespace){
                
                for(let method in mainNameSpace){
                
                    (typeof mainNameSpace[method] == "function") ? mainNameSpace[method]() : console.warn("")
                }
            }
            

        }
        
    }
}
cacheLoader(CACHE_CORE) ; 
