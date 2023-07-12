
const questionButtons  = document.querySelectorAll(`.btn-quest`);
const answerParagraphs = document.querySelectorAll(`.answer-paragraph`);
var arrowImages = document.querySelectorAll('.btn-arrow img');
    
// Cevapları başlangıçta gizle
answerParagraphs.forEach(function(paragraph) {
    paragraph.classList.add('hidden');
  });

// Her bir soru butonuna click event listener ekle
questionButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      // İlgili sorunun cevabını göster/gizle
      answerParagraphs[index].classList.toggle('hidden');
    });
  });

// Her bir icon için click event listener ekle 
arrowImages.forEach(function(button, index) {
    button.addEventListener(`click`, function(){
        // ilgili sorunun cevabını göster/gizle
        answerParagraphs[index].classList.toggle(`hidden`);
    })
})