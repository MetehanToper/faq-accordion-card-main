
const questionButtons  = document.querySelectorAll(`.btn-quest`);
const answerParagraphs = document.querySelectorAll(`.answer-paragraph`);
let arrowImages = document.querySelectorAll('.btn-arrow img');
    
// Cevapları başlangıçta gizle
answerParagraphs.forEach(function(paragraph) {
    paragraph.classList.add('hidden');
  });

// Her bir soru butonuna click event listener ekle
questionButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // tüm butonları kapat 
      answerParagraphs.forEach(function(paragraph, i) {
        if (i !== index) {
          paragraph.classList.add('hidden');
        }

      // İlgili sorunun cevabını göster/gizle
      answerParagraphs[index].classList.toggle('hidden');
    });
  })
  });

// Her bir icon için click event listener ekle 
arrowImages.forEach(function(button, index) {
    button.addEventListener(`click`, function(){
    // tüm butonları kapat 
      answerParagraphs.forEach(function(paragraph, i){
        if (i !== index) {
          paragraph.classList.add(`hidden`);
        }
      })
        // ilgili sorunun cevabını göster/gizle
        answerParagraphs[index].classList.toggle(`hidden`);
    })
})