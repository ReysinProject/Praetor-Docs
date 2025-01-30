---
title: Policy API Reference
description: Detailed documentation for the Policy class
---

## Constructor

Creates a new policy for a specific resource type.

```typescript
constructor(resourceType: string)
```

## Methods

### rule

Defines a new permission rule.

```typescript
rule(name: string, fn: RuleFunction<A, R>): void
```

### allows

Checks if an action is allowed.

```typescript
allows(action: string, actor: A, resource: R, context?: any): boolean
```

## Types

```typescript
type RuleFunction<A, R> = (actor: A, resource: R, context?: any) => boolean;
```
