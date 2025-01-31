"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Building2, Users, Banknote, TrendingUp, Leaf, Cog, Timer, PiggyBank } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    title: "Rychlá návratnost investice",
    description: "Díky vysoké poptávce a nízkým nákladům na provoz lze dosáhnout návratnosti už během několika let.",
    icon: PiggyBank
  },
  {
    title: "Nízké provozní náklady",
    description: "Automyčky fungují automatizovaně, což snižuje potřebu personálu a eliminuje velké provozní výdaje.",
    icon: Cog
  },
  {
    title: "Trvalý růst trhu",
    description: "Počet vozidel na silnicích neustále roste, což zajišťuje dlouhodobý a stabilní příjem.",
    icon: TrendingUp
  },
  {
    title: "Ekologické řešení",
    description: "Moderní technologie umožňují šetřit vodou a používat ekologicky šetrné prostředky, což oslovuje stále více zákazníků.",
    icon: Leaf
  }
]

const features = [
  {
    title: "Ověřený byznys model",
    description: "Připojte se k síti úspěšných automyček s prokázanou návratností investice.",
    icon: Building2
  },
  {
    title: "Kompletní podpora",
    description: "Poskytujeme plnou podporu od výběru lokality až po marketing a provoz.",
    icon: Users
  },
  {
    title: "Rychlé spuštění",
    description: "Pomůžeme vám s realizací projektu od A do Z, včetně všech povolení a technického zajištění.",
    icon: Timer
  }
]

export default function InvestmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investiční příležitost
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Bezkontaktní automyčky jsou moderním a vysoce výnosným podnikatelským záměrem, 
              který přitahuje rostoucí počet investorů. Díky jednoduché obsluze, nízkým provozním 
              nákladům a neustále se zvyšující poptávce představují stabilní zdroj příjmů.
            </p>
            <Button 
              size="lg" 
              className="transform transition-all hover:scale-105"
              asChild
            >
              <Link href="/kontakt">
                Mám zájem o spolupráci <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 hover:shadow-lg transition-all">
                <benefit.icon className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Proč investovat s námi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <feature.icon className="h-16 w-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Využijte tuto příležitost a zhodnoťte své prostředky efektivně!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Investice do bezkontaktních automyček je nejen finančně atraktivní, 
              ale i perspektivní s ohledem na budoucí trendy.
            </p>
            <Button 
              size="lg"
              className="transform transition-all hover:scale-105"
              asChild
            >
              <Link href="/kontakt">
                Chci začít podnikat <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}