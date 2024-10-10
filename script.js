// "Ko'proq o'rganing" tugmasi ustiga bosilganda o'quvchini kompyuter turlari bo'limiga o'tkazamiz
document.getElementById("learn-more").addEventListener("click", function () {
  window.scrollTo({
    top: document.getElementById("types").offsetTop,
    behavior: "smooth",
  });
});

// Aloqa formasi yuborilganida
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Foydalanuvchi yuborgan ma'lumotlar
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Oddiygina javobni ko'rsatamiz
    document.getElementById(
      "response-message"
    ).textContent = `Rahmat, ${name}! Sizning xabaringiz qabul qilindi.`;

    // Formani tozalash
    document.getElementById("contact-form").reset();
  });
