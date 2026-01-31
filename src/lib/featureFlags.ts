/**
 * Feature Flags Configuration
 * 
 * Centralized feature flags system that reads from environment variables.
 * All flags use the NEXT_PUBLIC_ prefix to be available on the client side.
 * 
 * Usage:
 *   import { featureFlags } from '@/lib/featureFlags';
 *   if (featureFlags.THEMES_ENABLED) { ... }
 */

export const featureFlags = {
    /** Enable/disable the Themes section (Temi & Proposte) */
    THEMES_ENABLED: process.env.NEXT_PUBLIC_FEATURE_THEMES === 'true',

    /** Enable/disable the authentication system (Login/Register) */
    AUTH_ENABLED: process.env.NEXT_PUBLIC_FEATURE_AUTH === 'true',
} as const;

export type FeatureFlag = keyof typeof featureFlags;

/**
 * Helper function to check if a feature is enabled
 */
export function isFeatureEnabled(flag: FeatureFlag): boolean {
    return featureFlags[flag];
}
