# Projeto Vue + React com Backend

Este é um projeto monorepo contendo uma aplicação frontend (Vue com componentes React) e uma pilha de serviços de backend, incluindo SQL Server, Artifactory e Adminer, todos orquestrados com Docker Compose.

## Estrutura

- `frontend/`: Contém a aplicação Vue.js.
- `backend/`: (WIP) Contém o serviço de backend.
- `docker-compose.yml`: Orquestra todos os serviços.

## Como Executar

### 1. Pré-requisitos

- Docker
- Docker Compose

### 2. Subir os Serviços

A partir da raiz do projeto, execute:
```bash
docker-compose up --build -d
```

### 3. Configuração Inicial (Apenas na primeira vez)

Ao iniciar o ambiente pela primeira vez, alguns serviços precisam de uma configuração manual.

#### a) Configurar Artifactory

1.  Aceda à interface do Artifactory em [http://localhost:8081](http://localhost:8081).
2.  Use as credenciais padrão para fazer login:
    - **Utilizador:** `admin`
    - **Senha:** `password`
3.  Siga os passos do assistente de configuração para finalizar a instalação. A "Base URL" já estará pré-configurada.

#### b) Configurar Base de Dados (SQL Server)

1.  Aceda à interface do Adminer em [http://localhost:8080](http://localhost:8080).
2.  Faça login no SQL Server com as seguintes credenciais:
    - **System:** `MS SQL`
    - **Server:** `db`
    - **Username:** `sa`
    - **Password:** `dev_password_!2024`
3.  Após o login, clique em **"Create database"** e crie a base de dados com o nome `app_db`.

### 4. Acessar os Serviços

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Artifactory (UI):** [http://localhost:8081](http://localhost:8081)
- **Adminer (DB UI):** [http://localhost:8080](http://localhost:8080)
- **SQL Server:** Acessível na porta `1433` da sua máquina local para ferramentas de base de dados.