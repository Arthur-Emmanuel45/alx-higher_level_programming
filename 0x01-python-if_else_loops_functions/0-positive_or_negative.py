#!/usr/bin/python3
import random
number = random.randint(-10, 10)
for i in number:
    if i < 0:
        print("number + is negative")
    elif i > 0:
        print("number + is positive")
    else:
        print("number + is zero")
