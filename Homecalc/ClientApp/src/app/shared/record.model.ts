export class Record {
    id: number = 0;
    year: number = new Date().getFullYear();
    month: number = new Date().getMonth();
    electricityCount: number = 0;
    electricityPrice: number = 0;
    waterHotCount: number = 0;
    waterHotPrice: number = 0;
    waterHotDrainageCount: number = 0;
    waterHotDrinagePrice: number = 0;
    waterColdCount: number = 0;
    waterColdPrice: number = 0;
    heatingPrice: number = 0;
    intercomSysPrice: number = 0;
    osbb: number = 0;
    trashDeliver: number = 0;
    triolan: number = 0;
    address: string = "";
}
