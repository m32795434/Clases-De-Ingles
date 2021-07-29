import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogTitleComponent } from './components/log-title/log-title.component';
import { SearchformComponent } from './components/searchform/searchform.component';
import { BlockDataComponent } from './components/block-data/block-data.component';
import { BlockTitleComponent } from './components/block-title/block-title.component';
import { ActivatedRouteComponent } from './components/activated-route/activated-route.component';
import { BlockDataResourcesComponent } from './components/block-data-resources/block-data-resources.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ClassesComponent,
    ResourcesComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    LogTitleComponent,
    SearchformComponent,
    BlockDataComponent,
    BlockTitleComponent,
    ActivatedRouteComponent,
    BlockDataResourcesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
