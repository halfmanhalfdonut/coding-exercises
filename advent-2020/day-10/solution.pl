use strict;
use warnings;

open(my $handler, '<:encoding(UTF-8)', 'input.txt')
  or die 'Could not open file';
$/ = undef;

my $data = <$handler>;
close($handler);

my @adapters = split('\n', $data);

sub part_one {
  my $one_jolts = 0;
  my $three_jolts = 0;
  my $total = 0;

  my @sorted = sort { $a <=> $b } @adapters;

  for my $i (0..$#sorted) {
    for my $j (0 .. 2) {
      my $value = $sorted[$i + $j];
      if ($value - $total == 1) {
        $total = $value;
        $one_jolts++;
        last;
      } elsif ($value - $total == 3) {
        $total = $value;
        $three_jolts++;
        last;
      }
    }
  }

  if ($total > 0) {
    $three_jolts++;
  }

  print($one_jolts, " ", $three_jolts, "\n");
  print($one_jolts * $three_jolts, "\n");
}

sub part_two {
  my @sorted = sort { $a <=> $b } @adapters;
  push(@sorted, $sorted[-1] + 3); # add 3 to the final adapter to max it out

  # tribonacci time
  my %result = (0 => 1);
  foreach my $i (@sorted) {
    $result{$i} = $result{$i - 1} + $result{$i - 2} + $result{$i - 3};
  }

  my @keys = reverse sort { $a <=> $b } keys (%result);
  print("$result{$keys[0]} \n");
}

part_one();
part_two();
