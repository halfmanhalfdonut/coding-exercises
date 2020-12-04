from pathlib import Path
from functools import reduce


lines = Path('input.txt').read_text().split('\n')

def part_one():
  max_x = len(lines[0])
  max_y = len(lines)
  x = 0
  y = 0
  seeking = True
  tree_count = 1 if lines[y][x] == '#' else 0

  while seeking:
    x += 3

    # Wrap back around if we've gone off the right side
    diff = x - max_x
    if diff >= 0:
      x = diff
    
    y += 1

    if y == max_y:
      seeking = False
    else:
      if lines[y][x] == '#':
        tree_count += 1
  
  print(f'Tree count {tree_count}')

def part_two():
  slopes = [
    { 'x': 1, 'y': 1 },
    { 'x': 3, 'y': 1 },
    { 'x': 5, 'y': 1 },
    { 'x': 7, 'y': 1 },
    { 'x': 1, 'y': 2 }
  ]
  tree_counts = []

  for slope in slopes:
    max_x = len(lines[0])
    max_y = len(lines)
    x = 0
    y = 0
    seeking = True
    tree_count = 1 if lines[y][x] == '#' else 0

    while seeking:
      x += slope['x']

      # Wrap back around if we've gone off the right side
      diff = x - max_x
      if diff >= 0:
        x = diff
      
      y += slope['y']

      if y >= max_y:
        seeking = False
      else:
        if lines[y][x] == '#':
          tree_count += 1
    
    tree_counts.append(tree_count)

  product = reduce(lambda a, b: a * b, tree_counts, 1)
  print(f'Total tree product {product}')

part_one()
part_two()
