import argparse

# shift_chr(char: str) -> int
# Example: shift_chr('a', 1) -> 98
def shift_chr(char: str, shift: int) -> str:
    return chr(97 + (ord(char) - 97 + shift) % 26)

# shift_letters(string: str, shift: int) -> str
# Expects a string and an integer. Returns the string with each character shifted by the integer.
# Example: shift_letters('abc', 1) -> 'bcd'
def shift_letters(string: str, shift: int) -> str:
    result = ""
    for char in string:
        result += shift_chr(char, shift)
    return result

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Shift letters in a string by a given number.')
    parser.add_argument('string', type=str, help='The string to shift')
    parser.add_argument('shift', type=int, help='The number of positions to shift')
    args = parser.parse_args()
    result = shift_letters(args.string, args.shift)
    print(result)
