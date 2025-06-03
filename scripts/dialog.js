const dialog = document.getElementById('dialog');
const dialogImg = dialog.querySelector('img');
const dialogArticle = dialog.querySelector('article');
const closeBtn = document.querySelector('.dialog_close-btn');

  // Контент для каждой карточки
  const cardContents = {
    frezer: {
      imgSrc: './images/jpg/frezer.jpg',
      title: 'Фрезерная обработка',
      text: 'Прецизионная обработка металла, пластика и дерева на современных станках с ЧПУ. Точность до 0.01 мм, соблюдение ГОСТ и ТУ.'
    },
    lazer: {
      imgSrc: './images/jpg/laser.jpg',
      title: 'Лазерная резка',
      text: 'Чистая и точная лазерная резка металлов до 20 мм. Минимальные допуски, ровные кромки без заусенцев.'
    },
    graver: {
      imgSrc: './images/jpg/graver.jpg',
      title: 'Гравировка',
      text: 'Художественная гравировка на любых материалах. Логотипы, памятные надписи, декоративные элементы.'
    }
  };

  // Обработчики для кнопок карточек
  document.querySelectorAll('.card-section button').forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.closest('.card-section').id;
      const content = cardContents[sectionId];
      // Устанавливаем контент
      dialogImg.src = content.imgSrc;
      dialogImg.alt = content.title;
      dialogArticle.innerHTML = `<h3>${content.title}</h3><p>${content.text}</p>`;
      // Показываем диалог
      dialog.showModal();
    });
  });

closeBtn.addEventListener('click', () => {dialog.close();});

dialog.addEventListener('click', (e) => {if (e.target === dialog) {dialog.close();}});
document.addEventListener('keydown', (e) => {if (e.key === 'Escape' && dialog.open) {dialog.close();}});
