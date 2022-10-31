function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim    = document.getElementById('txtfim')
    var passo  = document.getElementById('txtpasso')
    var res    = document.querySelector('div#res')
    if(inicio.value.length == 0 || fim.value.length ==0 || passo.value.length ==0){
        res.innerHTML = `Impossivel contar!`
        res.innerHTML = ''
        window.alert('[ERRO] Faltam dados.')  
    }else{
        res.innerHTML = 'contando..<br>'  
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido ! considerar passo = 1')
            p = 1
        }
        if(i < f){
           for(var c=i; c <= f; c+=p){  
              res.innerHTML += `${c} \u{1f449}`
           }
        }else{
            for(var c=i; c >= f; c-=p){  
                res.innerHTML += `${c} \u{1f449}`
             }           
        }
    }
   
          
    
    
   
}