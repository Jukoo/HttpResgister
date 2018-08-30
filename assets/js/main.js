/*
 * check if serviceWorker is available in navigator object 
 *
 */
let service_status = document.getElementById("service-status")
const browsers_compatibilitiesInfos = "https://developer.mozilla.org/fr/docs/Web/API/ServiceWorker#Browser_compatibility"

if ("serviceWorker" in navigator) {

    window.addEventListener("load" , evt => {
        navigator.serviceWorker
            ["register"]("../../cooworker.js") 
            ["then"](registrate =>{ 
              console.log(`serviceworker is loaded successfuly  ${Object.prototype.toString.call(registrate)}`)
                
                if(registrate["intalling"]) service_status.textContent= "installed" 
                if(registrate["active"]) service_status.textContent = "activated" 
                if(registrate["waiting"]) service_status.textContent = "Waiting ..."  
            })
            ["catch"](err => console.warn("Something wrong !! please check if your file is fully registrade"))

    })
}else console.warn(`the  current browser does not  support service worker
    Please check ${browsers_compatibilitiesInfos} to get more infos`)
   
    /**
     * the current browser doesn't support service worker 
     * use pollyfill if it exist 
     */

