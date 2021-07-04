import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddeventComponent } from './pages/addevent/addevent.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { AnnounceWinnerComponent } from './pages/announce-winner/announce-winner.component';
import { DraftsComponent } from './pages/drafts/drafts.component';
import { EditeventComponent } from './pages/editevent/editevent.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { ParticipatedEventsComponent } from './pages/participated-events/participated-events.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublishedComponent } from './pages/published/published.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { WinnersComponent } from './pages/winners/winners.component';

const routes: Routes = [
  {
    path: 'adminhome',
    component: AdminhomeComponent,
    children: [      
      {
        path: 'announceWinner',
        component: AnnounceWinnerComponent,
      },
      {
        path:'published/participants/:id',
        component:ParticipantsComponent       
      },
      {
        path: 'published',
        component: PublishedComponent,
      },
      {
        path: 'addevent',
        component: AddeventComponent,
      },
      {
        path:'editevent/:id',
        component:EditeventComponent
      },
      {
        path:'events',
        component:DraftsComponent
      },
      {
        path: '',
        component: DraftsComponent,
      }
    ],
  },
  {
    path: 'userhome',
    component: UserhomeComponent,
    children: [
      {
        path: 'participatedEvents',
        component: ParticipatedEventsComponent,
      },
      {
        path: 'winners',
        component: WinnersComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'register/:id',
        component: RegisterPageComponent,
      },
      {
        path: '',
        component: EventsComponent,
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'register',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
