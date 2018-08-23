/*
 * check if serviceWorker is available in navigator object 
 *
 */


if ("serviceWorker" in navigator) {

    window.addEventListener("load" , evt => {
        navigator.serviceWorker
            ["register"]("../../cooworker.js") 
            ["then"](registrate => console.log(`serviceworker is loaded successfuly  ${registrate}`))
            ["catch"](err => console.warn("Something wrong !! please check if your file is fully registrade"))

    })
}
   
    /**
     * the current browser doesn't support service worker 
     * use pollyfill if it exist 
     */

