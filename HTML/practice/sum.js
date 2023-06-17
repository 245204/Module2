function sum(){


// var strings=new Array('hhhhh','lllllllll','kk');
//    // string.push("hhhhh","lllllllll","kk");
// //    var strings=new Array(3);
// //    strings[0]="ssss"
// //    strings[1]="kkkkkkkkk"
// //    strings[2]="k"
//     let longeststrings=strings[0];
//     for(let i=1;i<strings.length;i++){
//         if(strings[i].length>longeststrings.length){
//             longeststrings=strings[i];
//         }
//     }f
//     document.write(longeststrings);

    let arr1=new Array('1','2','3','4','5','6');
    let arr2=new Array('9','8','7','4','5','6');
    let newarr=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=i;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                newarr.push(arr1[i]);
            }
        }
    }
    document.write(newarr);


}
//let string1="Abcdefgh";
//   let flag=0;
//  let string= string1.toLowerCase();
//   for(let i=0;i<string.length;i++){
//     if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
//         flag++;

//     }
//   }document.write(string1+"</br>");
//   document.write(flag);


// let rev="";
// let string="abcd";
// for(let i=string.length-1;i>=0;i--){
//  rev+=string[i];
// }
// document.write(string);
// document.write(rev);
 




// var string ="abcdefg";
// var newstring="";
// for(let i=0;i<string.length;i++){
//     if(string[i]=="a"||string[i]=="o"||string[i]=="i"||string[i]=="e"||string[i]=="u"){
//         newstring+="x";
//     }else{
//         newstring+=string[i];
//     }
// }
// document.write(newstring);


// var a=10;
// var b=9;
// document.write(a+b);


// var strings=new Array('hhhhh','lllllllll','kk');
//    // string.push("hhhhh","lllllllll","kk");
// //    var strings=new Array(3);
// //    strings[0]="ssss"
// //    strings[1]="kkkkkkkkk"
// //    strings[2]="k"
//     let longeststrings=strings[0];
//     for(let i=1;i<strings.length;i++){
//         if(strings[i].length>longeststrings.length){
//             longeststrings=strings[i];
//         }
//     }
//     document.write(longeststrings);