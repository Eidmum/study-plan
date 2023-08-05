function addToLocalStorage(time){
    localStorage.setItem('break',time);
}


function getFromLocalStorage(){
    let time=parseInt(localStorage.getItem('break'));
    time?time=time:time=0;
    return time;

}

export {addToLocalStorage,getFromLocalStorage};