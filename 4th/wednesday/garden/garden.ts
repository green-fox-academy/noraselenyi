import { Plant } from './plants';


class Garden{
    private plants: Plant[] = [];

    public addPlant(newPlant: Plant): void{
        this.plants.push(newPlant);
    }

    public waterAllPlants(amount: number): void {
        //count all the thirsty plants
        const thirstyCounter: number = this.plants.filter(          //arrayel tér vissza
            onePlant => onePlant.needWatering()
        ).length;                              

        //divide the water amount equally
        const currentWaterAmount = amount/(thirstyCounter) || 1;      // ha 0 jönne ki, akkor 1

        this.plants.forEach((onePlant: Plant) => {
            if (onePlant.needWatering()){
                onePlant.water(currentWaterAmount);
            }
        });
        //water plants
    }

    public printStatus(): void{
        this.plants.forEach(
            (oneplant: Plant) => oneplant.printStatus()
        )};
}

export {Garden};


/*
const x = function (a,b) {return a+b}
x(6,7)

const y = (a+b) => a+b;
const z = 



*/