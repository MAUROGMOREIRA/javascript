function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id','foto')
   
   if(fsex[0].checked){   
     if (idade >=0 && idade < 14){
        genero = 'Menino'
         img.setAttribute('src','criancahomem.jpg')
     }else if(idade <21){
        genero = 'Jovem'
         img.setAttribute('src','jovemhomem.jpg')
     }else if(idade < 50){
        genero = 'Homem Adulto'
         img.setAttribute('src','homemadulto.jpg')
     }else{
        genero = 'Homem Idoso'
         img.setAttribute('src','idosohomem.jpg')
     }
   }else if(fsex[1].checked){
       if (idade >=0 && idade < 14){
        genero = 'Menina'
        img.setAttribute('src','criancamulher.jpg')
    }else if(idade <21){
        genero = 'Jovem'
        img.setAttribute('src','jovemmulher.jpg')
    }else if(idade < 50){
        genero = 'Mulher Adulta'
        img.setAttribute('src','mulheradulta.jpg')
    }else{
        genero = 'Mulher Idosa'
        img.setAttribute('src','idosomulher.jpg')
    } 

   } 
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
   res.appendChild(img)

}
}