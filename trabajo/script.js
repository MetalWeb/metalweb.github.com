$(document).ready(function() {
	
	
		$("#postre2").hide();
		$("#postre3").hide();
		$("#postre4").hide();
		$("#postre5").hide();
		$("#postre6").hide();
		$("#postre7").hide();
		
		var xAlbumPostre = 1;
		
		function ocultar_forPostres() {
			if(xAlbumPostre>1){
				$("#postre"+xAlbumPostre).hide();
				xAlbumPostre=xAlbumPostre-1;
				$("#postre"+xAlbumPostre).show();
			}
		}
		
		function ocultar_bacPostres() {
		if(xAlbumPostre<7){
			$("#postre"+xAlbumPostre).hide();
			xAlbumPostre=xAlbumPostre+1;
			$("#postre"+xAlbumPostre).show();
		}
		
		}
		
		$("#flecha_der").click(ocultar_bacPostres);
		$("#flecha_izq").click(ocultar_forPostres);
		
		
		
		
		var xAlbumBocadito = 1;
		function ocultar_forBocaditos() {
		if(xAlbumBocadito>1){
			$("#bocadito"+xAlbumBocadito).hide();
			xAlbumBocadito=xAlbumBocadito-1;
			$("#bocadito"+xAlbumBocadito).show();
		}

		}
		
		
		function ocultar_bacBocaditos() {
		if(xAlbumBocadito<1){
			$("#bocadito"+xAlbumBocadito).hide();
			xAlbumBocadito=xAlbumBocadito+1;
			$("#bocadito"+xAlbumBocadito).show();
		}
		
		}
		$("#flecha_der").click(ocultar_bacBocaditos);
		$("#flecha_izq").click(ocultar_forBocaditos);
	
	
		
	
	
	
	
	
	$("#cel").hide();
	var x=0;
	var interval_id = setInterval(function() { cambiarbaner2(); },3000);

	 function cambiarbaner2(){
	  if(x % 2 == 0){
	   $("#cel").hide();
	   $("#direccion").show();
	   x=x+1;
	  }
	  else{
	  $("#direccion").hide();
	   $("#cel").show();
	   x=x+1;
	  }
	 
	 }
	 

});