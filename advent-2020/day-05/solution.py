import re
from pathlib import Path


input = Path('input.txt').read_text()
instruction_list = input.split('\n')

def determine(instructions, total, lower_bound, upper_bound):
  if total == 1:
    return lower_bound
  
  total = total // 2
  instruction = instructions[0]

  if instruction == 'F' or instruction == 'L':
    upper_bound = upper_bound - total
  elif instruction == 'B' or instruction == 'R':
    lower_bound = lower_bound + total

  return determine(instructions[1:], total, lower_bound, upper_bound)

def part_one():
  TOTAL_ROWS = 128
  TOTAL_COLS = 8
  parser = re.compile('([FB]+)([LR]+)')
  seat_ids = []

  for instructions in instruction_list:
    matches = parser.match(instructions)
    rows = matches.group(1)
    columns = matches.group(2)
    
    row = determine(rows, TOTAL_ROWS, 0, TOTAL_ROWS - 1)
    column = determine(columns, TOTAL_COLS, 0, TOTAL_COLS - 1)
    seat_ids.append(row * 8 + column)

  seat_ids.sort(reverse=True)
  print(f'Seat ID: {seat_ids[0]}')

def part_two():
  TOTAL_ROWS = 128
  TOTAL_COLS = 8
  parser = re.compile('([FB]+)([LR]+)')
  seat_ids = []

  for instructions in instruction_list:
    matches = parser.match(instructions)
    rows = matches.group(1)
    columns = matches.group(2)
    
    row = determine(rows, TOTAL_ROWS, 0, TOTAL_ROWS - 1)
    column = determine(columns, TOTAL_COLS, 0, TOTAL_COLS - 1)
    seat_ids.append(row * 8 + column)

  seat_ids.sort()

  previous_id = -1
  for i in range(0, len(seat_ids)):
    current_id = seat_ids[i]
    next_id = seat_ids[i + 1] if i + 1 < len(seat_ids) else 0
    if next_id - current_id == 2:
      previous_id = current_id
      break

  print(f'Seat ID: {previous_id + 1}')

part_one()
part_two()
