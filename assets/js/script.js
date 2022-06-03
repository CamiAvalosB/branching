$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $("#enviar").click(function () {alert("El correo fue enviado");
  });

  $("body").on("dblclick","h3",function() {
    $(this).css("color","red");
  });

  $(".card-title").click(function() {
    $(".card-text").toggle();
  });
  
  });