"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    if (response.ok) {
      setFormStatus("success");
      // Přesměrování zpět na původní stránku po odeslání
      window.location.href = window.location.href;
    } else {
      setFormStatus("error");
    }
  };

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktujte nás</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Máte dotaz nebo zájem o spolupráci? Neváhejte nás kontaktovat. 
                Rádi vám pomůžeme s výběrem služeb nebo zodpovíme vaše otázky.
              </p>
              
              <div className="space-y-6">
                <Card className="p-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-muted-foreground">+420 704 749 531</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-muted-foreground">info@washngo.cz</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Centrála</p>
                      <p className="text-muted-foreground">
                        Vojtěšská 211/6, Nové Město (Praha 1), 110 00 Praha
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <Card className="p-6">
                {/* Formulář s napojením na Formspree */}
                <form 
                  action="https://formspree.io/f/mdkazrkq" 
                  method="POST" 
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno a příjmení</Label>
                    <Input id="name" name="name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva</Label>
                    <Textarea id="message" name="message" required />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="gdpr" name="gdpr" required />
                    <Label htmlFor="gdpr" className="text-sm leading-tight">
                      Souhlasím se zpracováním osobních údajů v souladu s{" "}
                      <Link href="/obchodni-podminky" className="text-primary hover:underline">
                        obchodními podmínkami a GDPR
                      </Link>
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Odeslat zprávu
                  </Button>
                </form>

                {formStatus === "success" && (
                  <p className="text-green-600">Formulář byl úspěšně odeslán!</p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-600">Došlo k chybě při odesílání formuláře.</p>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
