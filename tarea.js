function cinco(p,n){
    n+=1;
    var sum=p;
    while(n--!=0){
      sum*=10;
    }
    sum+=p;
    sum=Math.pow(sum,2);
    p=0;
    while(sum>0){
      p+=sum%10;
      sum=parseInt(sum/=10);
    }
    return p;
}

/////////////------------------aqui empieza el tres
var con=0;
function tres(cad){
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else{
        res+=c;
      }
      con++;
    }
    return res;
}
const add=(cad)=>{
    //console.log("cadena recursiva "+cad);
    let res='';
    while(con<cad.length){
      let c=cad.charAt(con);
      if(c=='('){
        con++;
        res+=add(cad);
      }else if(c==')'){
        res=volteo(res);
        return res;
      }else{
        res+=c;
      }
      con++;
    }
    return res;

}
function volteo(cad){
  let sum='';
  for(let i=cad.length-1;i>=0;i--){
    let c=cad.charAt(i);
    sum+=c;
  }
  return sum;
}
////////////////////////////////////---------aqui finaliza el tres
function uno(){
  var matrix = [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]];
  var sum=0;
  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      sum+=matrix[i][j];
    }
  }
  return sum;
}
/*function probar(vec,i){
    if(i<vec.length){
      //console.log(i);
      probar(vec,i+1);
      console.log(vec[i]);
    }
}*/

console.log("ejemplo del ejercicio cinco : "+cinco(1,2));
console.log("ejemplo del ejercicio tres : "+tres("foo(bar(baz))blim"));
console.log("ejemplo del ejercicio uno : "+uno());
//probar([1,2,3,4],0);
