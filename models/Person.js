class Person{
    constructor(
        {first_name,
        sourname,
        age,
        dayOfBirth}
    ){
        this.first_name=first_name;
        this.sourname=sourname;
        this.dayOfBirth=dayOfBirth;
        this.age=age;
    }

    set_name(first_name){
        this.first_name=first_name;
    }

    get_first_name(){
        return this.first_name;
    }

}
module.exports=Person;