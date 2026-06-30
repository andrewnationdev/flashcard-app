# Documentação do aplicativo Mnemóniko

## Visão geral

O Mnemóniko é um aplicativo de flashcards voltado para treino de memória e revisão rápida. A interface principal é dividida em duas áreas: treino e edição:

- No treino, o usuário vê um card aleatório, vira o card para revelar a resposta e informa se acertou ou errou. 

- Na edição, é possível criar, importar, exportar e remover cards.

O projeto usa React com Vite para a interface, Zustand para estado global persistido e SweetAlert2 para mensagens de confirmação. O visual é montado com Tailwind CSS e ícones da biblioteca lucide-react.

## Fluxo principal

Ao abrir o app, a tela principal renderiza um layout fixo com cabeçalho, conteúdo e rodapé. O cabeçalho exibe o nome do app e dois botões de navegação:

- Treino: mostra a área de prática com flashcards.
- Edição: mostra a área para gerenciar os cards.

O estado da tela atual reside no componente raiz e define qual view aparece dentro do layout. Optou-se por esse método em vez de rotas devido ao minimalismo atual da aplicação. Porém, acredita-se que, dada a sua estrutura atual, é possível migrar sem grandes prejuízos caso o crescimento do projeto exija.

## Como o treino funciona

Na view de treino, o app busca os cards armazenados no estado global e sorteia um card aleatório para exibição. Sempre que a lista de cards muda, um novo card é selecionado automaticamente.

O card pode ser clicado para virar e mostrar o verso. A resposta correta fica do lado de trás, com animação de rotação em 3D.

Depois de avaliar o card, o usuário escolhe uma das ações:

- Acertou: aumenta a pontuação do card, soma pontos ao usuário e volta o card para a posição inicial.
- Errou: reduz a pontuação do card, diminui os pontos do usuário e também reseta o card.

Essas ações alimentam um sistema simples de progressão. Conforme os pontos aumentam, o limite máximo de cards que o usuário pode manter também cresce.

## Como a edição funciona

Na view de edição, o usuário consegue administrar os cards existentes e criar novos cards.

Ao adicionar um novo card, o sistema valida:

- Se frente e verso foram preenchidos.
- Se o usuário ainda respeita o limite atual de cards.
- Se há pontos suficientes para permitir expansão da coleção, quando o conjunto já atingiu o tamanho inicial.

Se a validação falhar, o app mostra uma mensagem de erro na própria tela.

Também existem ações para:

- Exportar os cards para um arquivo JSON.
- Importar cards a partir de um JSON válido.
- Remover cards individualmente.

## Estado e persistência

O estado global fica centralizado no store do Zustand. Ele guarda:

- Pontos do usuário.
- Limite máximo de cards.
- Lista de cards.

As mudanças são persistidas automaticamente no navegador com o middleware de persistência do Zustand. Isso significa que os dados continuam salvos mesmo após recarregar a página.

O conjunto inicial já começa com um card de exemplo, o que permite testar o fluxo de treino sem precisar cadastrar conteúdo manualmente primeiro.

## Estrutura dos dados

Cada card contém:

- `id`: identificador numérico.
- `front`: texto da frente do card.
- `back`: texto da resposta.
- `score`: pontuação local do card.
- `collection`: nome da coleção ou tema (posteriormente, será possível a organização e agrupamento de cards com base em coleções).

O formulário de edição cria cards novos com a pontuação zerada e identifica o card por um timestamp.

## Arquitetura resumida

- O componente raiz decide entre treino e edição.
- O layout organiza o visual geral e mantém cabeçalho e rodapé consistentes.
- O store central controla cards, pontos e regras de progressão.
- A área de treino sorteia um card e coleta a resposta do usuário.
- A área de edição administra a coleção de cards.

## Comandos do projeto

- `npm start`: inicia o app em desenvolvimento.
- `npm run build`: gera a versão de produção.
- `npm test`: executa os testes.

## Observações

- A importação e exportação usam JSON.
- O app evita adicionar cards duplicados com base no texto da frente.
- O limite de cards cresce de forma gradual conforme os pontos acumulados (não se aplica aos cards que vêm de importações).
