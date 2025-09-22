import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">ALL SYSTEMSCO</h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 mb-4 leading-relaxed">
              Spécialiste en télécommunications, radio, antennes, énergie solaire et électrique à Brazzaville, Congo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/qui-sommes-nous"
                  className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-expertises"
                  className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nos expertises
                </Link>
              </li>
              <li>
                <Link
                  href="/pourquoi-nous-choisir"
                  className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pourquoi nous choisir ?
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary-foreground/80">+33 7 53 70 12 19</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary-foreground/80 break-all">
                  contact@allsystemsco.cg
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/60">© 2025 ALL SYSTEMSCO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
