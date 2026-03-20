'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Lock, CheckCircle2 } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import MicroStepJourney from '@/components/MicroStepJourney'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [isDeconstructing, setIsDeconstructing] = useState(false)

  const handleDeconstruct = () => {
    if (inputValue.trim()) {
      setIsDeconstructing(true)
      // Placeholder for future API call
      console.log('Deconstructing:', inputValue)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleDeconstruct()
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <HeroSection 
          inputValue={inputValue}
          setInputValue={setInputValue}
          isDeconstructing={isDeconstructing}
          onDeconstruct={handleDeconstruct}
          onKeyPress={handleKeyPress}
        />

        {/* Divider */}
        <div className="my-16 md:my-24 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/20 to-transparent" />
          <span className="text-muted-foreground text-sm font-medium px-2">Your Journey</span>
          <div className="flex-1 h-px bg-gradient-to-l from-border via-primary/20 to-transparent" />
        </div>

        {/* Micro-Step Journey Preview */}
        <MicroStepJourney />
      </div>
    </main>
  )
}
