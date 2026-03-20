'use client'

import { Lock, CheckCircle2, Play, Zap } from 'lucide-react'

const microSteps = [
  {
    id: 1,
    title: 'Understand the Problem',
    description: 'Read the problem statement carefully and identify what input you receive and what output is expected.',
    icon: Play,
    status: 'active',
    tips: [
      'What are the constraints?',
      'What are the edge cases?',
      'Can you give an example?',
    ],
  },
  {
    id: 2,
    title: 'Identify the Pattern',
    description: 'Recognize the underlying algorithm or data structure this problem requires.',
    icon: Zap,
    status: 'locked',
    tips: [
      'Two pointers? Hash map?',
      'Dynamic programming?',
      'Graph search?',
    ],
  },
  {
    id: 3,
    title: 'Code the Solution',
    description: 'Write clean, commented code that implements your identified approach.',
    icon: CheckCircle2,
    status: 'locked',
    tips: [
      'Start with pseudocode',
      'Handle edge cases',
      'Test your logic',
    ],
  },
]

export default function MicroStepJourney() {
  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
          Your <span className="text-primary">Micro-Step Journey</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch as complex problems transform into achievable steps. You unlock each step as you progress.
        </p>
      </div>

      {/* Micro-Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {microSteps.map((step, index) => {
          const Icon = step.icon
          const isActive = step.status === 'active'
          const isLocked = step.status === 'locked'

          return (
            <div key={step.id} className="group relative">
              {/* Connecting Line (hidden on mobile, shown on md+) */}
              {index < microSteps.length - 1 && (
                <div className="hidden md:block absolute -right-8 top-20 w-16 h-1 bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              {/* Card */}
              <div
                className={`relative rounded-2xl border-2 transition-all duration-300 overflow-hidden h-full flex flex-col ${
                  isActive
                    ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg shadow-primary/20 transform scale-100'
                    : isLocked
                      ? 'border-border bg-card/50 opacity-70 hover:opacity-85'
                      : 'border-border bg-card'
                }`}
              >
                {/* Animated Background */}
                {isActive && (
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 animate-pulse" />
                  </div>
                )}

                {/* Content */}
                <div className="relative p-6 md:p-8 flex flex-col h-full">
                  {/* Header with Icon and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg'
                          : isLocked
                            ? 'bg-muted text-muted-foreground'
                            : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {isLocked ? <Lock size={24} /> : <Icon size={24} />}
                    </div>

                    {/* Step Badge */}
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : isLocked
                            ? 'bg-border text-muted-foreground'
                            : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      Step {step.id}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Tips/Hints */}
                  <div className={`space-y-2 transition-all ${isLocked ? 'blur-sm' : ''}`}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Key Questions
                    </p>
                    <ul className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm">
                          <span
                            className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isActive ? 'bg-primary' : 'bg-muted-foreground'
                            }`}
                          />
                          <span
                            className={`${
                              isActive
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  {isActive && (
                    <button className="mt-6 w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                      <span>Start This Step</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  )}

                  {isLocked && (
                    <div className="mt-6 w-full px-4 py-2 bg-border text-muted-foreground font-semibold rounded-lg flex items-center justify-center gap-2 opacity-60 cursor-not-allowed">
                      <Lock size={16} />
                      <span>Locked</span>
                    </div>
                  )}
                </div>

                {/* Active Card Glow */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl border border-primary/0 shadow-[inset_0_0_0_1px_rgba(88,47,255,0.1)] group-hover:shadow-[inset_0_0_0_1px_rgba(88,47,255,0.3)] transition-all" />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-border">
        <div className="flex gap-2">
          {microSteps.map((step, index) => (
            <div
              key={step.id}
              className={`h-2 rounded-full transition-all ${
                step.status === 'active'
                  ? 'w-8 bg-primary'
                  : step.status === 'locked'
                    ? 'w-2 bg-border'
                    : 'w-2 bg-secondary'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground ml-4 font-medium">
          1 of {microSteps.length} Active
        </span>
      </div>
    </section>
  )
}
