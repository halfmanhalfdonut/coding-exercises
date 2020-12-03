use strict;
use warnings;

open(my $handler, '<:encoding(UTF-8)', 'input.txt')
  or die 'Could not open file';
$/ = undef;

my $data = <$handler>;
close($handler);

my @passwords = split('\n', $data);

sub part_one {
  my $valid_passwords = 0;

  foreach my $password (@passwords) {
    if ($password =~ m/(\d+)-(\d+)\s([a-zA-Z]):\s([a-zA-Z]+)/) {
      # $1 = minimum
      # $2 = maximum
      # $3 = letter to search for
      # $4 = string to search
      my $minimum = $1;
      my $maximum = $2;
      my $letter = $3;
      my $string = $4;
      my $matches = () = $string =~ /\Q$letter/g;
      
      if ($matches >= $minimum and $matches <= $maximum) {
        $valid_passwords++;
      }
    }
  }

  print("Valid passwords: $valid_passwords \n");
}

sub part_two {
  my $valid_passwords = 0;

  foreach my $password (@passwords) {
    if ($password =~ m/(\d+)-(\d+)\s([a-zA-Z]):\s([a-zA-Z]+)/) {
      # $1 = position one (one-indexed)
      # $2 = position two (one-indexed)
      # $3 = letter to search for
      # $4 = string to search
      my $positionA = $1 - 1;
      my $positionB = $2 - 1;
      my $letter = $3;
      my $string = $4;

      my $first_position = substr($string, $positionA, 1) eq $letter ? 1 : 0;
      my $second_position = substr($string, $positionB, 1) eq $letter ? 1 : 0;
      
      if ($first_position + $second_position == 1) {
        $valid_passwords++;
      }
    }
  }

  print("Valid passwords: $valid_passwords \n");
}


part_one();
part_two();
