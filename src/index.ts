import { layer, map, rule, simlayer, writeToProfile } from 'karabiner-config'

// ! Change 'Examples' to your Karabiner-Elements Profile name.
// + Create a new profile if needed.
writeToProfile('Examples', [
  // It is not required, but recommended to put symbols alias to layers,
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
  rule('Shell command').manipulators([
    // Use to$() to run a shell command
    map('⎋', 'Hyper').to$('rm -rf ~/wip'),
    // toApp() is shortcut for to$('open -a {app}.app')
    map('f', 'Meh').toApp('Finder'),
  ]),

  // There are multiple ways of using modifiers
  rule('Modifiers').manipulators([
    // You can use their key_code
    map('a', ['left_command', 'left_option']).to('b', ['fn']),
    // Or alias (easier to write if mapped to a layer)
    map('a', { left: '⌘⌥' }).to('b', 'fn'),
    // Or if it can be either left or right side:
    map('a', '⌘⌥').to('b', 'fn'),
    // 'Hyper' is ⌘⌥⌃⇧ and 'Meh' is ⌥⌃⇧
    map('a', 'Hyper').to('b', 'Meh'),
  ]),
])
