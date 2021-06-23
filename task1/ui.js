var numb = document.querySelector(".number");
var counter = 0;
setInterval(() => {
  if(counter == 25 ){
    clearInterval();
  }
  else{// else if (counter-=eval.count)
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);

