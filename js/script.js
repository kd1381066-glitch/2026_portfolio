// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const toTop = document.getElementById('toTop');

    // ハンバーガークリック
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('active');

        // メニューが開いている間はTOPボタン非表示
        if (menu.classList.contains('open')) {
            toTop.classList.remove('show');
            toTop.style.pointerEvents = 'none';
        } else {
            toTop.style.pointerEvents = 'auto';
        }
    });
});

// works 下層ページ カテゴリー分けるボタン
const buttons = document.querySelectorAll('.works_archive_filter_btn');
const items = document.querySelectorAll('.works_archive_item');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // ★ ここ追加（アクティブ制御）
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        items.forEach(item => {
            if (filter === 'All' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// topページ　design works 見出しアニメーション
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("start");
        }
    });
});

document.querySelectorAll(".typing").forEach(el => {
    observer.observe(el);
});
