import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavHeaderTopComponent } from './components/header/nav-header-top/nav-header-top.component';
import { NavHeaderBottomComponent } from './components/header/nav-header-bottom/nav-header-bottom.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponent } from './components/auth/auth.component';
import { ContentComponent } from './components/content/content.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { NavHeaderLeftComponent } from './components/header/nav-header-left/nav-header-left.component';
import { MainComponent } from './components/main/main.component';
import { PreloaderWrapComponent } from './components/preloader-wrap/preloader-wrap.component';
import { FriendRequestComponent } from './components/friend-request/friend-request.component';
import { SuggestGroupComponent } from './components/suggest-group/suggest-group.component';
import { SuggestPageComponent } from './components/suggest-page/suggest-page.component';
import { SuggestEventComponent } from './components/suggest-event/suggest-event.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavHeaderTopComponent,
    NavHeaderBottomComponent,
    NavHeaderLeftComponent,
    ContactComponent,
    AuthComponent,
    ContentComponent,
    ChatBotComponent,
    CreatePostComponent,
    PostsComponent,
    HomeComponent,
    StoryComponent,
    MainComponent,
    PreloaderWrapComponent,
    FriendRequestComponent,
    SuggestGroupComponent,
    SuggestPageComponent,
    SuggestEventComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
