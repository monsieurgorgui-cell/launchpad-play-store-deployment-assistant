import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/sonner';
import { DEPLOYMENT_PHASES, Phase } from '@/data/deploymentSteps';
import { useDeploymentStore } from '@/store/useDeploymentStore';
import { PhaseCard } from '@/components/dashboard/PhaseCard';
import { StepList } from '@/components/dashboard/StepList';
import { ProgressRing } from '@/components/dashboard/ProgressRing';
export function HomePage() {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string | null>(null);
  // Selectors
  const completedSteps = useDeploymentStore((state) => state.completedSteps);
  const resetProgress = useDeploymentStore((state) => state.resetProgress);
  // Derived State
  const totalSteps = useMemo(() => 
    DEPLOYMENT_PHASES.reduce((acc, phase) => acc + phase.steps.length, 0), 
  []);
  const totalCompleted = completedSteps.length;
  const overallProgress = totalSteps > 0 ? (totalCompleted / totalSteps) * 100 : 0;
  const selectedPhase = useMemo(() => 
    DEPLOYMENT_PHASES.find(p => p.id === selectedPhaseId), 
  [selectedPhaseId]);
  const handlePhaseClick = (phaseId: string) => {
    setSelectedPhaseId(phaseId);
  };
  return (
    <AppLayout container contentClassName="py-8">
      <div className="relative min-h-[calc(100vh-4rem)]">
        <ThemeToggle />
        {/* Header / Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 animate-fade-in">
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#0F9D58] text-sm font-medium dark:bg-green-900/20">
              <Rocket className="w-4 h-4" />
              <span>Ready for Liftoff</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Mission <span className="text-[#0F9D58]">Control</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Track your journey to the Google Play Store. Complete each phase to ensure a successful launch.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{totalCompleted}/{totalSteps}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Steps Done</span>
              </div>
              <Separator orientation="vertical" className="h-10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{DEPLOYMENT_PHASES.length}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Phases</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#0F9D58]/20 blur-3xl rounded-full transform scale-75" />
            <ProgressRing progress={overallProgress} size={180} strokeWidth={12} className="relative z-10 bg-card rounded-full shadow-2xl shadow-green-900/5" />
          </div>
        </div>
        {/* Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {DEPLOYMENT_PHASES.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PhaseCard 
                phase={phase} 
                onClick={() => handlePhaseClick(phase.id)}
                isActive={selectedPhaseId === phase.id}
              />
            </motion.div>
          ))}
        </div>
        {/* Phase Detail Sheet (Side Drawer) */}
        <Sheet open={!!selectedPhaseId} onOpenChange={(open) => !open && setSelectedPhaseId(null)}>
          <SheetContent className="w-full sm:max-w-xl overflow-hidden flex flex-col p-0">
            {selectedPhase && (
              <>
                <div className="p-6 bg-muted/30 border-b">
                  <SheetHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-md bg-[#0F9D58]/10 text-[#0F9D58]">
                        {/* We can't dynamically render icon easily here without importing all, 
                            so we'll rely on the title or a generic icon if needed, 
                            or duplicate the icon logic from PhaseCard if strictly necessary. 
                            For now, just the title is clean. */}
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Phase Detail</span>
                    </div>
                    <SheetTitle className="text-2xl text-[#0F9D58]">{selectedPhase.title}</SheetTitle>
                    <SheetDescription className="text-base mt-2">
                      {selectedPhase.description}
                    </SheetDescription>
                  </SheetHeader>
                </div>
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Action Items</h3>
                      <StepList steps={selectedPhase.steps} phaseId={selectedPhase.id} />
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4 border border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/30">
                      <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> Pro Tip
                      </h4>
                      <p className="text-sm text-blue-600/90 dark:text-blue-400/80">
                        Don't forget to save your changes in the Google Play Console after completing these steps. Changes are not published immediately.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
                <div className="p-6 border-t bg-background">
                  <Button 
                    className="w-full bg-[#0F9D58] hover:bg-[#0F9D58]/90 text-white" 
                    onClick={() => setSelectedPhaseId(null)}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Done with this Phase
                  </Button>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
        {/* Debug/Reset Actions */}
        <div className="mt-12 flex justify-center opacity-50 hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="sm" onClick={resetProgress} className="text-xs text-muted-foreground">
            Reset All Progress
          </Button>
        </div>
      </div>
      <Toaster />
    </AppLayout>
  );
}