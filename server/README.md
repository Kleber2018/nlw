## Server NodeJs para projeto NLW

## Execução

```npm run dev```


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


### ENVIRONMENT

Instalando o NodeJs: https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-25018081f5e1435e970b2a8b35cd15f6#b7aca7690d96406288c9d96a670089a9

Windows:
```Get-ExecutionPolicy```
Caso ele retorne Restricted, execute o comando:
```Set-ExecutionPolicy RemoteSigned```
E escolha a opção [A] Sim para Todos
⚠️ Caso o comando acima apresente erro, tente usar:
```Set-ExecutionPolicy Bypass -Scope Process```
Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:
```Get-ExecutionPolicy```

Alterada a permissão, basta instalar o Chocolatey com o comando:
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
Após o fim da instalação, feche e abra o Windows Powershell como administrador novamente e execute:
```choco -v```
Caso ele retorne a versão do Chocolatey, a instalação foi um sucesso.
Agora, para instalarmos o Node.js é recomendado, pelo próprio site do Node, usarmos o **nvs** (Node Version Switcher). Com ele é possível ter diversas versões do Node instaladas simultaneamente e escolher qual versão você deseja usar. Para instalar o nvs execute:
```choco install nvs```
E escolha a opção [A]ll - yes to all
Após isso, reinicie o Powershell e execute:
```nvs add lts```
Com isso, o nvs irá baixar e instalar a versão LTS do Node.js (atualmente a v16) mas ainda será necessário informar ao nvs que é essa versão que desejamos usar. Para isso:
```nvs link lts```
Se o comando rodou sem erro, você pode rodar o comando:
```nvs ls```
Esse comando vai retornar as versões do Node que você possui instalada. Basta copiar a versão (como no exemplo a v16) e adicionar na frente do comando nvs link:
nvs link node/16.13.0/x64
Após isso, feche e abra o Powershell novamente e execute:
```node -v```
```npm -v```
Caso retorne as versões do Node e npm, sua instalação foi um sucesso!

Linux (Ubuntu/Debian)
Para o Linux iremos utilizar o NodeSource, basta seguir esses passos:
Verifique se você possui o curl instalado rodando no terminal o comando:
```curl --version```
Caso ele retorne a versão, pode pular para o próximo passo. Caso não, basta rodar o comando:
```sudo apt install curl```
Com o curl instalado, execute o comando de instalação da versão LTS mais recente disponível:
Ubuntu
```curl -fsSL <https://deb.nodesource.com/setup_lts.x> | sudo -E bash -```
```sudo apt-get install -y nodejs```
Debian (como root)
```curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -```
```apt-get install -y nodejs```
Feche o terminal e abra novamente para as alterações fazerem efeito.
Por fim, execute os seguintes comandos no terminal:
```node -v```
```npm -v```
Caso retorne as versões do Node e npm, sua instalação foi um sucesso!

Novo projeto

Na pasta do projeto executa (y -e para aceitar todos os next)

```npm init -y```
```npm i express```

Cria o arquivo na pasta src/server.js
altera em package.json  "main": "src/server.js",

Instalar o typescript somente para desenvolvimento:
```npm i typescript -D```

Instalar configurações pendentes do typescript
```npx tsc - -init``` (executa as configurações do arquivo node modules/.bin/tsc

Alterei package.json para:    
 /* Modules */
"rootDir": "./src", // onde está o projeto
 	"outDir": "./build", //para onde gerar o build/server.js

configurar o auto load:
instalar o ts-node-dev, depois adicionar o caminho em package.json em script "dev": "ts-node-dev src/server.ts"


Executando projeto NodeJs

Gerar arquivo .js:
```npm run build```

Executar arquivo server.js: ```node buld/server.js```
