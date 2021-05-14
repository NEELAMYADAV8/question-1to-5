
 
function printRepeating(arr , size)
{
    var i; 
    document.write("The repeating elements are : ");
    
        for(i = 0; i < size; i++)
        {
            if(arr[Math.abs(arr[i])] > 0)
                arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
            else
                document.write(Math.abs(arr[i]) + " ");
    }        
}
 

  
var arr = [0,1,2,3,4,5,6,7,7,8,9,10];
var arr_size = arr.length;
printRepeating(arr, arr_size);

 
