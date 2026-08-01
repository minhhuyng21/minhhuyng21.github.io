document.addEventListener("DOMContentLoaded", () => {
    // Tự động cập nhật năm hiện tại cho footer
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = `© ${new Date().getFullYear()}`;
    }

    // Console thông báo chào mừng thân thiện
    console.log("Welcome to Nguyen Minh Huy's Portfolio! 👋");
});


// Kho dữ liệu chi tiết của các projects
const projectsData = {
    "project-1": {
        icon: "🤖",
        title: "RL Grid Navigation Agent",
        tags: ["Python", "Reinforcement Learning", "Q-Learning", "PyTorch"],
        content: `
            <p><strong>Overview:</strong> This project focuses on building a reinforcement learning agent capable of navigating through a randomized, obstacle-filled grid to reach a target destination.</p>
            <br>
            <p><strong>Technical Details:</strong></p>
            <ul>
                <li>Implemented Q-Learning algorithm from scratch.</li>
                <li>Built a custom map generator using DFS/BFS algorithms to ensure valid paths always exist.</li>
                <li>Designed a JSON-based reward system to easily tweak penalties for hitting obstacles vs. reaching the goal.</li>
            </ul>
            <br>
            <a href="#" class="btn-p">View on GitHub</a>
        `
    },
    "project-2": {
        icon: "🕷️",
        title: "Exam Score Web Scraper",
        tags: ["Python", "Regex", "Data Scraping"],
        content: `
            <p><strong>Overview:</strong> A robust Python tool designed to crawl and extract Vietnamese national high school exam scores directly from an official government portal.</p>
            <br>
            <p>I utilized purely Regex and built-in Python libraries instead of heavy frameworks like BeautifulSoup to maximize speed and bypass simple block mechanisms.</p>
            <br>
            <a href="#" class="btn-s">View Source Code</a>
        `
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Phần code của copyright footer (đã có từ trước)
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) yearSpan.textContent = `© ${new Date().getFullYear()}`;

    // ─── LOGIC CHO MODAL PROJECT ───
    const modalOverlay = document.getElementById('projectModal');
    if (!modalOverlay) return; // Nếu trang hiện tại không có modal thì bỏ qua

    const closeBtn = document.getElementById('closeModal');
    const cards = document.querySelectorAll('.modal-trigger');

    // Khai báo các thành phần trong Modal cần thay đổi nội dung
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalTags = document.getElementById('modalTags');
    const modalDesc = document.getElementById('modalDesc');

    // Hàm mở modal và đổ dữ liệu
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-id');
            const data = projectsData[projectId];

            if (data) {
                // Đổ dữ liệu vào Modal
                modalIcon.textContent = data.icon;
                modalTitle.textContent = data.title;
                modalDesc.innerHTML = data.content;
                
                // Render tags
                modalTags.innerHTML = '';
                data.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'proj-tag';
                    span.textContent = tag;
                    modalTags.appendChild(span);
                });

                // Hiển thị Modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Khóa cuộn trang nền
            }
        });
    });

    // Hàm đóng Modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Mở lại cuộn trang
    };

    closeBtn.addEventListener('click', closeModal);

    // Click ra ngoài vùng xám để đóng Modal
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});