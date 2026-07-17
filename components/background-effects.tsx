"use client"

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

      {/* Fundo */}
      <div className="absolute inset-0 bg-background" />

      {/* Luz superior esquerda */}
      <div
        className="
          absolute
          -top-72
          -left-72
          h-[850px]
          w-[850px]
          rounded-full
          bg-primary/20
          blur-[180px]
          animate-[pulse_18s_ease-in-out_infinite]
        "
      />

      {/* Luz superior direita */}
      <div
        className="
          absolute
          top-0
          right-[-300px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-orange-400/10
          blur-[170px]
          animate-[pulse_24s_ease-in-out_infinite]
        "
      />

      {/* Luz inferior */}
      <div
        className="
          absolute
          bottom-[-320px]
          left-1/2
          -translate-x-1/2
          h-[900px]
          w-[900px]
          rounded-full
          bg-primary/15
          blur-[200px]
          animate-[pulse_28s_ease-in-out_infinite]
        "
      />

      {/* Luz lateral */}
      <div
        className="
          absolute
          top-[45%]
          left-[-250px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-amber-500/10
          blur-[170px]
          animate-[pulse_20s_ease-in-out_infinite]
        "
      />

      {/* Centro */}
      <div
        className="
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[150px]
          animate-[pulse_30s_ease-in-out_infinite]
        "
      />

      {/* Ruído */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

    </div>
  )
}