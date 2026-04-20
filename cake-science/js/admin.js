document.addEventListener('DOMContentLoaded', () => {
    console.log('⚙️ Admin panel loaded');
    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const panelName = item.getAttribute('data-panel');
            switchPanel(panelName);
        });
    });
});

function switchPanel(panelName) {
    document.querySelectorAll('.admin-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    const panel = document.getElementById(panelName + 'Panel');
    if (panel) panel.classList.add('active');
}

console.log('✅ Admin ready');