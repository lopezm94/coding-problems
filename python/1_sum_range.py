import argparse

# add_it_up(n: int) -> int
# Expects a single integer argument and returns the sum of all integers from 0 to that number.
# If the argument is not an integer, or is less than zero, return 0.
# Example: add_it_up(5) -> 15
def add_it_up(n: int) -> int:
    if not isinstance(n, int) or n < 0:
        return 0
    return sum(range(n + 1))

# Expects a single integer argument and returns the sum of all integers from 0 to that number.
# Example: python 1_sum_range.py 5 -> 15
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Sum up integers from 0 to a given number.')
    parser.add_argument('number', type=int, help='The number to sum up to')
    args = parser.parse_args()
    result = add_it_up(args.number)
    print(result)
