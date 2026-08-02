document.addEventListener("DOMContentLoaded", () => {
    // Tự động cập nhật năm hiện tại cho footer
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = `© ${new Date().getFullYear()}`;
    }

    // Console thông báo chào mừng thân thiện
    console.log("Welcome to Nguyen Minh Huy's Portfolio! 👋");
});


// 1. Kho dữ liệu chi tiết của các projects
const projectsData = {
    "project-1": {
        icon: "🤖",
        title: "RL Grid Navigation Agent",
        tags: ["Python", "Reinforcement Learning", "Q-Learning", "PyTorch"],
        fullPageUrl: "project1.html", // Link dẫn sang trang chi tiết riêng
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
        fullPageUrl: "project-2-detail.html", // Link dẫn sang trang chi tiết riêng
        content: `
            <p><strong>Overview:</strong> A robust Python tool designed to crawl and extract Vietnamese national high school exam scores directly from an official government portal.</p>
            <br>
            <p>I utilized purely Regex and built-in Python libraries instead of heavy frameworks like BeautifulSoup to maximize speed and bypass simple block mechanisms.</p>
            <br>
            <a href="#" class="btn-s">View Source Code</a>
        `
    },
    "cert-1": {
    icon: "🏆",
    title: "City-level Math Olympiad",
    tags: ["2026", "Third Prize", "Ministry of Education"],
    content: "<p>Đạt giải Ba kỳ thi học sinh giỏi Toán cấp thành phố. Đây là thành tích ghi nhận sự nỗ lực và đam mê bền bỉ đối với các mô hình Toán học và tư duy logic.</p>",
    fullPageUrl: "" // Bỏ trống nếu không có trang chi tiết riêng
    },
  
    "cert-2": {
    icon: "📜",
    title: "Google Data Analytics",
    tags: ["2025", "Professional Cert", "Coursera"],
    content: "<p>Chứng chỉ phân tích dữ liệu chuyên nghiệp từ Google. Khóa học đào sâu vào kỹ năng xử lý dữ liệu, phân tích truy vấn, trực quan hóa và đưa ra các quyết định dựa trên dữ liệu (Data-driven).</p>",
    fullPageUrl: ""
    },
};


document.addEventListener("DOMContentLoaded", () => {
    // 1. CAROUSEL LOOP
    const track = document.querySelector('.carousel-track');
    if (track) {
        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // 2. TÌM KIẾM MODAL
    const modalOverlay = document.getElementById('projectModal');
    
    // Nếu không có HTML của Modal, báo lỗi đỏ ra F12 để bạn biết
    if (!modalOverlay) {
        console.error("🚨 LỖI NGHIÊM TRỌNG: Không tìm thấy thẻ HTML có id='projectModal'. Chức năng popup đã bị vô hiệu hóa.");
        return; 
    }

    const closeBtn = document.getElementById('closeModal');
    const expandBtn = document.getElementById('modalExpandBtn');
    
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalTags = document.getElementById('modalTags');
    const modalDesc = document.getElementById('modalDesc');

    // 3. XỬ LÝ CLICK MỞ MODAL (An toàn)
    document.addEventListener('click', (e) => {
        const triggerCard = e.target.closest('.modal-trigger');
        
        if (triggerCard) {
            e.preventDefault(); 
            
            const itemId = triggerCard.getAttribute('data-id');
            console.log("👉 Đang click vào ID:", itemId);

            // Kiểm tra xem có data không
            if (typeof projectsData === 'undefined') {
                alert("Lỗi: Biến projectsData chưa được khai báo! Hãy kiểm tra lại file JS.");
                return;
            }

            const data = projectsData[itemId];

            if (data) {
                // Điền data vào HTML một cách cẩn thận (nếu thẻ tồn tại mới điền)
                if (modalIcon) modalIcon.textContent = data.icon || "🏆";
                if (modalTitle) modalTitle.textContent = data.title || "";
                if (modalDesc) modalDesc.innerHTML = data.content || "";
                
                // Xử lý tags
                if (modalTags) {
                    modalTags.innerHTML = '';
                    if (data.tags && Array.isArray(data.tags)) {
                        data.tags.forEach(tag => {
                            const span = document.createElement('span');
                            span.className = 'proj-tag';
                            span.textContent = tag;
                            modalTags.appendChild(span);
                        });
                    }
                }

                // Xử lý nút mở rộng
                if (expandBtn) {
                    if (data.fullPageUrl) {
                        expandBtn.href = data.fullPageUrl;
                        expandBtn.style.display = 'flex';
                    } else {
                        expandBtn.style.display = 'none'; 
                    }
                }

                // Bật Modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                // Báo lỗi ngay nếu click vào ID không có trong data
                alert(`Lỗi: Thiếu dữ liệu cho mục "${itemId}". Hãy thêm vào biến projectsData!`);
            }
        }
    });

    // 4. HÀM ĐÓNG MODAL
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});
// document.addEventListener("DOMContentLoaded", () => {
//     // Tự động cập nhật năm ở footer
//     const yearSpan = document.getElementById('copyright-year');
//     if (yearSpan) yearSpan.textContent = `© ${new Date().getFullYear()}`;

//     // ─── XỬ LÝ MODAL PROJECT ───
//     const modalOverlay = document.getElementById('projectModal');
//     if (!modalOverlay) return; // Nếu trang hiện tại không có modal thì dừng lại

//     const closeBtn = document.getElementById('closeModal');
//     const expandBtn = document.getElementById('modalExpandBtn'); // Nút phóng to
//     const cards = document.querySelectorAll('.modal-trigger');

//     // Các thành phần bên trong modal cần thay đổi nội dung
//     const modalIcon = document.getElementById('modalIcon');
//     const modalTitle = document.getElementById('modalTitle');
//     const modalTags = document.getElementById('modalTags');
//     const modalDesc = document.getElementById('modalDesc');

//     // 2. Lắng nghe sự kiện click vào từng card project
//     cards.forEach(card => {
//         card.addEventListener('click', () => {
//             const projectId = card.getAttribute('data-id');
//             const data = projectsData[projectId];

//             if (data) {
//                 // Đổ nội dung vào modal
//                 modalIcon.textContent = data.icon;
//                 modalTitle.textContent = data.title;
//                 modalDesc.innerHTML = data.content;
                
//                 // Render danh sách tags
//                 modalTags.innerHTML = '';
//                 data.tags.forEach(tag => {
//                     const span = document.createElement('span');
//                     span.className = 'proj-tag';
//                     span.textContent = tag;
//                     modalTags.appendChild(span);
//                 });

//                 // Cập nhật link cho nút phóng to (nếu có trang riêng)
//                 if (expandBtn) {
//                     if (data.fullPageUrl) {
//                         expandBtn.href = data.fullPageUrl;
//                         expandBtn.style.display = 'flex';
//                     } else {
//                         expandBtn.style.display = 'none'; // Ẩn nút nếu chưa có trang riêng
//                     }
//                 }

//                 // Kích hoạt hiển thị modal và khóa cuộn nền
//                 modalOverlay.classList.add('active');
//                 document.body.style.overflow = 'hidden';
//             }
//         });
//     });

//     // 3. Hàm đóng modal
//     const closeModal = () => {
//         modalOverlay.classList.remove('active');
//         document.body.style.overflow = 'auto'; // Mở lại cuộn nền
//     };

//     if (closeBtn) {
//         closeBtn.addEventListener('click', closeModal);
//     }

//     // Click vào vùng mờ xung quanh modal để đóng
//     modalOverlay.addEventListener('click', (e) => {
//         if (e.target === modalOverlay) closeModal();
//     });
// });


// // ─── TỰ ĐỘNG XỬ LÝ INFINITE LOOP CHO CAROUSEL ───
//     const track = document.querySelector('.carousel-track');
//     if (track) {
//         // Copy toàn bộ thẻ trong track và dán thêm 1 lần nữa vào sau
//         const cards = Array.from(track.children);
//         cards.forEach(card => {
//             const clone = card.cloneNode(true);
//             track.appendChild(clone);
//         });
//     }






document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById('themeToggle');
    const iconColorful = document.getElementById('icon-colorful');
    const iconLight = document.getElementById('icon-light');
    const iconDark = document.getElementById('icon-dark');
    
    // Mảng chứa thứ tự xoay vòng của Theme
    const themes = ['colorful', 'light', 'dark'];

    // Hàm cập nhật Icon hiển thị
    const updateIcon = (theme) => {
        iconColorful.style.display = theme === 'colorful' ? 'block' : 'none';
        iconLight.style.display = theme === 'light' ? 'block' : 'none';
        iconDark.style.display = theme === 'dark' ? 'block' : 'none';
    };

    // 1. Khởi tạo theme khi vừa vào web
    let currentTheme = localStorage.getItem('user-theme') || 'colorful';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    // 2. Xử lý click đổi theme với Animation lan tỏa
    if (themeBtn) {
        themeBtn.addEventListener('click', (event) => {
            // Xác định theme tiếp theo
            const currentIndex = themes.indexOf(currentTheme);
            const nextTheme = themes[(currentIndex + 1) % themes.length];

            // Lấy tọa độ chuột lúc click
            const x = event.clientX;
            const y = event.clientY;

            // Tính toán bán kính lớn nhất từ điểm click để phủ kín màn hình
            const endRadius = Math.hypot(
                Math.max(x, innerWidth - x),
                Math.max(y, innerHeight - y)
            );

            // Cập nhật hàm thay đổi UI
            const switchTheme = () => {
                document.documentElement.setAttribute('data-theme', nextTheme);
                currentTheme = nextTheme;
                localStorage.setItem('user-theme', nextTheme);
                updateIcon(nextTheme);
            };

            // Nếu trình duyệt hỗ trợ View Transitions API (Chrome/Edge đời mới)
            if (document.startViewTransition) {
                const transition = document.startViewTransition(() => {
                    switchTheme();
                });

                // Chạy hiệu ứng vòng tròn lan tỏa
                transition.ready.then(() => {
                    document.documentElement.animate(
                        {
                            clipPath: [
                                `circle(0px at ${x}px ${y}px)`,
                                `circle(${endRadius}px at ${x}px ${y}px)`
                            ],
                        },
                        {
                            duration: 500,           // Thời gian lan tỏa (ms)
                            easing: 'ease-in-out',
                            pseudoElement: '::view-transition-new(root)',
                        }
                    );
                });
            } else {
                // Fallback nếu duyệt web bằng Safari cũ (đổi theme ngay lập tức không animation)
                switchTheme();
            }
        });
    }
});




// ─── GIẢI PHÁP 1: GOOGLE TRANSLATE TỰ ĐỘNG ───

// 1. Nhúng động script của Google Translate vào trang
(function loadGoogleTranslate() {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
})();

// 2. Khởi tạo Google Translate dạng ẩn
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Ngôn ngữ gốc của trang web
        includedLanguages: 'en,vi', // Chỉ cho phép chuyển giữa Anh và Việt
        autoDisplay: false
    }, 'google_translate_element');
};

// 3. Hàm kích hoạt đổi ngôn ngữ khi bấm nút #langToggle
document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('user-lang') || 'en';

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // Đổi trạng thái qua lại giữa 'en' và 'vi'
            currentLang = currentLang === 'en' ? 'vi' : 'en';
            localStorage.setItem('user-lang', currentLang);

            // Tìm khung chọn ngôn ngữ của Google Translate để trigger tự động
            const selectEl = document.querySelector('.goog-te-combo');
            if (selectEl) {
                selectEl.value = currentLang;
                selectEl.dispatchEvent(new Event('change'));
            } else {
                // Fallback nếu Google Translate chưa kịp load
                location.hash = currentLang === 'vi' ? '#googtrans(en|vi)' : '#googtrans(en|en)';
                location.reload();
            }
        });
    }
});