// Final JS update: remove sticky contact, add back-to-top button behavior, hamburger, lightbox, counters, contact form
document.addEventListener('DOMContentLoaded', function (){
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav__list');
  const backToTop = document.getElementById('back-to-top');
  const galleryButtons = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox__img');
  const lightboxClose = document.querySelector('.lightbox__close');
  const contactSection = document.getElementById('contact');

  // Hamburger toggle
  if(navToggle){
    navToggle.addEventListener('click', function(){
      const open = this.classList.toggle('open');
      navMenu.classList.toggle('open');
      this.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Close nav when clicking link (mobile)
  document.querySelectorAll('.nav__link').forEach(link=>{
    link.addEventListener('click', ()=>{
      if(navToggle && navToggle.classList.contains('open')){
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
      }
    });
  });

  // Smooth scroll for anchor links (account for header height)
  const header = document.getElementById('header');
  const headerHeight = header ? header.offsetHeight : 80;
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){ e.preventDefault(); const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12; window.scrollTo({top, behavior:'smooth'}); }
    });
  });

  // Counters
  const counters = document.querySelectorAll('.stat__number[data-count]');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count')) || 0;
        let cur = 0; const step = Math.max(1, Math.floor(target/80));
        const id = setInterval(()=>{
          cur += step;
          if(cur >= target){ el.textContent = el.getAttribute('data-count'); clearInterval(id); }
          else el.textContent = cur + (el.getAttribute('data-count').includes('%') ? '%' : '+');
        }, 16);
        obs.unobserve(el);
      }
    });
  }, {threshold:0.6});
  counters.forEach(c=>obs.observe(c));

  // Lightbox handlers
  galleryButtons.forEach(btn=>{
    btn.addEventListener('click', function(){
      const src = btn.getAttribute('data-src') || btn.querySelector('img').src;
      lightboxImg.src = src;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    });
  });
  function closeLightbox(){
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden','true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
  if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if(lightbox) lightbox.addEventListener('click', function(e){ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeLightbox(); });

  // Contact form validation
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      if(!name || !email || !msg){ alert('Please fill all fields.'); return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ alert('Enter a valid email.'); return; }
      alert('Thanks, your message has been sent (simulated).');
      form.reset();
    });
  }

  // Back-to-top behavior
  function handleScroll(){
    if(!backToTop) return;
    if(window.scrollY > 400){ backToTop.classList.add('show'); }
    else { backToTop.classList.remove('show'); }
  }
  window.addEventListener('scroll', handleScroll, {passive:true});
  handleScroll();

  if(backToTop){
    backToTop.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // Set year
  const y = new Date().getFullYear(); const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = y;
});

// Slideshow controls + auto-cycle + lightbox integration (fixedsize v2)
(function() {
  const img = document.getElementById('slideshow-img');
  const nextBtn = document.getElementById('next-slide');
  const prevBtn = document.getElementById('prev-slide');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox__img');
  if (!img || !nextBtn || !prevBtn) return;

  const images = Array.from({length: 9}, (_, i) => `gallery/gallery${i+1}.jpg`);
  let index = Math.floor(Math.random() * images.length);
  let autoTimer = null;

  function showImage(newIndex) {
    const idx = (newIndex + images.length) % images.length;
    img.style.opacity = 0;
    setTimeout(() => {
      index = idx;
      img.src = images[index] + '?t=' + Date.now();
      img.setAttribute('data-index', index);
      img.style.opacity = 1;
    }, 450);
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => showImage(index + 1), 4000);
  }
  function stopAuto() { if (autoTimer) clearInterval(autoTimer); autoTimer = null; }

  nextBtn.addEventListener('click', () => { showImage(index + 1); startAuto(); });
  prevBtn.addEventListener('click', () => { showImage(index - 1); startAuto(); });

  // Clicking image opens lightbox and shows the same image
  img.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.src.split('?')[0];
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });

  // keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { showImage(index + 1); startAuto(); }
    if (e.key === 'ArrowLeft') { showImage(index - 1); startAuto(); }
  });

  // initialize
  showImage(index);
  startAuto();
})();


// === Preloader Control & Hero Rise-In ===
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if(preloader){
    preloader.classList.add('hidden');
  }
  const hero = document.querySelector('.hero__content');
  setTimeout(() => {
    if(hero) hero.classList.add('visible');
  }, 800);
});

// === Infinite Testimonials Carousel (Seamless Loop) ===
document.addEventListener('DOMContentLoaded', function(){
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial.card');
  const nextBtn = document.querySelector('.testimonial-btn.next');
  const prevBtn = document.querySelector('.testimonial-btn.prev');
  if(!track || slides.length === 0) return;

  let index = 1; // because of clones
  const total = slides.length;

  // Clone first and last slides for smooth infinite looping
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[total - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = track.querySelectorAll('.testimonial.card');
  const size = 100;
  track.style.transform = `translateX(-${index * size}%)`;

  let autoSlide;
  let isTransitioning = false;

  function updateSlide(newIndex){
    if (isTransitioning) return;
    isTransitioning = true;
    index = newIndex;
    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = `translateX(-${index * size}%)`;
  }

  track.addEventListener('transitionend', () => {
    if (allSlides[index].isEqualNode(firstClone)) {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${index * size}%)`;
    }
    if (allSlides[index].isEqualNode(lastClone)) {
      track.style.transition = 'none';
      index = total;
      track.style.transform = `translateX(-${index * size}%)`;
    }
    isTransitioning = false;
  });

  function startAuto(){
    stopAuto();
    autoSlide = setInterval(() => updateSlide(index + 1), 5000);
  }
  function stopAuto(){
    if(autoSlide) clearInterval(autoSlide);
  }

  nextBtn.addEventListener('click', ()=>{ updateSlide(index + 1); startAuto(); });
  prevBtn.addEventListener('click', ()=>{ updateSlide(index - 1); startAuto(); });
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);

  startAuto();
});


// Contact form -> WhatsApp integration (added by assistant)
(function(){
  var form = document.getElementById("whatsappForm");
  if(!form) return;
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var name = document.getElementById("name").value || "";
    var email = document.getElementById("email").value || "";
    var message = document.getElementById("message").value || "";
    var text = "Hello Groअथ् Team, my name is " + name + ". My email is " + email + ". I'd like to connect regarding " + message + ".";
    var wa = "https://wa.me/919711206218?text=" + encodeURIComponent(text);
    var toast = document.getElementById("toast");
    if(toast){
      toast.classList.add("show");
      setTimeout(function(){ toast.classList.remove("show"); }, 2200);
    }
    setTimeout(function(){ window.open(wa, "_blank"); }, 800);
  });
})();
