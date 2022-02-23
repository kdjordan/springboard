function solution(num){
    // convert the number to a roman numeral
     var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in lookup ) {
      console.log(i)
      while ( num >= lookup[i] ) {
        roman += i;
        console.log('roman', roman)
        num -= lookup[i];
      }
    }
    return roman;
  }

  console.log(solution(8))