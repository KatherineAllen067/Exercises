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