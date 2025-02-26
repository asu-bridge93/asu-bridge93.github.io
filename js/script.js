// Custom Cursor
document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');
  
  window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Add slight delay to cursor outline for smooth effect
      setTimeout(() => {
          cursorOutline.style.left = `${posX}px`;
          cursorOutline.style.top = `${posY}px`;
      }, 50);
  });
  
  // Add hover effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .social-link, .achievement-item');
  
  interactiveElements.forEach(el => {
      el.addEventListener('mouseover', () => {
          cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorOutline.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
          cursorOutline.style.borderColor = 'transparent';
      });
      
      el.addEventListener('mouseleave', () => {
          cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorOutline.style.backgroundColor = 'transparent';
          cursorOutline.style.borderColor = 'var(--primary-color)';
      });
  });
});

// Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-link');
  
  hamburger.addEventListener('click', () => {
      // Toggle nav
      navLinks.classList.toggle('active');
      
      // Hamburger animation
      hamburger.classList.toggle('active');
      
      if (hamburger.classList.contains('active')) {
          hamburger.querySelector('.line1').style.transform = 'rotate(-45deg) translate(-5px, 6px)';
          hamburger.querySelector('.line2').style.opacity = '0';
          hamburger.querySelector('.line3').style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
          hamburger.querySelector('.line1').style.transform = 'none';
          hamburger.querySelector('.line2').style.opacity = '1';
          hamburger.querySelector('.line3').style.transform = 'none';
      }
  });
  
  // Close mobile menu when link is clicked
  navLinksItems.forEach(item => {
      item.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              
              hamburger.classList.remove('active');
              hamburger.querySelector('.line1').style.transform = 'none';
              hamburger.querySelector('.line2').style.opacity = '1';
              hamburger.querySelector('.line3').style.transform = 'none';
          }
      });
  });
});

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  const animateOnScroll = (elements, animationClass) => {
      const scrollObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add(animationClass);
                  scrollObserver.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });
      
      elements.forEach(el => {
          scrollObserver.observe(el);
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      });
  };
  
  animateOnScroll(document.querySelectorAll('.section-header'), 'fade-in');
  animateOnScroll(document.querySelectorAll('.project-card'), 'fade-in');
  animateOnScroll(document.querySelectorAll('.skill-card'), 'fade-in');
  animateOnScroll(document.querySelectorAll('.timeline-item'), 'fade-in');
  animateOnScroll(document.querySelectorAll('.achievement-item'), 'fade-in');
  animateOnScroll(document.querySelectorAll('.profile-image'), 'fade-in');
  
  // Add fade-in class styles
  const style = document.createElement('style');
  style.textContent = `
      .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
      }
  `;
  document.head.appendChild(style);
  
  // Create staggered animation for skill dots
  const skillDots = document.querySelectorAll('.skill-dot');
  skillDots.forEach((dot, index) => {
      if (dot.classList.contains('active')) {
          dot.style.transitionDelay = `${index * 0.1}s`;
          setTimeout(() => {
              dot.style.transform = 'scale(1.2)';
              setTimeout(() => {
                  dot.style.transform = 'scale(1)';
              }, 300);
          }, 1000 + (index * 100));
      }
  });
});

// Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Get form data
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          // Simple validation
          if (!name || !email || !message) {
              alert('すべてのフィールドを入力してください。');
              return;
          }
          
          // In a real implementation, you would send this data to a server
          // For this example, just show a success message
          alert('メッセージを送信しました。ありがとうございます！');
          contactForm.reset();
      });
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
              
              window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});

// Add active class to current section in navigation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (pageYOffset >= sectionTop - 150) {
              current = section.getAttribute('id');
          }
      });
      
      navLinks.forEach(link => {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });
});

// Add active class styles
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
      .nav-link.active {
          color: var(--primary-color);
      }
      
      .nav-link.active::after {
          width: 100%;
      }
  `;
  document.head.appendChild(style);
});

// Typing animation for subtitle
document.addEventListener('DOMContentLoaded', () => {
  const subtitle = document.querySelector('.subtitle');
  const originalText = subtitle.textContent;
  subtitle.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
      if (i < originalText.length) {
          subtitle.textContent += originalText.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
      }
  };
  
  setTimeout(typeWriter, 1000);
});

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
          "particles": {
              "number": {
                  "value": 80,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#3d5a80"
              },
              "shape": {
                  "type": "circle",
                  "stroke": {
                      "width": 0,
                      "color": "#000000"
                  },
                  "polygon": {
                      "nb_sides": 5
                  }
              },
              "opacity": {
                  "value": 0.3,
                  "random": true,
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                      "enable": true,
                      "speed": 2,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#3d5a80",
                  "opacity": 0.2,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "grab"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 140,
                      "line_linked": {
                          "opacity": 0.4
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200,
                      "duration": 0.4
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true
      });
  }
});