class FizzBuzz {
    constructor(){}

    getString(nb){
        const fizz = nb % 2 === 0
        const buzz = nb % 3 === 0
        if( fizz && buzz){
            return 'FizzBuzz'
        } else if(fizz) {
            return 'Fizz'
        } else if(buzz) {
            return 'Buzz'
        } else {
            return nb
        }
    }

    run(bound){
        for(let i = 1; i <= bound; i++){
            console.log(this.getString(i))
        }
    }
}

module.exports = new FizzBuzz()
