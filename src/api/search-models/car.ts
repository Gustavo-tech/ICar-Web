class CarSearchModel {
  public maker?: string | null;
  public model?: string | null;
  public minPrice?: number | null;
  public maxPrice?: number | null;
  public maxKilometers?: number | null;

  constructor() {
    this.maker = null
    this.model = null
    this.minPrice = null
    this.maxPrice = null
    this.maxKilometers = null
  }
}

export default CarSearchModel;
