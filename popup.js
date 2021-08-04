function getTodayDateAndTime(){
  var todayDate=new Date();
  var dateElem=document.getElementById('datestatus');
  dateElem.textContent=todayDate.toLocaleDateString('en-GB',{weekday:"long",
   day:"numeric",month:"long",year:"numeric"});
  
  var timeElem=document.getElementById('timestatus');
  timeElem.textContent=todayDate.toLocaleTimeString('en-GB',{timeZone:'Europe/London',hour12:true});
}

setInterval(getTodayDateAndTime,1000);

document.addEventListener('DOMContentLoaded',function(){
    var button=document.getElementById('button');
    button.addEventListener('click',getTodayDateAndTime);
});