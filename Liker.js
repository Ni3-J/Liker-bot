let likes = 0;
let Auto = setInterval(async () => {
     const heart =  document.querySelector('svg[aria-label="Like"]').parentNode;
     const arrow = document.querySelector('.right').click();
     if (heart) {
       await heart.click()
         likes++;
         console.log(`You've liked ${likes} post(s)`);
         if (likes == 60){
            clearInterval(Auto)
        }
    }
     
     arrow.click();
 }, 6000);


 