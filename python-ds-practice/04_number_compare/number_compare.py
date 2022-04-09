def number_compare(a, b):
    """Report on whether a>b, b>a, or b==a
    
        >>> number_compare(1, 1)
        'Numbers are equal'
        
        >>> number_compare(-1, 1)
        'Second is greater'
        
        >>> number_compare(1, -2)
        'First is greater'
    """
    if a == b:
        print(f"'Numbers are equal'")
    elif a < b:
        print(f"'Second is greater'")
    elif a > b:
        print(f"'First is greater'")