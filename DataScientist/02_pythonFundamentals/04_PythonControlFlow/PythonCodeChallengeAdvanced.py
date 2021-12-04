# Function Syntax
# As a refresher, function syntax looks like this:
# 
# def some_function(some_input1, some_input2):
#   # … do something with the inputs …
#   return output
# For example, a function that returns the sum of the first and last elements of a given list might look like this:
# 
# def first_plus_last(lst):
#   return lst[0] + lst[-1]
# And this would produce output like:
# 
# >>> first_plus_last([1, 2, 3, 4])
# 5
# >>> first_plus_last([8, 2, 5, -8])
# 0
# >>> first_plus_last([-10, 2, 3, -4])
# -14
# Challenges
# We’ve included 5 challenges below. Try to answer all of them and polish up your problem-solving skills!
# 
# 1. In Range
# Let’s start the advanced challenge problems by testing if a number falls within a certain range. We will accept three parameters where the first parameter is the number we are testing, the second parameter is the lower bound and the third parameter is the upper bound of our range. These are the steps required:
# 
# Define the function to accept three numbers as parameters
# Test if the number is greater than or equal to the lower bound and less than or equal to the upper bound
# If this is true, return True, otherwise, return False
# Code Challenge
# Create a function named in_range() that has three parameters named num, lower, and upper.
# 
# The function should return True if num is greater than or equal to lower and less than or equal to upper. Otherwise, return False.
# 
# Hint
# Don’t forget to connect the >= and <= conditions with the boolean operator and.

# Write your in_range function here:
def in_range(num, lower, upper):
  if (num >= lower and num <= upper):
    return True
  else:
    return False
# Uncomment these function calls to test your in_range function:
print(in_range(10, 10, 10))
# should print True
print(in_range(5, 10, 20))
# should print False


# Here’s one way to do it:
# 
# def in_range(num, lower, upper):
#   if(num >= lower and num <= upper):
#     return True
#   return False
# In this solution, we test the two bounds connected with an and boolean operator. This means that the code nested in the if statement will only execute if both of the conditions are true. We also do not include the else statement here. Since our if statement will return True and exit the function if the condition is true, the last line will only be reached if the condition was false.




# 2. Same Name
# We need to write a program that checks different names and determines if they are equal. We need to accept two strings and compare them. Here are the steps:
# 
# Define the function to accept two strings, your_name and my_name
# Test if the two strings are equal
# Return True if they are equal, otherwise return False
# Code Challenge
# Create a function named same_name() that has two parameters named your_name and my_name.
# 
# If our names are identical, return True. Otherwise, return False.
# 
# Hint
# In python, strings can be compared using the == operator.

# Write your same_name function here:
def same_name(your_name, my_name):
  if (your_name == my_name):
    return True
  else:
    return False

# Uncomment these function calls to test your same_name function:
print(same_name("Colby", "Colby"))
# should print True
print(same_name("Tina", "Amber"))
# should print False


# Here is this solution:
# 
# def same_name(your_name, my_name):
#   if (your_name == my_name):
#     return True
#   else:
#     return False
# As you can see in this solution code, comparing two strings in python can be done using the == operator. If you want an added challenge, you can try shortening the function body to one line of code!




# 3. Always False
# There are some situations that you normally want to avoid when programming using conditional statements. One example is a contradiction. This occurs when your condition will always be false no matter what value you pass into it. Let’s create an example of a function that contains a contradiction. It will contain a few steps:
# 
# Define the function to accept a single parameter called num
# Use a combination of <, > and and to create a contradiction in an if statement.
# If the condition is true, return True, otherwise return False. The trick here is that because we’ve written a contradiction, the condition should never be true, so we should expect to always return False.
# Code Challenge
# Create a function named always_false() that has one parameter named num.
# 
# Using an if statement, your variable num, and the operators >, and <, make it so your function will return False no matter what number is stored in num.
# 
# An if statement that is always false is called a contradiction. You will rarely want to do this while programming, but it is important to realize it is possible to do this.
# 
# Hint
# Try to think of an example of a condition which is always false. For example, a number cannot be greater than and less than itself at the same time.

# Write your always_false function here:
def always_false(num):
  if (1 != 1):
    return True
  else:
    return Fals
# Uncomment these function calls to test your always_false function:
print(always_false(0))
# should print False
print(always_false(-1))
# should print False
print(always_false(1))
# should print False


# Here is one way to solve this:
# 
# def always_false(num):
#   if (num > 0 and num < 0):
#     return True
#   else:
#     return False
# In our example, we use the contradiction of being greater than and less than 0 at the same time. No matter what value we pass into the function, our condition will always be false since it is not logically possible. You normally want to avoid creating conditions like this.




# 4. Movie Review
# We want to create a function that will help us rate movies. Our function will split the ratings into different ranges and tell the user how the movie was based on the movie’s rating. Here are the steps needed:
# 
# Define our function to accept a single number called rating
# If the rating is equal to or less than 5, return "Avoid at all costs!"
# If the rating was less than 9, return "This one was fun."
# If neither of the if statement conditions were met, return "Outstanding!"
# Code Challenge
# Create a function named movie_review() that has one parameter named rating.
# 
# If rating is less than or equal to 5, return "Avoid at all costs!". If rating is between 5 and 9, return "This one was fun.". If rating is 9 or above, return "Outstanding!"
# 
# Hint
# Use a series of if statements to test the different ranges. We can check each condition separately to determine which string to return.

# Write your movie_review function here:
def movie_review(rating):
  if (rating <= 5):
    return "Avoid at all costs!"
  elif (rating > 5 and rating < 9):
    return "This one was fun."
  else:
    return "Outstanding!"
# Uncomment these function calls to test your movie_review function:
print(movie_review(9))
# should print "Outstanding!"
print(movie_review(4))
# should print "Avoid at all costs!"
print(movie_review(6))
# should print "This one was fun."

# Here’s how we did it:
# 
# def movie_review(rating):
#   if(rating <= 5):
#     return "Avoid at all costs!"
#   if(rating < 9):
#     return "This one was fun."
#   return "Outstanding!"
# To solve this, we used a series of if statements to select which string to return. Another way of solving this would be to use if, elif and else statements.





# 5. Max Number
# For the final challenge, we are going to select which number from three input values is the greatest using conditional statements. To do this, we need to check the different combinations of values to see which number is greater than the other two. Here is what we need to do:
# 
# Define a function that has three input parameters, num1, num2, and num3
# Test if num1 is greater than the other two numbers
# If so, return num1
# Test if num2 is greater than the other two numbers
# If so, return num2
# Test if num3 is greater than the other two numbers
# If so, return num3
# If there was a tie between the two largest numbers, then return "It's a tie!"
# Code Challenge
# Create a function called max_num() that has three parameters named num1, num2, and num3.
# 
# The function should return the largest of these three numbers. If any of two numbers tie as the largest, you should return "It's a tie!".
# 
# Hint
# You can use if, elif, and else statements to accomplish this. For the first parameter, test if num1 is greater than num2 and that num1 is greater than num3. Repeat these tests for num2 and num3.

# Write your max_num function here:
def max_num(num1, num2, num3):
  if (num1 > num2 and num1 > num3):
    return num1
  elif(num2 > num1 and num2 > num3):
    return num2
  elif(num3 > num1 and num3 > num2):
    return num3
  else:
    return "It's a tie!"
    
# Uncomment these function calls to test your max_num function:
print(max_num(-10, 0, 10))
# should print 10
print(max_num(-10, 5, -30))
# should print 5
print(max_num(-5, -10, -10))
# should print -5
print(max_num(2, 3, 3))
# should print "It's a tie!"


# Here is one way to do it:
# 
# def max_num(num1, num2, num3):
#   if num1 > num2 and num1 > num3:
#     return num1
#   elif num2 > num1 and num2 > num3:
#     return num2
#   elif num3 > num1 and num3 > num2:
#     return num3
#   else:
#     return "It's a tie!"
# In this code, we use a series of if, elif, and else statements. We test the first parameter against the other two parameters and return the value if it is greater than the other two. We have two more tests to check if the second parameter is greater than the other two, then if the third parameter is greater than the other two. In the case where none of the parameters were greater than both of the other parameters, then we know that there must have been a tie and the final return statement is reached.










# Let’s practice using zip()!
# 
# Code Challenge
# Use zip() to create a new variable called names_and_dogs_names that combines owners and dogs_names lists into a zip object.
# 
# Then, create a new variable named list_of_names_and_dogs_names by calling the list() function on names_and_dogs_names.
# 
# Print list_of_names_and_dogs_names.

owners = ["Jenny", "Alexus", "Sam", "Grace"]
dogs_names = ["Elphonse", "Dr. Doggy DDS", "Carter", "Ralph"]

names_and_dogs_names = zip(owners, dogs_names)

list_of_names_and_dogs_names = list(names_and_dogs_names)

print(list_of_names_and_dogs_names)