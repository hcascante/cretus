"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import PomeloLogo from "@/components/PomeloLogo"
import {
  CreditCard,
  BarChart3,
  Shield,
  Bot,
  ArrowRight,
  MessageCircle,
  Mail,
  Phone,
  Users,
  Clock,
} from "lucide-react"

export default function CretusLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-foreground">Cretus by</h1>
            <PomeloLogo size="lg" />
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Características
            </a>
            <a href="/configuracion" className="text-muted-foreground hover:text-foreground transition-colors">
              Configuración
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
            <Button variant="outline" size="sm">
              Iniciar Sesión
            </Button>
            <Button size="sm">Comenzar</Button>
          </nav>
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                Gestor de Cobranza IA
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Transformá la forma en que{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  recuperás deuda
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 text-pretty">
                En LATAM, más de <strong className="text-primary">USD 45.000 millones</strong> en créditos están en mora.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty">
                Con Cretus, automatizá, escalá y optimizá la recuperación de deuda sin contratar agencias ni aumentar equipos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="/configuracion">
                  Configurar Cretus
                  <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  Ver Demo
                </Button>
              </div>
              
            </div>

            {/* Futuristic Cards Display */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <Card className="w-80 h-48 bg-gradient-to-br from-slate-900 to-slate-800 border-0 shadow-2xl animate-float relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="relative p-6 h-full flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">POMELO CARD</p>
                        <p className="text-lg font-bold">PREMIUM</p>
                      </div>
                      <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center">
                        <CreditCard className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-mono tracking-wider mb-2">•••• •••• •••• 8472</p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs opacity-60">VENCE</p>
                          <p className="text-sm font-mono">12/28</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs opacity-60 text-red-400">MOROSO</p>
                          <p className="text-sm font-bold">$2,450</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Secondary Card */}
                <Card className="w-72 h-44 bg-gradient-to-br from-primary to-accent border-0 shadow-xl absolute -bottom-6 -right-6 animate-glow">
                  <div className="p-6 h-full flex flex-col justify-between text-primary-foreground">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-90">BUSINESS</p>
                        <p className="text-lg font-bold">ELITE</p>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-mono tracking-wider mb-2">•••• •••• •••• 9156</p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs opacity-70">ESTADO</p>
                          <p className="text-sm font-mono text-green-300">RECUPERADO</p>
                        </div>
                        <p className="text-sm font-bold opacity-90">CRETUS</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Background Elements */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Gestioná tu cobranza de manera eficiente</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Configurá la forma de contactar a tus usuarios morosos y escalá tu operación sin necesitar contratar agencias ni aumentar tus equipos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">IA Conversacional</h3>
              <p className="text-muted-foreground">
                Conversaciones naturales y empáticas que se adaptan al perfil del deudor para maximizar la recuperación.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Segmentación Inteligente</h3>
              <p className="text-muted-foreground">
                Clasifica automáticamente a los deudores y aplica la estrategia de cobranza más efectiva.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Gestión 24/7</h3>
              <p className="text-muted-foreground">
                Trabajo continuo sin descanso, contactando deudores en los momentos más oportunos.
              </p>
            </Card>

            {/* Las últimas dos tarjetas centradas */}
            <div className="sm:col-span-2 lg:col-span-3 flex justify-center">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-4xl">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reportes en Tiempo Real</h3>
              <p className="text-muted-foreground">
                Dashboard completo con métricas de recuperación, análisis de rendimiento y KPIs detallados.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Cumplimiento Legal</h3>
              <p className="text-muted-foreground">
                Respeta todas las regulaciones de cobranza y mantiene un registro completo de todas las interacciones.
              </p>
            </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section id="configuration" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Configurá la forma de contactar a tus usuarios morosos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elegí cómo querés que Cretus se comunique con los deudores. Múltiples canales para máxima efectividad y escalabilidad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Comunicación directa y personal a través de la plataforma de mensajería más popular.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Mensajes multimedia</li>
                <li>• Respuestas automáticas</li>
                <li>• Horarios personalizados</li>
                <li>• Seguimiento de estado</li>
              </ul>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Email</h3>
              <p className="text-muted-foreground mb-6">
                Comunicación formal y documentada con plantillas personalizables y seguimiento completo.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Plantillas personalizadas</li>
                <li>• Adjuntos automáticos</li>
                <li>• Programación de envíos</li>
                <li>• Confirmación de lectura</li>
              </ul>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Llamadas</h3>
              <p className="text-muted-foreground mb-6">
                Conversaciones de voz con IA avanzada para casos que requieren interacción más personal.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Voz natural con IA</li>
                <li>• Grabación de llamadas</li>
                <li>• Análisis de sentimientos</li>
                <li>• Escalación automática</li>
              </ul>
            </Card>
          </div>
        
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Listo para escalar tu recuperación de deuda?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Transformá tu operación de cobranza con Cretus. Automatizá, escalá y optimizá sin contratar agencias ni aumentar equipos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/configuracion">
                Comenzar Configuración
                <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Agendar Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <PomeloLogo size="md" />
              <span className="text-lg font-bold text-foreground">Cretus</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Cretus by Pomelo. Revolucionando la gestión de cobranza con IA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
