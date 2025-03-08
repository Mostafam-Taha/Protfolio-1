document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".circle-progress");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const targetPercent = parseInt(circle.getAttribute("data-percent"));
                const percentElement = circle.parentElement.querySelector(".percent");
                
                let currentPercent = 0;
                const duration = 1000; // مدة الحركة: 2 ثانية
                const increment = (targetPercent / duration) * 10;

                const animate = () => {
                    if (currentPercent < targetPercent) {
                        currentPercent += increment;
                        if(currentPercent > targetPercent) currentPercent = targetPercent;
                        
                        // تحديث الشريط والرقم
                        circle.style.background = `conic-gradient(#e66500 ${currentPercent}%, #121212 ${currentPercent}%)`;
                        percentElement.textContent = `${Math.round(currentPercent)}%`;
                        
                        requestAnimationFrame(animate);
                    }
                };
                
                requestAnimationFrame(animate);
                observer.unobserve(circle);
            }
        });
    }, { threshold: 0.5 });

    circles.forEach(circle => observer.observe(circle));
});

document.addEventListener("DOMContentLoaded", function() {
  const homeSection = document.querySelector('#home');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        homeSection.classList.add('visible');
      }
    });
  }, {
    threshold: 0.5 // سيتم التنشيط عندما يكون 50% من العنصر مرئيًا
  });

  observer.observe(homeSection);
});

// services

document.addEventListener("DOMContentLoaded", function() {
  // تأثير للقسم الرئيسي
  const homeSection = document.querySelector('#home');
  const servicesSection = document.querySelector('#services');

  const observerOptions = {
    threshold: 0.5
  };

  const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        homeSection.classList.add('visible');
      }
    });
  }, observerOptions);

  const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        servicesSection.classList.add('visible');
      }
    });
  }, observerOptions);

  homeObserver.observe(homeSection);
  servicesObserver.observe(servicesSection);
});

// about me

document.addEventListener("DOMContentLoaded", function() {
  // إعداد المراقبين للأقسام
  const sections = [
    { element: document.querySelector('#home'), class: 'visible' },
    { element: document.querySelector('#services'), class: 'visible' },
    { element: document.querySelector('#about'), class: 'visible' }
  ];

  const observerOptions = {
    threshold: 0.5
  };

  sections.forEach(section => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(section.class);
        }
      });
    }, observerOptions);

    observer.observe(section.element);
  });
});

// protoflio

document.addEventListener("DOMContentLoaded", function() {
  // إعداد المراقبين لجميع الأقسام
  const sections = [
    { element: document.querySelector('#home'), class: 'visible' },
    { element: document.querySelector('#services'), class: 'visible' },
    { element: document.querySelector('#about'), class: 'visible' },
    { element: document.querySelector('#protfolio'), class: 'visible' }
  ];

  const observerOptions = {
    threshold: 0.5
  };

  sections.forEach(section => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains(section.class)) {
          entry.target.classList.add(section.class);
        }
      });
    }, observerOptions);

    observer.observe(section.element);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // قائمة بجميع الأقسام المراد مراقبتها
  const sections = [
    '#home',
    '#services',
    '#about',
    '#protfolio',
    '.testimonials'
  ];

  const observerOptions = {
    threshold: 0.5
  };

  sections.forEach(selector => {
    const element = document.querySelector(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    if (element) observer.observe(element);
  });
});

// contact

document.addEventListener("DOMContentLoaded", function() {
  // قائمة بجميع الأقسام
  const sections = [
    '#home',
    '#services',
    '#about',
    '#protfolio',
    '.testimonials',
    '#contect' // تأكد من تطابق الـ ID مع الهيكل
  ];

  const observerOptions = {
    threshold: 0.5
  };

  sections.forEach(selector => {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    observer.observe(element);
  });
});






// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.querySelector('.navbar');
//     const navLinks = document.querySelector('.nav-links');

//     // إنشاء عنصر الهامبرغر ديناميكيًا
//     const hamburger = document.createElement('div');
//     hamburger.className = 'hamburger';
//     hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
//         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
//     </svg>`;
    
//     navbar.appendChild(hamburger);

//     // إضافة أحداث النقر
//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         hamburger.classList.toggle('active');
//     });

//     // إغلاق القائمة عند النقر خارجها
//     document.addEventListener('click', (e) => {
//         if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
//             navLinks.classList.remove('active');
//             hamburger.classList.remove('active');
//         }
//     });

//     // إغلاق القائمة عند اختيار عنصر
//     navLinks.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active');
//             hamburger.classList.remove('active');
//         });
//     });
// });