import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEmojisModule } from 'angular-emojis';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InstagramPageComponent } from './instagram-page/instagram-page.component';
import { NavBarSimpleComponent } from './nav-bar-simple/nav-bar-simple.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    InstagramPageComponent,
    NavBarSimpleComponent,
    ResumeComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEmojisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
