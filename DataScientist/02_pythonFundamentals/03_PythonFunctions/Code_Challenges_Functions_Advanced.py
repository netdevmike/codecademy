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
# 1. First Three Multiples
# Let’s start by creating a function which both prints and returns values. For this function, we are going to print out the first three multiples of a number and return the third multiple. This means that we are going to print 1, 2, and 3 times the input number and then return the value of 3 times the input number. For this, we are going to need a few steps:
# 
# Define the function header to accept one input parameter called num
# Print out 1 times num
# Print out 2 times num
# Print out 3 times num
# Return the value of 3 times num
# Code Challenge
# Write a function named first_three_multiples() that has one parameter named num.
# 
# This function should print the first three multiples of num. Then, it should return the third multiple.
# 
# For example, first_three_multiples(7) should print 7, 14, and 21 on three different lines, and return 21.
# 
# Hint
# For this function, we need to print() out the results of each multiplication * then return a single value. For example, printing the result of 3 times 5 would look like print(3 * 5) and returning it would look like return 3 * 5.

# Write your first_three_multiples function here
def first_three_multiples(num):
  print(num)
  print(num * 2)
  print(num * 3)
  return num * 3
# Uncomment these function calls to test your first_three_multiples function:
first_three_multiples(10)
# should print 10, 20, 30, and return 30
first_three_multiples(0)
# should print 0, 0, 0, and return 0

# Let’s go over how we answered it:
# 
# def first_three_multiples(num):
#   print(num)
#   print(num * 2)
#   print(num * 3)
#   return num * 3
# In this solution, we start by defining the function header with an input. We then use the next three lines to print the result of multiplying the input value by one, two, and three. Finally, we return the result of multiplying the input value by 3.
# 
# 2. Tip
# Let’s say we are going to a restaurant and we decide to leave a tip. We can create a function to easily calculate the amount to tip based on the total cost of the food and a percentage. This function will accept both of those values as inputs and return the amount of money to tip. In order to do this, we will need a few steps:
# 
# Define the function to accept the total cost of the food called total and the percentage to tip as percentage
# Calculate the tip amount by multiplying the total and percentage and dividing by 100
# Return the tip amount
# Code Challenge
# Create a function called tip() that has two parameters named total and percentage.
# 
# This function should return the amount you should tip given a total and the percentage you want to tip.
# 
# Hint
# Calculating the tip value will look something like this: (total * percentage) / 100

# Write your tip function here:
def tip(total, percentage):
  tip = total * (percentage/100)
  return tip
# Uncomment these function calls to test your tip function:
print(tip(10, 25))
# should print 2.5
print(tip(0, 100))
# should print 0.0

# Lets go over this solution:
# 
# def tip(total, percentage):
#   tip_amount = (total * percentage) / 100
#   return tip_amount
# In this solution, we defined the function with two parameters and then used them to calculate the tip amount. We multiplied the input values together and divided by 100 since the second input is in percentage form and we want a monetary amount. Lastly, we returned the calculated tip value.
# 
# 3. Bond, James Bond
# It’s time to re-create a famous movie scene through code. Our function is going to concatenate strings together in order to replace James Bond’s name with whatever name we want. The input to our function will be two strings, one for a first name and another for a last name. The function will return a string consisting of the famous phrase but replaced with our inputs. To accomplish this, we need to:
# 
# Define the function to accept two parameters, first_name and last_name
# Concatenate the string ', ' on to the last_name
# Concatenate the first_name on to the result of the previous step
# Concatenate a space on to the result
# Concatenate the last_name again to the result
# Return the final string
# Code Challenge
# Write a function named introduction() that has two parameters named first_name and last_name.
# 
# The function should return the last_name, followed by a comma, a space, first_name another space, and finally last_name.
# 
# Hint
# In order to concatenate strings in python, we can use the + operator. For example, if we wanted to create the string 'Hello, how are you?' from multiple strings, we could do: 'Hello' + ', ' + 'how are you?'

# Write your introduction function here:
def introduction(first_name, last_name):
  return last_name + ', ' + first_name + ' ' + last_name

# Uncomment these function calls to test your introduction function:
print(introduction("James", "Bond"))
# should print Bond, James Bond
print(introduction("Maya", "Angelou"))
# should print Angelou, Maya Angelou


# Let’s go over how we did it:
# 
# def introduction(first_name, last_name):
#   return last_name + ", " + first_name + " " + last_name
# First, we defined the method to accept the first and last names. On the next line, we performed all of the concatenations at once by adding the comma, spaces, and names in the correct order. We also returned the result on the same line.
# 
# 4. Dog Years
# Let’s create a function which calculates a dog’s age in dog years! This function will accept the name of the dog and the age in human years. It will calculate the age of the dog in dog years and return a string describing the dog’s age. This will require a few steps:
# 
# Define the function called dog_years to accept two parameters: name and age
# Calculate the age of the dog in dog years
# Concatenate the string with the dog’s name and age in dog years
# Return the resulting string
# Code Challenge
# Some say that every one year of a human’s life is equivalent to seven years of a dog’s life. Write a function named dog_years() that has two parameters named name and age.
# 
# The function should compute the age in dog years and return the following string:
# 
# "{name}, you are {age} years old in dog years"
# Test this function with your name and your age!
# 
# Hint
# Since the age in dog years age * 7 is a number, we need to convert it to a string when concatenating using str(). For example: 'The age is: '+ str(age * 7).

# Write your dog_years function here:
def dog_years(name, age):
  dogYear = age * 7
  return name + ', you are ' + str(dogYear) + ' years old in dog years'

# Uncomment these function calls to test your dog_years function:
print(dog_years("Lola", 16))
# should print "Lola, you are 112 years old in dog years"
print(dog_years("Baby", 0))
# should print "Baby, you are 0 years old in dog years"

# Let’s look at this solution:
# 
# def dog_years(name, age):
#   return name+", you are "+str(age * 7)+" years old in dog years"
# In this solution we used two lines of code to accomplish this task. The first line defines the function with the two inputs and the second line concatenates the string while also performing the calculation. We used str(age * 7) to convert the number to a string, and since that function call returns a string, we can concatenate it in-line with the rest of the string.
# 
# 5. All Operations
# For the final code challenge, we are going to perform multiple mathematical operations on multiple inputs to the function. We will begin with adding the first two inputs, then we will subtract the third and fourth inputs. After that, we will multiply the first result and the second result. In the end, we will return the remainder of the previous result divided by the first input. We will also print each of the steps. The steps needed to complete this are:
# 
# Define the function to accept four inputs: a, b, c, and d
# Print and store the result of a + b
# Print and store the result of c - d
# Print and store the first result times the second result
# Return the previous result modulo a
# Code Challenge
# Create a function named lots_of_math(). This function should have four parameters named a, b, c, and d. The function should print 3 lines and return 1 value.
# 
# First, print the sum of a and b.
# 
# Second, print c minus d.
# 
# Third, print the first number printed, multiplied by the second number printed.
# 
# Finally, return the third number printed modulo a.
# 
# Hint
# To make this problem easier, you can store the result of each mathematical operation into a variable and use them as the results in step 4. For example: first_result = a + b. Also, remember that you can take the modulo of a number with %.

# Write your lots_of_math function here:
def lots_of_math(a, b, c, d):
  sum_ab = a+b
  minus_cd = c-d
  final = sum_ab * minus_cd
  print(sum_ab)
  print(minus_cd)
  print(final)
  return c % a
  

# Uncomment these function calls to test your lots_of_math function:
print(lots_of_math(1, 2, 3, 4))
# should print 3, -1, -3, 0
print(lots_of_math(1, 1, 1, 1))
# should print 2, 0, 0, 0

# Here is the way we did it:
# 
# def lots_of_math(a, b, c, d):
#   first = a + b
#   second = c - d
#   third = first * second
#   fourth = third % a
#   print(first)
#   print(second)
#   print(third)
#   return fourth
# After defining the function, we store each result into its own variable for first and second. We then use these two variables in the calculation for third and we use the value of third to get fourth. Afterwards, we print the first three variables and return the fourth one.
