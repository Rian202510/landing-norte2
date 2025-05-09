import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, BarChart, TrendingUp, Users, Mail, Menu } from "lucide-react"

export default function MarketingAgencyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo-norte.png" alt="Norte Soluções" width={28} height={28} />
            <span>Norte Soluções</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#servicos" className="text-sm font-medium hover:underline underline-offset-4">
              Serviços
            </Link>
            <Link href="#pacotes" className="text-sm font-medium hover:underline underline-offset-4">
              Pacotes
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:underline underline-offset-4">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:underline underline-offset-4">
              Contato
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Entrar</Button>
            <Button>Fale Conosco</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="pacotes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nossos Pacotes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Escolha o plano ideal para seu negócio
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Pacotes avulsos da Norte para quem quer resultado sem contrato fixo.
                </p>
              </div>
            </div>
            <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Plano Norte Essencial</CardTitle>
                  <CardDescription>Direção certa para começar com presença e estratégia</CardDescription>
                  <div className="pt-4">
                    <span className="text-3xl font-bold">R$250</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    <li><Check className="h-4 w-4 text-primary" /> 2 artes para feed</li>
                    <li><Check className="h-4 w-4 text-primary" /> 2 copies com CTA otimizadas</li>
                    <li><Check className="h-4 w-4 text-primary" /> Miniplanejamento com dias e horários</li>
                    <li><Check className="h-4 w-4 text-primary" /> Sugestão de bio para Instagram/WhatsApp</li>
                    <li><Check className="h-4 w-4 text-primary" /> Checklist com boas práticas</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="https://wa.me/5555999999999?text=Quero contratar o Plano Norte Essencial!" target="_blank">Contratar Agora</a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="text-center text-sm font-medium text-primary">Mais Popular</div>
                  <CardTitle>Plano Norte Impulso</CardTitle>
                  <CardDescription>A força certa para atrair, engajar e vender mais</CardDescription>
                  <div className="pt-4">
                    <span className="text-3xl font-bold">R$480</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    <li><Check className="h-4 w-4 text-primary" /> 3 artes personalizadas</li>
                    <li><Check className="h-4 w-4 text-primary" /> 2 copies com gatilhos de venda</li>
                    <li><Check className="h-4 w-4 text-primary" /> 1 roteiro de Reels ou institucional</li>
                    <li><Check className="h-4 w-4 text-primary" /> Miniplanejamento de campanha pontual</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="https://wa.me/5555999999999?text=Quero contratar o Plano Norte Impulso!" target="_blank">Contratar Agora</a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plano Norte Estratégico</CardTitle>
                  <CardDescription>Impacto e crescimento com propósito</CardDescription>
                  <div className="pt-4">
                    <span className="text-3xl font-bold">R$890</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    <li><Check className="h-4 w-4 text-primary" /> 5 conteúdos completos (arte + copy)</li>
                    <li><Check className="h-4 w-4 text-primary" /> 2 roteiros de Reels</li>
                    <li><Check className="h-4 w-4 text-primary" /> 1 arte promocional (vitrine, banner, etc)</li>
                    <li><Check className="h-4 w-4 text-primary" /> 1 texto institucional ou apresentação</li>
                    <li><Check className="h-4 w-4 text-primary" /> Plano de publicações com CTAs</li>
                    <li><Check className="h-4 w-4 text-primary" /> Reunião de briefing + entrega</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="https://wa.me/5555999999999?text=Quero contratar o Plano Norte Estratégico!" target="_blank">Contratar Agora</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-8">
              🌟 <strong>Extras:</strong> Vídeo com captação R$250 | Texto institucional R$150 | Setup de impulsionamento R$180
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
/* Seu código JSX da landing page vai aqui */
