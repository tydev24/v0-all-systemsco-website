import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Radio, Zap, Antenna, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="absolute inset-0 bg-[url('/telecommunications-tower-and-solar-panels-high-tec.jpg')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 text-balance leading-tight tracking-tight">
            Solutions fiables en télécommunications et énergie
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 lg:mb-10 text-primary-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed">
            Installation, conseil et équipements radio, télécoms, solaires et électriques à Brazzaville.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>

      {/* Qui sommes-nous Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance leading-tight">
                Qui sommes-nous ?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed text-pretty">
                ALL SYSTEMSCO est spécialisée dans les solutions de communication et d'énergie. L'entreprise accompagne
                ses clients dans le choix, l'installation et la maintenance d'équipements professionnels importés de
                fournisseurs de confiance (Chine, France, USA).
              </p>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed text-pretty">
                Fiabilité, expertise et proximité sont au cœur de notre mission.
              </p>
              <Button asChild className="w-full sm:w-auto mt-6">
                <Link href="/qui-sommes-nous">En savoir plus</Link>
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/professional-telecommunications-team-installing-eq.jpg"
                  alt="Équipe ALL SYSTEMSCO"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos expertises Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6 text-balance">
              Nos expertises
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Nous offrons une gamme complète de solutions en communication et énergie adaptées aux besoins locaux.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <Radio className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 sm:mb-3 text-balance">
                  Radio & Télécom
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  Installation et conseil pour les systèmes de communication modernes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 sm:mb-3 text-balance">
                  Panneaux solaires & Électricité
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  Solutions énergétiques fiables et durables.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 xl:col-span-1">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <Antenna className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 sm:mb-3 text-balance">
                  Antennes & Réseaux
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  Vente et installation d'antennes et de matériel de télécommunication.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/nos-expertises">Obtenir un devis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/professional-installation-telecommunications-equip.jpg"
                alt="Installation professionnelle"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8 text-balance leading-tight">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                Grâce à notre expertise et nos partenariats avec des fournisseurs internationaux, nous proposons à
                Brazzaville des solutions techniques modernes et adaptées aux besoins des entreprises et particuliers.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 lg:mb-10">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg xl:text-xl">
                      Expertise reconnue
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">
                      Plus de 10 ans d'expérience dans le secteur
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg xl:text-xl">
                      Équipements de qualité
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">
                      Partenariats avec des fournisseurs internationaux
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg xl:text-xl">
                      Service local
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">
                      Proximité et réactivité à Brazzaville
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full sm:w-auto">
                <Link href="/pourquoi-nous-choisir">Découvrir nos avantages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
