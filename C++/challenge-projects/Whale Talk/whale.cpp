#include <iostream>
#include <vector>
#include <string>

int main()
{
    std::string phrase = "turpentine and turtles";

    std::vector<char> vowels;
    vowels.push_back('a');
    vowels.push_back('e');
    vowels.push_back('i');
    vowels.push_back('o');
    vowels.push_back('u');

    std::vector<char> result;

    for (int i = 0; i < phrase.size(); i++)
    {
        for (int j = 0; j < vowels.size(); j++)
        {
            if (phrase[i] == vowels[j])
            {
                result.push_back(vowels[j]);
            }
        }
    }

    for (int k = 0; k < result.size(); k++)
    {
        std::cout << result[k];
        if (result[k] == 'e' || result[k] == 'u')
        {
            std::cout << result[k];
        }
    }

    std::cout << "\n";
}