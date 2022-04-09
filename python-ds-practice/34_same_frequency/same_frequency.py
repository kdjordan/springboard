def make_dict(a_number):
    dict = {}
    num_iterable = str(a_number)
    for num in num_iterable:
        if num not in dict:
            dict[num] = 1
        else:
            dict[num] += 1
    return dict

def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    return make_dict(num1) == make_dict(num2)


