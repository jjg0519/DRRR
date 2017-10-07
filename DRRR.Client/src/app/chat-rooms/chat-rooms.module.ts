import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChatRoomsRoutingModule } from './chat-rooms-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ChatRoomListComponent } from './chat-room-list/chat-room-list.component';
import { ChatRoomListItemComponent } from './chat-room-list-item/chat-room-list-item.component';
import { ChatRoomsComponent } from './chat-rooms.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatRoomListService } from './chat-room-list/chat-room-list.service';
import { ChatRoomCreateService } from './chat-room-create/chat-room-create.service';
import { ChatRoomCreateComponent } from './chat-room-create/chat-room-create.component';
import { ChatRoomsAuthGuard } from './chat-rooms-auth.guard';
import { ChatRoomAuthGuard } from './chat-room-auth.guard';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatRoomService } from './chat-room/chat-room.service';

@NgModule({
  imports: [
    // 这个问题有待解决，希望能够在AppModule只导入一次
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    SharedModule,
    ChatRoomsRoutingModule
  ],
  providers: [
    ChatRoomsAuthGuard,
    ChatRoomAuthGuard,
    ChatRoomListService,
    ChatRoomCreateService,
    ChatRoomService
  ],
  declarations: [
    ChatRoomListComponent,
    ChatRoomListItemComponent,
    ChatRoomsComponent,
    ProgressBarComponent,
    ChatRoomComponent,
    ChatMessageComponent,
    ChatRoomCreateComponent],
  entryComponents: [
    ChatRoomCreateComponent
  ]
})
export class ChatRoomsModule { }
