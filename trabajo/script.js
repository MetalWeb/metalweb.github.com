$(document).ready(function() {
	
	
		$("#postre2").hide();
		$("#postre3").hide();
		$("#postre4").hide();
		$("#postre5").hide();
		$("#postre6").hide();
		$("#postre7").hide();
		
		var x = 1;
		
		function ocultar_for() {
			if(x>=1){
				$("#postre"+x).hide();
				x=x-1;
				$("#postre"+x).show();
			}
		}
		
		function ocultar_bac() {
		if(x<7){
			$("#postre"+x).hide();
			x=x+1;
			$("#postre"+x).show();
		}
		
		}
		
		$("#flecha_der").click(ocultar_bac);
		$("#flecha_izq").click(ocultar_for);
	
	
	
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