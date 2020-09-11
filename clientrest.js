$(document).ready(function(){

      $.ajax({
          url: "http://localhost:3000/clients",
          method: "GET",
      }).done(function(resposta){
            for(i in resposta) {
                  let cliente = resposta[i];

                  $("table").append("<tr>"
                     +"<td>"+cliente.id+"</td>"
                     +"<td>"+cliente.name+"</td>"
                     +"<td>"+cliente.email+"</td>"
                     +"<td>"+cliente.address.city+"</td>"
                     +"</tr>");
            }
      });  


})