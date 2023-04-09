---
outline: deep
---

# useRules

The useRules hook provides a way to manage and apply a set of rules to a given element. It allows adding custom rules with corresponding messages, checks if an element passes all the specified rules, and maintains a list of excluded elements that did not pass the rules for debugging purposes.

## Usage
```js
const { addRule, passesRules } = useRules();

// Each rule has to return 'true' to pass
addRule(
  'Item is enabled', // any description to track the rule
  (item) => {
    // whatever other filtering logic you like to add
    return item.enabled;
  }
);

addRule(
  'Item is green',
  (item) => {
    // whatever other filtering logic you like to add
    return item.type === 'green';
  }
);

const getItems = () => {
  const items = [
    { enabled: true, type: 'green' },
    { enabled: true, type: 'green' },
    { enabled: true, type: 'green' },
    { enabled: false, type: 'blue' }, // this item will not pass
  ]

  return items.filter((item) => passesRules(item));
};
```