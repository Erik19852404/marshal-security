import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SevicesComponent } from './sevices/sevices.component';
import { BtnMgmtService } from './btn-mgmt.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
  RouterModule.forRoot(
    [
      { path:"", component: InformationComponent },
      { path:"contacts", component: ContactsComponent },
      { path:"services", component: SevicesComponent },
    ]
  ), ],
  declarations: [ AppComponent, TopBarComponent, MenuComponent, InformationComponent, FooterComponent,   ContactsComponent, SevicesComponent],
  bootstrap:    [ AppComponent ],
  providers: [BtnMgmtService],
})
export class AppModule { }
