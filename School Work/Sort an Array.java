import java.util.Scanner;

public class LabProgram {
    public static void sortArray(int[] myArr, int arrSize) {
        int temp;
        for (int i = 0; i < arrSize; ++i) {
            for (int j = 0; j < arrSize - 1; ++j) {
                if (myArr[j] < myArr[j + 1]) {
                    temp = myArr[j];
                    myArr[j] = myArr[j + 1];
                    myArr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int[] numbers = new int[scnr.nextInt()];
        for (int i = 0; i < numbers.length; ++i) {
            numbers[i] = scnr.nextInt();
        }
        sortArray(numbers, numbers.length);
        for (int i = 0; i < numbers.length; ++i) {
            System.out.print(numbers[i] + ",");
        }
        System.out.println();
    }
}