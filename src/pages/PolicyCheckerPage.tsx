import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { POLICY_TIPS } from '@/data/policyData';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
export function PolicyCheckerPage() {
  return (
    <AppLayout container contentClassName="py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Policy Checker</h1>
          <p className="text-muted-foreground">
            Avoid common rejection reasons by reviewing these key policy areas before submission.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg border border-amber-200 dark:border-amber-800 text-sm font-medium">
          <AlertTriangle className="w-4 h-4" />
          <span>Updates frequently</span>
        </div>
      </div>
      <div className="grid gap-6">
        {POLICY_TIPS.map((tip) => (
          <Card key={tip.id} className="overflow-hidden">
            <CardHeader className="bg-muted/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-background rounded-md shadow-sm">
                  <tip.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {tip.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <ShieldCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 p-6 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 text-center">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">Need more details?</h3>
        <p className="text-blue-700 dark:text-blue-400 mb-4">
          Always consult the official Google Play Developer Policy Center for the most up-to-date and comprehensive information.
        </p>
        <a
          href="https://play.google.com/policy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Visit Policy Center
        </a>
      </div>
    </AppLayout>
  );
}