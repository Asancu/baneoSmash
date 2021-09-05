import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvisoComponent } from '../aviso/aviso.component';
import { ProcedimientoComponent } from '../procedimiento/procedimiento.component';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  public duracionEnSegundos:number;
  public player:string;
  public contadorBans:number;
  public isBaneadosTurno1:boolean;
  public isBaneadosTurno2:boolean;

  public isBanBattlefield:boolean;
  public isBanDestinoFinal:boolean;
  public isBanEstadioPokemon2:boolean;
  public isBanKalos:boolean;
  public isBanPuebloSmash:boolean;
  public isBanSistemaLylat:boolean;
  public isBanSmallBattlefield:boolean;
  public isBanTownAndCity:boolean;
  public isBanYoshiStory:boolean;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.duracionEnSegundos = 5;
    this.player = "Jugador 1";
    this.contadorBans = 3;
    this.isBaneadosTurno1 = true;
    this.isBaneadosTurno2 = false;    
    this.isBanBattlefield = false;
    this.isBanDestinoFinal = false;
    this.isBanEstadioPokemon2 = false;
    this.isBanKalos = false;
    this.isBanPuebloSmash = false;
    this.isBanSistemaLylat = false;
    this.isBanSmallBattlefield = false;
    this.isBanTownAndCity = false;
    this.isBanYoshiStory = false;
  }

  ngOnInit(): void {

  }

  public contador() {
    console.log(this.contadorBans);
    // J1 banea
    this.contadorBans -= 1;

    //J2 banea
    if (this.contadorBans === 0 && this.isBaneadosTurno1) {
      this.player = "Jugador 2";
      this.contadorBans = 4;
      this.isBaneadosTurno2 = true;
      this.isBaneadosTurno1 = false;
    }

    //J1 banea de vuelta
    if (this.contadorBans === 0 && this.isBaneadosTurno2) {
      this.player = "Jugador 1";
      this.contadorBans = 1;
      this.contadorBans =- 1;
    }

  }

  public banStageBattlefield() {
    this.isBanBattlefield = !this.isBanBattlefield;
  }
  
  public banStageDestinoFinal() {
    this.isBanDestinoFinal = !this.isBanDestinoFinal;
  }

  
  public banStageEstadioPokemon2() {
    this.isBanEstadioPokemon2 = !this.isBanEstadioPokemon2;
  }
  
  public banStageKalos() {
    this.isBanKalos = !this.isBanKalos;
  }
  
  public banStagePuebloSmash() {
    this.isBanPuebloSmash = !this.isBanPuebloSmash;
  }
  
  public banStageSistemaLylat() {
    this.isBanSistemaLylat = !this.isBanSistemaLylat;
  }
  
  public banStageSmallBattlefield() {
    this.isBanSmallBattlefield = !this.isBanSmallBattlefield;
  }
  
  public banStageTownAndCity() {
    this.isBanTownAndCity = !this.isBanTownAndCity;
  }

  public banStageYoshiStory() {
    this.isBanYoshiStory = !this.isBanYoshiStory;
  }

  public reiniciarTodo() {
    this.player = "Jugador 1";
    this.contadorBans = 3;
    this.isBaneadosTurno1 = true;
    this.isBaneadosTurno2 = false;
    this.isBanBattlefield = false;
    this.isBanDestinoFinal = false;
    this.isBanEstadioPokemon2 = false;
    this.isBanKalos = false;
    this.isBanPuebloSmash = false;
    this.isBanSistemaLylat = false;
    this.isBanSmallBattlefield = false;
    this.isBanTownAndCity = false;
    this.isBanYoshiStory = false;

    this._snackBar.openFromComponent(AvisoComponent, {
      duration : this.duracionEnSegundos * 1000,
    });
  
  }
  
  public abrirProcedimiento() {
    const imagenRuleSet = this.dialog.open(ProcedimientoComponent);
  }
}
