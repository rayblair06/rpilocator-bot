export interface EmailClient {
    host:string,
    port:number,
    user:string,
    pass:string,
}

export interface EmailAddressObject {
    toName:string,
    toAddress:string,
    toSubject:string,
    fromName:string,
    fromAddress:string,
}
