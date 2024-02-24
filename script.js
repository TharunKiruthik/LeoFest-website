const bars = document.querySelector('.toggle-btn');
const navbar = document.querySelector('header .navbar'); 
bars.addEventListener('click',function(){
    if(bars.classList.contains('fa-bars')){
        bars.classList.remove('fa-bars');
        bars.classList.add('fa-xmark');
        navbar.classList.add('slide');
    }
    else {
        bars.classList.remove('fa-xmark');
        bars.classList.add('fa-bars');
        navbar.classList.remove('slide');
    }
})

 // Select HTML elements by their IDs and assign them to variables
 const main = () => {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
      
  //INSERT EVENT DATE AND TIME HERE IN THIS FORMAT: 'March 20, 2024, 00:00:00'
  const EVENTDATE = new Date('April 1, 2024, 00:00:00')
  
  const countDown = new Date(EVENTDATE).getTime()
  const x = setInterval(() => {
      
      const now = new Date().getTime()
      const distance = countDown - now
      
      document.getElementById("days").innerText = Math.floor(distance / day)
      document.getElementById("hours").innerText = Math.floor((distance % day) / (hour))
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / (minute))
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second)
      
      //delay in milliseconds
  }, 0)
}

main();