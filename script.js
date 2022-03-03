const botão_carrinho = document.getElementById("Adicionar-Carrinho")
const Icones_Notificação = document.getElementById('Icone-Notificação')

const botão_carrinho_ativado = ()=>{

    Icones_Notificação.style.display = 'block'
    botão_carrinho.innerText = "Parabéns, foi adicionada carrinho"
    
    }

botão_carrinho.addEventListener('click', botão_carrinho_ativado)


const Click_Icone_Notifiação = document.getElementById('Sino-Imagem')
const Div_Icone_Notificação = document.getElementById('Caixa-Mensagem-Notificação')


const Icone_Notificação_Ativada = () =>{

    
    if(Div_Icone_Notificação.style.display == 'none'){

        Div_Icone_Notificação.style.display = 'block'
    }

    else{
        Div_Icone_Notificação.style.display = 'none'
      }
}

Click_Icone_Notifiação.addEventListener('click',Icone_Notificação_Ativada )


const Cor_Favoritos = document.getElementById('Caixa-Favoritos')

const Mudar_Cor_Favoritos = () =>{
    Cor_Favoritos.style.backgroundColor = 'red' 
}

Cor_Favoritos.addEventListener('click', Mudar_Cor_Favoritos)


const button_homem = document.getElementById('Button-homem')
const Opção_button_homem = document.getElementById('Div-Opção')
const Opção_homem2 = document.getElementById('Div-Opção-2')


const Div_Homem_Ativada = () =>{


    if (Opção_button_homem.style.display == 'none') {
        Opção_button_homem.style.display = 'block'
    
    }

    else{
        Opção_button_homem.style.display = 'none'
    }

    if(Opção_homem2.style.display == 'none'){
    Opção_homem2.style.display = 'block'
    
    }

    else{
        Opção_homem2.style.display = 'none'
    }
}


button_homem.addEventListener('click', Div_Homem_Ativada)


const button_Mulher = document.getElementById('Button-Mulher')
const Opção_Mulher = document.getElementById('Div-Opção-Mulher')
const Opção_Mulher_2 = document.getElementById('Div-Opção-Mulher-2')

const Div_Mulher_Ativada = () =>{
    if(Opção_Mulher.style.display == 'none'){
        Opção_Mulher.style.display =' block'
    }
    else{
        Opção_Mulher.style.display = 'none'
    }
    if(Opção_Mulher_2.style.display == 'none')
    Opção_Mulher_2.style.display = 'block'

    else{
        Opção_Mulher_2.style.display = 'none'
    }
}

button_Mulher.addEventListener('click',Div_Mulher_Ativada)



const button_Produtos = document.getElementById('Button-Produtos')
const Opção_Produtos_1 = document.getElementById('Opção-Produtos-1')
const Opção_Produtos_2 = document.getElementById('Opção-Produtos-2')
const Opção_Produtos_3 = document.getElementById('Opção-Produtos-3')
const Opção_Produtos_4 = document.getElementById('Opção-Produtos-4')


const Opção_Produtos_Ativada=()=>{
    if (Opção_Produtos_1.style.display == 'none') {
        Opção_Produtos_1.style.display = 'block'
    }

        else{
            Opção_Produtos_1.style.display = 'none'
        }

    if(Opção_Produtos_2.style.display == 'none'){
    Opção_Produtos_2.style.display = 'block'
}

    else{
        Opção_Produtos_2.style.display = 'none'
    }

    if(Opção_Produtos_3.style.display == 'none'){
    Opção_Produtos_3.style.display = 'block'
}

    else{
        Opção_Produtos_3.style.display = 'none'
    }
        

    if(Opção_Produtos_4.style.display == 'none'){
        Opção_Produtos_4.style.display = 'block'
}
    
        else{
            Opção_Produtos_4.style.display = 'none'
        }
    }

button_Produtos.addEventListener('click', Opção_Produtos_Ativada)


const button_Coleção = document.getElementById('Button-Coleção')

const Opção_Coleção_1 = document.getElementById('Coleção-Primavera')
const Opção_Coleção_2 = document.getElementById('Coleção-Verão')
const Opção_Coleção_3 = document.getElementById('Coleção-Outono')
const Opção_Coleção_4 = document.getElementById('Coleção-Inverno')

const Opção_Coleção_Ativada = () =>{
    if (Opção_Coleção_1.style.display == 'none') {
        Opção_Coleção_1.style.display = 'block'
    }

    else{
        Opção_Coleção_1.style.display = 'none'
    }

    if (Opção_Coleção_2.style.display == 'none') {
        Opção_Coleção_2.style.display = 'block'
    }

    else{
        Opção_Coleção_2.style.display = 'none'
    }

    if (Opção_Coleção_3.style.display == 'none') {
        Opção_Coleção_3.style.display = 'block'
    }

    else{
        Opção_Coleção_3.style.display = 'none'
    }

    if (Opção_Coleção_4.style.display == 'none') {
        Opção_Coleção_4.style.display = 'block'
    }

    else{
        Opção_Coleção_4.style.display = 'none'
    }
}

button_Coleção.addEventListener('click', Opção_Coleção_Ativada)