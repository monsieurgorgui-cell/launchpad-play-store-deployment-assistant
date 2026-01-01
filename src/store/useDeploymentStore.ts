import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
interface DeploymentState {
  completedSteps: string[];
  toggleStep: (stepId: string) => void;
  resetProgress: () => void;
  isStepCompleted: (stepId: string) => boolean;
}
export const useDeploymentStore = create<DeploymentState>()(
  persist(
    (set, get) => ({
      completedSteps: [],
      toggleStep: (stepId: string) => {
        set((state) => {
          const exists = state.completedSteps.includes(stepId);
          if (exists) {
            return { completedSteps: state.completedSteps.filter((id) => id !== stepId) };
          } else {
            return { completedSteps: [...state.completedSteps, stepId] };
          }
        });
      },
      resetProgress: () => {
        set({ completedSteps: [] });
      },
      isStepCompleted: (stepId: string) => {
        return get().completedSteps.includes(stepId);
      }
    }),
    {
      name: 'play-store-deployment-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);