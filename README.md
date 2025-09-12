# Projeto Vue + React com Backend

Este é um projeto monorepo contendo uma aplicação frontend (Vue com componentes React) e um serviço de backend, orquestrados com Docker Compose.

## Estrutura

- `frontend/`: Contém a aplicação Vue.js.
- `backend/`: Contém o serviço de backend.
- `docker-compose.yml`: Orquestra todos os serviços (frontend, backend, banco de dados, etc.).

## Como Executar

1.  **Pré-requisitos:**
    - Docker
    - Docker Compose

2.  **Subir os serviços:**
    A partir da raiz do projeto, execute:
    ```bash
    docker-compose up --build -d
    ```

3.  **Acessar os serviços:**
    - **Frontend:** [http://localhost:5173](http://localhost:5173)
    - **Adminer (DB UI):** [http://localhost:8080](http://localhost:8080)
    - **Backend API:** [http://localhost:8000](http://localhost:8000)
