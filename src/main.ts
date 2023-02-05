import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // line is to enable camera to work on web: https://stackoverflow.com/questions/71901809/unable-to-load-pwa-element-pwa-camera-modal
  // ... and stripe to work on web: https://stripe.capacitorjs.jp/docs/angular
  .then(() => defineCustomElements(window))
  .catch(e => console.error(e));
