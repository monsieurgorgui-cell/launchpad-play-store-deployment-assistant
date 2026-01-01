import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useDeploymentStore } from '@/store/useDeploymentStore';
import { Step } from '@/data/deploymentSteps';
import { Checkbox } from '@/components/ui/checkbox';
interface StepListProps {
  steps: Step[];
  phaseId: string;
}
export function StepList({ steps, phaseId }: StepListProps) {
  const completedSteps = useDeploymentStore((state) => state.completedSteps);
  const toggleStep = useDeploymentStore((state) => state.toggleStep);
  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "group flex items-start gap-3 p-3 rounded-lg border transition-all duration-200",
                isCompleted 
                  ? "bg-green-50/50 border-green-100 dark:bg-green-900/10 dark:border-green-900/30" 
                  : "bg-card border-border hover:border-primary/20 hover:shadow-sm"
              )}
            >
              <div className="pt-0.5">
                <Checkbox 
                  id={step.id}
                  checked={isCompleted}
                  onCheckedChange={() => toggleStep(step.id)}
                  className={cn(
                    "data-[state=checked]:bg-[#0F9D58] data-[state=checked]:border-[#0F9D58]",
                    "border-muted-foreground/30"
                  )}
                />
              </div>
              <div className="flex-1 space-y-1">
                <label 
                  htmlFor={step.id}
                  className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none block",
                    isCompleted ? "text-muted-foreground line-through decoration-green-500/30" : "text-foreground"
                  )}
                >
                  {step.label}
                  {step.isCritical && !isCompleted && (
                    <span className="ml-2 inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded dark:bg-amber-900/30 dark:text-amber-400">
                      Required
                    </span>
                  )}
                </label>
                {step.description && (
                  <p className={cn(
                    "text-xs text-muted-foreground transition-colors",
                    isCompleted && "text-muted-foreground/50"
                  )}>
                    {step.description}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}