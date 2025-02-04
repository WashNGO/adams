"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Sparkles, Brush, Shield, Car, SprayCan as Spray, Wrench } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Základní mytí",
    description: "Rychlé a efektivní mytí karoserie s aktivní pěnou",
    icon: Droplets,
    features: ["Aktivní pěna", "Oplach vysokým tlakem", "Sušení"]
  },
  {
    title: "Kompletní mytí",
    description: "Důkladné mytí včetně podvozku a konzervace",
    icon: Sparkles,
    features: ["Aktivní pěna", "Mytí podvozku", "Konzervace", "Sušení", "Leštění"]
  },
  {
    title: "Prémiové mytí",
    description: "Nejvyšší úroveň péče o váš vůz",
    icon: Shield,
    features: ["Aktivní pěna", "Mytí podvozku", "Nano konzervace", "Voskování", "Leštění"]
  }
]

const features = [
  {
    title: "Mytí spodní části vozidla a podvozku",
    description: "Speciální vodní děla precizně odstraňují nečistoty z těžko dostupných míst, jako je podvozek, kola nebo další části, které nejsou běžně vidět. Tyto nečistoty mohou výrazně poškozovat a znehodnocovat váš automobil.",
    icon: Car
  },
  {
    title: "Oplach demineralizovanou vodou",
    description: "Při oplachování se využívá demineralizovaná voda, která nezanechává na karoserii žádné bílé skvrny ani stopy po vodním kameni. Výsledek? Perfektně čistý a zářivý povrch vozu bez nutnosti dodatečného leštění.",
    icon: Spray
  },
  {
    title: "Výběr ze 4 mycích programů",
    description: "Každý program zahrnuje horký vosk pro ochranu a zvýraznění lesku laku, oplach demineralizovanou vodou pro dokonalý vzhled bez šmouh a dvojité sušení pro zajištění suchého povrchu bez zbytků vody.",
    icon: Wrench
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Špičková technologie bezkontaktního mytí automobilů
            </h1>
            <p className="text-lg text-muted-foreground">
              Naše nová myčka Wash 'n' go představuje moderní standard v péči o automobily. 
              Díky pokročilým funkcím a vylepšeným službám přináší řidičům maximální komfort, 
              důkladnou péči o vozidlo a nové možnosti ochrany laku i podvozku.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-all">
                <feature.icon className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold text-center mb-12">Naše programy mytí</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-all flex flex-col">
                <div className="flex-grow">
                  <service.icon className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-auto" asChild>
                  <Link href="/kontakt">Najít nejbližší myčku</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
