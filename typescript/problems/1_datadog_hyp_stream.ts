// Solution
class Filter {
    keywords: Set<string>

    constructor(keywords: string) {
        this.keywords = new Set(keywords.replace(/\s+/g, "").split(','))
    }

    filterElement(element: string): string | null {
        const tags = new Set(element.replace(/\s+/g, "").split(','))
        this.keywords.forEach(key => tags.delete(key))
        if (tags.size == 0) {
            return null
        }
        return Array.from(tags).join(', ')
    }

    filterElements(elements: string[]): string[] {
        return elements
            .map(elem => this.filterElement(elem))
            .filter(elem => elem != null) as string[]
    }
}

// Tests
const stream: string[] = [
    'apple, facebook, google', 
    'banana, facebook', 
    'facebook, google, tesla', 
    'intuit, google, facebook'
];

describe('tests', () => {
    test('apple', () => {
        const filter = new Filter('facebook, google')
        const result = filter.filterElement(stream[0])
        expect(result).toBe('apple');
    });
});