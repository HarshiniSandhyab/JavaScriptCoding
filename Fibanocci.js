function fibannoci(number)
//0 1 1 2 3 5
{
     let a=0;
      let b=1;
      let c=0;
      console.log(a)
      console.log(b)
      
    while(number>2)
    {
        c=a+b;
        console.log(c);
        a=b
        b=c
        number--;
    }
   
}
    let num=5;
    console.log(fibannoci(num))