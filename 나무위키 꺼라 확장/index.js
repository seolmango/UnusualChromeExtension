setInterval(function() {
  const data = ['나','무','위','키','꺼','라'];
  let count = 0;
  let before = document.querySelector("#app").innerHTML;
  let newtext = '';
  document.title = '나무위키 꺼라';
  
  let opened = false;
  for(let i = 0; i < before.length; i++) {
    if(before.substring(i,i+1) === '<') {
      opened = true;
    }else if(before.substring(i-1,i) === '>') {
      opened = false;
    }
    if(!opened && before.substring(i,i+1) !== '\\' && before.substring(i-1,i) !== '\\' && before.substring(i,i+1) !== ' ') {
      newtext += data[count];
      count=(count+1)%data.length;
    }else{
      newtext += before.substring(i,i+1);
    }
  }
  document.querySelector("#app").innerHTML = newtext;
}, 1000);