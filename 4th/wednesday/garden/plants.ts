class Plant {
    protected waterlevel: number;
    protected criticalWaterLevel: number;
    protected absorb:number;
    protected color: string;
    protected name: string;
    
    public constructor(
        pCriticalWaterLevel: number, 
        pAbsorb: number, 
        pColor: string,
        pName: string){
        this.waterlevel = 0;
        this.criticalWaterLevel = pCriticalWaterLevel;
        this.absorb = pAbsorb;
        this.color = pColor;
        this.name = pName;
    }

    public needWatering():boolean {
        return this.waterlevel < this.criticalWaterLevel;
    }

    public water(amount:number): void{
        this.waterlevel += amount * this.absorb;
    }

    public currentStatus(): void{
        const elements: String[] = [
            'The',
            this.color,
            this.name,
            this.needWatering() === true ? 'needs' : 'doesnt need',
            'water'
        ];
        console.log(elements.join(' '));
    }
    
}

export {Plant};