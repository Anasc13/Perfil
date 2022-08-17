export interface Persona {
    id?: number;
    nombre: string;
    apellido: string;
    mail: string;
    position: string;
    ubication: string;
    companyName: string;
    companyImg: string;
    companyUrl: string;
} 

export interface Acerca {
  id?: number;
  about:string;
}
 
export interface Education {
  id?: number;
  school:string;
  title:string;
  img:string;
  career:string;
  score:string;
  start: string;
  end:string;
}

export interface Experience {
  id?: number;
  position:string;
  company:string;
  img:string;
  mode:string;
  start: string;
  end:string;
  timeElapsed:string;
}

export interface Proyectos {
  id?: number;
  img:string;
  name:string;
  description:string;
  start: string;
  end:string;
  link:string;
}

export interface Skills {
  id?: number;
  name:string;
  percentage: string
}
