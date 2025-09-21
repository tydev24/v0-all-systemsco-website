import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, Globe, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/telecommunications-background-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Qui sommes-nous ?</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Découvrez l'histoire et les valeurs d'ALL SYSTEMSCO, votre partenaire de confiance en télécommunications et
            énergie à Brazzaville.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Notre histoire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ALL SYSTEMSCO est née de la volonté de proposer à Brazzaville et au Congo des solutions technologiques
                modernes et fiables dans les domaines des télécommunications et de l'énergie.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Forte de son expertise technique et de ses partenariats internationaux, l'entreprise s'est rapidement
                imposée comme un acteur incontournable du secteur, accompagnant aussi bien les particuliers que les
                entreprises dans leurs projets technologiques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre équipe de professionnels qualifiés met son savoir-faire au service de solutions sur mesure,
                adaptées aux spécificités du marché congolais.
              </p>
            </div>
            <div className="relative">
              <img
                src="/professional-telecommunications-team-installing-eq.jpg"
                alt="Équipe ALL SYSTEMSCO au travail"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Nous visons l'excellence dans chaque projet, de la conception à la réalisation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proximité</h3>
                  <p className="text-muted-foreground">
                    Un service de proximité avec une équipe locale disponible et réactive.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Nous intégrons les dernières technologies pour des solutions modernes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fiabilité</h3>
                  <p className="text-muted-foreground">
                    Des équipements de qualité et un service après-vente irréprochable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-muted rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Notre mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              Accompagner nos clients dans leur transformation technologique en proposant des solutions de
              télécommunications et d'énergie adaptées à leurs besoins, avec un service de qualité et un support
              technique de proximité.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Parlons de votre projet</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
