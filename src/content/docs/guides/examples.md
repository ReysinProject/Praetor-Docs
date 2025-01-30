---
title: Examples
description: Real-world examples of using Praetor
sidebar:
  order: 3
---

## Blog System

```typescript
interface User {
    id: string;
    role: 'admin' | 'editor' | 'author';
}

interface Post {
    id: string;
    authorId: string;
    status: 'draft' | 'published';
}

const PostPolicy = new Policy<User, Post>('post');

PostPolicy.rule('edit', (user, post) => {
    return user.id === post.authorId || user.role === 'admin';
});

PostPolicy.rule('publish', (user, post) => {
    return user.role === 'admin' || user.role === 'editor';
});
```

## Project Management

```typescript
interface Project {
    id: string;
    ownerId: string;
    members: string[];
}

const ProjectPolicy = new Policy<User, Project>('project');

ProjectPolicy.rule('manage', (user, project) => {
    return user.id === project.ownerId;
});

ProjectPolicy.rule('view', (user, project) => {
    return project.members.includes(user.id);
});
```