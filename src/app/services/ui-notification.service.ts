import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UiNotification } from '../models/ui-notification';

@Injectable({
  providedIn: 'root'
})
export class UiNotificationService {

  notification$ = new BehaviorSubject<UiNotification | undefined>(undefined)

  constructor() { }

  emit(notification: UiNotification) {
    this.notification$.next(notification)
  }

  
}
