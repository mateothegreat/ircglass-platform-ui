import { Component }   from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent {

    public constructor(public chatService: ChatService) {
        
    }

}
