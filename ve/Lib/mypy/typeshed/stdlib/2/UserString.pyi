import collections

class UserString(collections.Sequence): ...
class MutableString(UserString, collections.MutableSequence): ...