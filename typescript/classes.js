var Employee1 = /** @class */ (function () {
    function Employee1(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Employee1.prototype.getMname = function () {
        return this.mname;
    };
    return Employee1;
}());
var e1 = new Employee1('a', 'b', 'c');
console.log(e1.getMname());
var Employeee = /** @class */ (function () {
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }
    function Employeee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employeee.prototype.getEmpno = function () {
        return this.empno;
    };
    Employeee.prototype.getEname = function () {
        return this.ename;
    };
    Employeee.prototype.getSal = function () {
        return this.sal;
    };
    Employeee.prototype.getAttendance = function () {
        return this.attendance;
    };
    Employeee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employeee;
}());
var emp1 = new Employeee(111, "Raniya", 30000, 30);
var emp2 = new Employeee(222, "Aneeta", 34000, 20);
var emp3 = new Employeee(333, "Christopher", 400000, 80);
emp1.empno = 102;
emp2.empno = 103;
emp1.print();
emp2.print();
emp3.print();

