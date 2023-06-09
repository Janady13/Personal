import java.util.Scanner;

public class LabProgram {
    public static void swapValues(int[] values) {
        int temp;
        temp = values[0];
        values[0] = values[1];
        values[1] = temp;
        temp = values[3];
        values[3] = values[2];
        values[2] = temp;
    }

    public static void main(String[] args) {
        int[] values;
        int n;
        values = new int[4];
        Scanner s = new Scanner(System.in);
        for (int i = 0; i < values.length; i++) {
            n = s.nextInt();
            values[i] = n;
        }
        swapValues(values);
        
        for (int i = 0; i < values.length; i++) {
            
            System.out.print(values[i]);
             
            if (i < values.length - 1) {
                System.out.print(" ");
            }
        }
        
        System.out.println();
    }
}