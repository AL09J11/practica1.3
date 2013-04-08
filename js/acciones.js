// JavaScript Document

$(document).ready(function(e) {
  //alert("Listo")
    document.addEventListener("deviceready",function(){
	   $('.btn').click(function(){
		   var boton=(($(this).attr('class')).split(' '))[1];
		   //alert(boton)
		   switch(boton)
		   {
		   case 'b1':
		    navigator.notification.beep(1);
		   break;
		   case 'b2':
		    navigator.notification.beep(2);
		   break;
		   case 'b3':
		    navigator.notification.beep(5);
		   break;
		   case 'v1':
		    navigator.notification.vibrate(500);
		   break;
		   case 'v2':
		    navigator.notification.vibrate(500);
			navigator.notification.vibrate(500);
		   break;		   		   		   		   
		   }
			});
			 $('#derecha').swiperight(function(){
			   navigator.notification.alert("deslizo a la derecha",function(){},"practica 1","aceptar");
		   });
		   
		    $('izquierda').swiperight(function(){
			   navigator.notification.confirm("¿Que desea haser?",function(opcion){
				   switch(opcion){
		   
		   
		   
		   case 1:
		       navigator.notificacion.vibrate(500);
			   navigator.notificacion.vibrtae(500);
		   
		      break;
		
		     } // switch
 }, "practica 1", "beep, vibrate");
	   }); //funcion swpe	  
   },false);

$('table td').eq(1).text(device.name);
$('table td').eq(3).text(device.cordova);
$('table td').eq(5).text(device.platform);
$('table td').eq(7).text(device.version);
$('table td').eq(9).text(device.UUID);



});