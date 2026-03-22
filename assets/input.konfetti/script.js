// Custom Split Text utility to break title into characters for animation
function splitTextIntoChars(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return [];

    // We want to preserve the <br> tag, so we split by innerHTML
    const htmlObj = el.innerHTML.split('<br>');
    el.innerHTML = '';

    const charElements = [];

    htmlObj.forEach((line, index) => {
        const text = line.trim();
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const span = document.createElement('span');
            span.className = 'char';
            // preserve spaces
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            el.appendChild(span);
            charElements.push(span);
        }

        if (index < htmlObj.length - 1) {
            el.appendChild(document.createElement('br'));
        }
    });

    return charElements;
}

// Particle System
class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.dust = [];
        this.colors = ['#4285f4', '#ea4335', '#fbbc05', '#34a853', '#8e24aa', '#00bcd4'];

        this.resize();
        window.addEventListener('resize', () => this.resize());

        this.initDust();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initDust() {
        // Create subtle background dust
        for (let i = 0; i < 150; i++) {
            this.dust.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.3,
                speedX: (Math.random() - 0.5) * 0.1,
                speedY: (Math.random() - 0.5) * 0.1
            });
        }
    }

    emitRainbowParticles(amount = 80) {
        // Emit from top left area, spread out dynamically
        for (let i = 0; i < amount; i++) {
            // Flow direction roughly diagonally down-right (Math.PI / 4 is 45 deg)
            const baseAngle = (Math.PI / 4) + (Math.random() - 0.5) * 0.8;
            const speed = Math.random() * 6 + 2; // Dynamic speeds 2 to 8

            this.particles.push({
                x: -100 + Math.random() * 300,
                y: -100 + Math.random() * 300,
                size: Math.random() * 3 + 1.2, // Smaller sizes for elegant confetti
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                vx: Math.cos(baseAngle) * speed,
                vy: Math.sin(baseAngle) * speed,
                life: 1.0,
                decay: Math.random() * 0.008 + 0.002, // Various decay rates
                rotation: Math.random() * Math.PI * 2, // Visual rotation
                spin: (Math.random() - 0.5) * 0.2, // Visual spin speed
                wobbleSpeed: Math.random() * 0.1 + 0.05, // Dynamic floating wobble
                wobbleOffset: Math.random() * Math.PI * 2
            });
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw dust
        this.dust.forEach(d => {
            d.x += d.speedX;
            d.y += d.speedY;

            if (d.x < 0) d.x = this.canvas.width;
            if (d.x > this.canvas.width) d.x = 0;
            if (d.y < 0) d.y = this.canvas.height;
            if (d.y > this.canvas.height) d.y = 0;

            this.ctx.fillStyle = `rgba(0, 0, 0, ${d.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Draw and update animated rainbow particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];

            // Move with base velocity + flowing sine wave wobble
            p.x += p.vx + Math.cos(p.wobbleOffset) * 1.5;
            p.y += p.vy + Math.sin(p.wobbleOffset) * 1.0;
            p.wobbleOffset += p.wobbleSpeed;

            p.rotation += p.spin;
            p.life -= p.decay;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);

            // Draw elongated brush stroke/confetti
            this.ctx.fillStyle = p.color;
            // Keep opacity high for a bit, then fade out
            this.ctx.globalAlpha = Math.min(1, p.life * 2);
            this.ctx.shadowBlur = p.size * 2; // Dynamic blur based on size
            this.ctx.shadowColor = p.color;

            this.ctx.beginPath();
            this.ctx.roundRect(-p.size * 2, -p.size / 2, p.size * 4, p.size, p.size / 2);
            this.ctx.fill();

            this.ctx.restore();
        }

        requestAnimationFrame(() => this.update());
    }
}

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Canvas
    const ps = new ParticleSystem('particle-canvas');
    ps.update();

    // 2. Setup GSAP Timeline
    const chars = splitTextIntoChars('hero-title');

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Sequence:
    // A. Nav bar fades in
    tl.to('#navbar', { opacity: 1, duration: 0.8, y: 0, ease: "power2.out" }, 0.2);

    // B. Hero logo fades up
    tl.to('#hero-logo', { opacity: 1, y: 0, duration: 0.8 }, 0.4);

    // C. Character by character reveal for the title
    if (chars.length > 0) {
        tl.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "back.out(1.2)"
        }, 0.6);
    }

    // Trigger particle explosion right as text is finishing
    tl.call(() => {
        ps.emitRainbowParticles(250);
    }, null, 1.2);

    // D. Subtitle fades up
    tl.to('#hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, 1.4);

    // E. Add scroll down indicator
    tl.to('#scroll-indicator', { opacity: 1, duration: 0.8 }, 1.8);

    // Smooth scroll event listener for the scroll indicator link
    document.getElementById('scroll-indicator')?.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Add a continuous gentle particle emitter
    setInterval(() => {
        if (Math.random() > 0.3) {
            ps.emitRainbowParticles(15);
        }
    }, 1500);

    // Video controls
    const demoVideo = document.getElementById('demo-video');
    const playBtn = document.getElementById('play-btn');
    const speedBtn = document.getElementById('speed-btn');
    const progressBar = document.getElementById('video-progress');

    if (demoVideo && playBtn && speedBtn && progressBar) {
        playBtn.addEventListener('click', () => {
            if (demoVideo.paused) {
                demoVideo.play();
                playBtn.textContent = 'Pause';
            } else {
                demoVideo.pause();
                playBtn.textContent = 'Start';
            }
        });

        speedBtn.addEventListener('click', () => {
            if (demoVideo.playbackRate === 1.0) {
                demoVideo.playbackRate = 1.5;
                speedBtn.textContent = '1,0x Geschwindigkeit';
            } else {
                demoVideo.playbackRate = 1.0;
                speedBtn.textContent = '1,5x Geschwindigkeit';
            }
        });

        // Update progress bar as video plays
        demoVideo.addEventListener('timeupdate', () => {
            if (demoVideo.duration) {
                const progress = (demoVideo.currentTime / demoVideo.duration) * 100;
                progressBar.value = progress;
            }
        });

        // Seek video when progress bar is changed
        progressBar.addEventListener('input', () => {
            if (demoVideo.duration) {
                const seekTime = (progressBar.value / 100) * demoVideo.duration;
                demoVideo.currentTime = seekTime;
            }
        });

        // Update play button on video end
        demoVideo.addEventListener('ended', () => {
            playBtn.textContent = 'Start';
        });
    }

    // Video 2 controls (Walkthrough)
    const demoVideo2 = document.getElementById('demo-video-2');
    const playBtn2 = document.getElementById('play-btn-2');
    const speedBtn2 = document.getElementById('speed-btn-2');
    const progressBar2 = document.getElementById('video-progress-2');

    if (demoVideo2 && playBtn2 && speedBtn2 && progressBar2) {
        playBtn2.addEventListener('click', () => {
            if (demoVideo2.paused) {
                demoVideo2.play();
                playBtn2.textContent = 'Pause';
            } else {
                demoVideo2.pause();
                playBtn2.textContent = 'Start';
            }
        });

        speedBtn2.addEventListener('click', () => {
            if (demoVideo2.playbackRate === 1.0) {
                demoVideo2.playbackRate = 1.5;
                speedBtn2.textContent = '1,0x Geschwindigkeit';
            } else {
                demoVideo2.playbackRate = 1.0;
                speedBtn2.textContent = '1,5x Geschwindigkeit';
            }
        });

        // Update progress bar as video plays
        demoVideo2.addEventListener('timeupdate', () => {
            if (demoVideo2.duration) {
                const progress = (demoVideo2.currentTime / demoVideo2.duration) * 100;
                progressBar2.value = progress;
            }
        });

        // Seek video when progress bar is changed
        progressBar2.addEventListener('input', () => {
            if (demoVideo2.duration) {
                const seekTime = (progressBar2.value / 100) * demoVideo2.duration;
                demoVideo2.currentTime = seekTime;
            }
        });

        // Update play button on video end
        demoVideo2.addEventListener('ended', () => {
            playBtn2.textContent = 'Start';
        });
    }
});
