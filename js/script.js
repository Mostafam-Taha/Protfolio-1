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

document.addEventListener("DOMContentLoaded", function() {
  // قائمة بجميع الأقسام المراد مراقبتها
  const sections = [
    '#home',
    '#services',
    '#about',
    // '#protfolio',
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






