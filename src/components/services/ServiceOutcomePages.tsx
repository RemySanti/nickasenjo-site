import { LocalServiceOfferingPage } from './LocalServiceOfferingPage';
import {
  brandStoryOffering,
  commercialVideoOffering,
  musicVideoOffering,
  socialVideoOffering,
  studioRetainerOffering,
  thePlatformShowOffering,
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
  return <LocalServiceOfferingPage config={thePlatformShowOffering} />;
}

export function ServiceStudioRetainerPage() {
  return <LocalServiceOfferingPage config={studioRetainerOffering} />;
}
