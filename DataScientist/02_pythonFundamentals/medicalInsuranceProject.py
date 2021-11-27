# create the initial variables below
age = 28
sex = 0
bmi = 26.2
num_of_children = 3
smoker = 0

# Add insurance estimate formula below
insurance_cost = 250 * age - 128 * sex + 370 * bmi + 425 * num_of_children + 24000 * smoker - 12500
print('This person\'s insurance cost is ' + str(insurance_cost) + ' dollars.')

# Age Factor
age += 4
new_insurance_cost = 250 * age - 128 * sex + 370 * bmi + 425 * num_of_children + 24000 * smoker - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print("The change in estimated insurance cost after increasing the age by 4 years is " + str(change_in_insurance_cost) + " dollars")
age -= 4

# BMI Factor
bmi += 3.1
new_insurance_cost = 250 * age - 128 * sex + 370 * bmi + 425 * num_of_children + 24000 * smoker - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print("The change in estimated insurance cost after increasing the BMI by 3.1 is " + str(change_in_insurance_cost) + " dollars")
bmi -= 3.1

# Male vs. Female Factor
sex += 1
new_insurance_cost = 250 * age - 128 * sex + 370 * bmi + 425 * num_of_children + 24000 * smoker - 12500
change_in_insurance_cost = new_insurance_cost - insurance_cost
print("The change in estimated insurance cost for being male instead of female is " + str(change_in_insurance_cost) + " dollars")
sex -= 1

# Extra Practice
'''
So far we have looked at 3 of the 5 factors in the insurance costs formula. The two remaining are smoker and num_of_children. If you want to keep challenging yourself, spend some time investigating these factors!

Rewrite the insurance cost formula and assign it to the variable name new_insurance_cost.

Save the difference between new_insurance_cost and insurance_cost in a variable called change_in_insurance_cost

Display the information in the terminal!
'''