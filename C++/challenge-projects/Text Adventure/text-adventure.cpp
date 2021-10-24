#include <iostream>
#include <stdlib.h>
#include <ctime>

int main()
{
    std::cout << "lets tell a story!\n";
    int choice1, choice2, choice3;

    std::cout << "You ware walking down a path and you see a bridge to your left and a path to your right, which do you take?\n\n"
              << "1) the bridge\n"
              << "2) the path\n";
    std::cin >> choice1;

    switch (choice1)
    {
    case 1:
        std::cout << "you continue on across the bridge and as you cross a troll jumps on the bridge opposite you. What do you do?\n\n"
                  << "1) fight the torll\n"
                  << "2) talk to the troll\n";
        std::cin >> choice2;
        break;
    case 2:
        std::cout << "you choose the path, as you get a little ways along the path you see a young girl crying just off to the left. What do you do?\n\n"
                  << "3) ask the girl whats wrong?\n"
                  << "4) keep moving\n";
        std::cin >> choice2;
        break;
    default:
        std::cout << "not a valid choice.\n";
        break;
    }

    switch (choice2)
    {
    case 1:
        std::cout << "you fought the troll, lost and than he let you pass for some reason. Your pretty beat up.\n";
        break;
    case 2:
        std::cout << "You said hi to the troll, he said hi and than walk passed you. Guess he was just going about his day.\n";
        break;
    case 3:
        std::cout << "You walked up to the litle girl to ask whats wrong, she picked you up and threw you 100s of miles into the air. Your now as high as a plane before you begin you decent. This cant end well.\n";
        break;
    case 4:
        std::cout << "You are walking by the little girl minding your own business when she grabs you and launches you into the air 100s of mile up. Your now as high as a plane before you begin you decent. This cant end well.\n";
        break;
    default:
        std::cout << "not a valid choice.\n";
        break;
    }

    std::cout << "Hope you enjoyed the story! :P\n";
}