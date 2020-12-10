use strict;
use warnings;

use List::Util;

open(my $handler, '<:encoding(UTF-8)', 'input.txt')
  or die 'Could not open file';
$/ = undef;

my $data = <$handler>;
close($handler);

my @commands = split('\n', $data);

sub part_one {
  my $acc = 0;
  my $i = 0;
  my $continue = 1;
  my %visited = ();

  while ($continue) {
    my $key = "line::$i";
    if (exists($visited{$key})) {
      $continue = 0;
      next;
    } else {
      $visited{$key} = 1;
    }

    my ($cmd, $number) = $commands[$i] =~ m/([a-z]{3}) ([\+\-\d]+)/;
    
    if ($cmd eq 'acc') {
      $acc += $number;
    } elsif ($cmd eq 'jmp') {
      $i += $number;
      next;
    }

    $i++;
  }

  print($acc);
  print("\n");
}

sub run_commands {
  my @commands = @_; # named parameter time, none of this silly @_!!
  my $acc = 0;
  my $i = 0;
  my $commands_length = scalar(@commands);
  my $continue = 1;
  my %visited = ();
  my $finished_commands = 0;

  while ($continue) {
    my $key = "line::$i";
    if (exists($visited{$key})) {
      $continue = 0;
      next;
    } elsif ($i >= $commands_length) {
      $finished_commands = 1;
      $continue = 0;
      next;
    } else {
      $visited{$key} = 1;
    }

    my @match = $commands[$i] =~ m/([a-z]{3}) ([\+\-\d]+)/;
    my ($cmd, $number) = @match;
    
    if ($#match != -1) {
      if ($cmd eq 'acc') {
        $acc += $number;
      } elsif ($cmd eq 'jmp') {
        $i += $number;
        next;
      }
    }

    $i++;
  }

  if ($finished_commands) {
    return $acc;
  } else {
    return 0;
  }
}

sub part_two {
  # we only want to do this on iterations where we've hit 
  my @indexes = grep { $commands[$_] =~ m/[jmp|nop] [\+\-\d]+/ } 0..$#commands;
  my $acc = 0;

  foreach (@indexes) {
    # Clone the commands array so we can alter it
    my @cmds = @commands;
    my ($cmd) = $cmds[$_] =~ m/([a-z]{3}) [\+\-\d]+/;

    if ($cmd eq 'nop') {
      $cmds[$_] = 'jmp';
    } elsif ($cmd eq 'jmp') {
      $cmds[$_] = 'nop';
    }

    my $result = run_commands(@cmds);
    if ($result) {
      $acc = $result;
      last;
    }
    
  }

  print("$acc \n");
}

part_one();
part_two();
