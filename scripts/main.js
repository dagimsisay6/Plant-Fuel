

//faq
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
    const answer = faq.querySelector('.answer');
    if (faq.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});

const toggle = document.getElementById('modeSwitch');
    const label = document.getElementById('modeLabel');
    const body = document.body;

    toggle.addEventListener('change', () => {
      body.classList.toggle('dark');
      label.textContent = body.classList.contains('dark') ? 'Dark Mode' : 'Light Mode';
    });
// footer
    function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    alert(`Thank you for subscribing with ${email}!`);
  }
}