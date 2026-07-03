class ServiceCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';
    const link = this.getAttribute('link') || '#';
    const src = this.getAttribute('src');
    const imgHtml = src ? `<img src="${src}" alt="${title}" class="w-full h-full object-cover" loading="lazy">` : '';

    this.innerHTML = /*html*/`
      <div class="bg-neutral-900 border border-white/10 flex flex-col h-[381px] group m-4">
          <div class="h-[220px] w-full relative">${imgHtml}</div>
          <div class="p-6 flex-1 flex flex-col justify-between bg-neutral-900">
              <div>
                  <h3 class="text-base font-bold mb-2 capitalize">${title}</h3>
                  <p class="text-neutral-400 text-xs font-sans font-light">
                      ${description}
                  </p>
              </div>
              <a href="${link}" class="text-right text-yellow-500 font-bold font-mono group-hover:translate-x-2 transition-transform inline-block">
                  &rarr;
              </a>
          </div>
      </div>
    `;
  }
}
customElements.define('service-card', ServiceCard);
