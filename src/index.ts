import { layer, map, rule, simlayer, writeToProfile } from 'karabiner-config'

// Change 'Examples' to your Karabiner-Elements Profile name. Create a new profile if needed.
writeToProfile('Examples', [
  // It is not required, not recommended to put symbols alias to layers,
  // to make it easier to write '←' instead of 'left_arrow'.
  layer('/', 'symbols').manipulators([
    map(1).toPaste('⌘'),
    map(2).toPaste('⌥'),
    map(3).toPaste('⌃'),
    map(4).toPaste('⇧'),
    map(5).toPaste('⇪'),

    map('←').toPaste('←'),
    map('→').toPaste('→'),
    map('↑').toPaste('↑'),
    map('↓').toPaste('↓'),
    map('␣').toPaste('␣'),
    map('⏎').toPaste('⏎'),
    map('⇥').toPaste('⇥'),
    map('⎋').toPaste('⎋'),
    map('⌫').toPaste('⌫'),
    map('⌦').toPaste('⌦'),
    map('-').toPaste('⎽'),
    map('⇪').toPaste('⇪'),
  ]),

  // If you type fast, use simlayer instead, see https://github.com/yqrashawn/GokuRakuJoudo/blob/master/tutorial.md#simlayers
  simlayer('z', 'emoji').manipulators([
    map('m').toPaste('🔀'), // Merge branches
  ]),

  // In Karabiner-Elements a 'rule' is a group of manipulators.
  // layer() and simlayer() are extended rule().
  rule('Open App').manipulators([
    map('f', 'Meh').toApp('Finder'), // Shortcut for '$ open -a {app}.app'
  ]),
])
