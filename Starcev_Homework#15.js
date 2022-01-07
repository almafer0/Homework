function Workers () {
    if (!new.target) {
        return new Workers();
    }
    this.fullName = '';
    this.age = 0;
    this.position = '';
    this.salary = 0;
    this.comment = '';
}

let storeAdmin = Workers();
storeAdmin.fullName = 'Зенаида Петровна Хуст';
storeAdmin.age = 62;
storeAdmin.position = 'Администратор';
storeAdmin.salary = 15000;
storeAdmin.comment = 'Бившый десантник, принимала участие в военом перевороте в Уганде, Сомали.';

console.log(storeAdmin);