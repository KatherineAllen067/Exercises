//Big O

//What is the runtime? 
int product(int a, int b){
    int sum = 0;
    for (int i = 0; i< b; i++){
        sum += a;
    }
    return sum;
}
//this is linear time because it touches all nodes
// comparing a and b
// runtime would = 0(ab) 

int power(int a, int b){
    if (b < 0){
        return 0; 
    }else  if (b ==0){
        return 1;
    }else{
        return a * power(a, b-1);
    }
}
//need to find runtime of a to the power of b
//this is recursion from b to b-1 to b-2 down to 1 
// runtime would be 0(n)
