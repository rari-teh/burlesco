Depois de ter tido a extensão injustamente removida do catálogo do Firefox, os devs do Burlesco decidiram tirar o suporte a sites de fora do Brasil numa vã tentativa de levá-lo de volta ao mercado. A Mozilla cagou um monte e os devs se recusam a aceitar a derrota e manter o Burlesco apenas como um userscript, que não é regulado por nenhuma entidade. Este fork devolve ao Burlesco seus antigos dias de glória, onde ele também libera o Washington Post, a Bloomberg e outros sites de fora. Commits futuros ao Burlesco oficial, caso não interfiram no funcionamento desses sites, serão incorporados a este fork.

Abaixo, a descrição oficial do Burlesco.

Extensão e userscript para navegadores que remove o paywall poroso de diversos sites de notícia. Funciona no Opera, Firefox e Chrome (e em qualquer navegador compatível com WebExtension).

Para instalar no seu navegador e para mais informações sobre o projeto, visite https://burles.co

# Desenvolvimento

## Extensão

O código-fonte da extensão possui basicamente três arquivos, na pasta `webext/`:

- `manifest.json`: descreve a extensão para os navegadores e define as permissões;
- `background.js`: bloqueia/manipula pedidos responsáveis pelo paywall;
- `content*.js`: injeta scripts para impedir a ativação do paywall ou revertê-lo.

Há um Makefile para auxiliar no desenvolvimento:

- `make lint`: verifica erros de sintaxe ou de estilo no código. Requer o [`es-lint`](https://github.com/eslint/eslint) que pode instalado com `npm install -g eslint`;
- `make`: executa todas as etapas incluindo o lint e gera extensões empacotadas para cada navegador.

## Userscript

O código-fonte do userscript está em `userscript/burlesco.user.js`. Ele funciona bloqueando pedidos responsáveis pelo paywall e injetando scripts para impedir sua ativação.

Esse userscript funciona apenas com o Tampermonkey, porque é o único com suporte a API @webRequest.

----

Se você tiver alguma dúvida ou ideia para burlar um site novo, abra uma issue ou nos [encontre no Gitter](https://gitter.im/rodorgas/burlesco).

# Publicações suportadas

O Burlesco funciona com os seguintes sites de notícia:

- BR18
- Correio Popular
- Diário Catarinense
- Diário da Região
- Diário Popular
- Diarinho
- Exame
- Folha de Londrina
- Folha de S.Paulo
- Gazeta do Povo
- Gazeta Online
- GaúchaZH
- JOTA
- Jornal de Santa Catarina
- Jornal NH
- Jornal Pioneiro
- Jornal VS
- Nexo
- O Estado de S. Paulo
- O Globo
- Quatro Rodas
- Superinteressante
- UOL
- Veja
