document.addEventListener('DOMContentLoaded', function() {
  let millisecondsElement =
    document.querySelector('.milliseconds');
  let millisecondsContent = millisecondsElement.innerHTML;
  let secondsElement =
    document.querySelector('.seconds');
  let secondsContent = secondsElement.innerHTML;
  let minutesElement =
    document.querySelector('.minutes');
  let minutesContent = minutesElement.innerHTML;

  let i = 0
  let s = 0
  console.log(millisecondsContent);
  start = () => {
     
    if (i == 0 ) {
      millisecondsElement.innerHTML = `${millisecondsContent}`
      millisecondsContent++;
      if (millisecondsContent / 1000 == 1 && secondsContent != 60) {
        millisecondsContent = 000
        secondsContent++
        secondsElement.innerHTML = `${secondsContent}`
      }
      if (millisecondsContent / 1000 == 1 && secondsContent == 60 && minutesContent != 60) {
        minutesContent++
        secondsContent = 00
        millisecondsContent = 000
        minutesElement.innerHTML = `${minutesContent}`
        secondsElement.innerHTML = `${secondsContent}`
      }
      setTimeout(() => { start() }, 0.000000000001)
    }
    if(i==1){
      i=0 
      }
    
  }
  reset = () => {
    console.log("ww")
    minutesContent = `00`
    secondsContent = `00`
    millisecondsContent = `000`
    millisecondsElement.innerHTML = `${millisecondsContent}`
    minutesElement.innerHTML = `${minutesContent}`
    secondsElement.innerHTML = `${secondsContent}`
    i=0
    return i 
  }
  
  stop = () => {
    i = 1
    let result = document.getElementById("record")
    let row = result.insertRow(0)
    let cell = row.insertCell(0)
    cell.innerHTML=
`${minutesElement.innerHTML}:${secondsElement.innerHTML}:${millisecondsElement.innerHTML}`
    
    
  }

})


let i = 1
value = (i) => {
  if (i == 0) {
    return false;
  }
  return true;
}
stop = () => {
  i = 0
  start()

}