declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-WLLBLF6J10';

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackBeginCheckout(placement: string = 'landing_page') {
  trackEvent('begin_checkout', {
    currency: 'BRL',
    value: 49.99,
    items: [
      {
        item_id: 'ingles-online-axe',
        item_name: 'Inglês online-Axe',
        item_category: 'Education',
        price: 49.99,
        quantity: 1
      }
    ],
    checkout_placement: placement
  });
}

export function trackQuizCompleted(profile: string) {
  trackEvent('quiz_completed', {
    recommended_profile: profile
  });
}

export function trackAudioSamplePlayed(sampleTitle: string) {
  trackEvent('audio_sample_played', {
    sample_title: sampleTitle
  });
}
