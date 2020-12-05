use strict;
use warnings;

open(my $handler, '<:encoding(UTF-8)', 'input.txt')
  or die 'Could not open file';
$/ = undef;

my $data = <$handler>;
close($handler);

my @candidates = split('\n\n', $data);

sub part_one {
  my $good_passports_total = 0;
  my %required_keys = ('byr', 1, 'iyr', 1, 'eyr', 1, 'hgt', 1 ,'hcl', 1, 'ecl', 1, 'pid', 1);

  foreach my $candidate (@candidates) {
    $candidate =~ s/\n/ /g;
    my @matches = $candidate =~ m/([a-z]+):([a-zA-Z0-9#]+)/g;
    my %passport = @matches;

    my @missing_keys = ();
    foreach my $key (keys %required_keys) {
      push(@missing_keys, $key) unless exists $passport{$key};
    }
    $good_passports_total += scalar(@missing_keys) == 0;
  }

  print("Good passports: $good_passports_total \n");
}

sub part_two {
  my $good_passports_total = 0;
  my %required_keys = (
    'byr', qr/^(200[0-2]|19[2-9][0-9])$/,
    'iyr', qr/^(201[0-9]|2020)$/,
    'eyr', qr/^(202[0-9]|2030)$/,
    'hgt', qr/^(1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in)$/,
    'hcl', qr/^(#[0-9a-f]{6})$/,
    'ecl', qr/^(amb|blu|brn|gry|grn|hzl|oth)$/,
    'pid', qr/^([0-9]{9})$/
  );

  foreach my $candidate (@candidates) {
    $candidate =~ s/\n/ /g;
    my @matches = $candidate =~ m/([a-z]+):([a-zA-Z0-9#]+)/g;
    my %passport = @matches;

    my @missing_keys = ();
    foreach my $key (keys %required_keys) {
      if ($passport{$key}) {
        my @validation = $passport{$key} =~ $required_keys{$key};
        push(@missing_keys, $key) unless scalar(@validation) >= 1;
      } else {
        push(@missing_keys, $key);
      }
    }
    $good_passports_total += scalar(@missing_keys) == 0;
  }

  print("Good passports: $good_passports_total \n");
}

part_one();
part_two();
