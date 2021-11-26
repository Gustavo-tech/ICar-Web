class CarValidator {

  static validatePlate(text: string): boolean {
    let rgx = new RegExp('[A-Z]{3}[-][0-9]{4}')
    return rgx.test(text)
  }

  static validateDate(yearValue: number): boolean {
    const date = new Date()
    const year = date.getFullYear()

    const minYear = year - 70
    return yearValue >= minYear && yearValue <= year
  }

  static validateKilometers(km: number): boolean {
    return km > 0
  }

  static validatePrice(price: number) {
    const vl = Number.parseInt(price.toString())

    return vl > 1000
  }
}

export default CarValidator
