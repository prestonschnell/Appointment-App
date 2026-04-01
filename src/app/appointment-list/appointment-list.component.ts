import { Component } from '@angular/core';
import {Appointment} from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

newAppointmentTitle: string = "";
newAppointmentDate: Date = new Date();
appointments: Appointment[] = [];

addAppointment() {
  if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) { // Basically, we're checking if the user has entered anything at all, then assigning the value of the entered information to match what we have in our model, and then pushing it to the array of appointments.
    let newAppoint: Appointment = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }

    this.appointments.push(newAppoint);
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();
  }
}

deleteAppointment(index: number) {
  this.appointments.splice(index, 1);
}

}
