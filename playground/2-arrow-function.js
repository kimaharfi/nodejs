const square = function(x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
}

const squareArrowShortReturn = (x) => x * x;//one line

console.log(square(3))
console.log(squareArrow(3))
console.log(squareArrowShortReturn(3))


//************************************ */

const event = {
    name : 'BDay Party',
    guestList: ['Kim','Izik','Mai','Momo'],
    printGuestList() {
        console.log('Guest List for BDay' + this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()