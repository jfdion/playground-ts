import Name from '../api/name';
import User from './../api/user';
import IdentificationUserDto from './../dto/identification-user-dto';
import InexistingDataDto from './../dto/inexisting-data-dto';
import UserDto from './../dto/user-dto';
import FieldMapperFactory, { NameAs } from './../specific-mapper/field-mapper-factory';
import AutoMapper from './auto-mapper';
import BooleanFieldMapper from './field-mapper/boolean-field-mapper';
import NumberFieldMapper from './field-mapper/number-field-mapper';
import StringFieldMapper from './field-mapper/string-field-mapper';
import TimestampFieldMapper from './field-mapper/timestamp-field-mapper';

describe(`An auto mapper`, () => {
    let autoMapper: AutoMapper;
    beforeEach(() => {
        autoMapper = new AutoMapper(
            [
                new StringFieldMapper(),
                new NumberFieldMapper(),
                new TimestampFieldMapper(),
                new BooleanFieldMapper()
            ]
        );
    });

    it(`can instantiate the target DTO with property as object`, () => {
        const user: User = new User(new Name('Lemieux', 'Mario'), 50, false, 'secret', 'aa@aa.ca');
        const dto: UserDto = autoMapper.map(user, UserDto, FieldMapperFactory.createUserFieldMapper(NameAs.OBJECT));

        expect(dto).toEqual({ created: '2019-01-03T00:00:00.000Z', alive: true, email: 'aa@aa.ca', name: { lastName: 'Lemieux', firstName: 'Mario' }, age: 50 });
    });

    it(`can instantiate a subset DTO`, () => {
        const user: User = new User(new Name('Lemieux', 'Mario'), 50, false, 'secret', 'aa@aa.ca');
        const dto: IdentificationUserDto = autoMapper.map(user, IdentificationUserDto, FieldMapperFactory.createUserFieldMapper());

        expect(dto).toEqual({ lastName: 'Lemieux', firstName: 'Mario' });
    });

    it(`can instantiate a partial DTO`, () => {
        const user: User = new User(new Name('Lemieux', 'Mario'), 50, false, 'secret', 'aa@aa.ca');
        const dto: InexistingDataDto = autoMapper.map(user, InexistingDataDto, FieldMapperFactory.createUserFieldMapper());

        expect(dto).toEqual({ lastName: 'Lemieux', firstName: 'Mario', motherMaidenName: undefined, team: undefined });
    });
});