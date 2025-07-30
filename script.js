
document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION ---
    const textToType = "Hi! I'm Purushothaman, Computational Biologist and a Digital Artist with a strong passion for Technology and Programming";
    const typingSpeed = 50; // Milliseconds between each character
    const delayBeforeLinksAppear = 500; // Milliseconds after typing finishes

    // --- ELEMENT REFERENCES ---
    const introTextElement = document.getElementById('intro-text');
    const pfpContainer = document.getElementById('pfp-container');
    const linksContainer = document.getElementById('links-container');

    // --- STATE ---
    let charIndex = 0;

    // --- FUNCTIONS ---
    
    /**
     * The main function to create the typewriter effect.
     * It types one character at a time until the full text is displayed.
     */
    function typeWriter() {
        if (charIndex < textToType.length) {
            introTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Typing is complete
            introTextElement.classList.remove('typing'); // Remove the blinking cursor
            revealContent();
        }
    }

    /**
     * Reveals the profile picture and links with a fade-in effect.
     * This is called after the typewriter animation is finished.
     */
    function revealContent() {
        setTimeout(() => {
            pfpContainer.classList.add('visible');
            linksContainer.classList.add('visible');
        }, delayBeforeLinksAppear);
    }

    // --- INITIALIZATION ---
    // Start the typewriter animation when the page loads.
    typeWriter();

    // --- IMPORTANT: Update these links ---
    // Replace '#' with the actual URLs to your files/profiles.
    document.getElementById('resume-link').href = 'YOUR_RESUME_LINK.pdf';
    document.getElementById('insta-link').href = 'https://www.instagram.com/b1ry4n1_31';
});
