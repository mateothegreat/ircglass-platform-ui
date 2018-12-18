import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { NgxuxMatDialogModule } from '@ngxux/ngxux-mat-dialog';
import { SettingsComponent }    from './settings.component';

@NgModule({

    declarations: [

        SettingsComponent

    ],

    imports: [

        CommonModule,

        NgxuxMatDialogModule,


    ],

    entryComponents: [

        SettingsComponent
        
    ]

})
export class SettingsModule {
}
