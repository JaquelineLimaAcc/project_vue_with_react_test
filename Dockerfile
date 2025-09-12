# Usa imagem oficial do Node.js para build
FROM node:20

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

RUN chmod +x node_modules/.bin/vite

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Copia o restante do código
COPY . .

# Expõe a porta do frontend (Vite padrão é 5173)
EXPOSE 5173

# Inicia o servidor de desenvolvimento Vite
#CMD ["npm", "run", "dev", "--", "--host"]
CMD ["sh", "-c", "npm run dev -- --host"]