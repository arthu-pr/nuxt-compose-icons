# Motivation

Icon components should be easy to use, style, and maintain.

Existing solutions often force trade-offs between DX, accessibility, and flexibility (See [Common Approaches](/guide/concept#common-approaches)):

1. **Third-party libraries** → limited customization
2. **Manual Vue components** → repetitive and hard to scale
3. **SVG loaders** → flexible but lack structure and typing

The goal of this module is to propose a balanced approach which gives design flexibility and developer experience.

The aim is to combine the control and quality of hand-authored components with the scalability and consistency of a build tool.

## Example

An SVG file like this:

:::code-group

```xml [user-badge.svg]
<!-- viewBox and other attributes as usual -->
<svg viewBox="0 0 24 24">
  <path d="..." fill="#000" stroke="#fff" stroke-width="2" />
</svg>
```

:::

**will generate:**

:::code-group

```vue [UserBadgeIcon.vue]
<template>
  <svg viewBox="0 0 24 24" class="my-custom-icon-class compose-icon size-lg">
    <path
      d="..."
      fill="var(--icon-fill, #000)"
      stroke="var(--icon-stroke, #fff)"
      stroke-width="var(--icon-stroke-width, 2)"
    />
  </svg>
</template>
```

:::

This provides a balance of control, flexibility, and developer experience, tailored for projects using custom icons or building design systems.
