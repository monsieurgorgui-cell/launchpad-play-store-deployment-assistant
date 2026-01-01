export interface Step {
  id: string;
  label: string;
  description?: string;
  isCritical?: boolean;
}
export interface Phase {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  steps: Step[];
}
export const DEPLOYMENT_PHASES: Phase[] = [
  {
    id: 'setup',
    title: 'Account Setup',
    description: 'Initialize your Google Play Console developer account and verify your identity.',
    icon: 'UserCheck',
    steps: [
      { id: 'setup-1', label: 'Create Google Play Developer Account', description: 'Sign in with your Google Account and accept the Developer Distribution Agreement.', isCritical: true },
      { id: 'setup-2', label: 'Pay Registration Fee', description: 'One-time $25 USD registration fee.', isCritical: true },
      { id: 'setup-3', label: 'Verify Identity', description: 'Upload ID documents as requested by Google.', isCritical: true },
      { id: 'setup-4', label: 'Complete Account Details', description: 'Add developer name, email, and physical address.' },
    ]
  },
  {
    id: 'store-listing',
    title: 'Store Listing',
    description: 'Prepare the visual assets and marketing copy that users will see on the store.',
    icon: 'LayoutTemplate',
    steps: [
      { id: 'listing-1', label: 'App Name & Short Description', description: 'Max 30 chars for name, 80 chars for short description.', isCritical: true },
      { id: 'listing-2', label: 'Full Description', description: 'Detailed description of your app features (max 4000 chars).', isCritical: true },
      { id: 'listing-3', label: 'App Icon', description: '512x512 px, 32-bit PNG, max 1MB.', isCritical: true },
      { id: 'listing-4', label: 'Feature Graphic', description: '1024x500 px, JPG or 24-bit PNG, no alpha.', isCritical: true },
      { id: 'listing-5', label: 'Phone Screenshots', description: 'At least 2 screenshots, 16:9 or 9:16 aspect ratio.' },
      { id: 'listing-6', label: 'Tablet Screenshots', description: '7-inch and 10-inch tablet screenshots if supporting tablets.' },
    ]
  },
  {
    id: 'content',
    title: 'App Content',
    description: 'Configure privacy policies, content ratings, and target audience settings.',
    icon: 'ShieldCheck',
    steps: [
      { id: 'content-1', label: 'Privacy Policy URL', description: 'Link to a valid privacy policy hosted online.', isCritical: true },
      { id: 'content-2', label: 'App Access', description: 'Provide test credentials if your app has a login.' },
      { id: 'content-3', label: 'Ads Declaration', description: 'Declare whether your app contains ads.' },
      { id: 'content-4', label: 'Content Rating', description: 'Complete the IARC questionnaire.' },
      { id: 'content-5', label: 'Target Audience', description: 'Select target age groups and declare if app appeals to children.' },
      { id: 'content-6', label: 'News Apps', description: 'Declare if your app is a news app.' },
    ]
  },
  {
    id: 'release',
    title: 'Release Management',
    description: 'Upload your app bundle, set up testing tracks, and roll out to production.',
    icon: 'Rocket',
    steps: [
      { id: 'release-1', label: 'Select Countries/Regions', description: 'Choose where your app will be available.' },
      { id: 'release-2', label: 'Create Internal Release', description: 'Upload .aab file to Internal Testing track.' },
      { id: 'release-3', label: 'Review Release Dashboard', description: 'Check for any warnings or errors in the pre-launch report.' },
      { id: 'release-4', label: 'Promote to Production', description: 'Roll out the release to the Production track.', isCritical: true },
      { id: 'release-5', label: 'Send for Review', description: 'Submit your changes for Google review.' },
    ]
  }
];