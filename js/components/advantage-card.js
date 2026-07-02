class AdvantageCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';
    const icon = this.getAttribute('icon') || 'fa-solid fa-star';

    this.innerHTML = `
      <div class="border border-white/10 p-6 md:p-8 bg-[#0d0d0d] hover:border-amber-500/50 transition-colors group">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 border border-amber-500/30 text-amber-500 bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
            <i class="${icon} text-lg"></i>
          </div>
          <h3 class="text-lg font-bold font-heading text-white">${title}</h3>
        </div>
        <p class="text-gray-400 text-sm font-light font-sans leading-relaxed">${description}</p>
      </div>
    `;
  }
}

if (!customElements.get('advantage-card')) {
  customElements.define('advantage-card', AdvantageCard);
}