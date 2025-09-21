import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Radio, Zap, Antenna, Settings, Shield, Headphones } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/solar-energy-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nos expertises</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Découvrez notre gamme complète de solutions en télécommunications et énergie, adaptées aux besoins des
            entreprises et particuliers.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Solutions complètes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous offrons une gamme complète de solutions en communication et énergie adaptées aux besoins locaux, avec
              des équipements de qualité internationale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Radio & Télécom */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Radio className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Radio & Télécom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Installation et conseil pour les systèmes de communication modernes, adaptés aux besoins
                  professionnels et particuliers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Systèmes radio professionnels</li>
                  <li>• Équipements de télécommunication</li>
                  <li>• Solutions de communication d'entreprise</li>
                  <li>• Maintenance et support technique</li>
                </ul>
              </CardContent>
            </Card>

            {/* Panneaux solaires & Électricité */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Panneaux solaires & Électricité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Solutions énergétiques fiables et durables pour réduire vos coûts et votre impact environnemental.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Installation de panneaux solaires</li>
                  <li>• Systèmes de stockage d'énergie</li>
                  <li>• Installations électriques</li>
                  <li>• Maintenance préventive</li>
                </ul>
              </CardContent>
            </Card>

            {/* Antennes & Réseaux */}
            <Card className="h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Antenna className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Antennes & Réseaux</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Vente et installation d'antennes et de matériel de télécommunication pour optimiser vos connexions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Antennes de télécommunication</li>
                  <li>• Équipements réseau</li>
                  <li>• Optimisation de signal</li>
                  <li>• Installation et configuration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services complémentaires</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Au-delà de nos expertises principales, nous proposons des services complémentaires pour vous accompagner
              dans tous vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Installation & Configuration</h3>
                <p className="text-muted-foreground">
                  Installation professionnelle et configuration optimale de tous vos équipements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Maintenance & Support</h3>
                <p className="text-muted-foreground">
                  Service après-vente réactif et maintenance préventive pour assurer la durabilité.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Conseil & Expertise</h3>
                <p className="text-muted-foreground">
                  Accompagnement personnalisé pour choisir les solutions les plus adaptées.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé pour votre projet de
            télécommunications ou d'énergie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Obtenir un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pourquoi-nous-choisir">Pourquoi nous choisir ?</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
