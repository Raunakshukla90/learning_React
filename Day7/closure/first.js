//About Closure Learning

function greet(){
    let a=20;
    console.log(a);
    function meet(){
        console.log(a);
    }
    return meet;
}
   const num =greet();
   num();
