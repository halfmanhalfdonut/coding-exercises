use strict;
use warnings;

open(my $handler, '<:encoding(UTF-8)', 'input.txt')
  or die 'Could not open file';
$/ = undef;

my $data = <$handler>;
close($handler);

my @groups = split('\n\n', $data);

sub part_one {
  my $total = 0;

  for my $group (@groups) {
    my %yeas = ();
    my @lines = split('\n', $group);

    for my $line (@lines) {
      for my $character (split(//, $line)) {

        $yeas{$character} = exists $yeas{$character} ? $yeas{$character} + 1 : 1;
      }
    }

    $total += scalar(%yeas);
  }

  print("Total: $total \n");
}

sub part_two {
  my $total = 0;

  for my $group (@groups) {
    my %yeas = ();
    my @lines = split('\n', $group);

    my $group_total = scalar(@lines);
    my $verify_total = $group_total > 1;

    for my $line (@lines) {
      for my $character (split(//, $line)) {
        $yeas{$character} = exists $yeas{$character} ? $yeas{$character} + 1 : 1;
      }
    }

    if ($verify_total) {
      while (my ($key, $value) = each(%yeas)) {
        if ($value != $group_total) {
          delete($yeas{$key});
        }
      }
    }

    $total += scalar(%yeas);
  }

  print("Total: $total \n");
}

part_one();
part_two();
