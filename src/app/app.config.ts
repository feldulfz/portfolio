import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ContentfulService } from './services/contentful-service/contentful.service.port';
import { ContentfulServiceAdapter } from './services/contentful-service/contentful.service.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: ContentfulService,
      useClass: ContentfulServiceAdapter
    }    
  ]
};
