let alimento = { beterraba: 12, cenoura: 12, batata: 12, pao: 3 }
let ferramenta = { picaretaDiamante: false, picaretaNetherite: false };
let villager = {
    vida: 100, fome: 100, coins: 0,

    exibir: function () {
        document.getElementById("qntMoeda").textContent = this.coins;
        document.getElementById("qntBeterraba").textContent = `x${alimento.beterraba}`;
        document.getElementById("qntBatata").textContent = `x${alimento.batata}`;
        document.getElementById("qntCenoura").textContent = `x${alimento.cenoura}`;
        document.getElementById("qntPao").textContent = `x${alimento.pao}`;
    },

    /* ------------ Sistema de vida ------------ */
    statusVida: function () {
        document.getElementById("stsVida").title = `Vida: ${villager.vida}%`;
        if (villager.vida === 0) {
            document.querySelector("#stsVida").innerHTML = '<img src="assets/files/life/V0.png">';
            document.querySelector(".pillager").innerHTML = '<img src="assets/files/villager/Pillager.gif">';
            document.querySelector(".reset").innerHTML = '<img onclick="resetPage()" class="active" src="assets/files/villager/totemImortalidade.png">';
            document.querySelector("#mensagem").textContent = "O villager morreu de fome";
            document.querySelector("#qntMoeda").textContent = 0;
            document.querySelector("#village").src = "assets/files/villager/death.png";
            document.querySelector("#bundle").src = "assets/files/villager/bundle.png";
            document.querySelector(".balao").style.display = "none";
            document.querySelector(".sacola ul").style.display = "none";
            document.querySelector("#bundle").style.cursor = "not-allowed";
            document.querySelector(".carrinho").style.cursor = "not-allowed";
            document.querySelector(".picareta").style.cursor = "not-allowed";
            document.querySelector(".carrinho").classList.remove("active");
            document.querySelector(".picareta").classList.remove("active");
            document.querySelector("#bundle").style.opacity = 0.6;
            document.querySelector("#moedas").style.opacity = 0.6;
            closeMarket();
            closeCave();
        } else if (villager.vida <= 10) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V1.png">';
        } else if (villager.vida <= 20) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V2.png">';
        } else if (villager.vida <= 30) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V3.png">';
        } else if (villager.vida <= 40) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V4.png">';
        } else if (villager.vida <= 50) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V5.png">';
        } else if (villager.vida <= 60) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V6.png">';
        } else if (villager.vida <= 70) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V7.png">';
        } else if (villager.vida <= 80) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V8.png">';
        } else if (villager.vida <= 90) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V9.png">';
        } else if (villager.vida <= 100) {
            document.getElementById("stsVida").innerHTML = '<img src="assets/files/life/V10.png">';
        }
    },

    /* ------------ Sistema de fome ------------ */
    statusFome: function () {
        document.getElementById("stsFome").title = `Fome: ${villager.fome}%`;
        if (villager.fome <= 0) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F0.png">';
        } else if (villager.fome <= 10) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F1.png">';
        } else if (villager.fome <= 20) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F2.png">';
        } else if (villager.fome <= 30) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F3.png">';
        } else if (villager.fome <= 40) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F4.png">';
        } else if (villager.fome <= 50) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F5.png">';
        } else if (villager.fome <= 60) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F6.png">';
        } else if (villager.fome <= 70) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F7.png">';
        } else if (villager.fome <= 80) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F8.png">';
        } else if (villager.fome <= 90) {
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F9.png">';
        } else if (villager.fome <= 100) {
            this.vida = 100;
            document.getElementById("stsFome").innerHTML = '<img src="assets/files/hunger/F10.png">';
        }
    }
};

/* ------------ Funções ao iniciar o site ------------ */
var elementoIMG = document.getElementsByTagName("img");
var elementoSPAN = document.getElementsByTagName("span");
var elementoP = document.getElementsByTagName("p");

for (var i = 0; i < elementoIMG.length; i++) {
    if (elementoIMG[i].closest("#alimentos") !== null) {
    } else {
        elementoIMG[i].addEventListener("dragstart", function (event) {
            event.preventDefault();
        });
    }
}

for (var i = 0; i < elementoSPAN.length; i++) {
    if (elementoSPAN[i].closest("#alimentos") !== null) {
    } else {
        elementoSPAN[i].addEventListener("dragstart", function (event) {
            event.preventDefault();
        });
    }
}

for (var i = 0; i < elementoP.length; i++) {
    if (elementoP[i].closest("#alimentos") !== null) {
    } else {
        elementoP[i].addEventListener("dragstart", function (event) {
            event.preventDefault();
        });
    }
}

/* ------------ Funções Temporarias ------------ */
setInterval(function () {
    if (villager.vida !== 0) {
        if (villager.fome < 50) {
            villager.vida--;
            villager.statusVida();
        }
        if (villager.vida < 100 && villager.vida % 10 === 0) {
            particulaDamage();
        }
        if (caveStatus === false) {
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

/* ------------ Balão de fome ------------ */
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

/* ------------ Totem para recomeçar ------------ */
function resetPage() {
    window.location.reload();
}

/* ------------ Particulas ------------ */
function particulaAngry() {
    var img = document.createElement("img");
    img.src = 'assets/files/particles/angry.png';
    img.classList.add("random-position");
    for (var i = 0; i < 26; i++) {
        document.querySelector("#particulas").appendChild(img.cloneNode());
    }
    aleatorizarParticulas();
}

function particulaHeart() {
    var img = document.createElement("img");
    img.src = 'assets/files/particles/heart.png';
    img.classList.add("random-position");
    for (var i = 0; i < 12; i++) {
        document.querySelector("#particulas").appendChild(img.cloneNode());
    }
    aleatorizarParticulas();
}

function particulaGlint() {
    var img = document.createElement("img");
    img.src = 'assets/files/particles/glint.png';
    img.classList.add("random-position");
    for (var i = 0; i < 32; i++) {
        document.querySelector("#particulas").appendChild(img.cloneNode());
    }
    aleatorizarParticulas();
}

function particulaDamage() {
    var img = document.createElement("img");
    img.src = 'assets/files/particles/damage.png';
    img.classList.add("random-position");
    for (var i = 0; i < 10; i++) {
        document.querySelector("#particulas").appendChild(img.cloneNode());
    }
    aleatorizarParticulas();
}

function aleatorizarParticulas() {
    document.querySelectorAll(".random-position").forEach(function (image) {
        var randomX = Math.floor(Math.random() * 200);
        var randomY = Math.floor(Math.random() * 150);
        image.style.left = randomX + "px";
        image.style.top = randomY + "px";
    });

    setTimeout(() => {
        document.querySelectorAll(".random-position").forEach(image => {
            image.remove();
        });
    }, 800);
}

/* ------------ Abrir a sacola de comida ------------ */
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
    }
}

/* ------------ Alimentação do Villager ------------ */
function alimentarBeterraba() {
    if (alimento.beterraba === 0) {
        var error = document.getElementById("beterrabaSacola");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (villager.fome + 5 >= 100) {
            var error = document.getElementById("beterrabaSacola");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
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
        var error = document.getElementById("batataSacola");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
    } else {
        if (villager.fome + 10 >= 100) {
            var error = document.getElementById("batataSacola");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
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
        var error = document.getElementById("cenouraSacola");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
    } else {
        if (villager.fome + 20 >= 100) {
            var error = document.getElementById("cenouraSacola");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
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
        var error = document.getElementById("paoSacola");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
    } else {
        if (villager.fome + 30 >= 100) {
            var error = document.getElementById("paoSacola");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
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

/* ------------ Alimentar arrastando a comida para o villager ------------ */
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

/* ------------ Alimentar clicando na comida ------------ */
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


/* ------------ Marketplace ------------ */
function openMarket() {
    if (villager.vida !== 0) {
        document.querySelector(".home").style.opacity = 0.33;
        document.getElementById("marketplace").style.display = "block";
        if (document.getElementById("bundle").src = "assets/files/villager/openBundle.png") {
            inventario()
        }
    }
}

function closeMarket() {
    document.querySelector(".home").style.opacity = 1;
    document.getElementById("marketplace").style.display = "none";
    document.querySelector('input[type="radio"]:first-of-type').checked = true;
    document.querySelectorAll(".error").forEach(img => {
        img.classList.remove("error");
    });
}

/* ------------ Alimentos do mercado ------------ */
function comprarBeterraba() {
    if (villager.coins < 2.5) {
        var error = document.getElementById("beterrabaMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (alimento.beterraba !== 64) {
            villager.coins -= 2.5;
            alimento.beterraba++;
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("beterrabaMarket");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
        }
    }
}

function comprarBatata() {
    if (villager.coins < 5) {
        var error = document.getElementById("batataMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (alimento.batata !== 64) {
            villager.coins -= 5;
            alimento.batata++;
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("batataMarket");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
        }
    }
}

function comprarCenoura() {
    if (villager.coins < 7.5) {
        var error = document.getElementById("cenouraMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (alimento.cenoura !== 64) {
            villager.coins -= 7.5;
            alimento.cenoura++;
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("cenouraMarket");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
        }
    }
}

function comprarPao() {
    if (villager.coins < 12.5) {
        var error = document.getElementById("paoMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (alimento.pao !== 64) {
            villager.coins -= 12.5;
            alimento.pao++;
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("paoMarket");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
        }
    }
}

/* ------------ Ferramentas do mercado ------------ */
function comprarPicaretaD() {
    if (villager.coins < 250) {
        var error = document.getElementById("picaretaDMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (ferramenta.picaretaDiamante !== true) {
            villager.coins -= 250;
            ferramenta.picaretaDiamante = true;
            document.querySelector(".picareta").src = "assets/files/cave/picaretaD.png";
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("picaretaDMarket");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
        }
    }
}

function comprarPicaretaN() {
    if (villager.coins < 1000) {
        var error = document.getElementById("picaretaNMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (ferramenta.picaretaNetherite !== true) {
            villager.coins -= 1000;
            ferramenta.picaretaNetherite = true;
            document.querySelector(".picareta").src = "assets/files/cave/picaretaN.png";
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("picaretaNMarket");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
        }
    }
}

/* ------------ Caverna ------------ */

let caveStatus = false;
function openCave() {
    caveStatus = true;
    if (villager.vida !== 0) {
        document.querySelector(".cave").style.display = "block";
        document.querySelector(".sacola ul").style.display = "none";
        document.querySelector(".personagem").style.display = "none";
        document.getElementById("status").style.display = "none";
        document.getElementById("bundle").style.display = "none";
        document.querySelector(".carrinho").style.display = "none";
        document.querySelector(".picareta").classList.remove("active");
        closeMarket();
        if (ferramenta.picaretaNetherite !== false) {
            document.querySelector(".ore").classList.add("picaretaN");
            document.querySelector(".picareta").title = "Picareta de Netherite (+4 esmeraldas)";
            document.querySelector(".picareta").src = "assets/files/cave/picaretaN.png";
        } else if (ferramenta.picaretaDiamante !== false) {
            document.querySelector(".ore").classList.add("picaretaD");
            document.querySelector(".picareta").title = "Picareta de Diamante (+2 esmeraldas)";
            document.querySelector(".picareta").src = "assets/files/cave/picaretaD.png";
        } else {
            document.querySelector(".ore").classList.add("picaretaF");
            document.querySelector(".picareta").title = "Picareta de Ferro (+1 esmeralda)";
            document.querySelector(".picareta").src = "assets/files/cave/picaretaF.png";
        }
    }
}

function closeCave() {
    caveStatus = false;
    document.querySelector(".cave").style.display = "none"
    document.querySelector(".personagem").style.display = "block";
    document.getElementById("status").style.display = "block";
    document.getElementById("bundle").style.display = "block";
    document.querySelector(".carrinho").style.display = "block";
    document.querySelector(".picareta").title = "Mineração";
    document.querySelector(".picareta").classList.add("active");
    if (document.getElementById("bundle").src = "assets/files/villager/openBundle.png") {
        inventario()
    }
}


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

function particulaMineracao() {
    var div = document.getElementById("particulaMineracao");
    var img = document.createElement("img");
    img.src = 'assets/files/cave/esmeraldaUm.png';

    var width = div.offsetWidth - img.width;
    var height = div.offsetHeight - img.height;
    var randomX = Math.floor(Math.random() * width);
    var randomY = Math.floor(Math.random() * height);
    img.style.position = "absolute";
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";

    div.appendChild(img);
    setTimeout(function () {
        div.removeChild(img);
    }, 969);
}