# Etapa 1: build de dependências e geração do Prisma Client
FROM node:20 AS build

WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala dependências (inclui Prisma CLI e @prisma/client)
RUN npm install



# Copia o restante do código da aplicação
COPY . .


# Etapa 2: imagem final (opcional — para produção use uma imagem mais leve)
FROM node:20

WORKDIR /app

# Copia tudo da etapa anterior
COPY --from=build /app /app

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "run", "dev"]


