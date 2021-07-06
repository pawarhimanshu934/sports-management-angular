import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import { TeamService } from 'src/app/services/team.service';
import { TeamDetailsPayload } from '../../Model/teamDetailsPayload';
import { EventResponsePayload } from '../../Model/eventResponsePayload';
import { UserRegistered } from '../../Model/userRegistered';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  type: string;
  name: string;
  constructor(
    private teamService: TeamService,
    private eventService: EventService,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.type = this.router.getCurrentNavigation().extras.state.type;
    this.name = this.router.getCurrentNavigation().extras.state.name;
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  registeredTeams: TeamDetailsPayload[];
  registeredUsers: UserRegistered[];
  event: EventResponsePayload;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      let pid = +res.get('id');
      if (this.type === 'TEAM') {
        this.handleGetTeamsByEventID(pid);
      } else {
        this.handleGetUserByEventId(pid);
      }
    });
  }

  handleGetEventById(id: number) {
    this.eventService.getEventById(id).subscribe(
      (getRes) => {
        this.event = getRes;
      },
      (error) => {
        this.toast.error('Problem Occured to get Event details by ID');
        console.log(error);
      }
    );
  }

  handleGetTeamsByEventID(id: number) {
    this.teamService.geTeamsByEventId(id).subscribe(
      (res) => {
        this.registeredTeams = res;
      },
      (error) => {
        this.toast.error('Problem occured to get Registered Teams By ID');
        console.log(error);
      }
    );
  }

  handleGetUserByEventId(id: number) {
    this.eventService.getUsersRegisteredInEvent(id).subscribe(
      (res) => {
        this.registeredUsers = res;
      },
      (error) => {
        this.toast.error('Problem occured to get Registered Users By ID');
        console.log(error);
      }
    );
  }
}