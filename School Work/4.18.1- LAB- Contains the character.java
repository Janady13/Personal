import java.util.Scanner;

public class LabProgram {
	public static void main(String[] args) {
	    //creating object for scanner class
	    Scanner sc=new Scanner(System.in);
	    int n;
	    char c;
	    //reading an integer using scanner object
	    n=sc.nextInt();
	    //declaring a string array of size 'n'
	    String[] s=new String[n];
	    //Taking input for list of words from user
	    for(int i=0; i<n;i++)
	    {
	        s[i]=sc.next();
	    }
	    //reading input for character variable c
	    c=sc.next().charAt(0);
	    
	    
	    //Traversing through each string and checking whether 
	    //the character is present or not.
	    for(int i=0; i<n;i++)
	    {
	        String str=s[i];
	         for(int j=0; j<str.length();j++)
	       {
	           //If character is present then string is printed
	        if(str.charAt(j)==c)
	         {
	            //printing the string along with comma
	            System.out.print(str+",");
	            break;
	         }
	        
	       }
	         
	    }
	    //Printing new line at the end of output
		System.out.println();
	}
}
