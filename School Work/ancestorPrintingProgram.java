import java.util.Scanner;

public class AncestorsPrinter {
    public static void main (String[] args) {
        Scanner scnr = new Scanner(System.in);
        final int YEARS_PER_GEN = 20;
        int userYear;   //Approx. years per generation
        int consYear;   //User input
        int numAnc;     //Approx. ancestors in considered year

        consYear = 2020;
        numAnc = 2;

        System.out.println("Enter a past year (neg. for B.C.): ");
        userYear = scnr.nextInt();

        while(consYear >= userYear){
            System.out.println("Ancestors in " + consYear + ": " + numAnc);

            numAnc = 2 * numAnc;    //Each ancestor has two parents
            consYear = consYear - YEARS_PER_GEN;    //Go back 1 generation
        }

    }
}
