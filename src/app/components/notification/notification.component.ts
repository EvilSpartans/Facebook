import { Component } from '@angular/core';
import { UiNotification } from 'src/app/models/ui-notification';
import { UiNotificationService } from 'src/app/services/ui-notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  notifications: UiNotification[] = []

  constructor(
    private UiNotificationService: UiNotificationService
  ) { }

  ngOnInit() {
    this.UiNotificationService.notification$.subscribe({
      next: (notification: UiNotification | undefined) => {
        if (notification) {
          this.notifications.push(notification)
          const self: any = this
          setTimeout(() => self.removeNotification(notification), notification.timeout)
        }
      }
    })
  }

  removeNotification(notification: UiNotification) {
    this.notifications = this.notifications.filter((notif: UiNotification) => notif._id !== notification._id)
  }

}
