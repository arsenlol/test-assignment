export class Character {
    id: number
    name: string
    status: 'Alive' | 'Dead' | 'unknown'
    species: string
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    image: string
    url: string
    constructor(data: Character) {
        this.id = data['id']
        this.name = data['name']
        this.status = data['status']
        this.species = data['species']
        this.gender = data['gender']
        this.image = data['image']
        this.url = data['url']
    }
    get price(): number {
        const firstEncoding = getSumOfNumber(this.id) * 115 - 65
        return (getSumOfNumber(firstEncoding) * 75 - 25) / 100
    }
    get sale(): number {
        const saleVar = getSumOfNumber(this.id) * 65 - 17
        switch (true) {
            case saleVar % 6 === 0:
                return 15
            case saleVar % 7 === 0:
                return 20
            case saleVar % 9 === 0:
                return 30
        }
        return 0
    }
    get priceWithDiscount(): number {
        if (!this.sale) return this.price
        return this.price - (this.price * this.sale) / 100
    }
}

function getSumOfNumber(number): number {
    return number
        .toString()
        .split('')
        .map(int => Number(int))
        .reduce((pV, cV) => pV + cV)
}
