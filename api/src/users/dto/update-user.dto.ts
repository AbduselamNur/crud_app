import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // PartialType() will make all the fields optional
    // but we can override that by making some fields required
    // e.g. username: string;
    // email: string;
    // password: string;
    // firstName: string;
    // lastName: string;
    

}
