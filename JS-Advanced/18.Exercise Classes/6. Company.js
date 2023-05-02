class Company{
    constructor(){
        this.deparments=new Map();
    }

    addEmployee(name,salary,position,department){
        if(name==''||salary==''||position==''||department==''){
            throw new Error('Invalid input!');
        }
        if(salary<0){
            throw new Error('Invalid input!')
        }

       let employee={name,salary,position,department};
       
       
       if(!this.deparments.has(department)){
        this.deparments.set(department,[]);
        this.deparments.get(department).push(employee);
       }
       else{
        this.deparments.get(department).push(employee);
       }
       

       return `New employee is hired. Name: ${name}. Position: ${position}`;
    }


    bestDepartment(){
        
        let avgSalary={};

        for(let [key,values] of this.deparments){
            let sum=0;
            if(!avgSalary.hasOwnProperty(key)){
                avgSalary[key]=0;
            }
            for(let value of values){
                sum+=value.salary;
            }
            avgSalary[key]+=(sum/values.length);
        }


        let sortedAvgSalaries=Object.entries(avgSalary).sort((a,b)=>b[1]-a[1]);
        let sortedMap=this.deparments.get(sortedAvgSalaries[0][0]);
        let result='';
        for(let employee of sortedMap){
            result+=(`${employee.name} ${employee.salary} ${employee.position}\n`);
        }


        return `Best Department is: ${sortedAvgSalaries[0][0]}
        Average salary: ${sortedAvgSalaries[0][1].toFixed(2)}
        ${result}
        `;
        
        
        
    }
}

let firstEmployee=new Company();
console.log(firstEmployee.addEmployee('Ivan',1000,'JR','Sales'));
console.log(firstEmployee.addEmployee('Gosho',100000,'JR','Sales'));
console.log(firstEmployee.addEmployee('Stefan',1,'JR','Cleaning'));
console.log(firstEmployee.addEmployee('Jivko',10000,'JR','Programming'));
console.log(firstEmployee.addEmployee('Galin',1000,'JR','Cleaning'));
console.log(firstEmployee.addEmployee('Maria',500,'JR','Marketing'));
console.log(firstEmployee.addEmployee('QVOR',5000,'JR','Sales'));
console.log(firstEmployee.bestDepartment());