/**
 * Edu Learn AI Study Notes Generator – Master Pro Engine
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
    let currentNoteHTML = '';

    // Theme Selector (Already declared above)
    // const themeToggle = document.getElementById('theme-toggle');

    // --- 2. THEME LOGIC ---
    const initTheme = () => {
        const savedTheme = localStorage.getItem('eduTheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
    };
    
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('eduTheme', theme);
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    };

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'light' ? 'dark' : 'light');
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

    // Dynamic Tool Selectors
    const conceptCard = document.getElementById('concept-card');
    const curriculumCard = document.getElementById('curriculum-card');
    const aiToolContainer = document.getElementById('ai-tool-container');
    const toolTitle = document.getElementById('tool-title');
    const toolInput = document.getElementById('tool-input');
    const toolActionBtn = document.getElementById('tool-action-btn');
    const toolOutput = document.getElementById('tool-output');
    const toolLoader = document.getElementById('tool-loader');
    const closeToolBtn = document.getElementById('close-tool');

    let activeTool = null;

    // --- 4. THE MASTER GENERATOR ENGINE ---
    // ... existing generateEducationalContent function ...

    // New AI Tool Generators
    const generateConceptClarification = (topic) => {
        return `
            <div class="result-box">
                <h4><i class="fas fa-search-plus"></i> Concept: ${topic}</h4>
                <div class="clarification-section">
                    <h5><i class="fas fa-info-circle"></i> Simple Definition</h5>
                    <p>Think of <strong>${topic}</strong> like a well-organized library. Just as a library categorizes books so you can find them easily, ${topic} organizes complex systems into understandable patterns.</p>
                </div>
                
                <div class="clarification-section">
                    <h5><i class="fas fa-project-diagram"></i> Analogies</h5>
                    <p><strong>The "Chef" Analogy:</strong> Imagine you are a chef. ${topic} is like your detailed recipe book. It doesn't just tell you what the dish is; it explains why you use certain ingredients and how they react together to create the perfect flavor.</p>
                </div>

                <div class="clarification-section">
                    <h5><i class="fas fa-list-ol"></i> Step-by-Step Breakdown</h5>
                    <ol>
                        <li><strong>Identification:</strong> Recognizing the core components of the system.</li>
                        <li><strong>Integration:</strong> Understanding how these parts connect and influence each other.</li>
                        <li><strong>Execution:</strong> Seeing the concept in action within its natural environment.</li>
                        <li><strong>Refinement:</strong> Analyzing outcomes to deepen the understanding.</li>
                    </ol>
                </div>

                <div class="clarification-section grid-2">
                    <div class="info-bubble">
                        <h5><i class="fas fa-star"></i> Key Points</h5>
                        <ul>
                            <li>Foundational for advanced study</li>
                            <li>Relies on systematic logic</li>
                            <li>Highly adaptable to various contexts</li>
                        </ul>
                    </div>
                    <div class="info-bubble">
                        <h5><i class="fas fa-lightbulb"></i> Real-World Example</h5>
                        <p>In modern architecture, the principles of ${topic} are used to ensure structural balance while maintaining aesthetic appeal, just like how a balanced diet keeps you healthy.</p>
                    </div>
                </div>

                <div class="clarification-section summary">
                    <h5><i class="fas fa-flag-checkered"></i> Summary</h5>
                    <p>Ultimately, ${topic} is about clarity and connection. By stripping away the jargon and focusing on the underlying mechanisms, we can master even the most daunting subjects with confidence.</p>
                </div>
            </div>
        `;
    };

    const generateStructuredCurriculum = (topic) => {
        return `
            <div class="result-box curriculum-plan">
                <h4><i class="fas fa-map-signs"></i> Learning Roadmap: ${topic}</h4>
                <p class="subtitle">Estimated Duration: 4 Weeks (Beginner to Advanced)</p>
                
                <div class="curriculum-week">
                    <h5>Week 1: Fundamentals & Discovery</h5>
                    <ul>
                        <li><strong>Day 1-2:</strong> Introduction to ${topic} history and basic terminology.</li>
                        <li><strong>Day 3-4:</strong> Exploring the primary theoretical frameworks.</li>
                        <li><strong>Day 5-7:</strong> Practical identification exercises and case study review.</li>
                    </ul>
                </div>

                <div class="curriculum-week">
                    <h5>Week 2: Intermediate Implementation</h5>
                    <ul>
                        <li><strong>Day 8-10:</strong> Deep dive into secondary mechanisms and logic.</li>
                        <li><strong>Day 11-13:</strong> Hands-on simulation of ${topic} processes.</li>
                        <li><strong>Day 14:</strong> Weekly review and preliminary assessment.</li>
                    </ul>
                </div>

                <div class="curriculum-week">
                    <h5>Week 3: Advanced Optimization</h5>
                    <ul>
                        <li><strong>Day 15-18:</strong> Addressing complex variables and performance bottlenecks.</li>
                        <li><strong>Day 19-21:</strong> Integrating ${topic} with multidisciplinary systems.</li>
                    </ul>
                </div>

                <div class="curriculum-week">
                    <h5>Week 4: Mastery & Projects</h5>
                    <ul>
                        <li><strong>Day 22-25:</strong> Designing a standalone project utilizing all learned principles.</li>
                        <li><strong>Day 26-28:</strong> Final refinements and documentation of your roadmap journey.</li>
                    </ul>
                </div>

                <div class="curriculum-footer">
                    <p><i class="fas fa-award"></i> <strong>Pro Tip:</strong> Spend at least 45 minutes daily on active recall to reinforce the ${topic} concepts effectively.</p>
                </div>
            </div>
        `;
    };

    // Card Interaction Logic
    conceptCard.addEventListener('click', () => {
        activeTool = 'concept';
        toolTitle.innerText = "Concept Clarification";
        toolInput.placeholder = "e.g. Photosynthesis, Cryptography, Renaissance...";
        toolInput.value = "";
        toolOutput.innerHTML = "";
        aiToolContainer.classList.remove('hidden');
        aiToolContainer.scrollIntoView({ behavior: 'smooth' });
    });

    curriculumCard.addEventListener('click', () => {
        activeTool = 'curriculum';
        toolTitle.innerText = "Structured Curriculum Planner";
        toolInput.placeholder = "e.g. Web Development, Psychology, Data Science...";
        toolInput.value = "";
        toolOutput.innerHTML = "";
        aiToolContainer.classList.remove('hidden');
        aiToolContainer.scrollIntoView({ behavior: 'smooth' });
    });

    closeToolBtn.addEventListener('click', () => {
        aiToolContainer.classList.add('hidden');
        activeTool = null;
    });

    toolActionBtn.addEventListener('click', () => {
        const val = toolInput.value.trim();
        if(!val) return;

        toolOutput.classList.add('hidden');
        toolLoader.classList.remove('hidden');
        toolActionBtn.disabled = true;

        setTimeout(() => {
            let result = "";
            if(activeTool === 'concept') {
                result = generateConceptClarification(val);
            } else if(activeTool === 'curriculum') {
                result = generateStructuredCurriculum(val);
            }

            toolOutput.innerHTML = result;
            toolLoader.classList.add('hidden');
            toolOutput.classList.remove('hidden');
            toolActionBtn.disabled = false;
        }, 2200);
    });

    // ... existing code ...
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
                <h2 id="note-heading">Comprehensive Study Notes: ${t}</h2>
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid var(--border);">
                
                <section class="note-section">
                    <h4>1. Introduction</h4>
                    <p>${intros[Math.floor(Math.random() * intros.length)]}</p>
                    <p>In the current academic context, ${topic} is defined as a multidisciplinary approach focused on precision, efficiency, and scalability across varied environments.</p>
                </section>

                <section class="note-section">
                    <h4>2. Definition</h4>
                    <p>Formal definitions categorize ${topic} as a systematic set of principles used to identify, analyze, and optimize performance within its specific domain. It involves the integration of ${topic} logic into standard operational procedures to ensure high-fidelity outcomes.</p>
                </section>

                <section class="note-section">
                    <h4>3. History & Background</h4>
                    <p>${history[Math.floor(Math.random() * history.length)]}</p>
                    <p>Major milestones in the ${topic} timeline include significant breakthroughs in theoretical modeling and the subsequent wide-scale adoption of these techniques by leading institutions.</p>
                </section>

                <section class="note-section">
                    <h4>4. Core Concepts & Explanation</h4>
                    <p>The mastery of ${topic} relies on several foundational pillars:</p>
                    <ul>
                        <li><strong>Architectural Integrity:</strong> Ensuring the ${topic} framework remains robust under peak loads.</li>
                        <li><strong>Theoretical Consistency:</strong> Aligning practical applications with verified academic standards.</li>
                        <li><strong>Innovation Feedback:</strong> Continuously updating ${topic} protocols based on empirical data.</li>
                    </ul>
                </section>

                <section class="note-section">
                    <h4>5. Types & Categories</h4>
                    <p>Depending on implementation, ${topic} can be classified into several sub-types:</p>
                    <ol>
                        <li><strong>Operational ${topic}:</strong> Focused on everyday execution.</li>
                        <li><strong>Strategic ${topic}:</strong> Designed for long-term goal alignment.</li>
                        <li><strong>Hybrid Models:</strong> Combining elements of both to maximize versatility.</li>
                    </ol>
                </section>

                <section class="note-section">
                    <h4>6. Working Process</h4>
                    <p>The standard workflow for ${topic} follows a rigorous five-step cycle: Observation, Hypothesization, Implementation, Testing, and Optimization. This ensures that every ${topic} instance meets the required quality metrics.</p>
                </section>

                <section class="note-section">
                    <h4>7. Advantages</h4>
                    <ul>
                        <li><strong>Enhanced Capability:</strong> Amplifies the primary functions of the system.</li>
                        <li><strong>Resource Optimization:</strong> Strategic allocation of ${topic} assets to reduce overhead.</li>
                        <li><strong>Scalability:</strong> Effortlessly expands to meet growing academic demands.</li>
                    </ul>
                </section>

                <section class="note-section">
                    <h4>8. Disadvantages & Limitations</h4>
                    <p>While powerful, ${topic} faces certain challenges such as high initial complexity, potential resource dependency, and the need for constant maintenance amidst evolving standards.</p>
                </section>

                <section class="note-section">
                    <h4>9. Real-World Applications</h4>
                    <p>${topic} is currently utilized in various sectors including industry-leading technology hubs, advanced medical research, and modern financial forecasting models where precision is paramount.</p>
                </section>

                <section class="note-section">
                    <h4>10. Future Scope</h4>
                    <p>The trajectory of ${topic} suggests a move toward deeper integration with automated systems and AI-driven refinement, potentially leading to a "Smart ${topic}" revolution that further simplifies user interaction.</p>
                </section>

                <section class="note-section">
                    <h4>11. Interview Questions</h4>
                    <p>1. Explain the fundamental paradox of ${topic} in modern environments?</p>
                    <p>2. How does ${topic} differentiate from its traditional counterparts?</p>
                    <p>3. Describe a scenario where ${topic} optimization significantly improved outcomes?</p>
                </section>

                <section class="note-section">
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
        noteSearchInput.value = '';

        // Simulate Generation
        setTimeout(() => {
            const content = generateEducationalContent(userInput);
            currentNoteHTML = content;
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
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        voiceBtn.addEventListener('click', () => {
            try {
                recognition.start();
                voiceBtn.classList.add('active');
            } catch(e) {
                console.error("Speech recognition already started or not supported.");
            }
        });

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            topicInput.value = text;
            voiceBtn.classList.remove('active');
            notesForm.dispatchEvent(new Event('submit'));
        };

        recognition.onerror = () => voiceBtn.classList.remove('active');
        recognition.onend = () => voiceBtn.classList.remove('active');
    } else {
        voiceBtn.style.display = 'none';
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
            const originalIcon = '<i class="fas fa-copy"></i>';
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => copyBtn.innerHTML = originalIcon, 2000);
        });
    });

    // PDF (using html2pdf.js)
    const downloadAsPDF = (element, filename) => {
        if (typeof html2pdf === 'undefined') {
            console.error("html2pdf library not loaded. Please check your internet connection.");
            alert("Export component is still loading or failed to load. Please try again in a few seconds.");
            return;
        }

        const opt = {
            margin:       [0.5, 0.5, 0.5, 0.5],
            filename:     filename,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { 
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff' // Force white background for PDF
            },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        // Execute download
        element.classList.add('pdf-export-mode');
        html2pdf().set(opt).from(element).save().then(() => {
            element.classList.remove('pdf-export-mode');
        }).catch(err => {
            console.error("PDF Export Error:", err);
            element.classList.remove('pdf-export-mode');
        });
    };

    pdfBtn.addEventListener('click', () => {
        const title = outputTitle.innerText.replace("Study Notes: ", "");
        downloadAsPDF(notesOutput, `EduLearn_Notes_${title}.pdf`);
    });

    // Share
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: outputTitle.innerText,
                text: notesOutput.innerText.substring(0, 200) + '...',
                url: window.location.href
            }).catch(console.error);
        } else {
            alert("Sharing is not supported on this browser.");
        }
    });

    // Search inside notes highlighting logic
    searchBtn.addEventListener('click', () => {
        searchBar.classList.toggle('hidden');
        if (!searchBar.classList.contains('hidden')) {
            noteSearchInput.focus();
        } else {
            // Clear highlights when closed
            notesOutput.innerHTML = currentNoteHTML;
        }
    });

    noteSearchInput.addEventListener('input', (e) => {
        const term = e.target.value.trim().toLowerCase();
        if (term.length < 2) {
            notesOutput.innerHTML = currentNoteHTML;
            return;
        }

        // Deep copy of current HTML to avoid mutations on mutations
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = currentNoteHTML;
        
        const walk = (node) => {
            if (node.nodeType === 3) { // Text node
                const content = node.textContent;
                const lowerContent = content.toLowerCase();
                if (lowerContent.includes(term)) {
                    const span = document.createElement('span');
                    const parts = content.split(new RegExp(`(${term})`, 'gi'));
                    span.innerHTML = parts.map(part => 
                        part.toLowerCase() === term ? `<span class="highlight">${part}</span>` : part
                    ).join('');
                    node.replaceWith(span);
                }
            } else {
                node.childNodes.forEach(walk);
            }
        };
        
        walk(tempDiv);
        notesOutput.innerHTML = tempDiv.innerHTML;
    });

    clearNotesBtn.addEventListener('click', () => {
        outputSection.classList.add('hidden');
        topicInput.value = '';
        topicInput.focus();
    });

    // --- 7. SUBJECT NOTES MODAL LOGIC ---
    const notesModal = document.getElementById('notes-modal');
    const subjectModalTitle = document.getElementById('subject-modal-title');
    const subjectModalContent = document.getElementById('subject-modal-content');
    const modalIcon = document.getElementById('modal-icon');
    const closeNotesModalBtn = document.getElementById('close-notes-modal');
    const modalPdfBtn = document.getElementById('modal-pdf-download');
    const noteCards = document.querySelectorAll('.note-card');

    const SUBJECT_NOTES = {
        programming: {
            title: "Programming Fundamentals",
            icon: "fas fa-code",
            content: `
                <h3>Comprehensive Programming Guide</h3>
                <p>Mastering programming requires a solid understanding of core concepts that apply across almost all modern languages.</p>
                
                <section class="note-section">
                    <h4>1. Variables & Data Types</h4>
                    <p>Variables are containers for storing data values. Common data types include:</p>
                    <ul>
                        <li><strong>String:</strong> Textual data ("Hello World")</li>
                        <li><strong>Integer:</strong> Whole numbers (42)</li>
                        <li><strong>Float:</strong> Decimal numbers (3.14)</li>
                        <li><strong>Boolean:</strong> Logical values (true/false)</li>
                    </ul>
                </section>

                <section class="note-section">
                    <h4>2. Control Structures</h4>
                    <p>Loops and conditionals allow you to control the flow of your program.</p>
                    <ul>
                        <li><strong>If Statements:</strong> Execute code based on a condition.</li>
                        <li><strong>For Loops:</strong> Repeat code a specific number of times.</li>
                        <li><strong>While Loops:</strong> Repeat code while a condition is true.</li>
                    </ul>
                </section>

                <section class="note-section">
                    <h4>3. Functions & Modularization</h4>
                    <p>Functions are blocks of reusable code that perform specific tasks. They help in making the code more readable and maintainable.</p>
                </section>

                <section class="note-section">
                    <h4>4. Object-Oriented Programming (OOP)</h4>
                    <p>OOP is a paradigm based on the concept of "objects", which contain data and code. Key pillars:</p>
                    <ul>
                        <li><strong>Encapsulation:</strong> Bundling data and methods.</li>
                        <li><strong>Inheritance:</strong> Creating new classes from existing ones.</li>
                        <li><strong>Polymorphism:</strong> Using a single interface for different types.</li>
                    </ul>
                </section>
            `
        },
        ai: {
            title: "Artificial Intelligence & ML",
            icon: "fas fa-robot",
            content: `
                <h3>AI & Machine Learning Essentials</h3>
                <p>Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.</p>
                
                <section class="note-section">
                    <h4>1. Machine Learning (ML)</h4>
                    <p>ML is a subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.</p>
                </section>

                <section class="note-section">
                    <h4>2. Neural Networks</h4>
                    <p>Inspired by the human brain, neural networks consist of layers of interconnected nodes (neurons) that process information in a non-linear fashion.</p>
                </section>

                <section class="note-section">
                    <h4>3. Deep Learning</h4>
                    <p>A more advanced form of ML that uses multi-layered neural networks to analyze complex data like images, speech, and patterns.</p>
                </section>

                <section class="note-section">
                    <h4>4. Natural Language Processing (NLP)</h4>
                    <p>The branch of AI that gives computers the ability to understand, interpret, and generate human language.</p>
                </section>

                <section class="note-section">
                    <h4>5. AI Ethics</h4>
                    <p>Ensuring AI systems are transparent, fair, and accountable is crucial as they become more integrated into society.</p>
                </section>
            `
        },
        web: {
            title: "Modern Web Development",
            icon: "fas fa-globe",
            content: `
                <h3>Web Technology Roadmap</h3>
                <p>The web ecosystem is vast, covering everything from basic structure to complex cloud architectures.</p>
                
                <section class="note-section">
                    <h4>1. HTML5 & Semantic Web</h4>
                    <p>HTML provides the structure for web pages. Semantic tags like &lt;article&gt; and &lt;section&gt; improve accessibility and SEO.</p>
                </section>

                <section class="note-section">
                    <h4>2. CSS3 & Responsive Design</h4>
                    <p>CSS is used for styling. Modern techniques like <strong>Flexbox</strong> and <strong>Grid</strong> allow for highly responsive and flexible layouts.</p>
                </section>

                <section class="note-section">
                    <h4>3. JavaScript & DOM</h4>
                    <p>JS makes web pages interactive. The Document Object Model (DOM) allows JS to dynamically update content and handle user events.</p>
                </section>

                <section class="note-section">
                    <h4>4. APIs & Integration</h4>
                    <p>Fetching data from external servers using Fetch API or Axios is fundamental for modern web applications.</p>
                </section>
            `
        }
    };

    const openNotesModal = (category) => {
        const data = SUBJECT_NOTES[category];
        if(!data) {
            console.error("No notes found for category:", category);
            return;
        }

        console.log("Opening modal for:", category);
        subjectModalTitle.innerText = data.title;
        subjectModalContent.innerHTML = data.content;
        modalIcon.className = data.icon;
        
        notesModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeNotesModal = () => {
        notesModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    noteCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.note;
            openNotesModal(category);
        });
    });

    closeNotesModalBtn.addEventListener('click', closeNotesModal);
    
    // Close on overlay click
    notesModal.addEventListener('click', (e) => {
        if(e.target === notesModal) closeNotesModal();
    });

    modalPdfBtn.addEventListener('click', () => {
        const title = subjectModalTitle.innerText;
        downloadAsPDF(subjectModalContent, `EduLearn_Subject_${title}.pdf`);
    });

    // Initial Scroll handling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
