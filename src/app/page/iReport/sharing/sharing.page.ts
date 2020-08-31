
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonhelperService } from 'src/app/helper/ionhelper.service';
import { ModalController } from '@ionic/angular';
import { UploadPage } from '../upload/upload.page';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.page.html',
  styleUrls: ['./sharing.page.scss'],
})
export class SharingPage implements OnInit {

  constructor(private modalController: ModalController,private ion: IonhelperService) { }

  ngOnInit() {
  }

  register(){
  }
  post(){
    this.ion.presentModal(UploadPage,'upload')
  }
}
