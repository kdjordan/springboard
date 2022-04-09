def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    count = 0
    if parens[0] != '(':
        return False
    for el in parens:
        if el == '(':
            count += 1
        if el == ')':
            count -= 1
    if count == 0:
        return True
    return False


