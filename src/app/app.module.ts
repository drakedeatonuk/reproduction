import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { IonicModule, IonicRouteStrategy, isPlatform } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./ui/pages/home/home-page.component";
import { ExamplePageComponent } from "./ui/pages/tab/children/example-page/example-page.component";
import { TabPageComponent } from "./ui/pages/tab/component/tab-page.component";

@NgModule({
  declarations: [
    AppComponent,
    TabPageComponent,
    HomePageComponent,
    ExamplePageComponent,
  ],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot({
      animated: !isPlatform('desktop'),
    }),
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
