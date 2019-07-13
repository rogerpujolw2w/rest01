export class strerror {

  mensaje: string;
  titulo: string;
  eserror: boolean;
  salir: boolean;

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

export class transportout {

  obj: object;
  labels: string;
  err: strerror;

  constructor() {
  }
}

