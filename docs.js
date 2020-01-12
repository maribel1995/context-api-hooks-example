// /* eslint-disable indent */
/* eslint-disable no-unused-vars */
const search = {
  states: {},
  filhos: [
    {
      seatMap: {
        states: {
          seats: ['Seat']
        },
        filhos: [
          {
            seat: {
              useStates: {
                seatmap: 'quando um Seat for alterado, é preciso atualizar a lista de seats pois o <seus-assentos> utliza o estado de cada Seat'
              }
            }
          }
        ]
      }
    }
  ]
}

const use = [
  {
    trips: {
      states: [this.seat]
    }
  },
  {
    seat: {
      states: [
        { selected: Boolean }, { free: Boolean }, { occupied: Boolean }
      ]
    }
  },
  {
    seats: {
      states: [this.seat]
    }
  }
]
