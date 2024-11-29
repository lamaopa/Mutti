



document.addEventListener('DOMContentLoaded', function () {
    // Adjust line breaks for responsiveness
    // function adjustLineBreaks() {
    //     const responsiveBrs = document.querySelectorAll('.responsive-br');
    //     // const responsiveBrs2 = document.querySelectorAll('.responsive-br2');
    //     // const responsiveBrs3 = document.querySelectorAll('.responsive-br3');
    //     // const responsiveBrs4 = document.querySelectorAll('.responsive-br4');


    //     const screenWidth = window.innerWidth;

   
    //     responsiveBrs.forEach(br => {
    //         if (screenWidth <= 312 && screenWidth >= 576) { 
    //             br.classList.add('hidden-br');
    //         } else {
    //             br.classList.remove('hidden-br');
    //         }
    //     });
        
       

        
    // }

    // adjustLineBreaks();
    // window.addEventListener('resize', adjustLineBreaks);



    

    // Text appearance landing page
//---- MUTTI EFFECT




const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const bg = char.dataset.bgColor;
  const fg = char.dataset.fgColor;

  const text = new SplitType(char, { types: "words" }); // Découpe en mots au lieu de caractères

  gsap.fromTo(
    text.words,
    {
      color: bg
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play play reverse reverse"
      }
    }
  );
});
});




// grain
// document.addEventListener("DOMContentLoaded", function() {
//     let options = {
//         animate: true,
//         patternWidth: 100,
//         patternHeight: 100,
//         grainOpacity: 0.07,
//         grainDensity: 1,
//         grainWidth: 1,
//         grainHeight: 3
//     };
//     grained('#wrapper', options);
// });
