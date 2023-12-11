import argparse
from typing import List

# Expects a list of strings and returns the list with the first and last elements swapped.
# Example: swap_first_and_last(['a', 'b', 'c']) -> ['c', 'b', 'a']
def swap_first_and_last(elements: List[str]) -> List[str]:
    if len(elements) > 1:
        elements[0], elements[-1] = elements[-1], elements[0]
    return elements

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Swap the first and last elements of a list.')
    parser.add_argument('elements', nargs='+', type=str, help='The list of elements to swap')
    args = parser.parse_args()
    result = swap_first_and_last(args.elements)
    print(result)
