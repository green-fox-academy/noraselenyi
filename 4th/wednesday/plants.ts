class Plant {
    protected waterlevel: number;
    protected criticalWaterLevel: number;
    protected absorb:number;

    public needWatering():boolean {
        return this.waterlevel < this.criticalWaterLevel;
    }

    public water(amount:number): void{
        this.waterlevel += amount * this.absorb;
    }

    
}

export {Plant};