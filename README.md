# m2

# TEAM
047359 - André Pinto
047161 - João Nunes
032705 - João Monteiro

# RELATORIO
Relatório Projeto Final: A História da Fotografia
Grupo: TCM25twg02  
Unidade Curricular: Tecnologias Web - Universidade da Maia

 1. Apresentação do Projeto:
Este projeto consiste no desenvolvimento de uma plataforma web interativa dedicada à História da Fotografia. O objetivo é guiar o utilizador numa viagem temporal, desde a fixação da primeira imagem permanente por Niépce em 1826 até à era atual da fotografia computacional e Inteligência Artificial.

A plataforma foi construída com foco na separação entre dados e apresentação, utilizando ficheiros “XML” para o conteúdo histórico, validados por esquemas “XSD” para garantir a integridade da informação.

 2. Interface do usuário:
Estudo da Interface e Sitemap:
A interface foi planeada para ser intuitiva, permitindo uma exploração fluida através de quatro secções principais:
- Início: Apresentação conceptual com slideshow dinâmico.
- História: Detalhes sobre os inventores e o nascimento da técnica.
- Evolução: Uma linha do tempo interativa baseada em componentes de acordeão.
- Opinião: Uma reflexão sobre a atualidade com um formulário de feedback.

3. Produto:
Descrição do Produto:
O website funciona como um repositório interativo de conhecimento fotográfico. A arquitetura permite que novos marcos históricos sejam adicionados simplesmente editando o ficheiro “evolucao.xml”, sem necessidade de mexer no código HTML.

Instruções de Instalação e Configuração:
1.  Acesso: Copiar o repositório da organização “tcm25twg02” no GitHub.
2.  Execução: Os ficheiros podem ser abertos através de um servidor local (ex: *Live Server* do VS Code) ou então pelo netlify: https://tcm25twg02.netlify.app/

Regras de Utilização e Navegação:
- Acessibilidade: O menu de navegação é fixo (`sticky`), permitindo saltar entre secções a qualquer momento.
- Feedback Visual: A página ativa é destacada no menu com a classe `.active`, ajudando na orientação do utilizador.
- Interatividade: No ecrã de Evolução, os itens utilizam ícones de seta que rodam 180° quando expandidos.

Validações de Formulários:
O formulário na página "opiniao" utiliza uma abordagem dupla de validação:
- HTML5: Uso de atributos `required`, `min/max` para idade e tipos de input específicos (`email`, `number`).
- JavaScript: Função `validarFormulario` que limpa os campos após a submissão e exibe uma mensagem de confirmação personalizada ao utilizador.

Validação do HTML e CSS:
- Método: Testado através dos serviços de validação da W3C.
- CSS: O uso de variáveis CSS (`:root`) e Flexbox no arquivo `style2.css` garante que o layout seja consistente em diferentes navegadores.
- HTML: Estrutura semântica validada para garantir acessibilidade.

Detalhes de Implementação:
- Responsividade: Media queries configuradas para adaptar o slideshow e as tabelas a ecrãs inferiores a 600px.