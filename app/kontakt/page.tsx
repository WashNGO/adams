"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
                        Hlavní 123, 110 00 Praha 1
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno a příjmení</Label>
                    <Input id="name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Zpráva</Label>
                    <Textarea id="message" required />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="gdpr" required />
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
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
