import java.util.Scanner;

public class ListAverage {
    public static void main(String [] args) {
        Scanner scnr = new Scanner(System.in);

        int currentValue;
        int valuesSum;
        int numberValues;

        valuesSum = 0;
        numberValues = 0;

        currentValue = scnr.nextInt();

            // Get values until 0 (or less)
        while (currentValue > 0){
            valuesSum = valuesSum + currentValue;
            numberValues = numberValues + 1;
            currentValue = scnr.nextInt();
        }

        System.out.println("Average: " + (valuesSum / numValues));
    }
}