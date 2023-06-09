import java.util.Scanner;

public class LabProgram {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int num1;
      int num2;
      int num3;
      int num4;
      int productInt;
      int averageInt;
      
      num1 = scnr.nextInt(4);
      num2 = scnr.nextInt(4);
      num3 = scnr.nextInt(4);
      num4 = scnr.nextInt(4);
      
      productInt = num1 * num2 * num3 * num4;
      averageInt = (num1 + num2 + num3 + num4) / 4;
      double productDouble = (double) num1 * num2 * num3 * num4;
      double averageDouble = (double) (num1 + num2 + num3 + num4) / 4;
      
      System.out.println(productInt + " " + averageInt);
      System.out.printf("%.3f %.3f", productDouble, averageDouble);
      System.out.println();
   }
}

