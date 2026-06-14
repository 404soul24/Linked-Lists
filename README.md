# Linked Lists

A JavaScript implementation of a singly linked list using ES6 modules.

## Features

- **Node class** - Represents a list node with `value` and `nextNode` properties
- **LinkedList class** - Full linked list implementation with the following methods:

| Method | Description |
|--------|-------------|
| `append(value)` | Add node to end |
| `prepend(value)` | Add node to start |
| `size()` | Return total nodes |
| `head()` | Return first value |
| `tail()` | Return last value |
| `at(index)` | Return value at index |
| `pop()` | Remove and return head |
| `contains(value)` | Check if value exists |
| `findIndex(value)` | Return index of value |
| `toString()` | Format: `( val ) -> ( val ) -> null` |
| `insertAt(index, ...values)` | Insert at index (throws RangeError) |
| `removeAt(index)` | Remove at index (throws RangeError) |

## Usage

```bash
node main.js
```

Output:
```
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

## Requirements

- Node.js v22+ (LTS)
