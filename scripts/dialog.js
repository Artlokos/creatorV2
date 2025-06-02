const dialog = document.getElementById('dialog');
const closeBtn = document.querySelector('.dialog_close-btn');

closeBtn.addEventListener('click', () => {dialog.close();});

dialog.addEventListener('click', (e) => {if (e.target === dialog) {dialog.close();}});
document.addEventListener('keydown', (e) => {if (e.key === 'Escape' && dialog.open) {dialog.close();}});
