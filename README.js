import java.util.Scanner;

public class MaiorIdade
{
	public static void main(String[] args)
	{
		int Idade;
		String nome;

		
		Scanner teclado = new Scanner(System.in);

		System.out.printf("Seu nome\n");
		nome = teclado.nextLine();
	
		System.out.println();

		System.out.printf("Digite sua idade\n");
		Idade = teclado.nextInt();

		System.out.println();

				if(Idade>=18)
					{
					System.out.println("Maior de idade");
					
					}
				else
					{
					System.out.println("Menor de idade");
					}

	}}
