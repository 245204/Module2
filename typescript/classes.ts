class Employee1{
    private fname:string;
    private mname!:string;
    private lname:string;

    constructor(fname:string,mname:string,lname:string){

        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
    }

    getMname():string{
        return this.mname;
    }
}
let e1=new Employee1('a','b','c');
console.log(e1.getMname());













class Employeee
{
    private readonly empno:number;
    private ename:string;
    private sal:number;
    private attendance:any;

    public getEmpno():number{
        return this.empno;
    }
    public getEname():string{
        return this.ename;
    }
    public getSal():number{
        return this.sal;
    }
    public getAttendance(){
        return this.attendance;
    }

    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    
    // }

    constructor(empno:number,ename:string,sal:number,attendance:any){
        this.empno=empno;
        this.ename= ename;
        this.sal=sal;
        this.attendance=attendance;
    
    }
    print():void{
        console.log(this.empno,this.ename,this.sal,this.attendance);
        
    }
   
}
let emp1=new Employeee(111,"Raniya",30000,30);
let emp2=new Employeee(222,"Aneeta",34000,20);
let emp3=new Employeee(333,"Christopher",400000,80);
emp1.empno=102;
emp2.empno=103;

emp1.print();
emp2.print();
emp3.print();

var emparray:Employee[]=[emp1,emp2,emp3];

emparray.forEach(em=>{
    console.log(em);

});




