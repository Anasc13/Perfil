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

export interface Banner {
      backImage: string;
      profileImage: string
    }

export interface Acerca {
  about:string;
}
 
export interface Education {
  school:string;
  title:string;
  img:string;
  career:string;
  score:string;
  start:string;
  end:string;
}

export interface Experience {
  position:string;
  company:string;
  img:string;
  mode:string;
  star:string;
  end:string;
  timeElapsed:string;
}

export interface Proyectos {
  img:string;
  name:string;
  description:string;
  start:string;
  finish:string;
  link:string;
}

export interface Skills {
  name:string;
  img:string;
}