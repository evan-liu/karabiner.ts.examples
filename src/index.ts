import {
  ifApp,
  ifVar,
  layer,
  map,
  rule,
  simlayer,
  writeToProfile,
} from 'karabiner-config'

// ! Change 'Examples' to your Karabiner-Elements Profile name.
// + Create a new profile if needed.
writeToProfile('Examples', [
  // It is not required, but recommended to put symbol alias to layers,
  // to make it easier to write '←' instead of 'left_arrow'.
  // Supported alias: https://github.com/evan-liu/karabiner.ts/blob/main/src/utils/key-alias.ts
  layer('/', 'symbol-mode').manipulators([
    map(1).toPaste('⌘'), // command
    map(2).toPaste('⌥'), // option
    map(3).toPaste('⌃'), // control
    map(4).toPaste('⇧'), // shift
    map(5).toPaste('⇪'), // caps_lock

    map('←').toPaste('←'), // left_arrow
    map('→').toPaste('→'), // right_arrow
    map('↑').toPaste('↑'), // up_arrow
    map('↓').toPaste('↓'), // down_arrow
    map('␣').toPaste('␣'), // spacebar
    map('⏎').toPaste('⏎'), // return_or_enter
    map('⇥').toPaste('⇥'), // tab
    map('⎋').toPaste('⎋'), // escape
    map('⌫').toPaste('⌫'), // delete_or_backspace
    map('⌦').toPaste('⌦'), // delete_forward
    map('⇪').toPaste('⇪'), // caps_lock
  ]),

  // If you type fast, use simlayer instead, see https://github.com/yqrashawn/GokuRakuJoudo/blob/master/tutorial.md#simlayers
  simlayer('z', 'emoji-mode').manipulators([
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
    // ⚠️ Note: Modifier alias (command|option|control|shift and ⌘⌥⌃⇧)
    //          can only be used as modifiers, but not as key_code
    map('right_command').toHyper(),
    map('⇪').toMeh().toIfAlone('⇪'),
    map('a', 'Hyper').to('b', 'Meh'),

    // Add optional modifiers after the mandatory modifiers. About optional modifiers:
    // https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/from/modifiers/#frommodifiersoptional
    map('a', '⌘', 'any').to('b'), // ⌘⇧a -> ⇧b
  ]),

  // Rules can have conditions which will be added to all manipulators.
  rule('Conditions', ifApp('^com.apple.finder$')).manipulators([
    // manipulators can also have multiple conditions
    // layer/simlayer are behind a 'variable_if' condition.
    // use unless() to switch {condition}_if to {condition}_unless
    map(0).to(1).condition(ifVar('vi-mode'), ifVar('stop').unless()),
  ]),

  // Optional parameters can be set when use
  // - from.simultaneous  - basic.simultaneous_threshold_milliseconds
  // - to_if_alone        - basic.to_if_alone_timeout_milliseconds
  // - to_if_held_down    - basic.to_if_held_down_threshold_milliseconds
  // - to_delayed_action  - basic.to_delayed_action_delay_milliseconds
  rule('Parameters').manipulators([
    map('left_option')
      .toIfAlone('r', '⌘')
      .parameters({ 'basic.to_if_alone_timeout_milliseconds': 500 }),
  ]),

  // There are some other useful abstractions over the json config.
  // [File an issue](https://github.com/evan-liu/karabiner.ts/issues) to suggest more.
  rule('Other abstractions').manipulators([
    // Move the mouse cursor to a position and (optionally) to a screen.
    map('↑', 'Meh').toMouseCursorPosition({ x: '100%', y: 0 }),
    map('→', 'Meh').toMouseCursorPosition({ x: '50%', y: '50%', screen: 1 }),
  ]),
])
