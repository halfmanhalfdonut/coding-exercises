from pathlib import Path


input = Path('input.txt').read_text()
numbers = list(map(int, input.split('\n')))
numbers.sort()
length = len(numbers)

def part_one():
  found = False

  for i in range(0, length):
    if not found:
      for j in range(i + 1, length):
        total = numbers[i] + numbers[j]
        if total == 2020:
          product = numbers[i] * numbers[j]
          print(product)
        elif total > 2020:
          break
    else:
      break

def part_two():
  found = False

  for i in range(0, length):
    if not found:
      for j in range(i + 1, length):
        if not found:
          for k in range(j + 1, length):
            total = numbers[i] + numbers[j] + numbers[k]
            if total == 2020:
              product = numbers[i] * numbers[j] * numbers[k]
              print(product)
            elif total > 2020:
              break
        else:
          break
    else:
      break

part_one()
part_two()