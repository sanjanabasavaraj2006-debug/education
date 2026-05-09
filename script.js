/**
 * EduLearn AI Study Notes Generator – Master Pro Engine
 * Robust construction of professional academic content
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORS
    const notesForm = document.getElementById('notes-form');
    const topicInput = document.getElementById('topic-input');
    const generateBtn = document.getElementById('generate-btn');
    const btnText = document.getElementById('btn-text');
    const loader = document.getElementById('loader');
    const outputSection = document.getElementById('output-section');
    const outputTitle = document.getElementById('output-title');
    const notesOutput = document.getElementById('notes-output');
    const themeToggle = document.getElementById('theme-toggle');
    const wordCountDisplay = document.getElementById('word-count');
    const recentList = document.getElementById('recent-list');
    
    // Action Buttons
    const copyBtn = document.getElementById('copy-btn');
    const pdfBtn = document.getElementById('pdf-btn');
    const listenBtn = document.getElementById('listen-btn');
    const shareBtn = document.getElementById('share-btn');
    const searchBtn = document.getElementById('search-btn');
    const clearNotesBtn = document.getElementById('clear-notes-btn');
    const voiceBtn = document.getElementById('voice-btn');
    const searchBar = document.getElementById('search-bar');
    const noteSearchInput = document.getElementById('note-search-input');

    // State
    let isSpeaking = false;
    let recentTopics = JSON.parse(localStorage.getItem('eduRecentTopics') || '[]');

    // --- 2. THEME LOGIC ---
    const initTheme = () => {
        const savedTheme = localStorage.getItem('eduTheme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    };
    
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('eduTheme', next);
        themeToggle.innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
    
    initTheme();

    // --- 3. RECENT TOPICS LOGIC ---
    const updateRecentList = (topic) => {
        if (!topic) return;
        recentTopics = [topic, ...recentTopics.filter(t => t !== topic)].slice(0, 8);
        localStorage.setItem('eduRecentTopics', JSON.stringify(recentTopics));
        renderRecentList();
    };

    const renderRecentList = () => {
        recentList.innerHTML = recentTopics.length ? recentTopics.map(t => 
            `<div class="recent-item" title="${t}">${t}</div>`
        ).join('') : '<p style="color:var(--text-muted); font-size:0.8rem;">No history yet</p>';
        
        document.querySelectorAll('.recent-item').forEach(item => {
            item.addEventListener('click', () => {
                topicInput.value = item.innerText;
                notesForm.dispatchEvent(new Event('submit'));
            });
        });
    };
    renderRecentList();

    // --- 4. THE MASTER GENERATOR ENGINE ---
    const generateEducationalContent = (topic) => {
        const t = topic.toUpperCase();
        
        // Dynamic snippets to simulate variety
        const intros = [
            `${t} represents a pivotal advancement in modern understanding, offering transformative insights into its core mechanisms.`,
            `The study of ${t} explores complex dynamics that have shaped contemporary academic and professional landscapes.`,
            `As a cornerstone of its field, ${t} integrates diverse methodologies to address sophisticated challenges in the 21st century.`
        ];

        const history = [
            `The origins of ${t} can be traced back to early theoretical foundations where pioneers established its initial frameworks.`,
            `Historical development of ${t} has undergone multiple paradigm shifts, evolving from rudimentary observations to rigorous analysis.`,
            `Synthesizing decades of growth, ${t} has moved from an experimental niche into a globally recognized standard of excellence.`
        ];

        // Construction of Sections
        return `
            <div style="font-family: 'Poppins', sans-serif;">
                <h2>Comprehensive Study Notes: ${t}</h2>
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid var(--border);">
                
                <section>
                    <h4>1. Introduction</h4>
                    <p>${intros[Math.floor(Math.random() * intros.length)]}</p>
                    <p>In the current academic context, ${topic} is defined as a multidisciplinary approach focused on precision, efficiency, and scalability across varied environments.</p>
                </section>

                <section>
                    <h4>2. Definition</h4>
                    <p>Formal definitions categorize ${topic} as a systematic set of principles used to identify, analyze, and optimize performance within its specific domain. It involves the integration of ${topic} logic into standard operational procedures to ensure high-fidelity outcomes.</p>
                </section>

                <section>
                    <h4>3. History & Background</h4>
                    <p>${history[Math.floor(Math.random() * history.length)]}</p>
                    <p>Major milestones in the ${topic} timeline include significant breakthroughs in theoretical modeling and the subsequent wide-scale adoption of these techniques by leading institutions.</p>
                </section>

                <section>
                    <h4>4. Core Concepts & Explanation</h4>
                    <p>The mastery of ${topic} relies on several foundational pillars:</p>
                    <ul>
                        <li><strong>Architectural Integrity:</strong> Ensuring the ${topic} framework remains robust under peak loads.</li>
                        <li><strong>Theoretical Consistency:</strong> Aligning practical applications with verified academic standards.</li>
                        <li><strong>Innovation Feedback:</strong> Continuously updating ${topic} protocols based on empirical data.</li>
                    </ul>
                </section>

                <section>
                    <h4>5. Types & Categories</h4>
                    <p>Depending on implementation, ${topic} can be classified into several sub-types:</p>
                    <ol>
                        <li><strong>Operational ${topic}:</strong> Focused on everyday execution.</li>
                        <li><strong>Strategic ${topic}:</strong> Designed for long-term goal alignment.</li>
                        <li><strong>Hybrid Models:</strong> Combining elements of both to maximize versatility.</li>
                    </ol>
                </section>

                <section>
                    <h4>6. Working Process</h4>
                    <p>The standard workflow for ${topic} follows a rigorous five-step cycle: Observation, Hypothesization, Implementation, Testing, and Optimization. This ensures that every ${topic} instance meets the required quality metrics.</p>
                </section>

                <section>
                    <h4>7. Advantages</h4>
                    <ul>
                        <li><strong>Enhanced Capability:</strong> Amplifies the primary functions of the system.</li>
                        <li><strong>Resource Optimization:</strong> Strategic allocation of ${topic} assets to reduce overhead.</li>
                        <li><strong>Scalability:</strong> Effortlessly expands to meet growing academic demands.</li>
                    </ul>
                </section>

                <section>
                    <h4>8. Disadvantages & Limitations</h4>
                    <p>While powerful, ${topic} faces certain challenges such as high initial complexity, potential resource dependency, and the need for constant maintenance amidst evolving standards.</p>
                </section>

                <section>
                    <h4>9. Real-World Applications</h4>
                    <p>${topic} is currently utilized in various sectors including industry-leading technology hubs, advanced medical research, and modern financial forecasting models where precision is paramount.</p>
                </section>

                <section>
                    <h4>10. Future Scope</h4>
                    <p>The trajectory of ${topic} suggests a move toward deeper integration with automated systems and AI-driven refinement, potentially leading to a "Smart ${topic}" revolution that further simplifies user interaction.</p>
                </section>

                <section>
                    <h4>11. Interview Questions</h4>
                    <p>1. Explain the fundamental paradox of ${topic} in modern environments?</p>
                    <p>2. How does ${topic} differentiate from its traditional counterparts?</p>
                    <p>3. Describe a scenario where ${topic} optimization significantly improved outcomes?</p>
                </section>

                <section>
                    <h4>12. Summary & Conclusion</h4>
                    <p>Ultimately, ${topic} stands as a testament to human ingenuity and the pursuit of academic clarity. By breaking down complex barriers, it paves the way for a more efficient and profound understanding of our world.</p>
                </div>
            </div>
        `;
    };

    // --- 5. CORE FUNCTIONALITY ---
    notesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = topicInput.value.trim();

        if (!userInput) return;

        // Start animation
        btnText.classList.add('hidden');
        loader.classList.remove('hidden');
        generateBtn.disabled = true;
        outputSection.classList.add('hidden');
        searchBar.classList.add('hidden');

        // Simulate Generation
        setTimeout(() => {
            const content = generateEducationalContent(userInput);
            notesOutput.innerHTML = content;
            outputTitle.innerText = `Study Notes: ${userInput}`;
            
            // Revert state
            btnText.classList.remove('hidden');
            loader.classList.add('hidden');
            generateBtn.disabled = false;
            outputSection.classList.remove('hidden');
            
            // Stats
            const words = notesOutput.innerText.split(/\s+/).length;
            wordCountDisplay.innerText = `Words: ~${words}`;
            
            updateRecentList(userInput);
            outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 2000);
    });

    // Voice Search
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        voiceBtn.addEventListener('click', () => {
            recognition.start();
            voiceBtn.classList.add('active');
        });

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            topicInput.value = text;
            voiceBtn.classList.remove('active');
            notesForm.dispatchEvent(new Event('submit'));
        };

        recognition.onerror = () => voiceBtn.classList.remove('active');
        recognition.onend = () => voiceBtn.classList.remove('active');
    }

    // Text to Speech
    listenBtn.addEventListener('click', () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            listenBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            isSpeaking = false;
        } else {
            const utterance = new SpeechSynthesisUtterance(notesOutput.innerText);
            utterance.onend = () => {
                listenBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                isSpeaking = false;
            };
            window.speechSynthesis.speak(utterance);
            listenBtn.innerHTML = '<i class="fas fa-stop"></i>';
            isSpeaking = true;
        }
    });

    // Copy
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(notesOutput.innerText).then(() => {
            const icon = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => copyBtn.innerHTML = icon, 2000);
        });
    });

    // PDF (using print trigger)
    pdfBtn.addEventListener('click', () => {
        window.print();
    });

    // Share
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: outputTitle.innerText,
                text: notesOutput.innerText.substring(0, 200) + '...',
                url: window.location.href
            });
        }
    });

    // Search inside notes
    searchBtn.addEventListener('click', () => {
        searchBar.classList.toggle('hidden');
        if (!searchBar.classList.contains('hidden')) noteSearchInput.focus();
    });

    noteSearchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const content = notesOutput.innerText;
        
        // Simple highlight (requires re-rendering HTML with spans)
        // For a true search, we'd need a more complex DOM traversal
        // Here we just scroll or log for now, or keep it as a UI placeholder
        console.log("Searching for:", term);
    });

    clearNotesBtn.addEventListener('click', () => {
        outputSection.classList.add('hidden');
        topicInput.value = '';
        topicInput.focus();
    });
});
