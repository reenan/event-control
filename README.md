# Gestão de Eventos: _Event Control_
#### Grupo 004

Esse aplicativo está sendo desenvolvido para a cadeira de Desenvolvimento de Software III na [UNISINOS](http://www.unisinos.br), com o intuito de aplicar o conteúdo que foi estudado nas cadeiras de Engenharia de Requisitos e Desenvolvimento de Software I e II.

O aplicativo será desenvolvido em:
* Back-end: PHP ([Laravel](https://laravel.com/))
* Front-end: JavaScript + JSX ([ReactJS](https://facebook.github.io/react/))
* Banco de dados: [mySQL](https://www.mysql.com/)

A documentação do projeto estará disponível em: [event-control.io](https://reenan.github.io/event-control/)






Os alunos envolvidos são: [**Renan Souza**](https://github.com/reenan), [**Rafael Wachter**](https://github.com/wachter), [**Júlio Renner**](https://github.com/asuha), [**Tcharles Silva**](https://github.com/tcharlezin) e [**Marco Nunes**](https://github.com/marconm85).

O professor é: [**Raphael Leite**](https://github.com/raphaellc)

Cadeira realizada no semestre: **2017/2**


Passos para iniciar o projeto:

1. Clonar o repositório

-- Backend

2. Executar `composer install` //instala as dependências.
3. Criar um DB no mySQL com nome 'event_control'.
4. Copiar o arquivo '.env.example' para '.env', ou somente renomear o arquivo.
5. Configurar o arquivo '.env' com as configuraçes de acesso ao BD.
6. Executar `php artisan migrate:refresh`//Cria as tabelas no BD informado.
7. Executar `php -S localhost:8000 -t public`//Backend será inicializado na porta 8000

-- Front

8. Na pasta 'client' executar `npm install`.
9. Executar `npm run build`
10. Executar `npm run start`
