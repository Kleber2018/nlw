## Server NodeJs para projeto NLW


### ORM BANCO DE DADOS SQLITE

Instalar o prisma para desenvolvimento ```npm i @prisma/client -D```

Conexão do Banco de dados através do: ```npx prisma init --datasource-provider sqlite```            

Sugestão: Inserir no F1 >json (Open Settings) a linha     ```"[prisma]": { "editor.formatOnSave": true},``` para identar automaticamente quando salvar

Após criar o esquema em schema.prisma, executar o comando de criação do banco ```npx prisma migrate dev```

Interface gráfica para o bd: ```npx prisma studio```

Instalar o prisma para produção ```npm i @prisma/client```


### biblioteca de validação ZOD

AUXILIA NA VALIDAÇÃO DE DADOS



### cors

Instalar a biblioteca de desenvolvimento ```npm i @types/cors -D```