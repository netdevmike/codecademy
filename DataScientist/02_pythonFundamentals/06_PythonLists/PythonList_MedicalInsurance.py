names = ["Mohamed", "Sara", "Xia", "Paul", "Valentina", "Jide", "Aaron", "Emily", "Nikita", "Paul"]
insurance_costs = [13262.0, 4816.0, 6839.0, 5054.0, 14724.0, 5360.0, 7640.0, 6072.0, 2750.0, 12064.0]

# Add your code here
names.append("Priscilla")
insurance_costs.append(8320.0)

medical_records = list(zip(names, insurance_costs))

# print(names)
# print(insurance_costs)
print(medical_records)

num_medical_records = len(medical_records)
print("\n" + str(num_medical_records))

first_medical_record = medical_records[0]

print("\n" + str(first_medical_record))

medical_records.sort()

print("\n" + str(medical_records))

cheapest_three = medical_records[:3]

print("\nHere are the three cheapest insurance costs in our medical records: " + str(cheapest_three))

priciest_three = medical_records[-3:]

print("\nHere are the three priciest insurance costs in our medical records: " + str(priciest_three))


paul_count = names.count("Paul")

print("\nThere are " + str(paul_count) + " individuals with the name Paul in our medical records.")