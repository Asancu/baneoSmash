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

  public availableStages : any[];

  private initialAvailableStages = [
    { id: "BF", name: "Battlefield", banned: false, image: "assets/img/escenarios/battlefield.png" },
    { id: "DF", name: "Destino Final", banned: false, image: "assets/img/escenarios/destinoFinal.png" },
    { id: "PS2", name: "Estadio Pokémon 2", banned: false, image: "assets/img/escenarios/estadioPokemon2.jpg" },
    { id: "KL", name: "Kalos", banned: false, image: "assets/img/escenarios/kalos.jpg" },
    { id: "PB", name: "Pueblo Smash", banned: false, image: "assets/img/escenarios/puebloSmash.jpg" },
    { id: "SL", name: "Sistema Lylat", banned: false, image: "assets/img/escenarios/sistemaLylat.jpg" },
    { id: "SB", name: "Pequeño Campo de Batalla", banned: false, image: "assets/img/escenarios/smallBattlefield.jpg" },
    { id: "TC", name: "Sobrevolando el Pueblo", banned: false, image: "assets/img/escenarios/townAndCity.png" },
    { id: "YS", name: "Yoshi's Story", banned: false, image: "assets/img/escenarios/yoshiStory.jpg" }
  ];

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
    // Copy initial stages.
    this.availableStages = this.initialAvailableStages.map(stage => { 
      return { ...stage } 
    });

    this.duracionEnSegundos = 5;
    this.player = "Jugador 1";
    this.contadorBans = 3;
    this.isBaneadosTurno1 = true;
    this.isBaneadosTurno2 = false;    
  }

  ngOnInit(): void {

  }

  public getAvailableStages() {
    return this.availableStages.filter(stage => stage["banned"] === false);
  }

  public banStage(stageId : string) {
    const availableStages = this.getAvailableStages().length;
    if (availableStages < 2) {
      return;
    }
    const stage = this.availableStages.find(stage => stage.id === stageId);
    stage.banned = true;
  }

  public getBanStateMessage() : string {
    const availableStages = this.getAvailableStages().length;
    let message : string;

    if (availableStages > 6) {
      message = `Jugador 1, te quedan ${availableStages - 6} escenarios.`;
    } else if (availableStages > 2) {
      message = `Jugador 2, te quedan ${availableStages - 2} escenarios.`;
    } else if (availableStages === 2) {
      message = "Jugador 1, banea 1 escenario.";
    } else {
      message = "Escenario decidido.";
    }

    return message;
  }

  public restart() {
    this.player = "Jugador 1";
    this.contadorBans = 3;
    this.isBaneadosTurno1 = true;
    this.isBaneadosTurno2 = false;

    console.log(this.initialAvailableStages),

    this.availableStages = this.initialAvailableStages.map(stage => { 
      return { ...stage } 
    });

    this._snackBar.openFromComponent(AvisoComponent, {
      duration : this.duracionEnSegundos * 1000,
    });
  
  }
  
  public abrirProcedimiento() {
    const imagenRuleSet = this.dialog.open(ProcedimientoComponent);
  }
}
