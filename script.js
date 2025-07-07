        const words = ["Uygun Fiyat", "Profesyonel Ekip", "Hızlı Çözüm"];
        const textElement = document.getElementById("interactive-text");
        let currentIndex = 0;

        function changeText() {
            textElement.classList.remove("animate__fadeIn", "animate__fadeOut");
            textElement.classList.add("animate__animated", "animate__fadeOut");
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                textElement.textContent = words[currentIndex];
                textElement.classList.remove("animate__fadeOut");
                textElement.classList.add("animate__fadeIn");
                
                setTimeout(() => {
                    textElement.classList.remove("animate__fadeIn");
                }, 1000);
            }, 1000);
        }

        // Duplicate review cards for seamless loop
        const reviewsSlider = document.getElementById('reviewsSlider');
        const reviewCards = reviewsSlider.innerHTML;
        reviewsSlider.innerHTML = reviewCards + reviewCards;

        // Change text every 2.5 seconds
        setInterval(changeText, 2500);

        // Smooth scrolling for potential anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service cards and about cards
        document.querySelectorAll('.service-card, .about-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
