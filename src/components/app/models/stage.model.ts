export class Stage {
    public id:number;
    public nombre:string;
    public archivoImg:string;
    public isBan:boolean;

    constructor(id:number, nombre:string, archivoImg:string, isBan:boolean) {
        this.id = id;
        this.nombre = nombre;
        this.archivoImg = archivoImg;
        this.isBan = isBan;
    }
}