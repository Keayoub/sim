'use server'

import { env } from '@/lib/core/config/env'
import { isProd } from '@/lib/core/config/environment'

export async function getOAuthProviderStatus() {
  const githubAvailable = !!(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET)

  const googleAvailable = !!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET)

  const microsoftAvailable = !!(env.MICROSOFT_CLIENT_ID && env.MICROSOFT_CLIENT_SECRET && env.MICROSOFT_TENANT_ID)

  return { githubAvailable, googleAvailable, microsoftAvailable, isProduction: isProd }
}
