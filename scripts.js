document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = document.querySelector('.navbar').offsetHeight; // Altura da navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }

    console.log(answer);
  });
});
