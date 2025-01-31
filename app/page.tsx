import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Car, Shield, Sparkles, Timer } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605164599894-ca98960d41b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        
        <div className="container relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Profesionální péče o váš vůz
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Bezkontaktní automyčky WASH'N'GO nabízí nejmodernější technologie 
            pro dokonalou čistotu vašeho vozu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white transform transition-all hover:scale-105" 
              asChild
            >
              <Link href="/sluzby">
                Naše služby <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-[#e0f2ff] hover:bg-[#cce7ff] text-blue-800 border border-blue-200 
                dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-white dark:border-blue-700
                transform transition-all hover:scale-105 hover:shadow-lg" 
              asChild
            >
              <Link href="/kontakt">Najít nejbližší myčku</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-900">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Proč si vybrat WASH'N'GO?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Timer className="h-12 w-12 mb-4 text-blue-600 dark:text-white" />
              <h3 className="text-xl font-semibold mb-2">Rychlé mytí</h3>
              <p className="text-muted-foreground">
                Kompletní mytí vašeho vozu za méně než 15 minut
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Sparkles className="h-12 w-12 mb-4 text-blue-600 dark:text-white" />
              <h3 className="text-xl font-semibold mb-2">Kvalitní výsledek</h3>
              <p className="text-muted-foreground">
                Profesionální čisticí prostředky pro dokonalý lesk
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 mb-4 text-blue-600 dark:text-white" />
              <h3 className="text-xl font-semibold mb-2">Šetrné k laku</h3>
              <p className="text-muted-foreground">
                Bezkontaktní technologie chrání povrch vašeho vozu
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Car className="h-12 w-12 mb-4 text-blue-600 dark:text-white" />
              <h3 className="text-xl font-semibold mb-2">Pro všechny vozy</h3>
              <p className="text-muted-foreground">
                Vhodné pro osobní i užitkové vozy všech velikostí
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-slate-800 dark:to-slate-900 text-white rounded-lg p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Staňte se součástí úspěšného byznysu
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Hledáte investiční příležitost? WASH'N'GO nabízí možnost 
              vlastní automyčky s ověřeným byznys modelem.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="hover:bg-white hover:text-blue-600 dark:hover:text-slate-900 transform transition-all hover:scale-105" 
              asChild
            >
              <Link href="/investice">
                Zjistit více o investicích <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}