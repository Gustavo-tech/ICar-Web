class CarSearchModel {
  public maker?: string | null;
  public model?: string | null;
  public minPrice?: number | null;
  public maxPrice?: number | null;
  public maxKilometers?: number | null;

  public constructor() {
    this.maker = null
    this.model = null
    this.minPrice = null
    this.maxPrice = null
    this.maxKilometers = null
  }

  public clone(obj: CarSearchModel): CarSearchModel {
    let newModel: CarSearchModel = new CarSearchModel()

    newModel.maker = obj.maker
    newModel.model = obj.model
    newModel.minPrice = obj.minPrice
    newModel.maxPrice = obj.maxPrice
    newModel.maxKilometers = obj.maxKilometers

    return newModel
  }
}

export default CarSearchModel;
