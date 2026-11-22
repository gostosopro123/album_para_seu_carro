Álbum para seu carro


Alunos:
Caiky Ariel Filadelfo | 11261102864
Gabriel Calisto Santos | 11261103557
Pedro Henrique ferreira Sousa | 11261103968
Thiago Augusto Detomasi | 11261100942


Variante: Álbuns


comandos para rodar: 

Para rodar o backend você deverá abrir o terminal e colocar os seguintes comandos:
    
    pip install django django-cors-headers
    python manage.py migrate
    python manage.py createsuperuser

    Quando utilizar esse comando o terminal irá pedir para que você coloque um nome de usuario, email e senha. Depois use esse comando para ligar o servidor.

    python manage.py runserver

O terminal deverá retornar o seguinte caminho para abrir o backend:

    http://127.0.0.1:8000/ 

Para abrir a API coloque no final api/albuns/
E para abrir a tela do admin coloque no final admin/ | para acessar use as informações que você criou.

Abra outro terminal para subir a pagina do frontend

Antes de seguir o proximo passo é importante que você tenha o Node LTS instalado. Para conferir use o seguintes comandos:
    npm -v
    node -v
    Se estiver intalado o terminal irá retornar a versão que ele está.

Agora para subir a pagina do frontend execute os seguintes comandos:

    cd frontend
    npm install
    npm run dev

O terminal irá retornar o caminho para abrir o front no navegador.