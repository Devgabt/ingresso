# e-Ticket

O **e-Ticket** é um sistema para compra de ingressos online. Ele permite selecionar o tipo de ingresso, definir a quantidade desejada e visualizar a quantidade disponível de ingressos em tempo real.

## Descrição

O site inclui:
- Uma interface para selecionar o tipo de ingresso e a quantidade desejada.
- Validação para garantir que a quantidade solicitada não exceda a disponível.
- Atualização em tempo real da quantidade disponível de ingressos.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:
- **`index.html`**: Arquivo HTML principal.
- **`styles/_reset.css`**: Arquivo CSS para reset de estilos.
- **`styles/style.css`**: Arquivo CSS principal para estilização do site.
- **`js/app.js`**: Arquivo JavaScript para manipulação da lógica de compra de ingressos.

## Funcionamento

A página permite selecionar o tipo de ingresso e a quantidade desejada. O JavaScript valida se há ingressos suficientes disponíveis e atualiza a quantidade disponível após a compra.

### Funções JavaScript

- **`comprar()`**: Verifica a quantidade de ingressos disponível e atualiza conforme a compra.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Como Executar

1. Clone este repositório:
    ```bash
    git clone https://github.com/Devgabt/ingresso.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd <DIRETORIO_DO_PROJETO>
    ```
3. Abra o arquivo `index.html` em um navegador web para visualizar o site.
