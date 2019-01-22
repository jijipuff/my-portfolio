import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//tells us what module we will look at first
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
