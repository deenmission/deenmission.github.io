 /* import পরবর্তীতে শুধু function এর পূর্বে import লিখে দিলেই index.html এ একটি কোড দিয়েই সকল js লোড হবে*/

function initMenu(menuIcon, menu, closeBtn) {
  menuIcon?.addEventListener('click', () => {
    menu.classList.toggle('show');
    document.body.classList.toggle('menu-opened');
  });
  closeBtn?.addEventListener('click', () => {
    menu.classList.remove('show');
    document.body.classList.remove('menu-opened');
  });

  let touchStartX = 0;
  menu?.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
  menu?.addEventListener('touchend', e => {
    const swipeDistance = e.changedTouches[0].clientX - touchStartX;
    if (swipeDistance > 50) {
      menu.classList.remove('show');
      document.body.classList.remove('menu-opened');
    }
  });
}