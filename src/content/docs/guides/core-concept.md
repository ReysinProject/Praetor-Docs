---
title: Core Concepts
description: Understanding the fundamental concepts of Praetor
sidebar:
  order: 2
---

## Client

The `Client` class is the main entry point for Praetor. It manages policies and provides methods for checking permissions.

```typescript
const client = new Client();
```

## Policies

A `Policy` defines permission rules for a specific type of resource. Policies are generic and type-safe.

```typescript
const UserPolicy = new Policy<Actor, User>('user');
```

## Rules

Rules are functions that determine whether an action is allowed. They receive the actor, resource, and optional context.

```typescript
policy.rule('edit', (actor, resource, context) => {
    return actor.id === resource.ownerId;
});
```