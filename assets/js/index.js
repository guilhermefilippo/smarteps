// Dados dos projetos
const projects = [
    {
        "image": "https://i.imgur.com/miUo78F.jpeg",
        "title": "Painel EPS Ventilado Sob Medida",
        "description": "Painéis em EPS fabricados sob encomenda, com recortes de alta precisão para dutos de ar, garantindo isolamento térmico superior e instalação ágil em obras residenciais ou comerciais."
    },
    {
        "image": "https://i.imgur.com/jvXTSXy.jpeg",
        "title": "Usinagem CNC de EPS com Ultra-Precisão",
        "description": "Cortes milimétricos em EPS utilizando tecnologia CNC de 5 eixos, proporcionando acabamento impecável para protótipos arquitetônicos e componentes industriais de alta exigência."
    },
    {
        "image": "https://i.imgur.com/RefkIBb.jpeg",
        "title": "Sistema Shaft EPS com Bancada Integrada",
        "description": "Estrutura em EPS leve e resistente à umidade, pronta para receber bancada e instalações hidráulicas, reduzindo prazos de obra e custos de mão-de-obra."
    },
    {
        "image": "https://i.imgur.com/fE6klGE.jpeg",
        "title": "Shaft EPS para Passagem de Tubulações",
        "description": "Solução completa de Shaft em EPS com canais integrados para elétrica e hidráulica, entregando acabamento limpo, isolamento acústico e conformidade com normas comerciais."
    },
    {
        "image": "https://i.imgur.com/gDDMFqn.jpeg",
        "title": "Caixa Shaft Modular em EPS",
        "description": "Módulos pré-usinados em EPS que se encaixam sem emendas, otimizando o espaço técnico e simplificando a manutenção das redes prediais."
    },
    {
        "image": "https://i.imgur.com/uKiIX0Y.jpeg",
        "title": "Shaft EPS com Nicho Reforçado para Válvulas",
        "description": "Estrutura em EPS com nichos preparados para registros e conexões, oferecendo leveza, durabilidade e resistência ao fogo em áreas molhadas."
    },
    {
        "image": "https://i.imgur.com/btdSpDq.jpeg",
        "title": "Shaft EPS Pré-Reboco",
        "description": "Painéis Shaft em EPS com superfície pronta para aplicação direta de argamassa, acelerando etapas de acabamento e elevando a produtividade no canteiro."
    },
    {
        "image": "https://i.imgur.com/5YW8Deg.jpeg",
        "title": "Shaft EPS Classe A para Ambientes Hospitalares",
        "description": "Sistema em EPS sanitário, antifungo e antibactéria, ideal para instalações médicas que exigem alta higiene e fácil limpeza."
    },
    {
        "image": "https://i.imgur.com/8yY5UHx.jpeg",
        "title": "Shaft EPS Slim para Retrofit",
        "description": "Solução ultrafina em EPS que permite passagem de novas instalações sem demolições, preservando isolamento térmico e acústico em projetos de modernização."
    }
];

let currentImageIndex = 0;

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalImage.src = projects[index].image;
    modalTitle.textContent = projects[index].title;
    modalDescription.textContent = projects[index].description;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= projects.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = projects.length - 1;
    }

    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalImage.src = projects[currentImageIndex].image;
    modalTitle.textContent = projects[currentImageIndex].title;
    modalDescription.textContent = projects[currentImageIndex].description;
}

// Fechar modal clicando fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
    // Navegar com setas do teclado
    else if (event.key === 'ArrowLeft') {
        changeImage(-1);
    }
    else if (event.key === 'ArrowRight') {
        changeImage(1);
    }
});

$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    // Animate on scroll
    function animateOnScroll() {
        $('.project-card, .feature-card, .eps-card, .technical-card, .partnership-card').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate');
            }
        });
    }

    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Run on page load
});