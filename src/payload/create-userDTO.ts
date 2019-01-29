export class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly token: string;
    readonly salt: string;
    readonly firstname: string;
    readonly lastname: string;
}