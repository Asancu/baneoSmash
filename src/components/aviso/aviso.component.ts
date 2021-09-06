import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CuerpoComponent } from '../cuerpo/cuerpo.component';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  constructor(private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }


}


