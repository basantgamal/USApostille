$('#filterCountry').keyup(function(){
  var value = $(this).val().toLowerCase();

  $('.country-row li').each(function(){
    var lcval = $(this).text().toLowerCase();
    if(lcval.indexOf(value)>-1){
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});


// $('.country  td').click(function(){
//   window.location.href = "court.html"; 
// });

// $('.country2  td').click(function(){

//   window.location.href = "newYorkCourt.html"; 
// });

// $('.county  td').click(function(){
//   window.location.href = "court2.html"; 
// });


// $('.indv-btn').click(function(){
//   window.location.href = "noCourt.html"; 
// });


$('.state-btn').click(function(){
  $('.choose-country2').show();
});