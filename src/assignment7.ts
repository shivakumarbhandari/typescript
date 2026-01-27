// Fix the following function

//function formatValue(value: string | number) {
   // return value.toUpperCase();
//}

//formatValue("hello");
//formatValue(123);
function formatValue(value: string | number): string {
    if (typeof value == "string") {
        return value.toUpperCase();
    } else {
        return value.toString();
    }
}

formatValue("hello"); 
formatValue(123);     
