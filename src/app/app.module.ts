import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { ExploreComponent } from './explore/explore.component';
import { TeamComponent } from './team/team.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { AboutComponent } from './about/about.component';
import { ManagementComponent } from './management/management.component'


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    ExploreComponent,
    TeamComponent,
    BlogsComponent,
    FeaturesComponent,
    FooterComponent,
    CourseDetailsPageComponent,
    CourseGridComponent,
    AboutComponent,
    ManagementComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
