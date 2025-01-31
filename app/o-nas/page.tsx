"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Wrench, Leaf, Target, Users, Rocket, TrendingUp, HeartHandshake } from "lucide-react"
import Link from "next/link"

const offerings = [
  {
    title: "Komplexní realizace projektů",
    description: "Zajišťujeme vše od návrhu a plánování, přes výstavbu až po uvedení do provozu. Díky našim zkušenostem zvládneme každý krok rychle a precizně.",
    icon: Wrench
  },
  {
    title: "Moderní technologie",
    description: "Naše myčky jsou vybaveny špičkovým zařízením využívajícím ekologické postupy, jako je úspora vody a energetická efektivita.",
    icon: Leaf
  },
  {
    title: "Individuální přístup",
    description: "Každý projekt přizpůsobujeme konkrétním potřebám a požadavkům investora i lokality.",
    icon: Target
  }
]

const benefits = [
  {
    title: "Rychlá návratnost",
    description: "Naše projekty jsou navrženy tak, aby generovaly příjmy v co nejkratším čase.",
    icon: Rocket
  },
  {
    title: "Rostoucí poptávka",
    description: "Bezkontaktní automyčky jsou trendem, který neustále získává na oblibě díky jejich pohodlnosti a šetrnosti k vozidlům.",
    icon: TrendingUp
  },
  {
    title: "Dlouhodobá spolupráce",
    description: "Poskytujeme podporu i po realizaci, a to včetně údržby a optimalizace provozu.",
    icon: HeartHandshake
  }
]

export default function AboutPage() {
  return (
    <>
      <section className="relative py-16 md:py-24">
        <div className="container">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">O nás</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jsme společnost specializující se na investice a výstavbu moderních bezkontaktních automyček. 
              Naším cílem je přinášet efektivní a zisková řešení v oblasti automobilové péče, která splňují 
              vysoké standardy kvality, udržitelnosti a uživatelského komfortu.
            </p>
          </div>

          {/* What We Offer Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Co nabízíme?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offerings.map((offering) => (
                <Card key={offering.title} className="p-6 hover:shadow-lg transition-all">
                  <offering.icon className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
                  <p className="text-muted-foreground">{offering.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-24 relative rounded-lg overflow-hidden">
            <div 
              className="aspect-[21/9] rounded-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1605164599901-fb986c30b4ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 dark:from-black/50 dark:to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-xl text-slate-800 dark:text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Moderní řešení pro vaše podnikání
                  </h2>
                  <p className="text-lg mb-6">
                    Využijte příležitost investovat do rostoucího odvětví 
                    s ověřeným byznys modelem a naší plnou podporou.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all hover:scale-105"
                    asChild
                  >
                    <Link href="/investice">
                      Zjistit více o investicích <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Why Invest With Us Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Proč investovat s námi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-6 hover:shadow-lg transition-all">
                  <benefit.icon className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Společně vytvoříme ziskové a udržitelné řešení
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zaujme na trhu a přinese spokojenost nejen vám, ale i vašim zákazníkům.
            </p>
            <Button 
              size="lg"
              className="transform transition-all hover:scale-105"
              asChild
            >
              <Link href="/kontakt">
                Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}