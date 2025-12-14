import { isRegistrationDisabled } from '@/lib/core/config/feature-flags'
import { getOAuthProviderStatus } from '@/app/(auth)/components/oauth-provider-checker'
import SignupForm from '@/app/(auth)/signup/signup-form'

export const dynamic = 'force-dynamic'

export default async function SignupPage() {
<<<<<<< HEAD
  const { githubAvailable, googleAvailable, microsoftAvailable, isProduction } = await getOAuthProviderStatus()

  if (isTruthy(env.DISABLE_REGISTRATION)) {
=======
  if (isRegistrationDisabled) {
>>>>>>> a0fb889644f217cad7acc406be9162d52e5427bb
    return <div>Registration is disabled, please contact your admin.</div>
  }

  const { githubAvailable, googleAvailable, isProduction } = await getOAuthProviderStatus()

  return (
    <SignupForm
      githubAvailable={githubAvailable}
      googleAvailable={googleAvailable}
      microsoftAvailable={microsoftAvailable}
      isProduction={isProduction}
    />
  )
}
