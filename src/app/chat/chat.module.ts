import { CommonModule }                 from '@angular/common';
import { NgModule }                     from '@angular/core';
import { AngularDraggableModule }       from 'angular2-draggable';
import { SharedModule }                 from '../shared/shared.module';
import { ChatWindowContentComponent }   from './chat-window/chat-window-content/chat-window-content.component';
import { ChatWindowInputComponent }     from './chat-window/chat-window-input/chat-window-input.component';
import { ChatWindowUsersListComponent } from './chat-window/chat-window-users-list/chat-window-users-list.component';
import { ChatWindowComponent }          from './chat-window/chat-window.component';
import { ChatComponent }                from './chat.component';

@NgModule({

    declarations: [


        ChatComponent,
        ChatWindowComponent,
        ChatWindowContentComponent,
        ChatWindowUsersListComponent,
        ChatWindowInputComponent,

    ],

    imports: [

        CommonModule,
        SharedModule,
        AngularDraggableModule,

    ],

    exports: [

        ChatWindowComponent,

    ]

})
export class ChatModule {
}

