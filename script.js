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

	 
	 
	 
	 
	 
	 

		
	$("#paso2").hide();
	$("#paso3").hide();
	  var xPasos = 1;	
	  var ypagina = 1;
	 
    $("#next").click(function(){ 
	  
        if(ypagina == 1){
           $("#paso"+xPasos).hide();	
           xPasos=xPasos+1;	
           ypagina++;			 
           $("#paso"+xPasos).show();
        }	
        else{
         var nombreApellido = /(^([a-z]{1,20})|^)$/	
         
         var telefono = /(^([0-9]{1,8})|^)$/	
         var dni = /(^([0-9]{8,8})|^)$/
         var distritoSelec = document.datosEnvio.entradaselect.selectedIndex;
		 
         if(!nombreApellido.test($("#carritoNombre").val()) || $("#carritoNombre").val().length == 0){
            alert("hay un herror con su Nombre")
         }else if(!nombreApellido.test($("#carritoApellidoP").val()) || $("#carritoApellidoP").val().length == 0 ){
            alert("hay un herror con su Apellido Paterno")
         }else if(!nombreApellido.test($("#carritoApellidoM").val()) || $("#carritoApellidoM").val().length == 0){
            alert("hay un herror con su Apellido Materno")
         }else if(!dni.test($("#carritoDNI").val()) || $("#carritoDNI").val().length == 0){
            alert("hay un herror con su DNI")
         }else if($("#carritoDireccion").val().length == 0){
            alert("hay un herror con su dirrencion")
         }else if(distritoSelec == 0){
            alert("Usted no selecciono algun distrito")
         }else if($("#carritoRef").val().length == 0){
            alert("Hay un error con su referencia")
         }else if(!telefono.test($("#carritoTel").val()) || $("#carritoTel").val().length == 0){
            alert("hay un herror con su telefono")
         }else{
  		  $("#botonnext").hide();
		  $("#paso2").hide();
		  $("#paso3").show();
        }
       }
    }); 
	
	
	$("#boton").click(function(){
	
	 var email = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
	 var nombreApellido = /(^([a-z]{1,20})|^)$/
	 
	 
	 if(!nombreApellido.test($("#contacNombre").val()) || $("#contacNombre").val().length == 0){
         alert("hay un herror con su Nombre")
     }else if(!nombreApellido.test($("#contacApellido").val()) || $("#contacApellido").val().length == 0){
         alert("hay un herror con sus Apellidos")
     }else if(!email.test($("#comtacEmail").val()) || $("#comtacEmail").val().length == 0){
          alert("hay un error con su email")
	 }else if($("#mensaje").val().length == 0){
           alert("No escribio su mensaje")
	 }else{
	     alert("su mensaje se envio correctamente")
         document.getElementById("contacto").reset();
	 }	 
	});
	
		
		
		
		
		
		var objJson={
		combo:"Distritos",
		lista:[
		{
			d:"Elige distrito",
		},{	
			d:"Ancon", 
		},{	
			d:"Ate",
		},{	
			d:"Barranco",
			},{	
			d:"Bre�a",
			},{	
			d:"Carabayllo",
			},{	
			d:"Chaclacayo",
			},{	
			d:"Chorrillos",
			},{	
			d:"Cieneguilla",
			},{	
			d:"Comas",
			},{	
			d:"El Agustino",
			},{	
			d:"Independencia",
			},{	
			d:"Jesus Maria",
			},{	
			d:"La Molina",
			},{	
			
			d:"La Victoria",},{	
			d:"Lima",
			},{	
			d:"Lince",
			},{	
			d:"Los Olivos",
			},{	
			
			d:"Lurigancho",},{	
			d:"Lurin",
			},{	
			d:"Magdalena Del Mar",
			},{	
			d:"Miraflores Lima",
			},{	
			d:"Pachacamac",
			},{	
			d:"Pucusana",
			},{	
			d:"Pueblo Libre",
			},{	
			d:"Puente Piedra",
			},{	
			d:"Punta Hermosa",
			},{	
			d:"Punta Negra",
			},{	
			d:"Rimac",
			},{	
			d:"San Bartolo",
			},{	
			d:"San Borja",
			},{	
			d:"San Isidro",
			},{	
			d:"San Juan De Lurigancho",
			},{	
			d:"San Juan De Miraflores",
			},{	
			d:"San Luis",
			},{	
			d:"San Martin De Porres",
			},{	
			d:"San Miguel",
			},{	
			d:"Santa Anita",
			},{	
			d:"Santa Maria Del Mar",
			},{	
			
			d:"Santa Rosa De Lima",
			},{	
			d:"Santiago De Surco",
			},{	
			d:"Surquillo",
			},{	
			d:"Villa El Salvador",
			},{	
			d:"Villa Maria Del Triunfo"
			}
		]
	}
		
		
		
		
		  for(i=0; i<44; i++){
			variable2="d"+i;
			variable3="objJson.lista."+variable2;
			variable=new Option(objJson.lista[i].d,"valor");
			cosa=document.forms['datosEnvio'].elements['entradaselect'];
			cosa.options[i]=variable;
		 }
		 
     
		$("#compraFinal").click(function() {
		  alert('Su compra se ha efectuado correctamente');
        
	    });
		
		$("#carritoFechaT").datepicker();
		


});