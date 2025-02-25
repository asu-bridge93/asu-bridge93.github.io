/**
 * Smoothly scrolls to a target section by ID.
 * @param {string} sectionId - The ID of the target section.
 */
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 60, // offset for the fixed header
      behavior: 'smooth',
    });
  }
}

/**
 * Handle contact form submissions (demo).
 * @param {HTMLFormElement} form - The contact form element.
 */
function handleSubmit(form) {
  // Prevent the default form submission
  event.preventDefault();

  // In a real setup, you would send data to the server or an API here.
  alert(`
    Thank you for reaching out!
    Name: ${form.name.value}
    Email: ${form.email.value}
    Message: ${form.message.value}
  `);

  // Reset the form
  form.reset();
  return false;
}
