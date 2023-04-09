---
outline: deep
---

# usePageInfo

This hook, `usePageInfo`, is a utility function that extracts and processes specific information from the `LimeSpot.PageInfo` object. It returns an object containing two properties: `isCuratedCollection` and `hasType`.

1. `isCuratedCollection` is a boolean value that indicates if the current page is a curated collection or not. It checks if the `CuratedCollection` property exists in the `PageInfo` object.

2. `hasType` is a boolean value that checks if the `PageInfo` object has a valid `Type` property. A valid `Type` is considered to be any value other than 'Undetected' or an undefined/null value.

This hook is useful when you need to determine whether the current page is a curated collection and if it has a valid type, which can be used for conditional rendering or executing specific logic based on the page's characteristics.

## Usage
```js
const page = usePageInfo();

if (page.isCuratedCollection && page.hasType) {
    // do something
}
```