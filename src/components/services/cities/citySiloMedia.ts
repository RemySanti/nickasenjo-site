/** On-brand stills for local commercial-video SEO pages (from site service art). */
import imgDriveSales from '../../../assets/finalchangesforwebsitebeforelaunch/Services - Drive Sales and Launches.jpg?url';
import imgBuildBrand from '../../../assets/finalchangesforwebsitebeforelaunch/Services - Build a Memorable Brand.jpg?url';
import imgGrowSocial from '../../../assets/finalchangesforwebsitebeforelaunch/Services - Grow on Social.png?url';
import imgPreserveMilestone from '../../../assets/finalchangesforwebsitebeforelaunch/Services - Preserve a Milestone.jpg?url';
import imgThePlatform from '../../../assets/finalchangesforwebsitebeforelaunch/Services - The Platform.jpg?url';

export const citySiloMedia = {
  allentown: {
    hero: imgDriveSales,
    aside: imgBuildBrand,
    heroAlt: 'Commercial video production - campaign and launch imagery',
    asideAlt: 'Brand-forward cinematic video production',
  },
  bethlehem: {
    hero: imgBuildBrand,
    aside: imgThePlatform,
    heroAlt: 'Cinematic brand and story-driven video production',
    asideAlt: 'Large-scale commercial and entertainment production',
  },
  easton: {
    hero: imgPreserveMilestone,
    aside: imgGrowSocial,
    heroAlt: 'Commercial video celebrating milestones and legacy stories',
    asideAlt: 'Social and digital-first commercial video content',
  },
  emmaus: {
    hero: imgGrowSocial,
    aside: imgPreserveMilestone,
    heroAlt: 'Social-first commercial video with cinematic craft',
    asideAlt: 'Event and milestone video production',
  },
  whitehall: {
    hero: imgThePlatform,
    aside: imgDriveSales,
    heroAlt: 'High-impact commercial and entertainment-style video production',
    asideAlt: 'Campaign and launch commercial video production',
  },
  nyc: {
    hero: imgDriveSales,
    aside: imgThePlatform,
    heroAlt: 'Commercial and campaign video production',
    asideAlt: 'High-impact commercial and show-style production',
  },
  philadelphia: {
    hero: imgBuildBrand,
    aside: imgDriveSales,
    heroAlt: 'Philadelphia commercial and brand video production',
    asideAlt: 'Campaign and launch commercial video',
  },
  'new-jersey': {
    hero: imgThePlatform,
    aside: imgBuildBrand,
    heroAlt: 'New Jersey statewide commercial video production',
    asideAlt: 'Brand-forward commercial video for dense metro markets',
  },
  miami: {
    hero: imgGrowSocial,
    aside: imgPreserveMilestone,
    heroAlt: 'Miami commercial video - hospitality and lifestyle',
    asideAlt: 'High-energy commercial and social-first video',
  },
  orlando: {
    hero: imgPreserveMilestone,
    aside: imgThePlatform,
    heroAlt: 'Orlando commercial video for hospitality and conventions',
    asideAlt: 'Large-format commercial and venue storytelling',
  },
  chicago: {
    hero: imgDriveSales,
    aside: imgGrowSocial,
    heroAlt: 'Chicago commercial video production',
    asideAlt: 'Digital and broadcast-ready commercial campaigns',
  },
  'los-angeles': {
    hero: imgThePlatform,
    aside: imgPreserveMilestone,
    heroAlt: 'Los Angeles commercial video production',
    asideAlt: 'Cinematic commercial and campaign production',
  },
} as const;
