export class Persona {
    backImage:string
    profileImage:string
    nombre:string
    apellido:string
    mail:string
    postition:string
    ubication:string
    companyName:string
    companyImg:string
    companyUrl:string
    
    constructor(
        backImage:string = "" ,
        profileImage:string = "" ,
        nombre:string = "" , 
        apellido:string = "", 
        mail: string = "",
        postition:string = "",
        ubication:string = "",
        companyName:string = "",
        companyImg:string = "",
        companyUrl:string = "")
        {
        this.backImage = backImage
        this.profileImage = profileImage
        this.nombre = nombre
        this.apellido = apellido
        this.mail = mail
        this.postition = postition
        this.ubication = ubication
        this.companyName = companyName
        this.companyImg = companyImg
        this.companyUrl = companyUrl   
    }

    }

 