
function displaytime(){
    let dateTime= new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
        hr=hr-12
        document.getElementById('ampm').innerHTML='PM'
    }
    document.getElementById('hours').innerHTML=padZero(hr)
    document.getElementById('min').innerHTML=padZero(min)
    document.getElementById('sec').innerHTML=padZero(sec)



}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displaytime,500)