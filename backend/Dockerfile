# Usa imagem oficial do Node.js
FROM node:20

# Cria diretório da aplicação
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta do backend
EXPOSE 4000

# Inicia o servidor
CMD ["node", "src/server.js"]