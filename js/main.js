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
    // ── Thay nguyên object "project-1" trong projectsData (main.js) bằng bản này ──
// Khối HTML trong `content` chính là khối được dùng lại y hệt trong project1.html
// (chỉ khác: project1.html có thêm nav/eyebrow/title/footer bao quanh nó).

    // ── Thay nguyên object "project-1" trong projectsData (main.js) bằng bản này ──
// Khối HTML trong `content` được dùng lại y hệt trong project1.html

"project-aic": {
    icon: '<img src="assets/aic.png">',
    title: "Multimodal Video Retrieval System",
    tags: ["Python", "PyTorch", "CLIP", "PaddleOCR", "FAISS", "Gradio"],
    fullPageUrl: "project_aic.html",

    content: `
        <p class="pd-lede">
          A multimodal search engine for retrieving relevant frames from a
          <b>300GB corpus of news and event footage</b> using visual content,
          on-screen text, and spoken content.
        </p>

        <div class="pd-stats">
          <div class="pd-stat">
            <b>300GB</b>
            <span>video corpus</span>
          </div>
          <div class="pd-stat">
            <b>175K+</b>
            <span>indexed keyframes</span>
          </div>
          <div class="pd-stat">
            <b>&lt;1s</b>
            <span>query latency</span>
          </div>
          <div class="pd-stat">
            <b>4</b>
            <span>vision encoders</span>
          </div>
        </div>

        <div class="pd-h3">Problem</div>

        <p class="pd-lede">
          News and event footage contains information across multiple
          modalities: what appears visually, what is written on screen,
          and what is being said.
        </p>

        <p class="pd-lede">
          A retrieval system based on only one modality can therefore miss
          relevant information. The goal was to build a unified system that
          could retrieve the right frame from a large video collection using
          different types of queries.
        </p>

        <div class="pd-h3">Approach</div>

        <p class="pd-lede">
          I designed a multimodal retrieval pipeline covering three
          information sources: visual content, on-screen text, and spoken
          content.
        </p>

        <div class="pd-media">
          <!-- Architecture diagram -->
        </div>

        <div class="pd-h3">System Architecture</div>

        <ul class="pd-list">
          <li>
            <b>Keyframe extraction</b> — converted the video corpus into
            representative frames for indexing.
          </li>

          <li>
            <b>Visual retrieval</b> — generated embeddings using
            <code>SigLIP2</code>, <code>CLIP</code>,
            <code>FG-CLIP</code>, and <code>LAION-CLIP</code>.
          </li>

          <li>
            <b>OCR retrieval</b> — extracted text appearing in frames with
            <code>PaddleOCR</code>.
          </li>

          <li>
            <b>Audio retrieval</b> — indexed spoken content through
            YouTube subtitle extraction and <code>Whisper</code>.
          </li>

          <li>
            <b>Vector search</b> — used <code>FAISS</code> for
            approximate nearest-neighbor retrieval.
          </li>
        </ul>

        <div class="pd-h3">Technical Challenges</div>

        <ul class="pd-list">
          <li>
            Processing a <b>300GB</b> corpus required a pipeline that could
            handle large-scale extraction, embedding, OCR, and indexing.
          </li>

          <li>
            Embedding extraction had to be distributed across remote GPU
            resources and interruptible Kaggle sessions.
          </li>

          <li>
            Different modalities required separate retrieval pipelines
            because visual similarity, OCR matching, and spoken content
            represent relevance differently.
          </li>
        </ul>

        <div class="pd-h3">Engineering Decisions</div>

        <p class="pd-lede">
          <b>Why multiple vision encoders?</b>
          Four vision-language models were evaluated as alternative
          visual representations to compare their retrieval behavior.
        </p>

        <p class="pd-lede">
          <b>Why FAISS?</b>
          The dataset required efficient nearest-neighbor search over a large
          embedding collection while keeping deployment simple.
        </p>

        <p class="pd-lede">
          <b>Why checkpointing?</b>
          Remote GPU sessions could be interrupted, so expensive processing
          stages were designed to save intermediate outputs and resume without
          recomputing the entire dataset.
        </p>

        <div class="pd-h3">Results</div>

        <div class="pd-stats">
          <div class="pd-stat">
            <b>175K+</b>
            <span>keyframes</span>
          </div>

          <div class="pd-stat">
            <b>&lt;1s</b>
            <span>query latency</span>
          </div>

          <div class="pd-stat">
            <b>4</b>
            <span>vision models</span>
          </div>

          <div class="pd-stat">
            <b>___</b>
            <span>Recall@K</span>
          </div>
        </div>

        <div class="pd-h3">Tech Stack</div>

        <table class="pd-table">
          <tr>
            <th>Layer</th>
            <th>Tools</th>
          </tr>

          <tr>
            <td>Vision</td>
            <td>SigLIP2, CLIP, FG-CLIP, LAION-CLIP</td>
          </tr>

          <tr>
            <td>Retrieval</td>
            <td>FAISS</td>
          </tr>

          <tr>
            <td>OCR</td>
            <td>PaddleOCR</td>
          </tr>

          <tr>
            <td>Audio</td>
            <td>Whisper, YouTube subtitles</td>
          </tr>

          <tr>
            <td>Interface</td>
            <td>Gradio, FiftyOne</td>
          </tr>

          <tr>
            <td>Compute</td>
            <td>Remote GPU via SSH, Kaggle GPU</td>
          </tr>
        </table>

        <div class="pd-note">
          <strong>Constraint:</strong>
          the system was developed without dedicated infrastructure.
          Expensive preprocessing had to run across remote and interruptible
          GPU environments, making checkpointing and resumability important
          parts of the implementation.
        </div>

        <div class="pd-cta">
          <a href="project_aic.html" class="btn-p">
            View full case study →
          </a>
        </div>
    `
},
    "project-emotion": {
    icon: '<img src="assets/face.jpg">',
    title: "Facial Emotion Analysis for Lesson Quality Evaluation",
    tags: ["Python", "HSEmotion", "OpenCV", "Matplotlib", "AutoGen"],
    fullPageUrl: "project_emotion.html",
    content: `
        <p class="pd-lede">
          A real-time computer vision system that analyzes students' facial
          expressions to estimate engagement and support evaluation of lesson quality.
        </p>

        <div class="pd-stats">
          <div class="pd-stat"><b>3–6</b><span>FPS observed</span></div>
          <div class="pd-stat"><b>4–5</b><span>FPS typical</span></div>
          <div class="pd-stat"><b>6</b><span>test expressions</span></div>
          <div class="pd-stat"><b>4</b><span>core components</span></div>
        </div>

        <div class="pd-h3">Problem</div>

        <p class="pd-lede">
          Traditional approaches to evaluating a lesson often rely on tests
          or subjective feedback, which may not fully capture students'
          reactions during the learning process.
          This project explores whether facial-expression analysis can provide
          an additional signal for understanding how students respond to a lesson.
        </p>

        <div class="pd-h3">Approach</div>

        <p class="pd-lede">
          I built a computer vision pipeline that captures facial expressions
          in real time, aggregates emotion data over time, visualizes the results,
          and uses an AI agent to generate an automated analysis report.
        </p>

        <div class="pd-media">
          <!-- Architecture diagram -->
        </div>

        <div class="pd-h3">System Architecture</div>

        <ul class="pd-list">
          <li>
            <b>Face detection:</b>
            detects students' faces from a live camera stream.
          </li>
          <li>
            <b>Emotion recognition:</b>
            classifies facial expressions using the
            <code>enet_b0_8_best_afew</code> model from <code>HSEmotion</code>.
          </li>
          <li>
            <b>Data collection:</b>
            records detected emotions and aggregates them over time
            for further analysis.
          </li>
          <li>
            <b>Visualization:</b>
            converts the collected data into bar, pie, and heatmap charts
            using <code>Matplotlib</code>.
          </li>
          <li>
            <b>Automated analysis:</b>
            uses <code>AutoGen</code> to analyze the collected statistics
            and generate a textual evaluation report.
          </li>
          <li>
            <b>Real-time interface:</b>
            uses <code>OpenCV</code> to capture the webcam stream and
            display detection results directly on the video feed.
          </li>
        </ul>

        <div class="pd-h3">Research &amp; Model Selection</div>

        <p class="pd-lede">
          I compared two approaches to facial-expression recognition:
          a simpler detection-based approach and a multi-stage approach
          involving face detection, facial landmarks, and emotion recognition.
          The more advanced approach provides richer facial information
          at the cost of additional computation.
        </p>

        <p class="pd-lede">
          For this project, models from <code>DeepFace</code>,
          <code>HSEmotion</code>, <code>FaceTorch</code>, and Hugging Face
          were investigated with a focus on the trade-off between
          recognition quality and real-time performance.
        </p>

        <p class="pd-lede">
          <b>Selected model:</b>
          <code>enet_b0_8_best_afew</code> from <code>HSEmotion</code>,
          chosen for its balance between recognition performance
          and inference speed in real-time use.
        </p>

        <div class="pd-h3">Technical Challenges</div>

        <ul class="pd-list">
          <li>
            <b>Real-time processing:</b>
            emotion recognition must keep up with the incoming webcam stream
            while maintaining usable frame rates.
          </li>
          <li>
            <b>Multiple processing stages:</b>
            face detection, emotion recognition, data aggregation,
            visualization, and reporting form a pipeline where upstream
            processing can affect overall responsiveness.
          </li>
          <li>
            <b>From raw predictions to useful analysis:</b>
            individual emotion predictions are noisy signals, so the system
            aggregates observations over time before producing higher-level
            visualizations and analysis.
          </li>
        </ul>

        <div class="pd-h3">Engineering Decisions</div>

        <p class="pd-lede">
          <b>Why HSEmotion?</b>
        </p>

        <p class="pd-lede">
          The project prioritized a practical balance between recognition
          quality and real-time inference speed. HSEmotion was selected
          after comparing several available facial-expression recognition
          approaches.
        </p>

        <p class="pd-lede">
          <b>Why real-time processing?</b>
        </p>

        <p class="pd-lede">
          Real-time feedback allows the system to observe changes in
          students' expressions throughout a lesson instead of relying
          only on a final questionnaire or assessment.
        </p>

        <p class="pd-lede">
          <b>Why aggregate the predictions?</b>
        </p>

        <p class="pd-lede">
          Individual frame-level predictions provide limited information
          about the overall lesson. Aggregating emotion observations over
          time makes it possible to visualize changes in emotional state
          and identify periods that may require further analysis.
        </p>

        <div class="pd-h3">Results</div>

        <div class="pd-stats">
          <div class="pd-stat"><b>6 / 6</b><span>test expressions recognized</span></div>
          <div class="pd-stat"><b>3–6</b><span>FPS observed</span></div>
          <div class="pd-stat"><b>4–5</b><span>FPS typical</span></div>
          <div class="pd-stat"><b>___</b><span>students tested</span></div>
        </div>

        <p class="pd-lede">
          In a controlled test using six images with different facial
          expressions, the selected HSEmotion model correctly identified
          all six tested expressions under normal environmental conditions.
          The observed processing speed ranged from approximately 3 to 6 FPS,
          with typical performance around 4–5 FPS in low-person-count scenarios.
        </p>

        <div class="pd-media">
          <!-- Emotion recognition result screenshot -->
        </div>

        <div class="pd-h3">Data Visualization</div>

        <p class="pd-lede">
          The system summarizes detected emotions using three visualization
          formats: bar charts, pie charts, and heatmaps. These visualizations
          make it easier to inspect the distribution of emotions and observe
          how emotional states change over time.
        </p>

        <div class="pd-media">
          <!-- Bar / pie / heatmap screenshots -->
        </div>

        <div class="pd-h3">Automated Analysis</div>

        <p class="pd-lede">
          After the emotion data is collected and visualized, an
          <code>AutoGen</code>-based AI agent analyzes the resulting statistics
          and generates a textual report for the user.
        </p>

        <div class="pd-media">
          <!-- AI-generated report screenshot -->
        </div>

        <div class="pd-h3">What I Built</div>

        <ul class="pd-list">
          <li>
            Real-time webcam-based facial-expression detection pipeline.
          </li>
          <li>
            Emotion recognition using the HSEmotion
            <code>enet_b0_8_best_afew</code> model.
          </li>
          <li>
            Emotion data collection and temporal aggregation pipeline.
          </li>
          <li>
            Real-time visualization of predictions with OpenCV.
          </li>
          <li>
            Statistical visualization using Matplotlib.
          </li>
          <li>
            Automated analysis and report generation using AutoGen.
          </li>
          <li>
            PDF-based output containing the aggregated analysis results.
          </li>
        </ul>

        <div class="pd-h3">Evaluation</div>

        <table class="pd-table">
          <tr>
            <th>Experiment</th>
            <th>Metric</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>Facial-expression recognition</td>
            <td>Correct predictions</td>
            <td>6 / 6 test images</td>
          </tr>
          <tr>
            <td>Real-time inference</td>
            <td>FPS</td>
            <td>3–6 FPS</td>
          </tr>
          <tr>
            <td>Typical runtime</td>
            <td>FPS</td>
            <td>4–5 FPS</td>
          </tr>
          <tr>
            <td>Multi-person performance</td>
            <td>________</td>
            <td>________</td>
          </tr>
        </table>

        <div class="pd-h3">Constraints</div>

        <p class="pd-lede">
          The system currently performs emotion recognition directly from
          a real-time camera stream. Increasing the number of people in the
          scene increases the processing load and can reduce responsiveness.
        </p>

        <div class="pd-note">
          <strong>Current trade-off:</strong>
          real-time inference provides immediate feedback, but processing
          multiple faces simultaneously can reduce throughput.
        </div>

        <div class="pd-h3">Challenges &amp; Iterations</div>

        <ul class="pd-list">
          <li>
            <b>________:</b>
            _______________________________________________
          </li>
          <li>
            <b>________:</b>
            _______________________________________________
          </li>
          <li>
            <b>________:</b>
            _______________________________________________
          </li>
        </ul>

        <div class="pd-h3">Limitations</div>

        <ul class="pd-list">
          <li>
            Current evaluation is based on a limited controlled test set;
            broader validation is still needed.
          </li>
          <li>
            Real-time performance decreases as the number of simultaneously
            detected students increases.
          </li>
          <li>
            Facial-expression recognition alone cannot fully determine
            whether a student understands or is engaged with the lesson.
          </li>
          <li>
            _______________________________________________
          </li>
        </ul>

        <div class="pd-h3">Future Work</div>

        <ul class="pd-list">
          <li>
            Use facial landmarks and FACS Action Units to capture
            more fine-grained facial behavior beyond basic emotion labels.
          </li>
          <li>
            Add gaze tracking and face-pose estimation to detect
            possible loss of attention.
          </li>
          <li>
            Introduce identity recognition to associate observations
            with individual students in a controlled environment.
          </li>
          <li>
            Use accumulated lesson data to identify periods of low engagement
            and automatically suggest improvements to teaching content.
          </li>
          <li>
            Parallelize face detection and emotion recognition to reduce
            end-to-end processing latency.
          </li>
          <li>
            Explore asynchronous post-lesson analysis as an alternative
            when real-time processing is not required.
          </li>
          <li>
            _______________________________________________
          </li>
        </ul>

        <div class="pd-h3">Tech Stack</div>

        <table class="pd-table">
          <tr>
            <th>Layer</th>
            <th>Tools</th>
          </tr>
          <tr>
            <td>Face &amp; emotion recognition</td>
            <td>HSEmotion</td>
          </tr>
          <tr>
            <td>Video processing</td>
            <td>OpenCV</td>
          </tr>
          <tr>
            <td>Visualization</td>
            <td>Matplotlib</td>
          </tr>
          <tr>
            <td>AI analysis</td>
            <td>AutoGen</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>Python</td>
          </tr>
        </table>

        <div class="pd-cta">
          <a href="#" class="btn-p">View on GitHub</a>
        </div>
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
                if (modalIcon) modalIcon.innerHTML = data.icon || "🏆";;
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
    issuer: 'Google / Coursera · 2024',
    img:    'assets/google.png',
    orient: 'ls',
  },
  {
    title:  'City-level Math Olympiad',
    issuer: 'Ministry of Education · 2026',
    img:    'assets/FIF.png',
    orient: 'ls',
  },
  {
    title:  'Academic Ielts',
    issuer: 'British Council',
    img:    'assets/ielts.png',
    orient: 'pt',
  },
  {
    title:  'MODULE 1: FOUNDATION IN DEEP LEARNING, MACHINE LEARNING, COMPUTER VISION',
    issuer: 'New Turing Institute & PTNK Science Community',
    img:    'assets/prise.png',
    orient: 'ls',
  },
  {
    title:  'Third-Prize: City-level Excellent Student Competition in Mathematics (Academic Year 2025-2026)',
    issuer: 'Ho Chi Minh City Level',
    img:    'assets/math.png',
    orient: 'pt',
  },  
  {
    title:  'Third Prize – Systems Software, Ho Chi Minh City High School Science and Engineering Fair (2024–2025)',
    issuer: 'Ho Chi Minh City Level',
    img:    'assets/khkt.png',
    orient: 'pt',
  },
  {
    title:  'Potential Award — AI Challenge (High School Category B) ',
    issuer: 'Youth Science and Technology Development Center, Ho Chi Minh City',
    img:    'assets/aic_2025.png',
    orient: 'pt',
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