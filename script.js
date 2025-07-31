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
    let isTyping = true;
    let typeTimeout;

    // --- FUNCTIONS ---
    
    /**
     * The main function to create the typewriter effect.
     * It types one character at a time until the full text is displayed.
     */
    function typeWriter() {
        if (isTyping && charIndex < textToType.length) {
            introTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            typeTimeout = setTimeout(typeWriter, typingSpeed);
        } else if (isTyping) {
            // Typing finished naturally
            finishAnimation(false); // Finish with a delay
        }
    }

    /**
     * Finalizes the animation, reveals content, and enables links.
     * @param {boolean} instant - If true, reveals content immediately. Otherwise, uses a delay.
     */
    function finishAnimation(instant = false) {
        if (!isTyping) return; // Prevent multiple calls

        isTyping = false;
        clearTimeout(typeTimeout);
        introTextElement.textContent = textToType;
        introTextElement.classList.remove('typing');

        const revealDelay = instant ? 0 : delayBeforeLinksAppear;

        setTimeout(() => {
            pfpContainer.classList.add('visible');
            linksContainer.classList.add('visible');
            linksContainer.classList.remove('pointer-events-none'); // Make buttons clickable
        }, revealDelay);
    }

    // --- EVENT LISTENERS ---
    
    // Add a listener to skip the animation on double-click
    document.addEventListener('dblclick', () => finishAnimation(true));

    // --- INITIALIZATION ---
    
    // Start the typewriter animation when the page loads.
    typeWriter();

    // --- IMPORTANT: Update these links ---
    // Replace '#' with the actual URLs to your files/profiles.
    const fileId = '1xItzO-gq-m_GqWONEAb9sLbeFbbtOvGA';
    document.getElementById('resume-link').href =`https://drive.google.com/file/d/${fileId}/preview`;
    document.getElementById('insta-link').href = 'https://www.instagram.com/b1ry4n1_31';
});