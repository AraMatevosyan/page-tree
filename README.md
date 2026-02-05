# Page Tree Editor

Interactive page tree editor with nested pages and draggable blocks, built with React, TypeScript, Vite, and Redux Toolkit.

## Live Demo

- Deployed app: [Vercel](https://page-tree-six.vercel.app/)

## Features

- Nested page hierarchy with expand and collapse controls
- Inline title editing for pages and blocks
- Drag and drop blocks between pages
- Add and delete pages and blocks

## Tech Stack

- React + TypeScript
- Vite
- Redux Toolkit
- SCSS modules

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    FlowCanvas/
    Page/
    PageColumn/
    Controls/
    Common/
  store/
    slices/pageSlice/
```

## Notes

- The page tree is stored in Redux and initialized with sample data in `src/store/slices/pageSlice/initialState.ts`.
- Drag and drop uses the native HTML5 DnD API.

