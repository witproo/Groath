let scrollTopBtn;

        const facultyData = [
{
                id: 1,
                name: "Harvinder Mathur",
                qualification: "Foundation & Technical Analysis Expert",
                experience: "12+ Years",
                specialization: "Technical Analysis & Swing Trading",
                bio: "Seasoned expert known for simplifying complex stock market concepts into clear, result-oriented strategies. Emphasizes clarity, independent analysis, and emotion-free trading.",
                photo: "harvinder_v2.jpg",
                detailed_bio: "Harvinder Mathur is a seasoned Foundation and Technical Analysis Expert, known for simplifying complex stock market concepts into clear, result-oriented strategies. His structured approach blends disciplined market study with practical, data-backed techniques that help both beginners and experienced traders build a strong trading foundation.\n\nHe emphasizes clarity, independent analysis, and emotion-free trading, guiding learners to understand not just how the market moves, but why it moves. Through real-life examples and a highly practical teaching style, Harvinder empowers students to trade with purpose, confidence, and consistent logic.\n\nHis mission is to transform beginners into informed, confident, and self-reliant market participants."
            },
{
                id: 4,
                name: "Suresh Shah",
                qualification: "Six Sigma Green Belt, ICMAI Certified",
                experience: "28+ Years",
                specialization: "Derivatives, Risk Management & Technical Analysis",
                bio: "Senior financial-markets professional with deep expertise in derivatives, risk management, and advanced technical analysis of market trends.",
                photo: "suresh_v2.jpg",
                detailed_bio: "Suresh Shah is a senior financial-markets professional with 28+ years of experience across derivatives, risk management, fund operations, investment advisory, and financial consultancy. A highly skilled technical analyst, he excels at interpreting market trends, price action, and chart patterns.\n\nHe is Six Sigma Green Belt Certified and has deep expertise in securities operations, hedge fund accounting, custody & settlements, and process automation. Suresh holds professional qualifications from ICMAI and postgraduate degrees from the University of Mumbai, bringing strong academic and industry depth to his teaching.\n\nHis structured, practical approach makes complex financial concepts easy to understand for learners at all levels."
            },
{
                id: 2,
                name: "Saurabh Limey",
                qualification: "Full-Time Trader & Time Cycle Mentor",
                experience: "15+ Years",
                specialization: "Time Cycle Trading & Astro-based Trading",
                bio: "Disciplined full-time trader expert in Time Cycle Trading and low-risk swing strategies. Known for calm mindset and practical guidance. | Astro-based Trading Expert",
                photo: "saurabh_v2.jpg",
                detailed_bio: "Saurabh Limey is a disciplined full-time trader known for his expertise in Time Cycle Trading and low-risk swing strategies. Blending technical analysis with cyclical and planetary insights, he helps traders understand market timing with greater clarity.\n\nRespected across the trading community, Saurabh is admired for his calm mindset, practical guidance, and ability to keep traders emotionally balanced—whether markets move in their favor or against them. He has mentored learners from diverse backgrounds and continues to inspire them with his sharp insights and grounded approach."
            },
{
                id: 3,
                name: "Puneet Gupta",
                qualification: "NIFM & NSE Postgraduate, EPAT Certified",
                experience: "14+ Years",
                specialization: "F&O, Quant Trading & Capital Markets",
                bio: "Seasoned financial-markets professional with expertise in F&O trading, quantitative analysis, and advanced trading technologies.",
                photo: "puneet_v2.jpg",
                detailed_bio: "Puneet Gupta is a seasoned financial-markets professional with 14+ years of corporate experience across capital markets, F&O, and quantitative trading. A postgraduate in Financial Markets from NIFM (Ministry of Finance) & NSE, he also holds multiple NCFM certifications and the prestigious EPAT certification from QuantInsti.\n\nAn expert in F&O trading, Puneet is skilled in advanced Excel, VBA, Bloomberg, and BlackRock Aladdin. He blends technical knowledge with real-market experience, delivering logical, structured, and highly practical training that helps learners build strong quantitative skills and a disciplined trading mindset."
            }
];

        const coursesData = [
            {
                id: 1,
                title: "Stock Trading Foundation Course",
                price: "₹12,000 + GST ",
                duration: "12 Weeks",
                hours: "60+ Hours",
                level_name: "Beginner",
                description: "Master the basics of stock trading with comprehensive training",
                overview: "Learn the fundamentals of stock market trading from industry experts. This comprehensive course covers all the basics you need to start your trading journey with confidence.",
                benefits: [
                    "Complete understanding of stock market fundamentals",
                    "Learn to analyze charts and identify trading opportunities",
                    "Understand trading psychology and mindset",
                    "Master basic risk management techniques",
                    "Practical knowledge immediately applicable",
                    "Bonus: Basic Training of Mutual Funds"
                ],
                features: [
                    "Stock Market Fundamentals",
                    "Importance of Geography of Candles",
                    "Technical Analysis on Live Charts",
                    "Investments vs Trading",
                    "Psychology of Candles",
                    "How to Extract Wholesale Price",
                    "Bonus: Basic Training of Mutual Funds"
                ],
                for_whom: "Perfect for beginners who want to learn stock trading from scratch"
            },
            {
                id: 2,
                title: "Futures and Options",
                price: "₹36,000",
                duration: "24 Weeks",
                hours: "120+ Hours",
                level_name: "Intermediate",
                special: "1 Live Trading Session / Week",
                description: "Master futures and options trading with 1 live trading session every week",
                overview: "Take your trading to the next level with advanced derivatives trading. Includes weekly live trading sessions with expert traders.",
                benefits: [
                    "Master options buying and selling strategies",
                    "Understand Greeks and their applications",
                    "Learn advanced stop-loss strategies",
                    "Weekly live trading sessions with experts",
                    "Real-time market analysis",
                    "Index and equity selection techniques"
                ],
                features: [
                    "Option Buying and Selling",
                    "How to Read Greeks",
                    "Importance of Stop-Loss",
                    "Wonders of Stop-Loss",
                    "Index and Equity Selection",
                    "1 Live Trading Session / Week"
                ],
                for_whom: "For traders ready to advance to options and futures trading"
            },
            {
                id: 3,
                title: "Commodity and Crypto",
                price: "₹45,000",
                duration: "24 Weeks",
                hours: "120+ Hours",
                level_name: "Advanced",
                description: "Learn commodity and cryptocurrency trading advanced strategies",
                overview: "Master advanced trading in commodities and cryptocurrencies. Learn from the best traders in these markets.",
                benefits: [
                    "Commodity trading strategies (bullion, energy, metals)",
                    "Cryptocurrency trading and blockchain understanding",
                    "Advanced market analysis techniques",
                    "Risk management for volatile markets",
                    "Portfolio diversification strategies",
                    "Practical trading in real markets"
                ],
                features: [
                    "Bullion & Energy",
                    "Metals",
                    "BTC & Ethereum",
                    "Market Analysis Techniques",
                    "Risk Management Strategies",
                    "Practical Trading Sessions"
                ],
                for_whom: "For advanced traders seeking expertise in commodities and crypto"
            },
            {
                id: 4,
                title: "Astrobase Trading",
                price: "₹90,000 + GST ",
                duration: "8 Weeks",
                hours: "40+ Hours",
                level_name: "Beginner",
                description: "Master time cycle trading with low-risk swing strategies and market psychology",
                overview: "Learn the power of time cycle trading combined with low-risk swing strategies. This course bridges the gap between technical analysis and market psychology, making it perfect for traders at any level who want to understand market timing and psychology.",
                benefits: [
                    "Master Time Cycle Trading concepts and patterns",
                    "Learn low-risk swing trading strategies",
                    "Understand market psychology and trader mindset",
                    "Identify high-probability trading opportunities",
                    "Risk management with swing trading",
                    "From beginner-friendly to advanced concepts"
                ],
                features: [
                    "Time Cycle Trading Fundamentals",
                    "Low-Risk Swing Strategies",
                    "Mindset & Market Psychology",
                    "Time Pattern Recognition",
                    "Entry & Exit Signals",
                    "Risk Management Techniques",
                    "Beginner-Friendly to Advanced Modules"
                ],
                for_whom: "Perfect for traders interested in time cycle analysis and swing trading without high risk"
            }
        ];

        const galleryData = [
            { id: 1, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-1.jpg", type: "image" },
            { id: 2, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-10.jpg", type: "image" },
            { id: 3, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-2.jpg", type: "image" },
            { id: 4, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-3.jpg", type: "image" },
            { id: 5, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-4.jpg", type: "image" },
            { id: 6, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-5.jpg", type: "image" },
            { id: 7, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-6.jpg", type: "image" },
            { id: 8, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-7.jpg", type: "image" },
            { id: 9, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-8.jpg", type: "image" },
            { id: 10, title: "Groath Training Session", description: "Live training, seminars and events by Groath", thumbnail: "gallery/groath-training-session-event-9.jpg", type: "image" }
        ];

        const achievementsData = [
            { id: 1, title: "Best Stock Trading Educator 2024", year: "2024", issuer: "Financial Excellence Awards India", description: "Recognized for outstanding financial education and training programs", icon: "🏆" },
            { id: 2, title: "Top 10 Financial Platform", year: "2024", issuer: "Indian Stock Market Association", description: "Ranked among top 10 financial education platforms in India", icon: "🎖️" },
            { id: 3, title: "Customer Satisfaction Excellence", year: "2023", issuer: "Trader Choice Awards", description: "Highest customer satisfaction rating among competitors", icon: "⭐" },
            { id: 4, title: "Innovation in Financial Tech", year: "2023", issuer: "Tech Finance Summit", description: "Award for innovative trading technology and tools", icon: "💡" },
            { id: 5, title: "Most Trusted Trading Platform", year: "2022", issuer: "Investment Trust Council", description: "Certified as most trusted by traders and investors", icon: "🛡️" },
            { id: 6, title: "Excellence in Training", year: "2022", issuer: "National Institute of Finance", description: "Outstanding contribution to financial education sector", icon: "📚" }
        ];

        const testimonialsData = [
            {
                id: 1,
                name: "Vikram Sharma",
                title: "Professional Day Trader",
                text: "This course completely transformed how I understand the markets. The technical analysis concepts that seemed complex before are now crystal clear. The faculty's practical approach helped me immensely in my trading journey.",
                rating: 5,
                photo: "👨‍💼"
            },
            {
                id: 2,
                name: "Priya Desai",
                title: "Swing Trader",
                text: "I came here knowing nothing about trading. The structured learning path and expert mentorship gave me the confidence to start my trading career. Highly grateful for the support throughout!",
                rating: 5,
                photo: "👩‍💼"
            },
            {
                id: 3,
                name: "Rajesh Gupta",
                title: "Mutual Fund Investor",
                text: "Finally understand how to properly diversify my investments. The course content is practical and applicable in real life. Worth every penny for the knowledge gained!",
                rating: 5,
                photo: "👨‍🎓"
            },
            {
                id: 4,
                name: "Neha Kapoor",
                title: "Options Trader",
                text: "Options trading was intimidating until I took this course. The faculty breaks down complex concepts so well. Now I trade with confidence and understanding!",
                rating: 5,
                photo: "👩‍🎓"
            },
            {
                id: 5,
                name: "Amit Singh",
                title: "Full-time Trader",
                text: "I transitioned from my corporate job to full-time trading thanks to the knowledge and confidence I gained here. The mentorship program was instrumental in my success.",
                rating: 5,
                photo: "👨‍💻"
            },
            {
                id: 6,
                name: "Sanya Patel",
                title: "Part-time Investor",
                text: "Balancing my job and trading is now possible because of the efficient learning methods here. Great community support and daily market insights really helped!",
                rating: 5,
                photo: "👩‍💻"
            },
            {
                id: 7,
                name: "Rohan Mehta",
                title: "Intraday Trader",
                text: "The intraday trading module gave me insights I never knew existed. The live trading sessions with the faculty are incredibly valuable and practical!",
                rating: 5,
                photo: "👨‍💼"
            },
            {
                id: 8,
                name: "Divya Nair",
                title: "Stock Market Enthusiast",
                text: "I always wanted to understand the stock market properly. This academy provided exactly what I needed - comprehensive knowledge and excellent faculty support!",
                rating: 5,
                photo: "👩‍💼"
            },
            {
                id: 9,
                name: "Suresh Kumar",
                title: "Options Trader",
                text: "Started with zero trading knowledge. The step-by-step approach to learning options trading helped me understand Greeks and strategies correctly. Amazing experience!",
                rating: 5,
                photo: "👨‍🎓"
            },
            {
                id: 10,
                name: "Anjali Verma",
                title: "Long-term Investor",
                text: "The fundamental analysis course changed my investing approach completely. Now I invest with proper research and confidence instead of guessing. Life-changing!",
                rating: 5,
                photo: "👩‍🎓"
            },
            {
                id: 11,
                name: "Karthik Reddy",
                title: "Futures Trader",
                text: "Futures trading seemed complicated until this course. The practical examples and real-time demonstrations made everything click. Excellent faculty expertise!",
                rating: 5,
                photo: "👨‍💻"
            },
            {
                id: 12,
                name: "Sneha Joshi",
                title: "Crypto Investor",
                text: "The cryptocurrency module is comprehensive and well-structured. I went from crypto newbie to confident trader. The support community here is fantastic!",
                rating: 5,
                photo: "👩‍💻"
            }
        ];

        function renderFaculty() {
            const facultyGrid = document.getElementById('facultyGrid');
            facultyGrid.innerHTML = facultyData.map(faculty => `
                <div class="faculty-card" onclick="showFacultyModal(${faculty.id})" style="cursor: pointer;">
                    <div class="faculty-photo" style="background: linear-gradient(135deg, var(--primary-navy), var(--accent-gold)); overflow: hidden; background-size: cover; background-position: center;"><img src="${faculty.photo}" alt="${faculty.name}" ></div>
                    <h3 style="transition: all 0.3s ease; position: relative;">${faculty.name}</h3>
                    <p class="faculty-qualification">${faculty.qualification}</p>
                    <div class="faculty-specialization">${faculty.specialization}</div>
                    <p class="faculty-experience">⏱️ ${faculty.experience} Experience</p>
                    <p class="faculty-bio">${faculty.bio}</p>
                </div>
            `).join('');
        }

        function showFacultyModal(id) {
            const faculty = facultyData.find(f => f.id === id);
            const modal = document.getElementById('courseModal');
            const modalHeader = document.getElementById('modalHeader');
            const modalBody = document.getElementById('modalBody');

            modalHeader.innerHTML = `
                <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 1.5rem;">
                    <img src="${faculty.photo}" alt="${faculty.name}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
                    <div>
                        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${faculty.name}</h2>
                        <p style="font-size: 1.1rem; color: var(--accent-gold); font-weight: 600; margin: 0.3rem 0;">${faculty.qualification}</p>
                        <p style="font-size: 1rem; color: var(--color-text-secondary); margin: 0.3rem 0;">⏱️ ${faculty.experience} Experience</p>
                        <div style="display: inline-block; background: var(--accent-gold); color: white; padding: 0.4rem 1rem; border-radius: var(--radius-full); font-size: 0.9rem; font-weight: 600; margin-top: 0.8rem;">${faculty.specialization}</div>
                    </div>
                </div>
            `;

            modalBody.innerHTML = `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-size: 1.4rem; margin-bottom: 1rem; color: var(--primary-navy);">About ${faculty.name.split(' ')[0]}</h3>
                    <p style="color: var(--color-text-secondary); line-height: 1.8; font-size: 1rem; white-space: pre-wrap;">${faculty.detailed_bio}</p>
                </div>

                <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
                    <button class="btn btn-outline" style="flex: 0 0 auto; padding: 1rem 1.5rem;" onclick="closeModal()">CLOSE</button>
                </div>
            `;

            modal.classList.add('active');
        }

        function contactFacultyViaWhatsApp(facultyName) {
            const whatsappNumber = '919211230750';
            const message = `Hi, I would like to learn more about ${facultyName}'s courses and mentorship program. Could you please provide details about enrollment and schedules?\n\nThank you!`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }

        function renderCourses() {
            const coursesGrid = document.getElementById('coursesGrid');
            coursesGrid.innerHTML = coursesData.map(course => `
                <div class="course-card" data-course="${course.id}">
                    <span class="course-level">Course ${course.id}</span>
                    <h3>${course.title}</h3>
                    <div class="course-meta">
                        <span>📚 ${course.duration}</span>
                        <span>⏱️ ${course.hours}</span>
                    </div>
                    <p class="course-description">${course.description}</p>
                    <div class="course-price">${course.price}</div>
                    <ul class="course-features">
                        ${course.features.slice(0, 4).map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <button class="btn btn-primary" style="width: 100%;" onclick="showCourseModal(${course.id})">Enroll Now</button>
                </div>
            `).join('');
        }

        let currentFilter = 'all';

        
        function renderGallery() {
            const galleryGrid = document.getElementById('galleryGrid');
            const filteredData = galleryData.filter(item => item.type !== 'video');
            galleryGrid.innerHTML = filteredData.map(item => `
                <div class="gallery-item" onclick="openGalleryModal(${item.id})">
                    <div class="gallery-thumbnail" style="background-image: url('${item.thumbnail}'); background-size: contain; background-position: center; background-repeat: no-repeat; font-size: 0;"></div>
                    <div class="gallery-info">
                        <h3>${item.title}</h3>
                        <p class="gallery-description">${item.description}</p>
                    </div>
                </div>
            `).join('');
        }

        function renderAchievements() {
            const achievementsGrid = document.getElementById('achievementsGrid');
            achievementsGrid.innerHTML = achievementsData.map(achievement => `
                <div class="award-card">
                    <div class="award-icon">${achievement.icon}</div>
                    <h3>${achievement.title}</h3>
                    <div class="award-year">${achievement.year}</div>
                    <p class="award-issuer">${achievement.issuer}</p>
                    <p class="award-description">${achievement.description}</p>
                </div>
            `).join('');
        }

        let currentTestimonialIndex = 0;
        let testimonialInterval = null;
        let isPlaying = true;

        function renderTestimonials() {
            const carousel = document.getElementById('testimonialsCarousel');
            carousel.innerHTML = testimonialsData.map((testimonial, index) => `
                <div class="testimonial-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <div class="testimonial-card">
                        <div class="testimonial-header">
                            <div class="testimonial-photo">${testimonial.photo}</div>
                            <div class="testimonial-info">
                                <p class="testimonial-author">${testimonial.name}</p>
                                <p class="testimonial-level">${testimonial.title}</p>
                            </div>
                        </div>
                        <p class="testimonial-text">${testimonial.text}</p>
                        <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
                    </div>
                </div>
            `).join('');
            
            startAutoPlay();
        }

        function showTestimonial(index) {
            const slides = document.querySelectorAll('.testimonial-slide');
            slides.forEach(slide => slide.classList.remove('active'));
            
            if (index >= slides.length) {
                currentTestimonialIndex = 0;
            } else if (index < 0) {
                currentTestimonialIndex = slides.length - 1;
            } else {
                currentTestimonialIndex = index;
            }
            
            slides[currentTestimonialIndex].classList.add('active');
        }

        function nextTestimonial() {
            showTestimonial(currentTestimonialIndex + 1);
        }

        function prevTestimonial() {
            showTestimonial(currentTestimonialIndex - 1);
        }

        function startAutoPlay() {
            if (testimonialInterval) {
                clearInterval(testimonialInterval);
            }
            testimonialInterval = setInterval(nextTestimonial, 3500);
            isPlaying = true;
            updatePlayPauseButton();
        }

        function stopAutoPlay() {
            if (testimonialInterval) {
                clearInterval(testimonialInterval);
                testimonialInterval = null;
            }
            isPlaying = false;
            updatePlayPauseButton();
        }

        function togglePlayPause() {
            if (isPlaying) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        }

        function updatePlayPauseButton() {
            const btn = document.getElementById('playPauseBtn');
            if (isPlaying) {
                btn.innerHTML = '⏸';
                btn.setAttribute('aria-label', 'Pause auto-play');
            } else {
                btn.innerHTML = '▶';
                btn.setAttribute('aria-label', 'Resume auto-play');
            }
        }

        document.getElementById('prevBtn').addEventListener('click', () => {
            prevTestimonial();
            stopAutoPlay();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            nextTestimonial();
            stopAutoPlay();
        });

        document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);

        function createScrollTopButton() {
            scrollTopBtn = document.createElement('button');
            scrollTopBtn.innerHTML = '↑';
            scrollTopBtn.className = 'scroll-top-btn';
            scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
            scrollTopBtn.style.display = 'none';
            document.body.appendChild(scrollTopBtn);

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        function handleScrollTop() {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }

        function openGalleryModal(id) {
            const item = galleryData.find(g => g.id === id);
            const modal = document.getElementById('courseModal');
            const modalHeader = document.getElementById('modalHeader');
            const modalBody = document.getElementById('modalBody');

            modalHeader.innerHTML = `
                <h2>${item.title}</h2>
                
            `;

            modalBody.innerHTML = `
                <div class="gallery-thumbnail" style="margin-bottom: 1.5rem; background: url('${item.thumbnail}') center/contain no-repeat; height: 300px; border-radius: 8px;"></div>
                <p class="gallery-description" style="font-size: 1rem; line-height: 1.8;">${item.description}</p>
                ${item.type === 'video' ? '<p style="margin-top: 1rem; color: var(--color-text-secondary); font-style: italic;">🎥 Video content would play here</p>' : ''}
            `;

            modal.classList.add('active');
        }

        function showCourseModal(id) {
            const course = coursesData.find(c => c.id === id);
            const modal = document.getElementById('courseModal');
            const modalHeader = document.getElementById('modalHeader');
            const modalBody = document.getElementById('modalBody');

            modalHeader.innerHTML = `
                <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">${course.title}</h2>
                <div class="course-meta" style="margin-top: 0.5rem; gap: 1.5rem;">
                    <span>📚 Duration: ${course.duration}</span>
                    <span>⏱️ ${course.hours}</span>
                </div>
                <div class="course-price" style="margin: 1rem 0;">${course.price}</div>
                <div style="display: inline-block; background: var(--accent-gold); color: white; padding: 0.4rem 1rem; border-radius: var(--radius-full); font-size: 0.9rem; font-weight: 600; margin-top: 0.5rem;">Level: ${course.level_name}</div>
                ${course.special ? `<div style="display: inline-block; background: var(--color-primary); color: white; padding: 0.4rem 1rem; border-radius: var(--radius-full); font-size: 0.9rem; font-weight: 600; margin-left: 0.5rem; margin-top: 0.5rem;">⭐ ${course.special}</div>` : ''}
            `;

            modalBody.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.8rem; color: var(--primary-navy);">📖 Course Overview</h3>
                    <p style="color: var(--color-text-secondary); line-height: 1.7; font-size: 1rem;">${course.overview}</p>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.8rem; color: var(--primary-navy);">✨ Course Features</h3>
                    <ul class="course-features" style="margin-bottom: 0;">
                        ${course.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.8rem; color: var(--primary-navy);">🎯 What You'll Learn</h3>
                    <ul class="course-features" style="margin-bottom: 0;">
                        ${course.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.8rem; color: var(--primary-navy);">👥 Who Is This For?</h3>
                    <p style="color: var(--color-text-secondary); line-height: 1.7; font-size: 1rem;">${course.for_whom}</p>
                </div>

                <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
                    <button class="btn btn-primary" style="flex: 1; min-width: 200px; background: #25D366; border-color: #25D366; padding: 1rem;" onclick="enrollCourseViaWhatsApp('${course.title}', '${course.duration}', '${course.hours}', '${course.price}')">💬 ENROLL NOW</button>
                    <button class="btn btn-outline" style="flex: 0 0 auto; padding: 1rem 1.5rem;" onclick="closeModal()">CLOSE</button>
                </div>
            `;

            modal.classList.add('active');
        }

        document.getElementById('modalClose').addEventListener('click', () => {
            document.getElementById('courseModal').classList.remove('active');
        });

        document.getElementById('courseModal').addEventListener('click', (e) => {
            if (e.target.id === 'courseModal') {
                document.getElementById('courseModal').classList.remove('active');
            }
        });

        document.getElementById('hamburger').addEventListener('click', () => {
            document.getElementById('navMenu').classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('navMenu').classList.remove('active');
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        document.getElementById('joinNowBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const coursesSection = document.getElementById('courses');
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = coursesSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                coursesSection.classList.add('section-highlight');
                
                setTimeout(() => {
                    coursesSection.classList.remove('section-highlight');
                }, 2500);
            }, 500);
        });

        document.querySelector('.btn-hero').addEventListener('click', (e) => {
            e.preventDefault();
            const coursesSection = document.getElementById('courses');
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = coursesSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                coursesSection.classList.add('section-highlight');
                
                setTimeout(() => {
                    coursesSection.classList.remove('section-highlight');
                }, 2500);
            }, 500);
        });

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            
            if (name && email && message) {
                const whatsappNumber = '919211230750';
                
                const whatsappMessage = `*NEW CONTACT INQUIRY*

*Name:*
${name}

*Email:*
${email}

*Message:*
${message}

---

Thank you for contacting Groअथ्.
We will get back to you shortly.`;
                
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                
                window.open(whatsappURL, '_blank');
                
                document.getElementById('contactForm').reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });

        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
            handleScrollTop();
        });

        function enrollCourseViaWhatsApp(courseName, duration, hours, price) {
            const whatsappNumber = '919211230750';
            const message = `Hi, I'm interested in ${courseName}.\nDuration: ${duration} | ${hours}\nPrice: ${price}\n\nPlease provide more details about:\n- Enrollment process\n- Batch schedule\n- Certification\n- Payment options\n\nThank you!`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }

        function closeModal() {
            document.getElementById('courseModal').classList.remove('active');
        }

        createScrollTopButton();
        renderFaculty();
        renderCourses();
        renderGallery();
        renderAchievements();
        renderTestimonials();