import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  UserCheck, 
  LayoutTemplate, 
  ShieldCheck, 
  Rocket, 
  HelpCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Phase } from '@/data/deploymentSteps';
import { useDeploymentStore } from '@/store/useDeploymentStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
interface PhaseCardProps {
  phase: Phase;
  isActive?: boolean;
  isLocked?: boolean;
  onClick?: () => void;
}
// Map string icon names to actual components to avoid namespace import issues
const IconMap: Record<string, React.ElementType> = {
  UserCheck,
  LayoutTemplate,
  ShieldCheck,
  Rocket
};
export function PhaseCard({ phase, isActive, isLocked, onClick }: PhaseCardProps) {
  const completedSteps = useDeploymentStore((state) => state.completedSteps);
  // Calculate progress for this specific phase
  const progress = useMemo(() => {
    if (!phase.steps.length) return 0;
    const completedCount = phase.steps.filter(step => completedSteps.includes(step.id)).length;
    return (completedCount / phase.steps.length) * 100;
  }, [phase.steps, completedSteps]);
  const isComplete = progress === 100;
  // Dynamic Icon Component with fallback
  const IconComponent = IconMap[phase.icon] || HelpCircle;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={cn(
          "h-full cursor-pointer transition-all duration-300 border-l-4 overflow-hidden relative group",
          isActive
            ? "border-l-[#0F9D58] shadow-md ring-1 ring-[#0F9D58]/20"
            : "border-l-transparent hover:border-l-[#0F9D58]/50",
          isComplete && "border-l-[#0F9D58] bg-green-50/10",
          isLocked && "opacity-60 grayscale pointer-events-none"
        )}
        onClick={onClick}
      >
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className={cn(
              "p-2.5 rounded-lg mb-2 inline-flex",
              isComplete ? "bg-[#0F9D58]/10 text-[#0F9D58]" : "bg-secondary text-foreground"
            )}>
              <IconComponent className="w-6 h-6" />
            </div>
            {isComplete ? (
              <CheckCircle2 className="w-6 h-6 text-[#0F9D58]" />
            ) : (
              <div className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {Math.round(progress)}%
              </div>
            )}
          </div>
          <CardTitle className="text-xl group-hover:text-[#0F9D58] transition-colors">
            {phase.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {phase.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{phase.steps.filter(s => completedSteps.includes(s.id)).length}/{phase.steps.length} steps</span>
              </div>
              {/* Custom Progress Bar to avoid type errors and ensure correct styling */}
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full transition-all duration-500 ease-in-out rounded-full",
                    isComplete ? "bg-[#0F9D58]" : "bg-primary"
                  )}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center text-sm font-medium text-[#4285F4] group-hover:translate-x-1 transition-transform">
              {isComplete ? "Review Steps" : "Continue Phase"}
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </CardContent>
        {/* Hover Effect Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F9D58]/0 via-[#0F9D58]/0 to-[#0F9D58]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </Card>
    </motion.div>
  );
}