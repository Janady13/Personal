import java.util.Scanner;;

public class DivideByTwoLoop {
    public static void main (String [] args) {
       Scanner scnr = new Scanner(System.in);
       int userNum;

       while(userNum > 1){
        userNum = userNum /2;
        System.out.println(userNum + " ");
       };
       System.out.println(" ");
    }}