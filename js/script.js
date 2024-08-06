// $('.scroll-testimonial').slick({
//     dots: true,
//     infinite: true,
//     speed: 100,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });


// document.addEventListener('DOMContentLoaded', function() {
//   function adjustLayout() {
//       const container = document.querySelector('.bfheader .container');

//       if (!container) {
//           console.error('Container element not found.');
//           return;
//       }

//       const width = window.innerWidth;

//       if (width < 768) {
//           container.style.flexDirection = 'column';
//           container.style.textAlign = 'center';
//       } else {
//           container.style.flexDirection = 'row';
//           container.style.textAlign = 'left';
//       }
//   }

  // Initial adjustment
//   adjustLayout();

//   // Adjust layout on window resize
//   window.addEventListener('resize', adjustLayout);
// });


//   // Initial adjustment
//   adjustLayout();

//   // Adjust layout on window resize
//   window.addEventListener('resize', adjustLayout);
// });


  
$('scroll-testimonial').slick({
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
  });