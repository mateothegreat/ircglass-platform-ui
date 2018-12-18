import { Injectable }                                    from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { SettingsComponent }                             from './settings.component';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {

    }

    public open(): void {

        this.ngxuxMatDialogService.open(SettingsComponent, new NgxuxMatDialogSettings({

            id: 'settings',

            title: 'Settings',

            width: '500px',
            height: '600px',

        }));
    }

}
