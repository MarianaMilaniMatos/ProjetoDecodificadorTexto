# Projeto Decodificador de Texto

Este é um projeto de uma aplicação web que permite criptografar e descriptografar textos usando um sistema específico de substituição de caracteres. Ele foi desenvolvido com HTML, CSS e JavaScript, e está configurado para funcionar com um conjunto de regras de substituição, limitando o uso a caracteres específicos.

## Funcionalidades

- **Criptografar texto:** Converte as letras "a", "e", "i", "o" e "u" para "ai", "enter", "imes", "ober" e "ufat" respectivamente.
- **Descriptografar texto:** Reverte a criptografia para o texto original.
- **Copiar resultado:** Permite copiar o texto criptografado/descriptografado para a área de transferência.

## Regras de Substituição

- "a" -> "ai"
- "e" -> "enter"
- "i" -> "imes"
- "o" -> "ober"
- "u" -> "ufat"

**Nota:** A aplicação aceita apenas letras minúsculas sem acentos ou caracteres especiais.

## Estrutura do Projeto

- `index.html`: Estrutura HTML da página.
- `CSS/estilo.css`: Estilos da página.
- `JS/script.js`: Lógica de criptografia e descriptografia.
- Imagens:
  - `cripto.png`: Ícone para o botão de criptografar.
  - `descri.png`: Ícone para o botão de descriptografar.
  - `aviso.png`: Aviso sobre os requisitos de entrada.

## Pré-requisitos

Para executar o projeto, basta abrir o arquivo `index.html` em um navegador moderno que suporte HTML5, CSS3 e JavaScript.

## Como Usar

1. Abra o projeto em um navegador.
2. Digite o texto a ser criptografado ou descriptografado na área de entrada.
3. Clique em **Criptografar** para codificar o texto ou em **Descriptografar** para revertê-lo.
4. Use o botão **Copiar** para salvar o texto resultante na área de transferência.

## Estilos e Layout

A aplicação apresenta uma interface centralizada com um fundo de imagem (`fundo.png`) e fontes Arial para todo o texto. Os botões estão na parte inferior à esquerda e apresentam ícones de cadeado.

## Observações Adicionais

- **Limitações:** A aplicação não reconhece letras maiúsculas ou caracteres acentuados e especiais.
- **Efeitos Visuais:** Foram adicionados efeitos para interação ao passar o mouse sobre os botões.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Autor

Desenvolvido por [Mariana Milani Matos](https://github.com/MarianaMilaniMatos)
