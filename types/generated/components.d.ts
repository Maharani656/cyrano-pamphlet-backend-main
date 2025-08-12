import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_global_footer_links';
  info: {
    description: '';
    displayName: 'footerLinks';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      ['legal', 'privacy', 'company', 'resources']
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsButton extends Struct.ComponentSchema {
  collectionName: 'components_sections_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
  };
}

export interface SectionsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_call_to_actions';
  info: {
    description: '';
    displayName: 'call-to-action';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    features: Schema.Attribute.Component<'sections.features', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    secondaryButtonLink: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareerHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_career_heroes';
  info: {
    displayName: 'career-hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareerHighlights extends Struct.ComponentSchema {
  collectionName: 'components_sections_career_highlights';
  info: {
    description: '';
    displayName: 'career-highlights';
  };
  attributes: {
    highlights: Schema.Attribute.Component<'sections.highlights', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareerJobListings extends Struct.ComponentSchema {
  collectionName: 'components_sections_career_job_listings';
  info: {
    description: '';
    displayName: 'career-job-listings';
  };
  attributes: {
    positions: Schema.Attribute.Component<'sections.job-position', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCareerVision extends Struct.ComponentSchema {
  collectionName: 'components_sections_career_visions';
  info: {
    displayName: 'career-vision';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    description: '';
    displayName: 'feature-grid';
  };
  attributes: {
    features: Schema.Attribute.Component<'sections.features', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureSlider extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_sliders';
  info: {
    description: '';
    displayName: 'feature-slider';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    slides: Schema.Attribute.Component<'sections.slides', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_spotlights';
  info: {
    description: '';
    displayName: 'feature-spotlight';
  };
  attributes: {
    features: Schema.Attribute.Component<'sections.features', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    button: Schema.Attribute.Component<'sections.button', false>;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    checkText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_sections_highlights';
  info: {
    description: '';
    displayName: 'highlights';
  };
  attributes: {
    description: Schema.Attribute.Text;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsJobPosition extends Struct.ComponentSchema {
  collectionName: 'components_sections_job_positions';
  info: {
    description: '';
    displayName: 'JobPosition';
  };
  attributes: {
    applicationUrl: Schema.Attribute.String;
    department: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    location: Schema.Attribute.String;
    requirements: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSlides extends Struct.ComponentSchema {
  collectionName: 'components_sections_slides';
  info: {
    displayName: 'slides';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<
      'sections.testimonials-items',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialsItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_items';
  info: {
    displayName: 'testimonials-items';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_images';
  info: {
    description: '';
    displayName: 'text-image';
  };
  attributes: {
    button: Schema.Attribute.Component<'sections.button', true>;
    features: Schema.Attribute.Component<'sections.features', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reversed: Schema.Attribute.Boolean;
    richText: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTicker extends Struct.ComponentSchema {
  collectionName: 'components_sections_tickers';
  info: {
    description: '';
    displayName: 'ticker';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.ticker-items', true>;
    speed: Schema.Attribute.Integer;
  };
}

export interface SectionsTickerItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_ticker_items';
  info: {
    description: '';
    displayName: 'ticker-items';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.footer-links': GlobalFooterLinks;
      'sections.button': SectionsButton;
      'sections.call-to-action': SectionsCallToAction;
      'sections.career-hero': SectionsCareerHero;
      'sections.career-highlights': SectionsCareerHighlights;
      'sections.career-job-listings': SectionsCareerJobListings;
      'sections.career-vision': SectionsCareerVision;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.feature-slider': SectionsFeatureSlider;
      'sections.feature-spotlight': SectionsFeatureSpotlight;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'sections.highlights': SectionsHighlights;
      'sections.job-position': SectionsJobPosition;
      'sections.slides': SectionsSlides;
      'sections.testimonials': SectionsTestimonials;
      'sections.testimonials-items': SectionsTestimonialsItems;
      'sections.text-image': SectionsTextImage;
      'sections.ticker': SectionsTicker;
      'sections.ticker-items': SectionsTickerItems;
    }
  }
}
