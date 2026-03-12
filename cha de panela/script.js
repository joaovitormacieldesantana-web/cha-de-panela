const presentes = [
  {
    nome: "Pote Organizador para Geladeira - Recipiente com Divisórias",
    link: "https://a.co/d/00ZqvzT5",
  },
  {
    nome: "Escorredor de Louças 16 Pratos 2 Andares Grande Preto ",
    link: "https://a.co/d/09mem1il",
  },
  {
    nome: "Potiche Decorativo de Cristal Com Pé Louise",
    link: "https://a.co/d/01TNehuS",
  },
  { nome: "Caixa Organizadora com Tampa", link: "https://a.co/d/0j2RBqqu" },
  {
    nome: "Conjunto 4 Potes Organizadores de Alimentos ",
    link: "https://a.co/d/09NasRVX",
  },
  {
    nome: "Mop Spray com Gatilho e Dispenser",
    link: "https://a.co/d/06gVnEG0",
  },
  {
    nome: "Conjunto 4 Xícaras de Chá de Cristal com Pires",
    link: "https://a.co/d/02J1rNjk",
  },
  {
    nome: "Kit 5 Potes/Tigelas Redondos de Vidro Borossilicato com Tampa ",
    link: "https://a.co/d/0fZxB7do",
  },
  {
    nome: "Prato Com Pé de Cristal Coração Transparente Chumbo",
    link: "https://a.co/d/001X4toS",
  },
  {
    nome: "Fatiador Cortador Ralador De Legumes Frutas Verduras ",
    link: "https://a.co/d/08DLoV5q",
  },
  {
    nome: "Kit Completo Conjunto 19 Peças Utensílios de Cozinha em Silicone e Madeira Organização",
    link: "https://a.co/d/0cJDgNEW",
  },
  {
    nome: "Processador de Alimentos Mini 3 Laminas Aço Inoxidável ",
    link: "https://a.co/d/077m73n7",
  },
  { nome: "Mimo Style Ralador", link: "https://a.co/d/06mO3SLC" },
  { nome: "Conjunto de 6 Taças em Vidro", link: "https://a.co/d/03VgYVS9" },
  {
    nome: "Forma RED de Metal c/Fundo Removível - bordas onduladas",
    link: "https://a.co/d/04vReQOp",
  },
  {
    nome: "Kit 2 Peças Amassador Espremedor Triturador de Alho e Amassador de Batatas Purê Legumes e Feijão Inox Manual ",
    link: "https://a.co/d/0hxrj6iQ",
  },
  {
    nome: "Jogo de Panelas 10 Peças Bianco Antiaderente com Tampa de Vidro",
    link: "https://a.co/d/0aWBG7td",
  },
  {
    nome: "Tapete Kit de Cozinha Antiderrapante 3 Peças Mesclado Geométrico Conjunto Passadeira ",
    link: "https://a.co/d/00wJ1tAN",
  },
  { nome: "MONDIAL Batedeira Prática, Preto", link: "https://a.co/d/0gZ2KhBF" },
  {
    nome: "Jogo De Assadeiras Opaline Marinex Nadir",
    link: "https://a.co/d/08TMOmXz",
  },
  {
    nome: "Jogo de Assadeiras Tramontina Brasil Antiaderente Starflon Max Mocaccino 3 Peças",
    link: "https://a.co/d/07j676Cs",
  },
  {
    nome: "Jogo de Cama Casal Padrão Percal 400 Fios Ponto Palito 04 Peças, Antiácaro, Não faz bolinha Toque Extra Macio – Branco",
    link: "https://a.co/d/02slnS2p",
  },
  {
    nome: "Abajur de Mesa Dourado com Cúpula em TECIDO Branca – Toque Sofisticado para sua Decoração",
    link: "https://a.co/d/081lwRQq",
  },
  {
    nome: "MONDIAL Aspirador de Pó Turbo Cycle, Vermelho/Preto",
    link: "https://a.co/d/0fjlT6KM",
  },
  {
    nome: "Mixer de Mão Portátil 8 Velocidades 800W Inox KOOKIN Multifuncional com Espremedor de Frutas e 3 Discos de Corte, Lâminas Aprimoradas em Aço Inox ",
    link: "https://a.co/d/07HzuOkm",
  },
  {
    nome: "Espremedor De Limão De Inox Com Cabo Ergonômico",
    link: "https://a.co/d/07HxIHX1",
  },
  {
    nome: "Kit 4 Descanso de Panela de Metal Redondo Protege Panela Quente",
    link: "https://a.co/d/0h1HqCqr",
  },
  {
    nome: "Kit Escorredor de Macarrão Massas + Escorredor Arroz Aço Inox 24cm/20cm Casa Buritis",
    link: "https://a.co/d/08CzKGxM",
  },
  {
    nome: "Jarra de Vidro Borossilicato com Tampa Inox | Resistente ao Calor e Frio | Ideal para Água, Sucos, Chá Gelado e Bebidas | Transparente",
    link: "https://a.co/d/0crl5ife",
  },
  {
    nome: "Toalha de Mesa em Jacquard Inglês Requinte Quadrada (4 Lugares) (Branco)",
    link: "https://a.co/d/0gM1rXDf",
  },
  {
    nome: "Jogo Facas 6 Peças Plenus com Cepo Tramontina Cutelaria",
    link: "https://a.co/d/0eNvstmA",
  },
  {
    nome: "Kit 6 Peças Jogo Americano Redondo - Sousplat Redondo para Mesa Posta - Jogo Americano Elegante para Jantar, Almoço e Café",
    link: "https://a.co/d/0czFKXYs",
  },
  {
    nome: "Escorredor Porta Talheres Aço Inox 4 Divisórias com Sistema de Drenagem Design Moderno Organizador de Utensílios de Cozinha Pia",
    link: "https://a.co/d/0jf4KiQ5",
  },
  {
    nome: "Bandeja de Bambu Hire Marrom Natural 20cm - Mesa Posta - Organização - Utensílios de Cozinha - Enxoval - Decoração - Travessa Retangular - Petisqueira - Utilidades Domésticas",
    link: "https://a.co/d/032qXc3h",
  },
  {
    nome: "Petisqueira de Bambu com 5 Divisórias Round",
    link: "https://a.co/d/02mbQe4h",
  },
  {
    nome: "Mimo Style Porta Pães Com Tampa Retrátil, Feito Inteiramente de Bambu Ecokitchen. Perfeita Para Armazenar Pães, Bolachas e outras coisas. Resistente, Durável e 100% Ecológica",
    link: "https://a.co/d/07v4DiSa",
  },
  {
    nome: "Conjunto de Potes Bowls em Aço Inox - 5 Peças c/Tampa Versátil para Cozinha Moderna Marmita",
    link: "https://a.co/d/0civ927e",
  },
  {
    nome: "Jogo de Facas Tramontina Plenus com Lâminas em Aço Inox e Cabos de Polipropileno Preto 9 Peças",
    link: "https://a.co/d/0eLr3nIK",
  },
  { nome: "Prato para Bolo de Bambu com Pé", link: "https://a.co/d/0iPLs1r8" },
  {
    nome: "Mimo - Porta Bolo Madeira Com Tampa Acrilica Ecokitchen Mimo",
    link: "https://a.co/d/07ZCdLdp",
  },
  {
    nome: "Kit com 8 Descansos de panela e 4 Suporte de travessas para Apoio De Mesa, Cozinha, Decoração, Design minimalista",
    link: "https://a.co/d/0cvx1VAl",
  },
  {
    nome: "Panela de Arroz Elétrica Gran Rizzo 700W Elgin Antiaderente 10 Xícaras 110V com acessórios",
    link: "https://a.co/d/04LKKEKc",
  },
  {
    nome: "Kit Enxoval 6 Peças Edredom Dupla Face e Jogo de Cama de Elástico e Fronhas Casal Queen Casa Dona (Cinza)",
    link: "https://a.co/d/04exOniM",
  },
  {
    nome: "Kit Enxoval 6 Peças Edredom Dupla Face e Jogo de Cama de Elástico e Fronhas Casal Queen Casa Dona (Bege)",
    link: "https://a.co/d/0fkflf81",
  },
  {
    nome: "Kit com 2 Caixas Organizadoras dobráveis com Tampa | Tecido TNT",
    link: "https://a.co/d/09iEPKpV",
  },
  {
    nome: "Tapete Antiderrapante Extra Macio para Banheiro, Cozinha e Casa",
    link: "https://a.co/d/05jl3x2s",
  },
  {
    nome: "Ralador Fatiador de Verduras e Legumes Retrô 3 em 1 C/Manivela",
    link: "https://a.co/d/01K7c4fs",
  },
  {
    nome: "Kit 2 esteiras para braço de sofá com porta copos e porta controle remoto",
    link: "https://a.co/d/0ddUwLR6",
  },
  {
    nome: "Kit 2 Nichos Prateleiras Suporte Porta Shampoo Box Banheiro ",
    link: "https://a.co/d/0iLhZvrd",
  },
  {
    nome: "Pano de Microfibra Kit Com 5 unidades",
    link: "https://a.co/d/0cNcg5oQ",
  },
  {
    nome: "Suporte Magnético Organizador Multiuso 5 Peças em Aço Carbono c/ 10 Ganchos (Preto)",
    link: "https://a.co/d/06QYnkNy",
  },
  {
    nome: "Cesto De Roupa Suja Grande Duplo Retangular de Bambu ComTampa forro e 2 divisorias interna",
    link: "https://a.co/d/04ZihVse",
  },
  {
    nome: "Kit 04 Toalha de Banho 100% Algodão Selecionado com Alta Absorção",
    link: "https://a.co/d/076YMz2t",
  },
  {
    nome: "Jogo de Toalhas Buddemeyer Maya Extra Soft Banho Bege/Kaki 4 peças",
    link: "https://a.co/d/06JsPDCO",
  },
];

const lista = document.getElementById("listaPresentes");

presentes.forEach((presente, i) => {
  let comprado = localStorage.getItem("presente" + i);

  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
  
  <h3>${presente.nome}</h3>
  
  <a href="${presente.link}" target="_blank">
  
  <button ${comprado ? "disabled" : ""}>Comprar</button>
  
  </a>
  
  <br><br>
  
  <button class="${comprado ? "reservado" : ""}" onclick="reservar(${i})">
  
  ${comprado ? "Presente reservado" : "Marcar como reservado"}
  
  </button>
  
  `;

  lista.appendChild(card);
});

function reservar(i) {
  localStorage.setItem("presente" + i, true);

  location.reload();
}

function copiarPix(botao) {
  const chave = "Mariavitoriamacieldesantana@gmail.com";

  navigator.clipboard.writeText(chave);

  botao.innerText = "✔ Pix Copiado";

  botao.style.backgroundColor = "#91e678";

  setTimeout(function () {
    botao.innerText = "Contribuir via Pix";

    botao.style.backgroundColor = "#ffffff";
  }, 2000);
}
