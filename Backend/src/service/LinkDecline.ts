export class Service{
    readonly length:number = 4;
    public LinkDecline():string
    {
        const declined = (Math.random() + 1).toString(36).substring(this.length)
        return declined
    }
}