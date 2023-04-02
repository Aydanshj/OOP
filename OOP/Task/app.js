let array = [12, 40, 20, 55, 2];
let minElmnt = function(){
    let min = arr(0);
    if(Array.Isarray(arr)){
        for(let i = 1; i < arr.lenght; i ++ ){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }else{
        alert('Alert must be entered as a parameter')
    }
}
console.log(minElmnt(array));