# SEO e compartilhamento: Dom Divino Café

## Bloco para o `<head>` (HTML inicial, sem JavaScript)

Trocar `https://SEU-DOMINIO.com.br` pelo endereço oficial do site e publicar `og-dom-divino-cafe.jpg` na raiz do site.

```html
<title>Dom Divino Café | Cafeteria e confeitaria em Mogi das Cruzes</title>
<meta name="description" content="Cafés especiais, bolos artesanais, tortas e doces em Mogi das Cruzes. Conheça o cardápio e faça sua encomenda pelo WhatsApp.">
<link rel="canonical" href="https://SEU-DOMINIO.com.br/">

<meta property="og:type" content="website">
<meta property="og:site_name" content="Dom Divino Café">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="https://SEU-DOMINIO.com.br/">
<meta property="og:title" content="Dom Divino Café | Uma experiência especial a cada momento">
<meta property="og:description" content="Conheça o Dom Divino Café. Cafés especiais, sabores irresistíveis e momentos únicos. Venha nos visitar!">
<meta property="og:image" content="https://SEU-DOMINIO.com.br/og-dom-divino-cafe.jpg">
<meta property="og:image:secure_url" content="https://SEU-DOMINIO.com.br/og-dom-divino-cafe.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Cappuccino com arte de coração e fatia de bolo de chocolate no Dom Divino Café">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Dom Divino Café | Uma experiência especial a cada momento">
<meta name="twitter:description" content="Conheça o Dom Divino Café. Cafés especiais, sabores irresistíveis e momentos únicos. Venha nos visitar!">
<meta name="twitter:image" content="https://SEU-DOMINIO.com.br/og-dom-divino-cafe.jpg">
<meta name="twitter:image:alt" content="Cappuccino com arte de coração e fatia de bolo de chocolate no Dom Divino Café">
```

## Título e descrição por página

Cada rota precisa ter o seu próprio `<title>`, `description`, `canonical` e `og:url`. Na versão em React, gerar essas tags no servidor ou na geração estática (SSR/SSG, por exemplo Next.js ou Vite com pré-renderização), para que estejam no HTML inicial.

| Página | Título | Descrição |
|---|---|---|
| Início `/` | Dom Divino Café \| Uma experiência especial a cada momento | Conheça o Dom Divino Café. Cafés especiais, sabores irresistíveis e momentos únicos. Venha nos visitar! |
| Sobre nós `/sobre` | Sobre nós \| Dom Divino Café | Conheça o Dom Divino Café: amor pela gastronomia e pelo café, produtos de qualidade e o prazer de receber bem. |
| Cardápio `/cardapio` | Cardápio \| Dom Divino Café | Veja o cardápio do Dom Divino Café: cafés, bebidas especiais, bolos, tortas, doces e lanches. |
| Encomendas `/encomendas` | Encomendas de bolos e doces \| Dom Divino Café | Encomende bolos, tortas e doces para comemorações e eventos. Peça seu orçamento pelo WhatsApp. |
| Galeria `/galeria` | Galeria \| Dom Divino Café | Momentos, sabores e detalhes do Dom Divino Café. Siga nosso Instagram. |
| Contato `/contato` | Como chegar e contato \| Dom Divino Café | Endereço, horário e WhatsApp do Dom Divino Café. Venha nos visitar! |

## Checklist antes de divulgar

1. Hospedar `og-dom-divino-cafe.jpg` (1200 × 630, abaixo de 300 KB) em HTTPS e abrir o endereço no navegador para confirmar.
2. Usar sempre URL absoluta na imagem e no `og:url`.
3. Testar no Depurador de Compartilhamento do Facebook, no LinkedIn Post Inspector e enviando o link no WhatsApp.
4. Se trocar a imagem, mudar o nome do arquivo (por exemplo `-v2`), porque as redes guardam a versão antiga em cache.
