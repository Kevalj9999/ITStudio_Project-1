function combine(n1:number | string | boolean, n2:number | string | boolean )
{
    if(typeof(n1)=== "number" && typeof(n2)==="number" )
    {
        return n1+n2;
    }
    else
    {
        return n1.toString() + n2.toString();
    }
}

const num1=5;
const num2=7;
const result = combine(num1,num2);

console.log(result);