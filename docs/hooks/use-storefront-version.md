---
outline: deep
---

# useStorefrontVersion

This function, `useStorefrontVersion`, is a hook that retrieves the storefront version from either the session storage or module settings. It can be used to obtain the current storefront version and also provides access to the `StorefrontVersions` enum object.

```js
export const StorefrontVersions = {
  Liquidless: 3,
  VueJs: 4,
};
```

The function first checks if the `browserStorageVersion` exists in the session storage using the `browserStorage.getSessionStorageValue` function. If it exists, it sets the `usedVersion` to the `browserStorageVersion`. If not, it retrieves the `moduleStorefrontVersion` from the module settings using the `moduleSettings.getModule` function.

The `usedVersion` is then checked against the `StorefrontVersions` enum to determine the numeric value of the storefront version. If the `usedVersion` is not present in the enum, the default version is set to `StorefrontVersions.Liquidless`.

Finally, the function returns an object containing the `storefrontVersion` and `StorefrontVersions` enum, which can be used in other parts of the application to determine the current storefront version and its available options.

## Usage
```js
const { storefrontVersion, StorefrontVersions } = useStorefrontVersion()

if (storefrontVersion > StorefrontVersions.Liquidless) {
  // do something
}
```
