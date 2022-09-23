function createContact(contactEl) {

    contactEl.innerHTML = `
    
    <h2 class="contact__title">¡Say hi!</h2>

    <form class="contact__form">
        <label for="name" class="contact__form-label">Name</label>
        <input type="text" name="name" id="name" class="contact__inputs">
        <label for="email" class="contact__form-label">Email</label>
        <input type="email" name="email" id="email" class="contact__inputs">
        <label for="message" class="contact__form-label">Message</label>
        <textarea name="message" id="message" resize="none" class="contact__inputs contact__inputs--textarea"></textarea>

        <input type="submit" value="Send" class="contact__form-button">
    </form>
    `;
}