/*que 1 */
function demo(callback)
    {
    
    let a=20 ,b=10;
    console.log(a)
    callback(a,b);
    
    }
    function  sum(var1,var2)
    {    
        console.log(var1+var2)
    }

    demo(sum);
/*que 2 */    

/* que 3 */
function demo(num)
{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log(num);
            reslove();
        },num*1000)
    })
}
let pro = Promise.resolve();

for(let i=1;i<=7;i++)
{
    pro=pro.then(()=>demo(i));
}

/*que 4 */
let args="yes"        
            var prom =  new Promise (function(res,rej){
            if (args){
                res("Promise Resolved")
            }
            else{
                rej("Promise Rejected")
            }
        })
        prom.then(function(result){
        console.log(result) 
        })
        .catch((error)=>{
        console.log(error)
        })

/*que 5 */
function demo(sample)
    {
        console.log("hello");
        sample_fun();
    }
function sample_fun()
    {
        console.log("Welcome");
    }
    demo(sample_fun);

/* que 6 */
function fun1(call){
    console.log('1');
    call();
}
function fun2(call)
{
    console.log('2')
    call();
}
function fun3(call)
{
    console.log('3')
    call();
}
function fun4()
{
    console.log('4')
   
}
//call back hell
fun1(()=>{
    fun2(()=>{
        fun3(()=>{
            fun4()
        })
    })
})

/* que 7 */
var demo = new Promise((res,rej) => {
    let a=20,b=10;
    if (a==b)
    {
        res("resolved")
    }
    else{
        rej("rejected")
    }
})
demo.then((result)=>
{
    console.log(result)
})
.catch((error)=>
{
    console.log(error)
})
    
/* que 8 */
let prot = new Promise ((res,rej)=>{
    setTimeout(function(){
        resolve("promise resolved ")
    },4000);
});
async function xyz(){
    let result = await promise;
    console.log(result);
    console.log("welcome")
}
xyz();

/* que 9 */
const getuserData =() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1)
        },1000)
    })
}
const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },2000)
    })
}
const getnewData =() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(3)
        },500)
    })
}
Promise.all([getuserData(),getData(),getnewData()]).then(([para1,para2,para3])=>{
    console.log(`${para1} ${para2} ${para3}`)
})
.catch(error=>{
    console.log(error)
})
            
