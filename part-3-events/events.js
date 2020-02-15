// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })
//
// let clearBtn = document.querySelector('#clear-btn');
//
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

// console.log($('p').text())
$('body').on( "click", "#clear-btn", function( event ) {
    event.preventDefault();
    $('input').val("")
});

$('input').on("input", function(event) {
    console.log($(event.target).val())
    localStorage.setItem(event.target.id, $(event.target).val())
})


$('document').ready(function() {
$('input').each( function() {
    $(this).val(localStorage.getItem($(this).attr("id")))
})

 // let myName = localStorage.getItem('name');


// console.log(myName);

});
