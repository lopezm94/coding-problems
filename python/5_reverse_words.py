import argparse

def reverse_words(self, s: str) -> str:
        words = s.split()
        half_size = int(len(words)/2)
        for i in range(0, half_size):
            words[i], words[-i-1] = words[-i-1], words[i]
        return ' '.join(words)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Reverse the words in a string.')
    parser.add_argument('string', type=str, help='The string to reverse')
    args = parser.parse_args()
    result = reverse_words(args.string)
    print(result)

