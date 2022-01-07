class Workers {
    constructor(fullName,age,position,salary,comment){
    this.fullName = fullName || '';
    this.age = age || 0;
    this.position = position || '';
    this.salary = salary || 0;
    this.comment = comment || '';
    }
}

const WORKER_ADMIN = new Workers('Зенаида Петровна Хуст',62,'Администратор',15000,'Бившый десантник, принимала участие в военом перевороте в Уганде, Сомали.')
const WORKER_SALESMAN = new Workers()

console.log(WORKER_ADMIN);
console.log(WORKER_SALESMAN);