#include <iostream>
#include "ufo_functions.hpp"

int main()
{
    greet();

    std::string codeword = "codecademy";
    std::string answer = "__________";
    int misses = 0;
    std::vector<char> incorrect;
    bool guess = false;
    char letter;

    display_misses(misses);

    while (answer != codeword && misses < 7)
    {
        display_status(incorrect, answer);
        std::cout << "\nPlease enter your guess: ";
        std::cin >> letter;
        for (int i = 0; i < codeword.length(); i++)
        {
            if (letter == codeword[i])
            {
                answer[i] = letter;
                guess = true;
            }
        }

        if (guess == true)
        {
            std::cout << "Correct!";
        }
        else
        {
            std::cout << "Incorrect! The tractor beam pulls the person in further.";
            incorrect.push_back(letter);
            misses++;
        }

        guess = false;
    }

    end_game(codeword, answer);
}