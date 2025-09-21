"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Prénom *</Label>
          <Input id="firstName" name="firstName" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="lastName">Nom *</Label>
          <Input id="lastName" name="lastName" required className="mt-1" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" name="email" type="email" required className="mt-1" />
      </div>

      <div>
        <Label htmlFor="phone">Téléphone</Label>
        <Input id="phone" name="phone" type="tel" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="company">Entreprise</Label>
        <Input id="company" name="company" className="mt-1" />
      </div>

      <div>
        <Label htmlFor="service">Service souhaité *</Label>
        <Select name="service" required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Sélectionnez un service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="radio-telecom">Radio & Télécom</SelectItem>
            <SelectItem value="panneaux-solaires">Panneaux solaires & Électricité</SelectItem>
            <SelectItem value="antennes-reseaux">Antennes & Réseaux</SelectItem>
            <SelectItem value="maintenance">Maintenance & Support</SelectItem>
            <SelectItem value="conseil">Conseil & Expertise</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="budget">Budget estimé</Label>
        <Select name="budget">
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Sélectionnez une fourchette" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="moins-1000">Moins de 1 000 €</SelectItem>
            <SelectItem value="1000-5000">1 000 € - 5 000 €</SelectItem>
            <SelectItem value="5000-10000">5 000 € - 10 000 €</SelectItem>
            <SelectItem value="10000-25000">10 000 € - 25 000 €</SelectItem>
            <SelectItem value="plus-25000">Plus de 25 000 €</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Décrivez votre projet, vos besoins spécifiques, vos contraintes..."
          required
          className="mt-1 min-h-[120px]"
        />
      </div>

      <div>
        <Label htmlFor="timeline">Délai souhaité</Label>
        <Select name="timeline">
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Quand souhaitez-vous démarrer ?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="urgent">Urgent (moins d'1 semaine)</SelectItem>
            <SelectItem value="1-2-semaines">1-2 semaines</SelectItem>
            <SelectItem value="1-mois">Dans le mois</SelectItem>
            <SelectItem value="2-3-mois">2-3 mois</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        * Champs obligatoires. Vos données sont traitées de manière confidentielle.
      </p>
    </form>
  )
}
