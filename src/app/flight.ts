export interface Flight {
    id?: bigint;
    flightName: string;
    flightSource: string;
    flightDestination: string;
    flightClassType: string;
    flightTotalSeats: bigint;
    flightTicketPrice: DoubleRange;
}
