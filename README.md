# RefundClient

Aplicação frontend em React + TypeScript para gerenciar solicitações de reembolso com autenticação de usuário.

## Descrição

Este projeto é uma interface para um sistema de reembolso que permite:
- cadastros e login de usuários;
- funcionários criarem solicitações de reembolso com comprovantes;
- gestores visualizarem, buscarem e navegarem pelas solicitações;
- upload de comprovantes de despesas;
- navegação protegida por função de usuário (`employee` ou `manager`).

## Funcionalidades

- Autenticação com persistência de sessão via `localStorage`
- Registro de novos usuários
- Login de usuários existentes
- Envio de novas solicitações de reembolso
- Upload de arquivo de comprovante
- Dashboard com listagem paginada e pesquisa por nome
- Visualização de detalhes de solicitação para gestores

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Zod
- React Router

## Estrutura principal

- `src/App.tsx` — provedor de autenticação e carregamento de rotas
- `src/routes` — roteamento para autenticação, funcionários e gestores
- `src/pages` — páginas de login, cadastro, dashboard e reembolso
- `src/components` — componentes reutilizáveis de UI
- `src/services/api.ts` — configuração do Axios
- `src/contexts/AuthContext.tsx` — contexto de autenticação global

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com a URL da API backend:

```env
VITE_API_URL=http://localhost:3333
```

3. Execute o aplicativo em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Observações

- O frontend depende de uma API backend compatível com as rotas `/sessions`, `/users`, `/refunds` e `/uploads`.
- A aplicação diferencia usuários por função e carrega rotas diferentes para `employee` e `manager`.
- O componente de paginação usa o total de páginas retornado pela API.

## Comandos úteis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — compila o projeto para produção
- `npm run preview` — pré-visualiza a build
- `npm run lint` — roda o lint no código

