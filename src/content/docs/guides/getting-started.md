---
title: Getting Started
description: Learn how to install and start using Praetor in your TypeScript project
sidebar:
  order: 1
---

## Installation

Install Praetor using npm or yarn:

```bash
npm install praetor
# or
yarn add praetor
```

## Basic Usage

Here's a simple example to get you started:

```typescript
import { Client, Policy } from 'praetor';

// Initialize the client
const client = new Client();

// Create a policy for resources
const ResourcePolicy = new Policy<User, Resource>('resource');

// Define a permission rule
ResourcePolicy.rule('edit', (actor, resource) => {
    return actor.id === resource.ownerId || actor.role === 'admin';
});

// Register the policy
client.register('resource', ResourcePolicy);

// Check permissions
const canEdit = client.allows('resource', 'edit', user, resource);
```

## Next Steps

- Learn about [Core Concepts](/guides/core-concepts/)
- Explore [Advanced Usage](/guides/advanced-usage/)
- Check the [API Reference](/reference/api/)
