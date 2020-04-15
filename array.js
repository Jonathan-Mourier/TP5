/*function abs(numbers){
    let abs=numbers.map(
        function(number){
            return Math.abs(number);
        }
    );
    return abs;
}
*/

function abs(numbers){
    let abs=numbers.map((n)=>Math.abs(n));
    return abs;
}

function evenOnly(numbers){
    let evens=numbers.filter((n)=>n%2==0  );
    return evens;
}

function sum(numbers){
    let sum=0;
    numbers.forEach(
        function(number){
            sum+=number
        }
    );
    return sum;
}

function flatten2D(array){
    let tab=[];
    array.forEach(
        function(t){
            t.forEach(
                function(t1){
                    tab.push(t1)
                }
            );
        }
    );
    return tab;
}

/*function removeDuplicates(values){
    let tab=[] // tableau avec les doublons
    let a=0;
    let tab1=values.map(
        function(t){
            tab.forEach(
                function(t1){
                    if(t1==t){
                        a=1;
                    }                   
                }
            );
            tab.push(t);
            if (a==0){
                return t;
            }
            else{
                a=0;
                return null;
            }
        }
    );
    tab1=tab1.filter(
        function(t){
            if (t==null){
                return false;
            }
            return true;
        }
        );
    return tab1;
}
*/

function removeDuplicates(values){
    let tab=[null];
    let b;
    let tab1=values.filter(
        function(t){
            b=tab.reduce(
                function(c,t1){
                    if(t==t1){
                        c++;
                    }
                    return c;
                },0
            );
            tab.push(t);
            if (b>0){
                return false;
            }
            return true;
        }
    );
    return tab1;
}
