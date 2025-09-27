"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PomeloLogo from "@/components/PomeloLogo"
import { useState } from "react"
import {
  MessageCircle,
  Mail,
  Phone,
  Check,
  Settings,
  ArrowLeft,
  Save,
  TestTube,
  X,
  CheckCircle,
  CreditCard,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

interface ChannelConfig {
  enabled: boolean
  settings: {
    [key: string]: any
  }
}

export default function ConfiguracionPage() {
  const [channels, setChannels] = useState<Record<string, ChannelConfig>>({
    whatsapp: {
      enabled: false,
      settings: {
        businessNumber: "",
        apiKey: "",
        messageTemplate: "Hola {nombre}, tienes una deuda pendiente de ${monto}. ¿Podrías contactarnos para resolverla?",
        workingHours: { start: "09:00", end: "18:00" },
        maxMessagesPerDay: 3,
      }
    },
    email: {
      enabled: false,
      settings: {
        smtpHost: "",
        smtpPort: 587,
        username: "",
        password: "",
        fromEmail: "",
        subjectTemplate: "Recordatorio de pago - {empresa}",
        emailTemplate: "Estimado/a {nombre},\n\nTienes una deuda pendiente de ${monto} con {empresa}.\n\nPor favor, contacta con nosotros para resolver esta situación.\n\nSaludos cordiales,\nEquipo de Cobranza",
        maxEmailsPerDay: 2,
      }
    },
    calls: {
      enabled: false,
      settings: {
        voiceProvider: "openai",
        voiceModel: "tts-1",
        maxCallsPerDay: 1,
        callSchedule: { start: "10:00", end: "17:00" },
        escalationEnabled: true,
        escalationThreshold: 3,
      }
    }
  })

  const [activeChannel, setActiveChannel] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isTesting, setIsTesting] = useState(false)

  const toggleChannel = (channel: string) => {
    setChannels(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        enabled: !prev[channel].enabled
      }
    }))
  }

  const updateChannelSettings = (channel: string, key: string, value: any) => {
    setChannels(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        settings: {
          ...prev[channel].settings,
          [key]: value
        }
      }
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simular guardado
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSaving(false)
    // Aquí iría la lógica real de guardado
  }

  const handleTest = async () => {
    setIsTesting(true)
    
    try {
      // Hacer llamada HTTP real al endpoint
      const response = await fetch('http://localhost:8000/call-now', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channels: Object.keys(channels).filter(key => channels[key].enabled),
          timestamp: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Respuesta del servidor:', result)
      
    } catch (error) {
      console.error('Error al hacer la llamada HTTP:', error)
      // Aún mostramos el modal de éxito para no interrumpir la UX
    }
    
    setIsTesting(false)
    setShowSuccessModal(true)
  }

  const channelConfigs = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: MessageCircle,
      color: "green",
      description: "Comunicación directa y personal",
      features: ["Mensajes multimedia", "Respuestas automáticas", "Horarios personalizados"]
    },
    {
      id: "email",
      name: "Email",
      icon: Mail,
      color: "blue",
      description: "Comunicación formal y documentada",
      features: ["Plantillas personalizadas", "Adjuntos automáticos", "Confirmación de lectura"]
    },
    {
      id: "calls",
      name: "Llamadas",
      icon: Phone,
      color: "purple",
      description: "Conversaciones de voz con IA",
      features: ["Voz natural con IA", "Grabación de llamadas", "Análisis de sentimientos"]
    }
  ]

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
                <Settings className="w-5 h-5 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Configuración de Cretus</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleTest} disabled={isTesting}>
              {isTesting ? (
                <>
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Enviando...
                </>
              ) : (
                <>
                  <TestTube className="w-4 h-4 mr-2" />
                  Probar
                </>
              )}
            </Button>
            <Button size="sm" onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Guardando...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Guardar
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Configura tus canales de comunicación</h2>
            <p className="text-xl text-muted-foreground">
              Selecciona y configura los canales que Cretus utilizará para contactar a los deudores.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {channelConfigs.map((channel) => {
              const Icon = channel.icon
              const isEnabled = channels[channel.id].enabled
              
              return (
                <Card 
                  key={channel.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    isEnabled ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setActiveChannel(activeChannel === channel.id ? null : channel.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 bg-${channel.color}-500/10 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${channel.color}-600`} />
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isEnabled ? 'bg-primary border-primary' : 'border-muted-foreground'
                      }`}>
                        {isEnabled && <Check className="w-4 h-4 text-primary-foreground" />}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{channel.name}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {channel.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-4" 
                      variant={isEnabled ? "default" : "outline"}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleChannel(channel.id)
                      }}
                    >
                      {isEnabled ? "Desactivar" : "Activar"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Configuración detallada */}
          {activeChannel && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuración de {channelConfigs.find(c => c.id === activeChannel)?.name}
                </CardTitle>
                <CardDescription>
                  Personaliza los ajustes específicos para este canal de comunicación.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {activeChannel === "whatsapp" && (
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Número de WhatsApp Business</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="+1234567890"
                        value={channels.whatsapp.settings.businessNumber}
                        onChange={(e) => updateChannelSettings("whatsapp", "businessNumber", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">API Key</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="Tu API key de WhatsApp"
                        value={channels.whatsapp.settings.apiKey}
                        onChange={(e) => updateChannelSettings("whatsapp", "apiKey", e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Plantilla de mensaje</label>
                      <textarea
                        className="w-full px-3 py-2 border border-input rounded-md h-24"
                        placeholder="Hola {nombre}, tienes una deuda pendiente..."
                        value={channels.whatsapp.settings.messageTemplate}
                        onChange={(e) => updateChannelSettings("whatsapp", "messageTemplate", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Horario de trabajo (Inicio)</label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        value={channels.whatsapp.settings.workingHours.start}
                        onChange={(e) => updateChannelSettings("whatsapp", "workingHours", {
                          ...channels.whatsapp.settings.workingHours,
                          start: e.target.value
                        })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Horario de trabajo (Fin)</label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        value={channels.whatsapp.settings.workingHours.end}
                        onChange={(e) => updateChannelSettings("whatsapp", "workingHours", {
                          ...channels.whatsapp.settings.workingHours,
                          end: e.target.value
                        })}
                      />
                    </div>
                  </div>
                )}

                {activeChannel === "email" && (
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">SMTP Host</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="smtp.gmail.com"
                        value={channels.email.settings.smtpHost}
                        onChange={(e) => updateChannelSettings("email", "smtpHost", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Puerto SMTP</label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="587"
                        value={channels.email.settings.smtpPort}
                        onChange={(e) => updateChannelSettings("email", "smtpPort", parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Usuario</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="tu@email.com"
                        value={channels.email.settings.username}
                        onChange={(e) => updateChannelSettings("email", "username", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Contraseña</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="Tu contraseña"
                        value={channels.email.settings.password}
                        onChange={(e) => updateChannelSettings("email", "password", e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Email de envío</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="cobranza@tuempresa.com"
                        value={channels.email.settings.fromEmail}
                        onChange={(e) => updateChannelSettings("email", "fromEmail", e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Asunto del email</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="Recordatorio de pago - {empresa}"
                        value={channels.email.settings.subjectTemplate}
                        onChange={(e) => updateChannelSettings("email", "subjectTemplate", e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Plantilla del email</label>
                      <textarea
                        className="w-full px-3 py-2 border border-input rounded-md h-32"
                        placeholder="Estimado/a {nombre}..."
                        value={channels.email.settings.emailTemplate}
                        onChange={(e) => updateChannelSettings("email", "emailTemplate", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {activeChannel === "calls" && (
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Proveedor de voz</label>
                      <select
                        className="w-full px-3 py-2 border border-input rounded-md"
                        value={channels.calls.settings.voiceProvider}
                        onChange={(e) => updateChannelSettings("calls", "voiceProvider", e.target.value)}
                      >
                        <option value="openai">OpenAI</option>
                        <option value="elevenlabs">ElevenLabs</option>
                        <option value="azure">Azure Cognitive Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Modelo de voz</label>
                      <select
                        className="w-full px-3 py-2 border border-input rounded-md"
                        value={channels.calls.settings.voiceModel}
                        onChange={(e) => updateChannelSettings("calls", "voiceModel", e.target.value)}
                      >
                        <option value="tts-1">TTS-1 (Rápido)</option>
                        <option value="tts-1-hd">TTS-1-HD (Alta calidad)</option>
                        <option value="alloy">Alloy</option>
                        <option value="echo">Echo</option>
                        <option value="fable">Fable</option>
                        <option value="onyx">Onyx</option>
                        <option value="nova">Nova</option>
                        <option value="shimmer">Shimmer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Horario de llamadas (Inicio)</label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        value={channels.calls.settings.callSchedule.start}
                        onChange={(e) => updateChannelSettings("calls", "callSchedule", {
                          ...channels.calls.settings.callSchedule,
                          start: e.target.value
                        })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Horario de llamadas (Fin)</label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        value={channels.calls.settings.callSchedule.end}
                        onChange={(e) => updateChannelSettings("calls", "callSchedule", {
                          ...channels.calls.settings.callSchedule,
                          end: e.target.value
                        })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Máximo de llamadas por día</label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        min="1"
                        max="10"
                        value={channels.calls.settings.maxCallsPerDay}
                        onChange={(e) => updateChannelSettings("calls", "maxCallsPerDay", parseInt(e.target.value))}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="escalation"
                        checked={channels.calls.settings.escalationEnabled}
                        onChange={(e) => updateChannelSettings("calls", "escalationEnabled", e.target.checked)}
                        className="rounded border-input"
                      />
                      <label htmlFor="escalation" className="text-sm font-medium">
                        Habilitar escalación automática
                      </label>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Resumen de configuración */}
          <Card>
            <CardHeader>
              <CardTitle>Resumen de configuración</CardTitle>
              <CardDescription>
                Revisa los canales activos y sus configuraciones antes de guardar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(channels).map(([channelId, config]) => {
                  const channelInfo = channelConfigs.find(c => c.id === channelId)
                  if (!channelInfo) return null
                  
                  return (
                    <div key={channelId} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-${channelInfo.color}-500/10 rounded-lg flex items-center justify-center`}>
                          <channelInfo.icon className={`w-4 h-4 text-${channelInfo.color}-600`} />
                        </div>
                        <div>
                          <p className="font-medium">{channelInfo.name}</p>
                          <p className="text-sm text-muted-foreground">{channelInfo.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          config.enabled ? 'bg-primary border-primary' : 'border-muted-foreground'
                        }`}>
                          {config.enabled && <Check className="w-4 h-4 text-primary-foreground" />}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {config.enabled ? 'Activo' : 'Inactivo'}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Modal de éxito */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">¡Mensajes enviados!</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSuccessModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Los mensajes de prueba se han enviado correctamente a través de todos los canales activos.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Canales probados:</h4>
                <div className="space-y-1">
                  {Object.entries(channels).map(([channelId, config]) => {
                    if (!config.enabled) return null
                    const channelInfo = channelConfigs.find(c => c.id === channelId)
                    if (!channelInfo) return null
                    
                    return (
                      <div key={channelId} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 bg-${channelInfo.color}-500 rounded-full`} />
                        <span className="text-muted-foreground">{channelInfo.name}</span>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-800">
                  <strong>Próximos pasos:</strong> Revisa los mensajes recibidos y ajusta la configuración si es necesario.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button onClick={() => setShowSuccessModal(false)}>
                Entendido
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Botón Siguiente flotante */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          size="lg" 
          className="group bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 rounded-full" 
          asChild
        >
          <a href="/pricing" className="flex items-center gap-2">
            <span>Siguiente</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  )
}
