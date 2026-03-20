import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  inputValue: string
  setInputValue: (value: string) => void
  isDeconstructing: boolean
  onDeconstruct: () => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function HeroSection({
  inputValue,
  setInputValue,
  isDeconstructing,
  onDeconstruct,
  onKeyPress,
}: HeroSectionProps) {
  return (
    <section className="text-center space-y-8 md:space-y-12">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Relative z-index for content */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm mb-4 animate-fade-in">
          <Sparkles size={16} />
          <span>Break Down Any Problem</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
          Conquer LeetCode,
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            One Step at a Time
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          Tired of intimidating coding problems? We break them into bite-sized, manageable micro-steps you can solve confidently.
        </p>
      </div>

      {/* Input Section */}
      <div className="relative z-10 mt-12 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="text"
            placeholder="Paste LeetCode URL or Problem ID (e.g., 1, two-sum, https://leetcode.com/problems/two-sum)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={onKeyPress}
            disabled={isDeconstructing}
            className="flex-1 px-6 py-3 text-base rounded-lg border border-input bg-card text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
          />
          <Button
            onClick={onDeconstruct}
            disabled={isDeconstructing || !inputValue.trim()}
            className="px-6 py-3 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2 transition-all hover:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDeconstructing ? (
              <>
                <span className="animate-spin">⚡</span>
                Deconstructing...
              </>
            ) : (
              <>
                Deconstruct
                <ArrowRight size={18} />
              </>
            )}
          </Button>
        </div>

        {/* Helper Text */}
        <p className="text-xs md:text-sm text-muted-foreground mt-3 text-balance">
          ✨ Instant problem breakdown • 🎯 Step-by-step guidance • 🚀 Start solving in seconds
        </p>
      </div>

      {/* Visual Element */}
      <div className="relative z-10 mt-16 md:mt-20">
        <div className="inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">3-4</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Micro-Steps</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-accent">10x</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Less Overwhelming</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">∞</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Your Confidence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
