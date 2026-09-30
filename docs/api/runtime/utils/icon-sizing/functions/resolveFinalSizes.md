[nuxt-compose-icons](../../../../modules.md) / [runtime/utils/icon-sizing](../index.md) / resolveFinalSizes

# Function: resolveFinalSizes()

```ts
function resolveFinalSizes(iconSizes?): Record<string, string>;
```

Defined in: [runtime/utils/icon-sizing.ts:54](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/runtime/utils/icon-sizing.ts#L54)

Resolves the project's final size scale, shared by codegen's `size` prop default, the
generated CSS, and the runtime fallback so all three agree on the same map.

`iconSizes`, when given, fully replaces the defaults rather than merging with them — it's
your whole scale, not a patch. Only omitting it entirely applies the built-in sm/md/lg/xl.

Result is ordered by real (parsed) size, ascending, rather than declaration order — a size
picker iterating `Object.keys()` would otherwise render non-monotonically. Unparseable values
(CSS vars, `clamp()`, tokens) keep their original relative position instead.

## Parameters

### iconSizes?

[`ComposeIconSize`](../../../types/type-aliases/ComposeIconSize.md)

## Returns

`Record`\<`string`, `string`\>
