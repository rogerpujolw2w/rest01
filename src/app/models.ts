export class transportout {

  obj: object;
  labels: string;
  err: strerror;

  constructor() {
  }
}

export class strDato {

  datoI: number;
  datoD: number;
  datoB: boolean;
  datoS: string;
  Err: strerror;

  constructor() {
  }
}

export class strDatoS {

  datoI: number;
  datoD: number;
  datoB: boolean;
  datoS1: string;
  datoS2: string;
  datoS3: string;
  datoS4: string;
  datoS5: string;
  Err: strerror;

  constructor() {
  }
}

export class sesionIniciada {

  Nom: string;
  Emp: string;
  RefNeg: string;
  EsGlo: boolean;
  ID_MenuSel: number;
  ID_Idi: number;

  menuGaolos: contenedorMenuLateral;
  MenuUsuario: contenedormenusUsuario
  MenuEmpresas: contenedormenuEmpresas
  MenuUsuarioOpciones: contenedormenuusuarioOpciones

  constructor() {
  }
}

export class transportin {

  parameters: param;
  obj: object;

  constructor() {
  }
}

export class param {

  NIC: String;

  constructor() {
  }
}

export class Idioma {

  id: number;
  Alias: string;
  Mensaje: string;

  constructor() {
  }
}

export class contenedormenuEmpresas {

  _menus: menuEmpresa[];
  num: string;
  Err: strerror;

  constructor() {
  }
}

export class menuEmpresa {

  RefNeg: string;
  Neg: string;
  EsGlo: Boolean;

  constructor() {
  }
}

export class contenedormenuusuarioOpciones {

  _menus: menuusuarioOpciones[];
  num: number;
  Err: strerror;

  constructor() {
  }
}

export class menuusuarioOpciones {

  Opcion: string;
  link: string;

  constructor() {
  }
}

export class contenedormenusUsuario {

  _menus: menusUsuario[];
  num: number;
  Err: strerror;

  constructor() {
  }
}

export class menusUsuario {

  id: number;
  titulo: string;
  expo: string;

  constructor() {
  }
}

export class menusCounter {

  id: string;
  val: string;
  clas: string;

  constructor() {
  }
}

export class contenedorMenuLateral {

  Deco: string;
  ID_MenuSel: number;
  MenuSel: string;
  MenuSelExpo: string;
  _menus: menuLateral[];
  num: number;

  _menusg: menuLateral[];
  numg: number;

  Err: strerror;

  constructor() {
  }
}

export class menuLateral {

  id: number;
  titulo: string;
  url: string;
  ico: string;
  _menudetalle: menuLateralDetalle[];
  num: number;
  orden: number;
  col: boolean;

  constructor() {
  }
}

export class menuLateralDetalle {

  id: number;
  subTitulo: string;
  contador: string;
  action: string;
  ocultar: boolean;

  constructor() {
  }
}

export class strerror {

  mensaje: string;
  titulo: string;
  eserror: boolean;
  salir: boolean;

  constructor() {
  }
}




