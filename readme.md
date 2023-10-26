
## Minha Biblioteca Node Server

  

### Considerações Iniciais

Esse repositório é um projeto básico Node com Typescript.

Bibliotecas instaladas e configuradas (Clique e consulte a documentação):

  

1. [`Express`](https://expressjs.com)

2. [`Typescript`](https://www.typescriptlang.org/docs/)

3. [`NodeJS`](https://nodejs.org/en/docs)

4. [`Prisma ORM`](https://www.prisma.io/docs)

  

### Instalação

1. Faça um fork ou baixe esse repositório.

2. Na pasta raíz, execute:
``
npm install 
``

3. Antes de iniciar sua aplicação, você deve implementar(declarar) as entidades de dados no arquivo:
``prisma/schema.prisma``

4. Você precisa gerar as classes/tipos das entidades, para isso, execute o comando: 
``npx prisma generate``
	 
5. Você precisa gerar as tabelas no banco de dados, para isso, execute o comando:
``npx prisma migrate dev --name init``

 
	Obs: "init" poderá ser subsituído para o apelido que quiser para rodar as migrations.
	Obs 2: Caso esteja utilizando o MongoDB, utilize o comando abaixo, invés do acima:
		``npx prisma db push``

6. Para executar utilize o comando para rodar em ambiente de desenvolvimento ``` npm run dev ``` ou para gerar uma build de produção:  ``npm run build``.

7. Por padrão a porta está configurada para 3333, fique a vontade para alterar no arquivo `server.ts`.

### Rotas
Rotas básicas iniciais implementadas:
1. /user : GET (lista todos os usuários)
2. /user : POST (para criar um usuário)

### Observações

Esse repositório servirá como base para sua aplicação, podendo ser adaptado à cada necessidade.


Os comandos de execução em desenvolvimento e produção estão configurado para o arquivo `server.ts` na pasta `src/`.

  

Foi implementado inicial com Services e Repository Patterns para uma entidade "USER" padrão, fique a vontade para alterar e implementar as novas entidades.

  

O ambiente está configurado em `prisma/schema.prisma` para o SQLite, conforme disponibilizado na parte de considerações iniciais, o prisma é compatível com diversos tipos de bancos de dados, relacionais e não relacionais.

  
  

### Objetivos:

Você precisa implementar for definido no desafio: [`Clique aqui`](https://github.com/cettufg/desafios-cett/blob/main/fullstack.md).