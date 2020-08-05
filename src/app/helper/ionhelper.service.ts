import { Injectable } from '@angular/core';
import { 
    ModalController,
    AlertController, 
    LoadingController, 
    PickerController, 
    ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonhelperService {

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private pickerController: PickerController,
    private toastController: ToastController
    ) { }

  async ionModal(pages,props) {
    const modal = await this.modalController.create({
    component: pages,
    componentProps: props
    });
  
    await modal.present();
  }
  async ionAlert(header,subHeader, message,) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  async ionLoading(message,duration) {
    const loading = await this.loadingController.create({
      message: message,
      duration:duration,
      spinner: 'circles'
    });
    await loading.present();
  }

  async presentPicker() {
    const picker = await this.pickerController.create({
    animated: true,
    buttons: [{
      text: 'Save',
      handler: () => console.log('Clicked Save!')
    }, {
      text: 'Log',
      handler: (val) => {
        console.log('Clicked Log. Do not Dismiss.', val);
        return false;
      }
    }],
    columns: [
      {
        name: 'hours',
        prefix: 'total',
        suffix: 'hours',
        options: [
          {
            text: '1',
            value: '01'
          },
          {
            text: '2',
            value: '02'
          }
        ]
      }
    ],
    cssClass: 'picker-hours',
    mode: 'ios',
    });
    picker.present();
  }
  async ionToast(message, duration, color) {
    const toast = await this.toastController.create({ message, duration, color});
    toast.present();
  }
}
