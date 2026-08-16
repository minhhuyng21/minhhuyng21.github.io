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
    icon: '<img src="assets/aic/aic.png">',
    title: "Multimodal Video Retrieval System",
    tags: ["Python", "PyTorch", "CLIP", "PaddleOCR", "FAISS", "Gradio"],
    fullPageUrl: "project_aic.html",

    content:`
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
      <span>vision models explored</span>
    </div>
  </div>

  <div class="pd-h3">Problem</div>

  <p class="pd-lede">
    Large news and event video collections contain information across
    multiple modalities: what appears visually, what is written on screen,
    and what is being said.
  </p>

  <p class="pd-lede">
    Searching through hundreds of thousands of frames using only one signal
    can therefore miss relevant content. Our goal was to build a retrieval
    system that could search the corpus using visual, textual, and
    spoken-content queries.
  </p>

  <div class="pd-h3">Approach</div>

  <p class="pd-lede">
    Our team built a multimodal retrieval pipeline with separate processing
    stages for visual content, on-screen text, and spoken content, combined
    through a unified search interface.
  </p>

  <div class="pd-media">
    <!-- Architecture diagram -->
  </div>

  <div class="pd-h3">System Architecture</div>

  <ul class="pd-list">
    <li>
      <b>Keyframe extraction</b> — converted the source videos into
      representative frames for indexing and retrieval.
    </li>

    <li>
      <b>Visual retrieval</b> — generated image embeddings using
      <code>SigLIP2</code>, <code>CLIP</code>, <code>FG-CLIP</code>,
      and <code>LAION-CLIP</code>.
    </li>

    <li>
      <b>OCR retrieval</b> — extracted on-screen text from frames with
      <code>PaddleOCR</code> to support text-based search.
    </li>

    <li>
      <b>Spoken-content retrieval</b> — used available YouTube subtitles
      and <code>Whisper</code> to obtain searchable spoken content.
    </li>

    <li>
      <b>Vector search</b> — used <code>FAISS</code> for
      approximate nearest-neighbor retrieval over image embeddings.
    </li>

    <li>
      <b>Dataset analysis</b> — used <code>FiftyOne</code> to inspect
      the dataset and analyze retrieval results.
    </li>

    <li>
      <b>Interface</b> — exposed the retrieval pipeline through
      <code>Gradio</code>.
    </li>
  </ul>

  <div class="pd-h3">Technical Challenges</div>

  <ul class="pd-list">
    <li>
      <b>Large-scale indexing:</b>
      processing a 300GB corpus required separating keyframe extraction,
      embedding generation, OCR, and indexing into independent stages.
    </li>

    <li>
      <b>Limited compute resources:</b>
      embedding and other expensive preprocessing tasks had to be distributed
      across remote GPU resources and interruptible Kaggle sessions.
    </li>

    <li>
      <b>Device limitation:</b>
      our team laptops lacked sufficient compute for local processing,
      so heavy workloads were offloaded to a rented GPU server, accessed
      remotely via SSH and exposed through <code>Cloudflare</code>.
    </li>

    <li>
      <b>Multimodal retrieval:</b>
      visual similarity, OCR matching, and spoken content represent
      different forms of relevance, requiring separate retrieval paths.
    </li>

    <li>
      <b>Resumable processing:</b>
      remote GPU sessions could be interrupted, so intermediate outputs
      had to be checkpointed to avoid repeating expensive computations.
    </li>
  </ul>

  <div class="pd-h3">Engineering Decisions</div>

  <p class="pd-lede">
    <b>Why multiple vision models?</b>
  </p>

  <p class="pd-lede">
    As part of the competition, our team explored multiple vision-language
    models in parallel. Each team member worked with a different model,
    allowing us to compare their retrieval behavior on the same dataset:
    <code>SigLIP2</code>, <code>CLIP</code>, <code>FG-CLIP</code>,
    and <code>LAION-CLIP</code>.
  </p>

  <p class="pd-lede">
    <b>Why FAISS?</b>
  </p>

  <p class="pd-lede">
    The indexed embeddings required efficient nearest-neighbor search over
    a large vector collection. <code>FAISS</code> provided approximate
    vector retrieval without introducing a separate vector database,
    keeping the deployment lightweight.
  </p>

  <div class="pd-h3">Results</div>

  <p class="pd-lede">
    The resulting system supports retrieval across visual content,
    on-screen text, and spoken content over the indexed video corpus,
    with the current implementation achieving sub-second query latency.
  </p>

  <div class="pd-media">
    <!-- Retrieval result screenshot / GIF -->
  </div>

  <div class="pd-h3">UI Demo</div>

  <p class="pd-lede">
    The interactive demo is temporarily unavailable while we fix a
    technical issue. We're working on a fix and will have it back soon.
    Thanks for your patience.
  </p>

  <div class="pd-media">
    <!-- UI screenshot / demo video -->
  </div>

  <div class="pd-h3">What I Built</div>

  <ul class="pd-list">
    <li>
      End-to-end keyframe extraction and indexing pipeline.
    </li>

    <li>
      Visual embedding pipelines for multiple vision-language models.
    </li>

    <li>
      GPU-based OCR processing pipeline with <code>PaddleOCR</code>.
    </li>

    <li>
      FAISS-based approximate nearest-neighbor retrieval system.
    </li>

    <li>
      Spoken-content indexing using subtitles and <code>Whisper</code>.
    </li>

    <li>
      Interactive retrieval interface using <code>Gradio</code>.
    </li>

    <li>
      Dataset inspection and retrieval-result analysis using
      <code>FiftyOne</code>.
    </li>

    <li>
      Checkpointing and resumable processing for remote GPU environments.
    </li>
  </ul>

  <div class="pd-h3">Tech Stack</div>

  <table class="pd-table">
    <tr>
      <th>Layer</th>
      <th>Tools</th>
    </tr>

    <tr>
      <td>Vision models</td>
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
      <td>Spoken content</td>
      <td>Whisper, YouTube subtitles</td>
    </tr>

    <tr>
      <td>Interface</td>
      <td>Gradio</td>
    </tr>

    <tr>
      <td>Dataset analysis</td>
      <td>FiftyOne</td>
    </tr>

    <tr>
      <td>ML tooling</td>
      <td>Hugging Face</td>
    </tr>

    <tr>
      <td>Compute</td>
      <td>Remote GPU via SSH, Kaggle GPU</td>
    </tr>

    <tr>
      <td>Deployment</td>
      <td>Cloudflare</td>
    </tr>
  </table>

  <div class="pd-note">
    <strong>Competition-driven engineering:</strong>
    the project was developed under limited compute resources and
    interruptible remote environments. This required distributing
    expensive preprocessing, checkpointing intermediate results,
    and deploying the application remotely so team members could use it
    without requiring high-end hardware locally.
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
        A real-time computer vision system that analyzes students' facial expressions
        to estimate engagement and support evaluation of lesson quality.
      </p>

      <div class="pd-stats">
        <div class="pd-stat"><b>3–6</b><span>FPS observed</span></div>
        <div class="pd-stat"><b>4–5</b><span>FPS typical</span></div>
        <div class="pd-stat"><b>6</b><span>test expressions</span></div>
        <div class="pd-stat"><b>4</b><span>core components</span></div>
      </div>

      <div class="pd-h3">Problem</div>

      <p class="pd-lede">
        Traditional approaches to evaluating a lesson often rely on tests or subjective
        feedback, which may not fully capture students' reactions during the learning process.
        This project explores whether facial-expression analysis can provide an additional
        signal for understanding how students respond to a lesson.
      </p>

      <div class="pd-h3">Approach</div>

      <p class="pd-lede">
        I built a computer vision pipeline that captures facial expressions in real time,
        aggregates emotion data over time, visualizes the results, and uses an AI agent
        to generate an automated analysis report.
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
          records detected emotions and aggregates them over time for further analysis.
        </li>

        <li>
          <b>Visualization:</b>
          converts the collected data into bar, pie, and heatmap charts using
          <code>Matplotlib</code>.
        </li>

        <li>
          <b>Automated analysis:</b>
          uses <code>AutoGen</code> to analyze the collected statistics
          and generate a textual evaluation report.
        </li>

        <li>
          <b>Real-time interface:</b>
          uses <code>OpenCV</code> to capture the webcam stream and display
          detection results directly on the video feed.
        </li>
      </ul>

      <div class="pd-h3">Research &amp; Model Selection</div>

      <p class="pd-lede">
        I compared two approaches to facial-expression recognition: a simpler detection-based
        approach and a multi-stage approach involving face detection, facial landmarks,
        and emotion recognition. The more advanced approach provides richer facial information
        at the cost of additional computation.
      </p>

      <p class="pd-lede">
        For this project, models from <code>DeepFace</code>, <code>HSEmotion</code>,
        <code>FaceTorch</code>, and Hugging Face were investigated with a focus on the
        trade-off between recognition quality and real-time performance.
      </p>

      <p class="pd-lede">
        <b>Selected model:</b>
        <code>enet_b0_8_best_afew</code> from <code>HSEmotion</code>,
        chosen for its balance between recognition performance and inference speed
        in real-time use.
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
          face detection, emotion recognition, data aggregation, visualization,
          and reporting form a pipeline where upstream processing can affect
          overall responsiveness.
        </li>

        <li>
          <b>From raw predictions to useful analysis:</b>
          individual emotion predictions are noisy signals, so the system aggregates
          observations over time before producing higher-level visualizations and analysis.
        </li>
      </ul>

      <div class="pd-h3">Engineering Decisions</div>

      <p class="pd-lede">
        <b>Why HSEmotion?</b>
        The project prioritized a practical balance between recognition quality
        and real-time inference speed. HSEmotion was selected after comparing
        several available facial-expression recognition approaches.
      </p>

      <p class="pd-lede">
        <b>Why real-time processing?</b>
        Real-time feedback allows the system to observe changes in students'
        expressions throughout a lesson instead of relying only on a final
        questionnaire or assessment.
      </p>

      <p class="pd-lede">
        <b>Why aggregate the predictions?</b>
        Individual frame-level predictions provide limited information about
        the overall lesson. Aggregating emotion observations over time makes it
        possible to visualize changes in emotional state and identify periods
        that may require further analysis.
      </p>

      <div class="pd-media">
        <img
          src="assets/emotion/emotion-result.png"
          alt="Real-time facial emotion recognition result"
        >
      </div>

      <div class="pd-h3">Data Visualization</div>

      <p class="pd-lede">
        The system summarizes detected emotions using three visualization formats:
        bar charts, pie charts, and heatmaps. These visualizations make it easier
        to inspect the distribution of emotions and observe how emotional states
        change over time.
      </p>

      <div class="pd-media pd-visual-grid">
        <figure>
          <img src="assets/emotion/bar.png" alt="Emotion distribution bar chart">
          <figcaption>Emotion distribution</figcaption>
        </figure>

        <figure>
          <img src="assets/emotion/pie.png" alt="Emotion distribution pie chart">
          <figcaption>Emotion proportions</figcaption>
        </figure>

        <figure>
          <img src="assets/emotion/heat.png" alt="Emotion heatmap over time">
          <figcaption>Emotion changes over time</figcaption>
        </figure>
      </div>

      <div class="pd-h3">Automated Analysis</div>

      <p class="pd-lede">
        After the emotion data is collected and visualized, an
        <code>AutoGen</code>-based AI agent analyzes the resulting statistics
        and generates a textual report for the user.
      </p>

      <div class="pd-media">
        <img
          src="assets/emotion/agent.png"
          alt="AI-generated emotion analysis report"
        >
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

      <div class="pd-h3">Constraints</div>

      <p class="pd-lede">
        The system currently performs emotion recognition directly from a real-time
        camera stream. Increasing the number of people in the scene increases
        the processing load and can reduce responsiveness.
      </p>

      <div class="pd-note">
        <strong>Current trade-off:</strong>
        real-time inference provides immediate feedback, but processing multiple
        faces simultaneously can reduce throughput.
      </div>

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
          Facial-expression recognition alone cannot fully determine whether
          a student understands or is engaged with the lesson.
        </li>
      </ul>

      <div class="pd-h3">Future Work</div>

      <ul class="pd-list">
        <li>
          Use facial landmarks and FACS Action Units to capture more fine-grained
          facial behavior beyond basic emotion labels.
        </li>

        <li>
          Add gaze tracking and face-pose estimation to detect possible loss of attention.
        </li>

        <li>
          Introduce identity recognition to associate observations with individual
          students in a controlled environment.
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
          <td>Interface</td>
          <td>Streamlit</td>
        </tr>

        <tr>
          <td>Language</td>
          <td>Python</td>
        </tr>
      </table>

      <div class="pd-cta">
        <a
          href="https://github.com/minhhuyng21/Facial-emotion-recognition"
          class="btn-p"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    `
},
"project-chatbot": {
    icon: '🤖',
    title: "Virtual information Assisstant",
    tags: ["Python", "Streamlit", "Langchain", "SQL", "Faiss"],
    fullPageUrl: "project_chatbot.html",
    content: `
  <p class="pd-lede">
    A retrieval-augmented assistant for searching and managing school and
    organizational information across documents, websites, and structured databases.
  </p>

  <div class="pd-stats">
    <div class="pd-stat">
      <b>60</b>
      <span>survey participants</span>
    </div>

    <div class="pd-stat">
      <b>2</b>
      <span>retrieval paths</span>
    </div>

    <div class="pd-stat">
      <b>&lt;10s</b>
      <span>hard-query response</span>
    </div>

    <div class="pd-stat">
      <b>2</b>
      <span>team members</span>
    </div>
  </div>

  <div class="pd-h3">Problem</div>

  <p class="pd-lede">
    School and organizational information is often distributed across PDFs,
    spreadsheets, documents, websites, and relational tables. Finding the right
    information can require switching between systems and manually identifying
    where the answer is stored.
  </p>

  <p class="pd-lede">
    The research question was:
    <b>
      How can an automated chatbot help schools and organizations
      retrieve and manage information more efficiently than traditional methods?
    </b>
  </p>

  <div class="pd-h3">Research &amp; Motivation</div>

  <p class="pd-lede">
    We surveyed <b>60 participants</b>, primarily students, teachers, and
    school-related users in Ho Chi Minh City, alongside participants from
    companies and organizations. The survey indicated substantial demand for
    finding and managing information, while difficulties in information
    retrieval and management were also common.
  </p>

  <div class="pd-visual-grid">
    <figure>
      <img
        src="assets/assistant/survey-participants.png"
        alt="Survey participant distribution"
      >
      <figcaption>Survey participants</figcaption>
    </figure>

    <figure>
      <img
        src="assets/assistant/survey-companies.png"
        alt="Survey organization distribution"
      >
      <figcaption>Participating organizations</figcaption>
    </figure>

    <figure>
      <img
        src="assets/assistant/survey-needs.png"
        alt="Survey results about information needs"
      >
      <figcaption>Information needs reported by participants</figcaption>
    </figure>
  </div>

  <div class="pd-note">
    <strong>Research takeaway:</strong>
    the survey supported the need for a unified interface that can search across
    different information sources rather than relying on one storage format.
  </div>

  <div class="pd-h3">Approach</div>

  <p class="pd-lede">
    The system was designed around two complementary retrieval paths.
    Unstructured text and web content are processed through a RAG pipeline,
    while structured data such as timetables is queried through a SQL agent.
  </p>

  <div class="pd-media">
    <img
      src="assets/assistant/architecture.png"
      alt="Virtual information assistant system architecture"
    >
  </div>

  <div class="pd-h3">Data Pipeline</div>

  <ul class="pd-list">
    <li>
      <b>Documents:</b>
      PDF, CSV/Excel, and DOC content is loaded and normalized with
      LangChain document loaders.
    </li>

    <li>
      <b>Web data:</b>
      school websites are collected with <code>Requests</code>
      and parsed with <code>BeautifulSoup</code>.
    </li>

    <li>
      <b>Structured data:</b>
      tables such as timetables are converted and stored in a relational
      SQL database for direct querying.
    </li>
  </ul>

  <div class="pd-h3">RAG Pipeline</div>

  <p class="pd-lede">
    Text and web content are split into smaller chunks with
    <code>RecursiveCharacterTextSplitter</code>, converted into vector
    embeddings, and indexed with <code>FAISS</code> for semantic retrieval.
  </p>

  <div class="pd-media">
    <img
      src="assets/assistant/rag-flow.jpg"
      alt="Retrieval-augmented generation pipeline"
    >
  </div>

  <div class="pd-media">
    <img
      src="assets/assistant/embeddings.png"
      alt="Text to embedding representation"
    >
  </div>

  <div class="pd-h3">Structured Data &amp; SQL Agent</div>

  <p class="pd-lede">
    Structured information is stored in SQLite and queried through LangChain's
    SQL tooling. A SQL agent converts natural-language questions into SQL queries,
    executes them, and returns the relevant records.
  </p>

  <div class="pd-media">
    <img
      src="assets/assistant/sql-agent.png"
      alt="SQL agent workflow"
    >
  </div>

  <div class="pd-h3">Hybrid Query Routing</div>

  <p class="pd-lede">
    The prototype separates questions that require structured database access
    from those that can be answered through documents and web data. Timetable-related
    questions were routed to the SQL agent, while other questions were handled
    through the text and web retrieval path.
  </p>

  <div class="pd-h3">Model &amp; Framework Selection</div>

  <p class="pd-lede">
    We compared <code>Llama3-8B-8192</code> and <code>GPT-4o</code> during development.
    Both performed well on simpler tasks, while GPT-4o was selected for the project
    because it performed better on more complex search and question-answering tasks
    over mixed information.
  </p>

  <p class="pd-lede">
    <code>LangChain</code> was used as the orchestration layer for retrieval,
    embeddings, prompts, and SQL interaction, while <code>Streamlit</code>
    provided the interactive web interface.
  </p>

  <div class="pd-media">
    <img
      src="assets/assistant/langchain.png"
      alt="LangChain components used in the project"
    >
  </div>

  <div class="pd-h3">Engineering Decisions</div>

  <p class="pd-lede">
    <b>Why combine RAG and SQL?</b>
    Documents and web pages are naturally suited to semantic retrieval,
    while highly structured information such as schedules is better represented
    and queried as relational data. Separating the two paths keeps each retrieval
    method aligned with the structure of the underlying data.
  </p>

  <p class="pd-lede">
    <b>Why FAISS?</b>
    The project needed a lightweight vector index for semantic retrieval
    without introducing a larger distributed database into the prototype.
  </p>

  <p class="pd-lede">
    <b>Why Streamlit?</b>
    Streamlit allowed the prototype interface to be built directly in Python
    and connected quickly to the underlying retrieval pipeline.
  </p>

  <div class="pd-h3">System Workflow</div>

  <ol class="pd-list" style="list-style:decimal;padding-left:1.2rem;">
    <li>User submits a natural-language question.</li>
    <li>The system determines which information source is appropriate.</li>
    <li>Text and web queries are handled through semantic retrieval and RAG.</li>
    <li>Structured queries are handled through the SQL agent.</li>
    <li>The LLM generates a natural-language response from the retrieved information.</li>
  </ol>

  <div class="pd-h3">Results</div>

  <div class="pd-stats">
    <div class="pd-stat">
      <b>60</b>
      <span>survey participants</span>
    </div>

    <div class="pd-stat">
      <b>&lt;10s</b>
      <span>maximum reported response time</span>
    </div>

    <div class="pd-stat">
      <b>2</b>
      <span>data-query paths</span>
    </div>

    <div class="pd-stat">
      <b>1</b>
      <span>unified interface</span>
    </div>
  </div>

  <p class="pd-lede">
    The completed prototype provided a responsive interface and handled both
    simple and more complex information queries. The project documentation
    reports a maximum response time of around <b>10 seconds for difficult questions</b>.
  </p>

  <div class="pd-h3">UI Demo</div>

  <div class="pd-media pd-visual-grid">
    <figure>
      <img
        src="assets/assistant/ui-01.png"
        alt="Virtual assistant interface example 1"
      >
      <figcaption>General information retrieval</figcaption>
    </figure>

    <figure>
      <img
        src="assets/assistant/ui-02.png"
        alt="Virtual assistant interface example 2"
      >
      <figcaption>Question answering flow</figcaption>
    </figure>

    <figure>
      <img
        src="assets/assistant/ui-03.jpg"
        alt="Virtual assistant interface example 3"
      >
      <figcaption>School information assistant</figcaption>
    </figure>
  </div>

  <div class="pd-h3">Constraints &amp; Risks</div>

  <ul class="pd-list">
    <li>
      <b>Data privacy:</b>
      school and organizational information may contain sensitive personal
      data, so access controls and data-protection mechanisms are important
      for real-world deployment.
    </li>

    <li>
      <b>Model reliability:</b>
      the assistant needs a fallback path for questions it cannot answer
      reliably or when an external model or retrieval component fails.
    </li>

    <li>
      <b>Data quality:</b>
      retrieval quality depends on consistent preprocessing, chunking,
      embeddings, and database structure.
    </li>
  </ul>

  <div class="pd-note">
    <strong>Research scope:</strong>
    this project focused on demonstrating the architecture and feasibility
    of a unified information assistant. Production deployment would require
    stronger authentication, access control, evaluation, monitoring,
    and privacy safeguards.
  </div>

  <div class="pd-h3">Future Work</div>

  <ul class="pd-list">
    <li>Introduce multi-agent routing for specialized domains and tasks.</li>
    <li>Add account and role-based access control for sensitive information.</li>
    <li>Improve retrieval and answer quality through broader evaluation datasets.</li>
    <li>Expand from school information to enterprise, public-service, healthcare,
      and other structured information environments.</li>
    <li>Improve scalability and reliability for larger information collections.</li>
  </ul>

  <div class="pd-h3">Tech Stack</div>

  <table class="pd-table">
    <tr>
      <th>Layer</th>
      <th>Tools</th>
    </tr>

    <tr>
      <td>Language</td>
      <td>Python</td>
    </tr>

    <tr>
      <td>LLM</td>
      <td>GPT-4o</td>
    </tr>

    <tr>
      <td>RAG / orchestration</td>
      <td>LangChain</td>
    </tr>

    <tr>
      <td>Embeddings</td>
      <td>OpenAIEmbeddings · text-embedding-ada-002</td>
    </tr>

    <tr>
      <td>Vector search</td>
      <td>FAISS</td>
    </tr>

    <tr>
      <td>Web data</td>
      <td>Requests · BeautifulSoup</td>
    </tr>

    <tr>
      <td>Structured data</td>
      <td>SQLite · SQL · pandas · PdfPlumber</td>
    </tr>

    <tr>
      <td>Interface</td>
      <td>Streamlit</td>
    </tr>
  </table>

  <div class="pd-h3">Project Information</div>

  <table class="pd-table">
    <tr>
      <td>Project</td>
      <td>Virtual Assistant for Managing Information &amp; Data</td>
    </tr>

    <tr>
      <td>Authors</td>
      <td>Nguyen Minh Huy &amp; Ha Chi Dung</td>
    </tr>

    <tr>
      <td>Mentor</td>
      <td>Bui Manh Tan</td>
    </tr>

    <tr>
      <td>Institution</td>
      <td>THPT Bui Thi Xuan, District 1, Ho Chi Minh City</td>
    </tr>

    <tr>
      <td>Project Code</td>
      <td>21_1001_10</td>
    </tr>

    <tr>
      <td>Date</td>
      <td>August 2024</td>
    </tr>
  </table>

  <div class="pd-h3">References</div>

  <ul class="pd-list">
    <li>
      <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">
        LangChain
      </a>
    </li>

    <li>
      <a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer">
        Streamlit
      </a>
    </li>

    <li>
      <a href="https://python.langchain.com/v0.1/docs/use_cases/sql/" target="_blank" rel="noopener noreferrer">
        LangChain Q&amp;A over SQL
      </a>
    </li>

    <li>
      <a href="https://github.com/RGGH/OpenAI_SQL" target="_blank" rel="noopener noreferrer">
        OpenAI_SQL
      </a>
    </li>

    <li>
      <a href="https://github.com/thangnch/MiAI_Langchain_RAG" target="_blank" rel="noopener noreferrer">
        MiAI_Langchain_RAG
      </a>
    </li>
  </ul>

  <div class="pd-cta">
    <a href="https://github.com/HaDungx/KHKT_2024-2025" class="btn-p">View on GitHub</a>
  </div>
`},
"project-yolo": {
    icon: '🤖',
    title: "Bui Thi Xuan High school Uniform detection",
    tags: ["Python", "YOLO", "CV2", "Jetson Nano"],
    fullPageUrl: "project_yolo.html",
    content: `updating....`},
"project-multiagent": {
    icon: '🤖',
    title: "Biology Multi Agent",
    tags: ["Python", "CrewAI", "Autogen"],
    fullPageUrl: "project_multiagent.html",
    content: `updating....`},
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
    img:    'assets/certi/google.png',
    orient: 'ls',
  },
  {
    title:  'City-level Math Olympiad',
    issuer: 'Ministry of Education · 2026',
    img:    'assets/certi/FIF.png',
    orient: 'ls',
  },
  {
    title:  'Academic Ielts',
    issuer: 'British Council',
    img:    'assets/certi/ielts.png',
    orient: 'pt',
  },
  {
    title:  'MODULE 1: FOUNDATION IN DEEP LEARNING, MACHINE LEARNING, COMPUTER VISION',
    issuer: 'New Turing Institute & PTNK Science Community',
    img:    'assets/certi/prise.png',
    orient: 'ls',
  },
  {
    title:  'Third-Prize: City-level Excellent Student Competition in Mathematics (Academic Year 2025-2026)',
    issuer: 'Ho Chi Minh City Level',
    img:    'assets/certi/math.png',
    orient: 'pt',
  },  
  {
    title:  'Third Prize – Systems Software, Ho Chi Minh City High School Science and Engineering Fair (2024–2025)',
    issuer: 'Ho Chi Minh City Level',
    img:    'assets/certi/khkt.png',
    orient: 'pt',
  },
  {
    title:  'Potential Award — AI Challenge (High School Category B) ',
    issuer: 'Youth Science and Technology Development Center, Ho Chi Minh City',
    img:    'assets/certi/aic_2025.png',
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