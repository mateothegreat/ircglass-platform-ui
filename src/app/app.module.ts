import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxuxMatDialogModule }    from '@ngxux/ngxux-mat-dialog';
import { AppComponent }            from './app.component';
import { ChatModule }              from './chat/chat.module';
import { HeaderComponent }         from './header/header.component';
import { SettingsModule }          from './settings/settings.module';
import { SharedModule }            from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent,
        FooterComponent,

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,

        NgxuxMatDialogModule,

        ChatModule,
        SharedModule,
        SettingsModule,

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}

