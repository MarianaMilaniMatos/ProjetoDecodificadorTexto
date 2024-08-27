// Função para criptografar o texto
function criptografar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

document.addEventListener('DOMContentLoaded', () => {
    const textoEntrada = document.getElementById('textoEntrada');
    const textoSaida = document.getElementById('textoSaida');
    const imagemDesenho = document.getElementById('imagemDesenho');
    const botaoCriptar = document.getElementById('botaoCriptar');
    const botaoDescriptar = document.getElementById('botaoDescriptar');

    // Função para mostrar o resultado
    function mostrarResultado(resultado) {
        textoSaida.textContent = resultado;
        textoSaida.classList.add('show'); // Exibe o resultado
        imagemDesenho.classList.add('hide'); // Oculta a imagem
        textoEntrada.value = ''; // Limpa o campo de entrada
        textoEntrada.placeholder = 'Digite seu texto'; // Reseta o placeholder
    }

    // Evento para o botão de criptografar
    botaoCriptar.addEventListener('click', () => {
        const texto = textoEntrada.value.toLowerCase().trim();
        if (texto) {
            const resultado = criptografar(texto);
            mostrarResultado(resultado);
        }
    });

    // Evento para o botão de descriptografar
    botaoDescriptar.addEventListener('click', () => {
        const texto = textoEntrada.value.toLowerCase().trim();
        if (texto) {
            const resultado = descriptografar(texto);
            mostrarResultado(resultado);
        }
    });
});









