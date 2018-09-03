# Variable Binding
def m(x):
    print("\tw00t")
    print("\tz00t")
    print("\t{}".format(x**2))

def n(x):
    [print("\t{}".format(x)) for x in ["w00t", "z00t", x**2]]

# Immutability

# Laziness
r = range(777,7777)     # => range(777,7777)
type(r)                 # => <class 'range'>
list(r)                 # => [777, ..., 7776]   # 7000 items
type(list(r))           # => <class 'list'>
r[97]                   # => 874
type(r[97])             # => <class 'int'>
r[600:614]              # => range(1377, 1391)
type(r[600:614])        # => <class 'range'>
list(r[600:614])        # => [1377, ..., 1390]  # 14 items

# FP Example
# from http://joelgrus.com/2015/07/07/haskell-style-fibonacci-in-python/
from itertools import islice, tee
from operator import add

def tail(iterable):
    return islice(iterable, 1, None)

def take(n, iterable):
  return list(islice(iterable, 0, n))

def fibs():
  yield 0
  yield 1
  fibs1, fibs2 = tee(fibs())
  yield from map(add, fibs1, tail(fibs2))   # map is lazy by default