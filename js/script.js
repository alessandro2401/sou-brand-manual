/**
 * SOU Portal - Manual da Marca
 * Script de Interatividade
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Navegação Suave e Highlight
    // ===================================
    
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    
    // Atualizar item ativo ao clicar
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Adicionar classe active ao item clicado
            this.classList.add('active');
            
            // Scroll suave para a seção
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Atualizar item ativo ao fazer scroll
    let isScrolling = false;
    
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                updateActiveSection();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
    
    function updateActiveSection() {
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        if (currentSection) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-section') === currentSection) {
                    item.classList.add('active');
                }
            });
        }
    }
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    
    const sidebar = document.querySelector('.sidebar');
    let menuButton = document.querySelector('.menu-toggle');
    
    // Criar botão de menu se não existir
    if (!menuButton && window.innerWidth <= 768) {
        menuButton = document.createElement('button');
        menuButton.className = 'menu-toggle';
        menuButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
        menuButton.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001;
            background: var(--azul-institucional);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        document.body.appendChild(menuButton);
        
        menuButton.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
        
        // Fechar sidebar ao clicar em um item (mobile)
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });
        });
        
        // Fechar sidebar ao clicar fora (mobile)
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                !sidebar.contains(e.target) && 
                !menuButton.contains(e.target) && 
                sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }
    
    // ===================================
    // Copiar Código Hex ao Clicar
    // ===================================
    
    const colorHexElements = document.querySelectorAll('.color-hex');
    
    colorHexElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.title = 'Clique para copiar';
        
        element.addEventListener('click', function() {
            const hexCode = this.textContent;
            
            // Copiar para clipboard
            navigator.clipboard.writeText(hexCode).then(function() {
                // Feedback visual
                const originalText = element.textContent;
                element.textContent = '✓ Copiado!';
                element.style.color = 'var(--verde)';
                
                setTimeout(function() {
                    element.textContent = originalText;
                    element.style.color = '';
                }, 1500);
            }).catch(function(err) {
                console.error('Erro ao copiar:', err);
            });
        });
    });
    
    // ===================================
    // Animação de Entrada dos Cards
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animação aos cards
    const animatedElements = document.querySelectorAll(`
        .value-card,
        .color-card,
        .symbolism-card,
        .tone-card,
        .example-card,
        .variation-card,
        .digital-card,
        .download-card
    `);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // ===================================
    // Smooth Scroll para Links Internos
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Inicialização
    // ===================================
    
    // Atualizar seção ativa inicial
    updateActiveSection();
    
    console.log('✅ Manual da Marca SOU Portal carregado com sucesso!');
});

// ===================================
// Função de Download de Arquivos
// ===================================

/**
 * Faz download de um arquivo
 * @param {string} filepath - Caminho do arquivo
 * @param {string} filename - Nome do arquivo para download
 */
function downloadFile(filepath, filename) {
    // Criar elemento <a> temporário
    const link = document.createElement('a');
    link.href = filepath;
    link.download = filename;
    link.style.display = 'none';
    
    // Adicionar ao DOM, clicar e remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Feedback visual
    console.log(`✅ Download iniciado: ${filename}`);
    
    // Opcional: Mostrar toast de sucesso
    showDownloadToast(filename);
}

/**
 * Mostra toast de confirmação de download
 * @param {string} filename - Nome do arquivo baixado
 */
function showDownloadToast(filename) {
    // Criar elemento de toast
    const toast = document.createElement('div');
    toast.className = 'download-toast';
    toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Download iniciado: ${filename}</span>
    `;
    
    // Estilos inline
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: var(--verde, #10B981);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(toast);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Adicionar animações CSS dinamicamente
if (!document.querySelector('#download-animations')) {
    const style = document.createElement('style');
    style.id = 'download-animations';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
