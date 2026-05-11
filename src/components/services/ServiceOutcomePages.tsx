import { LocalServiceOfferingPage } from './LocalServiceOfferingPage';
import { ThePlatformPage } from './ThePlatformPage';
import {
  brandStoryOffering,
  commercialVideoOffering,
  musicVideoOffering,
  socialVideoOffering,
  studioRetainerOffering,
  weddingsEventsOffering,
} from '../../data/localServiceOfferingConfigs';

export function ServiceCommercialVideoPage() {
  return <LocalServiceOfferingPage config={commercialVideoOffering} />;
}

export function ServiceBrandStoryPage() {
  return <LocalServiceOfferingPage config={brandStoryOffering} />;
}

export function ServiceSocialVideoPage() {
  return <LocalServiceOfferingPage config={socialVideoOffering} />;
}

export function ServiceMusicVideoPage() {
  return <LocalServiceOfferingPage config={musicVideoOffering} />;
}

export function ServiceWeddingsEventsPage() {
  return <LocalServiceOfferingPage config={weddingsEventsOffering} />;
}

export function ServiceThePlatformShowPage() {
  return <ThePlatformPage />;
}

export function ServiceStudioRetainerPage() {
  return <LocalServiceOfferingPage config={studioRetainerOffering} />;
}
