import java.util.Scanner;
public class LabProgram
{
 public static void main(String[] args) {
     Scanner scnr=new Scanner(System.in);
  int[] userValues=new int[9];//set of data specified by user
  //declare variables
  int i=0;
  int input=0;
  int middle;
  //this loop take input untill user not enter negative value
  while(input>=0)
  {
      if(i<9)//maximum number of inputs is 9
      {
          //get input
          input=scnr.nextInt();
          if(input<0)//if input is negative break the loop
          {
              break;
          }
          userValues[i]=input;//otherwise input store in array
          i++;
      }
      else//if number of input exceeds give message and exit
      {
          System.out.println("Too many numbers");
          System.exit(0);
      }
  }
  //calculate middle element 
  middle=userValues[i/2];
  //print Middle element
  System.out.println("Middle item: "+middle);
 }
}  