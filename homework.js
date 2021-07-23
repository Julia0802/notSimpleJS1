//1.     
function sortArray(array){
     for(let i=0; i<array.length;i++){
            for(let j=0; j<array.length; j++){
                  if(array[j] > array[i]){
                  let temp = array[j];
                  array[j] = array[i];
                  array[i]=temp;
                  }
            }
      }
}
function reverseSortArray(array){
      for(let i=0; i<array.length;i++){
            for(let j=0; j<array.length; j++){
                  if(array[i] > array[j]){
                  let temp = array[j];
                  array[j] = array[i];
                  array[i]=temp;
                  }
            } 
      }
}
 //2 
function findMax(array){
      let max = array[0];
      for(let i = 0; i<array.length; i++){
            if(array[i]>max){
                  max = array[i];
            }
      }
      return max;                    
}
 
function findMin(array){
      let min = array[0];
      for(let i = 0; i<array.length; i++){
            if(array[i]<min){
                 min = array[i];
            }
      }
    return min;                    
}
//3
function isPalindrom(text){
      let array = text.split('');
      let reverseArray = [];
      for(let i =(array.length-1); i>=0; i--){
           reverseArray[array.length-1-i] = array[i]; 
      }
      if(array.lentgh % 2===0){
            for(let i= 0; i<=(array.length/2-1); i++){
                  if (array[i]!==array[array.length-1-i]){
                        return false;
                  }
            }
      }else if(array.lentgh % 2!==0){
            for(let i = 0; i<array.length/2; i++){
                  if(array[i]!==array[array.length-1-i]){
                        return false;
                  }
            }
      }
      console.log(array);
      return true;

}
//4
function findNumbers(n){
      let order = "";
      for(let i=1; i<=n; i++){
            if(i % 3 !== 0 && i % 5!==0){
            order = order + i +" ";
            }else if(i % 3 === 0 && i % 5 ===0){
             order = order + "fizzbuzz ";      
            }else if(i % 3 === 0 && i % 5!==0){
            order = order + "fizz ";      
            }else if (i % 3 !== 0 && i % 5 ===0){
            order = order + "buzz ";      
            }     
      }
      console.log(order);
}
//5
function isAnagramma(text1, text2){
      let line1 = text1.toLowerCase();
      let line2 = text2.toLowerCase();
      let sentence1 = line1.replace(/[\s \p{P}.,?\/#'"!$%\^&\*;:{}=\-_`~()<>]*/g,'');
      let sentence2= line2.replace(/[\s \p{P}.,?\/#'"!$%\^&\*;:{}=\-_`~()<>]*/g,'');
      let arrayFromline1 = sentence1.split("");
      let arrayFromline2 = sentence2.split("");
      if(arrayFromline1.length !== arrayFromline2.length){
            return false;
      }
      for (let i = 0; i <arrayFromline1.length; i++){
            for(let j = 0; j <arrayFromline2.length; j++){
                  if(arrayFromline1[i]!==null && arrayFromline2[j]!==null && arrayFromline1[i]  ===arrayFromline2[j]){
                   arrayFromline1[i]=null;
                   arrayFromline2[j]=null;      
                  } 
            }          
      }
      for(let i = 0; i< arrayFromline1.length; i++){
            if(arrayFromline1[i]!==null){
                return false;
            }
      }
      for(let i = 0; i< arrayFromline2.length; i++){
            if(arrayFromline2[i]!==null){
            return false;
            }
      return true; 
      }        
}
//6
function countVowels(text){
      let count = 0;
      let arrayFromText = text.split("");
      for(let i = 0; i < arrayFromText.length; i++){      
            if(arrayFromText[i].match(/[aouei]/i)!==null){
            count++;
            }
      }
     return count;
}
//7
function reverseArray(array){
let reverseArray = [ ];
      for(let i = (array.length-1); i>=0; i--){
      reverseArray[array.length-1-i]= array[i];
      }
      return reverseArray;
}
//8
function averageSum(array){
      let sum = 0;
      for(let i=0; i<array.length; i++){
            sum = sum + array[i];
      }
      let averageSum = sum/array.length;
      return averageSum;
}
//9
function inArray(text, array){
      for(let i = 0;i<array.length; i++){
            if(array[i]===text){
                  return true;
            }
      }
      return false;
}
//10
function swapSymbols(text){
      let array = text.split('');
      for(let i=0; i<array.length; i++){
            if(array.length % 2===0 || i !== array.length-1){
                  let temp = array[i+1];
                  array[i+1]= array[i];
                  array[i]= temp;
                  i++;
            }
      }
      let mixedText = array.join('');
      return mixedText;
}
//11 
function defineDecade(day){
       if(day >= 1 && day <= 10){
             return 'First decade';
       } else if(day >= 11 && day <= 20){
            return 'Second decade';
       }else if(day >= 21 && day <= 31){
            return 'Third decade';
       }else{
             return 'Invalid data';
       }
}
//12 
function defineTimeOfYear(month){
      if((month >= 1 && month <=2) || month === 12 ){
            return 'Зима';
      } else if(month >= 3 && month <= 5){
           return 'Весна';
      }else if(month >= 6 && month <= 8){
           return 'Лето';
      }else if(month >= 9 && month <= 11){
            return 'Осень';
      }else{
            return 'Invalid data';
      }
}
