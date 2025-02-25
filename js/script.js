/**
 * スムーズスクロール & 小さな演出のためのスクリプト
 */

// ヘッダー内のリンクをクリックしたときにスムーズスクロール
document.querySelectorAll('.header-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      // スクロール位置を取得してスムーズに移動
      window.scrollTo({
        top: targetElement.offsetTop - 60, // ヘッダー分オフセット
        behavior: 'smooth'
      });
    });
  });
  
  // Heroセクションのボタンも同様にスムーズスクロール
  document.querySelectorAll('.hero-content .btn[href^="#"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });
  