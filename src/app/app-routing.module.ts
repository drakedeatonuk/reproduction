import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./ui/pages/home/home-page.component";
import { ExamplePageComponent } from "./ui/pages/tab/children/example-page/example-page.component";
import { TabPageComponent } from "./ui/pages/tab/component/tab-page.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'tab',
        component: TabPageComponent
      },
    ],
  },
  {
    path: 'example',
    component: ExamplePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
