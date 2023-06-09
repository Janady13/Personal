import java.util.Scanner;

public class LabProgram {
    // main method
    public static void main(String[] args) {
        // creating an object of scanner class named sc
        Scanner sc = new Scanner(System.in);
        // taking the number of words to be given input from the user and storing it in variable n
        int n = sc.nextInt();
        // creating an array of string of size n named arr
        String arr[] = new String[n];
        // loop to take the words input from the user
        for (int i = 0; i < n; i++)
            // taking the word input from the user and storing it at i th location in array arr
            arr[i] = sc.next();
        // for-each loop to count the frequency of each word
        for (String s : arr)
            // calling method getWordFrequency, passing array arr, number of elements in arr and the current word as argument and printing the value returned by the function
            System.out.println(s + " " + getWordFrequency(arr, n, s));
        // closing the object of scanner class
        sc.close();
    }

    // defining method getWordFrequency that takes a string array, size of string array and a string as parameter
    public static int getWordFrequency(String[] wordsList, int listSize, String currWord) {
        // declaring and initializing an integer variable named count to 0
        int count = 0;
        // for loop to count to the frequency of the value in variable currWord in array wordsList
        for (int i = 0; i < listSize; i++)
            // checking if the value at i th location in array wordsList is equal to the value in variable currWord, ignoring the case
            if (wordsList[i].equalsIgnoreCase(currWord))
                // if they are equal then value in variable count is incremented by 1
                count++;
        // returning the value in variable count
        return count;
    }
}