// Necessary if using App Router to ensure this file runs on the client
'use client'

import { datadogRum } from '@datadog/browser-rum'

console.log('datadog RUM init')

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID || '',
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN || '',

  site: 'datadoghq.com',
  service: 'datadog-rum-debug',
  env: 'test',

  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,

  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,

  defaultPrivacyLevel: 'mask',
  enablePrivacyForActionName: true,
})

export function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null
}
