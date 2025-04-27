document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
    // Initialize water ripple effect on sections with water-bg class
    $(document).ready(function() {
      $('.water-bg').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
      });
      
      // Create some random ripples on water background sections
      setInterval(function() {
        var $waterBg = $('.water-bg');
        var x = Math.random() * $waterBg.width();
        var y = Math.random() * $waterBg.height();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;
        
        $waterBg.ripples('drop', x, y, dropRadius, strength);
      }, 3000);
    });
  });