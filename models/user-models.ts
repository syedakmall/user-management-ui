export class CreateUserDto {
    firstName!: string;
    lastName!: string;
    emailId!: string;
    constructor() {

    }
}

export class UserDto {
    userId!: number
    firstName!: string;
    lastName!: string;
    emailId!: string;
    constructor() {

    }
}

export class DeleteUserDto {
    deleted!: boolean;
    id!: number;
    constructor() {}
}

export class Users {
    users!: UserDto[];
    constructor() {

    }
}


