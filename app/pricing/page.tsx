"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PomeloLogo from "@/components/PomeloLogo"
import Link from "next/link"
import {
  DollarSign,
  Users,
  TrendingUp,
  Check,
  ArrowLeft,
  Calculator,
  Percent,
} from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <PomeloLogo size="md" />
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Pricing</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Modelos de Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elegí el modelo que mejor se adapte a tu negocio. Pagás solo por lo que usás.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Modelo 1: Por usuarios morosos */}
            <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Por Usuarios Morosos</CardTitle>
                <CardDescription className="text-lg">
                  Ideal para empresas con cartera de morosos estable
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$500 USD</div>
                  <div className="text-muted-foreground">Mínimo mensual</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground font-medium">$1 USD por cliente moroso gestionado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Sin límite de contactos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Todos los canales incluidos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Reportes en tiempo real</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Ejemplo:</div>
                  <div className="text-sm">
                    <div>500 clientes morosos = $500 (mínimo)</div>
                    <div>1,000 clientes morosos = $1,000</div>
                    <div>2,000 clientes morosos = $2,000</div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Elegir este modelo
                </Button>
              </CardContent>
            </Card>

            {/* Modelo 2: Por cartera recuperada */}
            <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 border-2 border-accent/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Por Cartera Recuperada</CardTitle>
                <CardDescription className="text-lg">
                  Perfecto para maximizar la recuperación de deuda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">5%</div>
                  <div className="text-muted-foreground">del monto recuperado</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground font-medium">Sin costo fijo mensual</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Pagás solo cuando recuperás</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Todos los canales incluidos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Reportes en tiempo real</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Ejemplo:</div>
                  <div className="text-sm">
                    <div>Recuperás $10,000 = Pagás $500</div>
                    <div>Recuperás $50,000 = Pagás $2,500</div>
                    <div>Recuperás $100,000 = Pagás $5,000</div>
                  </div>
                </div>

                <Button className="w-full" size="lg" variant="outline">
                  Elegir este modelo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Calculadora de costos */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Calculadora de Costos</CardTitle>
              <CardDescription className="text-lg">
                Calculá cuánto te costaría Cretus según tu volumen de negocio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Modelo por Usuarios Morosos</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Clientes morosos por mes:</span>
                      <span className="font-medium">1,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Costo por cliente:</span>
                      <span className="font-medium">$1 USD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Mínimo mensual:</span>
                      <span className="font-medium">$500 USD</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center text-lg font-bold text-primary">
                        <span>Costo total mensual:</span>
                        <span>$1,000 USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Modelo por Cartera Recuperada</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monto recuperado por mes:</span>
                      <span className="font-medium">$50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Porcentaje:</span>
                      <span className="font-medium">5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Costo fijo:</span>
                      <span className="font-medium">$0 USD</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center text-lg font-bold text-accent">
                        <span>Costo total mensual:</span>
                        <span>$2,500 USD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿No estás seguro cuál elegir?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo puede ayudarte a elegir el modelo que mejor se adapte a tu negocio y volumen de cartera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Hablar con un experto
              </Button>
              <Button size="lg" variant="outline">
                Agendar demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <PomeloLogo size="sm" />
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
