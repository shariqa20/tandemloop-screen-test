def count_multiples(input_list):
    # Initialize a dictionary to store the count of multiples
    count_dict = {i: 0 for i in range(1, 10)}
    
    # Iterate over each number from 1 to 9
    for i in range(1, 10):
        # Count how many numbers in the input list are divisible by i
        count_dict[i] = sum(1 for num in input_list if num % i == 0)
    
    return count_dict

# Example input
input_list = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]

# Call the function and print the result
output = count_multiples(input_list)
print(output)
