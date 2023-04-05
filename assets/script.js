let alimento = { beterraba: 12, cenoura: 12, batata: 12, pao: 3 }
let ferramenta = { picaretaDiamante: false, espadaDiamante: false, picaretaNetherite: false, espadaNetherite: false };
let menu = { market: false, cave: false, invasion: false };
let villager = {
    vida: 100, fome: 100, coins: 0,

    /* ------ sistema de atualiza os mantimentos ------*/
    exibir: function () {
        document.getElementById("qntMoeda").textContent = this.coins;
        document.getElementById("qntBeterraba").textContent = `x${alimento.beterraba}`;
        document.getElementById("qntBatata").textContent = `x${alimento.batata}`;
        document.getElementById("qntCenoura").textContent = `x${alimento.cenoura}`;
        document.getElementById("qntPao").textContent = `x${alimento.pao}`;
    },

    /* ------ sistema de vida ------*/
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
            document.querySelector(".picaretaC").style.cursor = "not-allowed";
            document.querySelector(".espada").style.cursor = "not-allowed";
            document.querySelector(".carrinho").classList.remove("active");
            document.querySelector(".picaretaC").classList.remove("active");
            document.querySelector(".espada").classList.remove("active");
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
        } else {
            particulaAngry()
        }
    },

    /* ------ sistema de fome ------*/
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
        } else {
            particulaAngry()
        }
    }
};

/* ------ funções ao iniciar ------*/
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
    const particleImg = document.createElement('img');
    particleImg.src = 'assets/files/particles/angry.png';
    particleImg.style.position = 'absolute';
    particleImg.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 24; i++) {
        const particle = particleImg.cloneNode();
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
    const particleImg = document.createElement('img');
    particleImg.src = 'assets/files/particles/heart.png';
    particleImg.style.position = 'absolute';
    particleImg.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 24; i++) {
        const particle = particleImg.cloneNode();
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
    const particleImg = document.createElement('img');
    particleImg.src = 'assets/files/particles/glint.png';
    particleImg.style.position = 'absolute';
    particleImg.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 24; i++) {
        const particle = particleImg.cloneNode();
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
    const particleImg = document.createElement('img');
    particleImg.src = 'assets/files/particles/damage.png';
    particleImg.style.position = 'absolute';
    particleImg.style.transition = 'transform 0.5s ease-out, opacity 0.5s linear';

    for (let i = 0; i < 10; i++) {
        const particle = particleImg.cloneNode();
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
    }
}

/* ------ alimentos para alimentar o villager ------*/
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
            if (villager.vida + 5 <= 101) {
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
            if (villager.vida + 10 <= 101) {
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
            if (villager.vida + 20 <= 101) {
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
            if (villager.vida + 30 <= 101) {
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
            document.querySelector(".picaretaC").src = "assets/files/cave/picaretaD.png";
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

function comprarEspadaD() {
    if (villager.coins < 350) {
        var error = document.getElementById("espadaDMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (ferramenta.espadaDiamante !== true) {
            villager.coins -= 350;
            ferramenta.espadaDiamante = true;
            document.querySelector(".espada").src = "assets/files/invasion/espadaD.png";
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("espadaDMarket");
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
            document.querySelector(".picaretaC").src = "assets/files/cave/picaretaN.png";
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

function comprarEspadaN() {
    if (villager.coins < 1000) {
        var error = document.getElementById("espadaNMarket");
        error.classList.remove("error");
        void error.offsetWidth;
        error.classList.add("error");
        particulaAngry();
    } else {
        if (ferramenta.espadaNetherite !== true) {
            villager.coins -= 1350;
            ferramenta.espadaNetherite = true;
            document.querySelector(".espada").src = "assets/files/invasion/espadaN.png";
            villager.exibir();
            particulaGlint();
        } else {
            var error = document.getElementById("espadaNMarket");
            error.classList.remove("error");
            void error.offsetWidth;
            error.classList.add("error");
            particulaAngry();
        }
    }
}

/* ------ sistema da caverna ------*/
/* ------ picareta (abrir) ------*/
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
            document.querySelector(".picaretaC").classList.remove("active");
            closeMarket();
            if (ferramenta.picaretaNetherite !== false) {
                document.querySelector(".ore").classList.add("picaretaN");
                document.querySelector(".picaretaC").title = "Picareta de Netherite (+4 esmeraldas)";
                document.querySelector(".picaretaC").src = "assets/files/cave/picaretaN.png";
            } else if (ferramenta.picaretaDiamante !== false) {
                document.querySelector(".ore").classList.add("picaretaD");
                document.querySelector(".picaretaC").title = "Picareta de Diamante (+2 esmeraldas)";
                document.querySelector(".picaretaC").src = "assets/files/cave/picaretaD.png";
            } else {
                document.querySelector(".ore").classList.add("picaretaF");
                document.querySelector(".picaretaC").title = "Picareta de Ferro (+1 esmeralda)";
                document.querySelector(".picaretaC").src = "assets/files/cave/picaretaF.png";
            }
        }
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
    document.querySelector(".picaretaC").title = "Mineração";
    document.querySelector(".picaretaC").classList.add("active");
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

/* ------------ Invasão ------------ */
/* ------ espada (abrir) ------*/
const container = document.getElementById("container");
let timer;
const coinsBySword = {
  "espadaNetherite": 4,
  "espadaDiamante": 2,
  "espadaFerro": 1,
};

function startInvasion() {
    menu.invasion = true;
    numImages = 0;
    canGenerateImages = true;
    if (villager.vida !== 0) {
        if (menu.market !== true) {
            document.querySelector("#invasion").style.display = "block";
            document.querySelector(".sacola ul").style.display = "none";
            document.querySelector(".personagem").style.display = "none";
            document.getElementById("status").style.display = "none";
            document.getElementById("bundle").style.display = "none";
            document.querySelector(".carrinho").style.display = "none";
            document.querySelector(".picaretaC").style.display = "none";
            document.querySelector(".espada").classList.remove("active");
            closeMarket();
            if (ferramenta.espadaNetherite !== false) {
                container.classList.add("espadaN");
                document.querySelector(".espada").title = "Espada de Netherite (+4 esmeraldas)";
                document.querySelector(".espada").src = "assets/files/invasion/espadaN.png";
            } else if (ferramenta.espadaDiamante !== false) {
                container.classList.add("espadaD");
                document.querySelector(".espada").title = "Espada de Diamante (+2 esmeraldas)";
                document.querySelector(".espada").src = "assets/files/invasion/espadaD.png";
            } else {
                container.classList.add("espadaF");
                document.querySelector(".espada").title = "Espada de Ferro (+1 esmeralda)";
                document.querySelector(".espada").src = "assets/files/invasion/espadaF.png";
            }
            if (canGenerateImages = true) {
            timer = setInterval(function () {
                criarImagem();
            }, Math.floor(Math.random() * 1000) + 500);
        }
        }
    }
}

/* ------ espada (fechar) ------*/
function stopInvasion() {
    menu.invasion = false;
    document.querySelector("#invasion").style.display = "none"
    document.querySelector(".personagem").style.display = "block";
    document.getElementById("status").style.display = "block";
    document.getElementById("bundle").style.display = "block";
    document.querySelector(".carrinho").style.display = "block";
    document.querySelector(".picaretaC").style.display = "block";
    document.querySelector(".picaretaC").title = "Invasão";
    document.querySelector(".espada").classList.add("active");
    if (document.getElementById("bundle").src = "assets/files/villager/openBundle.png") {
        inventario()
    }
    clearInterval(timer);
    document.querySelectorAll(".img").forEach(function (imagem) { imagem.remove() });
}

function criarImagem() {
  if (canGenerateImages) {
    var img = document.createElement("div");
    img.classList.add("img", "atack");
    img.style.top = Math.random() * 90 + "%";
    img.style.left = Math.random() * 90 + "%";
    img.addEventListener("click", function () {
      img.remove();
      const coins = coinsBySword[ferramenta.tipo] || 1;
      villager.coins += coins;
      villager.exibir();
    });
    container.appendChild(img);
    numImages++;
    if (numImages >= 20) {
      canGenerateImages = false;
      clearInterval(timer);
    } else {
        canGenerateImages = true;
    }
  }
}

setTimeout(criarImagem, 1000);

container.addEventListener("click", function (event) {
  if (event.target.classList.contains("img")) {
    event.target.remove();
  }
});
