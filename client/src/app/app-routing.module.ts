import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DevelopmentComponent } from "./pages/development/development.component";

const appRoutes: Routes = [
  {
    path: "development",
    component: DevelopmentComponent,
    data: { title: "Developer" },
  },
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Welcome" },
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
