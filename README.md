# Dom Divino Café | Site demonstrativo

Site institucional em HTML, CSS e JavaScript puros, sem etapa de build.

## Estrutura

```
index.html                    Estrutura da página e meta tags (SEO, Open Graph, Twitter)
css/style.css                 Todo o visual (cores, tipografia, animações)
js/main.js                    Cardápio, filtros, WhatsApp, galeria, painel demo e animações
assets/img/                   Fotos usadas no site
og-dom-divino-cafe.jpg        Imagem de compartilhamento, 1200 x 630
robots.txt, sitemap.xml       Para os buscadores (trocar o domínio)
docs/seo-dom-divino-cafe.md   Tags prontas e título/descrição por página
```

## Publicar no GitHub Pages

O site só aparece com estilo se as pastas `css/`, `js/` e `assets/` estiverem no repositório, na raiz, ao lado do `index.html`. Suba tudo pelo Git, assim as pastas vão juntas:

```
git clone https://github.com/caua-gif11/Dom-divino-cafe.git
# copie TODO o conteúdo desta pasta para dentro da pasta clonada, substituindo os arquivos
cd Dom-divino-cafe
git add -A
git commit -m "Site completo com CSS e JS conectados"
git push
```

Depois, em Settings > Pages, use "Deploy from a branch", branch `main`, pasta `/ (root)`.

## Como rodar

Abra `index.html` no navegador, ou rode um servidor local na pasta, por exemplo `npx serve`.
É preciso internet para carregar as fontes (Google Fonts) e a rolagem suave (Lenis, via jsDelivr). Sem internet, o site abre com fontes padrão e rolagem normal.

## O que editar

- **Cores:** variáveis no começo de `css/style.css`.
- **Produtos, categorias, preços e descrições:** listas `CATS` e `ITEMS` em `js/main.js`. Cada item usa uma foto de `IMG` (índice `i`); `z`, `px` e `py` controlam o zoom e o recorte.
- **Encomendas:** lista `ORD` em `js/main.js`.
- **WhatsApp e mapa:** objeto `CONFIG` em `js/main.js`. O número `5511900000000` é fictício.
- **Fotos:** trocar os arquivos de `assets/img/` mantendo o nome, ou ajustar o objeto `IMG`.
- **Domínio:** procurar `SEU-DOMINIO.com.br` em `index.html`, `robots.txt` e `sitemap.xml`.

## Demonstrativo (trocar antes de publicar)

Endereço, horário, Instagram, texto do Sobre nós, produtos e preços. As imagens são de demonstração.

## Fora desta versão

React, TypeScript, Tailwind, banco de dados e painel administrativo com login (Supabase), previstos no prompt original. O botão "Painel administrativo (demo)" do rodapé apenas edita o texto na página, sem salvar.
