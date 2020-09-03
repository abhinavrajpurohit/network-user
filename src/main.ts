/**
 |----------------------------------------------------------
 | Angular Entry Point File!!
 | @version 1.0.0
 |----------------------------------------------------------
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/*
* Bootstraping Angular Root App Module
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
