"""Word Finder: finds random words from a dictionary."""
import random


def clean_words(lst):
    res = []
    for word in lst:
        if not word.startswith('#'):
            res.append(word.strip())
    return list(filter(None, res))


class WordFinder:
    """Finds a random word in a file

    >>> finder = WordFinder("small_list.txt")
    3 words read

    >>> finder.random() in ['cat', 'dog', 'porcupine']
    True

    >>> finder.random() in ['cat', 'dog', 'porcupine']
    True

    """

    def __init__(self, file):
        """Read file and report how many words read """
        self.lines = []
        with open(file, 'r') as file:
            self.lines = file.readlines()
        print(f"{len(self.lines)} words read")

    def __repr__(self):
        """Show representation."""

        return f"<WordFinder words are {self.lines}>"

    def random(self):
        return self.lines[random.randint(0, len(self.lines)-1)].strip()

    def word_list(self):
        return self.lines


class SpecialWordFinder(WordFinder):
    """Use polluted file - clean out #s and blank lines

    >>> special = SpecialWordFinder("special_words.txt")
    11 words read
    In special we read 5 cleaned words

    """
    def __init__(self, file):
        super().__init__(file)
        self.word_list = clean_words(super().word_list())
        print(f"In special we read {len(self.word_list)} cleaned words")
