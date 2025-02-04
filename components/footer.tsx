import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, Droplets } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center space-x-2">
            <Droplets className="h-6 w-6 text-blue-600" /> {/* Přidání kapky vedle názvu */}
            <h3 className="text-lg font-semibold">WASH'N'GO</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Profesionální bezkontaktní automyčky pro váš vůz. Kvalita a ekologie na prvním místě.
          </p>

          <div>
            <h3 className="text-lg font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/o-nas" className="text-sm text-muted-foreground hover:text-primary">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="text-sm text-muted-foreground hover:text-primary">
                  Naše služby
                </Link>
              </li>
              <li>
                <Link href="/investice" className="text-sm text-muted-foreground hover:text-primary">
                  Možnosti investic
                </Link>
              </li>
              <li>
                <Link href="/obchodni-podminky" className="text-sm text-muted-foreground hover:text-primary">
                  Obchodní podmínky
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">+420 704 749 531</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">info@washngo.cz</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sledujte nás</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} WASH'N'GO. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
