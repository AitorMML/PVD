export class Usuario {
    //clase para manipular en servicio usuario

    constructor(

        //base de datos
        public expediente: number,
        public nombre: string,
        public email: string,
        public contrasena: string,
        public activo: boolean,
        
        //sesión actual
        public token: string,
        public esAdmin: boolean
    ) {}
}
