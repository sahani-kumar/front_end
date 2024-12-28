function updateDate(){
    const now=new Date();
    const hours = now.getHours();
    const Minutes = now.getMinutes();
    const seconds=now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const timeString = `${hours}:${Minutes}:${seconds}:${ampm}`;
    document.getElementById("clock").textContent = timeString;
}
updateDate();
setInterval(updateDate, 1000);