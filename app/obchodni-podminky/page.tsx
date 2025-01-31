"use client"

import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Obchodní podmínky a GDPR</h1>
          
          <Card className="p-8 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. ÚVODNÍ USTANOVENÍ</h2>
            <div className="space-y-4 mb-8">
              <p>
                1.1. Tyto obchodní podmínky (dále jen „Podmínky") stanovují pravidla pro kontaktování klientů 
                (dále jen „Klient"), kteří vyplní kontaktní formulář na webové stránce www.washngo.cz 
                (dále jen „Web") a udělí souhlas se zpracováním osobních údajů.
              </p>
              <p>
                1.2. Správcem osobních údajů je WASH'N'GO!, se sídlem Vojtěšská 211/6, Nové Město (Praha 1), 
                110 00 Praha, IČ: [DOPLŇTE IČ], e-mail: [DOPLŇTE EMAIL], telefon: +420 704 749 531 
                (dále jen „Správce").
              </p>
              <p>
                1.3. Klient souhlasí s tím, že může být kontaktován za účelem poskytování informací o službách 
                Společnosti, marketingových nabídkách nebo jiných sděleních souvisejících s produkty Správce.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">2. ROZSAH ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ</h2>
            <div className="space-y-4 mb-8">
              <p>2.1. Osobní údaje zpracovávané na základě souhlasu zahrnují:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Jméno a příjmení</li>
                <li>Telefonní číslo</li>
                <li>E-mailovou adresu</li>
                <li>Další údaje, které Klient dobrovolně uvede v kontaktním formuláři</li>
              </ul>
              <p>2.2. Osobní údaje budou zpracovávány pouze za účelem:</p>
              <ul className="list-disc pl-6">
                <li>Kontaktování Klienta na základě jeho žádosti</li>
                <li>Poskytování informací o službách a produktech Společnosti</li>
                <li>Marketingových sdělení (např. speciální nabídky, akce), pokud s tím Klient výslovně souhlasí</li>
              </ul>
              <p>
                2.3. Osobní údaje nejsou poskytovány třetím stranám bez výslovného souhlasu Klienta, 
                s výjimkou případů, kdy to vyžaduje zákon.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">3. DOBA UCHOVÁVÁNÍ OSOBNÍCH ÚDAJŮ</h2>
            <div className="space-y-4 mb-8">
              <p>
                3.1. Osobní údaje budou uchovávány po dobu trvání souhlasu Klienta, nejdéle však 3 roky 
                od jeho udělení.
              </p>
              <p>
                3.2. Po uplynutí této doby budou osobní údaje bezpečně vymazány nebo anonymizovány.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">4. PRÁVA KLIENTA PODLE GDPR</h2>
            <div className="space-y-4 mb-8">
              <p>4.1. Klient má právo kdykoli požádat o:</p>
              <ul className="list-disc pl-6">
                <li>Přístup ke svým osobním údajům (zjistit, jaké údaje Správce uchovává)</li>
                <li>Opravu nepřesných či neaktuálních údajů</li>
                <li>Výmaz osobních údajů („právo být zapomenut"), pokud již nejsou nutné pro účely, pro které byly shromažďovány</li>
                <li>Omezení zpracování údajů</li>
                <li>Přenositelnost údajů k jinému správci</li>
                <li>Vznést námitku proti zpracování pro marketingové účely</li>
              </ul>
              <p>
                4.2. Klient může uplatnit svá práva e-mailem na [DOPLŇTE EMAIL] nebo písemně na adresu 
                sídla Společnosti.
              </p>
              <p>
                4.3. Klient má právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz), 
                pokud se domnívá, že Správce nakládá s jeho údaji v rozporu s GDPR.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">5. ODSTOUPENÍ A ODVOLÁNÍ SOUHLASU</h2>
            <div className="space-y-4 mb-8">
              <p>
                5.1. Klient může kdykoli odvolat svůj souhlas se zpracováním osobních údajů a s kontaktováním, 
                a to e-mailem na [DOPLŇTE EMAIL] nebo telefonicky na +420 704 749 531.
              </p>
              <p>
                5.2. Po odvolání souhlasu Správce přestane Klienta kontaktovat a jeho údaje budou v souladu 
                s GDPR vymazány, pokud nebude existovat jiný právní důvod pro jejich uchování.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">6. ZÁVĚREČNÁ USTANOVENÍ</h2>
            <div className="space-y-4">
              <p>6.1. Tyto Podmínky nabývají účinnosti dnem jejich zveřejnění na Webu.</p>
              <p>
                6.2. Správce si vyhrazuje právo kdykoli Podmínky upravit, přičemž aktualizovaná verze bude 
                vždy dostupná na Webu.
              </p>
              <p>
                6.3. Klient souhlasí s tím, že jakékoli spory vyplývající z těchto Podmínek budou řešeny 
                podle právního řádu České republiky.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}