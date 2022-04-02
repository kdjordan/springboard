def print_upper_words(words,  must_start_with):
    """"Prints the uppercase version of words that start with values in must_start_with"""

    for word in words:
        for letter in must_start_with:
            if word[0] == letter:
                print(word.upper())

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})