use strict;
use warnings;

use List::Util qw(sum);
use List::Util qw(min);
use List::Util qw(max);

open(my $handler, '<:encoding(UTF-8)', 'input.txt')
  or die 'Could not open file';
$/ = undef;

my $data = <$handler>;
close($handler);

my @numbers = split('\n', $data);

sub has_sum {
  my $target = $_[0];
  my $aref = $_[1];

  my $a = 0;
  my $b = scalar(@$aref) - 1;
  my $result = 0;

  while ($a < $b) {
    my $sum = $aref->[$a] + $aref->[$b];
    if ($sum == $target) {
      $result = 1;
      last;
    } elsif ($sum > $target) {
      $b -= 1;
    } else {
      $a += 1;
    }
  }

  return $result;
}

sub part_one {
  my $target = 0;
  for my $i (24 .. $#numbers) {
    $target = $numbers[$i + 1];

    # grab the next segment and sort them for faster adding
    my @segment = sort { $a <=> $b } @numbers[$i - 24 .. $i];

    # Go until we don't find one with two numbers adding up to it
    if (not has_sum($target, \@segment)) {
      last;
    }
  }

  print("$target \n");
  return $target;
}

sub part_two {
  my $target = $_[0];
  my $result = 0;
  my $found = 0;

  my $start = 0;
  my $end = 1;
  my $sum = $numbers[$start] + $numbers[$end];

  while ($sum != $target and $end < $#numbers) {
    $end++;
    $sum += $numbers[$end];

    while ($sum > $target and $end - $start > 1) {
      $sum -= $numbers[$start];
      $start++;
    }
  }

  my @segment = @numbers[$start .. $end];
  $result = min(@segment) + max(@segment);

  print("$result\n");
}

my $next = part_one();
part_two($next);
