# Sistema de Alocação de Espaços Acadêmicos

Este é um sistema de alocação de espaços físicos para uso acadêmico, desenvolvido em Angular. O objetivo é permitir que usuários visualizem e façam solicitações de uso de salas disponíveis, além de fornecer funcionalidades administrativas para gerenciar esses espaços.

## Funcionalidades

- **Visualização de Espaços**: Usuários podem visualizar salas disponíveis e solicitar o uso para períodos específicos.
- **Gerenciamento de Espaços**: Administradores podem adicionar, editar, ativar/desativar e excluir espaços.
- **Autenticação de Usuário**: O sistema utiliza autenticação JWT para controlar o acesso a diferentes funcionalidades, conforme o perfil do usuário.
- **Gerenciamento de Usuários**: Administradores podem adicionar, editar, ativar/desativar usuários.
- **Solicitações de Uso**: Usuários autenticados podem solicitar a reserva de espaços. Administradores podem aprovar ou rejeitar essas solicitações.

## Tecnologias Utilizadas

- **Angular 17.3.0**: Framework para a construção da interface do usuário e gerenciamento de rotas.
- **Bootstrap 5.3.3**: Framework CSS para um design responsivo e moderno.
- **jQuery 3.7.1**: Utilizado em conjunto com Bootstrap para funcionalidades interativas.
- **JWT-Decode 4.0.0**: Biblioteca para decodificação de tokens JWT.
- **RxJS 7.8.0**: Utilizado para manipulação de dados assíncronos e reativos.
- **Zone.js 0.14.3**: Necessário para o controle de zonas de execução em Angular.

## Instalação

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/ucsal/desenvolvimento-front-end-grupo-9-1
   \`\`\`

2. Navegue até o diretório do projeto:
   \`\`\`bash
   cd desenvolvimento-front-end-grupo-9-1
   \`\`\`

3. Instale as dependências do projeto:
   \`\`\`bash
   npm install
   \`\`\`

4. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   ng serve
   \`\`\`

5. Acesse o sistema em \`http://localhost:4200\`.

## Estrutura do Projeto

- \`src/app\`: Contém os componentes do Angular, serviços e a lógica de autenticação.
- \`src/assets\`: Contém arquivos estáticos, como imagens e estilos.
- \`src/environments\`: Arquivos de configuração para diferentes ambientes (desenvolvimento e produção).

## Serviços

- **Autenticação**: Implementa o login, registro e controle de acesso baseado em roles.
- **Gerenciamento de Espaços**: Serviços para criar, editar e listar espaços disponíveis.
- **Solicitações de Espaço**: Lida com o envio e gerenciamento de pedidos de uso de espaços.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para a sua funcionalidade:
   \`\`\`bash
   git checkout -b nova-funcionalidade
   \`\`\`
3. Faça as alterações necessárias e commit:
   \`\`\`bash
   git commit -m "Adiciona nova funcionalidade"
   \`\`\`
4. Envie suas alterações:
   \`\`\`bash
   git push origin nova-funcionalidade
   \`\`\`
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).