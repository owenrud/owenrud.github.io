/**
* Template Name: iPortfolio
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const scrollContainer = select('#main')
  const navbarlinksActive = () => {
    let position = scrollContainer.scrollTop + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      if (navbarlink.hash === '#') {
        if (scrollContainer.scrollTop < 200) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
        return
      }
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(scrollContainer, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    scrollContainer.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Full-section scroll snapping
   */
  const sectionPanelScroll = () => {
    const sections = select('main#main section', true)
    const scrollContainer = select('#main')
    let isScrolling = false

    const getActiveSectionIndex = () => {
      const currentScroll = scrollContainer.scrollTop
      return sections.findIndex(section => {
        return currentScroll >= section.offsetTop - 24 && currentScroll < section.offsetTop + section.offsetHeight - 24
      })
    }

    on('wheel', '#main', function(e) {
      if (window.innerWidth < 1200) return
      if (isScrolling) return
      const delta = e.deltaY
      if (Math.abs(delta) < 10) return
      e.preventDefault()
      const currentIndex = getActiveSectionIndex()
      let targetIndex = currentIndex
      if (delta > 0) targetIndex = Math.min(sections.length - 1, currentIndex + 1)
      if (delta < 0) targetIndex = Math.max(0, currentIndex - 1)
      if (targetIndex !== currentIndex && sections[targetIndex]) {
        isScrolling = true
        sections[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.setTimeout(() => { isScrolling = false }, 700)
      }
    })
  }

  sectionPanelScroll()

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (scrollContainer.scrollTop > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(scrollContainer, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    let body = select('body')
    let target = this.hash

    navbarlinks.forEach(navbarlink => navbarlink.classList.remove('active'))
    this.classList.add('active')

    if (target === '#') {
      e.preventDefault()
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' })
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      return
    }

    if (select(target)) {
      e.preventDefault()

      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(target)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  // Animate about-skills bars when they enter the viewport
  const aboutSkillBars = select('.about-skills .skill-bar', true);
  if (aboutSkillBars && aboutSkillBars.length) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const value = bar.getAttribute('data-value') || bar.getAttribute('aria-valuenow') || '0';
          bar.style.width = value + '%';
          const percentEl = bar.querySelector('.skill-percent');
          if (percentEl) { percentEl.style.opacity = 1; }
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });
    aboutSkillBars.forEach(b => obs.observe(b));
  }

})()