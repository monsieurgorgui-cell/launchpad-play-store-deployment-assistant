import React from "react";
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  ShieldAlert, 
  Rocket,
  ExternalLink,
  Settings
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
export function AppSidebar(): JSX.Element {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="h-8 w-8 rounded-lg bg-[#0F9D58] flex items-center justify-center shadow-sm">
            <Rocket className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none">LaunchPad</span>
            <span className="text-[10px] text-muted-foreground mt-0.5">Play Store Assistant</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Deployment</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive tooltip="Dashboard">
                <a href="#" className="font-medium">
                  <LayoutDashboard className="text-[#0F9D58]" /> 
                  <span>Mission Control</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Asset Guide">
                <a href="#">
                  <ImageIcon /> 
                  <span>Asset Studio</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Policy Check">
                <a href="#">
                  <ShieldAlert /> 
                  <span>Policy Check</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> 
                  <span>Play Console</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}