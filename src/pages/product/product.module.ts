import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPage } from './product';
import { ChatbotComponent } from '../../components/chatbot/chatbot';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    ProductPage,
    ChatbotComponent
  ],
  imports: [
    IonicPageModule.forChild(ProductPage),
    NgxBarcodeModule
  ],
})
export class ProductPageModule { }
