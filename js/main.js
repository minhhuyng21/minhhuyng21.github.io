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






/* ══════════════════════════════
   CERT CAROUSEL — JS
   Dán vào script.js, bên trong DOMContentLoaded
   (hoặc để cuối file, sau các hàm khác)
══════════════════════════════ */


/* ════════════════════════════════════════
   1. DATA — THÊM CERT CỦA BẠN VÀO ĐÂY

   Mỗi object gồm:
   - title   : Tên cert hiển thị
   - issuer  : Tổ chức · Năm
   - img     : Đường dẫn ảnh từ assets/certs/
   - orient  : 'ls' = landscape | 'pt' = portrait
               (chỉ ảnh hưởng kích thước thumbnail trong carousel,
                popup luôn tự vừa với ảnh thật)
════════════════════════════════════════ */
const CERTS_DATA = [
  {
    title:  'Google AI Essentials',
    issuer: 'Google / Coursera · 2025',
    img:    'assets/google-ai-essentials.png',
    orient: 'ls',
  },
  {
    title:  'City-level Math Olympiad',
    issuer: 'Ministry of Education · 2026',
    img:    'assets/FIF.png',
    orient: 'ls',
  },
  // ── Thêm cert mới bên dưới ──
  // {
  //   title:  'Tên chứng chỉ',
  //   issuer: 'Tổ chức · Năm',
  //   img:    'assets/certs/ten-file.jpg',
  //   orient: 'ls',  // hoặc 'pt'
  // },
];


/* ════════════════════════════════════════
   2. KHỞI TẠO — không cần chỉnh bên dưới
════════════════════════════════════════ */
(function initCertCarousel() {

  // Lấy các element cần thiết
  const track   = document.getElementById('certsTrack');
  const outer   = document.getElementById('certsOuter');
  const popup   = document.getElementById('certPopup');
  const popupIn = document.getElementById('certPopupInner');
  const popupT  = document.getElementById('certPopupTitle');
  const popupS  = document.getElementById('certPopupSub');

  // Nếu thiếu element nào thì dừng, tránh crash
  if (!track || !outer || !popup || !popupIn || !popupT || !popupS) {
    console.warn('Cert carousel: thiếu element HTML, kiểm tra lại id trong cert-carousel.html');
    return;
  }

  /* ── Build từng card ── */
  function makeCard(cert) {
    // Khai báo card TRƯỚC khi set dataset
    const card = document.createElement('div');
    card.className        = `cert-card-new ${cert.orient}`;
    card.dataset.title    = cert.title;
    card.dataset.issuer   = cert.issuer;
    card.dataset.img      = cert.img;
    card.dataset.orient   = cert.orient;

    // Ảnh thumbnail (cover — lấp đầy card, được cắt là bình thường)
    const img = document.createElement('img');
    img.alt   = cert.title;
    img.src   = cert.img;
    img.onerror = function () {
      this.replaceWith(
        Object.assign(document.createElement('div'), {
          className:   'cert-placeholder',
          textContent: cert.title,
        })
      );
    };
    card.appendChild(img);

    // Shine layer
    const shine = document.createElement('div');
    shine.className = 'cert-shine-layer';
    card.appendChild(shine);

    // Info bar
    const info = document.createElement('div');
    info.className = 'cert-info-bar';
    info.innerHTML = `<strong>${cert.title}</strong><span>${cert.issuer}</span>`;
    card.appendChild(info);

    return card;
  }

  // Render cards vào track
  CERTS_DATA.forEach(cert => track.appendChild(makeCard(cert)));

  // Clone toàn bộ để loop vô hạn
  const origCards = Array.from(track.children);
  origCards.forEach(c => track.appendChild(c.cloneNode(true)));

  /* ── Tilt 3D + Shine theo chuột ── */
  function attachTilt(card) {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = (e.clientX - r.left) / r.width;
      const y  = (e.clientY - r.top)  / r.height;
      card.style.transform = `perspective(700px) rotateX(${(y - .5) * 15}deg) rotateY(${(x - .5) * -15}deg) scale(1.04)`;
      const shine = card.querySelector('.cert-shine-layer');
      if (shine) {
        shine.style.setProperty('--mx', x * 100 + '%');
        shine.style.setProperty('--my', y * 100 + '%');
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) scale(1)';
    });
  }

  /* ── Popup tự vừa với ảnh thật ──
     - Không set width/height cứng
     - Đọc naturalWidth/naturalHeight của ảnh gốc
     - Scale xuống để vừa màn hình, giữ đúng tỉ lệ
     - Không bao giờ cắt ảnh
  ── */
  function attachPopup(card) {
    let popupRaf;

    // Kích thước tối đa popup so với màn hình — chỉnh 2 dòng này
    const MAX_W_RATIO = 0.42;   // tối đa 42% chiều rộng màn hình
    const MAX_H_RATIO = 0.68;   // tối đa 68% chiều cao màn hình

    card.addEventListener('mouseenter', () => {
      // Reset popup về trạng thái loading
      popupIn.innerHTML = '';
      popup.style.width  = 'auto';
      popup.style.height = 'auto';

      const pImg    = document.createElement('img');
      pImg.className = 'cert-popup-img';
      pImg.alt       = card.dataset.title;

      pImg.onload = function () {
        // Tính kích thước tối đa
        const maxW = window.innerWidth  * MAX_W_RATIO;
        const maxH = window.innerHeight * MAX_H_RATIO;

        // Scale giữ tỉ lệ ảnh gốc
        const scaleW   = maxW / this.naturalWidth;
        const scaleH   = maxH / this.naturalHeight;
        const scale    = Math.min(scaleW, scaleH, 1); // không phóng to hơn ảnh gốc

        const finalW   = Math.round(this.naturalWidth  * scale);

        // Set width cho popup và ảnh, height tự tính (height: auto trong CSS)
        popup.style.width  = finalW + 'px';
        pImg.style.width   = '100%';

        popup.classList.add('visible');
      };

      pImg.onerror = function () {
        // Fallback nếu ảnh lỗi
        this.replaceWith(
          Object.assign(document.createElement('div'), {
            className:   'cert-popup-placeholder',
            textContent: card.dataset.title,
          })
        );
        popup.style.width = '280px';
        popup.classList.add('visible');
      };

      // Set src SAU khi gắn onload/onerror
      pImg.src = card.dataset.img;
      popupIn.appendChild(pImg);

      popupT.textContent = card.dataset.title;
      popupS.textContent = card.dataset.issuer;
    });

    card.addEventListener('mousemove', e => {
      cancelAnimationFrame(popupRaf);
      popupRaf = requestAnimationFrame(() => {
        // Đọc kích thước popup thực tế (sau khi ảnh load)
        const pw     = popup.offsetWidth;
        const ph     = popup.offsetHeight;
        const margin = 20;

        let x = e.clientX + 28;
        let y = e.clientY - ph / 2;

        // Tránh ra ngoài màn hình
        if (x + pw > window.innerWidth  - margin) x = e.clientX - pw - 28;
        if (y < margin)                            y = margin;
        if (y + ph > window.innerHeight - margin)  y = window.innerHeight - ph - margin;

        popup.style.left = x + 'px';
        popup.style.top  = y + 'px';
      });
    });

    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(popupRaf);
      popup.classList.remove('visible');
    });
  }

  // Gắn events cho tất cả cards (kể cả clones)
  document.querySelectorAll('.cert-card-new').forEach(card => {
    attachTilt(card);
    attachPopup(card);
  });

  /* ── Auto-scroll + Drag + Touch ── */
  const totalW   = origCards.reduce((sum, c) => sum + c.offsetWidth + 17, 0);
  let offset     = 0;
  const SPEED    = 0.55;   // px/frame — chỉnh tốc độ cuộn ở đây
  let isHovering = false;
  let isDragging = false;
  let dragStartX = 0;
  let dragBase   = 0;
  let raf;

  function loop() {
    if (!isDragging && !isHovering) {
      offset += SPEED;
      if (offset >= totalW) offset = 0;
    }
    track.style.transform = `translateX(${-offset}px)`;
    raf = requestAnimationFrame(loop);
  }
  loop();

  // Dừng khi hover vào carousel
  outer.addEventListener('mouseenter', () => isHovering = true);
  outer.addEventListener('mouseleave', () => isHovering = false);

  // Drag chuột
  outer.addEventListener('mousedown', e => {
    isDragging = true;
    dragStartX = e.clientX;
    dragBase   = offset;
    cancelAnimationFrame(raf);
  });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    let next = dragBase - (e.clientX - dragStartX);
    offset = Math.max(0, Math.min(next, totalW - 1));
    track.style.transform = `translateX(${-offset}px)`;
  });
  window.addEventListener('mouseup', () => {
    if (isDragging) { isDragging = false; loop(); }
  });

  // Swipe mobile
  outer.addEventListener('touchstart', e => {
    isDragging = true;
    dragStartX = e.touches[0].clientX;
    dragBase   = offset;
    cancelAnimationFrame(raf);
  }, { passive: true });
  outer.addEventListener('touchmove', e => {
    if (!isDragging) return;
    let next = dragBase - (e.touches[0].clientX - dragStartX);
    offset = Math.max(0, Math.min(next, totalW - 1));
    track.style.transform = `translateX(${-offset}px)`;
  }, { passive: true });
  outer.addEventListener('touchend', () => {
    if (isDragging) { isDragging = false; loop(); }
  });

})();