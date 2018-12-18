import { Component, OnInit } from '@angular/core';
import { SettingsService }   from '../settings/settings.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

    public constructor(public settingsService: SettingsService) {


    }

    public ngOnInit() {

    }

}
