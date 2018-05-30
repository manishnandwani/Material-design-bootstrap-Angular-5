import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// heart=[{one:false},
//        {two:false},
//        {three:false},
//        {four:false},
//        {five:false},
//        {six:true }
//       ];

// heart=[false,false,false,false,false,true]
heart = true;
  heartChange(val){
  
  
      this.heart=!this.heart;
      val = this.heart;
  
   
  }

}
