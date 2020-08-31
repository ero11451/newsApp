import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { IonhelperService } from 'src/app/helper/ionhelper.service';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-i-register',
  templateUrl: './i-register.page.html',
  styleUrls: ['./i-register.page.scss'],
})
export class IRegisterPage implements OnInit {

  @ViewChild('content') content: Content;

  showBorder = false;
  isSelected: boolean;
  video: string;
  image: string;

  constructor(
     private modalController: ModalController,
     
     ) {}
  ngOnInit() {
  }
  close(){this.modalController.dismiss(); }

  onClick(){}

  getMediaFromFile(isVideo = false) {
    // const options: CameraOptions = {
    //   quality: 60,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //   mediaType: isVideo ? this.camera.MediaType.VIDEO : this.camera.MediaType.PICTURE,
    // };

    // this.camera.getPicture(options).then((imageData) => {
    //   this.isSelected = true;
    //   // tslint:disable-next-line: no-unused-expression
    //   this.content;
    //   this.video = isVideo ? (imageData) : null;
    //   this.image = !isVideo ? 'data:image/jpeg;base64,' + imageData : null;
    //   console.log(this.video);
    // }, (err) => {
    //   console.error(err);
    // });
  }

  checkFileAvilability() {
    return !!(this.image || this.video);
  }

}
