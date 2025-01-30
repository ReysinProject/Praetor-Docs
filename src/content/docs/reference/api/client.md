---
title: Client API Reference
description: Detailed documentation for the Client class
---

## Constructor

Creates a new Praetor client instance.

```typescript
constructor()
```

## Methods

### register

Registers a policy for a specific resource type.

```typescript
register<A, R>(resourceType: string, policy: Policy<A, R>): void
```

### allows

Checks if an action is allowed on a resource.

```typescript
allows<A, R>(
    resourceType: string, 
    action: string, 
    actor: A, 
    resource: R, 
    context?: any
): boolean
```