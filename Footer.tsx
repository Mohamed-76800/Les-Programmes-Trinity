export function Footer() {
  return (
    <footer className="bg-[#3c36a4] text-white py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 max-w-4xl">
          <div>
            <p className="text-[rgba(255,255,255,0.5)] uppercase mb-2 text-xs sm:text-sm">
              Les Programmes Trinity
            </p>
            <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Développez vos compétences, transformez votre avenir.
            </p>
          </div>

          <div>
            <p className="text-[rgba(255,255,255,0.5)] uppercase mb-2 text-xs sm:text-sm">
              Contact
            </p>
            <p className="text-white mb-2 text-sm sm:text-base">Téléphone: 03 65 67 08 59</p>
            <p className="text-white mb-4 text-sm sm:text-base leading-relaxed">
              Adresse : 4 Avenue de la Libération 60160 Montataire
            </p>
          </div>

          <div className="text-[#1e73be] text-xs sm:text-sm flex flex-wrap gap-2 sm:gap-3">
            <span className="hover:underline cursor-pointer">Mentions légales</span>
            <span className="text-white/30">•</span>
            <span className="hover:underline cursor-pointer">Politique de confidentialité</span>
            <span className="text-white/30">•</span>
            <span className="hover:underline cursor-pointer">CGU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}