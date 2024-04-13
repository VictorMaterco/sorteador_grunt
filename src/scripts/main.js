//colocando o documento para rodar antes do script
document.addEventListener('DOMContentLoaded', function() {
    //adicionando um evento de envio para o formulário do sorteador
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        //gerando evento para não atualizar a pagina quando sortear
        evento.preventDefault();

        //criando uma variável par ao número máximo
        let numeroMaximo = document.getElementById('numero-maximo').value;
        
        //transformando a variavel em número inteiro
        numeroMaximo = parseInt(numeroMaximo);
        
        //pegando o número maximo e transformando em uma variavel com número aleatorio.
        let numeroAleatorio = Math.random() * numeroMaximo;
        //fazendo o numero ficar arrendodado para baixo e adicionando +1 para não dá o resultado =0
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        //Colocando o numeroAleatorio no span de resultado
        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})