let alimento = { beterraba: 12, cenoura: 12, batata: 12, pao: 3 };
let ferramenta = { picaretaDiamante: false, espadaDiamante: false, picaretaNetherite: false, espadaNetherite: false };
let menu = { market: false, cave: false, invasion: false };
let villager = {
    vida: 100, fome: 100, coins: 0,

    /* ------ sistema que atualiza os mantimentos ------*/
    exibir: function () {
        document.getElementById("qntMoeda").textContent = this.coins;
        document.getElementById("qntBeterraba").textContent = `x${alimento.beterraba}`;
        document.getElementById("qntBatata").textContent = `x${alimento.batata}`;
        document.getElementById("qntCenoura").textContent = `x${alimento.cenoura}`;
        document.getElementById("qntPao").textContent = `x${alimento.pao}`;
    },

    /* ------ sistema de vida ------*/
    statusVida: function () {
        document.getElementById("stsVida").title = `Vida: ${this.vida}%`;

        if (this.vida === 0) {
            document.querySelector("#village").src = "assets/files/villager/death.png";
            document.querySelector(".pillager").innerHTML = '<img src="assets/files/villager/Pillager.gif">';
            document.querySelector("#mensagem").textContent = "O villager morreu de fome";
            document.querySelector(".reset").innerHTML = '<img onclick="resetPage()" class="active" src="assets/files/villager/totemImortalidade.png">';
            document.querySelector("#moedas").style.opacity = 0.6;
            closeMarket();
            closeCave();
        } else if (this.vida <= 10) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V1.png">';
        } else if (this.vida <= 20) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V2.png">';
        } else if (this.vida <= 30) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V3.png">';
        } else if (this.vida <= 40) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V4.png">';
        } else if (this.vida <= 50) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V5.png">';
        } else if (this.vida <= 60) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V6.png">';
        } else if (this.vida <= 70) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V7.png">';
        } else if (this.vida <= 80) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V8.png">';
        } else if (this.vida <= 90) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V9.png">';
        } else if (this.vida <= 100) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V10.png">';
        }
    },

    /* ------ sistema de fome ------*/
    statusFome: function () {
        document.getElementById("stsFome").title = `Fome: ${this.fome}%`;

        if (this.fome <= 0) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F0.png">';
        } else if (this.fome <= 10) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F1.png">';
        } else if (this.fome <= 20) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F2.png">';
        } else if (this.fome <= 30) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F3.png">';
        } else if (this.fome <= 40) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F4.png">';
        } else if (this.fome <= 50) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F5.png">';
        } else if (this.fome <= 60) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F6.png">';
        } else if (this.fome <= 70) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F7.png">';
        } else if (this.fome <= 80) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F8.png">';
        } else if (this.fome <= 90) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F9.png">';
        } else if (this.fome <= 100) {
            this.vida = 100;
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F10.png">';
        }
    }
};

/* ------ funções ao iniciar ------*/
function preventDragStart(event) {
    event.preventDefault();
}

function addDragStartEventListeners(elemento) {
    for (let i = 0; i < elemento.length; i++) {
        if (elemento[i].closest("#alimentos") === null) {
            elemento[i].addEventListener("dragstart", preventDragStart);
        }
    }
}

addDragStartEventListeners(document.getElementsByTagName("img"));
addDragStartEventListeners(document.getElementsByTagName("span"));
addDragStartEventListeners(document.getElementsByTagName("p"));

/* ------ sistema que atualiza de tempos em tempos ------*/
setInterval(function () {
    if (villager.vida !== 0) {
        if (menu.cave !== true && menu.invasion !== true) {
            if (villager.fome < 50) {
                villager.vida--;
                villager.statusVida();
            }

            if (villager.vida < 100 && villager.vida % 10 === 0) {
                particulaDamage();
            }

            if (villager.fome !== 0) {
                villager.fome--;
                villager.statusFome();
            }
        }
    }
}, 1400);

villager.exibir();
villager.statusVida();
villager.statusFome();

/* ------ balão de fome ------*/
setInterval(function () {
    if (villager.vida !== 0) {
        if (villager.fome < 50) {
            let comidaAleatoria = ['assets/files/foods/beterraba.png', 'assets/files/foods/batata.png', 'assets/files/foods/cenoura.png', 'assets/files/foods/pao.png'];
            document.querySelector(".balao").style.display = "block";
            document.querySelector(".balao span").innerHTML = `<img src="${comidaAleatoria[Math.floor(Math.random() * comidaAleatoria.length)]}">`;
            setTimeout(() => {
                document.querySelector(".balao").style.display = "none";
            }, 3500);
        }
    }
}, 8000)

/* ------ sistema de recomeçar ------*/
function resetPage() {
    window.location.reload();
}

/* ------ particulas do personagem ------*/
function particulaAngry() {
    const img = document.createElement('img');
    img.src = 'assets/files/particles/angry.png';
    img.style.position = 'absolute';
    img.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 24; i++) {
        const particle = img.cloneNode();
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 12 + 10 + 'px';
        setTimeout(() => {
            document.getElementById('particulas').appendChild(particle);
            particle.style.opacity = '0';
            particle.style.transform = 'translate(' + (Math.random() * 200 - 100) + 'px, ' + (Math.random() * 200 - 100) + 'px)';
            setTimeout(() => {
                particle.remove();
            }, 800);
        }, i * 50);
    }
}

function particulaHeart() {
    const img = document.createElement('img');
    img.src = 'assets/files/particles/heart.png';
    img.style.position = 'absolute';
    img.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 24; i++) {
        const particle = img.cloneNode();
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 12 + 10 + 'px';
        setTimeout(() => {
            document.getElementById('particulas').appendChild(particle);
            particle.style.opacity = '0';
            particle.style.transform = 'translate(' + (Math.random() * 200 - 100) + 'px, ' + (Math.random() * 200 - 100) + 'px)';
            setTimeout(() => {
                particle.remove();
            }, 800);
        }, i * 50);
    }
}

function particulaGlint() {
    const img = document.createElement('img');
    img.src = 'assets/files/particles/glint.png';
    img.style.position = 'absolute';
    img.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 24; i++) {
        const particle = img.cloneNode();
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 12 + 10 + 'px';
        setTimeout(() => {
            document.getElementById('particulas').appendChild(particle);
            particle.style.opacity = '0';
            particle.style.transform = 'translate(' + (Math.random() * 200 - 100) + 'px, ' + (Math.random() * 200 - 100) + 'px)';
            setTimeout(() => {
                particle.remove();
            }, 800);
        }, i * 50);
    }
}

function particulaDamage() {
    const img = document.createElement('img');
    img.src = 'assets/files/particles/damage.png';
    img.style.position = 'absolute';
    img.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 10; i++) {
        const particle = img.cloneNode();
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 12 + 10 + 'px';
        setTimeout(() => {
            document.getElementById('particulas').appendChild(particle);
            particle.style.opacity = '0';
            particle.style.transform = 'translate(' + (Math.random() * 200 - 100) + 'px, ' + (Math.random() * 200 - 100) + 'px)';
            setTimeout(() => {
                particle.remove();
            }, 800);
        }, i * 50);
    }
}

/* ------ sistema do bundle (abrir e fechar) ------*/
function inventario() {
    if (villager.vida !== 0) {
        let bundle = document.getElementById("bundle");
        let itens = document.querySelector(".sacola ul");
        if (bundle.src.match("assets/files/villager/bundle.png")) {
            bundle.src = "assets/files/villager/openBundle.png";
            itens.style.display = "block";
        } else {
            bundle.src = "assets/files/villager/bundle.png";
            itens.style.display = "none";
            document.querySelectorAll(".error").forEach(img => {
                img.classList.remove("error");
            });
        }
    } else {
        document.getElementById("bundle").src = "assets/files/villager/bundle.png";
        document.getElementById("bundle").style.opacity = 0.6;
        document.getElementById("bundle").style.cursor = "not-allowed";
        document.querySelector(".sacola ul").style.display = "none";
    }
}

/* ------ exibir erro ------*/
function exibirErro(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.classList.remove("error");
    void errorElement.offsetWidth;
    errorElement.classList.add("error");
    particulaAngry();
}

/* ------ alimentos para alimentar o villager ------*/
function alimentarBeterraba() {
    if (alimento.beterraba === 0) {
        exibirErro("beterrabaSacola");
    } else {
        if (villager.fome + 5 >= 100) {
            exibirErro("beterrabaSacola");
        } else {
            if (villager.vida + 5 <= 100) {
                villager.vida += 5;
                villager.statusVida();
                particulaHeart();
            }
            villager.fome += 5;
            alimento.beterraba--;
            villager.statusFome();
            villager.exibir();
            particulaGlint();
        }
    }
}

function alimentarBatata() {
    if (alimento.batata === 0) {
        exibirErro("batataSacola");
    } else {
        if (villager.fome + 10 >= 100) {
            exibirErro("batataSacola");
        } else {
            if (villager.vida + 10 <= 100) {
                villager.vida += 10;
                villager.statusVida();
                particulaHeart();
            }
            villager.fome += 10;
            alimento.batata--;
            villager.statusFome();
            villager.exibir();
            particulaGlint();
        }
    }
}

function alimentarCenoura() {
    if (alimento.cenoura === 0) {
        exibirErro("cenouraSacola");
    } else {
        if (villager.fome + 20 >= 100) {
            exibirErro("cenouraSacola");
        } else {
            if (villager.vida + 20 <= 100) {
                villager.vida += 20;
                villager.statusVida();
                particulaHeart();
            }
            villager.fome += 20;
            alimento.cenoura--;
            villager.statusFome();
            villager.exibir();
            particulaGlint();
        }
    }
}

function alimentarPao() {
    if (alimento.cenoura === 0) {
        exibirErro("paoSacola");
    } else {
        if (villager.fome + 30 >= 100) {
            exibirErro("paoSacola");
        } else {
            if (villager.vida + 30 <= 100) {
                villager.vida += 30;
                villager.statusVida();
                particulaHeart();
            }
            villager.fome += 30;
            alimento.pao--;
            villager.statusFome();
            villager.exibir();
            particulaGlint();
        }
    }
}

/* ------ alimentar arrastando a imagem ------*/
function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
        switch (event.dataTransfer.getData('text/plain')) {
            case 'beterrabaSacola':
                alimentarBeterraba()
                break;
            case 'batataSacola':
                alimentarBatata()
                break;
            case 'cenouraSacola':
                alimentarCenoura()
                break;
            case 'paoSacola':
                alimentarPao()
                break;
        }
    }
}

/* ------ alimentar clicando na imagem ------*/
document.querySelector('.sacola').addEventListener("click", function (event) {
    switch (event.target.id) {
        case 'beterrabaSacola':
            alimentarBeterraba()
            break;
        case 'batataSacola':
            alimentarBatata()
            break;
        case 'cenouraSacola':
            alimentarCenoura()
            break;
        case 'paoSacola':
            alimentarPao()
            break;
    }
});

/* ------ sistema do mercado ------*/
/* ------ carrinho de compra (abrir) ------*/
function openMarket() {
    menu.market = true;
    if (villager.vida !== 0) {
        document.querySelector(".home").style.opacity = 0.33;
        document.getElementById("marketplace").style.display = "block";
        if (document.getElementById("bundle").src === "assets/files/villager/openBundle.png") {
            inventario()
        }
    } else {
        document.querySelector(".carrinho").style.cursor = "not-allowed";
        document.querySelector(".carrinho").classList.remove("active");
    }
}

/* ------ carrinho de compras (fechar) ------*/
function closeMarket() {
    menu.market = false;
    document.querySelector(".home").style.opacity = 1;
    document.getElementById("marketplace").style.display = "none";
    document.querySelector('input[type="radio"]:first-of-type').checked = true;
    document.querySelectorAll(".error").forEach(img => {
        img.classList.remove("error");
    });
}

/* ------ sistema do mercado (itens a comprar) ------*/
function comprarBeterraba() {
    if (villager.coins < 2.5) {
        exibirErro("beterrabaMarket");
    } else {
        if (alimento.beterraba !== 64) {
            villager.coins -= 2.5;
            alimento.beterraba++;
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("beterrabaMarket");
        }
    }
}

function comprarBatata() {
    if (villager.coins < 5) {
        exibirErro("batataMarket");
    } else {
        if (alimento.batata !== 64) {
            villager.coins -= 5;
            alimento.batata++;
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("batataMarket");
        }
    }
}

function comprarCenoura() {
    if (villager.coins < 7.5) {
        exibirErro("cenouraMarket");
    } else {
        if (alimento.cenoura !== 64) {
            villager.coins -= 7.5;
            alimento.cenoura++;
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("cenouraMarket");
        }
    }
}

function comprarPao() {
    if (villager.coins < 12.5) {
        exibirErro("paoMarket");
    } else {
        if (alimento.pao !== 64) {
            villager.coins -= 12.5;
            alimento.pao++;
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("paoMarket");
        }
    }
}

function comprarPicaretaD() {
    if (villager.coins < 250) {
        exibirErro("picaretaDMarket");
    } else {
        if (ferramenta.picaretaDiamante !== true) {
            villager.coins -= 250;
            ferramenta.picaretaDiamante = true;
            document.querySelector(".picareta").src = "assets/files/cave/picaretaD.png";
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("picaretaDMarket");
        }
    }
}

function comprarEspadaD() {
    if (villager.coins < 350) {
        exibirErro("espadaDMarket");
    } else {
        if (ferramenta.espadaDiamante !== true) {
            villager.coins -= 350;
            ferramenta.espadaDiamante = true;
            document.querySelector(".espada").src = "assets/files/invasion/espadaD.png";
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("espadaDMarket");
        }
    }
}

function comprarPicaretaN() {
    if (villager.coins < 1000) {
        exibirErro("picaretaNMarket");
    } else {
        if (ferramenta.picaretaNetherite !== true) {
            villager.coins -= 1000;
            ferramenta.picaretaNetherite = true;
            document.querySelector(".picareta").src = "assets/files/cave/picaretaN.png";
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("picaretaNMarket");
        }
    }
}

function comprarEspadaN() {
    if (villager.coins < 1000) {
        exibirErro("espadaNMarket");
    } else {
        if (ferramenta.espadaNetherite !== true) {
            villager.coins -= 1350;
            ferramenta.espadaNetherite = true;
            document.querySelector(".espada").src = "assets/files/invasion/espadaN.png";
            villager.exibir();
            particulaGlint();
        } else {
            exibirErro("espadaNMarket");
        }
    }
}

/* ------ sistema da caverna ------*/
/* ------ picareta (abrir) ------*/
const ore = document.getElementById("ore");

function updatePicareta(className, title, src) {
    ore.classList.add(className);
    document.querySelector(".picareta").title = title;
    document.querySelector(".picareta").src = src;
}

function openCave() {
    menu.cave = true;
    if (villager.vida !== 0) {
        if (menu.market !== true) {
            document.querySelector("#cave").style.display = "block";
            document.querySelector(".sacola ul").style.display = "none";
            document.querySelector(".personagem").style.display = "none";
            document.getElementById("status").style.display = "none";
            document.getElementById("bundle").style.display = "none";
            document.querySelector(".carrinho").style.display = "none";
            document.querySelector(".espada").style.display = "none";
            document.querySelector(".picareta").classList.remove("active");
            closeMarket();
            if (ferramenta.picaretaNetherite) {
                updatePicareta("picaretaN", "Picareta de Netherite (+4 esmeraldas)", "assets/files/cave/picaretaN.png");
            } else if (ferramenta.picaretaDiamante) {
                updatePicareta("picaretaD", "Picareta de Diamante (+2 esmeraldas)", "assets/files/cave/picaretaD.png");
            } else {
                updatePicareta("picaretaF", "Picareta de Ferro (+1 esmeralda)", "assets/files/cave/picaretaF.png");
            }
        }
    } else {
        document.querySelector(".picareta").style.cursor = "not-allowed";
        document.querySelector(".picareta").classList.remove("active");
    }
}

/* ------ picareta (fechar) ------*/
function closeCave() {
    menu.cave = false;
    document.querySelector("#cave").style.display = "none"
    document.querySelector(".personagem").style.display = "block";
    document.getElementById("status").style.display = "block";
    document.getElementById("bundle").style.display = "block";
    document.querySelector(".carrinho").style.display = "block";
    document.querySelector(".espada").style.display = "block";
    document.querySelector(".picareta").title = "Mineração";
    document.querySelector(".picareta").classList.add("active");
    if (document.getElementById("bundle").src = "assets/files/villager/openBundle.png") {
        inventario()
    }
}

/* ------ minerar ------*/
function minerar() {
    if (ferramenta.picaretaNetherite !== false) {
        villager.coins += 4;
        villager.exibir();
        particulaMineracao()
        particulaMineracao()
        particulaMineracao()
        particulaMineracao()
    } else if (ferramenta.picaretaDiamante !== false) {
        villager.coins += 2;
        villager.exibir();
        particulaMineracao()
        particulaMineracao()
    } else {
        villager.coins++;
        villager.exibir();
        particulaMineracao()
    }
}

/* ------ particula de mineração ------*/
function particulaMineracao() {
    const div = document.getElementById("particulaMineracao");
    const img = document.createElement("img");
    img.src = 'assets/files/cave/esmeraldaUm.png';

    const randomX = Math.floor(Math.random() * div.offsetWidth - img.width);
    const randomY = Math.floor(Math.random() * div.offsetHeight - img.height);
    img.style.position = "absolute";
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";

    div.appendChild(img);
    setTimeout(function () {
        div.removeChild(img);
    }, 969);
}

/* ------------ Invasão ------------ */
/* ------ espada (abrir) ------*/
const container = document.getElementById("container");
let qntPillager = 0;

function updateEspada(className, title, src) {
    container.classList.add(className);
    document.querySelector(".espada").title = title;
    document.querySelector(".espada").src = src;
}

function startInvasion() {
    menu.invasion = true;
    if (villager.vida !== 0) {
        if (menu.market !== true) {
            document.querySelector("#invasion").style.display = "block";
            document.querySelector(".sacola ul").style.display = "none";
            document.querySelector(".personagem").style.display = "none";
            document.getElementById("status").style.display = "none";
            document.getElementById("bundle").style.display = "none";
            document.querySelector(".carrinho").style.display = "none";
            document.querySelector(".picareta").style.display = "none";
            document.querySelector(".espada").classList.remove("active");
            closeMarket();
            if (ferramenta.espadaNetherite) {
                updateEspada("espadaN", "Espada de Netherite (+4 esmeraldas)", "assets/files/invasion/espadaN.png");
            } else if (ferramenta.espadaDiamante) {
                updateEspada("espadaD", "Espada de Diamante (+2 esmeraldas)", "assets/files/invasion/espadaD.png");
            } else {
                updateEspada("espadaF", "Espada de Ferro (+1 esmeralda)", "assets/files/invasion/espadaF.png");
            }
        }
    } else {
        document.querySelector(".espada").style.cursor = "not-allowed";
        document.querySelector(".espada").classList.remove("active");
    }
}

/* ------ espada (fechar) ------*/
function stopInvasion() {
    qntPillager = 0;
    menu.invasion = false;
    document.querySelector("#invasion").style.display = "none"
    document.querySelector(".personagem").style.display = "block";
    document.getElementById("status").style.display = "block";
    document.getElementById("bundle").style.display = "block";
    document.querySelector(".carrinho").style.display = "block";
    document.querySelector(".picareta").style.display = "block";
    document.querySelector(".espada").title = "Invasão";
    document.querySelector(".espada").classList.add("active");
    document.querySelectorAll(".img").forEach(function (img) { img.remove() });
    if (document.getElementById("bundle").src = "assets/files/villager/openBundle.png") {
        inventario()
    }
}

setInterval(function () {
    if (menu.invasion !== false && qntPillager !== 14) {
        criarImagem();
        qntPillager++;
    }
}, Math.floor(Math.random() * 1000) + 500);

function atualizarContadorMoedas(quantidade) {
    villager.coins += quantidade;
    villager.exibir();
}

function criarImagem() {
    const img = document.createElement("div");
    const top = Math.random() * 85 + "%";
    const left = Math.random() * 85 + "%";
    img.classList.add("img");
    img.classList.add("atack");
    img.style.top = top;
    img.style.left = left;
    img.addEventListener("click", function () {
        img.remove();
        qntPillager--;
        if (ferramenta.espadaNetherite !== false) {
            atualizarContadorMoedas(4);
        } else if (ferramenta.espadaDiamante !== false) {
            atualizarContadorMoedas(2);
        } else {
            atualizarContadorMoedas(1);
        }
    });
    container.appendChild(img);
}

setTimeout(criarImagem, 1000);

container.addEventListener("click", function (event) {
    if (event.target.classList.contains("img")) {
        event.target.remove();
    }
});
