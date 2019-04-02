import IdentificationUserDto from "./identification-user-dto";

export default class UserDto {
    readonly name: IdentificationUserDto = { firstName: '', lastName: '' };
    readonly age: number = 0;
    readonly alive: boolean = false;
    readonly email: string = '';
    readonly created: string = '';
}