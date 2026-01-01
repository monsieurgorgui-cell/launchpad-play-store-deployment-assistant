import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ImageIcon, Smartphone, Monitor } from 'lucide-react';
export function AssetReferencePage() {
  return (
    <AppLayout container contentClassName="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Asset Studio</h1>
        <p className="text-muted-foreground">
          Reference guide for Google Play Store graphical assets. Ensure your files match these specifications exactly.
        </p>
      </div>
      <Tabs defaultValue="icon" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="icon">App Icon</TabsTrigger>
          <TabsTrigger value="feature">Feature Graphic</TabsTrigger>
          <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
        </TabsList>
        <TabsContent value="icon" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                Store Icon
              </CardTitle>
              <CardDescription>The main icon displayed in the store listing.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Dimensions</span>
                    <Badge variant="outline">512px × 512px</Badge>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Format</span>
                    <span className="text-sm text-muted-foreground">32-bit PNG</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Max Size</span>
                    <span className="text-sm text-muted-foreground">1024 KB</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Shape</span>
                    <span className="text-sm text-muted-foreground">Full Square (Google applies rounding)</span>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg text-sm text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                  <strong>Important:</strong> Do not apply rounded corners yourself. Upload a full square image; Google Play will dynamically apply the mask and shadow.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-muted/30 rounded-xl p-8 border border-dashed">
                <div className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                    512 x 512
                  </div>
                  {/* Safe zone indicator */}
                  <div className="absolute inset-[15%] border-2 border-white/30 border-dashed rounded-full pointer-events-none"></div>
                </div>
                <span className="mt-4 text-xs text-muted-foreground">Preview (Safe zone in dashed circle)</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="feature" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-primary" />
                Feature Graphic
              </CardTitle>
              <CardDescription>Displayed at the top of your store listing and in promotional areas.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-1 gap-8">
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <div className="text-xs text-muted-foreground mb-1">Width</div>
                    <div className="font-bold">1024px</div>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <div className="text-xs text-muted-foreground mb-1">Height</div>
                    <div className="font-bold">500px</div>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <div className="text-xs text-muted-foreground mb-1">Format</div>
                    <div className="font-bold">JPG / PNG</div>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg text-center">
                    <div className="text-xs text-muted-foreground mb-1">Alpha</div>
                    <div className="font-bold">No Transparency</div>
                  </div>
                </div>
              </div>
              <div className="relative w-full aspect-[1024/500] bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                <div className="text-white font-bold text-2xl">1024 x 500</div>
                <div className="absolute inset-[10%] border-2 border-white/30 border-dashed pointer-events-none flex items-center justify-center">
                  <span className="text-white/50 text-sm bg-black/20 px-2 py-1 rounded">Safe Zone (Keep text here)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="screenshots" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Screenshots
              </CardTitle>
              <CardDescription>Showcase your app's features. Minimum 2 required.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Requirements</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Minimum 2 screenshots</li>
                    <li>Max 8 screenshots per device type</li>
                    <li>JPEG or 24-bit PNG (no alpha)</li>
                    <li>Min dimension: 320px</li>
                    <li>Max dimension: 3840px</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Aspect Ratios</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>16:9 (Landscape)</li>
                    <li>9:16 (Portrait)</li>
                    <li>2:1 (Rare)</li>
                  </ul>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-[9/16] bg-slate-100 dark:bg-slate-800 rounded-lg border flex items-center justify-center text-xs text-muted-foreground">
                  Portrait (9:16)
                </div>
                <div className="aspect-[9/16] bg-slate-100 dark:bg-slate-800 rounded-lg border flex items-center justify-center text-xs text-muted-foreground">
                  Portrait (9:16)
                </div>
                <div className="col-span-2 aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg border flex items-center justify-center text-xs text-muted-foreground">
                  Landscape (16:9)
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}