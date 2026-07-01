class AppNavigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="w-full fixed z-90 flex items-center justify-center border-b border-white bg-black h-[87px]">
        <div class="w-full max-w-[1440px] flex items-center justify-between px-12">
          <div class="flex items-center gap-1.5">
            <div class="bg-[#b71c1c] rounded px-2 py-0.5">
              <span class="font-syne font-bold text-xl text-black">C</span>
            </div>
            <div class="flex flex-col items-start justify-start">
              <div class="bg-[#7f1d1d] rounded px-2 py-0.5">
                <span class="font-syne font-bold text-xl text-white">L</span>
              </div>
            </div>
            <div class="pb-1">
              <span class="font-syne text-sm text-[#bdbdbd]">CHALINA</span>
            </div>
          </div>

          <div class="flex items-center gap-8 hidden md:flex">
            <a href="#" class="font-sans font-semibold text-xs text-[#f8f8f8] border-b border-[#b71c1c] pb-1">Beranda</a>
            <a href="#" class="font-sans font-semibold text-xs text-[#bdbdbd] pb-1 hover:text-white transition-colors">Tentang</a>
            <a href="#" class="font-sans font-semibold text-xs text-[#bdbdbd] pb-1 hover:text-white transition-colors">Visi & Misi</a>
            <a href="#" class="font-sans font-semibold text-xs text-[#bdbdbd] pb-1 hover:text-white transition-colors">Layanan</a>
            <a href="#" class="font-sans font-semibold text-xs text-[#bdbdbd] pb-1 hover:text-white transition-colors">Galeri</a>
            <a href="#" class="font-sans font-semibold text-xs text-[#bdbdbd] pb-1 hover:text-white transition-colors">Pengalaman</a>
            <a href="#" class="font-sans font-semibold text-xs text-[#bdbdbd] pb-1 hover:text-white transition-colors">Keunggulan</a>
            <a href="#" class="font-sans font-semibold text-xs text-[#bdbdbd] pb-1 hover:text-white transition-colors">Kontak</a>
          </div>

          <div>
            <a href="#" class="flex items-center justify-center border border-[#b71c1c] p-[1px] h-[41px] w-[147px] hover:bg-[#b71c1c] transition-colors group">
              <span class="font-sans font-bold text-xs text-[#f8f8f8]">Hubungi Kami</span>
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('app-navigation', AppNavigation);
