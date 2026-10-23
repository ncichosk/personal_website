class GlobalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="banner">
                <nav>
                    <div class="sections">
                        <a href="#"><b>About Me</b></a>
                        <a href="#"><b>Project</b></a>
                        <a href="#"><b>Contact</b></a>
                    </div>
                    <div class="links">
                        <a href="https://www.linkedin.com/in/nick-cichoski-620717239/"><img src="../assets/Images/linkedin_logo.png" alt="Linkedin" width="30" height=auto></a>
                        <a href="https://www.instagram.com/nickcichoski/"><img src="../assets/Images/instagram_logo.png" alt="Instagram" width="30" height=auto></a>
                    </div>
                </nav>
            </div>
        </header>
        `;
    }
}

customElements.define('global-header', GlobalHeader);