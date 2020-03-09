const Person=require('../models/Person')

describe('Testing class Person',()=>{
    const first_name = 'name1';
    const sourname = 'sourname1';
    const age=44;
    const dayOfBirth='06-03-1999';
    const person1 = new Person ({first_name,sourname,dayOfBirth,age});

    it('Person class has name, sourname, age and dayOfBrith properly',()=>{
        expect(person1.first_name).toEqual(first_name);
        expect(person1.sourname).toEqual(sourname);
        expect(person1.age).toEqual(age);
        expect(person1.dayOfBirth).toEqual(dayOfBirth);
        expect(person1).toEqual(person1);
    })

    it('Test of method set_first_name',()=>{
        const first_name_2='dotdot1';
        person1.set_name(first_name_2);
        expect(person1.first_name).toEqual(first_name_2);
    })
    
    it('Test of method get_first_name',()=>{
        const a1=person1.get_first_name();
        expect(person1.get_first_name()).toEqual(a1);
    })
})