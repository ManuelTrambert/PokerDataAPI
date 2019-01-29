export class CreateTournamentDto {
    readonly price: number;
    readonly difference: number;
    readonly type: string;
    readonly pos: number;
    readonly nbPlayers: number;
    readonly userId: number;
}