let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
})

$('label').addClass('green');

$('input.phone').addClass('yellow');

console.log($('input#confirm').attr('id'))

$('p label').addClass('purple') // get specific, select select all labels inside p tag

$('#clear-btn').addClass('red')
