import { ShieldAlert, Eye, Lock, FileWarning, Copyright } from 'lucide-react';
export const POLICY_TIPS = [
  {
    id: 'metadata',
    title: 'Metadata Policy',
    icon: FileWarning,
    description: 'Ensure your app title, icon, and developer name do not contain misleading information.',
    points: [
      'Do not use "Best", "#1", or "Top" in your app title.',
      'Avoid using images or names of other famous apps/brands.',
      'Don\'t use keywords that are irrelevant to your app.',
    ]
  },
  {
    id: 'privacy',
    title: 'User Data & Privacy',
    icon: Lock,
    description: 'You must be transparent about how you handle user data.',
    points: [
      'A valid privacy policy link is mandatory.',
      'You must declare all data collection in the Data Safety section.',
      'Request permissions only when necessary for core functionality.',
    ]
  },
  {
    id: 'content',
    title: 'Restricted Content',
    icon: ShieldAlert,
    description: 'Certain types of content are strictly regulated or banned.',
    points: [
      'No sexually explicit content.',
      'No hate speech or violence.',
      'Regulated goods (alcohol, tobacco) require strict age gating.',
    ]
  },
  {
    id: 'impersonation',
    title: 'Impersonation',
    icon: Copyright,
    description: 'Don\'t pretend to be someone else.',
    points: [
      'Do not imply affiliation with Google or other entities if none exists.',
      'Icons should not be confusingly similar to existing apps.',
    ]
  },
  {
    id: 'ad-fraud',
    title: 'Ad Fraud & Spam',
    icon: Eye,
    description: 'Ensure a quality experience for users.',
    points: [
      'Do not force users to rate your app.',
      'Ads should not be disruptive (e.g., unexpected interstitials).',
      'Do not send SMS or emails without explicit user consent.',
    ]
  }
];