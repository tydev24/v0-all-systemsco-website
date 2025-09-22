import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Award, Clock, Shield, Star } from "lucide-react"

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/telecommunications-tower-and-solar-panels-high-tec.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Pourquoi nous choisir ?</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Découvrez les avantages qui font d'ALL SYSTEMSCO votre partenaire de confiance pour tous vos projets
            technologiques.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Notre valeur ajoutée</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Grâce à notre expertise et nos partenariats avec des fournisseurs internationaux, nous proposons à
                Brazzaville des solutions techniques modernes et adaptées aux besoins des entreprises et particuliers.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expertise reconnue</h4>
                    <p className="text-muted-foreground">
                      Plus de 10 ans d'expérience dans le secteur des télécommunications et de l'énergie, avec une
                      équipe de techniciens qualifiés.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Équipements de qualité</h4>
                    <p className="text-muted-foreground">
                      Partenariats avec des fournisseurs internationaux reconnus (Chine, France, USA) pour garantir la
                      qualité et la fiabilité de nos équipements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Service local</h4>
                    <p className="text-muted-foreground">
                      Proximité et réactivité à Brazzaville avec une équipe locale disponible pour vos projets et votre
                      maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/african-technician-antenna-installation.jpg"
                alt="Installation professionnelle ALL SYSTEMSCO"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nos avantages concurrentiels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Qualité certifiée</h3>
                  <p className="text-muted-foreground">
                    Équipements certifiés et conformes aux standards internationaux.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Réactivité</h3>
                  <p className="text-muted-foreground">
                    Intervention rapide et respect des délais pour tous vos projets.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Garantie</h3>
                  <p className="text-muted-foreground">
                    Garantie sur tous nos équipements et installations avec SAV dédié.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Satisfaction client au cœur de nos préoccupations depuis notre création.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-muted rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Notre processus</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">Analyse</h4>
                <p className="text-muted-foreground text-sm">
                  Étude de vos besoins et évaluation technique de votre projet.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">Proposition</h4>
                <p className="text-muted-foreground text-sm">
                  Devis détaillé avec solutions adaptées et planning d'intervention.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Installation</h4>
                <p className="text-muted-foreground text-sm">
                  Mise en œuvre professionnelle avec respect des normes de sécurité.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-foreground mb-2">Suivi</h4>
                <p className="text-muted-foreground text-sm">Formation, maintenance et support technique continu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Convaincu par notre approche ?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Rejoignez nos nombreux clients satisfaits et bénéficiez de notre expertise pour réussir vos projets
            technologiques.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
