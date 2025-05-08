# Usando Bun como base
FROM oven/bun:latest

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos para o container
COPY . .

# Instalar dependências
RUN bun install

# Expor a porta da API
EXPOSE ${PORT}

# Rodar a API
CMD ["sh", "-c", "bunx drizzle-kit push && bun run src/index.ts"]