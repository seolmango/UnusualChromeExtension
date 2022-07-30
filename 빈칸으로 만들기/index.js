setInterval(function() {
  let before = document.querySelector("body").innerHTML;
  let newtext = '';
  
  let opened = false;
  let started = false;
  let notchangecount = 0;
  for(let i = 0; i < before.length; i++) {
    if(before.substring(i,i+1) === '<') {
      opened = true;
      if(before.substring(i,i+7) === '<style>') {
        notchangecount++;
      }else if(before.substring(i,i+7) === '<script') {
        notchangecount++;
      }else if(before.substring(i,i+8) === '</style>') {
        notchangecount--;
      }else if(before.substring(i,i+9) === '</script>') {
        notchangecount--;
      }
    }else if(before.substring(i-1,i) === '>') {
      opened = false;
    }
    if(!opened && notchangecount === 0 && before.substring(i,i+1) !== '\\' && before.substring(i-1,i) !== '\\') {
      if(((before.substring(i,i+1) !== ' ' && before.substring(i-1,i) === ' ') || (before.substring(i,i+1) !== '-' && before.substring(i-1,i) === '-') || (before.substring(i,i+1) !== '\\' && before.substring(i-1,i) === '\\') || (before.substring(i,i+1) !== '_' && before.substring(i-1,i) === '_') || (before.substring(i,i+1) !== '.' && before.substring(i-1,i) === '.')) && before.substring(i,i+1) !== '□' && before.substring(i,i+1) !== '■') {
        started = (Math.random() < 0.01);
      }else if(started && ((before.substring(i,i+1) === ' ' && before.substring(i-1,i) !== ' ') || (before.substring(i,i+1) === '-' && before.substring(i-1,i) !== '-') || (before.substring(i,i+1) === '_' && before.substring(i-1,i) !== '_'))) {
        started = false;
      }
      if(started) {
        newtext += '□';
      }else{
        newtext += before.substring(i,i+1);
      }
    }else{
      newtext += before.substring(i,i+1);
    }
  }
  document.querySelector("body").innerHTML = newtext;
},100);