import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Car, Shield, Sparkles, Timer } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/washngo.mp4" type="video/mp4" />
            Váš prohlížeč nepodporuje přehrávání videa.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Profesionální péče o váš vůz
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Bezkontaktní automyčky WASH'N'GO nabízí nejmodernější technologie 
            pro dokonalou čistotu vašeho vozu
          </p>
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
    </>
  )
}
