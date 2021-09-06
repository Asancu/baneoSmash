import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvisoComponent } from '../aviso/aviso.component';
import { ProcedimientoComponent } from '../procedimiento/procedimiento.component';
import { Stage } from '../app/models/stage.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})

export class CuerpoComponent implements OnInit {
  public jugador:string;
  public contador:number;
  public contador2:number;

  public duracionEnSegundos:number;

  public listaStages:Stage[];
  public direccionImagenes:string;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.jugador = "Jugador 1" // El primero en banear... pues sería el primer jugador

    this.contador = 3; // Primer ban. ¿Cuántos banea el Jugador 1?
    this.contador2 = 4+1; // Segundo ban. ¿Cuántos banea el Jugador 2?

    this.duracionEnSegundos = 5;
    
    this.direccionImagenes = "assets/img/escenarios/";
    this.listaStages = [
      {
        id : 0,
        nombre : "Campo de Batalla",
        archivoImg : `${this.direccionImagenes}battlefield.png`,
        isBan : false
      },

      {
        id : 1,
        nombre : "Destino Final",
        archivoImg : `${this.direccionImagenes}destinoFinal.png`,
        isBan : false
      },

      {
        id : 2,
        nombre : "Estadio Pokémon 2",
        archivoImg : `${this.direccionImagenes}estadioPokemon2.jpg`,
        isBan : false
      },

      {
        id : 3,
        nombre : "Liga Pokémon de Kalos",
        archivoImg : `${this.direccionImagenes}kalos.jpg`,
        isBan : false
      },

      {
        id : 4,
        nombre : "Pueblo Smash",
        archivoImg : `${this.direccionImagenes}puebloSmash.jpg`,
        isBan : false
      },

      {
        id : 5,
        nombre : "Sistema Lylat",
        archivoImg : `${this.direccionImagenes}sistemaLylat.jpg`,
        isBan : false
      },

      { 
        id : 6,
        nombre : "Pequeño Campo de Batalla",
        archivoImg : `${this.direccionImagenes}smallBattlefield.jpg`,
        isBan : false
      },

      {
        id : 7,
        nombre: "Sobrevolando el Pueblo",
        archivoImg : `${this.direccionImagenes}townAndCity.png`,
        isBan : false
      },

      {
        id : 8,
        nombre : "Yoshi's Story",
        archivoImg : `${this.direccionImagenes}yoshiStory.jpg`,
        isBan : false
      }
    ]
  }

  ngOnInit(): void {
  }

  /**
   * Contador que empieza a partir de un determinado valor hacia abajo. Al llegar a 0, se inicia otro contador, 
   * y va cambiando el atributo ``this.jugador`` en función de determinadas condiciones.
   */
  public cuentaAtras() {
    this.contador -= 1;
    if (this.contador <= 0) {
      this.jugador = "Jugador 2"
      this.contador2 -= 1;
    }
    if (this.contador <= 0 && this.contador2 <= 0) {
      this.jugador = "Jugador 1";
    }
  }

  /**
   * Método que permite banear un escenario a elegir al pinchar en él. Se puede alternar entre ban o no ban.
   * @param id Identificador de tipo number. Se recibe este parámetro en función del escenario que se escoja.
   */
  public banearStage(id:number):void {
    this.listaStages[id].isBan = !this.listaStages[id].isBan;
  }


  /**
   * Método que recoge en una variable escenarios baneados.
   * @returns Devuelve true si TODOS los escenarios están baneados.
   */
  public todoIsBan():boolean {
    let todoBaneado = this.listaStages.map(a => a.isBan);
    return new Set(todoBaneado).size === 1;
  }

  /**
   * Método que devuelve todos los atributos a sus valores definidos en el constructor y asigna el valor ``false``
   * a la propiedad ``isBan`` de cada escenario.
   * 
   * También abre un snackbar avisando al usuario final del reinicio. Esta notificación dura lo que se haya asignado en el atributo
   * ``this.duracionEnSegundos`` multiplicado por 1000 (el valor de la propiedad ``duration`` del snackbar está en milisegundos).
   * 
   * El snackbar abre la página de AvisoComponent.
   * 
   * Snackbar es un componente de Angular Material.
   */
  public reiniciarTodo():void {
    this.contador = 3;
    this.contador2 = 4+1;
    for (let escenario of this.listaStages) {
      escenario.isBan = false;
    }

    this._snackBar.openFromComponent(AvisoComponent, {
      duration : this.duracionEnSegundos * 1000,
    });
  }

  /**
   * Método que abre la página de ProcedimientoComponent en una ventana gracias al componente MatDialog, de Angular Material.
   * Abre la imagen que explica el procedimiento de los bans.
   */
  public abrirProcedimiento():void {
    const imagenRuleSet = this.dialog.open(ProcedimientoComponent);
  }
} 
