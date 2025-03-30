# VertsaPlayTechnicalExercise

Para configurar a conexão à base de dados MongoDB:
1. Instalar o plugin no VS Code chamado MongoDB for VS Code.
2. Abrir o plugin e conectar ao Connect with Connection String.
3. De seguida, inserir a connection string na barra superior, neste caso: mongodb+srv://diogoferreira:Fatima73@cluster0.kwhx2.mongodb.net/Vertsa
4. Criar um ficheiro .env com a connection string, sendo o nome desta variável MONGODB_URI = mongodb+srv://diogoferreira:Fatima73@cluster0.kwhx2.mongodb.net/Vertsa

Executar no terminal do VS Code, o comando npm i para instalar todas as dependências.

Para executar o projeto, executar no terminal do VS Code, o comando npm run dev.
Para gerar a chave de segurança para o login, executar o comando openssl rand -base64 32.
De seguida colocar a sequência alfanumérica que aparece no ficheiro .env com o nome AUTH_SECRET.

Colocar na barra de pesquisa http:localhost/3000/user para aceder à lista de utilizadores.
E para aceder ao painel do admin: localhost/3000/admin.
O painel das férias não foi possível aplicar pois não sabia muito bem como configurar o login e não sei configurar o calendário.
