import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/professional-telecommunications-team-installing-eq.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contactez-nous</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Prêt à démarrer votre projet ? Notre équipe est là pour vous accompagner et répondre à toutes vos questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Parlons de votre projet</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Que vous soyez une entreprise ou un particulier, nous sommes là pour vous accompagner dans vos projets
                de télécommunications et d'énergie. Contactez-nous pour un devis personnalisé.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">+33 7 53 70 12 19</p>
                    <p className="text-sm text-muted-foreground">Disponible du lundi au vendredi</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">severinmanarey@yahoo.fr</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Localisation</h4>
                    <p className="text-muted-foreground">Brazzaville, Congo</p>
                    <p className="text-sm text-muted-foreground">Intervention sur toute la région</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                    <p className="text-muted-foreground">Lundi - Vendredi : 8h - 18h</p>
                    <p className="text-muted-foreground">Samedi : 8h - 12h</p>
                    <p className="text-sm text-muted-foreground">Urgences : 24h/24</p>
                  </div>
                </div>
              </div>

              {/* Services Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-foreground mb-1">Devis gratuit</h4>
                    <p className="text-sm text-muted-foreground">Estimation personnalisée</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-foreground mb-1">Conseil expert</h4>
                    <p className="text-sm text-muted-foreground">Accompagnement technique</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-foreground mb-1">SAV réactif</h4>
                    <p className="text-sm text-muted-foreground">Support après-vente</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Demande de devis</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
