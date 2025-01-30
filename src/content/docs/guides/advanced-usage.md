---
title: Advanced Usage
description: Advanced features and patterns in Praetor
sidebar:
  order: 4
---

## Context-Aware Rules

```typescript
interface Context {
    organization: string;
}

policy.rule('access', (actor, resource, context: Context) => {
    return actor.organizationId === context.organization;
});
```

## Multiple Rules

```typescript
// Both rules must pass
policy.rule('edit', (actor, resource) => actor.id === resource.ownerId);
policy.rule('edit', (actor, resource) => actor.isActive);
```

## Custom Resource Types

```typescript
interface Project {
    id: string;
    members: string[];
}

const ProjectPolicy = new Policy<User, Project>('project');
```