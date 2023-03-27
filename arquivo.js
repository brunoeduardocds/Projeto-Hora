function carregar(){
    var res = document.getElementById('msg')
    var imagem = document.getElementById('foto')
    var hora = new Date();
    var h = hora.getHours();
    res.innerHTML =`A hora atual é ${h} horas!`

    if (h >= 0 && h < 12) {
        res.innerHTML += "Bom dia!"
        imagem.src = 'fotomanha.png';
        document.body.style.background ='#46aaf2'
    } else if(h>12 && h <18){
        res.innerHTML += "Boa tarde!"
        imagem.src = 'fototarde.png';
        document.body.style.background = '#dc885b'
        
    }else{
        res.innerHTML += "Boa noite!"
        imagem.src ='fotonoite.png'
        window.document.body.style.background = '#004773';
    }
}