import java.util.Scanner; 

public class LabProgram {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int[] userValues = new int[20];   // List of integers from input

      /* Type your code here. */
      int n, i, threshold;
      n=scnr.nextInt();
      
      for(i=0; i<n; i++){
          userValues[i] = scnr.nextInt();
      }
      
      threshold = scnr.nextInt();
      
     
      
      for(int j=0; j<i; j++){
          if(userValues[j]<=threshold)
            System.out.print(userValues[j]+",");
      }
      System.out.println();
   }
}